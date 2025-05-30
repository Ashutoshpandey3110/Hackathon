import React from "react";
import VideoComponent from "../components/VideoComponent";
import { useAuth0 } from "@auth0/auth0-react";

const steps = [
  { id: 1, text: "Take a motor and solder it with two wires.", emoji: "⚙️" },
  { id: 2, text: "Repeat the process with four more motors.", emoji: "🔁" },
  { id: 3, text: "Mount the motors on the chassis using a hot glue gun.", emoji: "🛠️" },
  { id: 4, text: "Attach the wheels to the motors.", emoji: "🚗" },
  { id: 5, text: "Secure the Arduino onto the chassis using screws.", emoji: "🔩" },
  { id: 6, text: "Connect the Driver Shield to the Arduino.", emoji: "🔌" },
];

const Step3 = () => {
  const { loginWithRedirect, user, isAuthenticated } = useAuth0();

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white px-6 py-10 space-y-12">
      {/* Header Section */}
      <div className="flex flex-col justify-center items-center gap-6 text-center">
        <h1 className="text-5xl sm:text-6xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 text-transparent bg-clip-text animate-fade-in transition duration-1000">
          🚀 Hello, Innovator! 👋
        </h1>
        <h2 className="text-2xl sm:text-3xl text-gray-300 animate-fade-in delay-300 transition duration-1000">
          Follow these steps and build like a robotics pro! ⚡
        </h2>
      </div>

      {/* Steps Section */}
      <div className="max-w-3xl w-full bg-gray-800 p-8 rounded-2xl shadow-2xl border border-gray-700 backdrop-blur-md animate-fade-in transition duration-1000 transform hover:scale-105 hover:shadow-purple-500">
        <ul className="space-y-4 text-lg text-gray-300">
          {steps.map((step) => (
            <li
              key={step.id}
              className="flex items-center gap-4 p-4 rounded-lg bg-gray-900 hover:bg-gray-700 transform hover:scale-105 transition duration-300"
            >
              <span className="text-2xl">{step.emoji}</span>
              <span className="text-gray-200 font-medium">{step.text}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Video Section */}
      {isAuthenticated ? (
        <div className="w-full max-w-5xl animate-fade-in delay-500 transition duration-1000">
          <div className="relative group overflow-hidden rounded-2xl shadow-2xl border border-gray-700 hover:shadow-purple-400 transition-shadow duration-500">
            <VideoComponent
              videoId="1"
              userId={user.email}
              source={"/videos/Step1.mp4"}
            />
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
          </div>
        </div>
      ) : (
        <div className="text-center space-y-6 animate-fade-in delay-300 transition duration-1000">
          <p className="text-lg text-red-400 font-semibold">
            🚨 You are not logged in! Please log in first.
          </p>
          <button
            onClick={() => loginWithRedirect()}
            className="px-6 py-3 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 hover:from-purple-700 hover:to-red-700 rounded-xl text-white text-lg font-semibold shadow-lg transition duration-300 transform hover:scale-110 hover:shadow-purple-500"
          >
            🔑 Log In
          </button>
        </div>
      )}
    </div>
  );
};

export default Step3;
