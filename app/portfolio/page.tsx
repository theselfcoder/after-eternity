import type { Metadata } from 'next';
import PageBackground from '@/components/PageBackground';
import Nav, { FloatingCall } from '@/components/Nav';
import SiteFooter from '@/components/SiteFooter';
import PortfolioGrid from '@/components/PortfolioGrid';

export const metadata: Metadata = {
  title: 'Portfolio | After Eternity',
  description:
    'Selected works from After Eternity — color grading, editing, and post-production demos. Visit our YouTube channel for more.',
  robots: { index: true, follow: true }
};

export default function PortfolioPage() {
  return (
    <>
      <PageBackground />
      <Nav variant="page" active="/portfolio" />
      <main className="relative z-20 min-h-screen bg-black/40 backdrop-blur-md border-t border-white/5 pt-28 md:pt-32 pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-white/10 pb-8">
            <div>
              <p className="text-crimson tracking-widest uppercase text-sm font-bold mb-2">
                Curated from the archives
              </p>
              <h1 className="text-4xl md:text-7xl font-serif font-bold text-white">Selected Works</h1>
            </div>
            <div className="mt-6 md:mt-0 text-right">
              <p className="text-gray-500 text-sm">Click to play</p>
            </div>
          </div>

          <PortfolioGrid />
        </div>
      </main>
      <SiteFooter active="/portfolio" />
      <FloatingCall ariaLabel="Call After Eternity at +1 213 254 9766" />
    </>
  );
}