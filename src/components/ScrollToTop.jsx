import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        // Delay scroll until DOM is ready (in case of Framer Motion exit animation)
        const timeout = setTimeout(() => {
            window.scrollTo({ top: 0, behavior: 'instant' }); // or 'smooth'
        }, 300); // match your exit animation duration (e.g. 300ms)

        return () => clearTimeout(timeout);
    }, [pathname]);

    return null;
};

export default ScrollToTop;
