import { useEffect, useRef, useState } from "react";


// Icons  
import { FaLinkedin, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { FaGithub, FaSquareXTwitter, FaXTwitter } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { GoDownload } from "react-icons/go";


//Anchor Tags ICons 
import { AiFillHome } from "react-icons/ai";
import { GoHomeFill } from "react-icons/go";

import { FaProjectDiagram } from "react-icons/fa";
import { GrProjects } from "react-icons/gr";
import { GoProjectRoadmap } from "react-icons/go";

import { RiContactsFill } from "react-icons/ri";
import { MdPermContactCalendar } from "react-icons/md";
import { MdContacts } from "react-icons/md";


import { motion } from "framer-motion";
import { DownloadIcon } from "lucide-react";
import { MdDownloadDone } from "react-icons/md";



const AnotherNav = () => {


    const SocialMediaIcons = [

        { title: "Linkedin", element: <FaLinkedin />, link: '' },
        { title: "GitHub", element: <FaGithub />, link: '' },
        { title: "Whatsapp", element: <IoLogoWhatsapp />, link: '' },
        { title: "X", element: <FaSquareXTwitter />, link: '' },
    ]

    const AnchorTags = [
        { title: 'Home', element: '#Home', icon: <GoHomeFill /> },
        { title: 'Project', element: '#Project', icon: <GoProjectRoadmap /> },
        { title: 'Contact', element: '#Contact', icon: < MdContacts /> },
    ];

    const [activeTab, setActiveTab] = useState('Home');
    const [Hired, setHired] = useState(false);



    return (
        <>
            <div className="fixed flex justify-between items-center top-0 left-0 w-full
             text-white  rounded-lg  md:px-10 px-5 shadow-lg ">
                <div className="py-2">
                    <img src="/src/LOGO/RSR_cube_logo-removebg-preview.png" alt=""
                        className="object-contain size-14 sm:size-16 border rounded-full"
                    />
                </div>
                <section className="flex items-center justify-center
                space-x-6  sm:space-x-8 md:space-x-10  ">
                    {SocialMediaIcons.map((item, i) =>
                        <motion.div key={i} whileHover={{ scale: 1.1, y: -8 }} whileTap={{ scale: .9 }} >
                            <motion.a className="text-xl md:text-2xl" href={item.link}
                                initial={{ x: 70, opacity: 0, }}
                                animate={{ scale: 1, opacity: 1, y: 0, x: 0 }}
                                transition={{ duration: 1, ease: 'linear', type: 'tween', }}
                            >
                                {item.element}
                            </motion.a>
                        </motion.div>
                    )}
                    <div className="hidden sm:flex gap-4 items-center ">
                        <motion.button className="py-1 my-2 bg-stone-300 text-[black] md:flex gap-2 px-2 rounded-lg hidden border text-base items-center justify-center "
                            whileHover={{ backgroundColor: 'darkgreen', scale: 1.05 }}
                            whileTap={{ scale: .9, }}
                            onClick={(e) => {
                                setHired(true)
                                e.target.style.backgroundColor = 'red'
                            }} >
                            {Hired ? <MdDownloadDone /> : <DownloadIcon />}  CV
                        </motion.button>
                    </div>
                </section>
            </div>




            <div defaultValue="Home" className="fixed gap-3 bottom-4 md:bottom-8 flex-col items-center 
            left-0 w-[100vw] md:p-4 rounded-lg flex justify-center ">
                <div className="flex items-center justify-between w-[320px] md:w-[450px] h-[50px] py-1 px-1 md:px-4 
                 bg-gray-200 rounded-bl-3xl rounded-se-3xl rounded-ss-sm rounded-ee-sm shadow-xl  ">
                    {AnchorTags.map((item, i) => (
                        <a href={item.element} onClick={() => setActiveTab(item.title)}
                            className={` font-light  flex gap-1 md:gap-2  items-center border p-1 px-2 
                                  rounded-bl-2xl rounded-se-2xl rounded-ss-sm rounded-ee-sm text-base md:text-lg lg:text-xl 
                                  duration-200 ease-in-out ${activeTab === item.title ? 'bg-black text-white border-purple-600 ' :
                                  'hover:bg-gray-300 text-black'}`} key={i} >
                            {item.icon}
                            {item.title}
                        </a> ))}
                </div>
                <motion.button className="py-1 my-2 bg-stone-300 text-[black] md:hidden gap-2 px-2 rounded-lg 
                flex border text-base items-center justify-center "
                    whileHover={{ backgroundColor: 'gray', scale: 1.05 }}
                    whileTap={{ scale: .9, }}
                    onClick={(e) => {
                        setHired(true)
                        e.target.backgroundColor = 'red'}} >
                    {Hired ? <MdDownloadDone /> : <DownloadIcon />}  CV
                </motion.button>
            </div>
        </>
    )
}

export default AnotherNav