import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-green-900 text-gray-300 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-8">
        
        {/* School Info */}
        <div>
          <h2 className="text-xl font-bold text-white">
            White Dove School Complex
          </h2>
          <p className="mt-4 text-sm">
            Nurturing excellence, discipline and leadership in every child.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white">Quick Links</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/admissions">Admissions</NavLink></li>
            <li><NavLink to="/news">News & Events</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white">Contact Us</h3>
          <p className="mt-4 text-sm">📍 Accra, Ghana</p>
          <p className="text-sm">📞 +233 24 000 0000</p>
          <p className="text-sm">✉ info@whitedove.edu.gh</p>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-white">Follow Us</h3>
          <div className="flex space-x-4 mt-4 text-lg">
            <FaFacebookF className="hover:text-yellow-400 cursor-pointer transition" />
            <FaInstagram className="hover:text-yellow-400 cursor-pointer transition" />
            <FaTwitter className="hover:text-yellow-400 cursor-pointer transition" />
            <FaYoutube className="hover:text-yellow-400 cursor-pointer transition" />
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 text-center py-4 text-sm">
        © {new Date().getFullYear()} White Dove School. All rights reserved.
      </div>
    </footer>
  );
}
