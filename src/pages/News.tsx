import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

const newsItems = [
  {
    id: 1,
    category: "Hospital News",
    date: "Oct 12, 2023",
    title: "Putuonuo Hospital Introduces State-of-the-Art MRI Technology",
    desc: "We are thrilled to announce the addition of a new 3T MRI scanner to enhance diagnostic precision for our patients.",
    image: "/hospital3.jpeg",
  },
  {
    id: 2,
    category: "Health Tips",
    date: "Sep 28, 2023",
    title: "Understanding Heart Health in Your 40s",
    desc: "Cardiologist Dr. Smith shares essential advice for maintaining cardiovascular health as you enter middle age.",
    image: "/hospital1.jpeg",
  },
  {
    id: 3,
    category: "Community",
    date: "Sep 15, 2023",
    title: "Annual Free Health Checkup Camp a Massive Success",
    desc: "Over 500 residents participated in our free health camp last weekend, receiving vital screenings and consultations.",
    image: "/hospital2.jpeg",
  },
  {
    id: 4,
    category: "Awards",
    date: "Aug 30, 2023",
    title: "Recognized as Top Healthcare Provider in Nagaland",
    desc: "Putuonuo Hospital has been awarded the Excellence in Healthcare Award for our continuous dedication to patient care.",
    image: "/hero2.jpg",
  },
];

export default function News() {
  return (
    <div className="min-h-screen bg-white pb-24">
      {/* Header Section */}
      <section className="w-full px-6 md:px-12 lg:px-24 pt-20 pb-16 bg-brand-light text-center">
        <motion.div
          initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block border border-gray-300 rounded-full px-4 py-1 text-xs font-medium text-gray-500 mb-6 bg-white">
            LATEST UPDATES
          </div>
          <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-medium text-brand-navy mb-6">
            News & Articles
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Stay informed with the latest updates from Putuonuo Hospital, including health tips, technological advancements, and community events.
          </p>
        </motion.div>
      </section>

      {/* News Grid */}
      <section className="w-full px-6 md:px-12 lg:px-24 pt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
          {newsItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, filter: "blur(10px)", y: 40 }}
              whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              className="group cursor-pointer flex flex-col"
            >
              {/* Image Placeholder with modern hover effects */}
              <div className="w-full aspect-[16/10] bg-gray-100 rounded-2xl mb-6 overflow-hidden relative shadow-sm transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2">
                <div className="absolute inset-0 bg-brand-navy/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                {/* Actual Image */}
                <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                
                {/* Floating Date Badge */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-lg text-xs font-bold text-brand-navy z-20 shadow-sm">
                  {item.date}
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 px-2">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-xs font-bold tracking-wider text-gray-400 uppercase">
                    {item.category}
                  </span>
                  <ArrowUpRight className="text-gray-400 group-hover:text-brand-navy transition-colors duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1" size={20} />
                </div>
                <h3 className="font-playfair text-2xl font-bold text-brand-navy mb-3 group-hover:text-brand-blue transition-colors duration-300 line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      
      {/* Load More */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="flex justify-center mt-20"
      >
        <button className="border border-brand-navy text-brand-navy px-10 py-3 rounded-full text-sm font-medium tracking-wide hover:bg-brand-navy hover:text-white transition-all duration-300 shadow-sm hover:shadow-md">
          LOAD MORE ARTICLES
        </button>
      </motion.div>

    </div>
  );
}
