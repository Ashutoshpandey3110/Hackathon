import React, { useEffect, useState } from "react";
import Spline from "@splinetool/react-spline";
import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "Ashutosh Pandey",
    image: "/images/ashutosh.jpg",
    role: "Lead Developer",
    contribution: "Backend & API architecture.",
  },
  {
    name: "Daksh Aggrawal",
    image: "/images/daksh.jpg",
    role: "UI/UX Designer",
    contribution: "Frontend design & animations.",
  },
  {
    name: "Rudra Jaiswal",
    image: "/images/rudra.jpg",
    role: "Robotics Engineer",
    contribution: "AI and automation systems.",
  },
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
    <div className="flex flex-col items-center justify-center bg-gradient-to-br from-black via-[#0a0a0a] to-[#1a1a1a] min-h-screen text-white overflow-x-hidden">
      <main className="relative w-full h-screen overflow-hidden flex justify-center items-center">
        {/* Spline Animation */}
        <div>
          <Spline scene="https://prod.spline.design/kkODiqMsn6IgqWQD/scene.splinecode" />
        </div>

        {/* Overlay Content */}
        <div className="absolute flex flex-col items-center gap-12 text-center w-[90%] md:w-[60%] px-4">
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
              <div className="flex flex-col w-full bg-gray-900/80 p-6 rounded-xl shadow-lg border border-gray-700 text-left">
                <p className="font-light text-lg md:text-xl text-white space-y-4">
                  <span className="block text-purple-400 font-semibold">
                    Team Name:
                  </span>{" "}
                  BOT FORGE
                  <br />
                  <span className="block text-purple-400 font-semibold">
                    Institution:
                  </span>{" "}
                  <span className="text-cyan-400 font-semibold">
                    National Institute of Technology, Patna
                  </span>
                  <br />
                  <span className="block text-purple-400 font-semibold">
                    Degree:
                  </span>{" "}
                  B.Tech
                  <br />
                  <span className="block text-purple-400 font-semibold">
                    Team Members:
                  </span>{" "}
                  <span className="text-white">
                    Ashutosh Pandey, Daksh Aggrawal, Rudra Jaiswal
                  </span>
                  <br />
                  <span className="block text-purple-400 font-semibold">
                    Description:
                  </span>
                  <br />
                  We are{" "}
                  <span className="text-red-400 font-semibold">BOT FORGE</span>{" "}
                  — a passionate team of innovators and developers from{" "}
                  <span className="text-cyan-400 font-semibold">
                    National Institute of Technology, Patna
                  </span>
                  . As{" "}
                  <span className="text-yellow-300">
                    B.Tech students from the same batch
                  </span>
                  , we’ve joined forces to build a dynamic and futuristic
                  platform that bridges the gap between robotics and interactive
                  web experiences.
                  <br />
                  Our project showcases our shared interest in emerging
                  technologies and hands-on development. We’ve leveraged
                  powerful tools including{" "}
                  <span className="text-green-300 font-semibold">MongoDB</span>,{" "}
                  <span className="text-green-300 font-semibold">Node.js</span>,{" "}
                  <span className="text-green-300 font-semibold">Express</span>, and a modern frontend stack of{" "}
                  <span className="text-pink-400 font-semibold">
                    React + Vite + Tailwind CSS
                  </span>{" "}
                  to bring this vision to life.
                  <br />
                </p>
              </div>
            </motion.div>
          )}
        </div>
      </main>

      {/* Team Members Section */}
      <div className="w-full max-w-6xl px-6 py-16 bg-black rounded-none text-center">
        <h2 className="text-4xl font-bold text-purple-400 mb-12">
          Meet the <span className="text-red-400">BUGSLAYERS</span> 🚀
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
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
              <h3 className="text-xl mt-4 font-semibold">{member.name}</h3>
              <p className="text-sm text-gray-400">{member.role}</p>
              <p className="mt-2 text-gray-300 text-sm italic">
                "{member.contribution}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
