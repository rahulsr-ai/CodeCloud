import React from 'react'

import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { MdDownloadDone } from "react-icons/md";


const HeroSection = () => {



    return (<>



        <div className=' h-screen w-full relative flex   '>

            <div className=' w-full bg-green-800 relative text-white  
                flex items-center justify-start '>


                <div className='px-20 flex gap-4 p-2'>

                    <div className=' w-[50%] p-2 content-center  text-white flex flex-col justify-around 
                    text-base font-light '
                    > 

                        <h1 className='text-4xl font-bold'> Hey Raka Here </h1>
                        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio ex perspiciatis porro error magnam quisquam quidem reprehenderit eum, dignissimos temporibus, quo, quam maxime. Asperiores ullam dolorum dolorem earum, quasi deleniti?</p>

                        <div className='space-x-5 space-y-3 text-base font-light text-black' >
                            <button className='px-3 py-1 bg-stone-200  rounded-md' >  Copy </button>
                            <button className='px-3 py-1 bg-green-500  rounded-md' >  Paste </button>
                        </div>

                    </div>


                    <div className='w-[20%] bg-green-500 rounded-full '>
                        <img src="/src/LOGO/RSR_cube_logo-removebg-preview.png" alt=""
                            className='object-contain' />
                    </div>

                </div>



            </div>


            <div className='bg-green-700 opacity-90 text-white h-full p-4 flex flex-col 
                  justify-center gap-4 text-2xl'>
                <FaXTwitter className='my-4' />
                <FaLinkedin className='my-4' />
                <FaWhatsapp className='my-4' />
                <FaGithub className='my-4' />
            </div>



        </div>










    </>
    )
}

export default HeroSection