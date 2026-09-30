/**
 * POST /api/contact — contact-form delivery via Resend.
 *
 * The only on-demand route on the site: everything else is prerendered.
 * `prerender = false` makes the Vercel adapter ship this file as a Vercel
 * Function while the rest of the build stays static.
 *
 * Accepts either JSON (the enhanced form in src/pages/contact.astro posts
 * FormData via fetch with `Accept: application/json`) or a plain
 * urlencoded/multipart form post (no-JS fallback). JSON callers get a JSON
 * body back; plain form posts get a 303 back to /contact/?status=….
 *
 * Env (Vercel → Project → Settings → Environment Variables):
 *   RESEND_API_KEY      Resend API key (re_…)
 *   CONTACT_TO_EMAIL    Inbox(es) that receive leads; comma-separated OK
 *   CONTACT_FROM_EMAIL  Sender on a Resend-verified domain, e.g.
 *                       "RRFPS Website <website@rrfps.com>"
 */
import type { APIRoute } from 'astro';
import { Resend } from 'resend';
import { RESEND_API_KEY, CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL } from 'astro:env/server';

export const prerender = false;

const LIMITS = {
  name: 100,
  email: 254,
  phone: 40,
  company: 150,
  message: 5000,
} as const;

type Field = keyof typeof LIMITS;
type Payload = Record<Field, string> & { website: string };
type FieldErrors = Partial<Record<Field, string>>;

// Deliberately simple: one @, no spaces, a dot in the domain part.
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Collapse CR/LF/tabs so user input can never break a header line. */
const oneLine = (v: string) => v.replace(/[\r\n\t]+/g, ' ').trim();

const escapeHtml = (v: string) =>
  v
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

async function readPayload(request: Request): Promise<Payload | null> {
  const type = request.headers.get('content-type') ?? '';
  let raw: Record<string, unknown> = {};
  try {
    if (type.includes('application/json')) {
      const body = await request.json();
      if (!body || typeof body !== 'object' || Array.isArray(body)) return null;
      raw = body as Record<string, unknown>;
    } else if (
      type.includes('application/x-www-form-urlencoded') ||
      type.includes('multipart/form-data')
    ) {
      raw = Object.fromEntries((await request.formData()).entries());
    } else {
      return null;
    }
  } catch {
    return null;
  }
  const str = (k: string) => (typeof raw[k] === 'string' ? (raw[k] as string) : '').trim();
  return {
    name: oneLine(str('name')),
    email: oneLine(str('email')),
    phone: oneLine(str('phone')),
    company: oneLine(str('company')),
    message: str('message').replace(/\r\n?/g, '\n'),
    website: str('website'),
  };
}

function validate(p: Payload): FieldErrors {
  const errors: FieldErrors = {};
  if (!p.name) errors.name = 'Please enter your name.';
  if (!p.email) errors.email = 'Please enter your email address.';
  else if (!EMAIL_RE.test(p.email)) errors.email = 'Please enter a valid email address.';
  if (!p.message) errors.message = 'Please tell us how we can help.';
  for (const key of Object.keys(LIMITS) as Field[]) {
    if (!errors[key] && p[key].length > LIMITS[key]) {
      errors[key] = `Please keep this under ${LIMITS[key]} characters.`;
    }
  }
  return errors;
}

