import React from "react";
import VideoComponent from "../components/VideoComponent";
import { useAuth0 } from "@auth0/auth0-react";

const Step1 = () => {
  const { loginWithRedirect, user, isAuthenticated } = useAuth0();

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-black text-white px-6 py-10 space-y-8">
      
      <div className="flex flex-col justify-center items-center gap-3">

        <h1 className="text-4xl sm:text-5xl font-extrabold animate-fade-in-up transition duration-1000">
        Hello Bro 👋
      </h1>
      
        <h2 className="text-2xl sm:text-3xl text-gray-300 animate-fade-in-up delay-300 transition duration-1000">
          Here is the video
        </h2>
      </div>

      {isAuthenticated ? (
        <div className="w-full max-w-5xl animate-fade-in-up delay-500 transition duration-1000">
          <VideoComponent
            videoId="1"
            userId={user.email}
            source={"/videos/3163534-uhd_3840_2160_30fps.mp4"}
          />
        </div>
      ) : (
        <div className="text-center space-y-4 animate-fade-in-up delay-300 transition duration-1000">
          <p className="text-lg text-red-400 font-semibold">
            You are not logged in, please login first.
          </p>

          <button
            onClick={() => loginWithRedirect()}
            className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-xl text-white text-lg font-semibold shadow-lg transition duration-300 transform hover:scale-105"
          >
            Log In
          </button>
        </div>
      )}
    </div>
  );
};

export default Step1;
