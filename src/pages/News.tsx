import { ArrowUpRight, ExternalLink } from "lucide-react";
import FadeIn from "../components/FadeIn";

const featuredItems = [
  {
    id: 1,
    source: "Nagaland Post",
    date: "July 7, 2025",
    title: "Putuonuo Hospital celebrates 35th Foundation Day with achievements",
    desc: "Putuonuo Hospital marked its 35th foundation day on Sunday with a special programme held at its hospital premises.",
    image: "35th.jpg",
    link: "https://nagalandpost.com/putuonuo-hospital-celebrates-35th-foundation-day-with-achievements/",
  },
  {
    id: 2,
    source: "Morung Express",
    date: "October 15, 2024",
    title: "Nagaland's first IVF baby born at Putuonuo Hospital, Kohima",
    desc: "Putuonuo Hospital, Kohima, achieved a major milestone in reproductive healthcare with the birth of its first in-vitro fertilisation (IVF) baby.",
    image: "/ivf.jpg",
    link: "https://www.morungexpress.com/nagalands-first-ivf-baby-born-at-putuonuo-hospital-kohima",
  },
  {
    id: 3,
    source: "Mokokchung Times",
    date: "July 8, 2024",
    title: "CM Neiphiu Rio inaugurates new state-of-the-art Putuonuo Hospital Complex in Kohima",
    desc: "Chief Minister of Nagaland, Neiphiu Rio, inaugurated the new state-of-the-art Putuonuo Hospital Complex at Daklane in Kohima, continuing a legacy of care, dedication, and community service.",
    image: "/rio.jpeg",
    link: "https://mokokchungtimes.com/cm-neiphiu-rio-inaugurates-new-state-of-the-art-putuonuo-hospital-complex-in-kohima/",
  },
  {
    id: 4,
    source: "cancer.jpg",
    date: "June 1, 2024",
    title: "National Cancer Survivor Day observed in Kohima at Putuonuo Hospital",
    desc: "The National Cancer Survivor Day event was commemorated at Putuonuo Hospital in Kohima, where cancer survivors and caregivers shared their journeys.",
    image: "/hospital2.jpeg",
    link: "https://nagalandtribune.in/national-cancer-survivor-day-observed-in-kohima-cancer-survivors-and-caregivers-shares-journey-with-cancer/",
  },
];

export default function Featured() {
  return (
    <div className="min-h-screen pb-24">
      {/* Header */}
      <section className="w-full px-6 md:px-12 lg:px-24 pt-12 pb-16 text-center">
        <FadeIn>
          <div className="inline-flex items-center rounded-full border border-slate-300 bg-white px-4 py-1.5 text-[11px] uppercase tracking-[0.22em] text-slate-500 mb-6">
            In The News
          </div>
          <h1 className="font-geist text-[42px] md:text-[56px] lg:text-[64px] font-medium tracking-tight text-slate-950 mb-6">
            Featured In
          </h1>
          <p className="text-slate-600 text-[14px] leading-7 max-w-2xl mx-auto">
            Stories and milestones from Putuonuo Hospital, as covered by leading publications across Nagaland and beyond.
          </p>
        </FadeIn>
      </section>

      {/* Articles Grid */}
      <section className="w-full max-w-[1280px] mx-auto px-6 md:px-12 lg:px-24 pt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14">
          {featuredItems.map((item, index) => (
            <FadeIn key={item.id} delay={index * 0.1}>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group cursor-pointer flex flex-col h-full"
              >
                {/* Image */}
                <div className="w-full aspect-[16/10] bg-slate-200 rounded-[24px] mb-6 overflow-hidden relative shadow-[0_8px_30px_rgba(15,23,42,0.04)] transition-all duration-500 group-hover:shadow-[0_16px_40px_rgba(15,23,42,0.12)]">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3.5 py-1.5 rounded-full text-[11px] font-medium text-slate-900 z-20 shadow-sm">
                    {item.date}
                  </div>
                </div>

                {/* Text */}
                <div className="flex flex-col flex-1 px-2">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-[11px] font-semibold tracking-[0.15em] text-brand-accent uppercase">
                      {item.source}
                    </span>
                    <div className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center transition-colors duration-300 group-hover:bg-brand-accent group-hover:border-brand-accent">
                      <ExternalLink className="text-slate-400 group-hover:text-brand-navy transition-colors duration-300" size={14} />
                    </div>
                  </div>
                  <h3 className="font-geist text-[20px] font-medium tracking-tight text-slate-950 mb-3 leading-snug group-hover:text-slate-700 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-[14px] leading-relaxed line-clamp-3">
                    {item.desc}
                  </p>
                  <div className="mt-5 inline-flex items-center gap-1.5 text-[12px] font-medium text-slate-400 group-hover:text-brand-accent transition-colors duration-300">
                    Read full article <ArrowUpRight size={13} />
                  </div>
                </div>
              </a>
            </FadeIn>
          ))}
        </div>
      </section>
    </div>
  );
}
