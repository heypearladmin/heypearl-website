'use client';

import Image from 'next/image';
import Link from 'next/link';
import { HeroDashboardMockup } from '@/components/ui/HeroDashboardMockup';
import { ArrowRight } from 'lucide-react';
import { useRef, useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { site } from '@/lib/site';

export function HeroDeclaration() {
  const sectionRef = useRef<HTMLElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  const springConfig = { stiffness: 60, damping: 20, mass: 0.8 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const cardX = useTransform(smoothX, [-1, 1], [14, -14]);
  const cardY = useTransform(smoothY, [-1, 1], [8, -8]);

  const spotX = useTransform(smoothX, [-1, 1], ['35%', '65%']);
  const spotY = useTransform(smoothY, [-1, 1], ['25%', '75%']);

  function handleMouseMove(e: React.MouseEvent<HTMLElement>) {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set(((e.clientX - rect.left) / rect.width) * 2 - 1);
    mouseY.set(((e.clientY - rect.top) / rect.height) * 2 - 1);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative -mt-24 sm:-mt-28 min-h-screen flex flex-col justify-center overflow-hidden"
      style={{ background: '#FFFFFF' }}
      aria-label="Hero"
    >
      {/* Hero background image */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <Image src="/images/new-hero-images/hero-home.jpg" alt="" fill priority sizes="100vw" className="object-cover object-center opacity-30" />
      </div>

      {/* Subtle dot grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: 'radial-gradient(rgba(30,58,102,0.07) 1px, transparent 1px)',
          backgroundSize: '36px 36px',
        }}
      />

      {/* Cream fade — bottom right */}
      <div aria-hidden className="pointer-events-none absolute inset-0"
        style={{ background: 'radial-gradient(ellipse 70% 70% at 100% 100%, #F8F5F0 0%, transparent 60%)' }} />

      {/* Cursor spotlight — magenta tint */}
      {mounted && (
        <motion.div
          aria-hidden
          className="pointer-events-none absolute hidden lg:block"
          style={{
            width: 600,
            height: 600,
            borderRadius: '50%',
            left: spotX,
            top: spotY,
            x: '-50%',
            y: '-50%',
            background: 'radial-gradient(circle, rgba(194,24,91,0.05) 0%, transparent 65%)',
          }}
        />
      )}

      {/* Hero dashboard card + label */}
      {mounted && (
        <motion.div
          style={{ x: cardX, y: cardY }}
          className="pointer-events-none absolute right-8 xl:right-20 top-1/2 -translate-y-1/2 w-[42%] hidden lg:flex lg:flex-col lg:gap-3"
        >
          <div>
            <p style={{ fontSize: '0.8rem', fontWeight: 700, color: '#C2185B', marginBottom: '0.25rem' }}>
              Real data. Real visibility. Real results.
            </p>
            <p style={{ fontSize: '0.78rem', color: '#64748B', lineHeight: 1.5 }}>
              Track how AI engines see your brand, your entities, and your authority over time.
            </p>
          </div>
          <div style={{ borderRadius: '0.875rem', overflow: 'hidden', boxShadow: '0 32px 72px rgba(30,58,102,0.18), 0 4px 16px rgba(30,58,102,0.1)' }}>
            <HeroDashboardMockup />
          </div>
        </motion.div>
      )}

      {!mounted && (
        <div className="pointer-events-none absolute right-8 xl:right-20 top-1/2 -translate-y-1/2 w-[42%] hidden lg:flex lg:flex-col lg:gap-3">
          <div>
            <p style={{ fontSize: '0.8rem', fontWeight: 700, color: '#C2185B', marginBottom: '0.25rem' }}>
              Real data. Real visibility. Real results.
            </p>
            <p style={{ fontSize: '0.78rem', color: '#64748B', lineHeight: 1.5 }}>
              Track how AI engines see your brand, your entities, and your authority over time.
            </p>
          </div>
          <div style={{ borderRadius: '0.875rem', overflow: 'hidden', boxShadow: '0 32px 72px rgba(30,58,102,0.18)' }}>
            <HeroDashboardMockup />
          </div>
        </div>
      )}

      <Container size="lg" className="relative z-10 pt-40 sm:pt-48 pb-24">

        {/* Eyebrow */}
        <motion.div
          className="flex items-center gap-3 mb-8"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <span className="inline-block h-px w-8" style={{ background: '#E7E3DD' }} aria-hidden />
          <span style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#C2185B' }}>
            HeyPearl — The AI Authority Platform
          </span>
        </motion.div>

        {/* H1 */}
        <motion.h1
          className="max-w-[55%]"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
          style={{ fontFamily: 'var(--font-playfair), Georgia, serif', fontSize: 'clamp(3rem, 7.5vw, 6rem)', fontWeight: 700, color: '#1E3A66', lineHeight: 1.03, letterSpacing: '-0.03em' }}
        >
          Become the Authority<br />
          <span style={{ color: '#C2185B', fontStyle: 'italic', whiteSpace: 'nowrap' }}>
            AI Recommends.
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          className="mt-7 max-w-[38rem] leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          style={{ fontSize: '1.1rem', color: '#64748B' }}
        >
          We build the infrastructure that makes AI engines trust, cite, and recommend your business —
          entity architecture, authority pages, and reputation systems engineered for the AI search era.{' '}
          <span style={{ color: '#334155' }}>
            Powered by PearlOS and the P.E.A.R.L. framework.
          </span>
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="mt-10 flex flex-wrap items-center gap-4"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
        >
          <MagneticButton>
            <a
              href={site.strategyCallUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg px-7 py-3.5 text-sm font-semibold transition-colors duration-200 hover:bg-[#D62F73]"
              style={{ background: '#C2185B', color: '#FFFFFF' }}
            >
              Book a Strategy Call
              <ArrowRight size={15} />
            </a>
          </MagneticButton>
          <MagneticButton>
            <Link
              href="/platform"
              className="inline-flex items-center gap-2 rounded-lg px-7 py-3.5 text-sm font-medium transition-colors duration-200"
              style={{ border: '1px solid #E7E3DD', color: '#334155' }}
            >
              Explore the Platform
              <ArrowRight size={14} />
            </Link>
          </MagneticButton>
        </motion.div>

        {/* Proof strip */}
        <motion.div
          className="mt-16 flex flex-wrap gap-10"
          style={{ borderTop: '1px solid #E7E3DD', paddingTop: '2rem' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {[
            { num: '6',       label: 'AI engines tracked per client' },
            { num: '90-Day',  label: 'Authority visibility roadmap' },
            { num: '5-Layer', label: 'P.E.A.R.L. authority system' },
          ].map(({ num, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.55 + i * 0.08 }}
            >
              <div style={{ fontFamily: 'var(--font-playfair), Georgia, serif', fontSize: '1.55rem', fontWeight: 700, color: '#C2185B', lineHeight: 1, letterSpacing: '-0.02em' }}>
                {num}
              </div>
              <div style={{ fontSize: '0.7rem', color: '#94A3B8', marginTop: '0.35rem', letterSpacing: '0.03em' }}>
                {label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}

function MagneticButton({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 15 });
  const sy = useSpring(y, { stiffness: 200, damping: 15 });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    x.set((e.clientX - cx) * 0.35);
    y.set((e.clientY - cy) * 0.35);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      ref={ref}
      style={{ x: sx, y: sy, display: 'inline-block' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </motion.div>
  );
}
