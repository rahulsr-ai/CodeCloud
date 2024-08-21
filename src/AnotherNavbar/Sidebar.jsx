import React, { useEffect, useState } from 'react'

import { motion, useAnimationControls } from 'framer-motion'

import { IoIosArrowForward } from 'react-icons/io'
import { width } from '@fortawesome/free-solid-svg-icons/fa0'


const Sidebar01 = () => {


    const [isopen, setisopen] = useState(false)

    const containerControls = useAnimationControls()

    useEffect(() => {
        if (isopen) {
            containerControls.start("open")
        } else {
            containerControls.start("close")
        }
    }, [isopen])

    const containervarient = {
        close: {
            width: '5rem',
            transition: {
                type: "spring",
                damping: 15,
                duration: 0.5
            }
        },
        open: {
            width: '15rem',
            transition: {
                type: "spring"  ,
                damping: 12,
                duration: 0.5
            }
        },
    }

    function handleControl() {
        setisopen(!isopen)
    }


    return (
        <>
            <motion.nav
                variants={containervarient}
                animate={isopen ? "open" : "close"}
                className='bg-neutral-900 flex flex-col z-10 gap-20 p-5 absolute top-0 left-0 h-full shadow shadow-neutral-600'  >

                <div className='flex flex-row w-full justify-between place-items-center'>

                    <div className='w-10 h-10 bg-gradient-to-br from-orange-500 to-amber-700 rounded-full'>

                    </div>

                    <button className={`text-white text-2xl ml-2 p-1 rounded-full flex border 
                     ${isopen ? "rotate-180" : "rotate-0"}
                    `}
                        onClick={() => handleControl()}>
                        <IoIosArrowForward />
                    </button>


                </div>

            </motion.nav >
        </>
    )
}

export default Sidebar01