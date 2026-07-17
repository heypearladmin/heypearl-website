'use client';

import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { howItWorks } from '@/lib/services';

export function HowItWorks() {
  return (
    <section className="relative py-28 sm:py-36 overflow-hidden">
      {/* Texture backdrop */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <Image
          src="/images/textures/paper.webp"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-cream/55 via-cream/35 to-cream/55" />
      </div>

      <Container size="xl" className="relative">
        <Reveal>
          <SectionHeading
            eyebrow="How It Works"
            title={
              <>
                A four phase build, then{' '}
                <span className="italic font-light text-magenta">compound forever.</span>
              </>
            }
            description="The architecture is the unlock. Once it is set, every month adds compounding authority instead of starting over."
            align="center"
            className="mx-auto"
          />
        </Reveal>

        <div className="mt-20 relative">
          <div
            aria-hidden
            className="hidden lg:block absolute top-12 left-[12%] right-[12%] h-px bg-gradient-to-r from-magenta/0 via-magenta/40 to-magenta/0"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {howItWorks.map((step, i) => (
              <Reveal key={step.step} delay={i * 0.08}>
                <div className="relative h-full flex flex-col rounded-3xl bg-white border border-plum/5 p-8 shadow-soft hover:shadow-lift transition-all duration-500">
                  <div className="relative">
                    <div className="h-12 w-12 rounded-full bg-plum text-cream flex items-center justify-center font-display text-base">
                      {String(i + 1).padStart(2, '0')}
                    </div>
                  </div>
                  <div className="mt-6 text-[0.65rem] tracking-micro uppercase text-magenta">
                    {step.step}
                  </div>
                  <h3 className="mt-2 font-display text-xl text-plum">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm text-slate leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
