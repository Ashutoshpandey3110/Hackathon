import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import Spline from '@splinetool/react-spline';
import Timeline from '../components/TimeLine';

const LineTracker = () => {

    const { user , isAuthenticated } = useAuth0();
  return (
    
        <main className='flex flex-col gap-16 relative'>

        <div className='grid grid-cols-2 gap-4 mt-4 md:mt-6 p-4 relative'>
                
            <div className='flex flex-col gap-4 pl-8'>

                {isAuthenticated ? (<h1>Hello {user.name}</h1>) : (<h1 className='font-extrabold text-3xl'>Hello Student </h1>)}

                <p className='text-2xl font-light'> I am Seeing that You have selected Line Tracker Bot</p>

                <p className='text-2xl font-light'>1️⃣ One of the Oldest Robotics Concepts

                    Line-following robots have been around for decades, often used 
                    
                    in early robotics competitions and industrial automation.
                </p>

                <p className='text-2xl font-light'>1️⃣ One of the Oldest Robotics Concepts

                    Line-following robots have been around for decades, often used 
                    
                    in early robotics competitions and industrial automation.
                </p>

                <p className='text-2xl font-light'>2️⃣ How They "See" the Line

                    These bots use infrared sensors to detect the contrast between a black line and a light-colored surface.

                    A dark object absorbs more light, while a bright object reflects more—this is the fundamental logic behind their tracking ability
                </p>

                <p className='text-2xl font-light'>1️⃣ One of the Oldest Robotics Concepts

                    Line-following robots have been around for decades, often used 
                    
                    in early robotics competitions and industrial automation.
                </p>


            </div>

            

            <div>

                 <Spline scene="https://prod.spline.design/ho0xuLH7mnBQfkx8/scene.splinecode" />
                
            </div>

        </div>

        {/* line tracker knowledge */}

        <div className='relative w-full h-screen overflow-hidden flex justify-center mb-[10%]'>
            <video src='public\videos\trackbot.mp4'
                autoPlay
                loop
                muted
                playsInline
                className='w-full h-[95%] object-cover
                absolute top-0 first-letter:left-0 -z-10'
           ></video>

        </div>

        <Timeline/>

        </main>

        
   
  )
}

export default LineTracker