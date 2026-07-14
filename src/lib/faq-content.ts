import { slugify } from '@/components/blog/TableOfContents';

export type ComparisonRow = { [key: string]: string };

export type FaqEnrichment = {
  takeaways: string[];
  body: string;                         // markdown-lite: ## H2, ### H3, - list, > quote, **bold**
  comparisonTable?: {
    headers: string[];
    rows: ComparisonRow[];
  };
  relatedQuestions: string[];           // question text (looked up by slugify)
  sources: { label: string; url: string }[];
  lastUpdated: string;                  // e.g. "July 2026"
};

// Keyed by slugify(question)
const enrichments: Record<string, FaqEnrichment> = {

  // ─── GEO FOUNDATIONS ────────────────────────────────────────────────────────

  [slugify('Is GEO just a rebrand of SEO?')]: {
    lastUpdated: 'July 2026',
    takeaways: [
      'GEO and SEO share foundational signals but target completely different outputs.',
      'SEO targets ranked links on a search results page; GEO targets citations inside AI-generated answers.',
      'AI engines synthesize answers rather than rank documents — so the optimization surface is different.',
      'Businesses that only do SEO are invisible to a growing share of AI-driven queries.',
      'GEO is additive: strong SEO helps GEO, but SEO alone is no longer sufficient.',
    ],
    body: `## What SEO optimizes for

Traditional SEO — the practice most businesses invested in over the past 20 years — optimizes for position on a search results page. The goal is a high-ranking blue link that earns a click. The currency is domain authority, keyword density, backlink count, and page speed scores.

That model still matters for click-based traffic. But it was designed for a world where the search engine's job was to return a list of documents and let humans choose.

## What GEO optimizes for

Generative Engine Optimization optimizes for a different output: citation and recommendation inside an AI-generated answer. When someone asks ChatGPT, Perplexity, or Google AI Overviews who to hire for a service, the engine does not show a list of links — it synthesizes a recommendation.

The question GEO answers is: **when the engine composes that recommendation, does it include your business?**

## Why the optimization surface is different

AI engines evaluate businesses along different dimensions than classic search algorithms:

- **Entity clarity** — can the engine resolve your business as a distinct, consistent entity?
- **Topical authority** — is your content the kind a researcher would cite?
- **Reputation signals** — do third-party sources (reviews, mentions, press) corroborate your claims?
- **Schema depth** — have you provided machine-readable facts that reduce the engine's interpretive work?

Keyword density and exact-match anchor text — two SEO staples — carry almost no weight in this model.

## The relationship between SEO and GEO

GEO is not a replacement for SEO; it is an extension of it. A well-optimized website with strong backlinks and clean technical SEO is a better GEO substrate. But GEO adds a layer of structured entity signals, schema markup, and reputation architecture that traditional SEO neither requires nor produces.

> Think of SEO as building a road and GEO as building a landmark. The road helps people reach you. The landmark makes you worth recommending.

## What happens if you only do SEO

Businesses that invest exclusively in SEO are visible to users who still type queries into a search bar and click links. They are largely invisible to users who ask AI assistants — a population growing faster than any other traffic segment.

As AI Overviews, ChatGPT, and Perplexity handle more of the discovery layer, businesses without GEO infrastructure will see organic impressions erode even as their traditional rankings hold.`,
    comparisonTable: {
      headers: ['Dimension', 'Traditional SEO', 'GEO'],
      rows: [
        { Dimension: 'Primary output', 'Traditional SEO': 'Ranked link on SERP', GEO: 'Citation in AI answer' },
        { Dimension: 'Core signal', 'Traditional SEO': 'Backlinks + keywords', GEO: 'Entity clarity + schema' },
        { Dimension: 'User action', 'Traditional SEO': 'Click to your page', GEO: 'AI reads and cites you' },
        { Dimension: 'Content format', 'Traditional SEO': 'Keyword-targeted pages', GEO: 'Citation-worthy authority pages' },
        { Dimension: 'Reputation factor', 'Traditional SEO': 'Domain authority', GEO: 'Review velocity + third-party mentions' },
        { Dimension: 'Timeline', 'Traditional SEO': '3–6 months', GEO: '60–90 days for foundation; compounds quarterly' },
      ],
    },
    relatedQuestions: [
      'Do I need to abandon my SEO work?',
      'How long does GEO take to show results?',
      'How do I know if GEO is working?',
      'Which AI engine matters most for my business?',
    ],
    sources: [
      { label: 'Google Search Central — How Search Works', url: 'https://www.google.com/intl/en/search/howsearchworks/' },
      { label: 'Perplexity AI — About', url: 'https://www.perplexity.ai/about' },
      { label: 'OpenAI — ChatGPT Research', url: 'https://openai.com/research' },
    ],
  },

  [slugify('How long does GEO take to show results?')]: {
    lastUpdated: 'July 2026',
    takeaways: [
      'Most businesses see measurable AI visibility movement within 60–90 days of completing the entity foundation.',
      'Category-level authority typically compounds over 6–12 months.',
      'The foundation stage (entity, schema, About page) produces the fastest results.',
      'Content and reputation stages build on the foundation and compound more slowly.',
      'AI engines re-index and update their knowledge on different cadences — Google AI Overviews updates most frequently.',
    ],
    body: `## Why GEO results are not instant

AI engines do not re-evaluate businesses in real time. They synthesize recommendations from training data, crawled content, and structured signals that are indexed on a rolling basis. Changes you make today take time to propagate into the models that power recommendations.

That said, GEO moves considerably faster than many businesses expect.

## The 60–90 day foundation window

The highest-leverage GEO work — entity setup, schema implementation, and About page restructuring — produces signal changes that crawlers pick up relatively quickly. Google typically re-crawls schema-bearing pages within days to weeks. Perplexity and ChatGPT update their knowledge on longer cadences.

Businesses that start with zero AI visibility and complete a rigorous foundation typically see measurable upward movement in their visibility audit scores within 60 to 90 days.

## The 6–12 month compound curve

Content and reputation signals — the topical authority articles, the review velocity program, the third-party mentions — take longer to accumulate and longer for engines to weight heavily. A business with six months of consistent content cadence and 40+ detailed recent reviews looks fundamentally different to an engine than one with three articles and a handful of ratings.

The businesses that win category-level authority are the ones that treat GEO as a standing discipline, not a one-time sprint.

## What to track during the first 90 days

- AI visibility audit score (baseline vs. current)
- Appearance in problem and category queries (not just branded name)
- Schema validation: zero errors
- Entity consistency score across top platforms`,
    relatedQuestions: [
      'Is GEO just a rebrand of SEO?',
      'Can I do GEO myself?',
      'How do I know if GEO is working?',
      'What should I do in month one?',
    ],
    sources: [
      { label: 'Google Search Central — Crawling and Indexing', url: 'https://developers.google.com/search/docs/crawling-indexing/overview-google-crawlers' },
    ],
  },

  [slugify('How do I know if GEO is working?')]: {
    lastUpdated: 'July 2026',
    takeaways: [
      'Run a structured AI visibility audit before you start — your baseline is the only honest comparison point.',
      'Test problem and category queries, not just branded name searches.',
      'Track which AI engines cite you and in what context over time.',
      'Schema validation passing with zero errors is a prerequisite, not a metric.',
      'Review velocity and sentiment trends are leading indicators of recommendation improvement.',
    ],
    body: `## Start with a baseline audit

You cannot measure GEO progress without a starting point. Before any other work, run a structured audit: test your business against 10–15 queries across ChatGPT, Perplexity, Google AI Overviews, and Gemini. Document exactly what each engine says — whether you appear, in what context, and which competitors are cited instead.

This baseline is your reference for every metric that follows.

## The three signal categories to track

### Entity signals
- Is your business name resolved consistently across all engines?
- Does a Google Knowledge Panel exist or begin to appear?
- Are your sameAs profiles consistent and complete?

### Content signals
- Do your own pages appear as cited sources when engines answer questions in your category?
- Are you appearing in problem and category queries, not just branded name searches?
- How does your topical coverage compare to competitors being cited?

### Reputation signals
- What is your review velocity (new reviews per month)?
- Are reviews sufficiently specific to be useful to engines reading them as data?
- Are third-party mentions (press, directories, industry sites) growing?

## Re-run the audit on a quarterly cadence

AI visibility is not a metric you check once. Re-run the full audit every 90 days against the same query set. The questions you care about: has my visibility audit score improved? Am I appearing in more query types? Are the engines citing my own content rather than competitors?

> The metric that matters most is movement in category and problem queries — not branded name queries, which most businesses already appear in.`,
    relatedQuestions: [
      'How often should I run an AI visibility audit?',
      'How long does GEO take to show results?',
      'Is GEO just a rebrand of SEO?',
      'What metrics should I track over the 90 days?',
    ],
    sources: [
      { label: 'Google Search Console', url: 'https://search.google.com/search-console/about' },
      { label: 'Schema Markup Validator', url: 'https://validator.schema.org/' },
    ],
  },

  // ─── WHAT IS GEO ────────────────────────────────────────────────────────────

  [slugify('Can I do GEO myself?')]: {
    lastUpdated: 'July 2026',
    takeaways: [
      'The foundation stage (entity, schema, About page) can often be done in-house by a disciplined operator.',
      'Technical schema implementation is the most common DIY failure point.',
      'Content cadence requires sustained editorial investment that most businesses underestimate.',
      'Review velocity programs require operational integration, not just marketing intent.',
      'Earning authoritative third-party mentions typically requires specialist outreach.',
    ],
    body: `## What you can realistically do yourself

The GEO roadmap has three stages — foundation, content, reputation — and they vary significantly in DIY accessibility.

### Foundation (most accessible)

Establishing entity consistency, claiming and completing your Google Business Profile, and rewriting your About page are accessible to any business owner who is rigorous about following a structured checklist. The most common mistake is inconsistency: using slightly different name formats, addresses, or category descriptions across platforms.

Schema implementation sits at the boundary. JSON-LD for Organization and Person schemas can be added without developer skills using structured data plugins or by following Google's documentation. More complex schema (LocalBusiness with service areas, nested sameAs arrays, FAQPage markup) is where implementation errors most commonly occur.

### Content (moderate difficulty)

Publishing citation-worthy authority content requires sustained editorial investment — typically one to two in-depth articles per month, each targeting specific problem and category queries. This is achievable in-house if you can commit the time and have strong domain expertise. The failure mode is inconsistency: businesses start strong and slow to a trickle within three months.

### Reputation (hardest to DIY)

Running a systematic review program — compliant request sequences, response management, sentiment monitoring — requires operational integration with your customer journey. Earning authoritative third-party mentions (local press, industry publications, curated directories) typically requires structured outreach that most operators do not have capacity to sustain alongside their core business.

## When to get help

If you are operating in a competitive category, behind on foundation work, or lack the time to sustain content and reputation cadence, professional help accelerates the compounding curve significantly. The cost of doing GEO slowly is the business that beats you to category authority while you are still setting up your schema.`,
    relatedQuestions: [
      'Is GEO just a rebrand of SEO?',
      'How long does GEO take to show results?',
      'What should I do in month one?',
      'Do I need to hire help, or can I run this roadmap myself?',
    ],
    sources: [
      { label: 'Google Structured Data Documentation', url: 'https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data' },
      { label: 'Schema.org — Full Type Hierarchy', url: 'https://schema.org/docs/full.html' },
    ],
  },

  // ─── 90-DAY ROADMAP ─────────────────────────────────────────────────────────

  [slugify('What should I do in month one?')]: {
    lastUpdated: 'July 2026',
    takeaways: [
      'Month one is entirely about entity foundation — do not skip ahead to content.',
      'Establish one canonical version of your business identity and enforce it everywhere.',
      'Implement Organization and Person schema with sameAs links on your About page.',
      'Fully complete your Google Business Profile — every field, not just the basics.',
      'Run a baseline AI visibility audit before month one ends so you have a benchmark.',
    ],
    body: `## Why foundation comes before everything else

The most common GEO mistake is publishing content before your entity is stable. Content built on a shaky entity is harder for engines to attribute to you. Reviews earned before you have citable pages have less to reinforce. Foundation first is not a slow start — it is the investment that makes every later stage compound properly.

## The four month-one priorities

### 1. Entity consistency

Audit every place your business appears online — Google, Yelp, Facebook, LinkedIn, industry directories, local chambers — and enforce one canonical version of:

- Business name (exact, consistent spelling)
- Address (exact format matching your website)
- Phone number
- Business category
- Short description

Inconsistency is the most common reason engines fail to resolve a business as a confident entity.

### 2. Schema implementation

Add JSON-LD structured data to your site covering:

- **Organization** schema with name, url, logo, description, contactPoint, and sameAs array
- **Person** schema for the founder or key individual on your About page
- **LocalBusiness** if you serve a physical area

Validate everything at schema.org's validator before considering this stage complete.

### 3. About page restructuring

Rewrite your About page to state your identity facts in plain, structured language:
- Who runs the business
- When it was founded
- Where it operates
- What it is specifically known for
- What distinguishes it from alternatives

This is the page engines read first when establishing what your business is.

### 4. Google Business Profile

Claim and fully complete your GBP: primary and secondary categories, service descriptions, business attributes, hours, service areas, and at least 10 high-quality photos. GBP is a primary source for AI Overviews and local recommendations.

**End of month milestone:** Entity consistency score at full alignment, schema validation at zero errors, baseline AI audit score documented.`,
    comparisonTable: {
      headers: ['Task', 'Priority', 'DIY Difficulty'],
      rows: [
        { Task: 'Entity consistency audit', Priority: 'Critical', 'DIY Difficulty': 'Low' },
        { Task: 'Organization + Person schema', Priority: 'Critical', 'DIY Difficulty': 'Medium' },
        { Task: 'About page restructure', Priority: 'Critical', 'DIY Difficulty': 'Low' },
        { Task: 'Google Business Profile completion', Priority: 'Critical', 'DIY Difficulty': 'Low' },
        { Task: 'Baseline AI visibility audit', Priority: 'High', 'DIY Difficulty': 'Low' },
        { Task: 'sameAs profile claims', Priority: 'High', 'DIY Difficulty': 'Low' },
      ],
    },
    relatedQuestions: [
      'Can I really become visible in AI search in 90 days?',
      'What metrics should I track over the 90 days?',
      'Can I do GEO myself?',
      'How long does GEO take to show results?',
    ],
    sources: [
      { label: 'Google Business Profile Help', url: 'https://support.google.com/business' },
      { label: 'Schema.org Validator', url: 'https://validator.schema.org/' },
      { label: 'Google Structured Data Docs', url: 'https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data' },
    ],
  },

  // ─── ENTITY SEO ─────────────────────────────────────────────────────────────

  [slugify("What's the difference between a website and an entity?")]: {
    lastUpdated: 'July 2026',
    takeaways: [
      'A website is a collection of pages; an entity is a recognized thing in the world that AI models can resolve.',
      'AI engines do not recommend websites — they recommend entities they understand well enough to stake their answer on.',
      'Your business becomes an entity when engines can consistently match your name to a stable set of facts.',
      'Entity status is built through schema, consistent NAP data, sameAs links, and third-party corroboration.',
      'A business can have a highly-ranked website and still have no entity status in AI models.',
    ],
    body: `## What a website is

A website is a set of HTML pages hosted at a domain. Search engines crawl it, index its content, and surface it for relevant queries. Traditional SEO is almost entirely focused on this layer: what words appear on the pages, which domains link to those pages, and how fast and clean the code is.

AI engines read websites too. But reading a website and recognizing a business as an entity are different operations.

## What an entity is

In the knowledge-graph model AI engines operate from, an entity is a distinct, identifiable thing in the world — a person, a place, a business, an organization. Entities have attributes (name, location, category, founding date), relationships (founder, parent company, serves area), and links that connect them to authoritative external references.

When an engine resolves your business as an entity, it is not just finding your website. It is matching your business name to a stable set of facts it has assembled from multiple sources — your own schema, your Google Business Profile, your LinkedIn page, your Yelp listing, and the pattern of how those all agree with each other.

## Why entity status matters for AI recommendations

When a user asks an AI engine to recommend a business in a category, the engine draws from its entity model, not its page index. It thinks in terms of businesses it knows — entities it has resolved — not pages it has ranked.

A business with no entity status is invisible to this layer of the recommendation process, regardless of how well its website ranks on a traditional SERP.

## How to build entity status

Entity status is built through four types of signals:

1. **Schema markup** — structured data on your site that explicitly declares your entity attributes
2. **NAP consistency** — exact match of name, address, and phone number across all platforms
3. **sameAs links** — explicit connections from your website to your authoritative profiles (Google Business Profile, LinkedIn, Facebook, industry directories)
4. **Third-party corroboration** — external sources that reference your business name, category, and location in a consistent way`,
    comparisonTable: {
      headers: ['Aspect', 'Website', 'Entity'],
      rows: [
        { Aspect: 'What it is', Website: 'A set of HTML pages at a domain', Entity: 'A recognized thing in an AI knowledge model' },
        { Aspect: 'How AI uses it', Website: 'Crawls and indexes content', Entity: 'Resolves and cites in recommendations' },
        { Aspect: 'Built by', Website: 'Development + SEO', Entity: 'Schema + consistency + corroboration' },
        { Aspect: 'Visible in', Website: 'Search results page links', Entity: 'AI-generated answers and Knowledge Panels' },
        { Aspect: 'Can exist without the other?', Website: 'Yes', Entity: 'Rare — usually requires a web presence' },
      ],
    },
    relatedQuestions: [
      'Do I need a Wikipedia or Wikidata page to be an entity?',
      'How do I get a Google Knowledge Panel?',
      'Why does inconsistent business info hurt so much?',
      'Is GEO just a rebrand of SEO?',
    ],
    sources: [
      { label: 'Google — How Knowledge Graph Works', url: 'https://blog.google/products/search/introducing-knowledge-graph-things-not/' },
      { label: 'Schema.org — Organization Type', url: 'https://schema.org/Organization' },
    ],
  },

  // ─── STRUCTURED DATA ────────────────────────────────────────────────────────

  [slugify('Which schema type should I add first?')]: {
    lastUpdated: 'July 2026',
    takeaways: [
      'Organization schema is the single most important schema type for most businesses — add it first.',
      'LocalBusiness schema (which extends Organization) is the priority for any business with a physical location or service area.',
      'Person schema on your About page establishes the founder or key individual as a recognized entity.',
      'FAQPage schema directly feeds the question-and-answer format AI engines use in responses.',
      'Do not add multiple schema types at once without validating each — errors compound.',
    ],
    body: `## The schema priority sequence

Not all schema types deliver equal value for AI visibility. The right order is determined by what engines need most to resolve your entity and cite your content.

### Priority 1: Organization (or LocalBusiness)

Organization schema is the foundation of entity recognition. It declares your business name, URL, logo, description, contact information, social profiles, and the sameAs links that connect you to external authoritative sources.

If your business has a physical location or serves a defined service area, use LocalBusiness (a subtype of Organization) instead — it supports address, areaServed, and openingHours fields that matter for local AI recommendations.

### Priority 2: Person

Person schema on your About page establishes the key individual behind the business — typically the founder — as a recognized entity in their own right. This feeds E-E-A-T signals (Experience, Expertise, Authoritativeness, Trustworthiness) that influence how engines weight your content.

### Priority 3: FAQPage

FAQPage schema marks up question-and-answer content in a format AI engines read directly. It is some of the most citable content you can produce because it matches exactly the Q&A shape of how AI generates responses.

### Priority 4: Article

Article schema on your blog and insight pages establishes authorship, publication date, and topical context — signals that influence how engines weight and cite editorial content.

## What to avoid

Do not add schema that does not accurately describe the page it appears on. Incorrect or speculative schema (marking a page as a Product when it is a service description, or claiming awards you have not received) can suppress rather than improve citation quality.`,
    comparisonTable: {
      headers: ['Schema Type', 'What It Signals', 'Priority'],
      rows: [
        { 'Schema Type': 'Organization / LocalBusiness', 'What It Signals': 'Business identity, contact, sameAs', Priority: '1 — Add first' },
        { 'Schema Type': 'Person', 'What It Signals': 'Founder authority and expertise', Priority: '2 — Add to About page' },
        { 'Schema Type': 'FAQPage', 'What It Signals': 'Direct Q&A for AI responses', Priority: '3 — Add to FAQ content' },
        { 'Schema Type': 'Article', 'What It Signals': 'Editorial authority, authorship, date', Priority: '4 — Add to blog posts' },
        { 'Schema Type': 'BreadcrumbList', 'What It Signals': 'Site structure and page context', Priority: '5 — Add site-wide' },
        { 'Schema Type': 'Review / AggregateRating', 'What It Signals': 'Reputation signals from reviews', Priority: '6 — Add when review data exists' },
      ],
    },
    relatedQuestions: [
      'Do I really need schema if my content already explains everything?',
      'Can incorrect schema hurt me?',
      "What's the difference between a website and an entity?",
      'How do AI engines find my schema?',
    ],
    sources: [
      { label: 'Google Structured Data Documentation', url: 'https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data' },
      { label: 'Schema.org Full Type Hierarchy', url: 'https://schema.org/docs/full.html' },
      { label: 'Rich Results Test', url: 'https://search.google.com/test/rich-results' },
    ],
  },
};

export function getFaqEnrichment(question: string): FaqEnrichment | undefined {
  return enrichments[slugify(question)];
}

export function getAllEnrichedSlugs(): string[] {
  return Object.keys(enrichments);
}
