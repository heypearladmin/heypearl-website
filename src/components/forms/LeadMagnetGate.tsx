'use client';

import { useState, type FormEvent } from 'react';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Button, LinkButton } from '@/components/ui/Button';
import { Download, FileText } from 'lucide-react';

type Props = {
  postSlug: string;
  title: string;
  sourcePage: string;
};

type Status =
  | { type: 'collapsed' }
  | { type: 'expanded' }
  | { type: 'submitting' }
  | { type: 'success'; downloadUrl: string }
  | { type: 'error'; message: string };

/**
 * Soft-gated PDF lead magnet. Starts as a compact CTA card; expanding it
 * reveals a two-field form (first name + email). On success, reveals the
 * actual download link inline — no redirect, no modal, no popup.
 */
export function LeadMagnetGate({ postSlug, title, sourcePage }: Props) {
  const [status, setStatus] = useState<Status>({ type: 'collapsed' });
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus({ type: 'submitting' });

    try {
      const res = await fetch('/api/lead-magnet', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ firstName, email, phone, postSlug, resourceTitle: title, sourcePage }),
      });

      const data = (await res.json().catch(() => ({}))) as {
        ok?: boolean;
        downloadUrl?: string;
        error?: string;
      };

      if (!res.ok || !data.ok || !data.downloadUrl) {
        throw new Error(data.error || 'Something went wrong. Please try again.');
      }

      setStatus({ type: 'success', downloadUrl: data.downloadUrl });
    } catch (err) {
      setStatus({
        type: 'error',
        message: err instanceof Error ? err.message : 'Something went wrong. Please try again.',
      });
    }
  }

  if (status.type === 'success') {
    return (
      <div className="rounded-3xl bg-lavender border border-plum/10 p-8 sm:p-10 text-center">
        <Eyebrow tone="magenta">Your guide is ready</Eyebrow>
        <h3 className="mt-3 font-display text-2xl text-plum">Download {title}</h3>
        <p className="mt-3 text-slate leading-relaxed max-w-md mx-auto text-sm">
          Thanks, {firstName || 'friend'} — your download is ready below.
        </p>
        <div className="mt-6">
          <LinkButton href={status.downloadUrl} external variant="primary" size="lg" withArrow>
            <Download size={16} className="mr-1.5" />
            Download Your Guide
          </LinkButton>
        </div>
      </div>
    );
  }

  if (status.type === 'expanded' || status.type === 'submitting' || status.type === 'error') {
    const submitting = status.type === 'submitting';
    return (
      <form
        onSubmit={onSubmit}
        className="rounded-3xl bg-white border border-plum/5 shadow-soft p-8 sm:p-10"
        aria-labelledby="lead-magnet-heading"
      >
        <Eyebrow>Free PDF Guide</Eyebrow>
        <h3 id="lead-magnet-heading" className="mt-3 font-display text-2xl text-plum">
          Get {title} as a PDF
        </h3>
        <p className="mt-3 text-slate leading-relaxed text-sm">
          Your download unlocks immediately below — no email required to access it.
        </p>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="lm-firstName" className="block text-xs tracking-micro uppercase text-slate mb-2">
              First name<span className="text-magenta ml-1">*</span>
            </label>
            <input
              id="lm-firstName"
              name="firstName"
              type="text"
              required
              autoComplete="given-name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full rounded-2xl border border-plum/15 bg-white px-4 py-3 text-plum placeholder:text-slate/50 focus:outline-none focus:border-plum/40 focus:ring-2 focus:ring-magenta/30 transition-colors"
            />
          </div>
          <div>
            <label htmlFor="lm-email" className="block text-xs tracking-micro uppercase text-slate mb-2">
              Email<span className="text-magenta ml-1">*</span>
            </label>
            <input
              id="lm-email"
              name="email"
              type="email"
              required
              autoComplete="email"
              inputMode="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-2xl border border-plum/15 bg-white px-4 py-3 text-plum placeholder:text-slate/50 focus:outline-none focus:border-plum/40 focus:ring-2 focus:ring-magenta/30 transition-colors"
            />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="lm-phone" className="block text-xs tracking-micro uppercase text-slate mb-2">
              Phone <span className="text-slate/50 normal-case">(optional)</span>
            </label>
            <input
              id="lm-phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              inputMode="tel"
              placeholder="(555) 123-4567"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full rounded-2xl border border-plum/15 bg-white px-4 py-3 text-plum placeholder:text-slate/50 focus:outline-none focus:border-plum/40 focus:ring-2 focus:ring-magenta/30 transition-colors"
            />
          </div>
        </div>

        {status.type === 'error' && (
          <div role="alert" className="mt-5 rounded-2xl border border-magenta/30 bg-magenta/5 px-4 py-3 text-sm text-magenta-600">
            {status.message}
          </div>
        )}

        <div className="mt-6 flex flex-wrap items-center gap-4">
          <Button type="submit" variant="primary" size="lg" withArrow disabled={submitting} aria-disabled={submitting}>
            {submitting ? 'Sending…' : 'Get the PDF'}
          </Button>
          <p className="text-xs text-slate/60">
            By submitting, you agree to our{' '}
            <a href="/privacy-policy" className="underline underline-offset-2 hover:text-plum transition-colors">
              Privacy Policy
            </a>.
          </p>
        </div>
      </form>
    );
  }

  // Collapsed state — compact CTA card
  return (
    <button
      type="button"
      onClick={() => setStatus({ type: 'expanded' })}
      className="group w-full flex items-center justify-between gap-4 rounded-3xl bg-lavender border border-plum/10 p-6 sm:p-8 text-left hover:border-magenta/30 hover:shadow-soft transition-all duration-300"
    >
      <div className="flex items-center gap-4">
        <div className="flex-shrink-0 h-12 w-12 rounded-2xl bg-magenta/10 flex items-center justify-center">
          <FileText size={20} className="text-magenta" />
        </div>
        <div>
          <p className="text-[0.65rem] tracking-micro uppercase text-magenta font-medium mb-1">Free PDF Guide</p>
          <p className="font-display text-lg text-plum leading-snug">Download {title} as a PDF</p>
        </div>
      </div>
      <Download size={18} className="flex-shrink-0 text-plum/40 group-hover:text-magenta transition-colors" />
    </button>
  );
}
