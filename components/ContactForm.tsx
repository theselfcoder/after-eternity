'use client';

import { useState, useEffect } from 'react';
import { PhoneIcon, SendIcon, SpinnerIcon } from './icons';
import { formatPhoneDisplay, normalizePhoneE164 } from '../lib/phone';
import { trackLead } from '../lib/analytics';

const SELECT_CLASS =
  'w-full bg-transparent border-b border-white/20 py-2.5 text-white focus:border-crimson outline-none transition-colors appearance-none';
const INPUT_CLASS =
  'w-full bg-transparent border-b border-white/20 py-2.5 text-white focus:border-crimson outline-none transition-colors';
const PLACEHOLDER_OPTION_CLASS = 'text-gray-500 bg-eternity-black';
const OPTION_CLASS = 'bg-eternity-black';

export default function ContactForm() {
  const [service, setService] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'error'>('idle');
  const [phoneError, setPhoneError] = useState('');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const s = params.get('service');
    if (s) setService(s);
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('submitting');
    const form = e.currentTarget;
    const data = new FormData(form);
    const phone = String(data.get('phone_number') || '');
    if (!normalizePhoneE164(phone)) {
      setPhoneError('Please enter a valid phone number, e.g. +1 (213) 555-0000');
      setStatus('idle');
      return;
    }
    setPhoneError('');
    try {
      const res = await fetch('/api/contact', { method: 'POST', body: data });
      if (!res.ok) throw new Error('failed');
      trackLead(service || undefined);
      window.location.href = '/thank-you';
    } catch {
      setStatus('error');
    }
  }

  return (
    <form id="contact-form" className="space-y-4" onSubmit={handleSubmit}>
      <div className="space-y-1.5">
        <label className="text-xs text-gray-500 uppercase tracking-widest">Name / Company</label>
        <input required name="name" type="text" className={INPUT_CLASS} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label className="text-xs text-gray-500 uppercase tracking-widest">Email</label>
          <input required name="email" type="email" className={INPUT_CLASS} />
        </div>
        <div className="space-y-1.5">
          <label className="text-xs text-gray-500 uppercase tracking-widest">Phone Number</label>
          <input
            required
            name="phone_number"
            type="tel"
            placeholder="e.g. +1 (213) 000-0000"
            aria-invalid={!!phoneError}
            onBlur={(e) => {
              const formatted = formatPhoneDisplay(e.target.value);
              if (formatted !== e.target.value) e.target.value = formatted;
            }}
            className={INPUT_CLASS + (phoneError ? ' border-crimson' : ' placeholder-gray-600')}
          />
          {phoneError && <p className="text-xs text-crimson">{phoneError}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label className="text-xs text-gray-500 uppercase tracking-widest">Service Requested</label>
          <select
            required
            name="service"
            id="service-select"
            className={SELECT_CLASS}
            value={service}
            onChange={(e) => setService(e.target.value)}
          >
            <option value="" disabled className={PLACEHOLDER_OPTION_CLASS}>
              Select what service...
            </option>
            <option value="Color Grading" className={OPTION_CLASS}>
              Color Grading
            </option>
            <option value="Editing" className={OPTION_CLASS}>
              Editing
            </option>
            <option value="Sound Design" className={OPTION_CLASS}>
              Sound Design
            </option>
            <option value="Full Post-Production" className={OPTION_CLASS}>
              Full Post-Production
            </option>
          </select>
        </div>
        <div className="space-y-1.5">
          <label className="text-xs text-gray-500 uppercase tracking-widest">Project Type</label>
          <select required name="project_type" className={SELECT_CLASS} defaultValue="">
            <option value="" disabled className={PLACEHOLDER_OPTION_CLASS}>
              Select a type...
            </option>
            <option value="Feature Film" className={OPTION_CLASS}>
              Feature Film
            </option>
            <option value="Short Film" className={OPTION_CLASS}>
              Short Film
            </option>
            <option value="Documentary" className={OPTION_CLASS}>
              Documentary
            </option>
            <option value="Commercial" className={OPTION_CLASS}>
              Commercial
            </option>
            <option value="Series" className={OPTION_CLASS}>
              Series
            </option>
            <option value="Trailer" className={OPTION_CLASS}>
              Trailer
            </option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label className="text-xs text-gray-500 uppercase tracking-widest">Estimated Runtime</label>
          <select required name="estimated_runtime" className={SELECT_CLASS} defaultValue="">
            <option value="" disabled className={PLACEHOLDER_OPTION_CLASS}>
              Select estimated runtime...
            </option>
            <option value="Under 15 min" className={OPTION_CLASS}>
              Under 15 min
            </option>
            <option value="15–30 min" className={OPTION_CLASS}>
              15–30 min
            </option>
            <option value="30–60 min" className={OPTION_CLASS}>
              30–60 min
            </option>
            <option value="60+ min" className={OPTION_CLASS}>
              60+ min
            </option>
          </select>
        </div>
        <div className="space-y-1.5">
          <label className="text-xs text-gray-500 uppercase tracking-widest">Camera Brand</label>
          <select required name="camera_brand" className={SELECT_CLASS} defaultValue="">
            <option value="" disabled className={PLACEHOLDER_OPTION_CLASS}>
              Select camera brand...
            </option>
            <option value="ARRI" className={OPTION_CLASS}>
              ARRI
            </option>
            <option value="RED" className={OPTION_CLASS}>
              RED
            </option>
            <option value="Blackmagic" className={OPTION_CLASS}>
              Blackmagic
            </option>
            <option value="Sony" className={OPTION_CLASS}>
              Sony
            </option>
            <option value="Canon" className={OPTION_CLASS}>
              Canon
            </option>
            <option value="Panasonic" className={OPTION_CLASS}>
              Panasonic
            </option>
            <option value="DJI" className={OPTION_CLASS}>
              DJI
            </option>
            <option value="Fujifilm" className={OPTION_CLASS}>
              Fujifilm
            </option>
            <option value="Nikon" className={OPTION_CLASS}>
              Nikon
            </option>
            <option value="Other" className={OPTION_CLASS}>
              Other
            </option>
          </select>
        </div>
      </div>

      <div className="space-y-1.5">
        <label className="text-xs text-gray-500 uppercase tracking-widest">Project Details</label>
        <textarea
          required
          name="details"
          rows={3}
          className={INPUT_CLASS + ' resize-none leading-relaxed'}
          placeholder="Tell us about your project, creative goals, timeline, and anything else you'd like us to know."
        />
      </div>

      <button
        id="submit-btn"
        type="submit"
        className="group relative overflow-hidden bg-white text-black font-bold py-3 px-8 rounded-full w-full hover:bg-gray-200 transition-all flex items-center justify-center gap-2"
        disabled={status === 'submitting'}
      >
        <span className="uppercase tracking-widest text-sm">
          {status === 'submitting' ? 'Sending...' : 'Request A Quote'}
        </span>
        {status === 'submitting' ? (
          <SpinnerIcon className="w-4 h-4 animate-spin" />
        ) : (
          <SendIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        )}
      </button>

      {status === 'error' && (
        <p className="text-center text-xs text-crimson mt-3 leading-relaxed">
          Something went wrong. Please try again or call us directly.
        </p>
      )}

      <div className="text-center mt-3">
        <span className="text-[10px] text-gray-500 uppercase tracking-widest block mb-3">or</span>
        <a
          href="tel:+12132549766"
          className="group flex items-center justify-center gap-2 bg-crimson text-white font-bold py-3 px-8 rounded-full w-full hover:bg-bright-red transition-all"
        >
          <PhoneIcon className="w-4 h-4" />
          <span className="uppercase tracking-widest text-sm">Call 213 254 9766</span>
        </a>
      </div>

      <p className="text-center text-xs text-gray-500 mt-3 leading-relaxed">
        We&apos;ll respond within one business day. Your information is kept confidential.
      </p>
      <p className="text-center text-[10px] text-gray-600 mt-2 leading-relaxed">
        Calls may be recorded &amp; monitored via CallRail for quality assurance and conversion tracking. See our{' '}
        <a href="/privacy" className="underline hover:text-crimson transition-colors">
          Privacy Policy
        </a>
        .
      </p>
    </form>
  );
}