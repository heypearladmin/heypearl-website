import type { MetadataRoute } from 'next';
import { site } from '@/lib/site';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Allow all crawlers including AI bots
      { userAgent: '*', allow: '/', disallow: ['/api/'] },
      // Google
      { userAgent: 'Googlebot', allow: '/' },
      // Google AI / AI Overviews
      { userAgent: 'Google-Extended', allow: '/' },
      // OpenAI / ChatGPT
      { userAgent: 'GPTBot', allow: '/' },
      { userAgent: 'ChatGPT-User', allow: '/' },
      // Perplexity
      { userAgent: 'PerplexityBot', allow: '/' },
      // Anthropic / Claude
      { userAgent: 'ClaudeBot', allow: '/' },
      { userAgent: 'anthropic-ai', allow: '/' },
      // Microsoft / Bing Copilot
      { userAgent: 'Bingbot', allow: '/' },
      // Meta AI
      { userAgent: 'Meta-ExternalAgent', allow: '/' },
      // Apple
      { userAgent: 'Applebot', allow: '/' },
      // Common AI scrapers
      { userAgent: 'CCBot', allow: '/' },
      { userAgent: 'omgili', allow: '/' },
    ],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
