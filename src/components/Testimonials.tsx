import { motion } from "motion/react";
import { Star } from "lucide-react";

export default function Testimonials() {
  return (
    <section className="w-full px-6 md:px-12 lg:px-24 py-32 bg-white flex flex-col items-center text-center">
      <div className="inline-block border border-gray-300 rounded-full px-4 py-1 text-xs font-medium text-gray-500 mb-8">
        TESTIMONIALS
      </div>

      <motion.h2 
        initial={{ opacity: 0, filter: "blur(8px)", y: 20 }}
        whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="font-playfair text-3xl md:text-5xl font-medium text-brand-navy max-w-3xl leading-tight mb-20"
      >
        WE INVITE YOU TO LISTEN TO WHAT OUR MEMBER HAVE TO SAY ABOUT OUR WELLNESS SERVICES
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 max-w-5xl w-full text-left relative">
        {/* Divider line for desktop */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-200"></div>

        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col pr-0 md:pr-12"
        >
          <h4 className="font-bold text-gray-900 mb-4">— MICHAEL CRAIG</h4>
          <p className="text-gray-600 mb-6 leading-relaxed">
            "Medical care goes far beyond mere efficiency. It effectively prioritizes my health while also thoroughly explaining the details along the way."
          </p>
          <div className="flex gap-1 text-brand-navy">
            {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="currentColor" strokeWidth={0} />)}
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col pl-0 md:pl-12"
        >
          <h4 className="font-bold text-gray-900 mb-4">— COLIN JUSTIN</h4>
          <p className="text-gray-600 mb-6 leading-relaxed">
            "Their attentive approach during each appointment is outstanding. I consistently leave feeling confident about my well-being."
          </p>
          <div className="flex gap-1 text-brand-navy">
            {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="currentColor" strokeWidth={0} />)}
          </div>
        </motion.div>
      </div>

      <motion.button
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="mt-16 border border-gray-300 text-gray-600 px-8 py-2 rounded-full text-xs font-medium hover:bg-gray-50 transition-colors"
      >
        SEE MORE
      </motion.button>

    </section>
  );
}
