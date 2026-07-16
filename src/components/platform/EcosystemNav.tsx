import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';

const MODULES = [
  { label: 'Authority Pages', href: '/platform/authority-pages' },
  { label: 'Authority Score', href: '/platform/authority-score' },
  { label: 'Knowledge Graph', href: '/platform/knowledge-graph' },
  { label: 'AI Visibility', href: '/platform/ai-visibility' },
  { label: 'GEO Engine', href: '/platform/geo-engine' },
];

interface EcosystemNavProps {
  current: string;
  nextHref?: string;
  nextLabel?: string;
}

export function EcosystemNav({ current, nextHref, nextLabel }: EcosystemNavProps) {
  return (
    <section
      className="py-10 bg-[#0A0A0A]"
      style={{ borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}
    >
      <Container size="lg">
        <div className="flex flex-col gap-5">
          {/* Ecosystem label */}
          <div className="flex items-center gap-3 flex-wrap">
            <span style={{ fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(242,237,228,0.3)' }}>
              The PearlOS Ecosystem
            </span>
            <span style={{ color: 'rgba(255,255,255,0.12)', fontSize: '0.75rem' }}>—</span>
            <Link
              href="/platform/pearlos"
              className="inline-flex items-center gap-1 text-xs font-semibold transition-colors duration-150 hover:opacity-80"
              style={{ color: '#BF9B5C' }}
            >
              PearlOS
              <span style={{ fontSize: '0.65rem', opacity: 0.6 }}>↗</span>
            </Link>
            <span style={{ color: 'rgba(255,255,255,0.12)', fontSize: '0.75rem' }}>→</span>
            <div className="flex flex-wrap gap-2">
              {MODULES.map((mod) => {
                const isActive = mod.href === current;
                return (
                  <Link
                    key={mod.href}
                    href={mod.href}
                    className="inline-block rounded-full px-3 py-1 text-xs font-medium transition-colors duration-150"
                    style={{
                      background: isActive ? 'rgba(191,155,92,0.15)' : 'rgba(255,255,255,0.04)',
                      border: isActive ? '1px solid rgba(191,155,92,0.35)' : '1px solid rgba(255,255,255,0.07)',
                      color: isActive ? '#BF9B5C' : 'rgba(242,237,228,0.38)',
                    }}
                  >
                    {mod.label}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Next module hint */}
          {nextHref && nextLabel && (
            <div className="flex items-center gap-2">
              <span style={{ fontSize: '0.72rem', color: 'rgba(242,237,228,0.28)' }}>Next in the system:</span>
              <Link
                href={nextHref}
                className="inline-flex items-center gap-1.5 text-xs font-semibold transition-colors duration-150 hover:opacity-80"
                style={{ color: 'rgba(242,237,228,0.55)' }}
              >
                {nextLabel}
                <ArrowRight size={11} />
              </Link>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
