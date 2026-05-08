'use client';

import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { whyHeyPearl } from '@/lib/services';
import { Check, X } from 'lucide-react';

export function WhyHeyPearl() {
  return (
    <section className="relative py-28 sm:py-36 bg-navy text-cream overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          background:
            'radial-gradient(50% 50% at 0% 100%, rgba(255,145,77,0.18) 0%, transparent 60%), radial-gradient(40% 40% at 100% 0%, rgba(211,70,129,0.18) 0%, transparent 60%)',
        }}
      />
      <Container size="xl" className="relative">
        <Reveal>
          <SectionHeading
            eyebrow="Why HeyPearl"
            title={
              <>
                We do not run campaigns.{' '}
                <span className="italic font-light text-orange">
                  We build infrastructure.
                </span>
              </>
            }
            description="Most agencies sell a stack of tactics. HeyPearl builds an authority ecosystem your business owns and compounds on."
            invert
            align="center"
            className="mx-auto"
          />
        </Reveal>

        <div className="mt-20 grid lg:grid-cols-2 gap-6">
          <Reveal>
            <div className="rounded-3xl border border-cream/10 bg-cream/[0.03] p-8 sm:p-10">
              <div className="flex items-center gap-3 mb-6">
                <span className="h-2 w-2 rounded-full bg-cream/40" />
                <span className="text-[0.72rem] tracking-micro uppercase text-cream/60">
                  Most Agencies
                </span>
              </div>
              <ul className="flex flex-col gap-4">
                {whyHeyPearl.agencies.map((a) => (
                  <li key={a} className="flex items-start gap-3 text-cream/70">
                    <X size={18} className="mt-1 shrink-0 text-cream/40" />
                    <span className="text-base leading-relaxed">{a}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-3xl border border-cream/15 bg-magenta-gradient p-8 sm:p-10 shadow-glow">
              <div className="flex items-center gap-3 mb-6">
                <span className="h-2 w-2 rounded-full bg-cream" />
                <span className="text-[0.72rem] tracking-micro uppercase text-cream">
                  HeyPearl
                </span>
              </div>
              <ul className="flex flex-col gap-4">
                {whyHeyPearl.heypearl.map((a) => (
                  <li key={a} className="flex items-start gap-3 text-cream">
                    <Check size={18} className="mt-1 shrink-0 text-cream" />
                    <span className="text-base leading-relaxed">{a}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
