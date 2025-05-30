import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import Spline from '@splinetool/react-spline'
import Timeline from '../components/TimeLine'

const facts = [
  {
    emoji: "1️⃣",
    text: "One of the Oldest Robotics Concepts. Line-following robots have been around for decades, often used in early robotics competitions and industrial automation."
  },
  {
    emoji: "2️⃣",
    text: `How They "See" the Line. These bots use infrared sensors to detect the contrast between a black line and a light-colored surface. A dark object absorbs more light, while a bright object reflects more — this is the fundamental logic behind their tracking ability.`
  },
  {
    emoji: "1️⃣",
    text: "One of the Oldest Robotics Concepts. Line-following robots have been around for decades, often used in early robotics competitions and industrial automation."
  }
]

const LineTracker = () => {
  const { user, isAuthenticated } = useAuth0()

  return (
    <main className="flex flex-col gap-16 bg-black text-white min-h-screen">
      <div className="grid md:grid-cols-2 gap-10 mt-10 px-8 md:px-16">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold">
            Hello {isAuthenticated ? user.name : "Student"}
          </h1>
          <p className="text-xl text-gray-300">
            I am seeing that you have selected <span className="font-semibold text-white">Line Tracker Bot</span>
          </p>

          <div className="space-y-5">
            {facts.map((item, index) => (
              <div
                key={index}
                className="bg-gray-900 rounded-xl p-5 border border-gray-700"
              >
                <p className="text-xl">
                  <span className="mr-2">{item.emoji}</span>
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center items-center">
          <Spline scene="https://prod.spline.design/ho0xuLH7mnBQfkx8/scene.splinecode" />
        </div>
      </div>

      {/* Background video section */}
      <div className="relative w-full h-screen overflow-hidden flex justify-center mb-24">
        <video
            src="/videos/trackbot.mp4"
            autoPlay
            loop
            muted
            playsInline
        />
        </div>


      <Timeline />
    </main>
  )
}

export default LineTracker
