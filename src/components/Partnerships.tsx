import { motion } from "motion/react";
import { ArrowUpRight, ArrowRight } from "lucide-react";

const partners = [
  "Mapbox", "Odoo", "Spotify", "Amazon", "Mapbox", "Amazon", "Spotify", "Amazon", "Mapbox"
];

export default function Partnerships() {
  return (
    <section className="w-full px-6 md:px-12 lg:px-24 py-24 bg-white flex flex-col items-center">

      {/* Top Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center text-center max-w-4xl"
      >
        <div className="inline-flex items-center gap-2 border border-gray-200 rounded-full px-4 py-1 text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-6">
          Explore Hospital <div className="w-1 h-1 rounded-full bg-gray-400 ml-1"></div>
        </div>

        <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-medium text-brand-navy leading-tight mb-6">
          Nearby Hospitals here,<br /> Trusted Care Made Easy, Explore!
        </h2>

        <p className="text-gray-500 text-sm md:text-base max-w-2xl mb-8 leading-relaxed">
          Find top-rated hospitals around you with ease and access top-notch healthcare services tailored to your needs.
        </p>

        <button className="bg-brand-navy text-white px-8 py-3.5 rounded-full text-sm font-semibold hover:bg-gray-800 transition-colors flex items-center gap-3 shadow-lg">
          Get started <span className="bg-white text-brand-navy p-1 rounded-full"><ArrowUpRight size={14} /></span>
        </button>
      </motion.div>

      {/* Partners Logos */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-full flex flex-wrap justify-center items-center gap-8 md:gap-16 py-16 opacity-50 grayscale"
      >
        {partners.map((partner, idx) => (
          <div key={idx} className="text-lg font-bold font-sans text-brand-navy">{partner}</div>
        ))}
      </motion.div>

      {/* Images Cluster */}
      <div className="w-full mt-8 flex flex-wrap lg:flex-nowrap justify-center items-center gap-4 md:gap-6">

        {/* Left Side Small Images */}
        <div className="flex gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-32 h-40 md:w-48 md:h-56 rounded-3xl overflow-hidden shadow-sm"
          >
            <img src="/hero1.jpg" alt="Hospital" className="w-full h-full object-cover" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="w-24 h-48 md:w-32 md:h-64 rounded-full overflow-hidden shadow-sm"
          >
            <img src="/hero2.jpg" alt="Hospital" className="w-full h-full object-cover" />
          </motion.div>
        </div>

        {/* Center Main Images */}
        <div className="flex gap-4 items-end">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-40 h-48 md:w-64 md:h-72 rounded-[2rem] overflow-hidden shadow-md"
          >
            <img src="/hospital1.jpeg" alt="Hospital" className="w-full h-full object-cover" />
          </motion.div>

          {/* Black CTA Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-40 h-40 md:w-56 md:h-56 bg-brand-navy rounded-3xl p-6 flex flex-col justify-center items-center text-center shadow-xl"
          >
            <p className="text-white font-medium text-sm md:text-base leading-snug mb-6">
              Join our community of athletes.
            </p>
            <div className="w-full bg-white/10 rounded-full px-4 py-2 flex items-center justify-between">
              <span className="text-xs text-white/50 truncate pr-2">support@putuonuo...</span>
              <button className="bg-white text-brand-navy p-1 rounded-full"><ArrowRight size={12} /></button>
            </div>
          </motion.div>
        </div>

        {/* Right Side Small Images */}
        <div className="flex gap-4 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="w-24 h-32 md:w-32 md:h-40 rounded-2xl overflow-hidden shadow-sm"
          >
            <img src="/hero3.jpg" alt="Hospital" className="w-full h-full object-cover" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="w-40 h-32 md:w-56 md:h-48 rounded-3xl overflow-hidden shadow-sm"
          >
            <img src="/hospital2.jpeg" alt="Hospital" className="w-full h-full object-cover" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
