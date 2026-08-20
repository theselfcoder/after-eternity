import type { Metadata } from 'next';
import Link from 'next/link';
import PageBackground from '@/components/PageBackground';
import Nav, { FloatingCall } from '@/components/Nav';
import SiteFooter from '@/components/SiteFooter';
import FaqExplorer from '@/components/FaqExplorer';
import { BackArrowIcon } from '@/components/icons';

export const metadata: Metadata = {
  title: 'FAQ | After Eternity',
  description:
    'Post-production knowledge base — professional insights on color grading, editing, sound design, and full post-production from After Eternity.',
  robots: { index: true, follow: true }
};

export default function FaqPage() {
  return (
    <>
      <PageBackground />
      <Nav variant="page" active="/faq" />
      <main className="relative z-20 min-h-screen bg-black/40 backdrop-blur-md border-t border-white/5 pt-24 md:pt-28 pb-16 px-4 sm:px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <Link
              href="/"
              className="group inline-flex items-center gap-2 text-xs tracking-[0.2em] text-gray-400 hover:text-crimson uppercase transition-colors"
            >
              <BackArrowIcon className="w-4 h-4 group-hover:-translate-x-1.5 transition-transform" />
              <span>Back to Main Studio</span>
            </Link>
          </div>

          <FaqExplorer />

          <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
            <div>
              <p className="text-white text-sm font-medium">Have a specialized, custom request for your film project?</p>
              <p className="text-gray-500 text-xs mt-0.5">
                We adapt our pipeline custom to match your unique creative constraints.
              </p>
            </div>
            <Link
              href="/contact"
              className="cta-btn bg-crimson text-white hover:bg-white hover:text-crimson px-6 py-2.5 rounded-full text-xs font-bold tracking-[0.15em] uppercase transition-all duration-300 shrink-0"
            >
              Discuss Project
            </Link>
          </div>
        </div>
      </main>
      <SiteFooter active="/faq" />
      <FloatingCall ariaLabel="Call After Eternity at +1 213 254 9766" />
    </>
  );
}