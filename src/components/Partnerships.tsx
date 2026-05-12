import { motion } from "motion/react";
import { HeartPulse } from "lucide-react";
import { Link } from "react-router-dom";

export default function Partnerships() {
  return (
    <section className="w-full px-6 md:px-12 lg:px-24 py-24 flex flex-col items-center text-center bg-brand-light">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="mb-8"
      >
        <div className="w-20 h-20 rounded-full bg-white shadow-md flex items-center justify-center text-brand-navy mx-auto border border-gray-100">
          <HeartPulse size={40} strokeWidth={1.5} />
        </div>
      </motion.div>

      <motion.h2 
        initial={{ opacity: 0, filter: "blur(8px)" }}
        whileInView={{ opacity: 1, filter: "blur(0px)" }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="font-playfair text-3xl md:text-4xl lg:text-5xl font-medium text-brand-navy max-w-4xl leading-tight mb-12"
      >
        WITH OUR EXTENSIVE NETWORK OF INSURANCE PARTNERSHIPS, WE STRIVE TO MAKE QUALITY HEALTHCARE ACCESSIBLE TO EVERYONE.
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        <Link 
          to="/specialties"
          className="inline-block border border-brand-navy text-brand-navy px-8 py-3 rounded-full text-sm font-medium tracking-wide hover:bg-brand-navy hover:text-white transition-colors"
        >
          OUR SERVICES
        </Link>
      </motion.div>
    </section>
  );
}
