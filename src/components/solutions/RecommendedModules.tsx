import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';

export interface SolutionModule {
  label: string;
  href: string;
  tagline: string;
  reason: string;
}

interface RecommendedModulesProps {
  modules: SolutionModule[];
  eyebrow?: string;
  headline?: React.ReactNode;
}

export function RecommendedModules({
  modules,
  eyebrow = 'Recommended Platform Modules',
  headline,
}: RecommendedModulesProps) {
  const navy = '#1E3A66';
  const body = '#334155';
  const secondary = '#64748B';
  const magenta = '#C2185B';
  const border = '#E7E3DD';

  return (
    <section className="py-28 bg-white">
      <Container size="lg">
        <div className="mb-14 max-w-2xl">
          <div className="flex items-center gap-3 mb-5">
            <span className="inline-block h-px w-8" style={{ background: border }} aria-hidden />
            <span style={{ fontSize: '0.67rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: magenta }}>
              {eyebrow}
            </span>
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-playfair), Georgia, serif',
              fontSize: 'clamp(1.9rem, 4vw, 3rem)',
              fontWeight: 700,
              color: navy,
              lineHeight: 1.08,
              letterSpacing: '-0.022em',
            }}
          >
            {headline ?? (
              <>The platform modules<br />
              <span style={{ color: magenta, fontStyle: 'italic' }}>that matter most for you.</span></>
            )}
          </h2>
          <p className="mt-5" style={{ fontSize: '0.9rem', color: secondary, lineHeight: 1.7 }}>
            Every HeyPearl engagement runs through PearlOS. These modules are prioritized based on where this audience typically has the largest AI visibility gaps.
          </p>
        </div>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 gap-px"
          style={{ border: `1px solid ${border}`, borderRadius: '1rem', overflow: 'hidden' }}
        >
          {modules.map((mod) => (
            <Link
              key={mod.href}
              href={mod.href}
              className="group block p-7 lg:p-8 transition-colors duration-200 hover:bg-[#F8F5F0]"
              style={{ background: '#FFFFFF' }}
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <div style={{ fontSize: '0.62rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: secondary, marginBottom: '0.25rem' }}>
                    {mod.tagline}
                  </div>
                  <h3
                    className="group-hover:text-[#C2185B] transition-colors duration-200"
                    style={{ fontSize: '1rem', fontWeight: 700, color: navy, letterSpacing: '-0.01em' }}
                  >
                    {mod.label}
                  </h3>
                </div>
                <ArrowUpRight
                  size={13}
                  className="opacity-0 group-hover:opacity-60 transition-opacity shrink-0 mt-1"
                  style={{ color: magenta }}
                />
              </div>
              <div className="h-px mb-4" style={{ background: border }} />
              <p style={{ fontSize: '0.845rem', color: body, lineHeight: 1.72 }}>
                {mod.reason}
              </p>
            </Link>
          ))}
        </div>

        <div
          className="mt-5 px-6 py-4 rounded-xl flex items-center gap-4"
          style={{ background: '#F8F5F0', border: `1px solid ${border}` }}
        >
          <span style={{ fontSize: '0.82rem', color: secondary, lineHeight: 1.5 }}>
            All modules run through{' '}
            <Link href="/platform/pearlos" className="font-semibold hover:opacity-80" style={{ color: magenta }}>
              PearlOS
            </Link>
            {' '}— the operating system that connects every signal and executes the P.E.A.R.L. framework in sequence.
          </span>
        </div>
      </Container>
    </section>
  );
}
