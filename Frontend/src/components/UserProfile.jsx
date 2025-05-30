import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import { PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer } from "recharts";

const COLORS = ["#00C49F", "#FF8042"];

const UserProfile = ({ userId }) => {
  const [videos, setVideos] = useState([]);
  const [showCongrats, setShowCongrats] = useState(false);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_BASE_URL}/api/video/${userId}/videos`)
      .then((res) => res.json())
      .then((data) => setVideos(data))
      .catch((err) => console.error("Failed to fetch videos", err));
  }, [userId]);

  const markAsCompleted = (videoId) => {
    const updated = videos.map(v =>
      v.videoId === videoId ? { ...v, completed: true } : v
    );
    setVideos(updated);
    setShowCongrats(true);
    setTimeout(() => setShowCongrats(false), 2500); // Hide popup after 2.5s
  };

  const completedCount = videos.filter(v => v.completed).length;
  const notCompletedCount = videos.length - completedCount;

  const pieData = [
    { name: "Completed", value: completedCount },
    { name: "Not Completed", value: notCompletedCount }
  ];

  return (
    <div className="text-center text-white">
      <h2 className="text-2xl mb-4 font-semibold">User Profile</h2>

      <div className="w-full h-[300px] mb-8">
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={pieData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={100}
              label
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <ul className="space-y-2">
        {videos.map((video) => (
          <li
            key={video.videoId}
            className="bg-zinc-800 p-3 rounded-md flex justify-between items-center"
          >
            <span>{video.videoId}</span>
            {video.completed ? (
              <span className="text-green-400 font-semibold">✅ Completed</span>
            ) : (
              <button
                onClick={() => markAsCompleted(video.videoId)}
                className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded"
              >
                Mark as Completed
              </button>
            )}
          </li>
        ))}
      </ul>

      {/* Popup */}
      {showCongrats && (
        <div className="fixed top-5 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-6 py-3 rounded shadow-lg text-lg font-bold z-50 animate-bounce">
          🎉 Congratulations on completing a video!
        </div>
      )}
    </div>
  );
};

UserProfile.propTypes = {
  userId: PropTypes.string.isRequired,
};

export default UserProfile;
