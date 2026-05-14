import { motion } from "motion/react";
import FadeIn from "../components/FadeIn";

const teamMembers = [
  { id: 1, name: "Dr. A. Smith", role: "Chief Surgeon", image: "/headshots.jpg", rotation: "-rotate-12", translateY: "translate-y-8" },
  { id: 2, name: "Dr. B. Jones", role: "Head of Cardiology", image: "/headshots1.jpg", rotation: "-rotate-6", translateY: "translate-y-2" },
  { id: 3, name: "Dr. C. Davis", role: "Medical Director", image: "/headshots2.jpg", rotation: "rotate-0", translateY: "-translate-y-4" },
  { id: 4, name: "Dr. D. Wilson", role: "Lead Pediatrician", image: "/headshots.jpg", rotation: "rotate-6", translateY: "translate-y-2" },
  { id: 5, name: "Dr. E. Taylor", role: "Neurologist", image: "/headshots1.jpg", rotation: "rotate-12", translateY: "translate-y-8" },
];

export default function About() {
  return (
    <div className="min-h-screen pb-32 overflow-hidden">
      {/* Header Section */}
      <section className="w-full px-6 md:px-12 lg:px-24 pt-12 pb-12 text-center">
        <FadeIn>
          <div className="inline-flex items-center rounded-full border border-slate-300 bg-white px-4 py-1.5 text-[11px] uppercase tracking-[0.22em] text-slate-500 mb-6">
            TEAM
          </div>
          <h1 className="font-geist text-[42px] md:text-[56px] lg:text-[64px] font-medium tracking-tight text-slate-950 mb-6">
            Meet our Team
          </h1>
          <p className="text-slate-600 text-[14px] leading-7 max-w-2xl mx-auto">
            A diverse team of passionate professionals dedicated to providing exceptional medical care, innovative treatments, and compassionate patient support.
          </p>
        </FadeIn>
      </section>

      {/* Floating Curved Team Section */}
      <section className="w-full max-w-6xl mx-auto px-6 pt-16 pb-32 relative">
        <div className="absolute top-1/2 left-0 right-0 h-64 border-t border-dashed border-slate-300 rounded-[100%] opacity-40 -z-10" />

        <div className="flex flex-wrap md:flex-nowrap justify-center items-center gap-6 lg:gap-10">
          {teamMembers.map((member, idx) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 50, rotate: 0 }}
              whileInView={{ opacity: 1, y: 0, rotate: member.rotation.replace('rotate-', '').replace('-', '') === '0' ? 0 : parseInt(member.rotation.replace('rotate-', '')) }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: idx * 0.15, type: "spring", stiffness: 100 }}
              className={`relative group w-40 h-48 md:w-48 md:h-56 lg:w-56 lg:h-64 rounded-[32px] bg-white p-2 shadow-[0_16px_40px_rgba(15,23,42,0.06)] hover:shadow-[0_24px_60px_rgba(15,23,42,0.1)] hover:z-10 transition-all duration-500 ${member.rotation} ${member.translateY}`}
            >
              <div className="w-full h-full rounded-[24px] bg-slate-100 overflow-hidden relative">
                <img src={member.image} alt={member.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-center">
                  <h4 className="text-white font-geist font-medium text-[15px]">{member.name}</h4>
                  <p className="text-white/70 text-[11px] mt-1 tracking-wide">{member.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Bottom Text Section */}
      <section className="w-full text-center mt-12 mb-16">
        <FadeIn>
          <h2 className="font-geist text-[32px] font-medium tracking-tight text-slate-950 mb-4">Our Medical Professionals</h2>
          <div className="w-16 h-px bg-slate-300 mx-auto" />
        </FadeIn>
      </section>

      {/* Our Doctors Grid */}
      <section className="w-full max-w-6xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {teamMembers.map((member, index) => (
            <FadeIn key={`grid-${member.id}`} delay={index * 0.1}>
              <div className="bg-white rounded-[28px] overflow-hidden shadow-[0_8px_30px_rgba(15,23,42,0.04)] border border-slate-200/60 hover:shadow-[0_16px_40px_rgba(15,23,42,0.08)] hover:-translate-y-1 transition-all duration-300 flex flex-col items-center p-6 group">
                <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border border-slate-100 relative">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <h3 className="font-geist font-medium text-[16px] text-slate-900 mb-1 text-center tracking-tight">{member.name}</h3>
                <p className="text-slate-500 text-[12px] text-center">{member.role}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>
    </div>
  );
}
