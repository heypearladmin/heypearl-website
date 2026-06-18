'use client';

import { cn } from '@/lib/utils';

/**
 * GHL A2P 10DLC compliant dual-consent block.
 *
 * Two optional, unchecked SMS consent checkboxes per GHL template format:
 *   1. Transactional SMS
 *   2. Marketing SMS
 *
 * Policy links (Privacy Policy | Terms and Conditions) are rendered
 * below the Submit button in ContactForm, not here.
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
          I consent to receive non-marketing text messages from{' '}
          <strong>Hey Pearl Agency LLC</strong> regarding appointment
          confirmations, reminders, account notifications, customer support, and
          service-related communications. Message frequency varies, message &amp;
          data rates may apply. Reply HELP for assistance, reply STOP to opt out.
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
          I consent to receive marketing text messages from{' '}
          <strong>Hey Pearl Agency LLC</strong> regarding special offers,
          discounts, promotions, marketing updates, and service announcements.
          Message frequency varies, message &amp; data rates may apply. Reply
          HELP for assistance, reply STOP to opt out.
        </span>
      </label>
    </div>
  );
}
