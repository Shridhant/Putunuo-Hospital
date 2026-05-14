import { ArrowUpRight } from "lucide-react";
import FadeIn from "../components/FadeIn";

const newsItems = [
  {
    id: 1,
    category: "Hospital News",
    date: "Oct 12, 2026",
    title: "Putunuo Hospital Introduces State-of-the-Art MRI Technology",
    desc: "We are thrilled to announce the addition of a new 3T MRI scanner to enhance diagnostic precision for our patients.",
    image: "/hospital3.jpeg",
  },
  {
    id: 2,
    category: "Health Tips",
    date: "Sep 28, 2026",
    title: "Understanding Heart Health in Your 40s",
    desc: "Cardiologist Dr. Rohan Mehta shares essential advice for maintaining cardiovascular health as you enter middle age.",
    image: "/hospital1.jpeg",
  },
  {
    id: 3,
    category: "Community",
    date: "Sep 15, 2026",
    title: "Annual Free Health Checkup Camp a Massive Success",
    desc: "Over 500 residents participated in our free health camp last weekend, receiving vital screenings and consultations.",
    image: "/hospital2.jpeg",
  },
  {
    id: 4,
    category: "Awards",
    date: "Aug 30, 2026",
    title: "Recognized as Top Healthcare Provider in Nagaland",
    desc: "Putunuo Hospital has been awarded the Excellence in Healthcare Award for our continuous dedication to patient care.",
    image: "/hero2.jpg",
  },
];

export default function News() {
  return (
    <div className="min-h-screen pb-24">
      {/* Header Section */}
      <section className="w-full px-6 md:px-12 lg:px-24 pt-12 pb-16 text-center">
        <FadeIn>
          <div className="inline-flex items-center rounded-full border border-slate-300 bg-white px-4 py-1.5 text-[11px] uppercase tracking-[0.22em] text-slate-500 mb-6">
            LATEST UPDATES
          </div>
          <h1 className="font-geist text-[42px] md:text-[56px] lg:text-[64px] font-medium tracking-tight text-slate-950 mb-6">
            News &amp; Articles
          </h1>
          <p className="text-slate-600 text-[14px] leading-7 max-w-2xl mx-auto">
            Stay informed with the latest updates from Putunuo Hospital, including health tips, technological advancements, and community events.
          </p>
        </FadeIn>
      </section>

      {/* News Grid */}
      <section className="w-full max-w-[1280px] mx-auto px-6 md:px-12 lg:px-24 pt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14">
          {newsItems.map((item, index) => (
            <FadeIn key={item.id} delay={index * 0.1}>
              <div className="group cursor-pointer flex flex-col h-full">
                <div className="w-full aspect-[16/10] bg-slate-200 rounded-[24px] mb-6 overflow-hidden relative shadow-[0_8px_30px_rgba(15,23,42,0.04)] transition-all duration-500 group-hover:shadow-[0_16px_40px_rgba(15,23,42,0.12)]">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3.5 py-1.5 rounded-full text-[11px] font-medium text-slate-900 z-20 shadow-sm">
                    {item.date}
                  </div>
                </div>

                <div className="flex flex-col flex-1 px-2">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-[11px] font-medium tracking-[0.15em] text-slate-500 uppercase">
                      {item.category}
                    </span>
                    <div className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center transition-colors duration-300 group-hover:bg-slate-900 group-hover:border-slate-900 group-hover:text-white">
                      <ArrowUpRight className="text-slate-400 group-hover:text-white transition-colors duration-300" size={16} />
                    </div>
                  </div>
                  <h3 className="font-geist text-[24px] font-medium tracking-tight text-slate-950 mb-3 group-hover:text-slate-700 transition-colors duration-300 line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-[14px] leading-relaxed line-clamp-3">
                    {item.desc}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Load More */}
      <FadeIn delay={0.2} className="flex justify-center mt-24">
        <button className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-transparent px-8 py-3 text-[13px] font-medium text-slate-900 transition hover:bg-slate-50">
          Load more articles
        </button>
      </FadeIn>
    </div>
  );
}
