import { motion } from "motion/react";
import { ArrowRight, ArrowLeft, ArrowUpRight, MapPin } from "lucide-react";

export function ExploreOptions() {
  return (
    <section className="w-full px-6 md:px-12 lg:px-24 py-24 bg-[#f3f4f6]">
      <div className="flex flex-col items-center text-center mb-20">
        <div className="inline-flex items-center gap-2 border border-gray-300 rounded-full px-4 py-1.5 text-xs font-semibold text-gray-600 mb-6 bg-white/50 backdrop-blur">
          Let's know us <ArrowRight size={14} />
        </div>
        <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-medium text-brand-navy max-w-4xl leading-tight">
          Explore Options, About Putuonuo, Your Health, Our Priority
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-3 flex flex-col justify-center gap-6"
        >
          <div className="text-xs font-bold text-gray-500 uppercase tracking-widest border border-gray-200 px-3 py-1 rounded-md w-max bg-white">
            About Us
          </div>
          <p className="text-xl md:text-2xl font-medium text-brand-navy leading-snug">
            Putuonuo is a trusted platform connecting patients with top specialists across the state.
          </p>
          <button className="bg-brand-accent text-brand-navy px-6 py-3 rounded-full text-xs font-medium hover:bg-brand-accent/80 transition-colors flex items-center justify-between w-max gap-4 group">
            Learn More <div className="bg-white text-brand-navy p-1 rounded-full group-hover:scale-110 transition-transform"><ArrowRight size={12} /></div>
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-5 relative bg-white rounded-3xl overflow-hidden shadow-sm h-[400px] border border-gray-100"
        >
          <img src="/hospital1.jpeg" alt="Outpatient care" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60" />
          <div className="absolute top-6 left-6 right-6 flex justify-between items-start text-white">
            <span className="bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-semibold">Outpatient care</span>
            <p className="text-sm font-medium max-w-[200px] text-right drop-shadow-md">
              A versatile facility offering a wide range of medical services
            </p>
          </div>
          <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
            <div className="bg-white/90 backdrop-blur px-4 py-2 rounded-full flex items-center gap-2 text-xs font-semibold text-brand-navy shadow-md">
              <MapPin size={14} className="text-gray-400" /> Kohima, Nagaland
            </div>
            <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-brand-navy hover:scale-105 transition-transform shadow-md">
              <ArrowUpRight size={20} />
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="lg:col-span-4 relative bg-white rounded-3xl overflow-hidden shadow-sm h-[400px] border border-gray-100 flex flex-col"
        >
          <div className="h-[60%] relative">
            <img src="/hospital2.jpeg" alt="Inpatient care" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/10" />
            <div className="absolute top-6 left-6 bg-white/20 backdrop-blur-md text-white px-4 py-1.5 rounded-full text-xs font-semibold">
              Inpatient
            </div>
          </div>
          <div className="h-[40%] p-6 flex flex-col justify-between bg-white relative">
            <div className="absolute -top-6 left-6 bg-white/90 backdrop-blur px-4 py-2 rounded-full flex items-center gap-2 text-xs font-semibold text-brand-navy shadow-md">
              <MapPin size={14} className="text-gray-400" /> Kohima, Nagaland
              <ArrowUpRight size={14} className="ml-2" />
            </div>
            <p className="text-sm text-gray-600 leading-relaxed mt-4">
              Explore the best place for healing, care, and recovery. Where compassion meets excellence in healthcare.
            </p>
            <div className="flex justify-end gap-2 mt-4">
              <button className="w-10 h-10 border border-gray-200 rounded-full flex items-center justify-center text-gray-500 hover:bg-gray-50 transition-colors">
                <ArrowLeft size={16} />
              </button>
              <button className="w-10 h-10 bg-brand-accent text-brand-navy rounded-full flex items-center justify-center hover:bg-brand-accent/80 transition-colors">
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function Excellence() {
  return (
    <section className="w-full px-6 md:px-12 lg:px-24 py-24 bg-white grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex flex-col gap-8"
      >
        <div className="flex items-center gap-2 bg-gray-50 p-1 rounded-full w-max border border-gray-100">
          <button className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-full text-gray-600"><ArrowUpRight size={16} /></button>
          <button className="text-xs font-semibold text-gray-600 px-4 py-2 rounded-full hover:bg-gray-200 transition-colors">Clinic</button>
          <button className="text-xs font-semibold text-brand-navy bg-brand-accent px-4 py-2 rounded-full shadow-md">Pharmacy</button>
          <button className="text-xs font-semibold text-gray-600 px-4 py-2 rounded-full hover:bg-gray-200 transition-colors">Hospital</button>
        </div>

        <div className="bg-[#8db4cf] rounded-[2.5rem] p-6 flex flex-col md:flex-row gap-8 shadow-sm">
          <div className="w-full md:w-1/2 aspect-[4/5] rounded-[2rem] overflow-hidden">
            <img src="/hospital1.jpeg" alt="Excellent Care" className="w-full h-full object-cover" />
          </div>
          <div className="w-full md:w-1/2 flex flex-col justify-between py-4 pr-4">
            <div>
              <h3 className="font-playfair text-2xl md:text-3xl font-medium text-white leading-tight mb-4">
                Comfortable rooms with excellent care
              </h3>
              <p className="text-white/80 text-sm leading-relaxed mb-6">
                On-site pharmacies with quick delivery systems ensure timely access to medication with top-tier care.
              </p>
            </div>
            <div className="flex flex-col gap-6">
              <button className="bg-brand-accent text-brand-navy px-5 py-2.5 rounded-full text-xs font-medium w-max flex items-center gap-2">
                See Details <div className="bg-white/20 p-1 rounded-full"><ArrowRight size={12} /></div>
              </button>
              <div className="flex gap-2">
                <button className="w-10 h-10 border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-white/10 transition-colors">
                  <ArrowLeft size={16} />
                </button>
                <button className="w-10 h-10 bg-brand-accent text-brand-navy rounded-full flex items-center justify-center hover:bg-brand-accent/80 transition-colors">
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex flex-col justify-center h-full pt-10"
      >
        <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-medium text-brand-navy leading-tight mb-16">
          Discover Excellence Featured Hospitals You Can Trust.
        </h2>
        <div className="flex items-start gap-8 relative mt-auto">
          <div className="w-48 aspect-square rounded-3xl overflow-hidden relative shadow-md shrink-0">
            <img src="/hospital2.jpeg" alt="Hospital view" className="w-full h-full object-cover" />
            <button className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-12 h-12 bg-black text-white rounded-full flex items-center justify-center shadow-xl">
              <ArrowLeft size={20} />
            </button>
          </div>
          <div className="flex flex-col gap-4 mt-4">
            <div className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center">
              <div className="w-3 h-3 bg-brand-accent" style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }}></div>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Our top-tier medical facilities offer a comprehensive range of services, including advanced diagnostics, specialized treatment centers, and 24/7 emergency care.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
