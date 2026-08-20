import type { Metadata } from 'next';
import Link from 'next/link';
import PageBackground from '@/components/PageBackground';
import Nav, { FloatingCall } from '@/components/Nav';
import SiteFooter from '@/components/SiteFooter';
import { ArrowRightIcon } from '@/components/icons';

export const metadata: Metadata = {
  title: 'About | After Eternity',
  description:
    'About After Eternity — a film production and post-production studio crafting images that endure beyond the final frame.',
  robots: { index: true, follow: true }
};

export default function AboutPage() {
  return (
    <>
      <PageBackground />
      <Nav variant="page" active="/about" />
      <main className="relative z-20 min-h-screen bg-black/40 backdrop-blur-md border-t border-white/5 pt-28 md:pt-32 pb-24 px-6 text-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 space-y-8">
            <div className="space-y-2">
              <h3 className="text-crimson text-lg font-bold tracking-widest uppercase">Philosophy</h3>
              <h1 className="text-4xl md:text-5xl font-serif font-bold leading-tight italic text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-100 to-white/60">
                &quot;Every Story Leaves Something Behind.&quot;
              </h1>
            </div>
            <p className="text-gray-400 leading-relaxed text-lg">
              After Eternity was founded on the belief that films should endure beyond their final frame. We partner
              with filmmakers to shape stories through editing, color grading, and creating images that remain
              emotionally resonant long after the credits roll.
            </p>
            <p className="text-gray-400 leading-relaxed text-lg">
              I like to take my time with every project until it feels complete. Whether that means traveling farther
              to capture the right footage or spending extra hours refining a single scene in post-production, If a
              story needs another day of filming, another revision, or another evening in the grading suite, that&apos;s
              time well spent.
            </p>
            <p className="text-gray-400 leading-relaxed text-lg">
              I believe the details are what make a film memorable. There&apos;s nothing more rewarding than seeing how
              far a project evolves from its earliest stages to the final frame.
            </p>
            <div className="pt-2">
              <div className="h-1 w-24 bg-crimson"></div>
            </div>
            <div className="pt-2">
              <Link
                href="/contact"
                className="cta-btn inline-flex items-center gap-2 bg-crimson text-white font-bold py-3 px-8 rounded-full hover:bg-white hover:text-crimson transition-all uppercase tracking-widest text-sm"
              >
                Discuss a Project
                <ArrowRightIcon className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="order-1 md:order-2 flex flex-col items-center justify-center relative group min-h-[400px]">
            <div className="absolute w-72 h-72 bg-crimson/10 rounded-full blur-3xl pointer-events-none group-hover:bg-crimson/15 transition-all duration-700"></div>
            <div className="relative z-10 flex flex-col items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.75"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 text-crimson animate-pulse transform group-hover:scale-105 group-hover:rotate-3 transition-all duration-700 ease-out"
              >
                <path d="M12 12V4a1 1 0 0 1 1-1h6.297a1 1 0 0 1 .651 1.759l-4.696 4.025" />
                <path d="m12 21-7.414-7.414A2 2 0 0 1 4 12.172V6.415a1.002 1.002 0 0 1 1.707-.707L20 20.009" />
                <path d="m12.214 3.381 8.414 14.966a1 1 0 0 1-.167 1.199l-1.168 1.163a1 1 0 0 1-.706.291H6.351a1 1 0 0 1-.625-.219L3.25 18.8a1 1 0 0 1 .631-1.781l4.165.027" />
              </svg>
            </div>
            <div className="mt-8 text-center z-10">
              <p className="font-serif text-xl tracking-[0.3em] text-white uppercase opacity-80 group-hover:opacity-100 transition-opacity">
                AFTER ETERNITY
              </p>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter active="/about" />
      <FloatingCall ariaLabel="Call After Eternity at +1 213 254 9766" />
    </>
  );
}