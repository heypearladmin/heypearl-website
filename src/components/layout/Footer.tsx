'use client';

import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Logo } from '@/components/ui/Logo';
import { LinkButton } from '@/components/ui/Button';
import { footerNav } from '@/lib/nav';
import { site } from '@/lib/site';
import { Instagram, Facebook, Youtube, Phone, Mail, MapPin } from 'lucide-react';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden" style={{ background: '#07142F', color: '#F8F5F0' }}>
      {/* Subtle navy radial — no orange glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(70% 50% at 50% 0%, rgba(30,58,102,0.45) 0%, transparent 70%)',
        }}
      />

      <div className="relative">
        {/* Editorial CTA strip */}
        <Container size="xl" className="pt-24 pb-16">
          <div className="grid lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-7">
              {/* Section eyebrow — muted cream, no magenta dot */}
              <p
                className="inline-flex items-center gap-2 text-[0.72rem] font-medium uppercase tracking-widest"
                style={{ color: 'rgba(248,245,240,0.5)' }}
              >
                Authority Infrastructure
              </p>
              <h3
                className="mt-4 font-display text-display-md max-w-2xl"
                style={{ color: '#F8F5F0' }}
              >
                Build authority before AI chooses your competitors.
              </h3>
            </div>
            <div className="lg:col-span-5 flex flex-col sm:flex-row gap-3 lg:justify-end">
              <LinkButton
                href={site.strategyCallUrl}
                external
                variant="inverse"
                size="lg"
                withArrow
              >
                Start Your AI Authority Journey
              </LinkButton>
              <LinkButton
                href="/contact"
                variant="ghost"
                size="lg"
                className="border border-[rgba(248,245,240,0.2)] hover:bg-[rgba(248,245,240,0.05)]"
                style={{ color: '#F8F5F0' }}
              >
                Contact Hey Pearl
              </LinkButton>
            </div>
          </div>
        </Container>

        <div style={{ borderTop: '1px solid rgba(248,245,240,0.08)' }} />

        <Container size="xl" className="py-16">
          <div className="grid lg:grid-cols-12 gap-10">
            {/* Brand column */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <Logo variant="inverse" />
              </div>
              <p className="max-w-sm leading-relaxed" style={{ color: 'rgba(248,245,240,0.75)' }}>
                {site.tagline} Hey Pearl is the authority infrastructure for the AI search era.
              </p>
              <p className="text-xs max-w-sm leading-relaxed" style={{ color: 'rgba(248,245,240,0.55)' }}>
                P.E.A.R.L.: Process &middot; Efficiency &middot; Automation &middot; Replication &middot; Leverage.
              </p>
              <p className="text-xs uppercase tracking-widest" style={{ color: 'rgba(248,245,240,0.4)' }}>
                HeyPearl.io, maker of PearlOS
              </p>

              <div className="flex items-center gap-3 mt-4">
                <a
                  href={site.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="h-10 w-10 inline-flex items-center justify-center rounded-full transition"
                  style={{ border: '1px solid rgba(248,245,240,0.15)', color: 'rgba(248,245,240,0.7)' }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(248,245,240,0.4)';
                    (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'rgba(248,245,240,0.05)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(248,245,240,0.15)';
                    (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'transparent';
                  }}
                >
                  <Instagram size={16} />
                </a>
                <a
                  href={site.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="h-10 w-10 inline-flex items-center justify-center rounded-full transition"
                  style={{ border: '1px solid rgba(248,245,240,0.15)', color: 'rgba(248,245,240,0.7)' }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(248,245,240,0.4)';
                    (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'rgba(248,245,240,0.05)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(248,245,240,0.15)';
                    (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'transparent';
                  }}
                >
                  <Facebook size={16} />
                </a>
                <a
                  href={site.social.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="h-10 w-10 inline-flex items-center justify-center rounded-full transition"
                  style={{ border: '1px solid rgba(248,245,240,0.15)', color: 'rgba(248,245,240,0.7)' }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(248,245,240,0.4)';
                    (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'rgba(248,245,240,0.05)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(248,245,240,0.15)';
                    (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'transparent';
                  }}
                >
                  <Youtube size={16} />
                </a>
              </div>
            </div>

            {/* Link columns */}
            <div className="lg:col-span-7 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
              <div>
                <p
                  className="text-[0.72rem] font-medium uppercase tracking-widest"
                  style={{ color: 'rgba(248,245,240,0.5)' }}
                >
                  Products
                </p>
                <ul className="mt-5 flex flex-col gap-3">
                  {footerNav.products.map((l) => (
                    <li key={l.label}>
                      {l.external ? (
                        <a
                          href={l.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm transition flex items-center gap-1"
                          style={{ color: l.label === 'GEO Farming AI' ? 'rgba(194,24,91,0.85)' : 'rgba(248,245,240,0.75)' }}
                          onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = l.label === 'GEO Farming AI' ? '#C2185B' : '#F8F5F0'; }}
                          onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = l.label === 'GEO Farming AI' ? 'rgba(194,24,91,0.85)' : 'rgba(248,245,240,0.75)'; }}
                        >
                          {l.label}
                        </a>
                      ) : (
                        <Link
                          href={l.href}
                          className="text-sm transition"
                          style={{ color: 'rgba(248,245,240,0.75)' }}
                          onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = '#F8F5F0'; }}
                          onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(248,245,240,0.75)'; }}
                        >
                          {l.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p
                  className="text-[0.72rem] font-medium uppercase tracking-widest"
                  style={{ color: 'rgba(248,245,240,0.5)' }}
                >
                  Platform
                </p>
                <ul className="mt-5 flex flex-col gap-3">
                  {footerNav.platform.map((l) => (
                    <li key={l.label}>
                      <Link
                        href={l.href}
                        className="text-sm transition"
                        style={{ color: 'rgba(248,245,240,0.75)' }}
                        onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = '#F8F5F0'; }}
                        onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(248,245,240,0.75)'; }}
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p
                  className="text-[0.72rem] font-medium uppercase tracking-widest"
                  style={{ color: 'rgba(248,245,240,0.5)' }}
                >
                  Company
                </p>
                <ul className="mt-5 flex flex-col gap-3">
                  {footerNav.company.map((l) => (
                    <li key={l.label}>
                      <Link
                        href={l.href}
                        className="text-sm transition"
                        style={{ color: 'rgba(248,245,240,0.75)' }}
                        onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = '#F8F5F0'; }}
                        onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(248,245,240,0.75)'; }}
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p
                  className="text-[0.72rem] font-medium uppercase tracking-widest"
                  style={{ color: 'rgba(248,245,240,0.5)' }}
                >
                  Contact
                </p>
                <ul className="mt-5 flex flex-col gap-3 text-sm" style={{ color: 'rgba(248,245,240,0.75)' }}>
                  <li className="flex items-start gap-2">
                    <Phone size={14} className="mt-1 shrink-0" />
                    <a
                      href={`tel:${site.contact.phone}`}
                      className="transition hover:text-[#F8F5F0]"
                    >
                      {site.contact.phoneDisplay}
                    </a>
                  </li>
                  <li className="flex items-start gap-2">
                    <Mail size={14} className="mt-1 shrink-0" />
                    <a
                      href={`mailto:${site.contact.email}`}
                      className="transition hover:text-[#F8F5F0]"
                    >
                      {site.contact.email}
                    </a>
                  </li>
                  <li className="flex items-start gap-2">
                    <MapPin size={14} className="mt-1 shrink-0" />
                    <span>{site.contact.address.display}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Container>

        <div style={{ borderTop: '1px solid rgba(248,245,240,0.08)' }} />

        <Container size="xl" className="py-6">
          <div
            className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs"
            style={{ color: 'rgba(248,245,240,0.5)' }}
          >
            <p>
              &copy; {year} {site.legalName}. All rights reserved.
            </p>
            <ul className="flex items-center gap-6">
              {footerNav.legal.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="transition hover:text-[#F8F5F0]"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </div>
    </footer>
  );
}
