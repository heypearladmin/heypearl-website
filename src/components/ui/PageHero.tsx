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
  /** Optional background image (path under /public) */
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
    <section className="relative overflow-hidden" style={{ background: '#F8F5F0' }}>
      {/* Right-side editorial photo — same treatment as insights hero */}
      {image && (
        <div aria-hidden className="pointer-events-none absolute right-0 top-0 bottom-0 w-[45%] hidden lg:block">
          <Image
            src={image}
            alt=""
            fill
            priority
            sizes="45vw"
            className="object-cover object-center opacity-25"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to right, #F8F5F0 0%, rgba(248,245,240,0.85) 20%, rgba(248,245,240,0.35) 65%, rgba(248,245,240,0.05) 100%)',
            }}
          />
        </div>
      )}

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
