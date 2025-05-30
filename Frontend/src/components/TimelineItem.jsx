import { Link } from "react-router-dom";

export default function TimelineItem({ step, title, content, link, isLeft }) {
  return (
    <div className={`flex ${isLeft ? "flex-row-reverse" : ""} group relative`}>
      <div className="w-1 bg-gray-300 group-hover:bg-blue-500 transition-all duration-300 absolute left-1/2 transform -translate-x-1/2 top-0 h-full z-0" />
      
      <Link to={`/line-track/${link}`} className={` cursor-pointer w-1/2 p-4 ${isLeft ? "text-right pr-8" : "text-left pl-8"} z-10 group-hover:bg-gray-400 transition-all duration-700 rounded-lg`}>
      <div >
        <div className="text-sm font-semibold text-gray-400">{step}</div>
        <div className="text-xl font-bold text-gray-400">{title}</div>
        <div className="text-md text-gray-600 mt-2">{content}</div>
        {link && (
          <a href={link} className="text-blue-600 font-medium hover:underline animate-pulse">Click Here</a>
        )}
      </div>
      </Link>
      

      <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-4 border-blue-500 rounded-full z-10 group-hover:shadow-blue-500 group-hover:shadow-md transition" />
    </div>
  );
}
