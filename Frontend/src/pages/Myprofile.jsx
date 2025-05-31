import React from "react";
import UserProfile from "../components/UserProfile";
import { useAuth0 } from "@auth0/auth0-react";

const MyProfile = () => {
  const { user, isLoading, isAuthenticated } = useAuth0();

  console.log(user , " printing user info");

  if (isLoading)
    return (
      <div className="flex items-center justify-center h-screen text-white text-xl">
        Loading...
      </div>
    );
  if (!isAuthenticated || !user)
    return (
      <div className="flex items-center justify-center h-screen text-white text-xl">
        Please log in to view this page.
      </div>
    );

  return (
    <main className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white p-8 space-y-8">
      {/* Profile Image Section */}
      <div className="flex flex-col items-center gap-4 animate-fade-in">
        <img
          src={user && user.picture}
          alt="Profile"
          className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border-4 border-purple-500 shadow-lg transform hover:scale-110 transition duration-300"
        />
        <h2 className="text-3xl font-bold">
          Welcome, <span className="text-purple-400">{user.name}</span> 🚀
        </h2>
      </div>

      {/* User Profile Section */}
      <div className="w-full max-w-3xl bg-gray-800 p-6 rounded-2xl shadow-xl border border-gray-700 animate-fade-in transition duration-1000 hover:shadow-purple-500 transform hover:scale-105">
        <UserProfile userId={user.email} />
      </div>
    </main>
  );
};

export default MyProfile;
