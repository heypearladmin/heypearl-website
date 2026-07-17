import type { MetadataRoute } from 'next';
import { site } from '@/lib/site';
import { posts } from '@/lib/posts';
import { ARTICLE_META } from '@/lib/resources';
import { slugify } from '@/lib/slugify';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url.replace(/\/$/, '');
  const now = new Date();

  const staticPages: { path: string; priority: number; freq: MetadataRoute.Sitemap[number]['changeFrequency'] }[] = [
    // Core
    { path: '',        priority: 1.0, freq: 'weekly' },
    { path: '/platform', priority: 0.9, freq: 'monthly' },
    { path: '/solutions', priority: 0.9, freq: 'monthly' },
    { path: '/results',  priority: 0.8, freq: 'monthly' },
    { path: '/pricing',  priority: 0.8, freq: 'monthly' },
    { path: '/about',    priority: 0.7, freq: 'monthly' },
    { path: '/contact',  priority: 0.8, freq: 'monthly' },
    // Platform modules
    { path: '/platform/pearlos',         priority: 0.85, freq: 'monthly' },
    { path: '/platform/authority-pages', priority: 0.8,  freq: 'monthly' },
    { path: '/platform/authority-score', priority: 0.8,  freq: 'monthly' },
    { path: '/platform/knowledge-graph', priority: 0.8,  freq: 'monthly' },
    { path: '/platform/ai-visibility',   priority: 0.8,  freq: 'monthly' },
    { path: '/platform/geo-engine',      priority: 0.8,  freq: 'monthly' },
    // Solutions
    { path: '/solutions/real-estate-agents', priority: 0.8, freq: 'monthly' },
    { path: '/solutions/brokerages',         priority: 0.8, freq: 'monthly' },
    { path: '/solutions/service-businesses', priority: 0.8, freq: 'monthly' },
    { path: '/solutions/teams',              priority: 0.8, freq: 'monthly' },
    { path: '/solutions/enterprise',         priority: 0.8, freq: 'monthly' },
    // Resources
    { path: '/resources', priority: 0.85, freq: 'weekly' },
    { path: '/faq',       priority: 0.8,  freq: 'weekly' },
    // Legal
    { path: '/policies',         priority: 0.3, freq: 'yearly' },
    { path: '/privacy',          priority: 0.3, freq: 'yearly' },
    { path: '/terms-of-service', priority: 0.3, freq: 'yearly' },
  ];

  const staticEntries: MetadataRoute.Sitemap = staticPages.map(({ path, priority, freq }) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: freq,
    priority,
  }));

  // Authority Library articles
  const articleEntries: MetadataRoute.Sitemap = ARTICLE_META.map((article) => ({
    url: `${base}/resources/${article.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.75,
  }));

  // Individual FAQ pages
  const faqEntries: MetadataRoute.Sitemap = posts.flatMap((post) =>
    post.faq.map((item) => ({
      url: `${base}/faq/${slugify(item.q)}`,
      lastModified: new Date(post.publishedAt),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }))
  );

  // Blog posts (served under /resources/[slug])
  const postEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${base}/resources/${post.slug}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticEntries, ...articleEntries, ...faqEntries, ...postEntries];
}
