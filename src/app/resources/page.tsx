import Link from 'next/link';
import { ArrowUpRight, BookOpen, Clock } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { ARTICLE_META, TOPIC_CLUSTERS } from '@/lib/resources';
import { site } from '@/lib/site';

export const metadata = {
  title: 'AI Authority Library — HeyPearl Resources',
  description: 'The definitive educational resource for AI Authority Infrastructure. Learn how AI systems choose which businesses to recommend — and how to build the signals they trust.',
  openGraph: {
    title: 'AI Authority Library — HeyPearl Resources',
    description: 'The definitive educational resource for AI Authority Infrastructure. Learn how AI systems choose which businesses to recommend — and how to build the signals they trust.',
    images: ['/images/og/og-resources.webp'],
  },
};

export default function ResourcesPage() {
  const featuredSlugs = ['what-is-ai-authority', 'what-is-generative-engine-optimization', 'ai-search-vs-traditional-seo'];
  const featuredArticles = featuredSlugs.map(s => ARTICLE_META.find(a => a.slug === s)!).filter(Boolean);
  const bg = '#F7F4EF';
  const card = '#FFFFFF';
  const text = '#1C1917';
  const secondary = 'rgba(28,25,23,0.5)';
  const gold = '#BF9B5C';
  const border = 'rgba(28,25,23,0.07)';

  return (
    <div style={{ background: bg, minHeight: '100vh' }}>

      {/* Hero */}
      <section style={{ borderBottom: `1px solid ${border}`, paddingTop: '5rem', paddingBottom: '4rem' }}>
        <Container size="lg">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-block h-px w-8" style={{ background: 'rgba(191,155,92,0.5)' }} aria-hidden />
              <span style={{ fontSize: '0.67rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: gold }}>
                AI Authority Library
              </span>
            </div>
            <h1
              style={{
                fontFamily: 'var(--font-playfair), Georgia, serif',
                fontSize: 'clamp(2.25rem, 5vw, 3.75rem)',
                fontWeight: 700,
                color: text,
                lineHeight: 1.08,
                letterSpacing: '-0.022em',
                marginBottom: '1.5rem',
              }}
            >
              The definitive guide to<br />
              <span style={{ color: gold, fontStyle: 'italic' }}>AI Authority Infrastructure.</span>
            </h1>
            <p style={{ fontSize: '1.05rem', color: secondary, lineHeight: 1.75, maxWidth: '38rem' }}>
              Everything you need to understand how AI systems choose which businesses to recommend — and what it takes to be one of them. Built for business owners, marketers, and anyone navigating the new landscape of AI search.
            </p>
          </div>

          {/* Stats strip */}
          <div className="flex flex-wrap gap-8 mt-10">
            {[
              { value: '10', label: 'Pillar Guides' },
              { value: '4', label: 'Topic Clusters' },
              { value: '100%', label: 'Free — open access' },
            ].map(stat => (
              <div key={stat.label}>
                <div style={{ fontSize: '1.5rem', fontWeight: 800, color: text, letterSpacing: '-0.02em' }}>{stat.value}</div>
                <div style={{ fontSize: '0.75rem', fontWeight: 500, color: secondary, marginTop: '0.125rem' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Featured Articles */}
      <section style={{ borderBottom: `1px solid ${border}`, paddingTop: '4rem', paddingBottom: '4rem' }}>
        <Container size="lg">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 style={{ fontFamily: 'var(--font-playfair), Georgia, serif', fontSize: '1.5rem', fontWeight: 700, color: text, letterSpacing: '-0.015em', marginBottom: '0.25rem' }}>
                Start Here
              </h2>
              <p style={{ fontSize: '0.8rem', color: secondary }}>Three essential reads for understanding AI Authority</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px" style={{ border: `1px solid ${border}`, borderRadius: '1rem', overflow: 'hidden' }}>
            {featuredArticles.map((article, i) => (
              <Link
                key={article.slug}
                href={`/resources/${article.slug}`}
                className="group block p-8 transition-colors duration-200 hover:bg-[#F0EBE3]"
                style={{ background: card }}
              >
                {i === 0 && (
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.375rem', background: 'rgba(191,155,92,0.1)', borderRadius: '999px', padding: '0.2rem 0.625rem', marginBottom: '1rem' }}>
                    <span style={{ fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: gold }}>
                      Essential Read
                    </span>
                  </div>
                )}
                <div style={{ fontSize: '0.67rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: secondary, marginBottom: '0.5rem' }}>
                  {article.category}
                </div>
                <h3
                  className="group-hover:text-[#BF9B5C] transition-colors duration-200"
                  style={{ fontFamily: 'var(--font-playfair), Georgia, serif', fontSize: '1.15rem', fontWeight: 700, color: text, lineHeight: 1.25, marginBottom: '0.75rem', letterSpacing: '-0.012em' }}
                >
                  {article.title}
                </h3>
                <p style={{ fontSize: '0.855rem', color: secondary, lineHeight: 1.65, marginBottom: '1.25rem' }}>
                  {article.excerpt}
                </p>
                <div className="flex items-center gap-2">
                  <Clock size={11} style={{ color: secondary }} />
                  <span style={{ fontSize: '0.72rem', color: secondary }}>{article.readTime} min read</span>
                  <ArrowUpRight size={13} className="ml-auto opacity-0 group-hover:opacity-60 transition-opacity" style={{ color: gold }} />
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Topic Clusters */}
      <section style={{ borderBottom: `1px solid ${border}`, paddingTop: '4rem', paddingBottom: '4rem' }}>
        <Container size="lg">
          <div className="mb-8">
            <h2 style={{ fontFamily: 'var(--font-playfair), Georgia, serif', fontSize: '1.5rem', fontWeight: 700, color: text, letterSpacing: '-0.015em', marginBottom: '0.25rem' }}>
              Topic Clusters
            </h2>
            <p style={{ fontSize: '0.8rem', color: secondary }}>Browse by subject area</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {TOPIC_CLUSTERS.map(cluster => {
              const clusterArticles = cluster.slugs.map(s => ARTICLE_META.find(a => a.slug === s)!).filter(Boolean);
              return (
                <div
                  key={cluster.id}
                  style={{ background: card, border: `1px solid ${border}`, borderRadius: '0.875rem', padding: '1.5rem' }}
                >
                  <div className="flex items-start gap-3 mb-4">
                    <div style={{ width: '3px', height: '3rem', background: cluster.color, borderRadius: '999px', flexShrink: 0, marginTop: '0.125rem' }} />
                    <div>
                      <h3 style={{ fontSize: '1rem', fontWeight: 700, color: text, marginBottom: '0.25rem' }}>{cluster.label}</h3>
                      <p style={{ fontSize: '0.8rem', color: secondary }}>{cluster.description}</p>
                    </div>
                  </div>
                  <div style={{ borderTop: `1px solid ${border}`, paddingTop: '1rem' }}>
                    {clusterArticles.map(article => (
                      <Link
                        key={article.slug}
                        href={`/resources/${article.slug}`}
                        className="group flex items-center justify-between py-2 hover:opacity-70 transition-opacity"
                        style={{ borderBottom: `1px solid ${border}` }}
                      >
                        <span style={{ fontSize: '0.855rem', color: text, fontWeight: 500 }}>{article.title}</span>
                        <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-60 transition-opacity flex-shrink-0" style={{ color: gold }} />
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* All Articles */}
      <section style={{ paddingTop: '4rem', paddingBottom: '6rem' }}>
        <Container size="lg">
          <div className="mb-8">
            <h2 style={{ fontFamily: 'var(--font-playfair), Georgia, serif', fontSize: '1.5rem', fontWeight: 700, color: text, letterSpacing: '-0.015em', marginBottom: '0.25rem' }}>
              All Guides
            </h2>
            <p style={{ fontSize: '0.8rem', color: secondary }}>Complete pillar article index — {ARTICLE_META.length} guides</p>
          </div>
          <div style={{ border: `1px solid ${border}`, borderRadius: '1rem', overflow: 'hidden', background: card }}>
            {ARTICLE_META.map((article, i) => (
              <Link
                key={article.slug}
                href={`/resources/${article.slug}`}
                className="group flex items-center gap-6 p-6 hover:bg-[#F7F4EF] transition-colors duration-150"
                style={{ borderBottom: i < ARTICLE_META.length - 1 ? `1px solid ${border}` : undefined }}
              >
                <div style={{ fontSize: '0.75rem', fontWeight: 700, color: secondary, width: '1.75rem', flexShrink: 0, fontVariantNumeric: 'tabular-nums' }}>
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: '0.67rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: secondary, marginBottom: '0.25rem' }}>
                    {article.category}
                  </div>
                  <h3
                    className="group-hover:text-[#BF9B5C] transition-colors duration-200"
                    style={{ fontSize: '0.97rem', fontWeight: 700, color: text, letterSpacing: '-0.01em' }}
                  >
                    {article.title}
                  </h3>
                </div>
                <div className="flex items-center gap-3 flex-shrink-0">
                  <div className="flex items-center gap-1.5">
                    <Clock size={11} style={{ color: secondary }} />
                    <span style={{ fontSize: '0.72rem', color: secondary }}>{article.readTime}m</span>
                  </div>
                  <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-60 transition-opacity" style={{ color: gold }} />
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section style={{ borderTop: `1px solid ${border}`, background: '#090909', paddingTop: '5rem', paddingBottom: '5rem' }}>
        <Container size="md">
          <div className="text-center">
            <div style={{ fontSize: '0.67rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: gold, marginBottom: '1.25rem' }}>
              Ready to Apply This
            </div>
            <h2
              style={{
                fontFamily: 'var(--font-playfair), Georgia, serif',
                fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)',
                fontWeight: 700,
                color: '#F2EDE4',
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
                marginBottom: '1.25rem',
              }}
            >
              Understanding AI Authority is step one.<br />
              <span style={{ color: gold, fontStyle: 'italic' }}>Building it is step two.</span>
            </h2>
            <p style={{ fontSize: '0.95rem', color: 'rgba(242,237,228,0.5)', lineHeight: 1.7, marginBottom: '2.5rem', maxWidth: '28rem', margin: '0 auto 2.5rem' }}>
              Book a Strategy Call and we'll audit your current AI Authority score, identify the gaps, and show you what it takes to be the recommended choice in your market.
            </p>
            <Link
              href={site.strategyCallUrl}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold transition-opacity hover:opacity-85"
              style={{ background: gold, color: '#090909', fontSize: '0.88rem', letterSpacing: '-0.01em' }}
            >
              Book a Strategy Call
              <ArrowUpRight size={14} />
            </Link>
          </div>
        </Container>
      </section>

    </div>
  );
}
