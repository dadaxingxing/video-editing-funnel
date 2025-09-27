import { useEffect } from "react";

export function useViewportHeight() {
    useEffect(() => {
        const setVh = () => {
            const vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty('--vh', `${vh}px`);
        };

        setVh();

        let resizeTimeout;
        const handleResize = () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(setVh, 200);
        };

        window.addEventListener('resize', setVh);

        return () => {
            window.removeEventListener('resize', setVh);
        }
    }, []);
};

