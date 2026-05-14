import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  ArrowRight,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Play,
  Star,
} from "lucide-react";
import FadeIn from "../components/FadeIn";

const brands = ["Critical Care", "Cardiology", "Surgery", "Neurology", "Wellness"];
const tabs = ["All", "Facilities", "Diagnostics", "Care", "Recovery", "Wellness"];

const projects = [
  {
    img: "/hospital1.jpeg",
    title: "Advanced Diagnostics",
    sub: "Precision-led assessment",
    category: "Diagnostics",
    note: "Fast imaging and clearer clinical decisions",
  },
  {
    img: "/hospital2.jpeg",
    title: "Critical Response",
    sub: "Emergency infrastructure",
    category: "Care",
    note: "Rapid triage, monitoring, and urgent support",
  },
  {
    img: "/hero3.jpg",
    title: "Healing Suites",
    sub: "Restorative patient rooms",
    category: "Recovery",
    tall: true,
    note: "Quiet rooms built for longer recovery windows",
  },
  {
    img: "/hero1.jpg",
    title: "Specialist Wing",
    sub: "Integrated treatment floors",
    category: "Facilities",
    tall: true,
    note: "A connected environment for specialists and staff",
  },
  {
    img: "/hero2.jpg",
    title: "Wellness Pavilion",
    sub: "Preventive care design",
    category: "Wellness",
    wide: true,
    note: "A lighter space for checkups and preventive visits",
  },
  {
    img: "/hospital3.jpeg",
    title: "Family Care Hub",
    sub: "Comfort-centered service",
    category: "Care",
    note: "Welcoming waiting areas and family-first circulation",
  },
];

const spotlightSlides = [
  {
    img: "/hero2.jpg",
    title: "Calm spaces,\ncarefully designed for healing.",
    body:
      "From daylight strategy to circulation flow, every area is shaped to reduce stress and help patients and families feel supported from arrival to recovery.",
  },
  {
    img: "/hospital2.jpeg",
    title: "Clinical precision\nwith a human experience.",
    body:
      "We pair specialist expertise, responsive systems, and comfortable environments so treatment feels organized, transparent, and deeply personal.",
  },
  {
    img: "/hero3.jpg",
    title: "Built around trust,\ncomfort, and continuity.",
    body:
      "Our teams work across diagnostics, surgery, and follow-up care to create a smooth journey instead of fragmented hospital visits.",
  },
];

const expertiseItems = [
  { label: "Multispecialty Consults", img: "/hospital1.jpeg" },
  { label: "Modern Diagnostics", img: "/hero1.jpg" },
  { label: "Emergency Readiness", img: "/hospital2.jpeg" },
  { label: "Patient Recovery Suites", img: "/hero3.jpg" },
  { label: "Preventive Wellness", img: "/hospital3.jpeg" },
];

const teamMembers = [
  { img: "/headshots.jpg", name: "Dr. Anaya Sen", role: "Chief Physician", size: "sm" as const },
  { img: "/headshots1.jpg", name: "Dr. Rohan Mehta", role: "Cardiac Lead", size: "md" as const },
  { img: "/headshots2.jpg", name: "Dr. Isha Kapoor", role: "Medical Director", size: "lg" as const },
  { img: "/headshots.jpg", name: "Dr. Neel Bose", role: "Surgery Head", size: "lg" as const },
  { img: "/headshots1.jpg", name: "Dr. Tara Joseph", role: "Patient Care Lead", size: "md" as const },
  { img: "/headshots2.jpg", name: "Dr. Vivek Das", role: "Diagnostic Specialist", size: "sm" as const },
];

const reviews = [
  {
    img: "/headshots.jpg",
    name: "Meera Sharma",
    role: "Patient Family Member",
    text:
      "The doctors were clear, calm, and incredibly respectful. What stood out most was how thoughtfully the whole hospital experience was organized.",
  },
  {
    img: "/headshots1.jpg",
    name: "Arvind Patel",
    role: "Outpatient Care",
    text:
      "Appointments, diagnostics, and follow-up all felt connected. It was efficient without ever feeling rushed, which made a stressful week much easier.",
  },
  {
    img: "/headshots2.jpg",
    name: "Naina Dutta",
    role: "Surgery Recovery",
    text:
      "The recovery wing felt quiet and reassuring, and every staff member communicated with warmth. That consistency really builds confidence.",
  },
];

