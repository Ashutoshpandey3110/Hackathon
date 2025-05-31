import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Spline from "@splinetool/react-spline";
import Timeline from "../components/TimeLine";

const facts = [
  {
    emoji: "⚙️",
    text: "One of the oldest robotics concepts. Line-following bots have been used for decades in both competitions and industrial automation.",
  },
  {
    emoji: "👁️",
    text: "Uses infrared sensors to detect line contrast. Bright surfaces reflect IR light, dark ones absorb it — that’s how it follows the path.",
  },
  {
    emoji: "🤖",
    text: "Advanced line followers use multiple sensors and AI logic for dynamic path planning, obstacle avoidance, and speed optimization.",
  },
];

const LineTracker = () => {
  const { user, isAuthenticated } = useAuth0();

  return (
    <main className="min-h-screen w-full flex flex-col gap-24 px-6 py-12 md:px-16 text-white relative z-10 overflow-x-hidden bg-full-gradient">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0e0e0e] via-[#1a082a] to-[#100420] animate-background z-0" />

      {/* Top Section */}
      <section className="grid md:grid-cols-2 gap-14 max-w-7xl mx-auto w-full relative z-10">
        {/* Left Text */}
        <div className="space-y-8">
          <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-500 bg-clip-text text-transparent">
            Welcome {isAuthenticated ? user.name : "Student"}
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-xl leading-relaxed">
            You've selected the{" "}
            <span className="text-purple-400 font-semibold">
              Line Tracker Bot
            </span>
            , a classic project in robotics with modern upgrades. Here’s what
            makes it exciting:
          </p>

          <div className="space-y-6">
            {facts.map((item, index) => (
              <div
                key={index}
                className="bg-[#161616] hover:bg-[#1e1e1e] transition duration-300 border border-purple-700 rounded-xl p-5 shadow-xl"
              >
                <p className="text-base md:text-lg text-purple-100">
                  <span className="mr-3 text-xl">{item.emoji}</span>
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Spline Section */}
        <div className="flex justify-center items-center relative z-10">
          <div className="w-full max-w-md md:max-w-full md:h-[500px] rounded-2xl overflow-hidden border border-purple-800 shadow-[0_0_20px_#a855f7]">
            <Spline scene="https://prod.spline.design/ho0xuLH7mnBQfkx8/scene.splinecode" />
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="relative w-full max-w-6xl mx-auto overflow-hidden rounded-2xl shadow-2xl border border-indigo-700 aspect-video z-10">
        <video
          src="/videos/trackbot.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
      </section>

      {/* Heading Before Timeline */}
      <div className="text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
          LET’S BUILD TOGETHER
        </h2>
      </div>

      {/* Timeline Section */}
      <section className="relative z-10">
        <Timeline />
      </section>

      {/* Gradient BG Animation CSS */}
      <style>{`
        .bg-full-gradient {
          background: linear-gradient(120deg, #0d0d0d, #1a082a, #0f001f);
          background-size: 300% 300%;
          animation: animateGradient 18s ease infinite;
        }

        @keyframes animateGradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </main>
  );
};

export default LineTracker;
