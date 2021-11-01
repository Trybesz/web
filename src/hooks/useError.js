import { useState } from 'react';

/**
 * Helper hook to re-throw errors from callbacks and other places which are not covered by ErrorBoundary.
 *
 * @example
 * const onError = useError();
 * return <source onError={onError} ... />
 */
export default function useError(initError = null, { throws = true } = {}) {
    const [logged, setLogged] = useState(false);
    const [error, setError] = useState(initError);

    if (error) {
        if (throws) {
            throw new Error(error);
        } else if (!logged) {
            // TODO: fix console error
            // eslint-disable-next-line no-console
            console.error(error);
            setLogged(true);
        }
    }

    return {
        error,
        onError: (reason = 'Something went wrong') => {
            setLogged(false);
            setError(reason);
        },
    };
}
