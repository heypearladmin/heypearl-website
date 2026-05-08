'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { LinkButton } from '@/components/ui/Button';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { site } from '@/lib/site';

export function Hero() {
  const reduced = useReducedMotion();

  return (
    <section className="relative overflow-hidden">
      {/* Soft photographic ambient backdrop */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <Image
          src="/images/hero-ambient.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          placeholder="blur"
          blurDataURL="/images/placeholder-shimmer.png"
          className="object-cover opacity-45"
        />
        {/* Top + bottom feather + light overall wash for legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-cream/55 via-cream/30 to-cream/65" />
      </div>

      {/* Aurora glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(60% 60% at 25% 20%, rgba(255,145,77,0.20) 0%, transparent 60%), radial-gradient(50% 50% at 80% 30%, rgba(211,70,129,0.20) 0%, transparent 60%), radial-gradient(60% 60% at 60% 90%, rgba(14,14,14,0.08) 0%, transparent 60%)',
        }}
      />

      {/* Soft grid texture */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #0E0E0E 1px, transparent 1px), linear-gradient(to bottom, #0E0E0E 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)',
        }}
      />

      <Container size="xl" className="relative pt-16 pb-28 sm:pt-20 sm:pb-36">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-8 flex flex-col gap-8">
            <motion.div
              initial={reduced ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <Eyebrow>HeyPearl.io, maker of PearlOS</Eyebrow>
            </motion.div>

            <motion.h1
              initial={reduced ? false : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-display-xl text-plum"
            >
              Build authority before AI{' '}
              <span className="italic font-light text-magenta">chooses</span>{' '}
              your competitors.
            </motion.h1>

            <motion.p
              initial={reduced ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="text-lg sm:text-xl text-slate leading-relaxed max-w-2xl"
            >
              HeyPearl helps modern businesses dominate visibility through AI driven authority systems, content infrastructure, reputation growth, search optimization, and automated lead conversion.
            </motion.p>

            <motion.div
              initial={reduced ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col sm:flex-row gap-3"
            >
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
            </motion.div>

            {/* Trust strip */}
            <motion.div
              initial={reduced ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.5 }}
              className="mt-6 flex flex-wrap items-center gap-x-8 gap-y-3 text-xs text-slate/70 tracking-micro uppercase"
            >
              <span>Google Search</span>
              <span className="h-1 w-1 rounded-full bg-slate/40" />
              <span>AI Overviews</span>
              <span className="h-1 w-1 rounded-full bg-slate/40" />
              <span>ChatGPT</span>
              <span className="h-1 w-1 rounded-full bg-slate/40" />
              <span>Gemini</span>
              <span className="h-1 w-1 rounded-full bg-slate/40" />
              <span>Perplexity</span>
            </motion.div>
          </div>

          {/* Editorial visual stack: photo backdrop + Operating Index card */}
          <motion.div
            initial={reduced ? false : { opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-4 relative"
          >
            <HeroVisualStack />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

function HeroVisualStack() {
  return (
    <div className="relative aspect-[4/5] w-full max-w-md mx-auto">
      {/* Outer glow plate */}
      <div className="absolute -inset-6 rounded-[2rem] bg-magenta-gradient opacity-25 blur-2xl" />

      {/* Photographic backdrop card */}
      <div className="absolute -right-6 -top-4 w-3/4 aspect-[3/4] rounded-[1.75rem] overflow-hidden border border-plum/5 shadow-soft hidden sm:block">
        <Image
          src="/images/hero-side-ambient.jpg"
          alt=""
          fill
          sizes="(min-width: 1024px) 25vw, 50vw"
          className="object-cover"
        />
      </div>

      {/* Operating Index card — uses your generated mockup */}
      <div className="relative h-full w-full rounded-[2rem] bg-white shadow-lift border border-plum/5 overflow-hidden">
        <Image
          src="/images/hero-operating-card.png"
          alt="HeyPearl Operating Index dashboard"
          fill
          priority
          sizes="(min-width: 1024px) 33vw, 80vw"
          className="object-cover"
        />
      </div>

      {/* Live ribbon */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 inline-flex items-center gap-2 rounded-full bg-cream/95 backdrop-blur-sm border border-plum/10 px-4 py-1.5 shadow-soft">
        <span className="h-1.5 w-1.5 rounded-full bg-magenta animate-pulse" />
        <span className="text-[0.65rem] tracking-micro uppercase text-plum">
          Operating Index · Live
        </span>
      </div>
    </div>
  );
}
