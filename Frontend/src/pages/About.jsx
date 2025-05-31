import React, { useEffect, useState } from "react";
import Spline from "@splinetool/react-spline";
import { motion } from "framer-motion";

const teamMembers = [
  { name: "Ashutosh Pandey", image: "/images/ashutosh.jpg", role: "Lead Developer", contribution: "Backend & API architecture." },
  { name: "Daksh Aggrawal", image: "/images/daksh.jpg", role: "UI/UX Designer", contribution: "Frontend design & animations." },
  { name: "Rudra Jaiswal", image: "/images/rudra.jpg", role: "Robotics Engineer", contribution: "AI and automation systems." },
];

const About = () => {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText(true);
    }, 6000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col gap-4 items-center justify-center">

    <main className="relative w-full h-screen overflow-hidden flex justify-center items-center">
      {/* Spline Animation */}
      <div>
        <Spline scene="https://prod.spline.design/kkODiqMsn6IgqWQD/scene.splinecode" />
      </div>

      {/* Overlay Content */}
      <div className="absolute  flex flex-col items-center gap-12 text-center w-[60%]">
        {showText && (
          <motion.div
            className="relative z-10"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.7 }}
          >
            <h1
              className="text-5xl font-bold tracking-widest text-white mb-8"
              style={{ textShadow: "0 0 10px rgba(255, 255, 255, 0.8)" }}
            >
              ABOUT US
            </h1>
          </motion.div>
        )}

        {showText && (
          <motion.div
            className="relative z-10"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex flex-col w-full bg-gray-900 p-6 rounded-xl shadow-lg">
              <p className="font-light text-2xl text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
                minus debitis officiis voluptates minima eum expedita, ad hic
                quidem veniam nemo, ut earum delectus laborum exercitationem
                fugiat quaerat fuga culpa iste facere!
              </p>
            </div>
          </motion.div>
        )}
      </div>

      
    </main>

    <div className="w-full max-w-5xl px-6 py-10 bg-gray-900 rounded-xl shadow-xl border border-gray-700 text-center">
        <h2 className="text-4xl font-bold text-purple-400 mb-8">
          Meet the <span className="text-red-400">BUGSLAYERS</span> 🚀
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">

            {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="p-6 rounded-lg bg-gray-800 text-white text-center shadow-lg transform hover:scale-105 transition duration-300"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-60 object-cover rounded-md border-2 border-purple-400 shadow-md"
              />
              <h3 className="text-xl mt-3 font-semibold">{member.name}</h3>
              <p className="text-sm text-gray-400">{member.role}</p>
              <p className="mt-2 text-gray-300 text-sm italic">"{member.contribution}"</p>
            </motion.div>
          ))}

        </div>

    </div>


    </div>
    

    
  );
};

export default About;
