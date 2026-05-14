import { motion } from "motion/react";
import { Menu, Search, User } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50">
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full flex items-center justify-between px-6 py-3 bg-white/90 backdrop-blur-md shadow-sm border border-gray-100 rounded-full"
      >
        {/* Left Links */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-500 w-1/3">
          <Link to="/about" className="hover:text-brand-navy transition-colors">About Us</Link>
          <Link to="/specialties" className="hover:text-brand-navy transition-colors">Services</Link>
          <Link to="/specialties" className="hover:text-brand-navy transition-colors">Facilities</Link>
          <Link to="/news" className="hover:text-brand-navy transition-colors">Appointments</Link>
        </div>

        {/* Center Logo */}
        <div className="flex justify-center w-1/3">
          <Link to="/" className="flex items-center">
            <img src="/logo.png" alt="Putuonuo Hospital Logo" className="h-8 w-auto object-contain" />
          </Link>
        </div>

        {/* Right Section */}
        <div className="hidden md:flex items-center justify-end gap-3 w-1/3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={14} />
            <input
              type="text"
              placeholder="Search Here"
              className="bg-gray-100 text-xs text-gray-700 pl-8 pr-4 py-2 rounded-full focus:outline-none focus:ring-1 focus:ring-gray-300 w-32 placeholder:text-gray-400"
            />
          </div>
          <button className="bg-brand-navy text-white px-5 py-2 rounded-full text-xs font-semibold hover:bg-gray-800 transition-colors flex items-center gap-2">
            Book Now <span className="bg-white/20 p-1 rounded-full"><Search size={10} /></span>
          </button>
          <button className="bg-gray-100 p-2 rounded-full hover:bg-gray-200 transition-colors">
            <User size={16} className="text-gray-600" />
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-brand-navy p-2">
          <Menu size={24} />
        </button>
      </motion.nav>
    </div>
  );
}
