'use client';

import Link from 'next/link';
import { cn } from '@/lib/utils';

/**
 * GHL A2P 10DLC compliant dual-consent block.
 *
 * Renders TWO optional, unchecked SMS consent checkboxes:
 *   1. Transactional SMS (appointment confirmations, account notifications, etc.)
 *   2. Marketing SMS (offers, promotions, announcements)
 *
 * Both are optional — neither blocks form submission.
 * Disclosure language is verbatim per GHL A2P review requirements.
 */

type ConsentBlockProps = {
  consentTransactional: boolean;
  consentMarketing: boolean;
  onChangeTransactional: (value: boolean) => void;
  onChangeMarketing: (value: boolean) => void;
  idPrefix?: string;
  className?: string;
};

export function ConsentBlock({
  consentTransactional,
  consentMarketing,
  onChangeTransactional,
  onChangeMarketing,
  idPrefix = 'consent',
  className,
}: ConsentBlockProps) {
  const transactionalId = `${idPrefix}-transactional`;
  const marketingId = `${idPrefix}-marketing`;

  return (
    <div
      className={cn(
        'rounded-2xl border border-plum/10 bg-cream/60 p-5 sm:p-6 flex flex-col gap-5',
        className,
      )}
    >
      {/* Checkbox 1 — Transactional SMS */}
      <label htmlFor={transactionalId} className="flex items-start gap-3 cursor-pointer">
        <input
          id={transactionalId}
          name={transactionalId}
          type="checkbox"
          checked={consentTransactional}
          onChange={(e) => onChangeTransactional(e.target.checked)}
          aria-describedby={`${transactionalId}-description`}
          className="mt-1 h-4 w-4 shrink-0 rounded border-plum/30 text-magenta focus:ring-2 focus:ring-magenta focus:ring-offset-2 focus:ring-offset-cream cursor-pointer"
        />
        <span
          id={`${transactionalId}-description`}
          className="text-sm text-slate leading-relaxed"
        >
          I consent to receive non-marketing text messages from Hey Pearl Agency
          LLC about appointment confirmations, appointment reminders, account
          notifications, customer support updates, and service-related
          communications at the phone number provided. Message frequency may
          vary. Message &amp; data rates may apply. Text HELP for assistance,
          reply STOP to opt out.
        </span>
      </label>

      {/* Checkbox 2 — Marketing SMS */}
      <label htmlFor={marketingId} className="flex items-start gap-3 cursor-pointer">
        <input
          id={marketingId}
          name={marketingId}
          type="checkbox"
          checked={consentMarketing}
          onChange={(e) => onChangeMarketing(e.target.checked)}
          aria-describedby={`${marketingId}-description`}
          className="mt-1 h-4 w-4 shrink-0 rounded border-plum/30 text-magenta focus:ring-2 focus:ring-magenta focus:ring-offset-2 focus:ring-offset-cream cursor-pointer"
        />
        <span
          id={`${marketingId}-description`}
          className="text-sm text-slate leading-relaxed"
        >
          I consent to receive marketing text messages from Hey Pearl Agency LLC
          about special offers, discounts, promotions, marketing updates, and
          service announcements at the phone number provided. Message frequency
          may vary. Message &amp; data rates may apply. Text HELP for
          assistance, reply STOP to opt out.
        </span>
      </label>

      {/* Policy links */}
      <p className="text-xs text-slate/80 leading-relaxed pl-7">
        By submitting this form, you agree to our{' '}
        <Link
          href="/terms-of-service"
          className="underline underline-offset-2 hover:text-plum transition-colors"
        >
          Terms of Service
        </Link>{' '}
        and{' '}
        <Link
          href="/privacy-policy"
          className="underline underline-offset-2 hover:text-plum transition-colors"
        >
          Privacy Policy
        </Link>
        . SMS consent is optional and not required to submit this form.
      </p>
    </div>
  );
}
