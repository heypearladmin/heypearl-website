import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, Instagram, Facebook, Youtube, ArrowUpRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { PageHero } from '@/components/ui/PageHero';
import { Reveal } from '@/components/ui/Reveal';
import { LinkButton } from '@/components/ui/Button';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { ContactForm } from '@/components/forms/ContactForm';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Contact — Talk to HeyPearl',
  description:
    'Schedule a strategy call with Misti or contact the HeyPearl team. Authority infrastructure for the AI search era.',
  openGraph: { images: ['/images/og/og-default.webp'] },
  twitter: { images: ['/images/og/og-default.webp'] },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Two ways to talk to{' '}
            <span className="italic font-light text-magenta">HeyPearl.</span>
          </>
        }
        description="Choose the front door that fits. Strategy calls are founder-led. The contact channel is for support, partnerships, and operational questions."
        image=""
      />

      <section className="pb-24">
        <Container size="xl">
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Strategy Call card */}
            <Reveal>
              <article
                id="strategy"
                className="relative h-full rounded-3xl bg-plum text-cream p-10 sm:p-12 shadow-glow overflow-hidden"
              >
                {/* Photographic backdrop */}
                <div aria-hidden className="pointer-events-none absolute inset-0">
                  <Image
                    src="/images/contact-strategy.jpg"
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover opacity-55"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-plum/90 via-plum/65 to-plum/35" />
                </div>
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 opacity-50"
                  style={{
                    background:
                      'radial-gradient(50% 50% at 100% 0%, rgba(255,145,77,0.18) 0%, transparent 60%), radial-gradient(40% 60% at 0% 100%, rgba(211,70,129,0.18) 0%, transparent 60%)',
                  }}
                />
                <div className="relative">
                  <Eyebrow tone="cream">Founder-led</Eyebrow>
                  <h2 className="mt-4 font-display text-3xl sm:text-4xl">
                    Schedule a Strategy Call with Misti
                  </h2>
                  <p className="mt-5 text-cream/80 leading-relaxed">
                    A 30 minute conversation with the founder. We map your category, current visibility, and what an authority system would look like for your business.
                  </p>
                  <ul className="mt-8 flex flex-col gap-3 text-sm text-cream/85">
                    <li>Best for operators evaluating HeyPearl seriously.</li>
                    <li>Includes a quick GEO read on your current visibility.</li>
                    <li>You leave with a real plan, not a sales pitch.</li>
                  </ul>
                  <div className="mt-10">
                    <LinkButton
                      href={site.strategyCallUrl}
                      external
                      variant="inverse"
                      size="lg"
                      withArrow
                    >
                      Book a strategy call
                    </LinkButton>
                  </div>
                </div>
              </article>
            </Reveal>

            {/* Operational contact card */}
            <Reveal delay={0.08}>
              <article className="h-full rounded-3xl bg-white border border-plum/5 shadow-soft p-10 sm:p-12">
                <Eyebrow>Operational</Eyebrow>
                <h2 className="mt-4 font-display text-3xl sm:text-4xl text-plum">
                  Contact HeyPearl
                </h2>
                <p className="mt-5 text-slate leading-relaxed">
                  Support, partnerships, press, and operational questions. We answer fast.
                </p>

                <div className="mt-10 flex flex-col gap-5">
                  <a
                    href={`mailto:${site.contact.email}`}
                    className="group flex items-center justify-between gap-4 rounded-2xl border border-plum/10 px-5 py-4 hover:bg-lavender transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <Mail size={18} className="text-magenta" />
                      <div>
                        <div className="text-xs tracking-micro uppercase text-slate">
                          Email
                        </div>
                        <div className="text-plum font-medium">
                          {site.contact.email}
                        </div>
                      </div>
                    </div>
                    <ArrowUpRight
                      size={16}
                      className="text-plum/50 group-hover:text-plum transition"
                    />
                  </a>

                  <a
                    href={`tel:${site.contact.phone}`}
                    className="group flex items-center justify-between gap-4 rounded-2xl border border-plum/10 px-5 py-4 hover:bg-lavender transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <Phone size={18} className="text-magenta" />
                      <div>
                        <div className="text-xs tracking-micro uppercase text-slate">
                          Phone
                        </div>
                        <div className="text-plum font-medium">
                          {site.contact.phoneDisplay}
                        </div>
                      </div>
                    </div>
                    <ArrowUpRight
                      size={16}
                      className="text-plum/50 group-hover:text-plum transition"
                    />
                  </a>

                  <div className="flex items-start gap-3 rounded-2xl border border-plum/10 px-5 py-4">
                    <MapPin size={18} className="mt-0.5 text-magenta" />
                    <div>
                      <div className="text-xs tracking-micro uppercase text-slate">
                        Office
                      </div>
                      <div className="text-plum font-medium">
                        {site.contact.address.line1}
                      </div>
                      <div className="text-sm text-slate">
                        {site.contact.address.city},{' '}
                        {site.contact.address.region}{' '}
                        {site.contact.address.postal}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-10">
                  <Eyebrow>Follow HeyPearl</Eyebrow>
                  <div className="mt-4 flex items-center gap-3">
                    <Link
                      href={site.social.instagram}
                      target="_blank"
                      className="h-10 w-10 inline-flex items-center justify-center rounded-full border border-plum/15 text-plum hover:bg-lavender transition"
                      aria-label="Instagram"
                    >
                      <Instagram size={16} />
                    </Link>
                    <Link
                      href={site.social.facebook}
                      target="_blank"
                      className="h-10 w-10 inline-flex items-center justify-center rounded-full border border-plum/15 text-plum hover:bg-lavender transition"
                      aria-label="Facebook"
                    >
                      <Facebook size={16} />
                    </Link>
                    <Link
                      href={site.social.youtube}
                      target="_blank"
                      className="h-10 w-10 inline-flex items-center justify-center rounded-full border border-plum/15 text-plum hover:bg-lavender transition"
                      aria-label="YouTube"
                    >
                      <Youtube size={16} />
                    </Link>
                  </div>
                </div>
              </article>
            </Reveal>
          </div>

          {/* A2P 10DLC compliant contact form */}
          <Reveal delay={0.08}>
            <div id="form" className="mt-10">
              <ContactForm />
            </div>
          </Reveal>

          {/* Founder follow strip */}
          <Reveal delay={0.1}>
            <div className="mt-10 rounded-3xl bg-lavender border border-plum/10 p-8 sm:p-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
              <div>
                <Eyebrow>Founder</Eyebrow>
                <h3 className="mt-2 font-display text-2xl text-plum">
                  Follow Misti Bruton
                </h3>
                <p className="mt-2 text-slate text-sm max-w-xl">
                  For founders, operators, and brand builders who want to follow Misti directly.
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Link
                  href={site.founder.instagram}
                  target="_blank"
                  className="h-10 w-10 inline-flex items-center justify-center rounded-full bg-white border border-plum/15 text-plum hover:bg-blush transition"
                  aria-label="Misti on Instagram"
                >
                  <Instagram size={16} />
                </Link>
                <Link
                  href={site.founder.facebook}
                  target="_blank"
                  className="h-10 w-10 inline-flex items-center justify-center rounded-full bg-white border border-plum/15 text-plum hover:bg-blush transition"
                  aria-label="Misti on Facebook"
                >
                  <Facebook size={16} />
                </Link>
                <Link
                  href={site.founder.youtube}
                  target="_blank"
                  className="h-10 w-10 inline-flex items-center justify-center rounded-full bg-white border border-plum/15 text-plum hover:bg-blush transition"
                  aria-label="Misti on YouTube"
                >
                  <Youtube size={16} />
                </Link>
                <LinkButton
                  href={site.founder.site}
                  external
                  variant="secondary"
                  size="sm"
                  withArrow
                >
                  mistibruton.com
                </LinkButton>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
