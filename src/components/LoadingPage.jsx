import { useEffect } from 'react';
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

function LoadingPage () {
    const count = useMotionValue(0);
    const rounded = useTransform(count, Math.round);

    useEffect(() => {
        const animation = animate(count, 100, { duration: 3 });
    
        return animation.stop;
      }, []);

    return (
        <>
            <div className='loading-page'>
                <motion.h1>{rounded}</motion.h1>
                <div className='loading-bar'></div>
            </div>
        </>
    )
}

export default LoadingPage;