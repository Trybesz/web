import { useState, useEffect, useRef } from 'react';

export default function useVisible(initState) {
    const [isVisible, setVisible] = useState(initState || false);
    const ref = useRef(null);

    const documentClick = (e) => {
        if (ref.current && !ref.current.contains(e.target)) {
            setVisible(false);
        }
    };

    const keyClick = (e) => {
        if (e.key === 'Escape') {
            setVisible(false);
        }
    };

    useEffect(() => {
        ['click', 'touchstart'].forEach((e) => document.addEventListener(e, documentClick, true));
        document.addEventListener('keydown', keyClick, true);

        return () => {
            ['click', 'touchstart'].forEach((e) => document.removeEventListener(e, documentClick, true));
            document.removeEventListener('keydown', keyClick, true);
        };
    });

    return { ref, isVisible, setVisible };
}
