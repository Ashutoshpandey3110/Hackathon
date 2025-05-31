import React, { useState, useRef } from 'react'; 
import { Link } from 'react-router-dom'; 
import 'boxicons/css/boxicons.min.css'; 
import { useAuth0 } from '@auth0/auth0-react'; 
 
const Navbar = () => { 
  const { loginWithRedirect, user, isAuthenticated, logout } = useAuth0(); 
 
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false); 
  const [isStudentDropdownOpen, setStudentDropdownOpen] = useState(false); 
  const [isDashboardDropdownOpen, setDashboardDropdownOpen] = useState(false); 
 
  const studentTimeout = useRef(null); 
  const dashboardTimeout = useRef(null); 
 
  const handleMouseEnter = (dropdownSetter, timeoutRef) => { 
    clearTimeout(timeoutRef.current); 
    dropdownSetter(true); 
  }; 
 
  const handleMouseLeave = (dropdownSetter, timeoutRef) => { 
    timeoutRef.current = setTimeout(() => { 
      dropdownSetter(false); 
    }, 300); 
  }; 
 
  // Bot data array for student dropdown 
  const studentBots = [ 
    { name: "Line Tracker Bot", img: "/images/Line_follower_robot.jpg", link: "/line-tracker" }, 
    { name: "Spidy Bot", img: "/images/newbot2.webp", link: "#" }, 
    { name: "Obstacle Avoider Bot", img: "/images/bot.avif", link: "#" }, 
  ]; 
 
  return ( 
    <> 
      <header className="bg-black py-4 px-8 flex justify-evenly items-center sticky top-0 z-50 w-full border-b-[1px] border-purple-500 shadow-md"> 
        {/* Logo + BotFoge */}
        <Link to = "/">

        <div className="flex items-center gap-4 text-white"> 
          <i className="bx bx-bot text-4xl text-purple-400"></i> 
          <span className="text-2xl font-extrabold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent tracking-wide">BOTFoge</span> 
        </div> 
        
        </Link> 
        
 
        {/* Main Nav (Desktop) */} 
        <div className="hidden md:flex items-center gap-8 text-white text-lg font-medium"> 
          {/* <button className="px-6 py-2 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-xl shadow hover:scale-105 transition-all duration-300"> 
            Explore Now
          </button>  */}

           {/* Student Dropdown */} 
          <div 
            className="relative group" 
            onMouseEnter={() => handleMouseEnter(setStudentDropdownOpen, studentTimeout)} 
            onMouseLeave={() => handleMouseLeave(setStudentDropdownOpen, studentTimeout)} 
          > 
            <div className="flex items-center cursor-pointer gap-1"> 
              <span>Student</span> 
              <i className="bx bx-chevron-down"></i> 
            </div> 
            {isStudentDropdownOpen && ( 
              <div className="absolute top-8 left-0 bg-white text-black px-4 py-3 rounded-xl shadow-lg flex gap-4 z-50 transition-all duration-300"> 
                {studentBots.map((bot, idx) => ( 
                  <Link to={bot.link} key={idx} className="text-center w-36 hover:scale-105 transition"> 
                    <img src={bot.img} alt={bot.name} className="rounded-lg mb-2" /> 
                    <p className="font-semibold">{bot.name}</p> 
                  </Link> 
                ))} 
              </div> 
            )} 
          </div> 
 
          <Link to="/about" className="hover:text-purple-400 transition">About</Link> 

          <Link to="/contactus" className="hover:text-purple-400 transition">Contact US</Link> 
          
          {/* Dashboard Dropdown */} 
          <div 
            className="relative group" 
            onMouseEnter={() => handleMouseEnter(setDashboardDropdownOpen, dashboardTimeout)} 
            onMouseLeave={() => handleMouseLeave(setDashboardDropdownOpen, dashboardTimeout)} 
          > 
            <div className="flex items-center cursor-pointer gap-1"> 
              <i className="bx bx-user-circle text-xl"></i> 
              <span>Dashboard</span> 
            </div> 
            {isDashboardDropdownOpen && ( 
              <div className="absolute top-8 right-0 bg-white text-black px-4 py-3 rounded-xl shadow-lg w-48 z-50"> 
                {isAuthenticated && <Link to="/myProfile" className="block hover:text-purple-500">My Profile</Link>} 
                <p className="mt-2">Orders</p> 
                {!isAuthenticated && ( 
                  <button onClick={loginWithRedirect} className="mt-2 hover:text-purple-500">Login</button> 
                )} 
              </div> 
            )} 
          </div> 
 
          {/* Auth Greeting / Logout */} 
          {isAuthenticated && ( 
            <> 
              <span className="text-purple-400">Hello {user.name}</span> 
              <button onClick={logout} className="hover:text-red-400 transition">Logout</button> 
            </> 
          )} 
        </div> 
 
        {/* Mobile Hamburger */} 
        <div className="md:hidden text-white text-3xl cursor-pointer" onClick={() => setMobileMenuOpen(true)}> 
          <i className='bx bx-menu'></i> 
        </div> 
      </header> 
 
      {/* Overlay */} 
      {isMobileMenuOpen && ( 
        <div 
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 backdrop-blur-sm z-40" 
          onClick={() => setMobileMenuOpen(false)} 
        /> 
      )} 
 
      {/* Mobile Drawer */} 
      <div className={`fixed top-0 right-0 h-full w-72 bg-black text-white z-50 transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}> 
        <div className="flex justify-end p-4"> 
          <i className="bx bx-x text-3xl cursor-pointer" onClick={() => setMobileMenuOpen(false)}></i> 
        </div> 
 
        <div className="flex flex-col gap-6 px-6 text-lg"> 
          <button className="h-10 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-lg font-medium">Play Now</button> 
          <Link to="/about" onClick={() => setMobileMenuOpen(false)}>About</Link> 
 
          <div className="relative"> 
            <div className="flex items-center justify-between" onClick={() => setStudentDropdownOpen(!isStudentDropdownOpen)}> 
              <span>Student</span> 
              <i className={`bx ${isStudentDropdownOpen ? 'bx-chevron-up' : 'bx-chevron-down'}`}></i> 
            </div> 
            {isStudentDropdownOpen && ( 
              <div className="mt-3 flex flex-col gap-2 bg-slate-200 text-black p-3 rounded"> 
                {studentBots.map((bot, idx) => ( 
                  <Link to={bot.link} key={idx} onClick={() => setMobileMenuOpen(false)}> 
                    <p className="font-bold">{bot.name}</p> 
                  </Link> 
                ))} 
              </div> 
            )} 
          </div> 
 
          {isAuthenticated && <p>Hello {user.name}</p>} 
          {isAuthenticated 
            ? <button onClick={() => { logout(); setMobileMenuOpen(false); }}>Logout</button> 
            : <button onClick={() => { loginWithRedirect(); setMobileMenuOpen(false); }}>Login</button> 
          } 
          <Link to="/myProfile" onClick={() => setMobileMenuOpen(false)}>My Profile</Link> 
        </div> 
      </div> 
    </> 
  ); 
}; 
 
export default Navbar;
