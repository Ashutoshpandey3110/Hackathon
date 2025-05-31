import React from 'react'
import Characters from './Characters'
import Spline from '@splinetool/react-spline'

const Heron = () => {
  return (
        <main className='relative w-full h-screen overflow-hidden flex justify-center mb-[10%]'>

                 <Spline scene="https://prod.spline.design/fbwHUA-hcoHjsA9E/scene.splinecode" />

                <div className='absolute bottom-[15%] flex flex-col items-center gap-5'>
                  
                  <img src='public\images\illu-text.png'
                    alt='img'
                    className='md:w-[30rem] w-[20rem]'
                  >
                  </img>

                  <h1 className='md:text-2xl text-1xl font-bold text-white'
                  >Explore , Capture , Conquer</h1>

                  <div className='md:w[75%] w-[60%] h-[0.1px] bg-[#baba]'>

                  </div>

                  <button className="px-6 py-2 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-xl shadow hover:scale-105 transition-all duration-300" >
                    Explore Now
                  </button>

                  <div className='flex items-center gap-5 text-3xl font-extrabold text-gray-200'>
                    <img className='md:h-16 h-12'
                    src='public\images\illu-logo.png'/> Zero
                  </div>

                  <p className='max-w-[80%] text-center text-[#babaff]'>
                    Notice : illuvim Games are in Beta Participation Involves Risk . Read our Full Disclaimer here.
                  </p>
                </div>
        </main>
  )
}

export default Heron