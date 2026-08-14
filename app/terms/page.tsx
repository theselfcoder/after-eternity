import type { Metadata } from 'next';
import PageBackground from '@/components/PageBackground';
import LegalHeader from '@/components/LegalHeader';
import SiteFooter from '@/components/SiteFooter';

export const metadata: Metadata = {
  title: 'Terms & Conditions | After Eternity',
  description:
    'The Terms & Conditions governing your use of after-eternity.com, including inquiries, call recording, and intellectual property.'
};

export default function TermsPage() {
  return (
    <>
      <PageBackground mode="radial" />
      <LegalHeader />
      <main className="max-w-4xl mx-auto px-6 py-14 md:py-20">
        <div className="mb-10">
          <p className="text-crimson text-xs font-bold tracking-[0.4em] uppercase mb-3">Legal</p>
          <h1 className="font-serif text-4xl md:text-6xl font-black text-white leading-tight tracking-wide">
            Terms &amp; Conditions
          </h1>
          <p className="text-gray-500 text-sm mt-4">Effective date: July 22, 2026</p>
        </div>

        <div className="prose-legal bg-white/[0.03] border border-white/10 rounded-2xl p-6 md:p-10 backdrop-blur-sm">
          <p>
            These Terms &amp; Conditions (&quot;Terms&quot;) govern your access to and use of the website{' '}
            <a href="https://after-eternity.com">after-eternity.com</a> (the &quot;Site&quot;), operated by{' '}
            <strong>After Eternity LLC</strong> (&quot;After Eternity,&quot; &quot;we,&quot; &quot;us,&quot; or
            &quot;our&quot;). By accessing or using the Site, submitting our contact form, or contacting us, you agree
            to be bound by these Terms. If you do not agree, please do not use the Site.
          </p>

          <h2>1. Use of the Site</h2>
          <p>You may use the Site for lawful, personal, and legitimate business purposes only. You agree not to:</p>
          <ul>
            <li>Use the Site in any way that violates applicable law or regulation.</li>
            <li>Attempt to gain unauthorized access to the Site, its servers, or related systems.</li>
            <li>Interfere with or disrupt the Site, or introduce malware or harmful code.</li>
            <li>Copy, scrape, republish, or exploit any content from the Site without our prior written permission.</li>
          </ul>

          <h2>2. Inquiries, Quotes &amp; Services</h2>
          <p>
            Information on the Site, including descriptions of our services, is provided for general informational
            purposes and does not constitute an offer or a binding quote. Submitting the contact form or requesting a
            quote does not create a contract or any obligation on either party. Any project or engagement we undertake
            will be governed by a <strong>separate written agreement</strong> (such as a proposal, statement of work,
            or contract) between you and After Eternity, which will control in the event of any conflict with these
            Terms.
          </p>

          <h2>3. Communications &amp; Call Recording</h2>
          <p>
            By providing your contact details or contacting us, you consent to receive communications from us relating
            to your inquiry, and (where permitted) marketing communications, from which you may opt out at any time.{' '}
            <strong>
              Calls to and from the phone numbers on our Site may be recorded and monitored using CallRail for quality
              assurance and conversion-tracking purposes.
            </strong>{' '}
            By placing or continuing a call with us, you consent to such recording and monitoring. Please see our{' '}
            <a href="/privacy">Privacy Policy</a> for details.
          </p>

          <h2>4. Intellectual Property</h2>
          <p>
            The Site and its contents — including text, graphics, logos, the &quot;After Eternity&quot; name and
            marks, layouts, and all films, reels, and portfolio materials — are owned by or licensed to After Eternity
            LLC and are protected by intellectual-property laws. Except as expressly permitted, you may not reproduce,
            distribute, modify, publicly display, or create derivative works from any of our content without our prior
            written consent. Third-party names, marks, and content shown on the Site (including embedded videos)
            remain the property of their respective owners.
          </p>

          <h2>5. Your Submissions</h2>
          <p>
            You are responsible for the accuracy of any information you submit through the Site. You represent that
            any material or information you provide does not infringe the rights of any third party and is not
            unlawful. You grant us permission to use the information you submit for the purpose of responding to your
            inquiry and providing our services.
          </p>

          <h2>6. Third-Party Links &amp; Embedded Content</h2>
          <p>
            The Site may include links to, or embedded content from, third-party platforms such as YouTube and
            Instagram. We do not control and are not responsible for the content, policies, or practices of those
            third parties. Your use of third-party services is subject to their own terms and policies.
          </p>

          <h2>7. Disclaimer of Warranties</h2>
          <p>
            The Site and its content are provided on an <strong>&quot;as is&quot;</strong> and{' '}
            <strong>&quot;as available&quot;</strong> basis, without warranties of any kind, whether express or
            implied, including but not limited to warranties of merchantability, fitness for a particular purpose,
            non-infringement, accuracy, or availability. We do not warrant that the Site will be uninterrupted,
            error-free, or free of harmful components.
          </p>

          <h2>8. Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, After Eternity LLC and its owners, employees, and contractors
            shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss
            of profits, data, goodwill, or business, arising out of or related to your use of (or inability to use)
            the Site, even if we have been advised of the possibility of such damages. Nothing in these Terms excludes
            liability that cannot be excluded under applicable law.
          </p>

          <h2>9. Indemnification</h2>
          <p>
            You agree to indemnify and hold harmless After Eternity LLC and its owners, employees, and contractors
            from and against any claims, damages, liabilities, and expenses (including reasonable legal fees) arising
            out of your use of the Site or your violation of these Terms.
          </p>

          <h2>10. Privacy</h2>
          <p>
            Your use of the Site is also governed by our <a href="/privacy">Privacy Policy</a>, which describes how we
            collect, use, and protect your information, including call recording via CallRail. Please review it
            carefully.
          </p>

          <h2>11. Changes to These Terms</h2>
          <p>
            We may update these Terms from time to time. When we do, we will revise the &quot;Effective date&quot;
            above. Your continued use of the Site after any changes take effect constitutes your acceptance of the
            revised Terms.
          </p>

          <h2>12. Governing Law</h2>
          <p>
            These Terms are governed by and construed in accordance with the applicable laws of the jurisdiction in
            which After Eternity LLC operates, without regard to its conflict-of-law principles. Any disputes arising
            out of or relating to the Site or these Terms shall be subject to the exclusive jurisdiction of the courts
            of that jurisdiction.
          </p>

          <h2>13. Contact Us</h2>
          <p>If you have any questions about these Terms, please contact:</p>
          <p>
            <strong>After Eternity LLC</strong>
            <br />
            Email: <a href="mailto:mujtabafilms@gmail.com">mujtabafilms@gmail.com</a>
            <br />
            Phone: <a href="tel:+12132549766">+1 213 254 9766</a>
            <br />
            Web: <a href="/#contact">after-eternity.com/#contact</a>
          </p>
        </div>
      </main>
      <SiteFooter legalActive="terms" />
    </>
  );
}