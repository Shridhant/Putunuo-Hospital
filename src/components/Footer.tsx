import { HeartPulse } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-brand-navy text-white px-6 md:px-12 lg:px-24 pt-24 pb-12 overflow-hidden relative">
      <div className="flex flex-col md:flex-row justify-between items-start gap-16 mb-24">
        
        <div className="flex flex-col max-w-md">
          <p className="text-xs text-gray-400 mb-6">Read Our Copyright ©</p>
          <h3 className="font-playfair text-2xl md:text-3xl font-medium leading-tight mb-8">
            HEALING LIVES RESTORING SMILES<br />
            YOUR WELLNESS BEGINS WITH US
          </h3>
          <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
            Kohima nagaland<br />
            Address: New Market Rd, Daklane, Kohima, Nagaland 797001
          </p>
        </div>

        <div className="grid grid-cols-2 gap-16">
          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-sm tracking-wide mb-2">RESOURCE</h4>
            <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Blog</a>
            <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Events</a>
            <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Help Centre</a>
            <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Support</a>
          </div>
          
          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-sm tracking-wide mb-2">LEGAL</h4>
            <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Terms</a>
            <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Privacy</a>
            <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Cookies</a>
            <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Settings</a>
          </div>
        </div>
      </div>

      {/* Center Angel Icon Placeholder */}
      <div className="absolute left-1/2 -translate-x-1/2 top-32 opacity-20 pointer-events-none">
        <HeartPulse size={120} strokeWidth={1} />
      </div>

      {/* Bottom Large Text */}
      <div className="flex justify-between items-end border-t border-white/20 pt-12">
        <div className="text-xs text-gray-400">
          <p>Mail</p>
          <p className="text-white mt-1">hello@putuonuo.com</p>
        </div>
        
        <div className="text-xs text-gray-400 text-right">
          <p>Phone</p>
          <p className="text-white mt-1">087873 12687</p>
        </div>
      </div>

      <div className="mt-12 overflow-hidden flex justify-center">
        <h1 className="font-playfair text-[12vw] font-bold text-white tracking-widest leading-none select-none opacity-90">
          PUTUONUO
        </h1>
      </div>
    </footer>
  );
}
