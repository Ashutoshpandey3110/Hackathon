import { useState, useEffect } from "react";

const VideoComponent = ({ videoId, userId, source }) => {
  const [completed, setCompleted] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_BASE_URL}/api/video/${userId}/videos`)
      .then((res) => res.json())
      .then((data) => {
        const videoData = data.find((v) => v.videoId === videoId);
        if (videoData) setCompleted(videoData.completed);
      })
      .catch((err) => console.error("Error fetching video status:", err));
  }, [userId, videoId]);

  const handleCompletion = async () => {
    const newStatus = !completed;
    try {
      const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/video/completed`, {
        method: "POST",
        body: JSON.stringify({ userId, videoId, completed: newStatus }),
        headers: { "Content-Type": "application/json" },
      });

      if (res.ok) {
        setCompleted(newStatus);
        if (newStatus) {
          setShowPopup(true);
          setTimeout(() => setShowPopup(false), 2500);
        }
      } else {
        console.error("Failed to update video status:", await res.text());
      }
    } catch (err) {
      console.error("Error in fetch:", err);
    }
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-black text-white px-4 py-8">
      
      {/* Toast popup */}
      {showPopup && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-6 py-3 rounded-xl shadow-lg text-lg font-semibold z-50 animate-bounce">
          🎉 Congratulations on completing the video!
        </div>
      )}

      <div className="w-full max-w-4xl px-4">
        <video
          src={source}
          className="w-full h-auto rounded-lg shadow-xl border border-gray-700"
          controls
        />
      </div>

      <div className="mt-6 flex items-center gap-3">
        <label htmlFor="checked-checkbox" className="text-lg font-medium">
          Mark As Completed
        </label>
        <input
          id="checked-checkbox"
          type="checkbox"
          checked={completed}
          onChange={handleCompletion}
          className="w-5 h-5 text-green-500 bg-gray-800 border-gray-600 rounded-sm focus:ring-2 focus:ring-green-400"
        />
      </div>
    </div>
  );
};

export default VideoComponent;
