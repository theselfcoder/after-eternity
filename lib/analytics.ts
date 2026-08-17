const AW_ID = (process.env.NEXT_PUBLIC_AW_CONVERSION_ID || '').replace(/^AW-/i, '');
const AW_LABEL = process.env.NEXT_PUBLIC_AW_CONVERSION_LABEL || '';
const AW_CALL_LABEL = process.env.NEXT_PUBLIC_AW_CALL_LABEL || '';
const GA4_ID = process.env.NEXT_PUBLIC_GA4_ID || '';

export const isAdsConfigured = Boolean(AW_ID && (AW_LABEL || AW_CALL_LABEL));

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function pushEvent(name: string, data?: Record<string, unknown>) {
  if (typeof window === 'undefined') return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: name, ...data });
}

export function trackLead(service?: string) {
  pushEvent('generate_lead', { service: service || '', lead_source: 'website-form' });
  if (!AW_ID || !AW_LABEL) return;
  window.gtag?.('event', 'conversion', {
    send_to: `AW-${AW_ID}/${AW_LABEL}`,
    event_category: 'lead',
    event_label: service || 'contact-form'
  });
}

export function trackCall() {
  pushEvent('click_to_call', { phone: '+12132549766' });
  if (!AW_ID || !AW_CALL_LABEL) return;
  window.gtag?.('event', 'conversion', {
    send_to: `AW-${AW_ID}/${AW_CALL_LABEL}`,
    event_category: 'call'
  });
}
