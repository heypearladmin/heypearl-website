'use client';

import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';

const platforms = [
  { name: 'Google AI Overviews', share: 'Featured answers' },
  { name: 'ChatGPT', share: 'Cited recommendations' },
  { name: 'Gemini', share: 'Conversational discovery' },
  { name: 'Perplexity', share: 'Sourced research' },
  { name: 'Local AI', share: 'Place-based answers' },
];

export function MarketShift() {
  return (
    <section className="relative py-28 sm:py-36">
      <Container size="xl">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-32 flex flex-col gap-8">
            <Reveal>
              <SectionHeading
                eyebrow="The Market Shift"
                title={
                  <>
                    SEO alone is no{' '}
                    <span className="italic font-light text-magenta">longer</span>{' '}
                    enough.
                  </>
                }
                description="Search has been quietly rebuilt around AI. Customers ask in full sentences and follow the answer they trust. The businesses winning right now are the ones AI cites. The ones losing are still fighting for blue links."
              />
            </Reveal>

            {/* Editorial accent image */}
            <Reveal delay={0.1}>
              <div className="relative aspect-[3/2] rounded-3xl overflow-hidden border border-plum/5 shadow-soft">
                <Image
                  src="/images/geo-platforms.jpg"
                  alt="AI search platforms abstract"
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-plum/30 via-transparent to-transparent"
                />
                <div className="absolute bottom-5 left-5 right-5 text-[0.65rem] tracking-micro uppercase text-cream">
                  AI search ecosystems
                </div>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7 flex flex-col gap-6">
            <Reveal delay={0.05}>
              <p className="text-lg text-slate leading-relaxed">
                Google AI Overviews now answer questions before users ever click. ChatGPT, Gemini, and Perplexity recommend businesses by name. Customers no longer browse a list. They ask a question, and the answer arrives with a single trusted brand attached.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="text-lg text-slate leading-relaxed">
                Without structured authority signals, your business is invisible to the systems that now make those decisions. Random tactics and outdated SEO will not solve this. What is needed is infrastructure.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-6 rounded-3xl border border-plum/10 bg-lavender overflow-hidden">
                {/* Editorial cover image */}
                <div className="relative aspect-[16/7]">
                  <Image
                    src="/images/geo-architecture.jpg"
                    alt="GEO entity architecture"
                    fill
                    sizes="(min-width: 1024px) 60vw, 100vw"
                    className="object-cover"
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-gradient-to-t from-lavender/85 via-lavender/30 to-transparent"
                  />
                </div>
                <div className="p-8 sm:p-10">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="h-2 w-2 rounded-full bg-magenta" />
                    <span className="text-[0.72rem] tracking-micro uppercase text-plum">
                      Introducing GEO
                    </span>
                  </div>
                  <h3 className="font-display text-display-sm text-plum mb-4">
                    Generative Engine Optimization.
                  </h3>
                  <p className="text-base text-slate leading-relaxed mb-6">
                    GEO is what comes after SEO. It is the practice of structuring your business as an authority that AI systems understand, trust, and cite. Schema, entities, editorial content, reputation signals, and the systems that hold them together.
                  </p>

                  <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
                    {platforms.map((p) => (
                      <li
                        key={p.name}
                        className="flex items-start justify-between border-b border-plum/10 pb-3 last:border-0"
                      >
                        <span className="text-sm font-medium text-plum">{p.name}</span>
                        <span className="text-xs text-slate">{p.share}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
