import React from 'react';

export interface ArticleMeta {
  slug: string;
  title: string;
  headline: string;
  excerpt: string;
  category: string;
  readTime: number;
  lastUpdated: string;
  keyTakeaways: string[];
  quickAnswer: string;
  relatedSlugs: string[];
  tags: string[];
}

export interface TocEntry {
  id: string;
  label: string;
}

export interface Article extends ArticleMeta {
  toc: TocEntry[];
  body: React.ReactNode;
}

// ─── Article Registry ────────────────────────────────────────────────────────

export const ARTICLE_META: ArticleMeta[] = [
  {
    slug: 'what-is-ai-authority',
    title: 'What Is AI Authority?',
    headline: 'What Is AI Authority — and Why It Decides Which Businesses AI Recommends',
    excerpt: 'AI systems don\'t recommend businesses randomly. They cite sources with established authority. Here\'s what that means and how to build it.',
    category: 'Foundations',
    readTime: 9,
    lastUpdated: 'July 2026',
    quickAnswer: 'AI Authority is the measure of how much trust AI systems place in a business as a reliable source of information about a specific topic, location, or service. High AI Authority means you\'re consistently cited, recommended, and referenced across AI-powered search engines.',
    keyTakeaways: [
      'AI systems use structured signals — not just backlinks — to decide who to recommend',
      'Authority is built through entity clarity, knowledge graph presence, and citation frequency',
      'Traditional SEO authority and AI Authority overlap but are not the same thing',
      'AI Authority compounds over time — early movers gain a durable structural advantage',
      'You can measure AI Authority through share of voice, citation coverage, and entity accuracy',
    ],
    relatedSlugs: ['what-is-generative-engine-optimization', 'knowledge-graphs-explained', 'entity-seo-explained'],
    tags: ['AI Authority', 'Foundations', 'GEO', 'Visibility'],
  },
  {
    slug: 'what-is-generative-engine-optimization',
    title: 'What Is GEO?',
    headline: 'What Is Generative Engine Optimization (GEO)?',
    excerpt: 'GEO is the discipline of making your business visible to AI-powered search engines. It\'s different from SEO — and it\'s becoming more important every month.',
    category: 'Foundations',
    readTime: 11,
    lastUpdated: 'July 2026',
    quickAnswer: 'Generative Engine Optimization (GEO) is the practice of structuring your online presence so that AI-powered search engines — ChatGPT, Gemini, Perplexity, Claude — understand, trust, and recommend your business. Unlike SEO, GEO focuses on machine comprehension rather than keyword ranking.',
    keyTakeaways: [
      'GEO optimizes for AI comprehension, not just search engine crawlers',
      'The goal is to appear in AI-generated answers, not just ranked links',
      'Structured data, entity signals, and authoritative citations are the primary levers',
      'GEO and SEO are complementary — strong SEO is a prerequisite, not a replacement',
      'GEO results compound: AI systems increasingly rely on their own prior citations',
    ],
    relatedSlugs: ['what-is-ai-authority', 'ai-search-vs-traditional-seo', 'knowledge-graphs-explained'],
    tags: ['GEO', 'Foundations', 'AI Search', 'Visibility'],
  },
  {
    slug: 'ai-search-vs-traditional-seo',
    title: 'AI Search vs. Traditional SEO',
    headline: 'AI Search vs. Traditional SEO: What\'s Different and What Still Matters',
    excerpt: 'The shift from ranked links to AI-generated answers changes the rules of visibility. Here\'s a precise breakdown of what changed, what carried over, and how to adapt.',
    category: 'Strategy',
    readTime: 12,
    lastUpdated: 'July 2026',
    quickAnswer: 'Traditional SEO optimizes for ranked link positions in a results list. AI search generates direct answers from synthesized sources. The measurement, tactics, and success metrics are fundamentally different — though strong foundational SEO remains a prerequisite for AI visibility.',
    keyTakeaways: [
      'AI search returns synthesized answers; traditional SEO returns a ranked list of links',
      'Click-through rate is no longer the primary metric — citation frequency is',
      'Keyword density matters less; entity clarity and topic authority matter more',
      'Backlinks still signal credibility, but structured data signals now carry equal weight',
      'Businesses can rank highly in SEO while being invisible to AI — and vice versa',
    ],
    relatedSlugs: ['what-is-generative-engine-optimization', 'understanding-google-ai-overviews', 'how-ai-search-changes-local-seo'],
    tags: ['SEO', 'AI Search', 'Strategy', 'Comparison'],
  },
  {
    slug: 'how-chatgpt-chooses-businesses-to-recommend',
    title: 'How ChatGPT Chooses Businesses',
    headline: 'How ChatGPT Chooses Which Businesses to Recommend',
    excerpt: 'ChatGPT doesn\'t browse Google when you ask for a recommendation. It draws on training data, retrieval systems, and authority signals to decide who to mention. Here\'s how that process actually works.',
    category: 'AI Engines',
    readTime: 10,
    lastUpdated: 'July 2026',
    quickAnswer: 'ChatGPT selects businesses to recommend based on a combination of training data density, retrieval-augmented results (when web browsing is enabled), entity recognition, and citation authority across its indexed sources. Businesses with high entity clarity and broad citation coverage are significantly more likely to be recommended.',
    keyTakeaways: [
      'ChatGPT uses both training knowledge and real-time retrieval depending on the query',
      'Businesses with clear, consistent entity signals are more reliably recognized',
      'Reviews, directories, and editorial mentions all contribute to recommendation probability',
      'Location and specialty signals are weighted heavily for local business queries',
      'There is no direct "bid" or "pay-to-appear" mechanism in ChatGPT recommendations',
    ],
    relatedSlugs: ['what-is-ai-authority', 'understanding-google-ai-overviews', 'entity-seo-explained'],
    tags: ['ChatGPT', 'AI Engines', 'Recommendations', 'Visibility'],
  },
  {
    slug: 'understanding-google-ai-overviews',
    title: 'Understanding Google AI Overviews',
    headline: 'Understanding Google AI Overviews: How to Appear in the New Search Experience',
    excerpt: 'Google\'s AI Overviews now appear above traditional results for millions of queries. Getting cited in them requires a different strategy than ranking on page one.',
    category: 'AI Engines',
    readTime: 10,
    lastUpdated: 'July 2026',
    quickAnswer: 'Google AI Overviews are AI-generated summaries that appear at the top of search results, synthesizing information from multiple sources. Being cited in them requires structured data, clear entity signals, and demonstrated topical authority — not just a high traditional PageRank.',
    keyTakeaways: [
      'AI Overviews appear for informational queries and increasingly for local/commercial ones',
      'Source citation in AI Overviews correlates with structured data completeness',
      'Schema markup, E-E-A-T signals, and entity clarity are the primary ranking factors',
      'Traditional position #1 does not guarantee citation in AI Overviews',
      'Optimizing for AI Overviews can increase visibility even when organic rankings plateau',
    ],
    relatedSlugs: ['ai-search-vs-traditional-seo', 'how-chatgpt-chooses-businesses-to-recommend', 'knowledge-graphs-explained'],
    tags: ['Google', 'AI Overviews', 'AI Engines', 'Search'],
  },
  {
    slug: 'knowledge-graphs-explained',
    title: 'Knowledge Graphs Explained',
    headline: 'Knowledge Graphs Explained: How AI Systems Map and Understand Your Business',
    excerpt: 'Knowledge graphs are the infrastructure behind AI understanding. They\'re how Google, ChatGPT, and other systems know what your business is, what it does, and why it should be trusted.',
    category: 'Infrastructure',
    readTime: 13,
    lastUpdated: 'July 2026',
    quickAnswer: 'A knowledge graph is a structured database of entities and their relationships. When your business is represented in knowledge graphs like Google\'s, AI systems can accurately understand, categorize, and recommend you — without relying on keyword matching alone.',
    keyTakeaways: [
      'Knowledge graphs represent entities (businesses, people, places) and their relationships',
      'Google\'s Knowledge Graph powers much of what appears in AI Overviews and search panels',
      'Consistent NAP data, schema markup, and entity corroboration all contribute to graph presence',
      'A rich knowledge graph entry increases recommendation probability across multiple AI systems',
      'Knowledge graph completion is measurable — and improvable through structured optimization',
    ],
    relatedSlugs: ['entity-seo-explained', 'what-is-ai-authority', 'what-is-generative-engine-optimization'],
    tags: ['Knowledge Graph', 'Infrastructure', 'Entity SEO', 'Foundations'],
  },
  {
    slug: 'entity-seo-explained',
    title: 'Entity SEO Explained',
    headline: 'Entity SEO Explained: Why AI Thinks in Entities, Not Keywords',
    excerpt: 'Search has evolved from matching words to understanding things. Entity SEO is the practice of making sure AI systems understand your business as a distinct, authoritative entity.',
    category: 'Infrastructure',
    readTime: 11,
    lastUpdated: 'July 2026',
    quickAnswer: 'Entity SEO is the practice of optimizing your digital presence around entities — distinct, identifiable things like your business, your founders, your services, and your location — rather than keywords. It\'s how modern AI systems understand and categorize information.',
    keyTakeaways: [
      'AI systems understand "entities" (real-world things) rather than matching keyword strings',
      'Your business should be a distinct, recognizable entity with clear attributes and relationships',
      'Entity disambiguation — ensuring AI doesn\'t confuse you with a similarly named entity — is critical',
      'Schema.org markup is the primary technical language for entity declaration',
      'Entity SEO works across Google, ChatGPT, Perplexity, and other AI systems simultaneously',
    ],
    relatedSlugs: ['knowledge-graphs-explained', 'authority-pages-explained', 'what-is-ai-authority'],
    tags: ['Entity SEO', 'Infrastructure', 'Schema', 'Foundations'],
  },
  {
    slug: 'authority-pages-explained',
    title: 'Authority Pages Explained',
    headline: 'Authority Pages Explained: The Foundation of AI-Readable Business Identity',
    excerpt: 'An Authority Page is a structured, AI-optimized profile of your business. It\'s the single most important asset for AI visibility — and most businesses don\'t have one.',
    category: 'Tactics',
    readTime: 9,
    lastUpdated: 'July 2026',
    quickAnswer: 'An Authority Page is a structured web page designed to communicate your business identity — who you are, what you do, where you operate, who you serve, and why you\'re credible — in a format that AI systems can read, understand, and cite with confidence.',
    keyTakeaways: [
      'Authority Pages go beyond typical "About" pages — they\'re structured for machine comprehension',
      'They include entity declarations, schema markup, and corroborating authority signals',
      'One well-built Authority Page can increase citation frequency across multiple AI engines',
      'Authority Pages serve both human readers and AI retrieval systems simultaneously',
      'They function as the "source of truth" that AI systems reference when describing your business',
    ],
    relatedSlugs: ['entity-seo-explained', 'knowledge-graphs-explained', 'what-is-ai-authority'],
    tags: ['Authority Pages', 'Tactics', 'Entity SEO', 'AI Visibility'],
  },
  {
    slug: 'how-ai-search-changes-local-seo',
    title: 'How AI Search Changes Local SEO',
    headline: 'How AI Search Changes Local SEO — and What to Do About It',
    excerpt: 'Local businesses are among the most affected by the AI search shift. The rules for appearing in "near me" queries have fundamentally changed.',
    category: 'Local Business',
    readTime: 11,
    lastUpdated: 'July 2026',
    quickAnswer: 'AI search engines now answer local queries — "best realtor in Austin" or "top HVAC company near me" — by synthesizing data from reviews, directories, structured data, and editorial sources. Traditional local SEO (map pack rankings) is no longer sufficient to capture this traffic.',
    keyTakeaways: [
      'AI-generated local recommendations draw on review platforms, directories, and editorial citations',
      'NAP consistency (Name, Address, Phone) remains foundational but is no longer sufficient alone',
      'Service-specific entity clarity significantly improves local AI recommendation rates',
      'Reviews are now used as authority signals, not just reputation signals',
      'Local businesses that invest in GEO now will have a structural advantage as AI search matures',
    ],
    relatedSlugs: ['how-chatgpt-chooses-businesses-to-recommend', 'entity-seo-explained', 'authority-pages-explained'],
    tags: ['Local SEO', 'Local Business', 'AI Search', 'Strategy'],
  },
  {
    slug: 'the-future-of-search',
    title: 'The Future of Search',
    headline: 'The Future of Search: What Happens When AI Answers Every Query',
    excerpt: 'Search is undergoing its most significant transformation since the early 2000s. Here\'s a clear-eyed look at where it\'s heading — and what businesses need to do to remain visible.',
    category: 'Strategy',
    readTime: 14,
    lastUpdated: 'July 2026',
    quickAnswer: 'The future of search is AI-generated answers that synthesize multiple sources into a single response. Traditional ranked-link results will persist for some query types, but the majority of informational and recommendation queries will be answered directly by AI systems — making visibility within those systems the primary competitive battleground.',
    keyTakeaways: [
      'AI-generated answers are already the default for hundreds of millions of queries per day',
      'The shift from "10 blue links" to synthesized answers is accelerating, not plateauing',
      'Businesses that build AI Authority now are investing in infrastructure that compounds over time',
      'Traditional SEO remains important but is becoming a prerequisite, not a differentiator',
      'The businesses that win the next decade of search will be those recognized as authoritative entities',
    ],
    relatedSlugs: ['what-is-ai-authority', 'what-is-generative-engine-optimization', 'ai-search-vs-traditional-seo'],
    tags: ['Future of Search', 'Strategy', 'AI Search', 'Trends'],
  },
];

