import React from 'react'



const SpiderMan = () => {


    return (
        <>
            <main className='flex h-screen bg-black '>

                <section className='md:block hidden bg-no-repeat bg-cover bg-center w-[400px] h-full '
                    style={{
                        backgroundImage: "url('/src/Marvel/StockData/Spidey_one_on_one_by_kopfstoff_clean_low.webp')"
                    }}>
                    <div className='h-[100%] w-full bg-black/15 '>

        
                    </div>
                </section>

                <section style={{
                    backgroundImage: "url('/src/Marvel/StockData/marvel-background-web.webp')"
                }} className='w-[100%] h-full bg-no-repeat bg-cover bg-center' >

                    <div className='bg-black/60 w-full px-10 py-10 h-full flex flex-col items-center justify-center
                    '>


                        <div className='size-48 md:mt-12 '>
                            <img src="/src/Marvel/StockData/marvel logo.png" alt="" srcset=""
                                className='object-contain w-full h-full' />
                        </div>

                        <form className='relative flex flex-col items-center 
                             md:py-4 py-6    h-full w-full  
                              gap-5'>





                            <input type="text" placeholder='Email'
                                className='py-2 mt-2 px-4 min-w-[250px] text-base  font-light rounded-md' />

                            <input type="password" placeholder='Password'
                                className='py-2 mt-2 px-4  min-w-[250px] text-base font-light rounded-md' />

                            <input type="submit" value="Login"
                                className=' min-w-[250px] py-2 md:mt-6 my-4  font-bold text-lg text-white bg-red-600 rounded' />



                            <p className='absolute md:bottom-4 bottom-0 text-xs md:text-base text-white font-semibold'>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque, nihil.
                            </p>

                        </form>


                    </div>

                </section>

            </main>
        </>

    )
}

export default SpiderMan