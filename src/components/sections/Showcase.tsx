'use client';

import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';

const metrics = [
  { value: '3.4x', label: 'AI citation lift in 90 days' },
  { value: '212%', label: 'Local discovery growth' },
  { value: '4.92', label: 'Average reputation rating' },
  { value: '142', label: 'Authority pages indexed' },
];

const showcase = [
  {
    name: 'Editorial Authority Pages',
    category: 'Authority Websites',
    description:
      'Cinematic, indexable, and built around the questions AI asks on behalf of your customers.',
    image: '/images/showcase-editorial.jpg',
  },
  {
    name: 'AI Visibility Dashboard',
    category: 'GEO Authority System',
    description:
      'Track how often your brand appears across AI Overviews, ChatGPT, Gemini, and Perplexity.',
    image: '/images/showcase-visibility.jpg',
  },
  {
    name: 'PearlOS Lead Workflows',
    category: 'Automation',
    description:
      'CRM, nurture, AI inbox, and booking systems that convert visibility into closed business.',
    image: '/images/showcase-pearlos.jpg',
  },
];

const testimonial = {
  quote:
    'Within four months we were the local name AI was recommending. HeyPearl is the first system that actually treats search like infrastructure.',
  attribution: 'Founder, multi-location service brand',
};

export function Showcase() {
  return (
    <section className="py-28 sm:py-36">
      <Container size="xl">
        <Reveal>
          <SectionHeading
            eyebrow="Results & Showcase"
            title={
              <>
                What an authority system{' '}
                <span className="italic font-light text-magenta">looks like.</span>
              </>
            }
            description="A glimpse at what businesses see once HeyPearl infrastructure is installed and running."
          />
        </Reveal>

        {/* Metric strip */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-px rounded-3xl overflow-hidden bg-plum/10 border border-plum/10">
          {metrics.map((m, i) => (
            <Reveal key={m.label} delay={i * 0.05}>
              <div className="bg-cream p-8 h-full">
                <div className="font-display text-4xl sm:text-5xl text-plum">
                  {m.value}
                </div>
                <div className="mt-2 text-sm text-slate">{m.label}</div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Showcase cards with real photography */}
        <div className="mt-12 grid lg:grid-cols-3 gap-6">
          {showcase.map((s, i) => (
            <Reveal key={s.name} delay={i * 0.08}>
              <article className="group h-full flex flex-col rounded-3xl bg-white border border-plum/5 shadow-soft overflow-hidden hover:shadow-lift transition-all duration-500">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={s.image}
                    alt={s.name}
                    fill
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-gradient-to-t from-plum/40 via-plum/10 to-transparent"
                  />
                  <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between">
                    <div className="text-[0.65rem] tracking-micro uppercase text-cream">
                      {s.category}
                    </div>
                    <div className="h-8 w-8 rounded-full bg-cream/20 backdrop-blur-sm border border-cream/30" />
                  </div>
                </div>
                <div className="p-7 flex flex-col gap-3 flex-1">
                  <h3 className="font-display text-xl text-plum">{s.name}</h3>
                  <p className="text-sm text-slate leading-relaxed">
                    {s.description}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Editorial testimonial */}
        <Reveal delay={0.1}>
          <div className="mt-16 rounded-3xl bg-lavender border border-plum/10 overflow-hidden grid lg:grid-cols-12 gap-0 items-stretch">
            <div className="lg:col-span-3 relative aspect-[4/3] lg:aspect-auto min-h-[260px]">
              <Image
                src="/images/testimonial-silhouette.jpg"
                alt="Anonymous founder portrait"
                fill
                sizes="(min-width: 1024px) 25vw, 100vw"
                className="object-cover"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-r from-transparent via-lavender/0 to-lavender lg:to-lavender/95"
              />
            </div>
            <div className="lg:col-span-9 p-10 sm:p-14 flex flex-col justify-center">
              <div className="font-display text-2xl sm:text-3xl text-plum leading-snug">
                <span className="text-magenta">&ldquo;</span>
                {testimonial.quote}
                <span className="text-magenta">&rdquo;</span>
              </div>
              <div className="mt-5 flex flex-wrap items-end gap-x-8 gap-y-3">
                <div className="text-sm text-slate">{testimonial.attribution}</div>
                <div className="ml-auto flex flex-col gap-0">
                  <div className="text-[0.65rem] tracking-micro uppercase text-magenta">
                    Field Result
                  </div>
                  <div className="font-display text-2xl text-plum">
                    90 days to first AI citation
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
