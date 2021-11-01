import { useState, useEffect } from 'react';

const useInfiniteScroll = (callback, threshold = 0) => {
    const [isFetching, setIsFetching] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
        if (!isFetching) return;
        callback();
    }, [isFetching]); // eslint-disable-line react-hooks/exhaustive-deps

    function handleScroll() {
        const doc = document.documentElement;

        if (window.innerHeight + doc.scrollTop + threshold <= doc.offsetHeight || isFetching) return;
        setIsFetching(true);
    }

    return [isFetching, setIsFetching];
};

export default useInfiniteScroll;
