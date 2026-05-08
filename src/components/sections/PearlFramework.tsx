'use client';

import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { pearlPillars, pearlSummary } from '@/lib/framework';
import { cn } from '@/lib/utils';

type PearlFrameworkProps = {
  variant?: 'full' | 'compact';
  invert?: boolean;
  className?: string;
};

const ambientStrip = [
  {
    image: '/images/pearl-process.jpg',
    eyebrow: 'Process · Efficiency',
    caption: 'Map the motion, then sharpen it.',
  },
  {
    image: '/images/pearl-automation.jpg',
    eyebrow: 'Automation',
    caption: 'PearlOS handles the predictable.',
  },
  {
    image: '/images/pearl-leverage.jpg',
    eyebrow: 'Revenue · Leverage',
    caption: 'Visibility wired into a revenue path.',
  },
];

export function PearlFramework({
  variant = 'full',
  invert = false,
  className,
}: PearlFrameworkProps) {
  return (
    <section
      className={cn(
        'relative overflow-hidden',
        invert ? 'bg-plum text-cream' : 'bg-cream',
        variant === 'full' ? 'py-28 sm:py-36' : 'py-20',
        className,
      )}
    >
      {/* Subtle photographic backdrop on the full variant */}
      {variant === 'full' && (
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <Image
            src="/images/pearl-framework-hero.jpg"
            alt=""
            fill
            sizes="100vw"
            className={cn(
              'object-cover',
              invert ? 'opacity-30' : 'opacity-40',
            )}
          />
          <div
            className={cn(
              'absolute inset-0',
              invert
                ? 'bg-gradient-to-b from-plum/75 via-plum/65 to-plum/80'
                : 'bg-gradient-to-b from-cream/65 via-cream/45 to-cream/60',
            )}
          />
        </div>
      )}

      {/* Soft aurora */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          background: invert
            ? 'radial-gradient(50% 50% at 100% 0%, rgba(255,145,77,0.18) 0%, transparent 60%), radial-gradient(40% 60% at 0% 100%, rgba(211,70,129,0.18) 0%, transparent 60%)'
            : 'radial-gradient(50% 50% at 80% 10%, rgba(255,145,77,0.12) 0%, transparent 60%), radial-gradient(40% 50% at 10% 100%, rgba(211,70,129,0.10) 0%, transparent 60%)',
        }}
      />

      <Container size="xl" className="relative">
        {variant === 'full' ? (
          <Reveal>
            <SectionHeading
              eyebrow="The P.E.A.R.L. Framework"
              title={
                <>
                  Process · Efficiency · Automation · Revenue ·{' '}
                  <span className="italic font-light text-magenta">Leverage.</span>
                </>
              }
              description={pearlSummary}
              invert={invert}
              align="center"
              className="mx-auto"
            />
          </Reveal>
        ) : (
          <div className="flex flex-col gap-3 max-w-3xl">
            <Eyebrow tone={invert ? 'cream' : 'plum'}>The P.E.A.R.L. Framework</Eyebrow>
            <h2
              className={cn(
                'font-display text-display-sm',
                invert ? 'text-cream' : 'text-plum',
              )}
            >
              Process · Efficiency · Automation · Revenue · Leverage.
            </h2>
            <p
              className={cn(
                'text-base leading-relaxed',
                invert ? 'text-cream/75' : 'text-slate',
              )}
            >
              {pearlSummary}
            </p>
          </div>
        )}

        {/* Pillar grid */}
        <div
          className={cn(
            'mt-16 grid gap-4 sm:gap-5',
            'grid-cols-1 sm:grid-cols-2 lg:grid-cols-5',
          )}
        >
          {pearlPillars.map((p, i) => (
            <Reveal key={p.letter} delay={i * 0.06}>
              <article
                className={cn(
                  'group relative h-full flex flex-col gap-5 rounded-3xl p-7 sm:p-8 transition-all duration-500 border',
                  invert
                    ? 'bg-cream/[0.03] border-cream/10 hover:bg-cream/[0.06]'
                    : 'bg-white border-plum/5 shadow-soft hover:shadow-lift',
                )}
              >
                {/* Letter mark */}
                <div className="flex items-baseline gap-2">
                  <span
                    className={cn(
                      'font-display text-6xl leading-none',
                      invert ? 'text-cream' : 'text-plum',
                    )}
                  >
                    {p.letter}
                  </span>
                  <span
                    className={cn(
                      'h-2 w-2 rounded-full',
                      i % 2 === 0 ? 'bg-magenta' : 'bg-orange',
                    )}
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <div
                    className={cn(
                      'text-[0.65rem] tracking-micro uppercase',
                      invert ? 'text-cream/60' : 'text-magenta',
                    )}
                  >
                    Pillar 0{i + 1}
                  </div>
                  <h3
                    className={cn(
                      'font-display text-2xl',
                      invert ? 'text-cream' : 'text-plum',
                    )}
                  >
                    {p.word}
                  </h3>
                  <p
                    className={cn(
                      'text-sm italic',
                      invert ? 'text-orange' : 'text-magenta',
                    )}
                  >
                    {p.tagline}
                  </p>
                </div>

                <p
                  className={cn(
                    'text-sm leading-relaxed mt-auto',
                    invert ? 'text-cream/75' : 'text-slate',
                  )}
                >
                  {p.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Editorial photographic strip — three ambient scenes */}
        {variant === 'full' && (
          <div className="mt-16 grid md:grid-cols-3 gap-5">
            {ambientStrip.map((a, i) => (
              <Reveal key={a.image} delay={i * 0.08}>
                <figure
                  className={cn(
                    'group relative aspect-[4/3] rounded-3xl overflow-hidden border',
                    invert ? 'border-cream/10' : 'border-plum/5 shadow-soft',
                  )}
                >
                  <Image
                    src={a.image}
                    alt={a.caption}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                  <div
                    aria-hidden
                    className={cn(
                      'absolute inset-0',
                      invert
                        ? 'bg-gradient-to-t from-plum/70 via-plum/20 to-transparent'
                        : 'bg-gradient-to-t from-plum/45 via-plum/10 to-transparent',
                    )}
                  />
                  <figcaption className="absolute inset-x-5 bottom-5 flex flex-col gap-1">
                    <div className="text-[0.65rem] tracking-micro uppercase text-cream/85">
                      {a.eyebrow}
                    </div>
                    <div className="font-display text-lg text-cream">
                      {a.caption}
                    </div>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        )}

        {/* Closing line */}
        {variant === 'full' && (
          <Reveal delay={0.2}>
            <p
              className={cn(
                'mt-14 text-center max-w-2xl mx-auto text-base sm:text-lg leading-relaxed',
                invert ? 'text-cream/70' : 'text-slate',
              )}
            >
              The framework is the foundation. HeyPearl is the system that operationalizes it across every layer of the business.
            </p>
          </Reveal>
        )}
      </Container>
    </section>
  );
}
