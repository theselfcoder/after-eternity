'use client';

import { useEffect } from 'react';
import { trackCall } from '@/lib/analytics';

const AW_ID = (process.env.NEXT_PUBLIC_AW_CONVERSION_ID || '').replace(/^AW-/i, '');
const GA4_ID = process.env.NEXT_PUBLIC_GA4_ID || '';

export default function AnalyticsProvider() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const target = e.target as Element | null;
      if (target?.closest?.('a[href^="tel:"]')) trackCall();
    };
    document.addEventListener('click', onClick);

    if (!AW_ID && !GA4_ID) {
      return () => document.removeEventListener('click', onClick);
    }

    window.dataLayer = window.dataLayer || [];
    function gtag(...args: unknown[]) {
      window.dataLayer!.push(args);
    }
    window.gtag = gtag;
    gtag('js', new Date());
    if (AW_ID) gtag('config', `AW-${AW_ID}`);
    if (GA4_ID) gtag('config', GA4_ID);

    const firstId = AW_ID ? `AW-${AW_ID}` : GA4_ID;
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${firstId}`;
    document.head.appendChild(script);

    return () => {
      document.removeEventListener('click', onClick);
      script.remove();
    };
  }, []);

  return null;
}
