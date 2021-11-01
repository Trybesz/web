import { useState, useEffect } from 'react';
import _debounce from 'lodash/debounce';
import moment from 'moment';

import { fb } from 'utils/facebook';
import useError from './useError';

/**
 * Higher-order function that creates retriable version of original function.
 *
 * @param {function} fn Must be callback-style function (accepts some args and cb as last arg).
 *
 * @example
 * const canBeRetried = retriable(fn, { wait: 100 });
 * // whateverArg is passed to fn
 * canBeRetried(whateverArg, (retry) => {
 *   if (cond) {
 *     return retry();
 *   }
 *   // success
 * })
 */
function retriable(fn, { wait = 100, timeout = 60000, onTimeout = null } = {}) {
    return (...args) => {
        const timeStarted = moment();
        const origCb = args[args.length - 1];
        const retry = _debounce(() => {
            if (timeout != null) {
                const timeCurrent = moment();
                const msecDifference = timeCurrent - timeStarted;
                if (msecDifference >= timeout) {
                    const err = new Error('timeout');
                    if (onTimeout) {
                        onTimeout(err);
                        return;
                    }
                    throw err;
                }
            }
            return fn(...args);
        }, wait);
        const cb = () => origCb(retry);
        args[args.length - 1] = cb;
        retry();
    };
}

/**
 * Waits until `cond` is true.
 * If timeout and `onTimeout` is provided, call `onTimeout` and resolve success.
 * If timeout and `onTimeout` is not provided`, reject error.
 */
function waitUntil(cond, { onTimeout, ...opts } = {}) {
    return new Promise((resolve, reject) => {
        const retriableCheck = retriable((fn) => fn(), {
            ...opts,
            onTimeout: onTimeout
                ? (err) => {
                      onTimeout(err);
                      resolve();
                  }
                : reject,
        });

        retriableCheck((retry) => {
            if (!cond()) {
                return retry();
            }
            resolve();
        });
    });
}

function waitUntilEvent(element, event, { isAborted = () => false, ...opts } = {}) {
    return new Promise((resolve, reject) => {
        let finished = false;
        const done = (fn) => (...args) => {
            if (finished) return;
            finished = true;
            cleanup();
            fn(...args);
        };
        const success = done(resolve);
        const failure = done(reject);
        const cleanup = () => element.removeEventListener(event, success);
        element.addEventListener(event, success);

        waitUntil(() => isAborted() || finished, opts).then(success, failure);
    });
}

/**
 * Helper hook to parse XFBML from dynamic components.
 *
 * @param {function} cb Called when XFBML is parsed and rendered.
 * @param {[]} depArray Must be static (same as for useEffect dependencies array).
 *
 * @example
 * const videoRef = useFacebook(cb, [url]);
 * return <div ref={videoRef} className='fb-video' />;
 */
export default function useFacebook(cb, depArray = []) {
    // can't useRef because of dependency array in useEffect
    const [node, setNode] = useState();
    const { onError } = useError();
    const onTimeout = () => onError('Timeout while adding facebook iframe.');

    useEffect(() => {
        let aborted = false;
        (async () => {
            const FB = await fb();
            if (!node) return;

            const retriableParse = retriable(FB.XFBML.parse.bind(FB.XFBML), { wait: 100, timeout: 60000, onTimeout });

            // HACK: if parse just `node`, sometimes it doesn't get parsed.
            // not sure what is the problem, maybe it remembers that this particular node
            // was already parsed.
            // // retriableParse(node, async (retry) => {
            retriableParse(undefined, async (retry) => {
                if (aborted) return;

                // TODO: DOM hook instead of polling?
                // waiting for iframe to appear
                const iframe = node.querySelector('iframe');
                if (!iframe) {
                    return retry();
                }

                // hide it until it is loaded
                iframe.style.display = 'none';

                iframe.allow = 'autoplay; encrypted-media';
                // iframe.sandbox = 'allow-same-origin allow-scripts';

                // forcing reload with sandbox rules
                // eslint-disable-next-line no-self-assign
                iframe.src = iframe.src;

                await Promise.all([
                    waitUntil(() => aborted || iframe.style.height, {
                        wait: 100,
                        timeout: 60000,
                        onTimeout,
                    }),
                    waitUntilEvent(iframe, 'load', {
                        isAborted: () => aborted,
                        wait: 100,
                        timeout: 60000,
                        onTimeout,
                    }),
                ]);
                if (aborted) return;

                iframe.style.display = 'unset';

                await waitUntil(() => aborted || iframe.style.height !== '0px', {
                    wait: 100,
                    timeout: 60000,
                    onTimeout,
                });
                if (aborted) return;
                cb();
            });
        })();
        return () => {
            aborted = true;
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [node, ...depArray]);

    return setNode;
}
