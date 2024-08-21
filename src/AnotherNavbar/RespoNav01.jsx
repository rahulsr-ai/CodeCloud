import React, { useState } from 'react'

import { motion } from 'framer-motion'

const RespoNav01 = () => {

    const [isOpen, setIsopen] = useState(true)

    return (<>
        <header className='bg-black h-screen'>
            <nav className='flex items-center justify-between  px-10 py-4 bg-zinc-900 
        text-white fixed w-full '>

                <div>
                    <h1 className='text-3xl font-medium '> Logo  </h1>
                </div>

                <div className={`top-[71px] md:static  md:w-fit md:h-fit h-screen w-full flex md:flex-row gap-8  transition-all duration-300 flex-col md:p-4 px-44 justify-start py-14
                ${isOpen ? "left-[100%] absolute " : "left-0 absolute  bg-zinc-700   "}     
                    `} >

                    <a href='' className='border px-3 py-1 text-center md:rounded-md' > Home  </a>
                    <a href='' className='border px-3 py-1 text-center md:rounded-md' > Home  </a>
                    <a href='' className='border px-3 py-1 text-center md:rounded-md' > Home  </a>
                    <a href='' className='border px-3 py-1 text-center md:rounded-md' > Home  </a>

                </div>

                <ul className='flex flex-col gap-1 p-3 items-center justify-center  md:hidden '
                    onClick={() => setIsopen(!isOpen)}
                >

                    <motion.li className='bg-white h-[2px] w-5'
                        animate={!isOpen ? { rotate: -50, x: '2px', y: 5, backgroundColor: 'red' } : { rotate: 0 }}
                        transition={{ duration: .4, ease: 'backInOut' }}
                    />


                    <motion.li className='bg-white h-[2px] w-5'
                        animate={!isOpen ? { rotate: 52, x: '2px', y: -1, backgroundColor: 'red', } : { rotate: 0 }}
                        transition={{ duration: .4, ease: 'backInOut' }}
                    />

                    <motion.li className='bg-white h-[2px] w-5'
                        animate={!isOpen ? { rotate: 53, y: -7, opacity: 0, } : { rotate: 0 }}
                    />


                </ul>


            </nav>
        </header>
    </>
    )
}

export default RespoNav01