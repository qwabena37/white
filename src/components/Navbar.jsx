import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaFacebookF,
  FaTiktok,
  FaYoutube,
  FaDove,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dateTime, setDateTime] = useState(new Date());
  const [scrolled, setScrolled] = useState(false);
  const [deptOpen, setDeptOpen] = useState(false);

  // Live Clock
  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Close mobile menu if screen is resized to desktop
useEffect(() => {
  const handleResize = () => {
    if (window.innerWidth >= 768) {
      setIsOpen(false);
    }
  };
  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}, []);

  // Scroll shadow effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClass = ({ isActive }) =>
    `relative px-2 py-1 transition ${
      isActive ? "text-yellow-300" : "hover:text-yellow-200"
    }`;

  return (
    <>
      {/* DATE & TIME BAR */}
<div className="bg-white text-green-800 text-sm text-center py-2">
  {dateTime.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  })}{" "}
  | {dateTime.toLocaleTimeString()}
</div>


      {/* MAIN NAVBAR */}
      <nav
        className={`sticky top-0 z-50 bg-green-900 transition-all duration-300 ${
          scrolled ? "shadow-2xl" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center relative">
          {/* LOGO */}
          <NavLink to="/" className="flex items-center space-x-2 group">
            <FaDove className="text-yellow-400 text-2xl group-hover:scale-110 transition" />
            <span className="text-xl font-bold text-white group-hover:text-yellow-300 transition">
              White Dove School
            </span>
          </NavLink>

          {/* SOCIAL ICONS (CENTER) */}
          <div className="hidden md:flex space-x-6 text-lg text-white">
  <a
    href="https://www.facebook.com/YourPage"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-yellow-400 transition"
  >
    <FaFacebookF />
  </a>
  <a
    href="https://www.tiktok.com/@YourProfile"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-yellow-400 transition"
  >
    <FaTiktok />
  </a>
  <a
    href="https://www.youtube.com/YourChannel"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-yellow-400 transition"
  >
    <FaYoutube />
  </a>
</div>


          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center space-x-6 text-white">
            <NavLink to="/" className={linkClass}>
              {({ isActive }) => (
                <span className="relative">
                  Home
                  {isActive && (
                    <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-yellow-400 animate-pulse"></span>
                  )}
                </span>
              )}
            </NavLink>

            {/* DROPDOWN */}
<div
  className="relative"
  onMouseEnter={() => setDeptOpen(true)}
  onMouseLeave={() => setDeptOpen(false)}
>
  <button className="hover:text-yellow-200 transition">
    Departments ▾
  </button>

  {deptOpen && (
    <div className="absolute top-8 left-0 bg-white text-gray-800 rounded-lg shadow-lg py-3 w-48">
      <NavLink
        to="/departments/nursery"
        className="block px-4 py-2 hover:bg-gray-100"
      >
        Our Nursery Department
      </NavLink>
      <NavLink
        to="/departments/primary"
        className="block px-4 py-2 hover:bg-gray-100"
      >
        Our Primary Department
      </NavLink>
      <NavLink
        to="/departments/jhs"
        className="block px-4 py-2 hover:bg-gray-100"
      >
        Junior High Department
      </NavLink>
    </div>
  )}
</div>

            <NavLink to="/about" className={linkClass}>
              {({ isActive }) => (
                <span className="relative">
                  About
                  {isActive && (
                    <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-yellow-400 animate-pulse"></span>
                  )}
                </span>
              )}
            </NavLink>

            <NavLink to="/gallery" className={linkClass}>
              {({ isActive }) => (
                <span className="relative">
                  Gallery
                  {isActive && (
                    <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-yellow-400 animate-pulse"></span>
                  )}
                </span>
              )}
            </NavLink>

            <NavLink to="/contact" className={linkClass}>
              {({ isActive }) => (
                <span className="relative">
                  Contact
                  {isActive && (
                    <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-yellow-400 animate-pulse"></span>
                  )}
                </span>
              )}
            </NavLink>
          </div>

          {/* MOBILE BUTTON */}
          <button
            className="md:hidden text-2xl text-white relative z-50"
            onClick={() => setIsOpen(!isOpen)}
          >
            <motion.div
              animate={{ rotate: isOpen ? 90 : 0, scale: isOpen ? 1.2 : 1 }}
              transition={{ duration: 0.3 }}
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </motion.div>
          </button>
        </div>

        {/* MOBILE MENU SLIDE-IN */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
className="absolute top-full right-0 mt-2 w-64 bg-green-900 text-white shadow-2xl rounded-lg flex flex-col items-start px-6 py-6 z-40"

            >
              {/* Social Icons */}
<div className="flex space-x-6 mb-8 text-lg">
  <a
    href="https://www.facebook.com/YourPage"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-yellow-400 transition"
  >
    <FaFacebookF />
  </a>
  <a
    href="https://www.tiktok.com/@YourProfile"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-yellow-400 transition"
  >
    <FaTiktok />
  </a>
  <a
    href="https://www.youtube.com/YourChannel"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-yellow-400 transition"
  >
    <FaYoutube />
  </a>
</div>

              {/* Menu Links */}
              <NavLink
                to="/"
                onClick={() => setIsOpen(false)}
className="py-3 w-full px-3 rounded-md hover:bg-green-700 hover:text-yellow-400 transition"
              >
                Home
              </NavLink>
              <NavLink
                to="/departments"
                onClick={() => setIsOpen(false)}
className="py-3 w-full px-3 rounded-md hover:bg-green-700 hover:text-yellow-400 transition"
              >
                Departments
              </NavLink>
              <NavLink
                to="/about"
                onClick={() => setIsOpen(false)}
className="py-3 w-full px-3 rounded-md hover:bg-green-700 hover:text-yellow-400 transition"
              >
                About
              </NavLink>
              <NavLink
                to="/gallery"
                onClick={() => setIsOpen(false)}
className="py-3 w-full px-3 rounded-md hover:bg-green-700 hover:text-yellow-400 transition"
              >
                Gallery
              </NavLink>
              <NavLink
                to="/contact"
                onClick={() => setIsOpen(false)}
className="py-3 w-full px-3 rounded-md hover:bg-green-700 hover:text-yellow-400 transition"
              >
                Contact
              </NavLink>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
