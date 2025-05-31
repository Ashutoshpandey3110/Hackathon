import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function TimelineItem({ step, title, content, link, isLeft }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={`flex ${isLeft ? "flex-row-reverse" : ""} relative group items-start py-8`}
    >
      {/* Vertical Line */}
      <div className="w-1 bg-gray-600 group-hover:bg-blue-400 transition-all duration-500 absolute left-1/2 transform -translate-x-1/2 top-0 h-full z-0" />

      {/* Content Block */}
      <Link
        to={`/line-track/${link}`}
        className={`w-1/2 z-10 rounded-lg transition-all duration-300 p-6 shadow-md ${
          isLeft ? "text-right pr-10" : "text-left pl-10"
        } hover:scale-[1.02] bg-gray-800 hover:bg-gray-700`}
      >
        <div className="text-2xl font-bold text-blue-400">{step}</div>
        <div className="text-2xl font-bold text-white">{title}</div>
        <div className="text-md text-gray-300 mt-2">{content}</div>
        <span className="mt-3 inline-block text-blue-300 hover:text-blue-400 font-semibold transition hover:underline">
          Click Here
        </span>
      </Link>

      {/* Timeline Dot */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-white border-4 border-blue-500 rounded-full z-20 group-hover:shadow-md group-hover:shadow-blue-500 transition" />
    </motion.div>
  );
}
