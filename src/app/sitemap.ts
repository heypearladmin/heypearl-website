import type { MetadataRoute } from 'next';
import { site } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url.replace(/\/$/, '');
  const now = new Date();

  const paths = [
    '',
    '/about',
    '/contact',
    '/pricing',
    '/services',
    '/services/geo',
    '/services/heylocal',
    '/services/authority-websites',
    '/insights',
    '/privacy',
    '/terms',
  ];

  return paths.map((p) => ({
    url: `${base}${p}`,
    lastModified: now,
    changeFrequency: p === '' ? 'weekly' : 'monthly',
    priority: p === '' ? 1 : 0.7,
  }));
}
