import React, { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add form submit logic here (e.g., API call)
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-gradient-to-r from-purple-900 via-black to-pink-900 animate-gradient-bg">
      <div className="bg-black bg-opacity-70 rounded-xl max-w-lg w-full p-8 shadow-lg text-white drop-shadow-lg">
        <h2 className="text-4xl font-extrabold mb-6 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
          Contact Us
        </h2>
        {submitted ? (
          <p className="text-lg text-purple-400">
            Thanks for reaching out! We will get back to you soon.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <label className="flex flex-col">
              <span className="mb-2 font-semibold text-purple-300">Name</span>
              <input
                required
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your full name"
                className="rounded-md px-4 py-3 bg-gradient-to-r from-purple-800 to-pink-800 placeholder-purple-400 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
              />
            </label>

            <label className="flex flex-col">
              <span className="mb-2 font-semibold text-purple-300">Email</span>
              <input
                required
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                className="rounded-md px-4 py-3 bg-gradient-to-r from-purple-800 to-pink-800 placeholder-purple-400 text-white focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
              />
            </label>

            <label className="flex flex-col">
              <span className="mb-2 font-semibold text-purple-300">Message</span>
              <textarea
                required
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                placeholder="Write your message here..."
                className="rounded-md px-4 py-3 bg-gradient-to-r from-purple-800 to-pink-800 placeholder-purple-400 text-white resize-none focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
              />
            </label>

            <button
              type="submit"
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-3 rounded-xl shadow-lg hover:scale-105 transform transition duration-300"
            >
              Send Message
            </button>
          </form>
        )}
      </div>

      {/* Gradient animation style */}
      <style>{`
        @keyframes gradientBackground {
          0% { background-position: 0% 50% }
          50% { background-position: 100% 50% }
          100% { background-position: 0% 50% }
        }
        .animate-gradient-bg {
          background-size: 200% 200%;
          animation: gradientBackground 15s ease infinite;
        }
      `}</style>
    </div>
  );
};

export default ContactUs;
