import { motion } from "motion/react";

const steps = [
  {
    num: "01",
    title: "CHOOSE YOUR SERVICES",
    desc: "Navigate our comprehensive specialties to find the expertise you need.",
  },
  {
    num: "02",
    title: "SELECT YOUR DOCTOR",
    desc: "Browse through our skilled professionals and pick a doctor that aligns with your preferences.",
  },
  {
    num: "03",
    title: "PICK YOUR PREFERRED DATE AND TIME",
    desc: "Choose a date and time slot that fits seamlessly into your schedule.",
  },
  {
    num: "04",
    title: "PROVIDE NECESSARY INFORMATION",
    desc: "Fill out a straightforward form with the required medical information, ensuring your visit goes smoothly.",
  },
  {
    num: "05",
    title: "SECURE CONFIRMATION",
    desc: "Receive instant confirmation of your scheduled appointment, along with any additional details you may need.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, filter: "blur(10px)", y: 20 },
  visible: { opacity: 1, filter: "blur(0px)", y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Booking() {
  return (
    <section className="w-full px-6 md:px-12 lg:px-24 py-24 bg-brand-light">
      <div className="inline-block border border-gray-300 rounded-full px-4 py-1 text-xs font-medium text-gray-500 mb-8 bg-white">
        HOW IT WORKS
      </div>

      <motion.h2 
        initial={{ opacity: 0, filter: "blur(8px)", y: 20 }}
        whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="font-playfair text-3xl md:text-5xl font-medium text-brand-navy max-w-4xl leading-tight mb-20"
      >
        A SEAMLESS SERVICE AT YOUR FINGERTIPS: BOOK AN APPOINTMENT TODAY FOR THE BEST CARE IN THE INDUSTRY
      </motion.h2>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="flex flex-col w-full"
      >
        {steps.map((step, idx) => (
          <motion.div 
            key={idx}
            variants={itemVariants}
            className="flex flex-col md:flex-row md:items-center py-8 border-b border-gray-300 last:border-b-0 gap-4 md:gap-12 hover:bg-gray-50 transition-colors px-4 -mx-4 rounded-lg"
          >
            <div className="text-xs font-bold text-gray-400 min-w-16">
              {step.num} . STEP
            </div>
            
            <h3 className="font-playfair font-medium text-xl text-brand-navy md:w-1/3">
              {step.title}
            </h3>
            
            <p className="text-sm text-gray-500 md:w-1/2 leading-relaxed">
              {step.desc}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
