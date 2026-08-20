'use client';

import { useEffect, useState } from 'react';

const STORAGE_KEY = 'ae-consent';

type ConsentState = { analytics: boolean; ads: boolean };

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

function applyConsent(c: ConsentState) {
  const gtag = window.gtag;
  if (typeof gtag !== 'function') return;
  gtag('consent', 'update', {
    ad_storage: c.ads ? 'granted' : 'denied',
    ad_user_data: c.ads ? 'granted' : 'denied',
    ad_personalization: c.ads ? 'granted' : 'denied',
    analytics_storage: c.analytics ? 'granted' : 'denied'
  });
}

function readStored(): ConsentState | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<ConsentState>;
    if (typeof parsed.analytics !== 'boolean' || typeof parsed.ads !== 'boolean') return null;
    return { analytics: parsed.analytics, ads: parsed.ads };
  } catch {
    return null;
  }
}

export default function ConsentProvider() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = readStored();
    if (stored) {
      applyConsent(stored);
      setVisible(false);
      return;
    }
    setVisible(true);
  }, []);

  const choose = (analytics: boolean, ads: boolean) => {
    const choice: ConsentState = { analytics, ads };
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(choice));
    } catch {
      /* storage unavailable — still apply for this session */
    }
    applyConsent(choice);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-xl bg-black/90 border border-white/10 rounded-2xl p-5 backdrop-blur-md shadow-2xl"
    >
      <p className="text-xs text-gray-300 leading-relaxed">
        We use cookies and similar technologies to measure site performance and advertising effectiveness. You can
        accept or decline non-essential cookies. See our{' '}
        <a href="/privacy" className="underline hover:text-crimson transition-colors">
          Privacy Policy
        </a>
        .
      </p>
      <div className="mt-4 flex flex-wrap gap-3">
        <button
          onClick={() => choose(true, true)}
          className="rounded-full bg-white text-black font-bold py-2 px-5 text-xs uppercase tracking-widest hover:bg-gray-200 transition-colors"
        >
          Accept All
        </button>
        <button
          onClick={() => choose(false, false)}
          className="rounded-full border border-white/20 text-white font-bold py-2 px-5 text-xs uppercase tracking-widest hover:border-crimson hover:text-crimson transition-colors"
        >
          Decline
        </button>
      </div>
    </div>
  );
}