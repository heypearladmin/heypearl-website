'use client';

import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { LinkButton } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Reveal';
import { site } from '@/lib/site';

export function Founder() {
  return (
    <section className="relative py-28 sm:py-36 bg-cream overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          background:
            'radial-gradient(40% 50% at 80% 30%, rgba(254,208,209,0.45) 0%, transparent 60%)',
        }}
      />

      <Container size="xl" className="relative">
        {/* Editorial workspace band */}
        <Reveal>
          <div className="mb-16 relative aspect-[16/9] w-full rounded-[2rem] overflow-hidden border border-plum/5 shadow-soft">
            <Image
              src="/images/misti-editorial.jpg"
              alt="Misti Bruton in her studio"
              fill
              sizes="(min-width: 1024px) 80vw, 100vw"
              className="object-cover object-center"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-t from-plum/40 via-plum/10 to-transparent"
            />
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
              <div className="text-[0.65rem] tracking-micro uppercase text-cream">
                In studio · Austin, Texas
              </div>
              <div className="text-[0.65rem] tracking-micro uppercase text-cream/85">
                HeyPearl.io
              </div>
            </div>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Portrait */}
          <Reveal className="lg:col-span-5">
            <div className="relative">
              <div className="absolute -inset-4 rounded-[2rem] bg-magenta-gradient opacity-20 blur-2xl" />
              <div className="relative aspect-[4/5] w-full max-w-md mx-auto rounded-[2rem] overflow-hidden bg-blush/40 border border-plum/5 shadow-lift">
                {/*
                  Replace with the headshot at /public/images/misti-headshot.jpg.
                  Image component handles next/image optimization on Vercel.
                */}
                <Image
                  src={site.founder.photo}
                  alt={`${site.founder.name}, ${site.founder.role} of HeyPearl`}
                  fill
                  className="object-cover object-top"
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  priority={false}
                />
                {/* Soft overlay for editorial mood, very light */}
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-plum/15 via-transparent to-transparent"
                />
                <div className="absolute left-5 bottom-5 right-5 flex items-end justify-between">
                  <div>
                    <div className="text-[0.65rem] tracking-micro uppercase text-cream">
                      Founder
                    </div>
                    <div className="font-display text-xl text-cream">
                      {site.founder.name}
                    </div>
                  </div>
                  <div className="text-[0.65rem] tracking-micro uppercase text-cream/80">
                    HeyPearl.io
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Editorial column */}
          <Reveal delay={0.1} className="lg:col-span-7">
            <Eyebrow>Founder Note</Eyebrow>
            <h2 className="mt-4 font-display text-display-md text-plum">
              Built by an operator who has{' '}
              <span className="italic font-light text-magenta">
                run the playbook.
              </span>
            </h2>
            <p className="mt-6 text-lg text-slate leading-relaxed">
              HeyPearl is led by Misti Bruton, a founder who has scaled brokerages, brands, and operations across rapidly changing markets. The shift to AI search is not theoretical for her. It is the next chapter of work she has spent her career preparing for.
            </p>
            <p className="mt-4 text-lg text-slate leading-relaxed">
              Every system inside HeyPearl was designed for the operators she would want as clients. Modern, sophisticated, and serious about long term authority. No hype, no shortcuts, no abandoned dashboards.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <LinkButton
                href={site.strategyCallUrl}
                external
                variant="primary"
                size="lg"
                withArrow
              >
                Schedule a Strategy Call with Misti
              </LinkButton>
              <LinkButton href="/about" variant="secondary" size="lg">
                Read the philosophy
              </LinkButton>
            </div>

            <div className="mt-10 pt-8 border-t border-plum/10 grid sm:grid-cols-3 gap-6">
              <div>
                <div className="text-[0.65rem] tracking-micro uppercase text-magenta">
                  Operator-led
                </div>
                <div className="mt-1 text-sm text-plum">
                  Brokerage and brand experience
                </div>
              </div>
              <div>
                <div className="text-[0.65rem] tracking-micro uppercase text-magenta">
                  Systems-first
                </div>
                <div className="mt-1 text-sm text-plum">
                  PearlOS infrastructure
                </div>
              </div>
              <div>
                <div className="text-[0.65rem] tracking-micro uppercase text-magenta">
                  Long-term
                </div>
                <div className="mt-1 text-sm text-plum">
                  Built to compound for years
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
