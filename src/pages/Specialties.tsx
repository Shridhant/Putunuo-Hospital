import { motion } from "motion/react";
import { Stethoscope, HeartPulse, Brain, Baby, Bone, Eye } from "lucide-react";

const specialties = [
  { id: 1, name: "Cardiology", desc: "Expert care for your heart with advanced diagnostics.", icon: HeartPulse },
  { id: 2, name: "Orthopedics", desc: "Comprehensive treatment for bones and joints.", icon: Bone },
  { id: 3, name: "Pediatrics", desc: "Compassionate care for infants, children, and adolescents.", icon: Baby },
  { id: 4, name: "Neurology", desc: "State-of-the-art treatment for neurological disorders.", icon: Brain },
  { id: 5, name: "Ophthalmology", desc: "Advanced eye care and vision correction.", icon: Eye },
  { id: 6, name: "General Practice", desc: "Primary healthcare and routine checkups.", icon: Stethoscope },
];

export default function Specialties() {
  return (
    <div className="min-h-screen bg-brand-light pb-24">
      {/* Header Section */}
      <section className="w-full px-6 md:px-12 lg:px-24 pt-20 pb-16 bg-white text-center">
        <motion.div
          initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block border border-gray-300 rounded-full px-4 py-1 text-xs font-medium text-gray-500 mb-6">
            OUR SERVICES
          </div>
          <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-medium text-brand-navy mb-6">
            Medical Specialties
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            We offer a wide range of medical services tailored to your needs, providing expert care across multiple disciplines under one roof.
          </p>
        </motion.div>
      </section>

      {/* Specialties Grid */}
      <section className="w-full px-6 md:px-12 lg:px-24 pt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specialties.map((spec, index) => {
            const Icon = spec.icon;
            return (
              <motion.div
                key={spec.id}
                initial={{ opacity: 0, filter: "blur(10px)", y: 30 }}
                whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-brand-light text-brand-navy rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-navy group-hover:text-white transition-colors duration-300">
                  <Icon size={28} />
                </div>
                <h3 className="font-playfair font-semibold text-xl text-brand-navy mb-3">
                  {spec.name}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {spec.desc}
                </p>
                <button className="text-sm font-semibold text-brand-navy group-hover:underline">
                  Learn more →
                </button>
              </motion.div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
