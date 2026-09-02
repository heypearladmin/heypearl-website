import { Search, BarChart3, Share2, MessageSquareText, TrendingUp, ArrowDown } from 'lucide-react';
import { Container } from '@/components/ui/Container';

const SERVICES = [
  {
    label: 'AI Visibility Strategy',
    description: 'We identify opportunities across AI and search and build strategies that increase how often a business is discovered and represented.',
    icon: Search,
    color: '#2563FF',
  },
  {
    label: 'SEO That Builds Authority',
    description: 'Technical SEO, content systems, entity signals, and link strategies designed to build long-term search authority.',
    icon: BarChart3,
    color: '#2563FF',
  },
  {
    label: 'GEO Optimization (AI Search)',
    description: "Optimize a business's content, entities, and online presence so it is more likely to appear in AI-generated search results and recommendations.",
    icon: Share2,
    color: '#22C55E',
  },
  {
    label: 'AEO (Answer Engine Optimization)',
    description: 'Structure and optimize content so the business can become a trusted source for direct answers across search and AI answer engines.',
    icon: MessageSquareText,
    color: '#FF6A00',
  },
  {
    label: 'Analytics & Growth Systems',
    description: 'Measure visibility, search performance, and business outcomes, then continuously improve the systems based on what is working.',
    icon: TrendingUp,
    color: '#FFC107',
  },
];

export function WhatWeDo() {
  return (
    <section className="py-28 bg-white relative" style={{ borderTop: '1px solid #E7E3DD' }}>
      <Container size="lg">

        {/* Section header */}
        <div className="mb-14 max-w-2xl">
          <div className="flex items-center gap-3 mb-5">
            <span className="inline-block h-px w-8" style={{ background: '#E7E3DD' }} aria-hidden />
            <span style={{ fontSize: '0.67rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#FF6A00' }}>
              What We Do
            </span>
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-jakarta), Helvetica Neue, Arial, sans-serif',
              fontSize: 'clamp(1.9rem, 4vw, 3rem)',
              fontWeight: 700,
              color: '#0A1224',
              lineHeight: 1.08,
              letterSpacing: '-0.022em',
            }}
          >
            Five capabilities,<br />
            <span style={{ color: '#FF6A00', fontStyle: 'italic' }}>one authority strategy.</span>
          </h2>
          <p className="mt-4" style={{ fontSize: '0.9rem', color: '#64748B', lineHeight: 1.7 }}>
            This is the work HeyPearl does for every client — the strategic capabilities that make a business the answer AI gives.
          </p>
        </div>

        {/* Service grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SERVICES.map((svc) => {
            const Icon = svc.icon;
            return (
              <div
                key={svc.label}
                className="p-6 lg:p-8 rounded-2xl"
                style={{
                  background: '#FFFFFF',
                  border: '1px solid #E7E3DD',
                  boxShadow: '0 1px 4px rgba(10,18,36,0.06), 0 8px 24px rgba(10,18,36,0.06)',
                }}
              >
                <div
                  className="inline-flex items-center justify-center rounded-xl mb-5"
                  style={{ width: '2.75rem', height: '2.75rem', background: `${svc.color}14` }}
                >
                  <Icon size={20} style={{ color: svc.color }} strokeWidth={2} />
                </div>
                <h3
                  style={{
                    fontFamily: 'var(--font-jakarta), Helvetica Neue, Arial, sans-serif',
                    fontSize: '1.05rem',
                    fontWeight: 700,
                    color: '#0A1224',
                    letterSpacing: '-0.01em',
                    marginBottom: '0.625rem',
                  }}
                >
                  {svc.label}
                </h3>
                <p style={{ fontSize: '0.855rem', color: '#64748B', lineHeight: 1.72 }}>
                  {svc.description}
                </p>
              </div>
            );
          })}

          {/* Sixth cell — bridges into Platform Modules below */}
          <div
            className="p-6 lg:p-8 rounded-2xl flex flex-col justify-center"
            style={{ background: '#F8F5F0', border: '1px solid #E7E3DD' }}
          >
            <ArrowDown size={18} style={{ color: '#94A3B8', marginBottom: '0.75rem' }} />
            <p style={{ fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#94A3B8', marginBottom: '0.5rem' }}>
              Powered by
            </p>
            <p style={{ fontSize: '0.9rem', color: '#0A1224', lineHeight: 1.6, fontWeight: 600 }}>
              The Platform Modules below — the systems and technology behind every capability.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
