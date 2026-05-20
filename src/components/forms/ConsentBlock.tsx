'use client';

import Link from 'next/link';
import { cn } from '@/lib/utils';

/**
 * A2P 10DLC / Twilio / GoHighLevel compliant consent block.
 *
 * Renders the legally-required SMS + AI calling consent disclosure and an
 * unchecked, required consent checkbox. Used inside ContactForm.
 *
 * IMPORTANT: The disclosure language is intentionally verbatim. Do not
 * paraphrase without legal review — registrars (Twilio, GHL) check for it.
 */

type ConsentBlockProps = {
  checked: boolean;
  onChange: (value: boolean) => void;
  /** Optional id override for the checkbox (useful if multiple forms on a page). */
  id?: string;
  className?: string;
  /** Brand/company name interpolated into the disclosure. */
  companyName?: string;
};

export function ConsentBlock({
  checked,
  onChange,
  id = 'consent',
  className,
  companyName = 'Hey Pearl',
}: ConsentBlockProps) {
  return (
    <div
      className={cn(
        'rounded-2xl border border-plum/10 bg-cream/60 p-5 sm:p-6',
        className,
      )}
    >
      <label htmlFor={id} className="flex items-start gap-3 cursor-pointer">
        <input
          id={id}
          name={id}
          type="checkbox"
          required
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          aria-describedby={`${id}-description`}
          className="mt-1 h-4 w-4 shrink-0 rounded border-plum/30 text-magenta focus:ring-2 focus:ring-magenta focus:ring-offset-2 focus:ring-offset-cream cursor-pointer"
        />
        <span
          id={`${id}-description`}
          className="text-sm text-slate leading-relaxed"
        >
          I agree to receive text messages and phone calls from {companyName} at
          the phone number provided. Message frequency varies. Message &amp;
          data rates may apply. Reply STOP to unsubscribe. Reply HELP for help.
          By submitting this form, you agree to our{' '}
          <Link
            href="/terms"
            className="underline underline-offset-2 hover:text-plum transition-colors"
          >
            Terms &amp; Conditions
          </Link>{' '}
          and{' '}
          <Link
            href="/policies"
            className="underline underline-offset-2 hover:text-plum transition-colors"
          >
            Privacy Policy
          </Link>
          .
        </span>
      </label>

      <p className="mt-4 text-xs text-slate/80 leading-relaxed pl-7">
        By providing your phone number, you consent to receive calls and text
        messages, including automated calls and AI-assisted communications,
        from {companyName}.
      </p>
    </div>
  );
}
