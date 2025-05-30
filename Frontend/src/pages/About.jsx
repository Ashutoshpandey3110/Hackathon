import React, { useEffect, useState } from 'react'
import Spline from '@splinetool/react-spline'
import { motion , AnimatePresence } from 'framer-motion';

const About = () => {

    const [showText , setShowText] = useState(false);

    useEffect (() => {

        const timer = setTimeout(() => {
            setShowText(true);
        } , 6000);

        return () => clearTimeout(timer);
    } , [])
  return (
    <main className='relative w-full h-screen overflow-hidden flex justify-center mb-[10%]'>

               <Spline scene="https://prod.spline.design/kkODiqMsn6IgqWQD/scene.splinecode" />

                <div className='absolute bottom -[15%] flex flex-col items-center gap-24'>
                
                {showText && (
                    <motion.div
                    className='relative z-10 pt-6 text-center'
                    initial = {{x : "100%"}}
                    animate = {{x : 0}}
                    exit={{x : "-100%"}}
                    transition={{duration:0.7}}>

                    <h1 className='text-5xl font-bold tracking-widest
                            md:-mb-14 mb-8 ' style={{textShadow : "0 0 10px rgba(255 , 255 , 255 , 0.7)"}}>
                        ABOUT US
                    </h1>


                    </motion.div>
                )}

                {showText && (

                    <motion.div
                    className='relative z-10 pt-6 text-center'
                    initial = {{x : "100%"}}
                    animate = {{x : 0}}
                    exit={{x : "-100%"}}
                    transition={{duration:0.7}}>

                    <div className='flex flex-col  w-[50%] '>

                    <p className='font-light text-2xl border rounded-md p-7'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel minus debitis officiis voluptates minima eum expedita, ad hic quidem veniam nemo,
                         ut earum delectus laborum exercitationem fugiat quaerat fuga culpa iste facere! Doloremque ipsam debitis, qui ex ipsum numquam, quaerat hic accusamus
                          quisquam in quod dicta autem! Iusto consectetur culpa blanditiis nisi reprehenderit sunt quia obcaecati inventore quod eaque cum aliquam, consequuntur 
                          facilis unde dolorum? Facilis itaque quam perspiciatis exercitationem blanditiis corrupti consequatur aspernatur doloribus pariatur odio praesentium 
                          atque voluptas,
                         eaque officia tempore dolorem, iusto rem, aut dolor reprehenderit quia? Nobis, numquam eaque. Tenetur harum deserunt minus, quidem deleniti molestiae.
                    </p>
                  </div>

                  </motion.div>

                )}

                  
                  
                </div>
        </main>
  )
}

export default About