import React, { useState } from 'react';
import { motion } from 'framer-motion';

const RespoNav04 = () => {

    return (
        <>
            
                <nav className='fixed top-0 left-0 w-full bg-white/30   backdrop-blur-lg'>
                    <div className='container mx-auto px-4 py-4 flex justify-between items-center text-black'>
                        <div className='p-1'>
                            <h1 className='text-4xl font-medium text-green-500'> Rr. </h1>
                        </div>

                        
                            <NavbarMenu />
                        

                    </div>
                </nav >
            
        </>
    )
}

export default RespoNav04;



const NavbarMenu = () => {
    const [isOpen, setIsOpen] = useState(false);


    const handleToggle = () => {

        if (isOpen === false) {
            setIsOpen(true);
        } else {
            setIsOpen(false)
        }

    };

    return (
        <>
            <motion.div
                className="md:hidden relative w-12 h-12  flex items-center justify-center cursor-pointer"
                onClick={handleToggle}
                initial={false}
                animate={isOpen ? "open" : "closed"}
            >
                {/* Top Line */}
                <motion.span
                    className="absolute w-8 h-[2px] bg-red-500"
                    variants={{
                        closed: { rotate: 0, y: -6, rotateY: 0 },
                        open: { rotate: 45, y: 0, rotateY: 180 },
                    }}
                    transition={{ duration: 0.5 }}
                />
                {/* Bottom Line */}
                <motion.span
                    className="absolute w-8 h-[2px] bg-red-500"
                    variants={{
                        closed: { rotate: 0, y: 6, rotateY: 0 },
                        open: { rotate: -45, y: 0, rotateY: 180 },
                    }}
                    transition={{ duration: 0.5 }}
                />
            </motion.div>

            <motion.div className={`p-2 space-x-0 md:space-x-5 flex md:flex-row flex-col md:w-fit md:h-fit w-[100vw] h-[100vh] md:static justify-center -z-20 md:opacity-100 opacity-0  text-white
            ${isOpen ? "fixed left-0 bg-white text-black" : "absolute left-0 "} `}
                initial={ { top: 0 , left: 0} }
                whileInView={isOpen ? { 
                    opacity: 1, top: 0, left: 0, color: 'black'
                } : { top: '20vh',left: 0, }}
                transition={{ type: 'spring', stiffness: 100, damping: 12 }}
            >
                {['Home', 'About', 'Project', 'Contact'].map((item, i) => (
                    <a href='' className='text-3xl md:text-lg font-extralight md:font-normal
                    px-3'> {item} </a>
                ))}
            </motion.div>
        </>
    );
};

