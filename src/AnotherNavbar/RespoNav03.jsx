import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaBars } from 'react-icons/fa6'
import { RxCross2 } from "react-icons/rx";

const RespoNav03 = () => {

    return (
        <div className=''>

            <nav className='fixed top-0 left-0 w-full bg-white/25 backdrop-blur-lg'>
                <div className='container mx-auto px-4 py-4 flex justify-between items-center text-black   '>
                    <div className='p-1'>
                        <h1 className='text-4xl font-medium'> MyNavbar </h1>
                    </div>
                    <MenuOptions />
                </div>
            </nav >

             <div className='pt-[200px] h-screen flex flex-col p-10 gap-4'>
                <h1 className='text-6xl font-bold text-white/15'> Nice to see you </h1> 
                <p className='text-lg  w-[450px] font-light'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, neque. A, quasi fugiat eaque sint quidem eveniet eum asperiores laborum delectus atque voluptatum, voluptas ratione cum doloribus autem accusantium? Temporibus!</p>
             </div>

           


            <div className='h-screen '></div>
            <div className='h-screen '></div>
            <div className='h-screen '></div>
            <div className='h-screen '></div>
            

        </div>

    )
}

export default RespoNav03


const MenuOptions = () => {

    const [isOpen, setIsopen] = useState(false)

    return (<>
        <FaBars className='text-2xl block md:hidden' onClick={() => setIsopen(true)} />

        <div className={`flex flex-col md:space-x-8 p-1 md:flex-row md:w-fit md:h-fit md:static items-center justify-center  gap-y-10 w-full h-[100vh] transition-all ease-linear origin-center 
         ${isOpen ? "absolute left-0 top-0 bg-white " : "absolute left-0 top-[100vh]"} `} >

            <RxCross2 className='text-4xl font-medium md:hidden text-red-500' onClick={() => {
                setIsopen(false)
            }} />

            {['Home', 'About', 'Project', 'Contact'].map((item, i) => (

                <AnimatePresence>
                    <motion.a
                        href=''
                        key={i}
                        className='px-3 py-1 rounded text-base  text-black  '
                        initial={!isOpen ? { x: 0, y: 120, opacity: 0, scale: .7 } : { x: 0, y: 0, opacity: 1, scale: 1 }}
                        whileInView={isOpen ?
                            {
                                opacity: 1, scale: 1, y: 0, x: 0, transition: {
                                    duration: .25, type: 'spring', stiffness: 100, damping: 10, delay: i * 0.2
                                }
                            } : {
                                opacity: 1, scale: 1, y: 0, x: 0, transition: {
                                    delay: 0, duration: 0, type: 'spring', stiffness: 0, damping: 0
                                }
                            }}
                    >
                        {item}
                    </motion.a>
                </AnimatePresence>
            ))}
        </div >
    </>
    )

}