export default function Home() {
  const [slide, setSlide] = useState(0);
  const [hoverIdx, setHoverIdx] = useState(0);
  const [activeTab, setActiveTab] = useState("All");
  const [reviewIdx, setReviewIdx] = useState(0);

  const current = spotlightSlides[slide];
  const activeReview = reviews[reviewIdx];
  const next = () => setSlide((index) => (index + 1) % spotlightSlides.length);
  const prev = () => setSlide((index) => (index - 1 + spotlightSlides.length) % spotlightSlides.length);
  const nextReview = () => setReviewIdx((index) => (index + 1) % reviews.length);
  const prevReview = () => setReviewIdx((index) => (index - 1 + reviews.length) % reviews.length);

  const filteredProjects =
    activeTab === "All"
      ? projects.slice(0, 5)
      : projects.filter((project) => project.category === activeTab);
  const visibleProjects = filteredProjects.length > 0 ? filteredProjects : projects.slice(0, 5);

  useEffect(() => {
    const timer = window.setInterval(nextReview, 5000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="bg-[#ffffff] font-inter text-slate-900">
      <section className="px-3 pt-3 md:px-6">
        <div className="mx-auto max-w-[1280px]">
          <FadeIn delay={0.08}>
            <div className="relative mt-3 overflow-hidden rounded-[28px]">
              <img
                src="/hero_building.png"
                alt="Putunuo Hospital exterior"
                className="h-[520px] w-full object-cover md:h-[680px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/10 to-slate-950/15" />

              <div className="absolute bottom-8 left-6 max-w-xl text-white md:bottom-12 md:left-12">
                <div className="inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.26em] text-white/80 backdrop-blur-sm">
                  Multispecialty Care
                </div>
                <h1 className="mt-5 font-geist text-[38px] font-medium leading-[1.04] tracking-tight md:text-[64px]">
                  Healthcare spaces
                  <br />
                  built around
                  <br />
                  people, trust, and care.
                </h1>
                <p className="mt-5 max-w-lg text-sm leading-7 text-white/75 md:text-[15px]">
                  Putunuo Hospital combines modern treatment, advanced diagnostics, and calming
                  environments so every visit feels more supported from the first consultation onward.
                </p>
                <div className="mt-7 flex flex-wrap items-center gap-3">
                  <button className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-slate-950 transition hover:bg-white/90">
                    Book a visit <ArrowRight className="h-4 w-4" />
                  </button>
                  <button className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-3 text-sm text-white backdrop-blur-md ring-1 ring-white/20 transition hover:bg-white/15">
                    <Play className="h-3.5 w-3.5 fill-white" /> Watch overview
                  </button>
                </div>
              </div>

              <div className="absolute right-5 top-5 hidden w-[300px] rounded-[22px] bg-black/20 p-3 backdrop-blur-lg ring-1 ring-white/12 md:block md:right-8 md:top-8">
                <div className="group flex items-center justify-between rounded-[18px] border border-white/15 bg-white/[0.04] px-5 py-4 transition duration-300 hover:border-white/40 hover:bg-white">
                  <div>
                    <div className="font-geist text-[26px] font-semibold leading-none text-white transition-colors duration-300 group-hover:text-slate-950">
                      24/7 Care
                    </div>
                    <div className="mt-1 text-[11px] tracking-wide text-white/55 transition-colors duration-300 group-hover:text-slate-600">
                      Emergency and specialist support
                    </div>
                  </div>
                  <ArrowUpRight className="h-5 w-5 shrink-0 text-white/70 transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-slate-950" />
                </div>
                <div className="mt-2.5 overflow-hidden rounded-[14px]">
                  <img src="/hospital1.jpeg" alt="Hospital corridor" className="h-[136px] w-full object-cover" />
                </div>
                <div className="mt-3 flex items-start justify-between px-1 pb-1">
                  <div>
                    <div className="font-geist text-[18px] font-semibold leading-tight text-white">
                      Thoughtful Healing
                    </div>
                    <div className="mt-0.5 text-[11px] text-white/55">
                      Environments designed for comfort and clarity.
                    </div>
                  </div>
                  <ArrowUpRight className="mt-0.5 h-5 w-5 shrink-0 text-white/75" />
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="mx-auto mt-24 max-w-[1280px] px-6">
        <div className="grid gap-14 md:grid-cols-2">
          <div>
            <div className="flex gap-3">
              {spotlightSlides.map((item, index) => (
                <motion.button
                  key={item.title}
                  whileHover={{ y: -3 }}
                  onClick={() => setSlide(index)}
                  className={`relative min-w-0 flex-1 overflow-hidden rounded-xl transition-all duration-500 ${
                    index === slide ? "ring-2 ring-slate-900 ring-offset-2 ring-offset-[#ffffff]" : "opacity-60 hover:opacity-100"
                  }`}
                >
                  <img
                    src={item.img}
                    alt=""
                    className={`h-[120px] w-full object-cover transition-transform duration-700 md:h-[144px] ${
                      index === slide ? "scale-105" : "scale-100"
                    }`}
                  />
                </motion.button>
              ))}
            </div>
            <div className="mt-3 flex items-center gap-4 text-[11px] text-slate-500">
              <span className="shrink-0 tabular-nums">
                {String(slide + 1).padStart(2, "0")}/{String(spotlightSlides.length).padStart(2, "0")}
              </span>
              <div className="h-px flex-1 bg-slate-300" />
              <div className="flex gap-1.5">
                <button
                  onClick={prev}
                  aria-label="Previous"
                  className="rounded-full border border-slate-300 p-1.5 transition hover:bg-white"
                >
                  <ChevronLeft className="h-3 w-3" />
                </button>
                <button
                  onClick={next}
                  aria-label="Next"
                  className="rounded-full border border-slate-300 p-1.5 transition hover:bg-white"
                >
                  <ChevronRight className="h-3 w-3" />
                </button>
              </div>
            </div>
            <AnimatePresence mode="wait">
              <motion.div
                key={slide}
                initial={{ opacity: 0, y: 12, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -8, filter: "blur(6px)" }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              >
                <h2 className="mt-6 whitespace-pre-line font-geist text-[30px] font-medium leading-[1.1] tracking-tight text-slate-950 md:text-[42px]">
                  {current.title}
                </h2>
                <p className="mt-4 max-w-md text-[14px] leading-7 text-slate-600">{current.body}</p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex flex-col">
            <div className="relative min-h-[240px] flex-1 overflow-hidden rounded-2xl md:min-h-[320px]">
              <AnimatePresence mode="wait">
                <motion.img
                  key={slide}
                  src={current.img}
                  alt={current.title}
                  initial={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, filter: "blur(8px)" }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </AnimatePresence>
            </div>
            <div className="mt-7 grid grid-cols-3 gap-6">
              {[
                { k: "20+", v: "Departments" },
                { k: "15K+", v: "Patients Served" },
                { k: "98%", v: "Care Satisfaction" },
              ].map((item) => (
                <FadeIn key={item.k} delay={0.1}>
                  <div className="font-geist text-[30px] font-medium tracking-tight text-slate-950 md:text-[38px]">
                    {item.k}
                  </div>
                  <div className="mt-1 text-[11px] uppercase tracking-[0.2em] text-slate-500">
                    {item.v}
                  </div>
                </FadeIn>
              ))}
            </div>
            <FadeIn delay={0.2}>
              <div className="mt-5 flex items-center gap-3">
                <div className="inline-flex items-center gap-1.5 rounded-full border border-slate-300 bg-white px-3.5 py-1.5 text-[12px]">
                  <Star className="h-3 w-3 fill-slate-900" /> 4.9
                </div>
                <button className="rounded-full border border-slate-300 px-4 py-1.5 text-[12px] transition hover:bg-white">
                  See Reviews
                </button>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-28 max-w-[1280px] px-6">
        <div className="grid gap-10 md:grid-cols-2 md:items-stretch">
          <FadeIn className="h-full">
            <div className="relative h-full min-h-[420px] overflow-hidden rounded-3xl md:min-h-[500px]">
              <AnimatePresence mode="wait">
                <motion.img
                  key={hoverIdx}
                  src={expertiseItems[hoverIdx].img}
                  alt={expertiseItems[hoverIdx].label}
                  initial={{ opacity: 0, scale: 1.06, filter: "blur(12px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, filter: "blur(8px)" }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </AnimatePresence>
              <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-slate-950/70 to-transparent p-5 text-white">
                <p className="max-w-[200px] text-[11px] leading-snug text-white/75">
                  Designed to keep high-quality care clear, calm, and easy to navigate.
                </p>
                <div className="text-right">
                  <div className="font-geist text-[44px] font-light leading-none">05</div>
                  <div className="mt-1 text-[10px] uppercase tracking-widest opacity-80">
                    Key Services
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.12}>
            <div className="text-[11px] uppercase tracking-[0.22em] text-slate-500">What we offer</div>
            <h2 className="mt-3 font-geist text-[30px] font-medium leading-[1.12] tracking-tight text-slate-950 md:text-[42px]">
              Expertise across every
              <br />
              stage of patient care.
            </h2>
            <p className="mt-4 max-w-md text-[14px] leading-7 text-slate-600">
              Consultation, diagnostics, treatment, surgery, recovery, and preventive health all
              work together in one coordinated hospital experience.
            </p>
            <div className="mt-6 border-l border-slate-300">
              {expertiseItems.map((item, index) => (
                <motion.div
                  key={item.label}
                  whileHover={{ x: 4 }}
                  onMouseEnter={() => setHoverIdx(index)}
                  className="group relative flex cursor-pointer items-center justify-between overflow-hidden border-b border-slate-300 py-3 pl-6 transition-colors"
                >
                  <span className="absolute inset-y-0 left-0 -z-0 w-0 bg-white/80 transition-all duration-500 ease-out group-hover:w-full" />
                  <div className="relative z-10 flex items-center gap-6 transition-all duration-500">
                    <span className="text-[11px] text-slate-500">0{index + 1}</span>
                    <span className="text-[16px] text-slate-900 transition-[letter-spacing] duration-500 group-hover:tracking-wide">
                      {item.label}
                    </span>
                  </div>
                  <ArrowUpRight className="relative z-10 h-4 w-4 -translate-x-2 opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100" />
                </motion.div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="mt-24">
        <div className="marquee-mask overflow-hidden">
          <div className="animate-marquee flex w-max items-center gap-16 px-8">
            {[...brands, ...brands, ...brands, ...brands].map((brand, index) => (
              <div
                key={`${brand}-${index}`}
                className="font-geist text-2xl font-medium tracking-tight text-slate-700/70 grayscale transition hover:text-slate-900 md:text-3xl"
              >
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto mt-28 max-w-[1280px] px-6">
        <FadeIn>
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <div className="text-[11px] uppercase tracking-[0.22em] text-slate-500">Our spaces</div>
              <h2 className="mt-3 font-geist text-[30px] font-medium leading-[1.12] tracking-tight text-slate-950 md:text-[42px]">
                A closer look at the
                <br />
                environments behind our care.
              </h2>
            </div>
            <p className="max-w-sm text-[14px] leading-7 text-slate-600">
              Explore treatment, recovery, diagnostics, and wellness spaces designed to feel efficient,
              reassuring, and human-centered at every step.
            </p>
          </div>
        </FadeIn>

        <div className="mt-8 flex flex-wrap gap-2">
          {tabs.map((tab, index) => (
            <motion.button
              key={tab}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.03 }}
              type="button"
              onClick={() => setActiveTab(tab)}
              aria-pressed={activeTab === tab}
              className={`rounded-full px-4 py-1.5 text-[12px] transition ${
                activeTab === tab
                  ? "bg-slate-900 text-white"
                  : "border border-slate-300 text-slate-600 hover:bg-white hover:text-slate-900"
              }`}
            >
              {tab}
            </motion.button>
          ))}
        </div>

        <motion.div layout className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4 md:auto-rows-[15rem]">
          <AnimatePresence mode="popLayout">
            {visibleProjects.map((project, index) => (
              <motion.div
                layout
                key={`${activeTab}-${project.title}`}
                initial={{ opacity: 0, y: 18, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -12, filter: "blur(8px)" }}
                transition={{ duration: 0.42, delay: index * 0.04, ease: [0.22, 1, 0.36, 1] }}
                className={`${project.tall ? "md:row-span-2" : ""} ${project.wide ? "sm:col-span-2" : ""}`}
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      <section className="mx-auto mt-32 max-w-[1280px] px-6">
        <div className="grid gap-10 md:grid-cols-[0.95fr_1.05fr] md:items-start">
          <FadeIn className="flex h-full flex-col justify-between rounded-3xl bg-white p-6 shadow-[0_18px_60px_rgba(15,23,42,0.07)] md:min-h-[420px] md:p-8">
            <div>
              <div className="text-[11px] uppercase tracking-[0.22em] text-slate-500">Why Putunuo</div>
              <h2 className="mt-3 font-geist text-[30px] font-medium leading-[1.12] tracking-tight text-slate-950 md:text-[42px]">
                Creating care journeys
                <br />
                that feel expert,
                <br />
                warm, and coordinated.
              </h2>
              <p className="mt-5 max-w-md text-[14px] leading-7 text-slate-600">
                We bring specialist medicine, responsive staff, and carefully planned spaces together so
                patients can move through care with more clarity and less friction.
              </p>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-3 border-t border-slate-200 pt-6">
              {[
                ["40+", "Doctors"],
                ["12", "Core Units"],
                ["10yr", "Service"],
              ].map(([value, label]) => (
                <div key={label}>
                  <div className="font-geist text-[26px] font-medium tracking-tight text-slate-950">{value}</div>
                  <div className="mt-1 text-[10px] uppercase tracking-[0.2em] text-slate-500">{label}</div>
                </div>
              ))}
            </div>
            <button className="mt-8 inline-flex w-fit items-center gap-2 rounded-full border border-slate-300 px-5 py-2 text-[13px] transition hover:bg-slate-50">
              Explore specialties <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </FadeIn>

          <FadeIn delay={0.14}>
            <img
              src="/hospital3.jpeg"
              alt="Patient-centered hospital interior"
              className="h-[320px] w-full rounded-2xl object-cover md:h-[420px]"
            />
            <p className="mt-6 max-w-sm text-[14px] leading-7 text-slate-600">
              We combine hospital-grade systems with a gentler visual and spatial experience so care
              feels grounded, not overwhelming.
            </p>
          </FadeIn>
        </div>

        <FadeIn delay={0.1}>
          <div className="relative mt-14 overflow-hidden rounded-3xl">
            <img
              src="/hero1.jpg"
              alt="Specialist care environment"
              className="h-[420px] w-full object-cover md:h-[560px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
            <button className="absolute inset-0 m-auto flex h-16 w-16 items-center justify-center rounded-full bg-white/85 backdrop-blur transition hover:scale-110">
              <Play className="h-5 w-5 fill-slate-900 text-slate-900" />
            </button>
          </div>
        </FadeIn>
      </section>

      <section className="mx-auto mt-32 max-w-[1280px] px-6 text-center">
        <FadeIn>
          <div className="inline-flex items-center rounded-full border border-slate-300 bg-white px-4 py-1.5 text-[11px] uppercase tracking-[0.22em] text-slate-500">
            Team
          </div>
          <h2 className="mt-5 font-geist text-[38px] font-medium leading-[1.1] tracking-tight text-slate-950 md:text-[54px]">
            Meet our care team
          </h2>
          <p className="mx-auto mt-4 max-w-md text-[14px] leading-7 text-slate-600">
            Experienced clinicians and support staff working together across consultation, treatment,
            recovery, and patient guidance.
          </p>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="relative mt-16 flex flex-wrap items-end justify-center gap-4 lg:flex-nowrap">
            <div className="pointer-events-none absolute inset-x-[10%] top-8 bottom-0 rounded-[50%] bg-gradient-to-b from-amber-100/70 to-white/40 blur-2xl" />

            {teamMembers.map((member) => {
              const sizeMap = {
                sm: { card: "h-[190px] w-[140px]", translate: "translate-y-6" },
                md: { card: "h-[230px] w-[165px]", translate: "translate-y-2" },
                lg: { card: "h-[270px] w-[185px]", translate: "translate-y-0" },
              };
              const { card, translate } = sizeMap[member.size];

              return (
                <div
                  key={member.name}
                  className={`group relative shrink-0 ${translate} transition-transform duration-500 hover:-translate-y-3`}
                >
                  <div className={`${card} overflow-hidden rounded-[22px] border border-white shadow-[0_8px_30px_rgba(15,23,42,0.1)] ring-1 ring-black/[0.04]`}>
                    <img
                      src={member.img}
                      alt={member.name}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-3 text-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="text-[12px] font-medium text-slate-900">{member.name}</div>
                    <div className="text-[11px] text-slate-500">{member.role}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </FadeIn>
      </section>

      <section className="mx-auto mt-32 max-w-[1280px] px-6">
        <div className="grid gap-12 md:grid-cols-[0.85fr_1.15fr] md:items-center">
          <FadeIn>
            <div className="text-[11px] uppercase tracking-[0.22em] text-slate-500">Testimonials</div>
            <h2 className="mt-3 font-geist text-[30px] font-medium leading-[1.12] tracking-tight text-slate-950 md:text-[42px]">
              Stories from patients
              <br />
              and families we’ve
              <br />
              cared for.
            </h2>
            <button className="mt-8 rounded-full bg-slate-900 px-5 py-2.5 text-[13px] text-white transition hover:scale-[1.02]">
              Share your experience
            </button>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-5 shadow-[0_18px_60px_rgba(15,23,42,0.07)] md:p-7">
              <AnimatePresence mode="wait">
                <motion.div
                  key={reviewIdx}
                  initial={{ opacity: 0, x: 24, filter: "blur(14px)" }}
                  animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, x: -24, filter: "blur(14px)" }}
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Review {...activeReview} />
                </motion.div>
              </AnimatePresence>

              <div className="mt-6 flex items-center justify-between border-t border-slate-200 pt-5">
                <div className="flex gap-1.5">
                  {reviews.map((review, index) => (
                    <button
                      key={review.name}
                      type="button"
                      aria-label={`Show review ${index + 1}`}
                      onClick={() => setReviewIdx(index)}
                      className={`h-1.5 rounded-full transition-all ${
                        index === reviewIdx ? "w-7 bg-slate-900" : "w-1.5 bg-slate-300 hover:bg-slate-500/60"
                      }`}
                    />
                  ))}
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={prevReview}
                    aria-label="Previous review"
                    className="rounded-full border border-slate-300 p-2 transition hover:bg-slate-50"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <button
                    onClick={nextReview}
                    aria-label="Next review"
                    className="rounded-full border border-slate-300 p-2 transition hover:bg-slate-50"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

    </div>
  );
}

function ProjectCard({
  img,
  title,
  sub,
  category,
  note,
}: {
  img: string;
  title: string;
  sub: string;
  category: string;
  note: string;
  tall?: boolean;
  wide?: boolean;
}) {
  return (
    <div className="group relative flex h-full flex-col overflow-hidden rounded-[26px] border border-slate-200/80 bg-white/95 shadow-[0_16px_45px_rgba(15,23,42,0.07)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_24px_65px_rgba(15,23,42,0.12)]">
      <div className="relative mx-3 mt-3 min-h-0 flex-1 overflow-hidden rounded-[22px]">
        <img
          src={img}
          alt={title}
          className={`h-full w-full object-cover transition-transform duration-700 group-hover:scale-105`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent" />
        <div className="absolute left-4 top-4 inline-flex rounded-full border border-white/25 bg-white/10 px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-white backdrop-blur-sm">
          {category}
        </div>
        <div className="absolute inset-x-4 bottom-4">
          <div className="max-w-[85%] text-[12px] leading-5 text-white/80">{note}</div>
        </div>
      </div>

      <div className="flex shrink-0 items-center justify-between p-5">
        <div>
          <div className="font-geist text-[17px] font-medium tracking-tight text-slate-900">{title}</div>
          <div className="mt-1 text-[12px] text-slate-500">{sub}</div>
        </div>
        <div className="rounded-full border border-slate-200 bg-slate-50 p-2 transition duration-300 group-hover:border-slate-900 group-hover:bg-slate-900">
          <ArrowUpRight className="h-4 w-4 transition duration-300 group-hover:text-white" />
        </div>
      </div>
    </div>
  );
}

function Review({
  img,
  name,
  role,
  text,
}: {
  img: string;
  name: string;
  role: string;
  text: string;
}) {
  return (
    <div>
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <img src={img} alt={name} className="h-12 w-12 rounded-full object-cover" />
          <div>
            <div className="text-[14px] font-medium text-slate-900">{name}</div>
            <div className="text-[11px] text-slate-500">{role}</div>
          </div>
        </div>
        <div className="flex items-center gap-1 text-[11px] text-slate-700">
          <Star className="h-3 w-3 fill-slate-900" /> 5.0
        </div>
      </div>
      <p className="mt-6 text-[18px] leading-8 text-slate-900 md:text-[22px] md:leading-10">{text}</p>
    </div>
  );
}
