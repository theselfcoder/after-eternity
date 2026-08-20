import ReelFrame from './ReelFrame';
import PortfolioGrid from './PortfolioGrid';
import Testimonials from './Testimonials';
import AboutPhilosophy from './AboutPhilosophy';
import ServiceCards from './ServiceCards';
import ContactForm from './ContactForm';
import { InstagramIcon, PhoneIcon } from './icons';

export default function HomeView() {
  return (
    <div id="glass-wrapper" className="relative bg-black/40 backdrop-blur-md shadow-[0_-50px_100px_rgba(0,0,0,0.8)] border-t border-white/5">
      {/* ===================== REEL ===================== */}
      <section
        id="reel"
        className="w-full min-h-[90vh] md:min-h-screen flex flex-col justify-center bg-transparent relative py-16 px-6 overflow-hidden border-b border-white/5"
      >
        <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col justify-between h-full gap-8">
          <div className="border-b border-white/10 pb-6 mb-2">
            <p className="text-crimson text-xs font-bold tracking-[0.4em] uppercase mb-2">Featured Showcase</p>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
              <div>
                <h2 className="text-3xl md:text-6xl font-serif font-black text-white leading-tight uppercase tracking-tight">
                  The Language of Color
                </h2>
                <p className="text-gray-400 text-xs md:text-sm tracking-widest uppercase mt-1">Studio Reel &mdash; 2026</p>
              </div>
              <div className="max-w-md text-left md:text-right">
                <p className="text-gray-400 text-xs md:text-sm leading-relaxed font-light">
                  An immersive exploration of tone, contrast, and emotion. Capturing the delicate boundary where
                  technical precision meets abstract feelings.
                </p>
              </div>
            </div>
          </div>
          <ReelFrame />
        </div>
      </section>

      {/* ===================== PORTFOLIO ===================== */}
      <section id="portfolio" className="py-32 bg-transparent px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-white/10 pb-8">
            <div>
              <h2 className="text-4xl md:text-7xl font-serif font-bold text-white mb-2">Selected Works</h2>
              <p className="text-crimson tracking-widest uppercase text-sm font-bold">Curated from the archives</p>
            </div>
            <div className="mt-6 md:mt-0 text-right">
              <p className="text-gray-500 text-sm">Click to play</p>
            </div>
          </div>
          <PortfolioGrid />
        </div>
      </section>

      <Testimonials />

      <AboutPhilosophy />

      {/* ===================== SERVICES ===================== */}
      <section id="services" className="py-32 bg-eternity-dark relative overflow-hidden">
        <div
          className="absolute inset-0 z-0 opacity-10 pointer-events-none mix-blend-luminosity"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=2070&auto=format&fit=crop')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        ></div>
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-eternity-dark via-blood-red/5 to-eternity-dark pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blood-red/10 to-transparent pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-4">Services</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Precision tools for abstract concepts.</p>
          </div>
          <ServiceCards />
        </div>
      </section>

      {/* ===================== CONTACT ===================== */}
      <section id="contact" className="pt-16 md:pt-24 pb-56 bg-eternity-black relative px-6">
        <div id="contact-glow" className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-crimson/10 via-eternity-black to-eternity-black pointer-events-none"></div>

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-3">Discuss a Project</h2>
            <p className="text-gray-500 max-w-xl mx-auto text-sm">
              Tell us about your project. We&apos;ll craft a tailored post-production workflow and quote.
            </p>
          </div>

          <div className="max-w-2xl mx-auto bg-white/5 p-5 md:p-7 rounded-2xl border border-white/10 backdrop-blur-sm">
            <ContactForm />
          </div>
        </div>

        <footer className="absolute bottom-4 left-0 w-full flex flex-col items-center gap-3 pb-4">
          <a
            href="tel:+12132549766"
            className="text-white hover:text-crimson transition-colors duration-300 flex items-center gap-2 text-base font-bold tracking-widest"
          >
            <PhoneIcon className="w-4 h-4" />
            <span>213 254 9766</span>
          </a>
          <a
            href="https://instagram.com/iviujtaba"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-crimson transition-colors duration-300 flex items-center gap-2 text-xs tracking-widest uppercase font-bold"
          >
            <InstagramIcon className="w-4 h-4" />
            <span>@iviujtaba</span>
          </a>
          <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1 text-[11px] uppercase tracking-widest text-gray-500">
            <a href="/portfolio" className="hover:text-crimson transition-colors">
              Portfolio
            </a>
            <a href="/about" className="hover:text-crimson transition-colors">
              About
            </a>
            <a href="/faq" className="hover:text-crimson transition-colors">
              FAQ
            </a>
            <a href="/contact" className="hover:text-crimson transition-colors">
              Contact
            </a>
          </nav>
          <div className="flex items-center gap-5 text-[11px] uppercase tracking-widest text-gray-600">
            <a href="/privacy" className="hover:text-crimson transition-colors">
              Privacy Policy
            </a>
            <span className="text-gray-800">|</span>
            <a href="/terms" className="hover:text-crimson transition-colors">
              Terms
            </a>
          </div>
          <span className="text-gray-700 text-xs uppercase tracking-widest">
            &copy; 2026 After Eternity. All Rights Reserved.
          </span>
        </footer>
      </section>
    </div>
  );
}