import { NextResponse, type NextRequest } from 'next/server';
import { Resend } from 'resend';
import { site } from '@/lib/site';

/**
 * POST /api/contact
 *
 * Receives the A2P 10DLC compliant contact form submission, validates it
 * (including the consent flag — re-checked on the server), then delivers it
 * via Resend.
 *
 * Required env (set in Vercel → Project → Settings → Environment Variables):
 *   - RESEND_API_KEY      (required for actual delivery)
 *   - CONTACT_TO_EMAIL    (optional; defaults to site.contact.email)
 *   - CONTACT_FROM_EMAIL  (optional; defaults to "Hey Pearl <noreply@heypearl.io>")
 *
 * If RESEND_API_KEY is not set, the route still returns success and logs the
 * payload server-side. This keeps the form working through A2P review while
 * email delivery is being configured.
 */

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

type Payload = {
  firstName?: unknown;
  lastName?: unknown;
  email?: unknown;
  phone?: unknown;
  message?: unknown;
  consent?: unknown;
};

function isNonEmptyString(v: unknown): v is string {
  return typeof v === 'string' && v.trim().length > 0;
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export async function POST(req: NextRequest) {
  let body: Payload;
  try {
    body = (await req.json()) as Payload;
  } catch {
    return NextResponse.json(
      { ok: false, error: 'Invalid JSON payload.' },
      { status: 400 },
    );
  }

  const { firstName, lastName, email, phone, message, consent } = body;

  if (
    !isNonEmptyString(firstName) ||
    !isNonEmptyString(lastName) ||
    !isNonEmptyString(email) ||
    !isNonEmptyString(phone) ||
    !isNonEmptyString(message)
  ) {
    return NextResponse.json(
      { ok: false, error: 'All fields are required.' },
      { status: 400 },
    );
  }

  if (consent !== true) {
    return NextResponse.json(
      {
        ok: false,
        error: 'Consent is required before submitting this form.',
      },
      { status: 400 },
    );
  }

  // Basic email shape check (cheap; real validation happens at delivery).
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { ok: false, error: 'Please provide a valid email address.' },
      { status: 400 },
    );
  }

  const submittedAt = new Date().toISOString();
  const userAgent = req.headers.get('user-agent') ?? 'unknown';
  const ip =
    req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown';

  const to = process.env.CONTACT_TO_EMAIL ?? site.contact.email;
  const from =
    process.env.CONTACT_FROM_EMAIL ?? 'Hey Pearl <noreply@heypearl.io>';
  const apiKey = process.env.RESEND_API_KEY;

  // Graceful fallback while email delivery is being configured.
  if (!apiKey) {
    console.warn(
      '[contact] RESEND_API_KEY not set — logging submission instead of emailing.',
      {
        firstName,
        lastName,
        email,
        phone,
        message,
        consent,
        submittedAt,
        userAgent,
        ip,
      },
    );
    return NextResponse.json({ ok: true });
  }

  const subject = `New Hey Pearl contact form — ${firstName} ${lastName}`;
  const text = [
    `New contact form submission`,
    ``,
    `Name: ${firstName} ${lastName}`,
    `Email: ${email}`,
    `Phone: ${phone}`,
    ``,
    `Message:`,
    message,
    ``,
    `— meta —`,
    `Consent: ${consent === true ? 'YES (SMS + AI calling, STOP/HELP, msg & data rates disclosed)' : 'NO'}`,
    `Submitted: ${submittedAt}`,
    `IP: ${ip}`,
    `User-Agent: ${userAgent}`,
  ].join('\n');

  const html = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif; color: #0E0E0E; line-height: 1.5;">
      <h2 style="margin:0 0 16px;">New Hey Pearl contact form</h2>
      <table cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
        <tr><td style="padding:4px 12px 4px 0;color:#4A4640;">Name</td><td><strong>${escapeHtml(firstName)} ${escapeHtml(lastName)}</strong></td></tr>
        <tr><td style="padding:4px 12px 4px 0;color:#4A4640;">Email</td><td><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td></tr>
        <tr><td style="padding:4px 12px 4px 0;color:#4A4640;">Phone</td><td><a href="tel:${escapeHtml(phone)}">${escapeHtml(phone)}</a></td></tr>
      </table>
      <h3 style="margin:24px 0 8px;">Message</h3>
      <p style="white-space:pre-wrap;margin:0;">${escapeHtml(message)}</p>
      <hr style="margin:24px 0;border:none;border-top:1px solid #EFE9DC;" />
      <p style="font-size:12px;color:#4A4640;margin:0;">
        Consent: <strong>YES</strong> — SMS + AI calling, STOP/HELP, msg &amp; data rates disclosed.<br/>
        Submitted: ${escapeHtml(submittedAt)}<br/>
        IP: ${escapeHtml(ip)}<br/>
        User-Agent: ${escapeHtml(userAgent)}
      </p>
    </div>
  `;

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject,
      text,
      html,
    });

    if (error) {
      console.error('[contact] Resend delivery error:', error);
      return NextResponse.json(
        {
          ok: false,
          error:
            'We could not deliver your message right now. Please email us directly.',
        },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('[contact] Unexpected error:', err);
    return NextResponse.json(
      {
        ok: false,
        error:
          'We could not deliver your message right now. Please email us directly.',
      },
      { status: 502 },
    );
  }
}
