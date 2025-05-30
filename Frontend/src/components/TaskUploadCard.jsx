// src/components/TaskUploadCard.js
import React, { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, ChevronDown } from "lucide-react";

export default function TaskUploadCard() {
  const [completed, setCompleted] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow-xl rounded-2xl space-y-4">
      {/* Animated Top Line */}
      <motion.div
        className="h-1 w-full rounded bg-blue-500"
        animate={{ backgroundColor: completed ? "#22c55e" : "#3b82f6" }}
        transition={{ duration: 0.5 }}
      />

      {/* Title & Dropdown */}
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold">Upload Assignment</h2>
        <div className="relative">
          <button
            onClick={() => setDropdownOpen((prev) => !prev)}
            className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg border"
          >
            {completed ? (
              <CheckCircle className="text-green-500 h-5 w-5" />
            ) : (
              <ChevronDown className="h-5 w-5" />
            )}
            {completed ? "Completed" : "Mark Complete"}
          </button>

          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white border rounded-lg shadow-md z-10">
              <button
                onClick={() => {
                  setCompleted(true);
                  setDropdownOpen(false);
                }}
                className="w-full px-4 py-2 hover:bg-gray-100 text-left"
              >
                ✅ Mark as Done
              </button>
            </div>
          )}
        </div>
      </div>

      {/* File Upload */}
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">
          Upload File
        </label>
        <input
          type="file"
          onChange={handleFileChange}
          className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50"
        />
        {file && (
          <p className="text-sm text-gray-600">Selected: {file.name}</p>
        )}
      </div>
    </div>
  );
}