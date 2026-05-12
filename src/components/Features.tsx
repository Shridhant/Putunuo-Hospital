import { motion } from "motion/react";
import { Stethoscope, ActivitySquare } from "lucide-react";

export function FeatureOne() {
  return (
    <section className="w-full px-6 md:px-12 lg:px-24 py-24 bg-white grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      {/* Left side: Image placeholder & Overlaid box */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative"
      >
        <div className="w-full aspect-[3/4] max-w-md bg-gray-100 rounded-lg relative overflow-hidden border border-gray-200">
          <img src="/hospital1.jpeg" alt="Putuonuo Hospital Service" className="absolute inset-0 w-full h-full object-cover" />
        </div>
        
        {/* Overlaid Blue Box */}
        <div className="absolute -bottom-8 -right-8 md:-right-12 bg-brand-navy text-white p-8 w-64 md:w-72 shadow-2xl rounded-sm">
          <div className="flex gap-1 mb-6">
            {[1,2,3,4,5,6].map((i) => (
              <div key={i} className="w-4 h-4 rounded-full border border-white/50" />
            ))}
          </div>
          <h3 className="font-playfair font-medium text-lg tracking-wide">
            PIONEERING HEALTH INSPIRING WELLNESS
          </h3>
        </div>
      </motion.div>

      {/* Right side: Text Content */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="flex flex-col lg:pl-12 mt-16 lg:mt-0"
      >
        <div className="inline-block border border-gray-300 rounded-full px-4 py-1 text-xs font-medium text-gray-500 mb-6 w-max">
          OUR SERVICES
        </div>
        
        <h2 className="font-playfair text-4xl md:text-5xl font-medium text-brand-navy leading-tight mb-12">
          WE OFFER UNPARALLELED HEALTHCARE EXCELLENCE WITH PUTUONUO HOSPITAL
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <div className="w-10 h-10 bg-gray-50 flex items-center justify-center rounded-lg mb-4 text-brand-navy">
              <Stethoscope size={24} />
            </div>
            <h4 className="font-bold text-gray-900 mb-2">Top-Tier Medical Services</h4>
            <p className="text-sm text-gray-600 leading-relaxed">
              A wide range of medical services tailored to your needs, including preventive care, specialized treatments, and emergency care.
            </p>
          </div>
          
          <div>
            <div className="w-10 h-10 bg-gray-50 flex items-center justify-center rounded-lg mb-4 text-brand-navy">
              <ActivitySquare size={24} />
            </div>
            <h4 className="font-bold text-gray-900 mb-2">Patient-Centered Care</h4>
            <p className="text-sm text-gray-600 leading-relaxed">
              Our healthcare professionals are committed to delivering patient-centered care that aligns with your values.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export function FeatureTwo() {
  return (
    <section className="w-full px-6 md:px-12 lg:px-24 py-24 bg-white grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      
      {/* Left side: Text Content */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col lg:pr-12 order-2 lg:order-1 mt-16 lg:mt-0"
      >
        <div className="inline-block border border-gray-300 rounded-full px-4 py-1 text-xs font-medium text-gray-500 mb-6 w-max">
          OUR MISSION
        </div>
        
        <h2 className="font-playfair text-4xl md:text-5xl font-medium text-brand-navy leading-tight mb-8">
          DECADES OF DEDICATION: OUR STORIED JOURNEY IN HEALTHCARE EXCELLENCE
        </h2>

        <p className="text-gray-600 leading-relaxed mb-8">
          Instead of a cookie-cutter approach, we are committed to delivering highly customized healthcare experiences. We prioritize your overall well-being, ensuring you receive the personalized attention and support needed to thrive.
        </p>

        <a href="#" className="text-sm font-semibold text-brand-navy hover:underline flex items-center gap-2">
          LEARN MORE ABOUT OUR JOURNEY →
        </a>
      </motion.div>

      {/* Right side: Image placeholder & Overlaid box */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="relative order-1 lg:order-2 lg:justify-self-end"
      >
        <div className="w-full aspect-[3/4] max-w-md bg-gray-100 rounded-lg relative overflow-hidden border border-gray-200">
          <img src="/hospital2.jpeg" alt="Putuonuo Hospital Mission" className="absolute inset-0 w-full h-full object-cover" />
        </div>
        
        {/* Overlaid Blue Box */}
        <div className="absolute -bottom-8 -left-8 md:-left-12 bg-brand-navy text-white p-8 w-64 md:w-72 shadow-2xl rounded-sm">
          <div className="flex gap-1 mb-6">
            {[1,2,3,4,5,6].map((i) => (
              <div key={i} className="w-4 h-4 rounded-full border border-white/50" />
            ))}
          </div>
          <h3 className="font-playfair font-medium text-lg tracking-wide">
            PIONEERING HEALTH INSPIRING WELLNESS
          </h3>
        </div>
      </motion.div>
      
    </section>
  );
}
