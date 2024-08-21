import React from 'react'
import { motion } from 'framer-motion'

import { FaLinkedin, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { FaGithub, FaSquareXTwitter, FaXTwitter } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { GoDownload } from "react-icons/go";


const Technologies = () => {

    const SocialMediaIcons = [

        { title: "Linkedin", element: <FaLinkedin />, link: '' },
        { title: "GitHub", element: <FaGithub />, link: '' },
        { title: "Whatsapp", element: <IoLogoWhatsapp />, link: '' },
        { title: "X", element: <FaSquareXTwitter />, link: '' },
    ]

    const move = {
        start: { y: 10, },
        end: {
            y: [6, -5, 7, -6,],

        }


    }

    console.log(Math.floor(Math.random() * 3 + 1))


    return (
        <>

            <section className='h-screen  flex-col text-white bg-black flex items-center justify-center gap-7'>
                <motion.div
                    initial={{ x: -200, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: .9, ease: 'linear' }} >
                    <h1 className='text-4xl font-normal uppercase text-teal-300'>Teachno<span className='text-teal-900'>logies</span>
                    </h1>
                </motion.div>

                <motion.div className='flex flex-wrap gap-4 p-4 border-0 border-blue-400'
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ x: 200, opacity: 0 }}
                    transition={{ duration: .9, ease: 'linear' }} >
                    {SocialMediaIcons.map((item, i) =>
                        <motion.a key={i} className='text-3xl border p-2 rounded-lg'
                            href={item.link}
                            variants={move}
                            initial="start"
                            animate="end"
                            transition={{ duration: Math.floor(Math.random() * 3 + 2), ease: 'linear', repeat: Infinity, repeatType: 'mirror' }}
                        >
                            {item.element}
                        </motion.a>
                    )}
                </motion.div>
            </section>
        </>
    )
}

export default Technologies