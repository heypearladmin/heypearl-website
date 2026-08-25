import { NextResponse, type NextRequest } from 'next/server';
import { LEAD_MAGNET_PDF_BY_POST_SLUG } from '@/lib/leadMagnets';

/**
 * POST /api/lead-magnet
 *
 * Soft-gates a PDF download behind a name + email (+ optional phone) form.
 * GHL is the source of truth for lead capture — there is no email/Resend
 * fallback. The flow is: validate → upsert contact in GHL (source + tags
 * applied in the same call) → best-effort note + optional workflow trigger
 * → only then return the PDF download URL to the client.
 *
 * If the GHL call fails, the PDF is NOT revealed — the lead capture is a
 * hard requirement, not a nice-to-have.
 *
 * Required env (Vercel → Project → Settings → Environment Variables):
 *   - GHL_API_KEY               Private Integration Token (Bearer auth)
 *   - GHL_LOCATION_ID           GHL sub-account / location ID
 *   - GHL_LEAD_MAGNET_WORKFLOW_ID   optional — workflow to trigger on submit
 */

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const GHL_API_BASE = 'https://services.leadconnectorhq.com';
const GHL_API_VERSION = '2021-07-28';

type Payload = {
  firstName?: unknown;
  email?: unknown;
  phone?: unknown;
  postSlug?: unknown;
  resourceTitle?: unknown;
  sourcePage?: unknown;
};

function isNonEmptyString(v: unknown): v is string {
  return typeof v === 'string' && v.trim().length > 0;
}

export async function POST(req: NextRequest) {
  let body: Payload;
  try {
    body = (await req.json()) as Payload;
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid JSON payload.' }, { status: 400 });
  }

  const { firstName, email, phone, postSlug, resourceTitle, sourcePage } = body;

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

  const title = isNonEmptyString(resourceTitle) ? resourceTitle : postSlug;
  const source = isNonEmptyString(sourcePage) ? sourcePage : `/insights/${postSlug}`;

  const apiKey = process.env.GHL_API_KEY;
  const locationId = process.env.GHL_LOCATION_ID;

  if (!apiKey || !locationId) {
    console.error('[lead-magnet] GHL_API_KEY or GHL_LOCATION_ID not configured — cannot capture lead.');
    return NextResponse.json(
      { ok: false, error: 'This form is not available right now. Please try again later.' },
      { status: 503 },
    );
  }

  const guideTag = `pdf-${postSlug}`;
  const contactSource = `Website Lead Magnet — ${title}`;
  const ghlHeaders = {
    Authorization: `Bearer ${apiKey}`,
    Version: GHL_API_VERSION,
    'Content-Type': 'application/json',
  };

  try {
    const upsertRes = await fetch(`${GHL_API_BASE}/contacts/upsert`, {
      method: 'POST',
      headers: ghlHeaders,
      body: JSON.stringify({
        locationId,
        firstName,
        email,
        ...(isNonEmptyString(phone) ? { phone } : {}),
        source: contactSource,
        tags: ['heypearl', 'pdf-lead-magnet', guideTag],
      }),
    });

    const upsertData = await upsertRes.json().catch(() => null);
    const contactId: string | undefined = upsertData?.contact?.id;

    if (!upsertRes.ok || !contactId) {
      console.error('[lead-magnet] GHL contact upsert failed:', upsertRes.status, upsertData);
      return NextResponse.json(
        { ok: false, error: 'We could not process your request right now. Please try again.' },
        { status: 502 },
      );
    }

    // Best-effort enrichment — does not block the PDF reveal, which already
    // succeeded once the contact was created/updated with source + tags.
    fetch(`${GHL_API_BASE}/contacts/${contactId}/notes`, {
      method: 'POST',
      headers: ghlHeaders,
      body: JSON.stringify({
        body: `Downloaded PDF guide "${title}" from ${source} on ${new Date().toISOString()}.`,
      }),
    }).catch((err) => console.error('[lead-magnet] GHL note failed (non-blocking):', err));

    const workflowId = process.env.GHL_LEAD_MAGNET_WORKFLOW_ID;
    if (workflowId) {
      fetch(`${GHL_API_BASE}/contacts/${contactId}/workflow/${workflowId}`, {
        method: 'POST',
        headers: ghlHeaders,
      }).catch((err) => console.error('[lead-magnet] GHL workflow trigger failed (non-blocking):', err));
    }

    return NextResponse.json({ ok: true, downloadUrl: `/pdfs/${pdfFile}` });
  } catch (err) {
    console.error('[lead-magnet] Unexpected error calling GHL:', err);
    return NextResponse.json(
      { ok: false, error: 'We could not process your request right now. Please try again.' },
      { status: 502 },
    );
  }
}
