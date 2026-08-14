import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import dns from 'node:dns/promises';
import { normalizePhoneE164 } from '../../../lib/phone';

async function resolveSmtpHost(host: string): Promise<{ host: string; servername?: string }> {
  try {
    const { address } = await dns.lookup(host, { family: 4 });
    return { host: address, servername: host };
  } catch {
    return { host };
  }
}

const SERVICE_FIELDS = ['name', 'email', 'phone_number', 'service', 'project_type', 'estimated_runtime', 'camera_brand', 'details'] as const;

function buildEmailBody(values: Record<string, string>) {
  const labels: Record<string, string> = {
    name: 'Name / Company',
    email: 'Email',
    phone_number: 'Phone Number',
    service: 'Service Requested',
    project_type: 'Project Type',
    estimated_runtime: 'Estimated Runtime',
    camera_brand: 'Camera Brand',
    details: 'Project Details'
  };
  return (
    'New project inquiry received via the website contact form.\n\n' +
    SERVICE_FIELDS.map((f) => labels[f] + ': ' + (values[f] || 'N/A')).join('\n')
  );
}

const SYSTEME_API = 'https://api.systeme.io';

const FIELD_SLUGS: Record<string, string> = {
  name: 'first_name',
  phone_number: 'phone_number',
  service: 'service',
  project_type: 'project_type',
  estimated_runtime: 'estimated_runtime',
  camera_brand: 'camera_brand',
  details: 'details'
};

const BASE_SLUGS = new Set(['first_name', 'phone_number']);

const SERVICE_TAG_IDS: Record<string, number> = {
  'Color Grading': 2100417,
  Editing: 2131659,
  'Sound Design': 2131660,
  'Full Post-Production': 2131661
};

async function findContactId(apiKey: string, email: string): Promise<number | null> {
  const res = await fetch(SYSTEME_API + '/api/contacts?email=' + encodeURIComponent(email), {
    headers: { 'X-API-Key': apiKey }
  });
  if (!res.ok) return null;
  const data = (await res.json().catch(() => null)) as { items?: { id: number }[] } | null;
  return data?.items?.[0]?.id ?? null;
}

async function createContact(
  apiKey: string,
  values: Record<string, string>,
  allowedSlugs: Set<string>
): Promise<{ status: number; id?: number }> {
  const fields = SERVICE_FIELDS.filter((f) => f !== 'email')
    .filter((f) => values[f])
    .map((f) => ({ slug: FIELD_SLUGS[f], value: values[f] }))
    .filter((f) => allowedSlugs.has(f.slug));
  const res = await fetch(SYSTEME_API + '/api/contacts', {
    method: 'POST',
    headers: { 'X-API-Key': apiKey, 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: values.email, locale: 'en', fields })
  });
  const body = (await res.json().catch(() => null)) as { id?: number } | null;
  return { status: res.status, id: body?.id };
}

async function assignTag(apiKey: string, contactId: number, tagId: number): Promise<void> {
  const res = await fetch(SYSTEME_API + '/api/contacts/' + contactId + '/tags', {
    method: 'POST',
    headers: { 'X-API-Key': apiKey, 'Content-Type': 'application/json' },
    body: JSON.stringify({ tagId })
  });
  if (!res.ok) throw new Error('systeme.io tag assign failed (' + tagId + '): ' + res.status);
}

async function syncSysteme(values: Record<string, string>): Promise<void> {
  const apiKey = process.env.SYSTEME_API_KEY;
  if (!apiKey || !values.email) return;

  const allSlugs = new Set(Object.values(FIELD_SLUGS));
  let created = await createContact(apiKey, values, allSlugs);
  if (!created.id && created.status === 422) {
    created = await createContact(apiKey, values, BASE_SLUGS);
  }
  let contactId = created.id ?? null;
  if (!contactId && created.status === 422) {
    contactId = await findContactId(apiKey, values.email);
  }
  if (!contactId) {
    throw new Error('systeme.io contact id unavailable: ' + created.status);
  }

  const tagIds = new Set<number>();
  if (process.env.SYSTEME_TAG_ID) tagIds.add(Number(process.env.SYSTEME_TAG_ID));
  const serviceTagId = SERVICE_TAG_IDS[values.service];
  if (serviceTagId) tagIds.add(serviceTagId);
  for (const tagId of tagIds) {
    await assignTag(apiKey, contactId, tagId);
  }
}

export async function POST(req: NextRequest) {
  const form = await req.formData();
  const values: Record<string, string> = {};
  for (const field of SERVICE_FIELDS) {
    values[field] = String(form.get(field) || '').trim();
  }

  if (!values.name || !values.email || !values.phone_number || !values.service) {
    return NextResponse.json({ ok: false, error: 'Missing required fields' }, { status: 400 });
  }

  const e164Phone = normalizePhoneE164(values.phone_number);
  if (e164Phone) values.phone_number = e164Phone;

  const emailBody = buildEmailBody(values);

  try {
    if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
      const { host, servername } = await resolveSmtpHost(process.env.SMTP_HOST);
      const transporter = nodemailer.createTransport({
        host,
        port: Number(process.env.SMTP_PORT || 587),
        secure: process.env.SMTP_SECURE === 'true' || Number(process.env.SMTP_PORT) === 465,
        tls: servername ? { servername } : undefined,
        auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS }
      });
      await transporter.sendMail({
        from: process.env.SMTP_USER,
        to: process.env.CONTACT_RECIPIENT || process.env.SMTP_USER,
        replyTo: values.email,
        subject: 'New Project Inquiry - ' + values.name,
        text: emailBody
      });
    } else {
      console.log('[contact] No SMTP configured - email would have been sent:\n' + emailBody);
    }
    try {
      await syncSysteme(values);
    } catch (err) {
      console.error('[contact] systeme.io sync failed:', err);
    }
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('[contact] Failed to send inquiry:', err);
    return NextResponse.json({ ok: false, error: 'Send failed' }, { status: 500 });
  }
}