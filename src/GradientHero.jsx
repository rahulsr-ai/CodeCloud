import React, { useEffect } from 'react'
import { motion, useMotionTemplate, useMotionValue, animate } from 'framer-motion'
import RespoNav04 from './AnotherNavbar/RespoNav04'


const GradientHero = () => {

    const COLORS = ["#1E67C6", "#13FFAA", "#CE84CF", "#DD335C"]
    // const COLORS = ["red", "white", "green", "blue"]

    const color = useMotionValue(COLORS[3])
    const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%,  #020617 50% , ${color})`;


    useEffect(() => {
        animate(color, COLORS, {
            ease: 'easeInOut',
            duration: 8,
            repeat: Infinity,
            repeatType: 'mirror'
        })
    }, [COLORS])



    return (
        <>
            <motion.section

                style={{ backgroundImage }}
                className='relative  min-h-screen px-4 py-24 text-gray-200 bg-gray-950
                    overflow-hidden'
            >

                <RespoNav04 />


                <div className='border h-screen'>
                    <h1> hello</h1>
                </div>



            </motion.section>
        </>
    )
}

export default GradientHero