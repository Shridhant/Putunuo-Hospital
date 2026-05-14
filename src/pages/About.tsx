import { motion } from "motion/react";

const teamMembers = [
  { id: 1, name: "Dr. A. Smith", role: "Chief Surgeon", image: "/headshots.jpg", rotation: "-rotate-12", translateY: "translate-y-8" },
  { id: 2, name: "Dr. B. Jones", role: "Head of Cardiology", image: "/headshots1.jpg", rotation: "-rotate-6", translateY: "translate-y-2" },
  { id: 3, name: "Dr. C. Davis", role: "Medical Director", image: "/headshots2.jpg", rotation: "rotate-0", translateY: "-translate-y-4" },
  { id: 4, name: "Dr. D. Wilson", role: "Lead Pediatrician", image: "/headshots.jpg", rotation: "rotate-6", translateY: "translate-y-2" },
  { id: 5, name: "Dr. E. Taylor", role: "Neurologist", image: "/headshots1.jpg", rotation: "rotate-12", translateY: "translate-y-8" },
];

export default function About() {
  return (
    <div className="min-h-screen bg-brand-light/30 pb-32 overflow-hidden">
      {/* Header Section */}
      <section className="w-full px-6 md:px-12 lg:px-24 pt-20 pb-12 text-center">
        <motion.div
          initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block border border-gray-300 bg-white rounded-full px-5 py-1.5 text-xs font-bold text-gray-500 tracking-widest mb-6 shadow-sm">
            TEAM
          </div>
          <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-medium text-brand-navy mb-6">
            Meet our Team
          </h1>
          <p className="text-gray-500 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            A diverse team of passionate professionals dedicated to providing exceptional medical care, innovative treatments, and compassionate patient support.
          </p>
        </motion.div>
      </section>

      {/* Floating Curved Team Section */}
      <section className="w-full max-w-6xl mx-auto px-6 pt-16 pb-32 relative">
        <div className="absolute top-1/2 left-0 right-0 h-64 border-t border-dashed border-gray-300 rounded-[100%] opacity-40 -z-10" />

        <div className="flex flex-wrap md:flex-nowrap justify-center items-center gap-6 lg:gap-10">
          {teamMembers.map((member, idx) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 50, rotate: 0 }}
              whileInView={{ opacity: 1, y: 0, rotate: member.rotation.replace('rotate-', '').replace('-', '') === '0' ? 0 : parseInt(member.rotation.replace('rotate-', '')) }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: idx * 0.15, type: "spring", stiffness: 100 }}
              className={`relative group w-40 h-48 md:w-48 md:h-56 lg:w-56 lg:h-64 rounded-[2rem] bg-white p-2 shadow-xl hover:shadow-2xl hover:z-10 transition-all duration-500 ${member.rotation} ${member.translateY}`}
            >
              <div className="w-full h-full rounded-[1.5rem] bg-gray-200 overflow-hidden relative">
                <img src={member.image} alt={member.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-brand-navy/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-center">
                  <h4 className="text-white font-playfair font-bold text-sm lg:text-base">{member.name}</h4>
                  <p className="text-brand-light/80 text-xs mt-1">{member.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Bottom Text Section */}
      <section className="w-full text-center mt-12 mb-16">
        <h2 className="font-playfair text-3xl font-medium text-brand-navy mb-4">Our Medical Professionals</h2>
        <div className="w-16 h-0.5 bg-gray-300 mx-auto" />
      </section>

      {/* Our Doctors Grid */}
      <section className="w-full max-w-6xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {teamMembers.map((member) => (
            <motion.div
              key={`grid-${member.id}`}
              initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
              whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center p-6 group"
            >
              <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-4 border-brand-light relative">
                <img src={member.image} alt={member.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <h3 className="font-playfair font-bold text-lg text-brand-navy mb-1 text-center">{member.name}</h3>
              <p className="text-gray-500 text-xs text-center">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
