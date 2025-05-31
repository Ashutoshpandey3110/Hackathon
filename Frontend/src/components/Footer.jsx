import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { MdSmartToy } from "react-icons/md"; 

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-br from-black via-gray-900 to-black text-gray-400 border-t border-gray-800 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">

        {/* Branding */}
        <div className="flex flex-col gap-4 items-start">
          <div className="flex items-center gap-2 text-white text-xl font-extrabold">
            <MdSmartToy className="text-purple-400 animate-pulse" />
            <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent animate-text-glow">
              BOTFORGE
            </span>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            Igniting the spark of innovation with hands-on robotics education.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-3">
          <span className="text-white font-semibold">Quick Links</span>
          <a href="/about" className="hover:text-purple-400 transition">About</a>
          <a href="/projects" className="hover:text-purple-400 transition">Projects</a>
          <a href="/student" className="hover:text-purple-400 transition">Student Portal</a>
          <a href="/support" className="hover:text-purple-400 transition">Support</a>
        </div>

        {/* Contact / Social */}
        <div className="flex flex-col gap-3">
          <span className="text-white font-semibold">Connect With Us</span>
          <div className="flex gap-4 text-xl">
            <a href="mailto:support@botforge.com" className="hover:text-pink-500 transition">
              <FaEnvelope />
            </a>
            <a href="https://github.com/botforge" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/company/botforge" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 text-center text-xs text-gray-500 py-4">
        © {new Date().getFullYear()} BOTFORGE. Crafted with 🤖 by future builders.
      </div>
    </footer>
  );
};

export default Footer;
