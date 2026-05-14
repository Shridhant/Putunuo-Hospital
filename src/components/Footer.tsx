export default function Footer() {
  return (
    <footer className="w-full bg-white px-6 md:px-12 lg:px-24 pt-16 pb-8 flex flex-col items-center">
      {/* Huge Typography */}
      <div className="w-full overflow-hidden flex justify-center mb-16">
        <h1 className="font-playfair text-[8vw] md:text-[10vw] font-medium text-brand-navy tracking-tight leading-none whitespace-nowrap text-center">
          PUTUONUO- CONTACT
        </h1>
      </div>

      <div className="flex flex-col items-center text-center max-w-2xl mb-16">
        {/* Links */}
        <div className="flex gap-8 mb-8 text-sm font-semibold text-gray-700 uppercase tracking-widest">
          <a href="/about" className="hover:text-brand-navy transition-colors">About Us</a>
          <a href="#" className="hover:text-brand-navy transition-colors">FAQ</a>
          <a href="/contact" className="hover:text-brand-navy transition-colors">Contact Us</a>
        </div>

        {/* Text */}
        <p className="text-gray-500 text-sm leading-relaxed mb-8">
          Our top-tier medical facilities offer a comprehensive range of services, including advanced diagnostics, specialized treatment centers, and 24/7 emergency care.
        </p>

        {/* Social Icons */}
        <div className="flex gap-6 text-gray-400 text-xs font-bold uppercase tracking-widest">
          <a href="#" className="hover:text-brand-navy transition-colors">Facebook</a>
          <a href="#" className="hover:text-brand-navy transition-colors">Instagram</a>
          <a href="#" className="hover:text-brand-navy transition-colors">Twitter</a>
          <a href="#" className="hover:text-brand-navy transition-colors">LinkedIn</a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="w-full border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
        <p>Helpline: +91 87873 12687</p>
        <p>© 2026 Putuonuo Hospital. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
