// Maps a blog post slug to its companion downloadable PDF guide.
// Only posts with a real, reviewed PDF in public/pdfs/ appear here — this is
// the single source of truth for which posts show the "Download the PDF"
// lead-capture gate. Internal audit-report PDFs are intentionally excluded;
// they are not public-facing lead magnets.
export const LEAD_MAGNET_PDF_BY_POST_SLUG: Record<string, string> = {
  '90-day-ai-visibility-roadmap': '90-day-ai-visibility-roadmap.pdf',
  'why-your-about-page-matters-for-ai-citations': 'about-page-ai-citations.pdf',
  'how-ai-engines-decide-who-to-recommend': 'ai-engines-business-recommendations.pdf',
  'ai-visibility-for-b2b-services': 'ai-visibility-for-b2b-services.pdf',
  'ai-visibility-local-service-businesses': 'ai-visibility-local-service-businesses.pdf',
  'audit-your-ai-search-visibility': 'audit-ai-search-visibility.pdf',
  'chatgpt-vs-perplexity-vs-google-ai-overviews-for-businesses': 'chatgpt-vs-perplexity-vs-google-ai-overviews.pdf',
  'citation-building-for-ai-visibility': 'citation-building-for-ai-visibility.pdf',
  'eeat-in-the-ai-era': 'eeat-ai-era-trust-signals.pdf',
  'entity-seo-make-your-business-known-to-ai': 'entity-seo-ai-knowledge-graph.pdf',
  'what-is-geo-generative-engine-optimization': 'geo-generative-engine-optimization-guide.pdf',
  'google-knowledge-panel-business-guide': 'google-knowledge-panel-business-guide.pdf',
  'how-often-update-content-ai-visibility': 'how-often-update-content-ai-visibility.pdf',
  'how-to-write-content-ai-cites': 'how-to-write-content-ai-cites.pdf',
  'llms-txt-ai-crawler-access-guide': 'llms-txt-ai-crawler-access-guide.pdf',
  'local-ai-search-optimization': 'local-ai-search-optimization.pdf',
  'monitor-ai-answer-visibility': 'monitor-ai-answer-visibility.pdf',
  'neighborhood-marketing-ai-era-real-estate': 'neighborhood-marketing-ai-era-real-estate.pdf',
  'pearl-framework-building-ai-ready-businesses': 'pearl-framework-ai-ready-business.pdf',
  'reputation-signals-ai-era-reviews-recommendations': 'reputation-signals-ai-recommendations.pdf',
  'structured-data-schema-ai-visibility': 'structured-data-schema-ai-guide.pdf',
  'topical-authority-ai-era': 'topical-authority-ai-era.pdf',
  'voice-search-ai-assistants-business-visibility': 'voice-search-ai-assistants-business-visibility.pdf',
  'what-to-do-when-ai-gets-your-business-wrong': 'what-to-do-when-ai-gets-your-business-wrong.pdf',
  'wikidata-for-business-owners': 'wikidata-for-business-owners.pdf',
};

export function getLeadMagnetPdf(postSlug: string): string | null {
  return LEAD_MAGNET_PDF_BY_POST_SLUG[postSlug] ?? null;
}
