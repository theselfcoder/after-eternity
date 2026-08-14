import type { Metadata } from 'next';
import PageBackground from '@/components/PageBackground';
import Nav, { FloatingCall } from '@/components/Nav';
import SiteFooter from '@/components/SiteFooter';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact | After Eternity',
  description:
    'Contact After Eternity — tell us about your film project and get a tailored post-production workflow and quote.'
};

export default function ContactPage() {
  return (
    <>
      <PageBackground />
      <Nav variant="page" active="/contact" />
      <main className="relative z-20 min-h-screen bg-black/40 backdrop-blur-md border-t border-white/5 pt-28 md:pt-32 pb-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-5xl font-serif font-bold text-white mb-3">Discuss a Project</h1>
            <p className="text-gray-500 max-w-xl mx-auto text-sm">
              Tell us about your project. We&apos;ll craft a tailored post-production workflow and quote.
            </p>
          </div>

          <div className="max-w-2xl mx-auto bg-white/5 p-5 md:p-7 rounded-2xl border border-white/10 backdrop-blur-sm">
            <ContactForm />
          </div>
        </div>
      </main>
      <SiteFooter active="/contact" />
      <FloatingCall ariaLabel="Call After Eternity at +1 213 254 9766" />
    </>
  );
}