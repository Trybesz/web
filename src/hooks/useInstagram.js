import { useState, useEffect } from 'react';

import { instagram } from 'utils/instagram';

/**
 * Helper hook to parse Instagram Embed code from dynamic components.
 *
 * @param {[]} depArray Must be static (same as for useEffect dependencies array).
 *
 * @example
 * const videoRef = useInstagram();
 * return <div ref={videoRef} dangerouslySetInnerHTML={{ __html: embed }} />;
 */
export default function useInstagram(depArray = []) {
    // can't useRef because of dependency array in useEffect
    const [node, setNode] = useState();

    useEffect(() => {
        (async () => {
            const instgrm = await instagram();
            // TODO: any way to process just this node instead of all of them?
            instgrm.Embeds.process();
        })();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [node, ...depArray]);

    return setNode;
}
