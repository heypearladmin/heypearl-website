'use client';

import { useState, type FormEvent } from 'react';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Button } from '@/components/ui/Button';
import { ConsentBlock } from '@/components/forms/ConsentBlock';

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
  consentTransactional: boolean;
  consentMarketing: boolean;
};

type Status =
  | { type: 'idle' }
  | { type: 'submitting' }
  | { type: 'success' }
  | { type: 'error'; message: string };

const initial: FormState = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  message: '',
  consentTransactional: false,
  consentMarketing: false,
};

/**
 * GHL A2P 10DLC compliant contact form.
 *
 * - Required: First name, Last name, Email, Phone, Message.
 * - Optional: Two SMS consent checkboxes (transactional + marketing).
 * - Submit is NOT gated on consent — both checkboxes are optional.
 * - Posts JSON to /api/contact.
 */
export function ContactForm() {
  const [values, setValues] = useState<FormState>(initial);
  const [status, setStatus] = useState<Status>({ type: 'idle' });

  const submitting = status.type === 'submitting';
  const canSubmit = !submitting;

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setValues((prev) => ({ ...prev, [key]: value }));
  }



  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus({ type: 'submitting' });

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });

      const data = (await res.json().catch(() => ({}))) as {
        ok?: boolean;
        error?: string;
      };

      if (!res.ok || !data.ok) {
        throw new Error(
          data.error || 'Something went wrong. Please try again.',
        );
      }

      setStatus({ type: 'success' });
      setValues(initial);
    } catch (err) {
      setStatus({
        type: 'error',
        message:
          err instanceof Error
            ? err.message
            : 'Something went wrong. Please try again.',
      });
    }
  }

  if (status.type === 'success') {
    return (
      <div className="rounded-3xl bg-white border border-plum/5 shadow-soft p-10 sm:p-12 text-center">
        <Eyebrow tone="magenta">Message received</Eyebrow>
        <h3 className="mt-4 font-display text-2xl sm:text-3xl text-plum">
          Thanks — we&rsquo;ll be in touch.
        </h3>
        <p className="mt-4 text-slate leading-relaxed max-w-xl mx-auto">
          Your message reached the Hey Pearl team. We typically respond within
          one business day. For urgent matters, email{' '}
          <a
            href="mailto:support@heypearl.io"
            className="underline underline-offset-2 hover:text-plum"
          >
            support@heypearl.io
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate={false}
      className="rounded-3xl bg-white border border-plum/5 shadow-soft p-8 sm:p-10"
      aria-labelledby="contact-form-heading"
    >
      <Eyebrow>Send a message</Eyebrow>
      <h2
        id="contact-form-heading"
        className="mt-4 font-display text-3xl sm:text-4xl text-plum"
      >
        Get in touch with Hey Pearl
      </h2>
      <p className="mt-4 text-slate leading-relaxed">
        Tell us a little about you and we&rsquo;ll follow up by email, text, or
        phone — whichever you prefer.
      </p>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field
          id="firstName"
          label="First name"
          autoComplete="given-name"
          value={values.firstName}
          onChange={(v) => update('firstName', v)}
          required
        />
        <Field
          id="lastName"
          label="Last name"
          autoComplete="family-name"
          value={values.lastName}
          onChange={(v) => update('lastName', v)}
          required
        />
        <Field
          id="email"
          label="Email"
          type="email"
          autoComplete="email"
          inputMode="email"
          value={values.email}
          onChange={(v) => update('email', v)}
          required
        />
        <Field
          id="phone"
          label="Phone number"
          type="tel"
          autoComplete="tel"
          inputMode="tel"
          placeholder="(555) 123-4567"
          value={values.phone}
          onChange={(v) => update('phone', v)}
          required
        />
      </div>

      <div className="mt-5">
        <label
          htmlFor="message"
          className="block text-xs tracking-micro uppercase text-slate mb-2"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={values.message}
          onChange={(e) => update('message', e.target.value)}
          className="w-full rounded-2xl border border-plum/15 bg-white px-4 py-3 text-plum placeholder:text-slate/50 focus:outline-none focus:border-plum/40 focus:ring-2 focus:ring-magenta/30 transition-colors"
          placeholder="How can we help?"
        />
      </div>

      <div className="mt-6">
        <ConsentBlock
          consentTransactional={values.consentTransactional}
          consentMarketing={values.consentMarketing}
          onChangeTransactional={(v) => update('consentTransactional', v)}
          onChangeMarketing={(v) => update('consentMarketing', v)}
        />
      </div>

      {status.type === 'error' && (
        <div
          role="alert"
          className="mt-5 rounded-2xl border border-magenta/30 bg-magenta/5 px-4 py-3 text-sm text-magenta-600"
        >
          {status.message}
        </div>
      )}

      <div className="mt-8">
        <Button
          type="submit"
          variant="primary"
          size="lg"
          withArrow
          disabled={!canSubmit}
          aria-disabled={!canSubmit}
          className="w-full sm:w-auto"
        >
          {submitting ? 'Sending…' : 'Send message'}
        </Button>
      </div>

      <p className="mt-4 text-xs text-slate/70 text-center">
        <a
          href="/privacy-policy"
          className="underline underline-offset-2 hover:text-plum transition-colors"
        >
          Privacy Policy
        </a>
        {' | '}
        <a
          href="/terms-of-service"
          className="underline underline-offset-2 hover:text-plum transition-colors"
        >
          Terms and Conditions
        </a>
      </p>
    </form>
  );
}

/* ----------------------------- Field primitive ---------------------------- */

type FieldProps = {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  required?: boolean;
  placeholder?: string;
  autoComplete?: string;
  inputMode?: 'text' | 'email' | 'tel' | 'numeric' | 'search' | 'url';
};

function Field({
  id,
  label,
  value,
  onChange,
  type = 'text',
  required,
  placeholder,
  autoComplete,
  inputMode,
}: FieldProps) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-xs tracking-micro uppercase text-slate mb-2"
      >
        {label}
        {required && <span className="text-magenta ml-1">*</span>}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        placeholder={placeholder}
        autoComplete={autoComplete}
        inputMode={inputMode}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-2xl border border-plum/15 bg-white px-4 py-3 text-plum placeholder:text-slate/50 focus:outline-none focus:border-plum/40 focus:ring-2 focus:ring-magenta/30 transition-colors"
      />
    </div>
  );
}