// ─── Body Content ─────────────────────────────────────────────────────────────

function ArticleSection({ id, children }: { id: string; children: React.ReactNode }) {
  return <section id={id} className="mb-14 scroll-mt-24">{children}</section>;
}

function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 style={{ fontFamily: 'var(--font-playfair), Georgia, serif', fontSize: 'clamp(1.35rem, 2.5vw, 1.75rem)', fontWeight: 700, color: '#1C1917', letterSpacing: '-0.018em', marginBottom: '1rem', lineHeight: 1.2 }}>
      {children}
    </h2>
  );
}

function H3({ children }: { children: React.ReactNode }) {
  return (
    <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#1C1917', marginBottom: '0.625rem', marginTop: '1.5rem' }}>
      {children}
    </h3>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return (
    <p style={{ fontSize: '1rem', lineHeight: 1.8, color: '#3D3530', marginBottom: '1.125rem' }}>
      {children}
    </p>
  );
}

function Ul({ items }: { items: React.ReactNode[] }) {
  return (
    <ul style={{ margin: '1rem 0 1.5rem 0', paddingLeft: '1.25rem' }}>
      {items.map((item, i) => (
        <li key={i} style={{ fontSize: '1rem', lineHeight: 1.75, color: '#3D3530', marginBottom: '0.5rem', listStyleType: 'disc' }}>{item}</li>
      ))}
    </ul>
  );
}

function ComparisonTable({ headers, rows }: { headers: string[]; rows: string[][] }) {
  return (
    <div style={{ overflowX: 'auto', margin: '1.5rem 0 2rem' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
        <thead>
          <tr>
            {headers.map((h, i) => (
              <th key={i} style={{ padding: '0.75rem 1rem', textAlign: 'left', fontWeight: 700, color: '#1C1917', borderBottom: '2px solid #BF9B5C', background: 'rgba(191,155,92,0.06)', whiteSpace: 'nowrap' }}>
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr key={ri} style={{ borderBottom: '1px solid rgba(28,25,23,0.07)' }}>
              {row.map((cell, ci) => (
                <td key={ci} style={{ padding: '0.75rem 1rem', color: '#3D3530', lineHeight: 1.6 }}>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Callout({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div style={{ borderLeft: '3px solid #BF9B5C', background: 'rgba(191,155,92,0.05)', padding: '1rem 1.25rem', margin: '1.75rem 0', borderRadius: '0 0.5rem 0.5rem 0' }}>
      <div style={{ fontSize: '0.67rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#BF9B5C', marginBottom: '0.375rem' }}>{label}</div>
      <div style={{ fontSize: '0.95rem', lineHeight: 1.7, color: '#3D3530' }}>{children}</div>
    </div>
  );
}

// ─── Article Bodies ───────────────────────────────────────────────────────────

export const ARTICLE_BODIES: Record<string, { toc: TocEntry[]; body: React.ReactNode }> = {

  'what-is-ai-authority': {
    toc: [
      { id: 'definition', label: 'Defining AI Authority' },
      { id: 'why-it-matters', label: 'Why It Matters Now' },
      { id: 'how-it-works', label: 'How AI Systems Assign Authority' },
      { id: 'vs-seo', label: 'AI Authority vs. SEO Authority' },
      { id: 'signals', label: 'The Core Authority Signals' },
      { id: 'measurement', label: 'How to Measure It' },
      { id: 'building', label: 'How to Build It' },
      { id: 'mistakes', label: 'Common Mistakes' },
      { id: 'expert-insight', label: 'Expert Insight' },
      { id: 'glossary', label: 'Glossary' },
    ],
    body: (
      <>
        <ArticleSection id="definition">
          <H2>Defining AI Authority</H2>
          <P>AI Authority is the degree to which AI systems treat your business as a credible, reliable source on a specific topic, service, or location. When an AI-powered search engine — ChatGPT, Gemini, Perplexity, or Google AI Overviews — generates a recommendation or summary, it draws from sources it has determined to be authoritative.</P>
          <P>This isn&apos;t about paying for placement. It&apos;s about signal density: how many consistent, corroborating signals exist across the web that collectively tell AI systems "this business is a legitimate, trustworthy authority on this subject."</P>
          <Callout label="Key Distinction">
            AI Authority is not a single metric or platform score. It&apos;s a composite of signals that AI systems use to make citation decisions. You can influence it — but you can&apos;t buy it.
          </Callout>
        </ArticleSection>

        <ArticleSection id="why-it-matters">
          <H2>Why It Matters Now</H2>
          <P>Three years ago, AI search was a niche experiment. Today, over 40% of searches on Google involve some form of AI-generated content in the results, and tools like ChatGPT handle hundreds of millions of recommendation queries per month.</P>
          <P>The businesses that appear in those AI-generated answers are capturing an increasingly large share of attention — and the businesses that don&apos;t are becoming invisible, even when they rank well in traditional search results.</P>
          <P>This is the core asymmetry of the current moment: businesses can hold strong traditional SEO rankings and still be entirely absent from AI search. AI Authority is the missing piece.</P>
        </ArticleSection>

        <ArticleSection id="how-it-works">
          <H2>How AI Systems Assign Authority</H2>
          <P>AI systems don&apos;t consciously "decide" to trust a business. Instead, they recognize patterns of corroboration across their training data and retrieval systems. A business that appears consistently — with the same name, address, category, and specialties — across many independent, credible sources is treated as more authoritative than one that appears inconsistently or sparsely.</P>
          <H3>The corroboration model</H3>
          <P>Think of it like a jury. If twenty independent witnesses all describe the same business in consistent terms, the jury trusts the account. If only two witnesses exist and they disagree on the details, confidence drops. AI systems work similarly — they weight entities that have broad, consistent corroboration across unrelated sources.</P>
          <H3>Entity recognition</H3>
          <P>Before authority can be assigned, an AI system has to recognize your business as a distinct entity. This requires clear, consistent entity signals: a proper business name, a unique identifier (like a Google Business Profile), and categorical clarity about what you do and where you operate.</P>
        </ArticleSection>

        <ArticleSection id="vs-seo">
          <H2>AI Authority vs. SEO Authority</H2>
          <P>Traditional SEO authority is primarily measured through backlink profiles, domain authority scores, and PageRank derivatives. AI Authority uses a partially overlapping but distinct signal set.</P>
          <ComparisonTable
            headers={['Dimension', 'SEO Authority', 'AI Authority']}
            rows={[
              ['Primary signal', 'Backlink quantity and quality', 'Entity corroboration and citation density'],
              ['Measurement', 'Domain Authority, PageRank', 'Share of Voice, Citation Coverage, Entity Accuracy'],
              ['Primary outcome', 'Higher ranked-link position', 'Cited in AI-generated answers'],
              ['Keyword role', 'Central to optimization', 'Secondary to entity and topic signals'],
              ['Structured data', 'Helpful for rich snippets', 'Critical for entity recognition'],
              ['Compounding effect', 'Slow; link building is ongoing', 'Faster once entity is established'],
            ]}
          />
          <P>Importantly, the two are not opposed. High SEO authority typically correlates with higher AI Authority — because backlinks and editorial coverage both contribute to the corroboration signal. But they&apos;re not identical, and optimizing for one doesn&apos;t guarantee the other.</P>
        </ArticleSection>

        <ArticleSection id="signals">
          <H2>The Core Authority Signals</H2>
          <Ul items={[
            <><strong>Knowledge Graph presence:</strong> Is your business represented in Google&apos;s Knowledge Graph with correct, complete attributes?</>,
            <><strong>Schema markup completeness:</strong> Does your website declare your entity, services, location, and credentials using structured schema.org vocabulary?</>,
            <><strong>Citation consistency:</strong> Does your business appear with the same NAP (Name, Address, Phone) across all major directories?</>,
            <><strong>Editorial coverage:</strong> Are you cited by authoritative third-party sources — news sites, industry publications, review platforms?</>,
            <><strong>Topical depth:</strong> Do you have authoritative content that covers your specialty in depth, rather than surface-level keyword pages?</>,
            <><strong>Authority Page clarity:</strong> Do you have a structured, AI-readable page that declares your complete business identity?</>,
          ]} />
        </ArticleSection>

        <ArticleSection id="measurement">
          <H2>How to Measure AI Authority</H2>
          <P>Unlike traditional SEO metrics, AI Authority doesn&apos;t have a single universal score. It&apos;s assessed through a combination of observable proxy metrics:</P>
          <H3>Share of Voice</H3>
          <P>When someone queries your service category in your location ("best real estate agent in Denver"), what percentage of AI-generated responses mention your business? This is your Share of Voice — the most direct measure of AI Authority in practice.</P>
          <H3>Citation Coverage</H3>
          <P>Across the major AI engines (ChatGPT, Gemini, Perplexity, Claude, Copilot), how often is your business cited when relevant queries are made? Tracking this across six or more engines gives you Citation Coverage.</P>
          <H3>Entity Accuracy</H3>
          <P>When AI systems do mention your business, do they describe it accurately? Incorrect location, wrong specialty, or outdated information indicates entity confusion — a signal problem, not an authority problem.</P>
          <H3>Knowledge Graph Completion</H3>
          <P>HeyPearl measures this as a percentage: how complete is your Knowledge Graph entry relative to a fully optimized benchmark? Each missing attribute is a gap where AI systems have to fill in blanks with potentially inaccurate information.</P>
        </ArticleSection>

        <ArticleSection id="building">
          <H2>How to Build AI Authority</H2>
          <P>Building AI Authority is a structured process, not a set of one-time optimizations. The core sequence:</P>
          <Ul items={[
            <><strong>1. Establish entity clarity.</strong> Ensure your business name, category, location, and specialty are declared consistently and unambiguously across all major platforms.</>,
            <><strong>2. Build structured data.</strong> Implement schema.org markup on your website that declares your entity, services, credentials, and location in machine-readable format.</>,
            <><strong>3. Create an Authority Page.</strong> A structured, AI-optimized page that serves as the definitive source of truth about your business identity.</>,
            <><strong>4. Expand your citation footprint.</strong> Get listed — accurately and consistently — across high-authority directories, review platforms, and relevant industry sources.</>,
            <><strong>5. Generate topical authority.</strong> Publish deep, authoritative content on your core specialty topics. AI systems weight sources with demonstrated expertise.</>,
            <><strong>6. Monitor and measure.</strong> Track your Share of Voice and Citation Coverage monthly. Gaps in AI recommendation are diagnosable and fixable.</>,
          ]} />
        </ArticleSection>

        <ArticleSection id="mistakes">
          <H2>Common Mistakes</H2>
          <Ul items={[
            'Assuming strong traditional SEO means strong AI visibility — they overlap but are not identical',
            'Inconsistent business name variations across directories (e.g., "ABC Realty" vs. "ABC Realty Group" vs. "ABC Real Estate")',
            'Missing or incomplete schema markup — leaving AI systems to guess your category and specialty',
            'Ignoring AI Authority until you notice a drop in leads — it compounds over time and gaps are costly to close',
            'Treating AI Authority as a one-time project rather than ongoing infrastructure maintenance',
          ]} />
        </ArticleSection>

        <ArticleSection id="expert-insight">
          <H2>Expert Insight</H2>
          <Callout label="From HeyPearl">
            The businesses we see winning in AI search aren&apos;t necessarily the most prominent in traditional SEO. They&apos;re the ones whose digital identity is the clearest. When AI systems encounter a well-structured entity with broad, consistent corroboration, they default to citing it — because it reduces the risk of an inaccurate recommendation. Clarity is the most underrated form of authority.
          </Callout>
        </ArticleSection>

        <ArticleSection id="glossary">
          <H2>Glossary</H2>
          <H3>AI Authority</H3>
          <P>The degree to which AI systems trust a business as a reliable source on a specific topic, service, or location.</P>
          <H3>Entity</H3>
          <P>A distinct, identifiable thing in the world — a business, person, place, or concept — that AI systems recognize as a discrete unit.</P>
          <H3>Knowledge Graph</H3>
          <P>A structured database of entities and their relationships. Google&apos;s Knowledge Graph is the most prominent example.</P>
          <H3>Share of Voice</H3>
          <P>The percentage of relevant AI-generated recommendations that mention your business, relative to your competitors.</P>
          <H3>Citation Coverage</H3>
          <P>How often your business is cited across the major AI search engines when relevant queries are made.</P>
          <H3>Entity Accuracy</H3>
          <P>Whether AI systems describe your business correctly — with accurate name, location, specialty, and attributes.</P>
        </ArticleSection>
      </>
    ),
  },

  'what-is-generative-engine-optimization': {
    toc: [
      { id: 'definition', label: 'What Is GEO?' },
      { id: 'why-now', label: 'Why GEO Matters Now' },
      { id: 'how-it-differs', label: 'How GEO Differs from SEO' },
      { id: 'engines', label: 'Which Engines GEO Targets' },
      { id: 'core-tactics', label: 'Core GEO Tactics' },
      { id: 'mistakes', label: 'Common Mistakes' },
      { id: 'expert-insight', label: 'Expert Insight' },
      { id: 'glossary', label: 'Glossary' },
    ],
    body: (
      <>
        <ArticleSection id="definition">
          <H2>What Is Generative Engine Optimization?</H2>
          <P>Generative Engine Optimization (GEO) is the discipline of structuring your business&apos;s online presence so that AI-powered search engines — tools that generate direct answers rather than ranked link lists — understand, trust, and recommend you.</P>
          <P>Where traditional SEO asks: "How do I rank higher on Google?" GEO asks: "How does my business get cited in AI-generated answers on ChatGPT, Gemini, Perplexity, Google AI Overviews, and similar systems?"</P>
          <P>The answer requires a different approach to content, technical signals, and authority building.</P>
        </ArticleSection>

        <ArticleSection id="why-now">
          <H2>Why GEO Matters Now</H2>
          <P>The shift is quantitative as well as qualitative. AI Overviews now appear on roughly 20% of all Google searches. ChatGPT processes over 100 million queries per day. Perplexity has grown from a niche tool to a mainstream research destination. The category of "AI search" is no longer an emerging trend — it&apos;s a dominant channel.</P>
          <P>And critically: the businesses that appear in AI-generated answers aren&apos;t always the ones with the highest traditional search rankings. There is a structural gap between SEO performance and AI visibility — and that gap is where competitive advantage lives right now.</P>
        </ArticleSection>

        <ArticleSection id="how-it-differs">
          <H2>How GEO Differs from SEO</H2>
          <ComparisonTable
            headers={['Aspect', 'Traditional SEO', 'GEO']}
            rows={[
              ['Goal', 'Rank in the top 10 links', 'Be cited in AI-generated answers'],
              ['Success metric', 'Click-through rate, position', 'Citation frequency, share of voice'],
              ['Primary focus', 'Keywords, backlinks', 'Entities, structured data, authority signals'],
              ['Content strategy', 'Keyword-targeted pages', 'Deep, citable, entity-linked content'],
              ['Technical foundation', 'Site speed, crawlability', 'Schema markup, entity clarity, knowledge graph'],
              ['Timeframe', 'Months to years', 'Weeks to months (if foundations are in place)'],
            ]}
          />
          <P>The two disciplines are complementary. GEO is not a replacement for SEO — it&apos;s an additional layer built on top of a strong SEO foundation. Sites with poor SEO fundamentals will struggle with GEO as well, since AI systems use many of the same authority signals as Google&apos;s ranking systems.</P>
        </ArticleSection>

        <ArticleSection id="engines">
          <H2>Which AI Engines GEO Targets</H2>
          <Ul items={[
            <><strong>Google AI Overviews:</strong> Appears above organic results for informational and many commercial queries. Draws heavily from Google&apos;s Knowledge Graph and indexed, schema-marked content.</>,
            <><strong>ChatGPT (with web browsing):</strong> Uses retrieval-augmented generation to pull real-time web content alongside training data. Entity clarity and high-authority source citations are the primary levers.</>,
            <><strong>Perplexity:</strong> A research-oriented AI engine that synthesizes multiple sources and displays them. Being cited in high-authority sources increases your appearance rate.</>,
            <><strong>Google Gemini:</strong> Similar to AI Overviews but with deeper conversational capability. Weighted heavily toward Google ecosystem signals.</>,
            <><strong>Microsoft Copilot:</strong> Powered by the same model family as ChatGPT, with integration into Bing&apos;s index. Bing presence is more relevant here than for ChatGPT-native queries.</>,
            <><strong>Claude (Anthropic):</strong> Primarily relies on training data; retrieval features are expanding. Topical depth and editorial authority are the main signals.</>,
          ]} />
        </ArticleSection>

        <ArticleSection id="core-tactics">
          <H2>Core GEO Tactics</H2>
          <H3>1. Entity establishment</H3>
          <P>Ensure your business exists as a recognized entity across the major AI knowledge systems. This means a complete, consistent Google Business Profile, Knowledge Graph presence, and Wikidata entry where applicable.</P>
          <H3>2. Schema markup implementation</H3>
          <P>Deploy comprehensive schema.org markup declaring your business type, services, location, credentials, and relationships. This is the primary technical language AI systems use to read structured information from your website.</P>
          <H3>3. Authority Page creation</H3>
          <P>Build a structured, AI-optimized page that declares your complete business identity in a format AI systems can parse and cite. This functions as the canonical source of truth about your business.</P>
          <H3>4. Citation footprint expansion</H3>
          <P>Ensure consistent, accurate representation across the directories, review platforms, and industry publications that AI systems use as corroborating sources. Each citation strengthens your entity&apos;s credibility.</P>
          <H3>5. Topical authority content</H3>
          <P>Publish deep, authoritative content on your core specialty. AI systems weight sources with demonstrated expertise — not just keyword relevance. Content that answers specific questions definitively is more likely to be cited than content that covers topics superficially.</P>
        </ArticleSection>

        <ArticleSection id="mistakes">
          <H2>Common Mistakes</H2>
          <Ul items={[
            'Treating GEO as a content quantity game — more pages doesn\'t mean more AI citations',
            'Ignoring schema markup because it\'s invisible to human visitors',
            'Having inconsistent business information across platforms — name variations and address discrepancies are among the most damaging signals',
            'Conflating GEO with PR or social media — editorial citations matter, but structured data matters more',
            'Expecting immediate results — GEO typically shows measurable improvement within 60-90 days, not overnight',
          ]} />
        </ArticleSection>

        <ArticleSection id="expert-insight">
          <H2>Expert Insight</H2>
          <Callout label="From HeyPearl">
            Most businesses we audit have the raw material for strong GEO performance — the expertise, the client results, the local presence. What&apos;s missing is structure. AI systems can&apos;t cite what they can&apos;t parse. The gap between a business that is cited frequently and one that isn&apos;t is often as simple as whether their identity is declared in a machine-readable way.
          </Callout>
        </ArticleSection>

        <ArticleSection id="glossary">
          <H2>Glossary</H2>
          <H3>Generative Engine Optimization (GEO)</H3>
          <P>The practice of structuring your online presence so AI-powered search engines understand, trust, and recommend your business in generated answers.</P>
          <H3>Retrieval-Augmented Generation (RAG)</H3>
          <P>A technique used by AI systems to supplement their training data with real-time retrieved content, improving accuracy and timeliness of responses.</P>
          <H3>Citation Frequency</H3>
          <P>How often your business is mentioned in AI-generated responses for relevant queries across AI search engines.</P>
          <H3>Schema Markup</H3>
          <P>Structured data code added to web pages that declares content in a standardized format (schema.org) that AI systems and search engines can read and interpret.</P>
        </ArticleSection>
      </>
    ),
  },

  'ai-search-vs-traditional-seo': {
    toc: [
      { id: 'overview', label: 'The Fundamental Shift' },
      { id: 'how-they-work', label: 'How Each System Works' },
      { id: 'comparison', label: 'Side-by-Side Comparison' },
      { id: 'what-carries-over', label: 'What Carries Over' },
      { id: 'what-changed', label: 'What Changed' },
      { id: 'measuring-success', label: 'Measuring Success' },
      { id: 'strategy', label: 'The Dual Strategy' },
      { id: 'mistakes', label: 'Common Mistakes' },
      { id: 'glossary', label: 'Glossary' },
    ],
    body: (
      <>
        <ArticleSection id="overview">
          <H2>The Fundamental Shift</H2>
          <P>Traditional search returns a list of ranked links. AI search returns a synthesized answer. This single difference cascades into an entirely different set of optimization strategies, success metrics, and competitive dynamics.</P>
          <P>For twenty years, the primary question for businesses was: "How do I rank higher so more people click on my link?" That question is still relevant — but it no longer captures the full picture. The emerging question is: "How does my business get cited when AI systems generate answers?"</P>
          <P>Understanding the difference precisely matters because the tactics that work for one don&apos;t fully translate to the other.</P>
        </ArticleSection>

        <ArticleSection id="how-they-work">
          <H2>How Each System Works</H2>
          <H3>Traditional SEO search</H3>
          <P>When you search on Google, a crawler-indexed database is queried, documents are ranked by PageRank and hundreds of other signals, and a list of the top results is returned as links. You click, visit the source, and get your information from the original page.</P>
          <H3>AI-generated search</H3>
          <P>When you search on ChatGPT or Perplexity, the system uses either training data (knowledge encoded during model training) or retrieval (live web fetch) or both. It synthesizes a direct answer from multiple sources, may or may not cite those sources explicitly, and returns a complete response — no click required.</P>
          <Callout label="Why This Changes Everything">
            In traditional search, getting your link in position 1 almost guarantees a significant share of traffic. In AI search, even if your business is the source being synthesized, the user may never visit your site. The competitive battlefield shifts from "rank to get clicks" to "be the source AI systems cite."
          </Callout>
        </ArticleSection>

        <ArticleSection id="comparison">
          <H2>Side-by-Side Comparison</H2>
          <ComparisonTable
            headers={['Factor', 'Traditional SEO', 'AI Search']}
            rows={[
              ['Result format', 'Ranked links (10 blue links)', 'Synthesized answer with optional citations'],
              ['User behavior', 'Click through to source', 'Read answer inline; may not click'],
              ['Primary metric', 'Organic click-through rate', 'Citation frequency, share of voice'],
              ['Keyword role', 'Central ranking factor', 'Less important than entity and topic signals'],
              ['Backlinks', 'Primary authority signal', 'Contributes to authority but not the sole signal'],
              ['Structured data', 'Nice to have (rich snippets)', 'Essential for entity recognition and citation'],
              ['Content depth', 'Keyword coverage', 'Authoritative answers to specific questions'],
              ['Personalization', 'Location, search history', 'Conversational context, prior queries'],
              ['Update frequency', 'Crawl cycle (days to weeks)', 'Real-time (with retrieval); or training cutoff'],
              ['Measurement tools', 'Google Search Console, Ahrefs', 'Manual query testing, custom monitoring'],
            ]}
          />
        </ArticleSection>

        <ArticleSection id="what-carries-over">
          <H2>What Carries Over from Traditional SEO</H2>
          <Ul items={[
            <><strong>Domain authority:</strong> High-authority domains are more likely to be indexed and retrieved by AI systems. Strong backlink profiles still signal credibility.</>,
            <><strong>Technical health:</strong> Fast, crawlable, well-structured sites perform better in AI retrieval as well as traditional indexing.</>,
            <><strong>Content quality:</strong> Thin, low-quality content is weighted negatively in both systems. Deep, expert content is rewarded in both.</>,
            <><strong>E-E-A-T signals:</strong> Experience, Expertise, Authoritativeness, and Trustworthiness signals developed for Google are highly relevant to AI Authority as well.</>,
            <><strong>Local signals:</strong> NAP consistency, Google Business Profile completeness, and review authority all carry over.</>,
          ]} />
        </ArticleSection>

        <ArticleSection id="what-changed">
          <H2>What Has Fundamentally Changed</H2>
          <Ul items={[
            <><strong>Position #1 is no longer the destination:</strong> In AI search, being cited matters more than being ranked highest. A business in position #6 that has better entity clarity may be cited more often than the #1 result.</>,
            <><strong>Keywords are secondary to entities:</strong> AI systems understand "real estate agent in Seattle" as an entity query, not a keyword string. The optimization target changes accordingly.</>,
            <><strong>Clicks are no longer the primary success signal:</strong> A business can be the most-cited source in AI search and receive zero direct clicks from it — but capture the conversion offline or through brand recall.</>,
            <><strong>Structured data is now essential:</strong> Schema markup was optional for traditional SEO (helpful for rich snippets). For AI search, it&apos;s the primary mechanism by which AI systems declare entity understanding.</>,
          ]} />
        </ArticleSection>

        <ArticleSection id="measuring-success">
          <H2>Measuring Success in Each System</H2>
          <H3>Traditional SEO metrics</H3>
          <Ul items={[
            'Organic search position (average position)',
            'Organic click-through rate',
            'Organic traffic volume',
            'Domain Authority / DR',
            'Keyword rankings',
          ]} />
          <H3>AI search metrics</H3>
          <Ul items={[
            'Share of Voice (% of AI responses that cite you)',
            'Citation Coverage (how many AI engines cite you)',
            'Entity Accuracy (whether AI descriptions are correct)',
            'Knowledge Graph Completion score',
            'Recommendation Frequency by query category',
          ]} />
        </ArticleSection>

        <ArticleSection id="strategy">
          <H2>The Dual Strategy</H2>
          <P>The answer isn&apos;t to abandon SEO for GEO. Strong traditional SEO remains foundational — it builds domain authority, generates the backlinks that contribute to AI corroboration, and drives traffic from users who prefer traditional search.</P>
          <P>The dual strategy looks like this:</P>
          <Ul items={[
            'Maintain and improve traditional SEO fundamentals (technical health, content quality, backlink acquisition)',
            'Layer GEO on top: entity establishment, schema markup, Authority Pages, citation footprint expansion',
            'Measure both systems with appropriate metrics — don\'t apply SEO metrics to AI search performance',
            'Prioritize GEO investment now, while the gap between SEO leaders and AI visibility leaders is still bridgeable',
          ]} />
        </ArticleSection>

        <ArticleSection id="mistakes">
          <H2>Common Mistakes</H2>
          <Ul items={[
            'Assuming SEO rankings directly translate to AI visibility — they correlate but don\'t determine',
            'Measuring AI search success with SEO metrics (clicks, position) — wrong measurement for the right activity',
            'Treating them as competing strategies rather than complementary layers',
            'Waiting for AI search to "mature" before investing — the compounding nature of AI Authority means early movers maintain structural advantages',
          ]} />
        </ArticleSection>

        <ArticleSection id="glossary">
          <H2>Glossary</H2>
          <H3>PageRank</H3>
          <P>Google&apos;s original algorithm for ranking web pages based on the quantity and quality of inbound links. Still a significant factor in traditional SEO.</P>
          <H3>Retrieval-Augmented Generation (RAG)</H3>
          <P>AI technique combining trained model knowledge with real-time web retrieval to produce more accurate, current answers.</P>
          <H3>E-E-A-T</H3>
          <P>Experience, Expertise, Authoritativeness, Trustworthiness — Google&apos;s quality signals framework, increasingly relevant to AI visibility as well.</P>
          <H3>Share of Voice</H3>
          <P>In AI search context: the percentage of relevant AI-generated responses that mention your business, relative to the total relevant responses generated.</P>
        </ArticleSection>
      </>
    ),
  },

  'how-chatgpt-chooses-businesses-to-recommend': {
    toc: [
      { id: 'overview', label: 'How ChatGPT Recommends' },
      { id: 'training-vs-retrieval', label: 'Training Data vs. Retrieval' },
      { id: 'entity-recognition', label: 'Entity Recognition' },
      { id: 'local-queries', label: 'Local Business Queries' },
      { id: 'signals', label: 'What Signals Matter' },
      { id: 'what-doesnt-work', label: 'What Doesn\'t Work' },
      { id: 'improving', label: 'How to Improve Your Chances' },
      { id: 'glossary', label: 'Glossary' },
    ],
    body: (
      <>
        <ArticleSection id="overview">
          <H2>How ChatGPT Recommends Businesses</H2>
          <P>When someone asks ChatGPT to recommend a real estate agent, a plumber, or an accountant, the model doesn&apos;t browse Google and return a ranked list. It synthesizes a response from a combination of sources depending on how the model is configured and what query is asked.</P>
          <P>Understanding this process — and how it determines which specific businesses are mentioned — is the first step to influencing it.</P>
        </ArticleSection>

        <ArticleSection id="training-vs-retrieval">
          <H2>Training Data vs. Real-Time Retrieval</H2>
          <H3>Training data (base knowledge)</H3>
          <P>ChatGPT&apos;s base models are trained on large corpora of internet text with a knowledge cutoff date. Businesses that appeared frequently and consistently in this training data — through news coverage, directory listings, reviews, and editorial mentions — are more likely to be recognized and recommended from base knowledge alone.</P>
          <P>This is why older, well-established businesses with broad editorial presence have an inherent advantage in ChatGPT&apos;s base knowledge — but it also means that newly established businesses or those with sparse digital footprints may not appear at all.</P>
          <H3>Real-time retrieval (web browsing)</H3>
          <P>When ChatGPT has web browsing enabled (as in ChatGPT Plus with the browsing tool), it can fetch current web content to supplement its training knowledge. In this mode, the signals shift toward real-time web authority: what structured data exists on the business&apos;s website, what high-authority sources currently say about the business, and what retrieval-based corroboration exists.</P>
          <Callout label="Which Mode Applies?">
            Most ChatGPT users interact with the default browsing-enabled version. For GEO purposes, optimizing for retrieval-based signals is typically more actionable than trying to influence training data — which has a cutoff date and cannot be directly updated.
          </Callout>
        </ArticleSection>

        <ArticleSection id="entity-recognition">
          <H2>Entity Recognition: The Gate Before Recommendation</H2>
          <P>Before ChatGPT can recommend a business, it has to recognize it as a distinct entity. A business that is represented inconsistently — different names across platforms, varying addresses, unclear category signals — may not be recognized reliably enough to be cited confidently.</P>
          <P>The entity recognition process relies on corroboration: the more independent, consistent sources that describe a business in the same terms, the more confidently the model recognizes it as a discrete entity it can recommend without risk of error.</P>
        </ArticleSection>

        <ArticleSection id="local-queries">
          <H2>How Local Business Queries Work</H2>
          <P>Local business recommendation queries ("best realtor in Austin") are among the most common and high-stakes in ChatGPT. The model handles them differently from general knowledge queries:</P>
          <Ul items={[
            'Location signals from the query are matched against known business locations',
            'Specialty and category signals ("realtor" vs. "real estate agent" vs. "buyer\'s agent") affect entity matching',
            'Review platform data from Yelp, Google, Zillow (for real estate), etc. contributes to the recommendation pool',
            'Businesses with presence in multiple authoritative directories are more likely to appear',
            'Award mentions, press coverage, and editorial citations act as authority amplifiers',
          ]} />
        </ArticleSection>

        <ArticleSection id="signals">
          <H2>What Signals Matter Most</H2>
          <ComparisonTable
            headers={['Signal', 'Impact', 'Why']}
            rows={[
              ['Editorial citations (news, publications)', 'High', 'Third-party validation from authoritative sources'],
              ['Review platform presence (Google, Yelp)', 'High', 'Corroborating entity data from trusted platforms'],
              ['Consistent NAP across directories', 'High', 'Entity disambiguation and recognition'],
              ['Schema markup on website', 'Medium-High', 'Machine-readable entity declaration'],
              ['Wikipedia / Wikidata presence', 'Medium', 'Highly weighted "reliable" sources in training data'],
              ['Social media profiles', 'Low-Medium', 'Corroborating but not primary authority signals'],
              ['Keyword-optimized landing pages', 'Low', 'Traditional SEO signal, low weight in AI systems'],
            ]}
          />
        </ArticleSection>

        <ArticleSection id="what-doesnt-work">
          <H2>What Doesn&apos;t Work</H2>
          <Ul items={[
            'Paying for "ChatGPT ranking" services — there is no pay-to-appear mechanism in ChatGPT recommendations',
            'Keyword stuffing on websites — AI systems don\'t weight keyword density as a recommendation signal',
            'Generating fake reviews — AI systems aggregate review signals, and fake reviews create inconsistency that reduces reliability',
            'Creating many thin, AI-generated content pages — these don\'t build genuine authority and may be weighted negatively',
          ]} />
        </ArticleSection>

        <ArticleSection id="improving">
          <H2>How to Improve Your Recommendation Probability</H2>
          <Ul items={[
            <><strong>Establish consistent entity signals</strong> across all major directories, review platforms, and your own website</>,
            <><strong>Build editorial citations</strong> through press coverage, industry publications, and authoritative third-party mentions</>,
            <><strong>Implement comprehensive schema markup</strong> that declares your entity, services, location, and credentials</>,
            <><strong>Maintain accurate, detailed profiles</strong> on the platforms AI systems draw from: Google Business, Yelp, industry-specific directories</>,
            <><strong>Create authoritative, citable content</strong> on your specialty topics — content that answers specific questions definitively</>,
          ]} />
        </ArticleSection>

        <ArticleSection id="glossary">
          <H2>Glossary</H2>
          <H3>Large Language Model (LLM)</H3>
          <P>The AI model type underlying ChatGPT and similar tools, trained on large text corpora to generate human-like text responses.</P>
          <H3>Knowledge Cutoff</H3>
          <P>The date after which no new information was incorporated into an AI model&apos;s training data. Events and changes after this date aren&apos;t reflected in base model knowledge.</P>
          <H3>Entity Disambiguation</H3>
          <P>The process by which AI systems distinguish between similarly named entities — e.g., "Apple Inc." vs. "Apple Records" — using contextual and structural signals.</P>
        </ArticleSection>
      </>
    ),
  },

  'understanding-google-ai-overviews': {
    toc: [
      { id: 'what-they-are', label: 'What Are AI Overviews?' },
      { id: 'how-they-work', label: 'How They Work' },
      { id: 'what-they-cite', label: 'What Sources Get Cited' },
      { id: 'optimization', label: 'Optimization Strategy' },
      { id: 'comparison', label: 'AI Overviews vs. Featured Snippets' },
      { id: 'measurement', label: 'Measuring Your Presence' },
      { id: 'mistakes', label: 'Common Mistakes' },
      { id: 'glossary', label: 'Glossary' },
    ],
    body: (
      <>
        <ArticleSection id="what-they-are">
          <H2>What Are Google AI Overviews?</H2>
          <P>Google AI Overviews are AI-generated summaries that appear at the top of Google search results for certain query types. They synthesize information from multiple web sources into a direct answer, with expandable citations below.</P>
          <P>Introduced broadly in 2024 and expanded significantly through 2025-2026, AI Overviews now appear on hundreds of millions of queries per day — covering informational, how-to, and increasingly commercial and local intent queries.</P>
        </ArticleSection>

        <ArticleSection id="how-they-work">
          <H2>How AI Overviews Work</H2>
          <P>AI Overviews are powered by Google&apos;s Gemini models combined with Google&apos;s search index and Knowledge Graph. Unlike ChatGPT, which uses external sources, AI Overviews draw from Google&apos;s own indexed content — weighted by Google&apos;s existing authority signals.</P>
          <P>The generation process:</P>
          <Ul items={[
            'Query is analyzed for intent (informational, commercial, local)',
            'Relevant documents from Google\'s index are retrieved and ranked',
            'AI model synthesizes a response from the highest-quality, most authoritative sources',
            'Citations are selected from the synthesized sources and displayed below the answer',
          ]} />
          <Callout label="Key Difference from Traditional Ranking">
            AI Overviews don&apos;t simply cite the #1 ranked result. They select the most citable content from across the results — meaning a page ranked 4th or 5th might be cited in the Overview if it contains the clearest, most structured answer.
          </Callout>
        </ArticleSection>

        <ArticleSection id="what-they-cite">
          <H2>What Sources Get Cited</H2>
          <P>Google&apos;s pattern of AI Overview citation correlates with:</P>
          <Ul items={[
            <><strong>Structured data presence:</strong> Pages with complete, accurate schema markup are significantly more likely to be synthesized</>,
            <><strong>E-E-A-T signals:</strong> Experience, Expertise, Authoritativeness, and Trustworthiness indicators — author credentials, citations, and editorial standards</>,
            <><strong>Direct question answering:</strong> Pages that directly answer the query question in clear, parsable language</>,
            <><strong>Knowledge Graph integration:</strong> Entities that are registered in Google&apos;s Knowledge Graph with complete attributes</>,
            <><strong>Domain authority:</strong> High-authority domains have a baseline advantage, though it&apos;s not deterministic</>,
          ]} />
        </ArticleSection>

        <ArticleSection id="optimization">
          <H2>Optimization Strategy</H2>
          <H3>Implement comprehensive schema markup</H3>
          <P>Schema.org markup is the clearest signal you can send to Google about what your content contains. For business pages, this includes LocalBusiness, Service, FAQPage, and relevant specialty schemas.</P>
          <H3>Structure content for direct answers</H3>
          <P>AI Overviews prefer content with clear, concise answers near the top of the page. Add a summary or "quick answer" section at the beginning of important pages. Use headers that mirror likely query phrasing.</P>
          <H3>Build Knowledge Graph presence</H3>
          <P>Complete your Google Business Profile, ensure consistent NAP across directories, and where applicable, create a Wikidata entity. These all contribute to Knowledge Graph completeness, which Google uses as an authoritative source in AI Overview generation.</P>
          <H3>Demonstrate E-E-A-T</H3>
          <P>Add author bio pages with credentials, cite sources in your content, get editorial coverage in authoritative publications, and display credentials and certifications prominently.</P>
        </ArticleSection>

        <ArticleSection id="comparison">
          <H2>AI Overviews vs. Featured Snippets</H2>
          <ComparisonTable
            headers={['Aspect', 'Featured Snippets', 'AI Overviews']}
            rows={[
              ['Source', 'Single source, verbatim excerpt', 'Synthesized from multiple sources'],
              ['Citation', 'One source cited', 'Multiple sources cited (expandable)'],
              ['Generation', 'Algorithmic extraction', 'AI-generated synthesis'],
              ['User action', 'Often click through', 'Often read inline, lower CTR'],
              ['Optimization', 'Target specific query phrases', 'Build entity clarity and citable content'],
              ['Query types', 'Definition, how-to queries', 'Broader — informational, commercial, local'],
            ]}
          />
        </ArticleSection>

        <ArticleSection id="measurement">
          <H2>Measuring Your AI Overview Presence</H2>
          <P>Google Search Console now includes some AI Overview data for queries where your site is cited. Beyond that, manual monitoring involves regularly querying your key service terms and tracking whether your business or content appears in the generated overview.</P>
          <P>Track three dimensions:</P>
          <Ul items={[
            'Citation frequency: how often your content is cited across your priority queries',
            'Citation accuracy: whether the AI accurately represents your content when citing it',
            'Query coverage: which of your target queries trigger AI Overviews, and which don\'t',
          ]} />
        </ArticleSection>

        <ArticleSection id="mistakes">
          <H2>Common Mistakes</H2>
          <Ul items={[
            'Optimizing only for position #1 — AI Overviews often cite sources ranked 3rd through 10th',
            'Ignoring schema markup because existing pages rank well organically',
            'Creating content designed to manipulate AI Overviews with artificial structure — Google updates catch this quickly',
            'Not monitoring AI Overview appearances for accuracy — misrepresentation in AI Overviews can damage brand perception',
          ]} />
        </ArticleSection>

        <ArticleSection id="glossary">
          <H2>Glossary</H2>
          <H3>AI Overview</H3>
          <P>Google&apos;s AI-generated answer box that appears at the top of search results, synthesizing information from multiple sources.</P>
          <H3>Featured Snippet</H3>
          <P>Google&apos;s pre-AI answer box that extracts a verbatim excerpt from a single source and displays it above organic results.</P>
          <H3>E-E-A-T</H3>
          <P>Google&apos;s quality framework: Experience, Expertise, Authoritativeness, Trustworthiness. Key signals for AI Overview citation eligibility.</P>
        </ArticleSection>
      </>
    ),
  },

  'knowledge-graphs-explained': {
    toc: [
      { id: 'what-is-a-knowledge-graph', label: 'What Is a Knowledge Graph?' },
      { id: 'google-knowledge-graph', label: 'Google\'s Knowledge Graph' },
      { id: 'how-your-business-appears', label: 'How Your Business Appears' },
      { id: 'building-presence', label: 'Building Knowledge Graph Presence' },
      { id: 'completion-score', label: 'Knowledge Graph Completion' },
      { id: 'mistakes', label: 'Common Mistakes' },
      { id: 'glossary', label: 'Glossary' },
    ],
    body: (
      <>
        <ArticleSection id="what-is-a-knowledge-graph">
          <H2>What Is a Knowledge Graph?</H2>
          <P>A knowledge graph is a structured database of entities — real-world things like businesses, people, places, and concepts — and the relationships between them. It represents the world not as a collection of documents, but as a network of facts.</P>
          <P>A simple example: the knowledge graph knows that "HeyPearl" is a company, founded in Seattle, that provides AI Authority services, which is a type of digital marketing service. Each piece of information is a fact, and each relationship between entities is an edge in the graph.</P>
          <P>This structure lets AI systems answer questions like "What does HeyPearl do?" or "Which AI marketing companies are in Seattle?" by traversing the graph — not by searching keywords.</P>
        </ArticleSection>

        <ArticleSection id="google-knowledge-graph">
          <H2>Google&apos;s Knowledge Graph</H2>
          <P>Google&apos;s Knowledge Graph is the most consequential knowledge graph for most businesses. It powers the Knowledge Panels that appear when you search for a business or person, contributes directly to AI Overview generation, and forms the factual backbone of Google Gemini&apos;s responses.</P>
          <P>Google&apos;s Knowledge Graph contains billions of entities drawn from a combination of sources:</P>
          <Ul items={[
            'Wikidata and Wikipedia (highest authority)',
            'Google Business Profiles',
            'Official business websites with schema markup',
            'High-authority third-party sources (Crunchbase, LinkedIn, industry directories)',
            'Consistent signals across the broader web',
          ]} />
        </ArticleSection>

        <ArticleSection id="how-your-business-appears">
          <H2>How Your Business Appears in Knowledge Graphs</H2>
          <P>Your business enters a knowledge graph through a process of entity recognition: Google&apos;s systems identify that a distinct, real entity exists based on corroborating signals across multiple sources.</P>
          <P>The richness of your knowledge graph entry depends on how complete and consistent those signals are. A business with a full Google Business Profile, a detailed website with schema markup, Wikidata presence, and broad directory coverage will have a more complete knowledge graph entry than one with only a Google Business Profile.</P>
          <H3>What a complete entry looks like</H3>
          <Ul items={[
            'Business name (exact, consistent)',
            'Business category and sub-category',
            'Physical address and service area',
            'Phone number, website, email',
            'Operating hours',
            'Services offered (with descriptions)',
            'Credentials and certifications',
            'Founding date and history',
            'Key personnel (founders, agents, etc.)',
            'Reviews and rating aggregate',
            'Associated entities (parent company, related businesses)',
          ]} />
        </ArticleSection>

        <ArticleSection id="building-presence">
          <H2>Building Knowledge Graph Presence</H2>
          <H3>Start with Google Business Profile</H3>
          <P>A complete, verified Google Business Profile is the most direct path to Knowledge Graph entry for most local businesses. Every field matters — categories, services, attributes, photos, and posts all contribute to completeness.</P>
          <H3>Implement schema.org markup</H3>
          <P>On your website, implement LocalBusiness (or more specific types like RealEstateAgent or MedicalBusiness) schema markup with all relevant attributes. This is the technical bridge between your website and your knowledge graph entry.</P>
          <H3>Build Wikidata presence</H3>
          <P>For businesses with sufficient notability, a Wikidata entity is a high-value addition. Wikidata is a primary source for Google&apos;s Knowledge Graph. Entries should be factual, sourced, and maintained.</P>
          <H3>Expand directory presence</H3>
          <P>Each consistent mention of your business across authoritative directories (Yelp, LinkedIn, industry-specific platforms) adds corroboration to your entity, strengthening the knowledge graph signal.</P>
        </ArticleSection>

        <ArticleSection id="completion-score">
          <H2>Knowledge Graph Completion Score</H2>
          <P>HeyPearl measures Knowledge Graph Completion as a percentage: what proportion of a fully-optimized knowledge graph entry does your business currently have?</P>
          <P>A typical audit reveals:</P>
          <Ul items={[
            '90%+ completion: strong entity presence, minimal AI citation risk',
            '70-89% completion: some gaps that create citation uncertainty',
            '50-69% completion: significant gaps; AI systems may default to competitors',
            'Below 50%: entity may not be reliably recognized; recommendation probability is low',
          ]} />
          <P>The specific gaps that matter most are often small: a missing business category on a key directory, inconsistent phone number format, or absent schema markup on a key service page.</P>
        </ArticleSection>

        <ArticleSection id="mistakes">
          <H2>Common Mistakes</H2>
          <Ul items={[
            'Different business names across platforms ("Smith Realty" vs. "Smith Realty Group" vs. "The Smith Group")',
            'Outdated address information on older directory listings',
            'No schema markup, or schema that contradicts Google Business Profile data',
            'Missing service descriptions — just listing "Real Estate" instead of specific service types',
            'Ignoring employee/agent profiles that contribute to the entity\'s relationship graph',
          ]} />
        </ArticleSection>

        <ArticleSection id="glossary">
          <H2>Glossary</H2>
          <H3>Knowledge Graph</H3>
          <P>A structured database representing entities and their relationships as interconnected facts, used by AI systems to understand the real world.</P>
          <H3>Knowledge Panel</H3>
          <P>The Google-generated information panel that appears in search results for recognized entities, drawn from the Knowledge Graph.</P>
          <H3>Wikidata</H3>
          <P>A free, collaborative knowledge base that serves as a primary factual source for Wikipedia, Google, and other AI systems.</P>
          <H3>Entity</H3>
          <P>A distinct, identifiable real-world thing — a business, person, place, or concept — that knowledge graphs represent as a node with attributes and relationships.</P>
        </ArticleSection>
      </>
    ),
  },

  'entity-seo-explained': {
    toc: [
      { id: 'what-is-entity-seo', label: 'What Is Entity SEO?' },
      { id: 'entities-vs-keywords', label: 'Entities vs. Keywords' },
      { id: 'your-business-as-entity', label: 'Your Business as an Entity' },
      { id: 'schema-markup', label: 'Schema Markup: The Technical Layer' },
      { id: 'disambiguation', label: 'Entity Disambiguation' },
      { id: 'implementation', label: 'Implementation Roadmap' },
      { id: 'mistakes', label: 'Common Mistakes' },
      { id: 'glossary', label: 'Glossary' },
    ],
    body: (
      <>
        <ArticleSection id="what-is-entity-seo">
          <H2>What Is Entity SEO?</H2>
          <P>Entity SEO is the practice of optimizing your digital presence around real-world entities — distinct, identifiable things — rather than keyword strings. It&apos;s the shift from "how do I rank for this phrase?" to "how does Google understand what my business actually is?"</P>
          <P>Modern AI systems, including Google&apos;s search engine and generative AI tools, primarily understand the world through entities and their relationships. A business that is clearly established as an entity — with consistent signals, proper schema declaration, and broad corroboration — is more visible to AI systems than one optimized only for keyword matching.</P>
        </ArticleSection>

        <ArticleSection id="entities-vs-keywords">
          <H2>Entities vs. Keywords: A Precise Distinction</H2>
          <ComparisonTable
            headers={['Keywords', 'Entities']}
            rows={[
              ['"best real estate agent Austin"', 'Jane Smith, Realtor (person entity)'],
              ['"Austin luxury homes for sale"', 'Austin, Texas (place entity)'],
              ['"5-star real estate brokerage"', 'Premier Realty Group (organization entity)'],
              ['"buyer\'s agent services"', 'Buyer\'s Agency (concept entity)'],
            ]}
          />
          <P>A keyword is a string of text. An entity is a thing in the world that the text refers to. When Google understands that "Jane Smith Realtor" is a specific, identifiable person (entity) who operates as a real estate agent (category) in Austin, Texas (location), it can answer questions about her with much greater confidence than if it&apos;s only matching keyword strings.</P>
        </ArticleSection>

        <ArticleSection id="your-business-as-entity">
          <H2>Establishing Your Business as an Entity</H2>
          <P>For AI systems to recommend your business, they first need to recognize it as a distinct entity. This requires:</P>
          <H3>Consistent identity signals</H3>
          <P>Your business name, address, phone number, and category should be identical across every platform where you appear. Variations create entity ambiguity — AI systems may not be confident enough to recommend a business they can&apos;t reliably identify.</P>
          <H3>Category and sub-category clarity</H3>
          <P>What type of entity are you? A business (LocalBusiness), a professional service (ProfessionalService), a real estate agent (RealEstateAgent)? The more precisely your category is declared, the more accurately AI systems understand where to recommend you.</P>
          <H3>Attribute completeness</H3>
          <P>Beyond the basics, entity attributes include: services offered, credentials, years in operation, geographic service area, key personnel, languages spoken, accessibility features, and payment methods. Each attribute reduces ambiguity and increases recommendation confidence.</P>
        </ArticleSection>

        <ArticleSection id="schema-markup">
          <H2>Schema Markup: The Technical Layer</H2>
          <P>Schema.org markup is the standardized vocabulary for declaring entities on the web. It&apos;s how your website communicates to AI systems in their native language: structured, machine-readable facts about what your business is, does, and offers.</P>
          <H3>Essential schema types for most businesses</H3>
          <Ul items={[
            <><strong>LocalBusiness</strong> (or more specific type) — the foundational entity declaration</>,
            <><strong>Organization</strong> — for company-level attributes (founding date, employees, social profiles)</>,
            <><strong>Service</strong> — for each service you offer, with descriptions and areas</>,
            <><strong>Review / AggregateRating</strong> — for displaying and attributing reviews</>,
            <><strong>FAQPage</strong> — for structured Q&amp;A content that AI systems can cite directly</>,
            <><strong>Person</strong> — for key personnel (founders, agents, practitioners)</>,
          ]} />
        </ArticleSection>

        <ArticleSection id="disambiguation">
          <H2>Entity Disambiguation</H2>
          <P>Disambiguation is the process of distinguishing your entity from others with similar names or characteristics. It&apos;s a frequently overlooked but critical aspect of entity SEO.</P>
          <P>Common disambiguation challenges:</P>
          <Ul items={[
            'Business name matches a competitor, a different company in another city, or a well-known brand',
            'Personal name (for agent or practitioner brands) matches other professionals with the same name',
            'Service category is so broad that AI systems don\'t distinguish your specialty from generic providers',
          ]} />
          <P>The solution is specificity: the more precisely your entity is declared across all signals, the less likely AI systems are to confuse you with a different entity.</P>
        </ArticleSection>

        <ArticleSection id="implementation">
          <H2>Implementation Roadmap</H2>
          <Ul items={[
            <><strong>Week 1:</strong> Audit entity consistency across all platforms — Google Business, Yelp, industry directories, social profiles. Identify and correct all name, address, and category discrepancies.</>,
            <><strong>Week 2-3:</strong> Implement LocalBusiness schema on your website homepage and key service pages. Add Person schema for key personnel. Add Service schema for your core offerings.</>,
            <><strong>Week 4:</strong> Create or update Wikidata entry if your business meets notability criteria. Build or optimize your Google Knowledge Panel.</>,
            <><strong>Month 2:</strong> Expand to FAQPage schema on relevant content pages. Add AggregateRating schema linked to review sources.</>,
            <><strong>Ongoing:</strong> Monitor entity accuracy in AI responses. Update schema when business information changes. Track Knowledge Graph Completion score monthly.</>,
          ]} />
        </ArticleSection>

        <ArticleSection id="mistakes">
          <H2>Common Mistakes</H2>
          <Ul items={[
            'Implementing schema only on the homepage and ignoring service pages',
            'Using outdated schema types (many practitioners still use the deprecated LocalBusiness sub-types incorrectly)',
            'Having schema that contradicts actual page content — Google may ignore or penalize inconsistent schema',
            'Declaring too broad a category — "Business" instead of "RealEstateAgent" gives AI systems less to work with',
            'Forgetting to update schema when business information changes (address, phone, services)',
          ]} />
        </ArticleSection>

        <ArticleSection id="glossary">
          <H2>Glossary</H2>
          <H3>Entity</H3>
          <P>A distinct, identifiable real-world thing — a business, person, place, or concept — that AI systems recognize as a discrete unit.</P>
          <H3>Schema.org</H3>
          <P>A collaborative vocabulary for structuring data on the web, maintained by Google, Microsoft, Yahoo, and Yandex. The primary technical standard for entity declaration.</P>
          <H3>Structured Data</H3>
          <P>Data organized in a standardized format (typically JSON-LD or Microdata) that machines can parse and interpret reliably.</P>
          <H3>Entity Disambiguation</H3>
          <P>The process of providing signals that allow AI systems to distinguish one entity from similarly named or categorized entities.</P>
        </ArticleSection>
      </>
    ),
  },

  'authority-pages-explained': {
    toc: [
      { id: 'what-is-an-authority-page', label: 'What Is an Authority Page?' },
      { id: 'vs-about-page', label: 'vs. a Standard About Page' },
      { id: 'anatomy', label: 'Anatomy of an Authority Page' },
      { id: 'ai-readability', label: 'Designing for AI Readability' },
      { id: 'building-one', label: 'How to Build One' },
      { id: 'results', label: 'What to Expect' },
      { id: 'glossary', label: 'Glossary' },
    ],
    body: (
      <>
        <ArticleSection id="what-is-an-authority-page">
          <H2>What Is an Authority Page?</H2>
          <P>An Authority Page is a structured web page designed to communicate your complete business identity — who you are, what you do, where you operate, who you serve, and why you&apos;re credible — in a format that AI systems can read, parse, and confidently cite.</P>
          <P>It&apos;s the single most important AI visibility asset most businesses don&apos;t have. While almost every business has an "About" page, few have a page built to the specification AI systems need to reliably recommend them.</P>
        </ArticleSection>

        <ArticleSection id="vs-about-page">
          <H2>Authority Page vs. Standard About Page</H2>
          <ComparisonTable
            headers={['Standard About Page', 'Authority Page']}
            rows={[
              ['Written for human readers', 'Written for both human readers and AI systems'],
              ['Narrative, brand-voice copy', 'Structured declarations + supporting narrative'],
              ['Minimal or no schema markup', 'Comprehensive schema.org markup throughout'],
              ['No entity disambiguation signals', 'Explicit entity disambiguation (location, category, specialty)'],
              ['Credentials mentioned in text', 'Credentials declared in structured format and schema'],
              ['No connection to knowledge graph', 'Directly connected to GBP, Wikidata, directories'],
              ['One audience (human visitors)', 'Dual audience: humans + AI retrieval systems'],
            ]}
          />
        </ArticleSection>

        <ArticleSection id="anatomy">
          <H2>Anatomy of an Authority Page</H2>
          <H3>1. Entity declaration block</H3>
          <P>The opening section declares the entity unambiguously: your full legal business name, primary category, geographic service area, founding date, and unique identifier. This is the anchor for everything that follows.</P>
          <H3>2. Specialty and expertise signals</H3>
          <P>A structured list of your specific services, specialties, and the audiences you serve. The more precise, the better — "residential real estate" is weaker than "luxury residential buyer representation in the Austin metro area."</P>
          <H3>3. Credential and authority markers</H3>
          <P>Licenses, certifications, awards, memberships, and years of experience — declared in both human-readable text and schema markup.</P>
          <H3>4. Social proof corroboration</H3>
          <P>Review aggregates, notable clients (where appropriate), case study references, and editorial citations. These corroborate the authority claims in the preceding sections.</P>
          <H3>5. Contact and location data</H3>
          <P>Complete, consistent NAP data, service area, and availability — structured in schema and matching your Google Business Profile exactly.</P>
          <H3>6. Relationship signals</H3>
          <P>Links to and from your key platforms: Google Business Profile, industry associations, certifying bodies. These establish your entity within a broader trust network.</P>
        </ArticleSection>

        <ArticleSection id="ai-readability">
          <H2>Designing for AI Readability</H2>
          <P>An Authority Page is effective only if AI systems can parse it accurately. The key design principles:</P>
          <Ul items={[
            <><strong>Declarative clarity:</strong> State facts directly. "We serve buyers and sellers in the Austin metro area" is more parseable than "We&apos;re passionate about helping clients achieve their real estate dreams."</>,
            <><strong>Structural consistency:</strong> Use consistent heading hierarchy, labeled sections, and structured lists. AI systems parse structured content more reliably than narrative prose.</>,
            <><strong>Schema alignment:</strong> Every factual claim in the page body should be mirrored in schema markup. Inconsistency between text and schema confuses AI systems.</>,
            <><strong>Internal link structure:</strong> Link your Authority Page to your service pages, location pages, and team pages — and link back. This signals the topical and relational structure of your entity to crawlers.</>,
          ]} />
        </ArticleSection>

        <ArticleSection id="building-one">
          <H2>How to Build an Authority Page</H2>
          <Ul items={[
            <><strong>Step 1:</strong> Compile all your entity data — legal name, all doing-business-as names, all licenses and credentials, all service categories, all locations served</>,
            <><strong>Step 2:</strong> Write the declarative content — structured, fact-first sentences that an AI system can extract and cite accurately</>,
            <><strong>Step 3:</strong> Implement schema markup that mirrors the page content — at minimum LocalBusiness, Organization, and relevant specialty types</>,
            <><strong>Step 4:</strong> Cross-link to and from your GBP, key directories, and your website&apos;s other entity-rich pages</>,
            <><strong>Step 5:</strong> Test: query ChatGPT, Perplexity, and Google for your business — does the AI accurately describe you? If not, identify the gap and revise</>,
          ]} />
        </ArticleSection>

        <ArticleSection id="results">
          <H2>What to Expect</H2>
          <P>A well-built Authority Page typically shows measurable impact within 45-90 days:</P>
          <Ul items={[
            'Improved Knowledge Panel completeness (visible in Google search results)',
            'More accurate AI descriptions when your business is mentioned',
            'Increased citation frequency in Perplexity, ChatGPT, and Google AI Overviews',
            'Foundation for all subsequent GEO optimizations — it\'s the anchor point',
          ]} />
        </ArticleSection>

        <ArticleSection id="glossary">
          <H2>Glossary</H2>
          <H3>Authority Page</H3>
          <P>A structured web page designed to declare a business&apos;s complete identity in a format optimized for AI system comprehension and citation.</P>
          <H3>NAP</H3>
          <P>Name, Address, Phone — the core local business data that must be consistent across all platforms for entity recognition.</P>
          <H3>Schema Markup</H3>
          <P>Machine-readable structured data added to web pages to declare entities, content types, and relationships in a standardized vocabulary.</P>
        </ArticleSection>
      </>
    ),
  },

  'how-ai-search-changes-local-seo': {
    toc: [
      { id: 'the-shift', label: 'The Shift for Local Businesses' },
      { id: 'how-ai-handles-local', label: 'How AI Handles Local Queries' },
      { id: 'old-vs-new', label: 'Old Tactics vs. New Requirements' },
      { id: 'review-signals', label: 'Reviews as Authority Signals' },
      { id: 'nap-and-beyond', label: 'NAP and Beyond' },
      { id: 'local-strategy', label: 'Local AI Authority Strategy' },
      { id: 'mistakes', label: 'Common Mistakes' },
      { id: 'glossary', label: 'Glossary' },
    ],
    body: (
      <>
        <ArticleSection id="the-shift">
          <H2>The Shift for Local Businesses</H2>
          <P>For local businesses — real estate agents, service businesses, local retailers, medical practices — AI search represents both the biggest threat and the biggest opportunity of the current moment.</P>
          <P>The threat: "near me" and local recommendation queries are increasingly answered by AI systems that generate a response without directing the user to a map pack or a list of links. If your business isn&apos;t in that generated response, you may be invisible to a significant and growing portion of your target audience.</P>
          <P>The opportunity: local AI Authority is still relatively underdeveloped. Most local businesses haven&apos;t optimized for AI visibility — which means early movers can claim category-level authority before competitors do.</P>
        </ArticleSection>

        <ArticleSection id="how-ai-handles-local">
          <H2>How AI Handles Local Queries</H2>
          <P>When someone asks ChatGPT "Who&apos;s the best plumber in Nashville?" the system doesn&apos;t open Google Maps. It synthesizes from:</P>
          <Ul items={[
            'Training data: mentions of Nashville plumbers in reviews, articles, and directories that were in the training corpus',
            'Retrieval (if enabled): current review platform data, directory listings, and local press mentions',
            'Entity recognition: which Nashville plumbers have strong enough entity signals to be confidently cited',
          ]} />
          <P>The businesses that appear in these responses are not necessarily the top-rated or longest-established. They&apos;re the ones with the clearest, most consistent entity signals across the sources AI systems draw from.</P>
        </ArticleSection>

        <ArticleSection id="old-vs-new">
          <H2>Old Local SEO Tactics vs. New AI Requirements</H2>
          <ComparisonTable
            headers={['Old Local SEO Focus', 'AI Local Visibility Focus']}
            rows={[
              ['Google Maps pack ranking', 'AI-generated recommendation inclusion'],
              ['Review quantity for rankings', 'Review authority as entity corroboration'],
              ['Keyword-heavy location pages', 'Entity-clear location + service declarations'],
              ['Backlinks from local directories', 'Consistent entity signals across directories'],
              ['Google Business Profile completion', 'GBP + Knowledge Graph + schema + Wikidata'],
              ['One-time local citation building', 'Ongoing entity accuracy monitoring'],
            ]}
          />
        </ArticleSection>

        <ArticleSection id="review-signals">
          <H2>Reviews as Authority Signals, Not Just Reputation</H2>
          <P>In traditional local SEO, reviews primarily affected your map pack ranking. In AI search, reviews serve an additional function: they&apos;re data points that AI systems use to understand what your business does, who it serves, and what distinguishes it from competitors.</P>
          <P>A business with 200 detailed, specific reviews that mention services, locations, and specialties gives AI systems much more to work with than one with 50 generic five-star ratings. Encourage clients to mention the specific service they used and the location — this enriches the entity signal, not just the star rating.</P>
        </ArticleSection>

        <ArticleSection id="nap-and-beyond">
          <H2>NAP Consistency — and Why It&apos;s No Longer Sufficient</H2>
          <P>NAP (Name, Address, Phone) consistency remains foundational. AI systems use these signals for entity disambiguation — if your business appears with different names or addresses across platforms, AI systems may not confidently identify you as a single entity.</P>
          <P>But NAP alone is no longer sufficient for AI visibility. The signals AI systems need go further:</P>
          <Ul items={[
            'Service-level specificity — not just "real estate" but "luxury buyer representation"',
            'Credential and license information — which states, which specializations',
            'Service area clarity — specific cities, neighborhoods, counties served',
            'Team and personnel entity signals — individual agents or practitioners with their own Google profiles',
            'FAQ and Q&A content that answers the exact questions local customers ask AI systems',
          ]} />
        </ArticleSection>

        <ArticleSection id="local-strategy">
          <H2>Local AI Authority Strategy</H2>
          <H3>Phase 1: Foundation (Month 1)</H3>
          <Ul items={[
            'Audit and standardize NAP across all platforms',
            'Complete and verify Google Business Profile — every field, every category',
            'Implement LocalBusiness schema on your website with service area and specialty attributes',
          ]} />
          <H3>Phase 2: Entity depth (Month 2)</H3>
          <Ul items={[
            'Create or optimize an Authority Page',
            'Ensure service pages are entity-linked with schema',
            'Build Wikidata entry if applicable; expand directory footprint',
          ]} />
          <H3>Phase 3: Measurement (Month 3+)</H3>
          <Ul items={[
            'Track AI Share of Voice for your priority queries',
            'Monitor entity accuracy — do AI systems describe you correctly?',
            'Iterate based on which queries you appear in and which you don\'t',
          ]} />
        </ArticleSection>

        <ArticleSection id="mistakes">
          <H2>Common Mistakes</H2>
          <Ul items={[
            'Believing a full Google Maps presence means full AI visibility — they\'re different systems',
            'Not monitoring AI responses for your business — inaccurate AI descriptions can harm conversions',
            'Treating AI local optimization as a one-time project',
            'Ignoring smaller AI engines (Perplexity, Claude) in favor of only optimizing for Google',
          ]} />
        </ArticleSection>

        <ArticleSection id="glossary">
          <H2>Glossary</H2>
          <H3>Map Pack</H3>
          <P>The group of three local business results displayed with a map in Google search results for local queries. Also called the "local pack" or "3-pack."</P>
          <H3>NAP</H3>
          <P>Name, Address, Phone — the core local business data that must be consistent across all platforms for entity recognition.</P>
          <H3>Service Area Business</H3>
          <P>A business that serves customers at their location rather than at a fixed address — plumbers, electricians, mobile services. Schema and GBP have specific entity types for these.</P>
        </ArticleSection>
      </>
    ),
  },

  'the-future-of-search': {
    toc: [
      { id: 'where-we-are', label: 'Where We Are Now' },
      { id: 'trajectory', label: 'The Trajectory' },
      { id: 'what-changes', label: 'What Changes for Businesses' },
      { id: 'structural-advantage', label: 'The Structural Advantage Window' },
      { id: 'preparing', label: 'Preparing for What\'s Next' },
      { id: 'what-wont-change', label: 'What Won\'t Change' },
      { id: 'glossary', label: 'Glossary' },
    ],
    body: (
      <>
        <ArticleSection id="where-we-are">
          <H2>Where We Are Now</H2>
          <P>Search in 2026 is a system in transition. Traditional ranked-link results still handle the majority of query volume — but their share is declining, and the queries they handle are increasingly the ones with lower commercial intent.</P>
          <P>AI-generated answers have taken over a substantial share of the most valuable query types: informational queries ("how does X work"), recommendation queries ("who should I hire for Y"), and local queries ("best Z near me"). These are also the queries that drive leads and conversions for most businesses.</P>
          <P>The transition isn&apos;t gradual in its impact even if it&apos;s gradual in adoption. Losing visibility in recommendation queries is a disproportionate business impact — even if it represents a small percentage of total search volume.</P>
        </ArticleSection>

        <ArticleSection id="trajectory">
          <H2>The Trajectory</H2>
          <H3>Near term (1-2 years)</H3>
          <P>AI-generated answers expand to cover more query types, including more commercial and transactional queries. Google continues deepening AI Overview integration. ChatGPT, Perplexity, and other AI-first search tools continue growing market share.</P>
          <H3>Medium term (3-5 years)</H3>
          <P>AI systems increasingly reference each other&apos;s citations — creating a compounding dynamic where early-established authority becomes self-reinforcing. Businesses with strong AI Authority in 2026 will have structural advantages that are increasingly costly for competitors to close.</P>
          <H3>Long term (5+ years)</H3>
          <P>The distinction between "AI search" and "search" likely collapses — all major search interfaces will incorporate AI generation. Traditional link lists may survive as a secondary mode, but the primary mode of search response will be AI-generated synthesis.</P>
        </ArticleSection>

        <ArticleSection id="what-changes">
          <H2>What Changes for Businesses</H2>
          <P>The shift from links to answers changes several fundamental assumptions about how businesses build and measure digital presence:</P>
          <Ul items={[
            <><strong>Traffic metrics matter less:</strong> A business cited in AI answers may convert leads without ever registering a website visit. Traditional traffic analytics will undercount AI-driven conversions.</>,
            <><strong>Brand recognition becomes a proxy for intent:</strong> AI systems recommend entities by name. Being cited builds brand recognition in audiences who may never click. This changes how brand investment is measured.</>,
            <><strong>Content strategy shifts from volume to authority:</strong> Publishing 100 keyword-targeted blog posts may be less effective than 10 deeply authoritative, citable, entity-rich pieces.</>,
            <><strong>Competitor analysis requires new tools:</strong> "Who ranks #1 for my keywords?" is no longer sufficient. "Who gets cited in AI answers for my category queries?" is the new competitive question.</>,
          ]} />
        </ArticleSection>

        <ArticleSection id="structural-advantage">
          <H2>The Structural Advantage Window</H2>
          <P>There is a window of opportunity that is open now and will close over the next 2-3 years.</P>
          <P>Currently, AI Authority signals are still being established across most business categories and locations. The businesses that build deep Knowledge Graph presence, broad citation coverage, and strong entity signals now are building infrastructure that will compound over time — just as early movers in traditional SEO did in the late 1990s and early 2000s.</P>
          <P>Once AI systems have established their citation patterns for a given category in a given market, displacing an established citation source is much harder than establishing one from scratch.</P>
          <Callout label="The Compounding Effect">
            AI systems increasingly cite sources they have cited before. A business that gets cited in ChatGPT today is more likely to appear in training data for the next model generation, which increases future citation probability. The compounding is real — and the early mover advantage is structural, not arbitrary.
          </Callout>
        </ArticleSection>

        <ArticleSection id="preparing">
          <H2>Preparing for What&apos;s Next</H2>
          <Ul items={[
            <><strong>Build entity clarity now.</strong> Every month without consistent entity signals is a month of compounding you&apos;re missing.</>,
            <><strong>Measure AI visibility, not just organic traffic.</strong> Set up a monthly Share of Voice measurement for your priority queries across the major AI engines.</>,
            <><strong>Invest in authoritative content.</strong> The kind of content AI systems cite most is deeply expert, precisely structured, and directly answers specific questions. This is a different content strategy than keyword farming.</>,
            <><strong>Treat AI Authority as infrastructure, not a campaign.</strong> It requires consistent maintenance — monitoring entity accuracy, updating schema as your business evolves, expanding citation footprint as new AI engines emerge.</>,
          ]} />
        </ArticleSection>

        <ArticleSection id="what-wont-change">
          <H2>What Won&apos;t Change</H2>
          <P>Amid the transformation, several fundamentals remain constant:</P>
          <Ul items={[
            'Genuine expertise and quality of work remain the ultimate authority signal — AI systems get better at detecting it',
            'Client relationships and word-of-mouth are AI-amplified, not replaced — a satisfied client who mentions you online is a citation signal',
            'Consistent, honest representation of your business beats manipulation strategies — AI systems are increasingly sophisticated at detecting artificial signals',
            'The businesses that genuinely serve their clients well will have more authentic reviews, more editorial coverage, and more genuine authority — which is exactly what AI systems reward',
          ]} />
        </ArticleSection>

        <ArticleSection id="glossary">
          <H2>Glossary</H2>
          <H3>Zero-Click Search</H3>
          <P>Search queries that are resolved without the user clicking on any search result — increasingly common as AI-generated answers provide complete responses inline.</P>
          <H3>Compounding Authority</H3>
          <P>The dynamic by which established AI citations reinforce future citation probability — AI systems draw on prior AI outputs as training data, creating a compounding advantage for established entities.</P>
          <H3>AI-First Search</H3>
          <P>Search interfaces where AI-generated answers are the primary response mode, with traditional ranked links as a secondary option. The direction most major search engines are moving.</P>
        </ArticleSection>
      </>
    ),
  },
};

// ─── Helper: get full article ─────────────────────────────────────────────────

export function getArticle(slug: string): Article | null {
  const meta = ARTICLE_META.find(a => a.slug === slug);
  const body = ARTICLE_BODIES[slug];
  if (!meta || !body) return null;
  return { ...meta, ...body };
}

export function getAllSlugs(): string[] {
  return ARTICLE_META.map(a => a.slug);
}

// ─── Topic Clusters ───────────────────────────────────────────────────────────

export const TOPIC_CLUSTERS = [
  {
    id: 'foundations',
    label: 'Foundations',
    description: 'What AI Authority is and why it matters',
    color: '#BF9B5C',
    slugs: ['what-is-ai-authority', 'what-is-generative-engine-optimization', 'the-future-of-search'],
  },
  {
    id: 'infrastructure',
    label: 'Infrastructure',
    description: 'The technical systems behind AI visibility',
    color: '#7C6F5E',
    slugs: ['knowledge-graphs-explained', 'entity-seo-explained', 'authority-pages-explained'],
  },
  {
    id: 'ai-engines',
    label: 'AI Engines',
    description: 'How specific AI systems make recommendation decisions',
    color: '#5E7C6F',
    slugs: ['how-chatgpt-chooses-businesses-to-recommend', 'understanding-google-ai-overviews'],
  },
  {
    id: 'strategy',
    label: 'Strategy',
    description: 'How to compete and win in AI search',
    color: '#6F5E7C',
    slugs: ['ai-search-vs-traditional-seo', 'how-ai-search-changes-local-seo'],
  },
];
