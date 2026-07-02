import type { MetadataRoute } from 'next';
import { site } from '@/lib/site';
import { posts } from '@/lib/posts';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url.replace(/\/$/, '');
  const now = new Date();

  const staticPaths = [
    { path: '', priority: 1.0, freq: 'weekly' as const },
    { path: '/about', priority: 0.8, freq: 'monthly' as const },
    { path: '/contact', priority: 0.9, freq: 'monthly' as const },
    { path: '/pricing', priority: 0.8, freq: 'monthly' as const },
    { path: '/services', priority: 0.8, freq: 'monthly' as const },
    { path: '/services/geo', priority: 0.8, freq: 'monthly' as const },
    { path: '/services/heylocal', priority: 0.8, freq: 'monthly' as const },
    { path: '/services/authority-websites', priority: 0.8, freq: 'monthly' as const },
    { path: '/insights', priority: 0.9, freq: 'weekly' as const },
    { path: '/policies', priority: 0.5, freq: 'yearly' as const },
    { path: '/privacy', priority: 0.5, freq: 'yearly' as const },
    { path: '/terms-of-service', priority: 0.5, freq: 'yearly' as const },
  ];

  const staticEntries: MetadataRoute.Sitemap = staticPaths.map(({ path, priority, freq }) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: freq,
    priority,
  }));

  const postEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${base}/insights/${post.slug}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticEntries, ...postEntries];
}
