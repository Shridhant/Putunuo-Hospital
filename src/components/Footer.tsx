import { ArrowRight } from "lucide-react";
import FadeIn from "./FadeIn";

export default function Footer() {
  return (
    <footer className="mx-auto mt-24 max-w-[1280px] px-3 pb-6 md:px-6 w-full">
      <FadeIn>
        <div className="rounded-[28px] bg-slate-950 p-8 text-white md:p-12 shadow-xl">
          <div className="grid gap-10 md:grid-cols-3">
            <div>
              <div className="flex items-center gap-3">
                <img src="/logo.png" alt="Putunuo Hospital" className="h-12 w-12 rounded-full object-cover" />
                <div className="font-geist text-2xl font-medium tracking-tight">Putunuo Hospital</div>
              </div>
            </div>
            <p className="text-[13px] leading-relaxed text-white/55">
              A modern hospital environment focused on specialist treatment, compassionate care,
              and a patient journey designed with greater calm and clarity.
            </p>
            <div>
              <div className="text-[13px]">Stay connected</div>
              <div className="mt-3 flex items-center justify-between rounded-full border border-white/20 px-4 py-2 hover:border-white/40 transition-colors bg-white/5">
                <input
                  className="w-full bg-transparent text-[13px] placeholder-white/40 outline-none"
                  placeholder="Your Email Address"
                />
                <ArrowRight className="h-4 w-4 shrink-0 text-white/70" />
              </div>
            </div>
          </div>
          <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-[11px] text-white/45 md:flex-row md:items-center md:justify-between">
            <div className="flex gap-4 uppercase tracking-[0.2em]">
              <a href="#" className="transition hover:text-white">
                Instagram
              </a>
              <a href="#" className="transition hover:text-white">
                Twitter
              </a>
              <a href="#" className="transition hover:text-white">
                LinkedIn
              </a>
              <a href="#" className="transition hover:text-white">
                Facebook
              </a>
            </div>
            <div>Putunuo Hospital, all rights reserved 2026</div>
          </div>
        </div>
      </FadeIn>
    </footer>
  );
}