function buildEmail(p: Payload) {
  const rows: [string, string][] = [
    ['Name', p.name],
    ['Email', p.email],
    ['Phone', p.phone],
    ['Company / Property', p.company],
  ].filter(([, v]) => v) as [string, string][];

  const text = [
    'New inquiry from the website contact form (rrfps.com/contact).',
    '',
    ...rows.map(([k, v]) => `${k}: ${v}`),
    '',
    'Message:',
    p.message,
    '',
    '—',
    'Reply to this email to respond directly to the sender.',
  ].join('\n');

  const cell = 'padding:8px 12px;border-bottom:1px solid #eee;vertical-align:top;';
  const html = `<!doctype html>
<html><body style="margin:0;padding:24px;background:#f5f5f5;font-family:Arial,Helvetica,sans-serif;color:#0a0a0a;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;margin:0 auto;background:#ffffff;">
    <tr><td style="padding:20px 24px;background:#0d0d0b;color:#ffffff;font-size:18px;font-weight:bold;">New website inquiry</td></tr>
    <tr><td style="padding:20px 24px;">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="font-size:15px;line-height:1.5;">
        ${rows
          .map(
            ([k, v]) =>
              `<tr><td style="${cell}width:160px;color:#626262;font-weight:bold;">${escapeHtml(k)}</td><td style="${cell}">${
                k === 'Email'
                  ? `<a href="mailto:${escapeHtml(v)}" style="color:#d41226;">${escapeHtml(v)}</a>`
                  : escapeHtml(v)
              }</td></tr>`
          )
          .join('\n        ')}
      </table>
      <p style="margin:24px 0 8px;font-size:13px;letter-spacing:0.06em;text-transform:uppercase;color:#626262;font-weight:bold;">Message</p>
      <div style="font-size:15px;line-height:1.6;white-space:pre-wrap;">${escapeHtml(p.message)}</div>
    </td></tr>
    <tr><td style="padding:14px 24px;background:#fafafa;font-size:12px;color:#9a9a9a;">Sent from the contact form at rrfps.com/contact. Reply to this email to respond to the sender.</td></tr>
  </table>
</body></html>`;

  return { text, html };
}

export const POST: APIRoute = async ({ request, redirect }) => {
  const wantsJson =
    (request.headers.get('accept') ?? '').includes('application/json') ||
    (request.headers.get('content-type') ?? '').includes('application/json');

  const respond = (status: number, body: Record<string, unknown>) =>
    wantsJson
      ? new Response(JSON.stringify(body), {
          status,
          headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' },
        })
      : redirect(`/contact/?status=${body.ok ? 'sent' : 'error'}#contact-form`, 303);

  const payload = await readPayload(request);
  if (!payload) {
    return respond(400, { ok: false, error: 'Invalid request.' });
  }

  // Honeypot: pretend success so bots get no signal, but send nothing.
  if (payload.website) {
    return respond(200, { ok: true });
  }

  const errors = validate(payload);
  if (Object.keys(errors).length > 0) {
    return respond(422, { ok: false, error: 'Please check the highlighted fields.', fields: errors });
  }

  const to = (CONTACT_TO_EMAIL ?? '')
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean);
  if (!RESEND_API_KEY || !CONTACT_FROM_EMAIL || to.length === 0) {
    console.error('[api/contact] Missing RESEND_API_KEY, CONTACT_TO_EMAIL or CONTACT_FROM_EMAIL.');
    return respond(500, { ok: false, error: 'The form is temporarily unavailable.' });
  }

  const { text, html } = buildEmail(payload);
  try {
    const resend = new Resend(RESEND_API_KEY);
    const { error } = await resend.emails.send({
      from: CONTACT_FROM_EMAIL,
      to,
      replyTo: payload.email,
      subject: `Website inquiry from ${payload.name}${payload.company ? ` (${payload.company})` : ''}`,
      text,
      html,
    });
    if (error) {
      console.error('[api/contact] Resend rejected the send:', error);
      return respond(502, { ok: false, error: 'We couldn’t send your message.' });
    }
  } catch (err) {
    console.error('[api/contact] Resend request failed:', err);
    return respond(502, { ok: false, error: 'We couldn’t send your message.' });
  }

  return respond(200, { ok: true });
};

/** Anything but POST gets a 405 rather than falling through to a 404. */
export const ALL: APIRoute = () =>
  new Response(JSON.stringify({ ok: false, error: 'Method not allowed.' }), {
    status: 405,
    headers: { 'content-type': 'application/json; charset=utf-8', allow: 'POST' },
  });
