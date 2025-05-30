import React from 'react';
import UserProfile from "../components/UserProfile";
import { useAuth0 } from "@auth0/auth0-react";

const Myprofile = () => {
  const { user, isLoading, isAuthenticated } = useAuth0();

  if (isLoading) return <div className="flex items-center justify-center h-screen text-white text-xl">Loading...</div>;
  if (!isAuthenticated || !user) return <div className="flex items-center justify-center h-screen text-white text-xl">Please log in to view this page.</div>;

  return (
    <main className="min-h-screen w-full flex flex-col items-center justify-center bg-black text-white p-5">
      <h2 className="text-3xl font-bold mb-4 text-center">
        Welcome <span className="text-purple-400">{user.name}</span>
      </h2>

      <div className="w-full max-w-3xl bg-zinc-900 p-6 rounded-xl shadow-lg">
        <UserProfile userId={user.email}/>
      </div>
    </main>
  );
};

export default Myprofile;
