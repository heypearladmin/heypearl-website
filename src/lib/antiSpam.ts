/**
 * Shared server-side spam checks for public lead forms — a honeypot field
 * check and a submission-timing check. Used by every API route that accepts
 * a public form submission (/api/contact, /api/lead-magnet).
 *
 * Both checks run server-side only. The client sends the honeypot value and
 * the form's mount timestamp, but the server independently recomputes
 * elapsed time against its own clock — a forged "verified" flag or a client
 * that skips the delay cannot bypass this.
 */

// A human filling out a real form cannot realistically submit this fast.
export const MIN_SUBMIT_MS = 2000;
// A submission built from a page loaded this long ago is almost certainly a
// replayed or scripted request, not a real visitor who left a tab open.
export const MAX_SUBMIT_MS = 6 * 60 * 60 * 1000; // 6 hours

/** True if the honeypot field was filled in — only a bot would do this. */
export function isHoneypotTripped(value: unknown): boolean {
  return typeof value === 'string' && value.trim().length > 0;
}

export type TimingCheck = { ok: true } | { ok: false; reason: 'missing_or_invalid' | 'too_fast' | 'stale' };

/**
 * Validates the client-reported form-mount timestamp against the server's
 * own clock. Accepts a number or a numeric string (a raw API call made
 * outside the real client might send either); anything else is rejected.
 */
export function checkSubmissionTiming(formLoadedAt: unknown): TimingCheck {
  const ts =
    typeof formLoadedAt === 'number'
      ? formLoadedAt
      : typeof formLoadedAt === 'string' && formLoadedAt.trim() !== ''
        ? Number(formLoadedAt)
        : NaN;

  if (!Number.isFinite(ts)) {
    return { ok: false, reason: 'missing_or_invalid' };
  }

  const elapsed = Date.now() - ts;

  if (elapsed < MIN_SUBMIT_MS) {
    return { ok: false, reason: 'too_fast' };
  }

  if (elapsed > MAX_SUBMIT_MS) {
    return { ok: false, reason: 'stale' };
  }

  return { ok: true };
}
