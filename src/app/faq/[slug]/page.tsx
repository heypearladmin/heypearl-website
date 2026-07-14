import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { LinkButton } from '@/components/ui/Button';
import { site } from '@/lib/site';
import { posts } from '@/lib/posts';
import { slugify } from '@/components/blog/TableOfContents';
import { ArrowLeft } from 'lucide-react';

type Props = { params: Promise<{ slug: string }> };

type FaqEntry = {
  q: string;
  a: string;
  postSlug: string;
  postTitle: string;
  postEyebrow: string;
};

function getAllFaqs(): FaqEntry[] {
  const faqs: FaqEntry[] = [];
  for (const post of posts) {
    for (const item of post.faq) {
      faqs.push({
        q: item.q,
        a: item.a,
        postSlug: post.slug,
        postTitle: post.h1,
        postEyebrow: post.eyebrow,
      });
    }
  }
  return faqs;
}

function findFaq(slug: string): FaqEntry | undefined {
  return getAllFaqs().find((f) => slugify(f.q) === slug);
}

export async function generateStaticParams() {
  return getAllFaqs().map((f) => ({ slug: slugify(f.q) }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const faq = findFaq(slug);
  if (!faq) return {};

  const canonical = `${site.url}/faq/${slug}`;
  return {
    title: `${faq.q} | Hey Pearl`,
    description: faq.a.slice(0, 160),
    alternates: { canonical },
    openGraph: {
      title: faq.q,
      description: faq.a.slice(0, 160),
      type: 'article',
    },
  };
}

export default async function FaqPage({ params }: Props) {
  const { slug } = await params;
  const faq = findFaq(slug);
  if (!faq) notFound();

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: faq.q,
        acceptedAnswer: { '@type': 'Answer', text: faq.a },
      },
    ],
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: site.url },
      { '@type': 'ListItem', position: 2, name: 'Insights', item: `${site.url}/insights` },
      { '@type': 'ListItem', position: 3, name: faq.postTitle, item: `${site.url}/insights/${faq.postSlug}` },
      { '@type': 'ListItem', position: 4, name: faq.q, item: `${site.url}/faq/${slug}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="bg-cream min-h-screen">
        <Container size="sm" className="py-16 sm:py-20">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex flex-wrap items-center gap-1.5 text-xs text-slate/60">
              <li><Link href="/insights" className="hover:text-plum transition">Insights</Link></li>
              <li aria-hidden>/</li>
              <li>
                <Link href={`/insights/${faq.postSlug}`} className="hover:text-plum transition line-clamp-1">
                  {faq.postTitle}
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li className="text-plum font-medium">FAQ</li>
            </ol>
          </nav>

          <Eyebrow>{faq.postEyebrow}</Eyebrow>

          <h1 className="mt-4 font-display text-display-sm text-plum leading-tight">
            {faq.q}
          </h1>

          <div className="mt-8 rounded-2xl bg-white border border-plum/10 p-6 sm:p-8">
            <p className="text-base sm:text-lg text-slate leading-relaxed">{faq.a}</p>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row items-start gap-4">
            <Link
              href={`/insights/${faq.postSlug}`}
              className="inline-flex items-center gap-2 text-sm font-medium text-magenta hover:text-magenta/80 transition"
            >
              <ArrowLeft size={14} />
              Read the full article
            </Link>
          </div>

          {/* Subtle CTA */}
          <div className="mt-16 rounded-2xl bg-lavender border border-plum/10 p-6 sm:p-8">
            <Eyebrow>Hey Pearl</Eyebrow>
            <h2 className="mt-3 font-display text-xl text-plum">
              Need help with AI visibility?
            </h2>
            <p className="mt-2 text-slate text-sm leading-relaxed">
              Hey Pearl builds the authority infrastructure that gets your business cited and recommended by AI engines.
            </p>
            <div className="mt-5">
              <LinkButton href="/contact" variant="secondary" size="sm">
                Get in touch
              </LinkButton>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
