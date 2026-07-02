import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { LinkButton } from '@/components/ui/Button';
import { site } from '@/lib/site';
import { getPost, posts, formatDate } from '@/lib/posts';
import { ArrowLeft, Clock, Calendar } from 'lucide-react';

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.seoTitle,
    description: post.metaDescription,
    openGraph: {
      title: post.seoTitle,
      description: post.metaDescription,
      type: 'article',
      publishedTime: post.publishedAt,
      authors: ['Hey Pearl Agency LLC'],
      images: [{ url: post.image, width: 1600, height: 900 }],
    },
  };
}

/* ------------------------------------------------------------------ */
/* Simple markdown-to-JSX renderer for the content strings            */
/* ------------------------------------------------------------------ */
function renderMarkdown(md: string) {
  const lines = md.split('\n');
  const elements: React.ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    if (line.startsWith('### ')) {
      elements.push(
        <h3 key={i} className="mt-8 mb-3 font-display text-xl text-plum">
          {inlineFormat(line.slice(4))}
        </h3>,
      );
    } else if (line.startsWith('## ')) {
      elements.push(
        <h2 key={i} className="mt-12 mb-4 font-display text-2xl sm:text-3xl text-plum">
          {inlineFormat(line.slice(3))}
        </h2>,
      );
    } else if (line.startsWith('- ') || line.startsWith('* ')) {
      // collect list items
      const items: string[] = [];
      while (i < lines.length && (lines[i].startsWith('- ') || lines[i].startsWith('* '))) {
        items.push(lines[i].slice(2));
        i++;
      }
      elements.push(
        <ul key={`ul-${i}`} className="my-4 flex flex-col gap-2 pl-5 list-disc text-slate leading-relaxed">
          {items.map((item, j) => (
            <li key={j}>{inlineFormat(item)}</li>
          ))}
        </ul>,
      );
      continue;
    } else if (/^\d+\. /.test(line)) {
      const items: string[] = [];
      while (i < lines.length && /^\d+\. /.test(lines[i])) {
        items.push(lines[i].replace(/^\d+\. /, ''));
        i++;
      }
      elements.push(
        <ol key={`ol-${i}`} className="my-4 flex flex-col gap-2 pl-5 list-decimal text-slate leading-relaxed">
          {items.map((item, j) => (
            <li key={j}>{inlineFormat(item)}</li>
          ))}
        </ol>,
      );
      continue;
    } else if (line.trim() === '') {
      // skip blank lines
    } else {
      elements.push(
        <p key={i} className="mt-5 text-slate leading-relaxed text-base sm:text-[1.0625rem]">
          {inlineFormat(line)}
        </p>,
      );
    }
    i++;
  }
  return elements;
}

function inlineFormat(text: string): React.ReactNode {
  // Handle **bold** and *italic* inline
  const parts: React.ReactNode[] = [];
  const regex = /\*\*(.+?)\*\*|\*(.+?)\*/g;
  let last = 0;
  let match;
  while ((match = regex.exec(text)) !== null) {
    if (match.index > last) parts.push(text.slice(last, match.index));
    if (match[1]) parts.push(<strong key={match.index}>{match[1]}</strong>);
    else if (match[2]) parts.push(<em key={match.index}>{match[2]}</em>);
    last = match.index + match[0].length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return parts.length === 1 && typeof parts[0] === 'string' ? parts[0] : <>{parts}</>;
}

export default async function InsightPost({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: post.faq.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.h1,
    description: post.metaDescription,
    datePublished: post.publishedAt,
    author: {
      '@type': 'Organization',
      name: 'Hey Pearl Agency LLC',
      url: site.url,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Hey Pearl Agency LLC',
      url: site.url,
    },
    image: `${site.url}${post.image}`,
    url: `${site.url}/insights/${post.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {post.faq.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      {/* Hero */}
      <section className="relative overflow-hidden bg-plum text-cream">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <Image
            src={post.image}
            alt={post.h1}
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-plum/70 via-plum/80 to-plum/95" />
        </div>
        <Container size="md" className="relative pt-12 pb-16">
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 text-sm text-cream/70 hover:text-cream transition mb-8"
          >
            <ArrowLeft size={14} />
            Back to Insights
          </Link>
          <Eyebrow tone="cream">{post.eyebrow}</Eyebrow>
          <h1 className="mt-4 font-display text-display-md text-cream max-w-3xl">
            {post.h1}
          </h1>
          <div className="mt-6 flex flex-wrap items-center gap-5 text-sm text-cream/70">
            <span className="flex items-center gap-2">
              <Calendar size={14} />
              {formatDate(post.publishedAt)}
            </span>
            <span className="flex items-center gap-2">
              <Clock size={14} />
              {post.readTime}
            </span>
          </div>
        </Container>
      </section>

      {/* Article body */}
      <article className="py-16 sm:py-20">
        <Container size="md">
          <div className="prose-content">
            {/* Excerpt / lede */}
            <p className="text-lg sm:text-xl text-slate leading-relaxed font-medium border-l-4 border-magenta pl-5 mb-10">
              {post.excerpt}
            </p>

            {/* Main content */}
            {renderMarkdown(post.content)}

            {/* Conclusion */}
            {post.conclusion && (
              <div className="mt-12 rounded-2xl bg-lavender border border-plum/10 p-6 sm:p-8">
                {renderMarkdown(post.conclusion)}
              </div>
            )}

            {/* FAQ */}
            {post.faq.length > 0 && (
              <div className="mt-16">
                <h2 className="font-display text-2xl sm:text-3xl text-plum mb-8">
                  Frequently Asked Questions
                </h2>
                <div className="flex flex-col gap-6">
                  {post.faq.map((item, i) => (
                    <div
                      key={i}
                      className="rounded-2xl border border-plum/10 bg-white p-6"
                    >
                      <h3 className="font-display text-lg text-plum mb-3">
                        {item.q}
                      </h3>
                      <p className="text-slate leading-relaxed text-sm sm:text-base">
                        {item.a}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Internal links */}
            {post.internalLinks.length > 0 && (
              <div className="mt-16 rounded-2xl bg-plum text-cream p-6 sm:p-8">
                <p className="text-xs tracking-micro uppercase text-cream/60 mb-4">
                  Related from Hey Pearl
                </p>
                <div className="flex flex-wrap gap-3">
                  {post.internalLinks.map((link) => (
                    <LinkButton
                      key={link.href}
                      href={link.href}
                      variant="inverse"
                      size="sm"
                      withArrow
                    >
                      {link.label}
                    </LinkButton>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* CTA */}
          <div className="mt-20 rounded-3xl bg-lavender border border-plum/10 p-8 sm:p-10 text-center">
            <Eyebrow>Ready to be found?</Eyebrow>
            <h2 className="mt-3 font-display text-display-sm text-plum">
              Build the authority AI engines trust.
            </h2>
            <p className="mt-3 text-slate max-w-xl mx-auto">
              Hey Pearl builds the authority infrastructure that gets your business cited, recommended, and remembered by AI search engines.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
              <LinkButton
                href={site.strategyCallUrl}
                external
                variant="primary"
                size="lg"
                withArrow
              >
                Schedule a Strategy Call
              </LinkButton>
              <LinkButton href="/contact" variant="secondary" size="lg">
                Get in touch
              </LinkButton>
            </div>
          </div>
        </Container>
      </article>
    </>
  );
}
