'use client';

import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Reveal } from '@/components/ui/Reveal';
import type { ReactNode } from 'react';

type PageHeroProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
  /** Optional background image (path under /public, e.g. "/images/about-hero.jpg") */
  image?: string;
};

export function PageHero({
  eyebrow,
  title,
  description,
  children,
  image,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden">
      {/* Optional photographic backdrop */}
      {image && (
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <Image
            src={image}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-40"
          />
          {/* Stronger wash so headlines read cleanly */}
          <div className="absolute inset-0 bg-gradient-to-b from-cream/65 via-cream/45 to-cream/55" />
        </div>
      )}

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(50% 60% at 20% 20%, rgba(255,145,77,0.16) 0%, transparent 60%), radial-gradient(40% 50% at 80% 30%, rgba(211,70,129,0.14) 0%, transparent 60%)',
        }}
      />
      <Container size="xl" className="relative pt-16 pb-24 sm:pt-20 sm:pb-32">
        <div className="max-w-4xl flex flex-col gap-6">
          {eyebrow && (
            <Reveal>
              <Eyebrow>{eyebrow}</Eyebrow>
            </Reveal>
          )}
          <Reveal delay={0.05}>
            <h1 className="font-display text-display-lg text-plum">{title}</h1>
          </Reveal>
          {description && (
            <Reveal delay={0.1}>
              <p className="text-lg sm:text-xl text-slate leading-relaxed max-w-2xl">
                {description}
              </p>
            </Reveal>
          )}
          {children && <Reveal delay={0.15}>{children}</Reveal>}
        </div>
      </Container>
    </section>
  );
}
