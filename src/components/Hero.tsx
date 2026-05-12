import { motion } from "motion/react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="w-full pt-20 pb-16 flex flex-col items-center text-center overflow-hidden bg-white">
      {/* Text Content */}
      <motion.div 
        initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
        animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="px-6 md:px-12 max-w-4xl flex flex-col items-center"
      >
        <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-medium text-gray-900 leading-[1.15] tracking-tight mb-6">
          Discover Our Mission and Values in <br className="hidden md:block"/> Patient-Centered Healthcare
        </h1>
        <p className="text-gray-500 text-sm md:text-base lg:text-lg mb-10 max-w-2xl leading-relaxed">
          we are dedicated to providing exceptional healthcare through a compassionate patient-centered approach
        </p>
        
        <Link 
          to="/contact"
          className="border border-blue-500 text-blue-500 hover:bg-blue-50 transition-colors px-8 py-2.5 rounded-full text-sm font-medium"
        >
          Contact Us
        </Link>
      </motion.div>

      {/* Media Carousel Layout */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
        className="relative w-full mt-20 flex justify-center"
      >
        <div className="flex items-center justify-center gap-4 md:gap-8 w-max px-4">
          
          {/* Left Peeking Image */}
          <div className="w-[60vw] md:w-[35vw] aspect-[4/3] bg-gray-100 rounded-3xl shrink-0 overflow-hidden relative opacity-70 hover:opacity-100 transition-opacity duration-500 shadow-lg border border-gray-200">
             <img src="/hero1.jpg" alt="Healthcare professionals" className="absolute inset-0 w-full h-full object-cover" />
          </div>
          
          {/* Center Main Video */}
          <div className="w-[90vw] md:w-[50vw] aspect-video bg-gray-100 rounded-3xl relative overflow-hidden shadow-2xl z-10 shrink-0 border border-gray-200/50">
            <iframe 
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/879hfe5qR4I?si=TS54PedzGHN8W_5h" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" 
              allowFullScreen
            ></iframe>
          </div>

          {/* Right Peeking Image */}
          <div className="w-[60vw] md:w-[35vw] aspect-[4/3] bg-gray-100 rounded-3xl shrink-0 overflow-hidden relative opacity-70 hover:opacity-100 transition-opacity duration-500 shadow-lg border border-gray-200">
             <img src="/hero3.jpg" alt="Medical surgery" className="absolute inset-0 w-full h-full object-cover" />
          </div>

        </div>
      </motion.div>
    </section>
  );
}
