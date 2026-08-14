import Link from 'next/link';
import SiteFooter from '@/components/SiteFooter';

export default function ThankYouPage() {
  return (
    <>
      <main className="relative min-h-screen w-full overflow-hidden flex items-center justify-center px-6">
      <div
        className="ty-glow fixed inset-0 -z-10 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at top, rgba(138,0,0,0.18), #050505 60%)' }}
      />
      <div className="relative z-10 text-center max-w-xl mx-auto">
        <div className="ty-check animate-pop mx-auto mb-10 flex items-center justify-center w-24 h-24 rounded-full bg-crimson/15 border border-crimson/40 shadow-[0_0_40px_rgba(138,0,0,0.4)]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="44"
            height="44"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#ff4d4d"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20 6 9 17l-5-5" />
          </svg>
        </div>
        <h1 className="fade-up font-serif text-5xl md:text-7xl font-black text-white tracking-wide mb-6" style={{ animationDelay: '0.15s' }}>
          Thank You
        </h1>
        <p className="fade-up text-gray-400 text-base md:text-lg leading-relaxed mb-12" style={{ animationDelay: '0.3s' }}>
          Your inquiry has been received. Our team will review your project and get back to you within one business
          day.
        </p>
        <div
          className="fade-up flex flex-col sm:flex-row items-center justify-center gap-4"
          style={{ animationDelay: '0.45s' }}
        >
          <Link
            href="/"
            className="rounded-full bg-white text-black font-bold py-4 px-10 uppercase tracking-widest text-sm hover:bg-gray-200"
          >
            Back to Home
          </Link>
          <a
            href="tel:+12132549766"
            className="rounded-full border border-white/20 text-white font-bold py-4 px-10 uppercase tracking-widest text-sm hover:border-crimson hover:text-crimson transition-colors"
          >
            Call 213 254 9766
          </a>
        </div>
        <div
          className="fade-up mt-16 flex items-center justify-center gap-4 text-[11px] uppercase tracking-widest text-gray-600"
          style={{ animationDelay: '0.6s' }}
        >
          <Link href="/privacy" className="hover:text-crimson transition-colors">
            Privacy Policy
          </Link>
          <span className="text-gray-800">|</span>
          <Link href="/terms" className="hover:text-crimson transition-colors">
            Terms
          </Link>
        </div>
        <div
          className="fade-up mt-4 text-gray-700 text-xs uppercase tracking-widest"
          style={{ animationDelay: '0.6s' }}
        >
          After Eternity &mdash; Film Production Studio
        </div>
      </div>
    </main>
      <SiteFooter />
    </>
  );
}