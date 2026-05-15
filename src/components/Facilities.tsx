import { motion } from "motion/react";
import { ArrowLeft, ArrowRight, ArrowUpRight, Search, Activity, Stethoscope, Users, Building2 } from "lucide-react";

const facilities = [
  { title: "Emergency Care", desc: "24/7 ambulance", image: "/hero3.jpg", icon: <Activity size={16} /> },
  { title: "Outpatient Services", desc: "Comfortable rooms with excellent care", image: "/hero1.jpg", icon: <Stethoscope size={16} /> },
  { title: "Inpatient Services", desc: "Advanced medical testing and imaging", image: "/hero2.jpg", icon: <Users size={16} /> },
  { title: "On-site pharmacies", desc: "On-site pharmacies with quick delivery systems", image: "/hospital1.jpeg", icon: <Building2 size={16} /> },
];

export default function Facilities() {
  return (
    <section className="w-full px-6 md:px-12 lg:px-24 py-24 bg-white">
      <div className="bg-[#f3f4f6] rounded-[3rem] p-8 md:p-12 lg:p-16 w-full flex flex-col gap-12">

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="flex items-center gap-4">
            <span className="text-xs font-bold text-gray-500 uppercase tracking-widest bg-white px-3 py-1 rounded-md">Facilities</span>
            <h2 className="font-playfair text-3xl md:text-4xl font-medium text-brand-navy">Explore Our Facilities</h2>
          </div>

          <div className="flex items-center gap-4 w-full md:w-auto">
            <div className="relative w-full md:w-64">
              <input
                type="text"
                placeholder="Search Here..."
                className="w-full bg-white text-sm pl-4 pr-10 py-3 rounded-full focus:outline-none"
              />
              <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
            </div>
            <button className="bg-brand-accent text-brand-navy px-6 py-3 rounded-full text-sm font-semibold hover:bg-brand-accent/80 transition-colors flex items-center gap-2 whitespace-nowrap">
              View All <ArrowRight size={14} />
            </button>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {facilities.map((fac, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="relative aspect-[3/4] rounded-3xl overflow-hidden group cursor-pointer"
            >
              <img src={fac.image} alt={fac.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 via-black/20 to-transparent" />

              {/* Top Tag */}
              <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-semibold text-white flex items-center gap-2">
                {fac.icon} {fac.title}
              </div>

              {/* Bottom Content */}
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="text-sm font-medium leading-tight group-hover:translate-y-0 transition-transform">{fac.desc}</p>
                <div className="mt-4 w-10 h-10 bg-white/20 backdrop-blur rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight size={16} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer Navigation */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mt-4">
          <div className="flex gap-2">
            <button className="w-12 h-12 border border-gray-300 rounded-full flex items-center justify-center text-gray-500 hover:bg-white transition-colors bg-transparent">
              <ArrowLeft size={16} />
            </button>
            <button className="w-12 h-12 bg-brand-accent text-brand-navy rounded-full flex items-center justify-center hover:bg-brand-accent/80 transition-colors shadow-lg">
              <ArrowRight size={16} />
            </button>
          </div>

          <p className="text-gray-500 text-sm max-w-md text-right leading-relaxed">
            Book an appointment for personalized consultations, specialized treatments, or routine checkups, and take a step towards better health.
          </p>
        </div>
      </div>
    </section>
  );
}
