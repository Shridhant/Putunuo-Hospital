import { motion } from "motion/react";
import { Quote } from "lucide-react";

export default function Testimonials() {
  return (
    <section className="w-full px-6 md:px-12 lg:px-24 py-24 bg-white flex flex-col items-center justify-center relative overflow-hidden pt-32">

      {/* Decorative semi-circle background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full border border-gray-100 bg-transparent -translate-y-1/2 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] rounded-full border border-gray-50 bg-transparent -translate-y-1/2 pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center text-center max-w-3xl z-10 relative"
      >
        <div className="inline-flex items-center gap-2 border border-gray-200 rounded-full px-4 py-1 text-xs font-semibold text-gray-500 mb-8 bg-white">
          Testimonial <Quote size={12} className="text-gray-400" />
        </div>

        <p className="font-playfair text-xl md:text-2xl lg:text-3xl text-brand-navy leading-relaxed mb-10">
          <Quote className="inline-block text-gray-300 mr-2 -translate-y-2" size={24} />
          With our dedication and expertise in healthcare, we strive to provide services that are not just treatments, but a comforting journey toward better health.
        </p>

        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-md bg-gray-200">
            <img src="/hero1.jpg" alt="Azam Muhammad" className="w-full h-full object-cover" />
          </div>
          <div className="text-left">
            <h4 className="font-bold text-sm text-brand-navy">Dr. Azam Muhammad</h4>
            <p className="text-xs text-gray-500">Chief Medical Officer at Putuonuo</p>
          </div>
        </div>

        <div className="mt-12 flex items-center justify-center gap-2">
          <button className="w-1.5 h-1.5 rounded-full bg-gray-300 hover:bg-gray-400 transition-colors"></button>
          <button className="w-2 h-2 rounded-full bg-brand-navy"></button>
          <button className="w-1.5 h-1.5 rounded-full bg-gray-300 hover:bg-gray-400 transition-colors"></button>
        </div>
      </motion.div>

      {/* Floating Image overlapping into the footer */}
      <motion.div
        initial={{ opacity: 0, y: 50, rotate: -5 }}
        whileInView={{ opacity: 1, y: 0, rotate: -5 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="absolute -bottom-16 left-12 md:left-24 w-40 h-40 md:w-56 md:h-56 rounded-3xl overflow-hidden shadow-2xl z-20 hidden md:block border-[6px] border-white"
      >
        <img src="/hospital2.jpeg" alt="Hospital view" className="w-full h-full object-cover" />
      </motion.div>

    </section>
  );
}
