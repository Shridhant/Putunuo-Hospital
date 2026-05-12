import { motion } from "motion/react";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full flex items-center justify-between px-6 py-6 md:px-12 lg:px-24 bg-white z-50 relative"
    >
      <Link to="/" className="flex items-center">
        <img src="/logo.png" alt="Putuonuo Hospital Logo" className="h-10 w-auto object-contain" />
      </Link>

      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
        <Link to="/" className="hover:text-brand-navy transition-colors">Home</Link>
        <Link to="/about" className="hover:text-brand-navy transition-colors">About Us</Link>
        <Link to="/specialties" className="hover:text-brand-navy transition-colors">Specialties</Link>
        <Link to="/news" className="hover:text-brand-navy transition-colors">News</Link>
      </div>

      <div className="hidden md:flex items-center gap-6">
        <button className="bg-brand-navy text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-brand-blue transition-colors">
          Book Appointment
        </button>
      </div>

      <button className="md:hidden text-brand-navy">
        <Menu size={24} />
      </button>
    </motion.nav>
  );
}
