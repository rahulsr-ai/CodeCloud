
import React, { useState } from 'react'
import { IoIosArrowUp } from "react-icons/io";



import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { MdDownloadDone } from "react-icons/md";

import { motion } from 'framer-motion';

const RespoNav02 = () => {

    const [open, setopen] = useState(false)


    return (
        <main className='bg-green-400 h-screen'>


            <div className='fixed w-full bg-green-500    '>

                <section className='hidden sm:flex justify-between items-center text-center px-8 py-2 bg-red-600'>

                    <div>
                        <h2> Logo  </h2>
                    </div>

                    <div className='space-x-9 p-2'>
                        <a href='' className='border px-2 py-0.5' > Home </a>
                        <a href='' className='border px-2 py-0.5' > Project </a>
                        <a href='' className='border px-2 py-0.5' > About </a>
                        <a href='' className='border px-2 py-0.5' > Contact </a>
                    </div>

                </section>



                <div className='flex items-center sm:hidden justify-center gap-7  bg-red-600 p-3 '>
                    <FaTwitter />
                    <FaGithub />
                    <FaWhatsapp />
                    <FaLinkedin />
                </div>

            </div>





            <nav className={`fixed border w-full bg-green-500  bottom-0 
       flex flex-col items-center ${open ? "h-[310px]" : "h-[40px]"}  transition-all duration-300  
       ease-linear justify-center sm:hidden `}>



                <div className={`text-3xl font-bold border transition-all duration-300 ease-linear 
             ${open ? "rotate-180" : "rotate-0"} `}
                    onClick={() => setopen(!open)}>
                    <IoIosArrowUp />
                </div>


                <div className={`bg-rose-700 border w-full text-white text-sm  
              ease-linear transition-all text-center flex flex-col items-center gap-4
                ${open ? "h-[300px] py-9  " : "h-[0px] opacity-0 "}`}>

                    {/* <div className='flex flex-col gap-2 text-center px-8 py-2 border'> */}
                    <a href='' className='border  px-6 py-0.5 bg-red-600 ' > Home  </a>
                    <a href='' className='border  px-6 py-0.5 bg-red-600 ' > Project  </a>
                    <a href='' className='border  px-6 py-0.5 bg-red-600 ' > Contact  </a>
                    <button className='bg-green-400 px-3 py-1 rounded mt-2'> CV </button>
                    {/* </div> */}


                </div>


            </nav>


        </main>
    )
}

export default RespoNav02