import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import { PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer } from "recharts";

const COLORS = ["#00C49F", "#FF8042"];

const TOTAL_VIDEOS = [
  { videoId: "1", title: "Initial Assembly" },
  { videoId: "2", title: "The big exhibition" },
  { videoId: "3", title: "The future" },
  { videoId: "4", title: "Final Calibration" },
];

const UserProfile = ({ userId }) => {
  const [videos, setVideos] = useState([]);
  const [showCongrats, setShowCongrats] = useState(false);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_BASE_URL}/api/video/${userId}/videos`)
      .then((res) => res.json())
      .then((data) => {
        const fetchedIds = data.map(v => v.videoId);
        const mergedVideos = TOTAL_VIDEOS.map(video => ({
          ...video,
          completed: data.find(v => v.videoId === video.videoId)?.completed || false
        }));
        setVideos(mergedVideos);
      })
      .catch((err) => console.error("Failed to fetch videos", err));
  }, [userId]);

  const markAsCompleted = (videoId) => {
    const updated = videos.map((v) =>
      v.videoId === videoId ? { ...v, completed: true } : v
    );
    setVideos(updated);
    setShowCongrats(true);
    setTimeout(() => setShowCongrats(false), 2500);
  };

  const completedCount = videos.filter((v) => v.completed).length;
  const notCompletedCount = videos.length - completedCount;

  const pieData = [
    { name: "Completed", value: completedCount },
    { name: "Not Completed", value: notCompletedCount },
  ];

  return (
    <div className="text-center text-white space-y-6">
      <h2 className="text-2xl font-semibold animate-fade-in">
        📊 Your Learning Progress
      </h2>

      {/* Progress Chart */}
      <div className="w-full h-[300px] mb-6">
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

      {/* Video List */}
      <ul className="space-y-3">
        {videos.map((video) => (
          <li
            key={video.videoId}
            className="bg-gray-900 p-4 rounded-md flex justify-between items-center transform hover:scale-105 transition duration-300"
          >
            <span className="text-lg">
              {video.videoId}. {video.title}
            </span>
            {video.completed ? (
              <span className="text-green-400 font-semibold">✅ Completed</span>
            ) : (
              
                <button
                onClick={() => markAsCompleted(video.videoId)}
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg shadow-lg transform hover:scale-110 transition duration-300"
              >
                🎯 Mark as Completed
               </button>
              
              
            )}
          </li>
        ))}
      </ul>

      {/* Popup */}
      {showCongrats && (
        <div className="fixed top-5 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-6 py-3 rounded shadow-lg text-lg font-bold z-50 animate-bounce">
          🎉 Great job completing a video!
        </div>
      )}
    </div>
  );
};

UserProfile.propTypes = {
  userId: PropTypes.string.isRequired,
};

export default UserProfile;
