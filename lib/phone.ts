export function normalizePhoneE164(raw: string): string | null {
  const trimmed = raw.trim();
  const digits = trimmed.replace(/\D/g, '');
  if (!digits) return null;

  if (trimmed.startsWith('+')) {
    if (digits.length >= 8 && digits.length <= 15) return '+' + digits;
    return null;
  }

  if (digits.length === 10) return '+1' + digits;
  if (digits.length === 11 && digits.startsWith('1')) return '+' + digits;
  return null;
}

export function formatPhoneDisplay(value: string): string {
  const e164 = normalizePhoneE164(value);
  if (!e164) return value;
  if (e164.startsWith('+1')) {
    const d = e164.slice(2);
    if (d.length === 10) return `+1 (${d.slice(0, 3)}) ${d.slice(3, 6)}-${d.slice(6)}`;
  }
  return e164;
}
