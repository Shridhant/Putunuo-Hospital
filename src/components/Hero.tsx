import { motion } from "motion/react";
import { ArrowUpRight, Apple, Play } from "lucide-react";

export default function Hero() {
  return (
    <section className="w-full bg-brand-light relative pb-16">
      {/* Background Image Container with curved bottom */}
      <div className="w-full h-[90vh] md:h-[95vh] relative rounded-b-[3rem] md:rounded-b-[5rem] overflow-hidden shadow-sm">
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/25 z-10" />
        
        {/* Hero Building Image */}
        <img
          src="/hero_building.png"
          alt="Putuonuo Hospital Building"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* Center Content */}
        <div className="relative z-20 w-full h-full flex flex-col items-center justify-center pt-24 px-6 text-white text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="font-playfair text-4xl md:text-6xl lg:text-7xl font-medium max-w-5xl leading-[1.1] mb-6 drop-shadow-lg"
          >
            Discover Hospitals, Access Care,<br className="hidden md:block" /> &amp; Find Trusted Services Nearby
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-sm md:text-base text-white/85 max-w-xl mb-10 leading-relaxed drop-shadow"
          >
            Search trusted hospitals for top-notch care and easy appointments, and find the best facilities near your location!
          </motion.p>

          {/* Find Hospital Pill Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="flex items-center bg-white/95 backdrop-blur p-1.5 rounded-full shadow-2xl"
          >
            <button className="bg-brand-navy text-white px-8 py-3.5 rounded-full text-sm font-semibold hover:bg-gray-800 transition-colors flex items-center gap-2">
              Find Hospital
              <span className="bg-white/20 p-1 rounded-full">
                <ArrowUpRight size={14} />
              </span>
            </button>
          </motion.div>
        </div>

        {/* ── Floating Bottom Left: Avatars + Info Box ── */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="absolute bottom-16 left-8 md:left-14 z-20 flex flex-col gap-3 hidden md:flex"
        >
          {/* Stacked Avatars */}
          <div className="flex -space-x-3">
            {["/hero2.jpg", "/hero3.jpg", "/hospital3.jpeg"].map((src, i) => (
              <div
                key={i}
                className="w-11 h-11 rounded-full border-[3px] border-white bg-gray-200 overflow-hidden shadow-md"
              >
                <img src={src} alt="Doctor" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
          {/* Info Card */}
          <p className="text-white text-xs font-medium bg-black/25 p-3.5 rounded-xl backdrop-blur-md leading-relaxed border border-white/15 max-w-[200px]">
            We're committed to delivering a high quality experience in a welcoming and supportive atmosphere.
          </p>
        </motion.div>

        {/* ── Floating Bottom Right: Social + App ── */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="absolute bottom-16 right-8 md:right-14 z-20 flex flex-col items-end gap-4 hidden md:flex"
        >
          {/* Social Pills */}
          <div className="flex flex-col gap-2">
            {["Instagram", "Twitter", "Facebook"].map((s) => (
              <button
                key={s}
                className="bg-white/90 backdrop-blur text-brand-navy text-xs px-5 py-2 rounded-full font-bold shadow-md w-28 text-center hover:bg-white transition-all"
              >
                {s}
              </button>
            ))}
          </div>
          {/* Get the App */}
          <div className="bg-white/90 backdrop-blur rounded-full px-4 py-2 flex items-center gap-3 shadow-xl">
            <span className="text-xs font-bold text-brand-navy">Get the app</span>
            <div className="flex items-center gap-1.5">
              <div className="bg-gray-100 text-brand-navy p-1.5 rounded-full cursor-pointer hover:bg-gray-200 transition-colors">
                <Apple size={15} />
              </div>
              <div className="bg-brand-navy text-white p-1.5 rounded-full cursor-pointer hover:bg-gray-800 transition-colors">
                <Play size={15} />
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── Floating Patient Count Badge (overlapping bottom) ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="absolute -bottom-px left-1/2 -translate-x-1/2 z-20 bg-white/95 backdrop-blur-sm px-6 py-4 rounded-t-3xl shadow-xl flex items-center gap-4 whitespace-nowrap"
        >
          <div className="flex -space-x-3">
            {["/hero2.jpg", "/hero3.jpg", "/hospital3.jpeg", "/headshots.jpg"].map((src, i) => (
              <div key={i} className="w-9 h-9 rounded-full border-2 border-white overflow-hidden bg-gray-200 shadow-sm">
                <img src={src} alt="Patient" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
          <p className="text-xs font-extrabold text-brand-navy tracking-wider uppercase">
            1M+ Satisfied Patients With Us
          </p>
        </motion.div>

      </div>
    </section>
  );
}
