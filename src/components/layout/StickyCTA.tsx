'use client';

import { useEffect, useState } from 'react';
import { Phone, MessageCircle, X } from 'lucide-react';
import { site } from '@/lib/site';

const DISMISS_KEY = 'hp-sticky-cta-dismissed';
const SHOW_AFTER_PX = 600;

/**
 * Floating bottom-right contact widget for long-form content pages (blog
 * posts, resource guides). Appears after the visitor has scrolled past the
 * hero. Collapsed state is a small pill + circular button; clicking it opens
 * a compact card with two direct actions (call, message). Dismissible for
 * the session. Not a full-width bar or an intrusive overlay.
 */
export function StickyCTA() {
  const [scrolledPast, setScrolledPast] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(DISMISS_KEY) === '1') {
      setDismissed(true);
      return;
    }

    function onScroll() {
      setScrolledPast(window.scrollY > SHOW_AFTER_PX);
    }
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  function dismiss() {
    setDismissed(true);
    setOpen(false);
    sessionStorage.setItem(DISMISS_KEY, '1');
  }

  if (dismissed || !scrolledPast) return null;

  return (
    <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end gap-3">
      {/* Expanded card */}
      {open && (
        <div className="w-[19rem] rounded-3xl bg-white shadow-lift border border-plum/5 overflow-hidden">
          {/* Header */}
          <div className="relative bg-plum text-cream px-5 py-4">
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Collapse"
              className="absolute top-3 right-3 h-6 w-6 inline-flex items-center justify-center rounded-full text-cream/60 hover:text-cream hover:bg-cream/10 transition-colors"
            >
              <X size={14} />
            </button>
            <p className="font-display text-lg leading-tight pr-6">Need anything?</p>
            <p className="mt-1 text-xs text-cream/70 leading-relaxed">
              Call or send a message — whatever&rsquo;s easiest.
            </p>
          </div>

          {/* Actions */}
          <div className="flex flex-col divide-y divide-plum/8">
            <a
              href={`tel:${site.contact.phone}`}
              className="group flex items-center gap-3 px-5 py-4 hover:bg-cream/60 transition-colors"
            >
              <span className="flex-shrink-0 h-9 w-9 rounded-full bg-lavender flex items-center justify-center">
                <Phone size={15} className="text-plum" />
              </span>
              <span>
                <span className="block text-sm font-medium text-plum">Call Hey Pearl</span>
                <span className="block text-xs text-slate/60">{site.contact.phoneDisplay}</span>
              </span>
            </a>
            <a
              href="/contact"
              className="group flex items-center gap-3 px-5 py-4 hover:bg-cream/60 transition-colors"
            >
              <span className="flex-shrink-0 h-9 w-9 rounded-full bg-lavender flex items-center justify-center">
                <MessageCircle size={15} className="text-plum" />
              </span>
              <span>
                <span className="block text-sm font-medium text-plum">Send a Message</span>
                <span className="block text-xs text-slate/60">Get a reply within a business day</span>
              </span>
            </a>
          </div>
        </div>
      )}

      {/* Collapsed row: pill + FAB */}
      {!open && (
        <div className="flex items-center gap-2.5">
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="hidden sm:inline-flex items-center gap-2 rounded-full bg-white border border-plum/10 shadow-soft pl-4 pr-3 py-2 text-sm text-plum hover:border-plum/25 transition-colors"
          >
            Have Questions? Talk to Hey Pearl
            <X
              size={13}
              className="text-slate/40 hover:text-plum transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                dismiss();
              }}
            />
          </button>
        </div>
      )}

      {/* Circular toggle button — always present once scrolled past threshold */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? 'Close contact panel' : 'Open contact panel'}
        aria-expanded={open}
        className="h-14 w-14 rounded-full bg-plum text-cream shadow-lift flex items-center justify-center hover:bg-navy transition-colors duration-200"
      >
        {open ? <X size={20} /> : <Phone size={20} />}
      </button>
    </div>
  );
}
