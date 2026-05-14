import { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import FadeIn from "./FadeIn";

const nav = [
  { label: "Home", to: "/" },
  { label: "About us", to: "/about" },
  { label: "Specialties", to: "/specialties" },
  { label: "News", to: "/news" },

];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="fixed top-3 left-0 right-0 z-50 px-3 md:px-6">
      <div className="mx-auto max-w-[1280px]">
        <FadeIn>
          <header className="relative z-20 rounded-[24px] bg-white/95 px-3 py-2 shadow-[0_16px_50px_rgba(15,23,42,0.08)] md:rounded-full backdrop-blur-md border border-white/40">
            <div className="flex items-center justify-between gap-3">
              <Link to="/" className="flex items-center gap-3 pl-2">
                <img src="/logo.png" alt="Putunuo Hospital" className="h-10 w-10 rounded-full object-cover" />
                <div>
                  <div className="font-geist text-lg font-semibold tracking-tight text-slate-900">
                    Putunuo
                  </div>
                  <div className="text-[10px] uppercase tracking-[0.3em] text-slate-500">
                    Hospital
                  </div>
                </div>
              </Link>
              <nav className="hidden gap-7 text-[13px] text-slate-500 md:flex">
                {nav.map((item) => (
                  <Link key={item.label} to={item.to} className="transition-colors hover:text-slate-900">
                    {item.label}
                  </Link>
                ))}
              </nav>
              <div className="flex items-center gap-2">
                <button className="hidden rounded-full bg-[#d9b15d] px-5 py-2.5 text-[13px] font-medium text-slate-950 transition hover:brightness-95 sm:inline-flex">
                  Book Appointment
                </button>
                <button
                  type="button"
                  aria-label={menuOpen ? "Close menu" : "Open menu"}
                  aria-expanded={menuOpen}
                  onClick={() => setMenuOpen((open) => !open)}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-900 transition hover:bg-slate-50 md:hidden"
                >
                  {menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
                </button>
              </div>
            </div>
            <AnimatePresence>
              {menuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -8, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -8, filter: "blur(8px)" }}
                  transition={{ duration: 0.25 }}
                  className="mt-3 border-t border-slate-200 px-1 pb-2 pt-3 md:hidden"
                >
                  <nav className="grid gap-1 text-[13px] text-slate-500">
                    {nav.map((item) => (
                      <Link
                        key={item.label}
                        to={item.to}
                        onClick={() => setMenuOpen(false)}
                        className="rounded-full px-3 py-2 transition hover:bg-slate-100 hover:text-slate-900"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </nav>
                  <button className="mt-3 w-full rounded-full bg-[#d9b15d] px-5 py-2.5 text-[13px] font-medium text-slate-950 transition hover:brightness-95 sm:hidden">
                    Book Appointment
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </header>
        </FadeIn>
      </div>
    </div>
  );
}
