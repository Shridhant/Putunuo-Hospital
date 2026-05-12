import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

const featuredBlogs = [
  { 
    id: 1, 
    name: "Nagaland Post", 
    desc: "Putuonuo Hospital celebrates 35th Foundation Day with achievements",
    link: "https://nagalandpost.com/putuonuo-hospital-celebrates-35th-foundation-day-with-achievements/",
    image: "/hero2.jpg"
  },
  { 
    id: 2, 
    name: "Eastern Mirror", 
    desc: "Putuonuo Hospital holds interactive session with Miss Kohima 2025 contestants",
    link: "https://www.easternmirrornagaland.com/putuonuo-hospital-holds-interactive-session-with-miss-kohima-2025-contestants",
    image: "/hero1.jpg"
  },
  { 
    id: 3, 
    name: "Morung Express", 
    desc: "Nagaland's first IVF baby born at Putuonuo Hospital, Kohima",
    link: "https://www.morungexpress.com/nagalands-first-ivf-baby-born-at-putuonuo-hospital-kohima",
    image: "/hero3.jpg"
  },
  { 
    id: 4, 
    name: "Nagaland Post", 
    desc: "Nagaland: 16 women receive Dr Toshevi MBBS Award",
    link: "https://nagalandpost.com/nagaland-16-women-receive-dr-toshevi-mbbs-award/",
    image: "/hero2.jpg"
  },
];

export default function FeaturedIn() {
  return (
    <section className="w-full px-6 md:px-12 lg:px-24 py-24 bg-white border-b border-gray-100 flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="text-xs font-bold text-gray-400 tracking-widest uppercase mb-4">
          In The News
        </p>
        <h2 className="font-playfair text-3xl md:text-4xl font-medium text-brand-navy">
          Featured Stories
        </h2>
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-7xl">
        {featuredBlogs.map((blog, idx) => (
          <motion.a
            href={blog.link}
            target="_blank"
            rel="noopener noreferrer"
            key={blog.id}
            initial={{ opacity: 0, filter: "blur(5px)", y: 30 }}
            whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="group flex flex-col bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
          >
            {/* Image Block */}
            <div className="w-full aspect-video bg-gray-100 overflow-hidden relative">
              <img 
                src={blog.image} 
                alt={blog.desc} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-brand-navy/0 group-hover:bg-brand-navy/10 transition-colors duration-300" />
            </div>
            
            {/* Content Block */}
            <div className="p-6 flex flex-col flex-1 relative">
              <div className="flex justify-between items-start mb-3">
                <span className="text-xs font-bold text-blue-600 uppercase tracking-wide">
                  {blog.name}
                </span>
                <ArrowUpRight className="text-gray-400 group-hover:text-blue-600 transition-colors transform group-hover:translate-x-1 group-hover:-translate-y-1" size={18} />
              </div>
              <h4 className="font-playfair font-bold text-lg text-brand-navy leading-snug group-hover:text-blue-700 transition-colors">
                {blog.desc}
              </h4>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
