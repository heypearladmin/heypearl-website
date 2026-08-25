import { NextResponse, type NextRequest } from 'next/server';
import { Resend } from 'resend';
import { site } from '@/lib/site';
import { LEAD_MAGNET_PDF_BY_POST_SLUG } from '@/lib/leadMagnets';

/**
 * POST /api/lead-magnet
 *
 * Soft-gates a PDF download behind a lightweight name + email capture.
 * There is no CRM integration on this site (see /api/contact) — the sole
 * lead-recording mechanism is a notification email via Resend, same as the
 * contact form. Source attribution (which resource, which page) is included
 * in that email so leads aren't generic "website.com" submissions.
 *
 * The PDF itself is NOT access-controlled — it is a normal public file under
 * public/pdfs/. This route only records the lead and returns the download
 * URL; it does not gate the file at the network layer (soft gate, per spec).
 *
 * Required env (same as /api/contact):
 *   - RESEND_API_KEY      (required for actual delivery)
 *   - CONTACT_TO_EMAIL    (optional; defaults to site.contact.email)
 *   - CONTACT_FROM_EMAIL  (optional; defaults to "Hey Pearl Agency LLC <noreply@heypearl.io>")
 */

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

type Payload = {
  firstName?: unknown;
  email?: unknown;
  postSlug?: unknown;
  resourceTitle?: unknown;
  sourcePage?: unknown;
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

  const { firstName, email, postSlug, resourceTitle, sourcePage } = body;

  if (!isNonEmptyString(firstName) || !isNonEmptyString(email) || !isNonEmptyString(postSlug)) {
    return NextResponse.json(
      { ok: false, error: 'First name and email are required.' },
      { status: 400 },
    );
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { ok: false, error: 'Please provide a valid email address.' },
      { status: 400 },
    );
  }

  const pdfFile = LEAD_MAGNET_PDF_BY_POST_SLUG[postSlug];
  if (!pdfFile) {
    return NextResponse.json(
      { ok: false, error: 'That guide is not available for download.' },
      { status: 404 },
    );
  }

  const downloadUrl = `/pdfs/${pdfFile}`;
  const title = isNonEmptyString(resourceTitle) ? resourceTitle : postSlug;
  const source = isNonEmptyString(sourcePage) ? sourcePage : `/insights/${postSlug}`;

  const submittedAt = new Date().toISOString();
  const userAgent = req.headers.get('user-agent') ?? 'unknown';
  const ip =
    req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown';

  const to = process.env.CONTACT_TO_EMAIL ?? site.contact.email;
  const from =
    process.env.CONTACT_FROM_EMAIL ?? 'Hey Pearl Agency LLC <noreply@heypearl.io>';
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.warn(
      '[lead-magnet] RESEND_API_KEY not set — logging submission instead of emailing.',
      { firstName, email, postSlug, title, source, submittedAt, userAgent, ip },
    );
    return NextResponse.json({ ok: true, downloadUrl });
  }

  const subject = `New PDF guide download — ${title}`;
  const text = [
    `New lead-magnet download`,
    ``,
    `Name: ${firstName}`,
    `Email: ${email}`,
    `Guide: ${title}`,
    `Source page: ${source}`,
    ``,
    `— meta —`,
    `Submitted: ${submittedAt}`,
    `IP: ${ip}`,
    `User-Agent: ${userAgent}`,
  ].join('\n');

  const html = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif; color: #0E0E0E; line-height: 1.5;">
      <h2 style="margin:0 0 16px;">New PDF guide download</h2>
      <table cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
        <tr><td style="padding:4px 12px 4px 0;color:#4A4640;">Name</td><td><strong>${escapeHtml(firstName)}</strong></td></tr>
        <tr><td style="padding:4px 12px 4px 0;color:#4A4640;">Email</td><td><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td></tr>
        <tr><td style="padding:4px 12px 4px 0;color:#4A4640;">Guide</td><td><strong>${escapeHtml(title)}</strong></td></tr>
        <tr><td style="padding:4px 12px 4px 0;color:#4A4640;">Source</td><td>${escapeHtml(source)}</td></tr>
      </table>
      <hr style="margin:24px 0;border:none;border-top:1px solid #EFE9DC;" />
      <p style="font-size:12px;color:#4A4640;margin:0;">
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
      console.error('[lead-magnet] Resend delivery error:', error);
      // The lead capture itself still succeeds even if the notification email
      // fails to send — don't block the visitor's download over an internal
      // delivery issue.
    }

    return NextResponse.json({ ok: true, downloadUrl });
  } catch (err) {
    console.error('[lead-magnet] Unexpected error:', err);
    return NextResponse.json({ ok: true, downloadUrl });
  }
}
