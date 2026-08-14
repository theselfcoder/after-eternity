import type { Metadata } from 'next';
import PageBackground from '@/components/PageBackground';
import LegalHeader from '@/components/LegalHeader';
import SiteFooter from '@/components/SiteFooter';

export const metadata: Metadata = {
  title: 'Privacy Policy | After Eternity',
  description:
    'How After Eternity collects, uses, and protects your information, including call recording via CallRail.'
};

export default function PrivacyPage() {
  return (
    <>
      <PageBackground mode="radial" />
      <LegalHeader />
      <main className="max-w-4xl mx-auto px-6 py-14 md:py-20">
        <div className="mb-10">
          <p className="text-crimson text-xs font-bold tracking-[0.4em] uppercase mb-3">Legal</p>
          <h1 className="font-serif text-4xl md:text-6xl font-black text-white leading-tight tracking-wide">
            Privacy Policy
          </h1>
          <p className="text-gray-500 text-sm mt-4">Effective date: July 22, 2026</p>
        </div>

        <div className="prose-legal bg-white/[0.03] border border-white/10 rounded-2xl p-6 md:p-10 backdrop-blur-sm">
          <p>
            This Privacy Policy explains how <strong>After Eternity LLC</strong> (&quot;After Eternity,&quot; &quot;we,&quot;
            &quot;us,&quot; or &quot;our&quot;) collects, uses, discloses, and safeguards your information when you visit{' '}
            <a href="https://after-eternity.com">after-eternity.com</a> (the &quot;Site&quot;), submit our contact form,
            or call the phone numbers listed on the Site. By using the Site or contacting us, you agree to the
            practices described in this policy.
          </p>

          <h2>1. Information We Collect</h2>

          <h3>a. Information you provide to us</h3>
          <p>
            When you submit our contact form or otherwise reach out, we collect the information you choose to give us,
            which may include your name or company, email address, phone number, requested service, project type,
            estimated runtime, camera brand, and any project details or messages you send.
          </p>

          <h3>b. Call recordings and telephone information</h3>
          <p>
            When you call a phone number shown on our Site, your call is handled through <strong>CallRail</strong>, a
            third-party call-tracking and analytics provider. As described in Section 3, your calls may be{' '}
            <strong>recorded and monitored</strong>, and CallRail may collect information such as your phone number,
            caller ID, the date, time, and duration of the call, and the marketing source or web page that led you to
            call.
          </p>

          <h3>c. Information collected automatically</h3>
          <p>
            When you visit the Site, we and our analytics and advertising partners automatically collect certain
            technical information using cookies and similar technologies, including your IP address, browser and
            device type, operating system, referring URLs, pages viewed, and how you interact with the Site. This is
            collected through <strong>Google Tag Manager</strong> and associated Google services (such as Google
            Analytics and Google Ads), and through CallRail&apos;s dynamic phone-number insertion.
          </p>

          <h2>2. How We Use Your Information</h2>
          <ul>
            <li>To respond to your inquiries and provide quotes, proposals, and post-production services.</li>
            <li>
              For <strong>quality assurance</strong> and staff training, and to improve our customer service and
              communications.
            </li>
            <li>
              For <strong>conversion tracking</strong>, marketing measurement, and understanding which campaigns and
              channels lead to inquiries.
            </li>
            <li>
              To send you marketing and follow-up emails (managed through <strong>systeme.io</strong>), where
              permitted — you can opt out at any time.
            </li>
            <li>To operate, maintain, secure, and improve the Site.</li>
            <li>To comply with legal obligations and enforce our terms.</li>
          </ul>

          <h2>3. Call Recording &amp; Monitoring</h2>
          <p>
            Please be aware that <strong>calls to and from the phone numbers on our Site may be recorded and
            monitored</strong> using CallRail for <strong>quality assurance and conversion-tracking purposes</strong>.
            When you place or continue a call with us, you consent to your call being recorded and monitored for these
            purposes. If you do not wish to be recorded, please let us know at the start of the call or contact us
            instead through our <a href="/#contact">website contact form</a>, by email, or by another written method.
          </p>
          <p>
            Call recordings and related call data are processed and stored by CallRail on our behalf. For more
            information about how CallRail handles this data, see CallRail&apos;s privacy notice at{' '}
            <a href="https://www.callrail.com/privacy" target="_blank" rel="noopener noreferrer">
              callrail.com/privacy
            </a>
            .
          </p>

          <h2>4. Cookies &amp; Tracking Technologies</h2>
          <p>
            We use cookies, tags, pixels, and similar technologies to run analytics, measure advertising performance,
            and remember your preferences. You can control or disable cookies through your browser settings; however,
            some parts of the Site may not function as intended if cookies are disabled. Because we use Google
            advertising and analytics services, you can also learn about and opt out of certain Google tracking at{' '}
            <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer">
              adssettings.google.com
            </a>{' '}
            and{' '}
            <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">
              tools.google.com/dlpage/gaoptout
            </a>
            .
          </p>

          <h2>5. How We Share Your Information</h2>
          <p>
            We do <strong>not</strong> sell your personal information. We share information only as needed with trusted
            third-party service providers who help us operate our business, and where required by law. These providers
            include:
          </p>
          <ul>
            <li>
              <strong>CallRail</strong> — call tracking, recording, and analytics.
            </li>
            <li>
              <strong>systeme.io</strong> — email marketing and contact management.
            </li>
            <li>
              <strong>Google</strong> (Tag Manager, Analytics, Ads) — website analytics and advertising measurement.
            </li>
            <li>
              <strong>YouTube / Google</strong> — embedded video playback on the Site.
            </li>
            <li>
              <strong>Our hosting and email providers</strong> — to operate the Site and deliver messages from our
              contact form.
            </li>
          </ul>
          <p>
            We may also disclose information if required to do so by law, or to protect the rights, property, or
            safety of After Eternity, our clients, or others.
          </p>

          <h2>6. Marketing Communications</h2>
          <p>
            If you submit an inquiry, we may add you to our email list and send you follow-up or marketing messages.
            Every marketing email includes an unsubscribe link, and you can opt out at any time by using that link or
            by contacting us. Opting out of marketing does not stop us from sending you messages that relate directly
            to a project or service you have requested.
          </p>

          <h2>7. Data Retention</h2>
          <p>
            We retain personal information, call recordings, and related data for as long as reasonably necessary to
            fulfill the purposes described in this policy, to provide our services, to comply with our legal
            obligations, resolve disputes, and enforce our agreements. When information is no longer needed, we take
            reasonable steps to delete or de-identify it.
          </p>

          <h2>8. Your Rights &amp; Choices</h2>
          <p>
            Depending on where you live, you may have rights under applicable data-protection laws (such as the
            California Consumer Privacy Act / CPRA or the EU/UK GDPR), including the right to request access to,
            correction of, or deletion of your personal information, and the right to opt out of certain uses. To
            exercise any of these rights, please contact us using the details in Section 13. We will respond as
            required by applicable law. We will not discriminate against you for exercising your privacy rights.
          </p>

          <h2>9. Data Security</h2>
          <p>
            We use reasonable administrative, technical, and physical safeguards designed to protect your information.
            However, no method of transmission over the Internet or electronic storage is completely secure, and we
            cannot guarantee absolute security.
          </p>

          <h2>10. Children&apos;s Privacy</h2>
          <p>
            The Site is intended for adults and is not directed to children. We do not knowingly collect personal
            information from children. If you believe a child has provided us with personal information, please
            contact us so we can remove it.
          </p>

          <h2>11. Third-Party Links</h2>
          <p>
            The Site may contain links to third-party websites and platforms (such as YouTube and Instagram) that we
            do not control. This Privacy Policy does not apply to those third parties, and we encourage you to review
            their privacy policies.
          </p>

          <h2>12. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. When we do, we will revise the &quot;Effective
            date&quot; above. Your continued use of the Site after any changes indicates your acceptance of the
            updated policy.
          </p>

          <h2>13. Contact Us</h2>
          <p>If you have questions about this Privacy Policy or how we handle your information, please contact:</p>
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
      <SiteFooter legalActive="privacy" />
    </>
  );
}