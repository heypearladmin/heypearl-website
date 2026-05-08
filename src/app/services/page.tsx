import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { PageHero } from '@/components/ui/PageHero';
import { Reveal } from '@/components/ui/Reveal';
import { LinkButton } from '@/components/ui/Button';
import { services } from '@/lib/services';
import { site } from '@/lib/site';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { WhyHeyPearl } from '@/components/sections/WhyHeyPearl';
import { FinalCTA } from '@/components/sections/FinalCTA';

export const metadata: Metadata = {
  title: 'Services — Authority Infrastructure for the AI Search Era',
  description:
    'GEO, content infrastructure, reputation systems, automation, and authority websites. The five layers of HeyPearl.',
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title={
          <>
            Five layers of authority,{' '}
            <span className="italic font-light text-magenta">
              one operating standard.
            </span>
          </>
        }
        description="HeyPearl is built as a system. Each service stands on its own. Together they form the authority infrastructure modern businesses need."
        image="/images/pearl-framework-hero.jpg"
      >
        <div className="flex flex-col sm:flex-row gap-3">
          <LinkButton
            href={site.strategyCallUrl}
            external
            variant="primary"
            size="lg"
            withArrow
          >
            Schedule a Strategy Call
          </LinkButton>
          <LinkButton href="/pricing" variant="secondary" size="lg">
            See pricing
          </LinkButton>
        </div>
      </PageHero>

      <section className="py-16 sm:py-20">
        <Container size="xl">
          <div className="flex flex-col gap-6">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={i * 0.05}>
                <Link
                  href={s.href}
                  className="group block rounded-3xl bg-white border border-plum/5 shadow-soft hover:shadow-lift transition-all duration-500"
                >
                  <div className="grid lg:grid-cols-12 gap-8 p-8 sm:p-10 items-start">
                    <div className="lg:col-span-2 flex items-center gap-3">
                      <span className="font-display text-4xl text-magenta">
                        {s.number}
                      </span>
                    </div>
                    <div className="lg:col-span-6">
                      <h3 className="font-display text-2xl sm:text-3xl text-plum">
                        {s.name}
                      </h3>
                      <p className="mt-1 text-sm italic text-magenta">
                        {s.tagline}
                      </p>
                      <p className="mt-4 text-slate leading-relaxed">
                        {s.description}
                      </p>
                    </div>
                    <div className="lg:col-span-4 flex flex-col gap-2">
                      {s.bullets.map((b) => (
                        <div
                          key={b}
                          className="flex items-start gap-2 text-sm text-slate"
                        >
                          <span className="mt-2 h-1 w-1 rounded-full bg-magenta shrink-0" />
                          {b}
                        </div>
                      ))}
                      <div className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-plum">
                        Explore
                        <ArrowUpRight
                          size={14}
                          className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        />
                      </div>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <HowItWorks />
      <WhyHeyPearl />
      <FinalCTA />
    </>
  );
}
