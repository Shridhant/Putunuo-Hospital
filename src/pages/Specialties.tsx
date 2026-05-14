import { ArrowRight, Stethoscope, HeartPulse, Brain, Baby, Bone, Eye } from "lucide-react";
import FadeIn from "../components/FadeIn";

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
    <div className="min-h-screen pb-24">
      {/* Header Section */}
      <section className="w-full px-6 md:px-12 lg:px-24 pt-12 pb-16 text-center">
        <FadeIn>
          <div className="inline-flex items-center rounded-full border border-slate-300 bg-white px-4 py-1.5 text-[11px] uppercase tracking-[0.22em] text-slate-500 mb-6">
            OUR SERVICES
          </div>
          <h1 className="font-geist text-[42px] md:text-[56px] lg:text-[64px] font-medium tracking-tight text-slate-950 mb-6">
            Medical Specialties
          </h1>
          <p className="text-slate-600 text-[14px] leading-7 max-w-2xl mx-auto">
            We offer a wide range of medical services tailored to your needs, providing expert care across multiple disciplines under one roof.
          </p>
        </FadeIn>
      </section>

      {/* Specialties Grid */}
      <section className="w-full max-w-[1280px] mx-auto px-6 md:px-12 lg:px-24 pt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specialties.map((spec, index) => {
            const Icon = spec.icon;
            return (
              <FadeIn key={spec.id} delay={index * 0.1}>
                <div className="bg-white p-8 rounded-[28px] shadow-[0_8px_30px_rgba(15,23,42,0.04)] border border-slate-200/60 hover:shadow-[0_16px_40px_rgba(15,23,42,0.08)] hover:-translate-y-1 transition-all duration-300 group h-full flex flex-col">
                  <div className="w-14 h-14 bg-slate-50 border border-slate-100 text-slate-900 rounded-[18px] flex items-center justify-center mb-6 group-hover:bg-slate-900 group-hover:text-white transition-colors duration-300">
                    <Icon size={24} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-geist font-medium text-[22px] tracking-tight text-slate-950 mb-3">
                    {spec.name}
                  </h3>
                  <p className="text-slate-600 text-[13px] leading-relaxed mb-8 flex-grow">
                    {spec.desc}
                  </p>
                  <button className="flex items-center gap-2 text-[12px] font-medium text-slate-900 group-hover:gap-3 transition-all">
                    Learn more <ArrowRight size={14} />
                  </button>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </section>
    </div>
  );
}
