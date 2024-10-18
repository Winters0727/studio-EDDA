import { useState, useEffect, useRef } from 'react';

const useIntersectionObserver = (threshold: number = 0.1) => {
    const [entries, setEntries] = useState<{ [key: string]: boolean }>({});
    const targetRefs = useRef<Array<HTMLDivElement | null>>([]);

    useEffect(() => {
        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setEntries(prevEntries => ({
                        ...prevEntries,
                        [entry.target.id]: true,
                    }));
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, {
            root: null, // 뷰포트 기준
            threshold, // 인자로 받은 threshold 값 사용
        });

        const currentRefs = targetRefs.current;

        if (currentRefs.length) {
            currentRefs.forEach((ref) => {
                if (ref) observer.observe(ref);
            });
        }

        return () => {
            if (currentRefs.length) {
                currentRefs.forEach((ref) => {
                    if (ref) observer.unobserve(ref);
                });
            }
        };
    }, [threshold]);

    return { targetRefs, entries };
};

export default useIntersectionObserver;
