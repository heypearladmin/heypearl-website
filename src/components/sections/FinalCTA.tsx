'use client';

import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { LinkButton } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Reveal';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { site } from '@/lib/site';

export function FinalCTA() {
  return (
    <section className="relative py-28 sm:py-36 overflow-hidden">
      {/* Soft photographic backdrop */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <Image
          src="/images/footer-aurora.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-cream/55 via-cream/35 to-cream/55" />
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(60% 60% at 30% 20%, rgba(255,145,77,0.18) 0%, transparent 60%), radial-gradient(50% 50% at 80% 30%, rgba(211,70,129,0.18) 0%, transparent 60%), radial-gradient(60% 60% at 60% 90%, rgba(14,14,14,0.08) 0%, transparent 60%)',
        }}
      />
      <Container size="lg" className="relative">
        <Reveal>
          <div className="flex flex-col items-center text-center gap-8">
            <Eyebrow>Software with a soul</Eyebrow>
            <h2 className="font-display text-display-lg text-plum max-w-3xl">
              Become the trusted name AI{' '}
              <span className="italic font-light text-magenta">recommends.</span>
            </h2>
            <p className="text-lg text-slate max-w-xl leading-relaxed">
              Every quarter the AI search era pulls further away from old playbooks. The brands that build authority infrastructure now will be the ones AI surfaces for years.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mt-2">
              <LinkButton
                href={site.strategyCallUrl}
                external
                variant="primary"
                size="lg"
                withArrow
              >
                Schedule a Strategy Call with Misti
              </LinkButton>
              <LinkButton href="/contact" variant="secondary" size="lg">
                Contact HeyPearl
              </LinkButton>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
