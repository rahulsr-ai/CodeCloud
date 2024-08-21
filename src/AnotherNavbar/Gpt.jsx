
import React, { useState } from 'react';
import { motion } from 'framer-motion';


const Gpt = () => {


    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };



    return (
        <div className='space-x-7 space-y-9'>
            <button onClick={toggleVisibility}>
                {isVisible ? 'Hide' : 'Show'} Component
            </button>

            <motion.div
                initial={{
                    opacity: isVisible ? 0 : 1,
                    scale: isVisible ? 0.6 : 1,
                    y: isVisible ? 100 : 0
                }}

                animate={{
                    y: isVisible ? -200 : 100,
                    opacity: isVisible ? 1 : 1,
                    scale: 1
                }}

                transition={{ duration: 1 }} // Transition settings
            >
                <div style={{ width: 100, height: 100, border: '2px solid black' }} />
            </motion.div>
        </div>
    );
};





export default Gpt;