'use client';

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { PricingCard } from '@/components/ui/PricingCard';
import { geoTiers } from '@/lib/pricing';

export function PricingPreview() {
  return (
    <section className="py-28 sm:py-36 bg-lavender">
      <Container size="xl">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 mb-16">
          <Reveal>
            <SectionHeading
              eyebrow="Pricing"
              title={
                <>
                  Authority systems,{' '}
                  <span className="italic font-light text-magenta">
                    not retainers.
                  </span>
                </>
              }
              description="Each tier is a complete authority infrastructure built to compound. Start where you are. Move up when the system is ready for it."
            />
          </Reveal>
          <Reveal delay={0.1}>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 text-sm font-medium text-plum link-underline"
            >
              See full pricing & HeyLocal
              <ArrowUpRight size={16} />
            </Link>
          </Reveal>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {geoTiers.map((tier, i) => (
            <Reveal key={tier.id} delay={i * 0.05}>
              <PricingCard tier={tier} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <p className="mt-10 text-center text-sm text-slate">
            Looking for local authority? Explore the{' '}
            <Link
              href="/services/heylocal"
              className="font-medium text-plum link-underline"
            >
              HeyLocal
            </Link>{' '}
            tiers, starting at $1,000 per month.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
