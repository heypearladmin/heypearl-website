import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Logo } from '@/components/ui/Logo';
import { PearlMark } from '@/components/ui/PearlMark';
import { LinkButton } from '@/components/ui/Button';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { footerNav } from '@/lib/nav';
import { site } from '@/lib/site';
import { Instagram, Facebook, Youtube, Phone, Mail, MapPin } from 'lucide-react';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-plum text-cream">
      {/* Aurora glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          background:
            'radial-gradient(60% 50% at 80% 0%, rgba(255,145,77,0.18) 0%, transparent 60%), radial-gradient(50% 60% at 0% 100%, rgba(211,70,129,0.18) 0%, transparent 60%)',
        }}
      />

      <div className="relative">
        {/* Editorial CTA strip */}
        <Container size="xl" className="pt-24 pb-16">
          <div className="grid lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-7">
              <Eyebrow tone="cream">Authority Infrastructure</Eyebrow>
              <h3 className="mt-4 font-display text-display-md text-cream max-w-2xl">
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
                Schedule a Strategy Call
              </LinkButton>
              <LinkButton
                href="/contact"
                variant="ghost"
                size="lg"
                className="text-cream border border-cream/20 hover:bg-cream/5"
              >
                Contact HeyPearl
              </LinkButton>
            </div>
          </div>
        </Container>

        <div className="border-t border-cream/10" />

        <Container size="xl" className="py-16">
          <div className="grid lg:grid-cols-12 gap-10">
            {/* Brand column */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <PearlMark variant="inverse" className="h-12 w-12 shrink-0" />
                <Logo variant="inverse" />
              </div>
              <p className="text-cream/70 max-w-sm leading-relaxed">
                {site.tagline} HeyPearl is the authority infrastructure for the AI search era.
              </p>
              <p className="text-xs text-cream/55 max-w-sm leading-relaxed">
                P.E.A.R.L.: Process &middot; Efficiency &middot; Automation &middot; Revenue &middot; Leverage.
              </p>
              <p className="text-xs text-cream/50 tracking-micro uppercase">
                HeyPearl.io, maker of PearlOS
              </p>

              <div className="flex items-center gap-3 mt-4">
                <a
                  href={site.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="h-10 w-10 inline-flex items-center justify-center rounded-full border border-cream/15 hover:border-cream/40 hover:bg-cream/5 transition"
                >
                  <Instagram size={16} />
                </a>
                <a
                  href={site.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="h-10 w-10 inline-flex items-center justify-center rounded-full border border-cream/15 hover:border-cream/40 hover:bg-cream/5 transition"
                >
                  <Facebook size={16} />
                </a>
                <a
                  href={site.social.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="h-10 w-10 inline-flex items-center justify-center rounded-full border border-cream/15 hover:border-cream/40 hover:bg-cream/5 transition"
                >
                  <Youtube size={16} />
                </a>
              </div>
            </div>

            {/* Link columns */}
            <div className="lg:col-span-7 grid sm:grid-cols-3 gap-10">
              <div>
                <Eyebrow tone="cream">Platform</Eyebrow>
                <ul className="mt-5 flex flex-col gap-3">
                  {footerNav.platform.map((l) => (
                    <li key={l.href}>
                      <Link
                        href={l.href}
                        className="text-sm text-cream/80 hover:text-cream transition"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <Eyebrow tone="cream">Company</Eyebrow>
                <ul className="mt-5 flex flex-col gap-3">
                  {footerNav.company.map((l) => (
                    <li key={l.href}>
                      <Link
                        href={l.href}
                        className="text-sm text-cream/80 hover:text-cream transition"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <Eyebrow tone="cream">Contact</Eyebrow>
                <ul className="mt-5 flex flex-col gap-3 text-sm text-cream/80">
                  <li className="flex items-start gap-2">
                    <Phone size={14} className="mt-1 shrink-0" />
                    <a href={`tel:${site.contact.phone}`} className="hover:text-cream">
                      {site.contact.phoneDisplay}
                    </a>
                  </li>
                  <li className="flex items-start gap-2">
                    <Mail size={14} className="mt-1 shrink-0" />
                    <a href={`mailto:${site.contact.email}`} className="hover:text-cream">
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

        <div className="border-t border-cream/10" />

        <Container size="xl" className="py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-cream/60">
            <p>
              &copy; {year} {site.legalName}. All rights reserved.
            </p>
            <ul className="flex items-center gap-6">
              {footerNav.legal.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-cream transition">
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
