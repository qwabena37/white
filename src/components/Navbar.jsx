import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaFacebookF, FaTiktok, FaYoutube } from "react-icons/fa";
import { FaSchool } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dateTime, setDateTime] = useState(new Date());

  // Live clock
  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const linkClass = ({ isActive }) =>
    isActive
      ? "text-yellow-300 font-semibold"
      : "hover:text-yellow-200 transition";

  return (
    <>
      {/* Date & Time Bar */}
      <div className="bg-white text-green-900 text-sm text-center py-2">
        {dateTime.toLocaleDateString()} |{" "}
        {dateTime.toLocaleTimeString()}
      </div>

      {/* Main Navbar */}
      <nav className="bg-green-900 text-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          
          {/* Logo */}
<NavLink to="/" className="flex items-center space-x-2 group">
  <FaSchool className="text-yellow-400 text-2xl group-hover:scale-110 transition" />
  <span className="text-xl font-bold group-hover:text-yellow-300 transition">
    White Dove School
  </span>
</NavLink>


          {/* Social Icons (Centered - Desktop) */}
          <div className="hidden md:flex space-x-6 text-lg">
            <FaFacebookF className="cursor-pointer hover:text-yellow-400 transition" />
            <FaTiktok className="cursor-pointer hover:text-yellow-400 transition" />
            <FaYoutube className="cursor-pointer hover:text-yellow-400 transition" />
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-6">
            <NavLink to="/" className={linkClass}>Home</NavLink>
            <NavLink to="/departments" className={linkClass}>Departments</NavLink>
            <NavLink to="/about" className={linkClass}>About</NavLink>
            <NavLink to="/gallery" className={linkClass}>Gallery</NavLink>
            <NavLink to="/contact" className={linkClass}>Contact</NavLink>
          </div>

          {/* Mobile Button */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-blue-800 flex flex-col items-center space-y-4 py-4">
            
            {/* Social Icons (Mobile) */}
            <div className="flex space-x-6 text-lg">
              <FaFacebookF className="cursor-pointer hover:text-yellow-400 transition" />
              <FaTiktok className="cursor-pointer hover:text-yellow-400 transition" />
              <FaYoutube className="cursor-pointer hover:text-yellow-400 transition" />
            </div>

            <NavLink to="/" className={linkClass}>Home</NavLink>
            <NavLink to="/departments" className={linkClass}>Departments</NavLink>
            <NavLink to="/about" className={linkClass}>About</NavLink>
            <NavLink to="/gallery" className={linkClass}>Gallery</NavLink>
            <NavLink to="/contact" className={linkClass}>Contact</NavLink>
          </div>
        )}
      </nav>
    </>
  );
}
