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

  // ─── GEO FOUNDATIONS (remaining) ────────────────────────────────────────────

  [slugify('Do I need to abandon my SEO work?')]: {
    lastUpdated: 'July 2026',
    takeaways: [
      'You do not need to abandon SEO — GEO builds on top of a healthy SEO foundation.',
      'Technical SEO (fast pages, clean indexing, strong backlinks) directly supports GEO signals.',
      'The only things worth stopping are practices that confuse entity signals: keyword stuffing, duplicate content, inconsistent NAP data.',
      'Your existing content library has GEO value — it needs restructuring, not deletion.',
      'Treat GEO as adding a layer, not replacing the ground floor.',
    ],
    body: `## SEO and GEO are not competitors

The premise behind "abandoning SEO" is a false choice. GEO is not a competing discipline — it is a complementary layer built on top of traditional SEO. Strong SEO practices make GEO more effective; weak SEO undermines GEO results.

## What carries forward from SEO

Most of your existing SEO investment transfers directly to your GEO program:

- **Technical health** — fast, crawlable, mobile-friendly pages are a prerequisite for AI engines to index and cite your content
- **Domain authority and backlinks** — third-party links remain a signal of credibility that AI engines factor into source reliability
- **Topical content library** — existing articles and service pages can be upgraded with structured data, schema markup, and Quick Answer sections rather than rebuilt from scratch
- **Google Business Profile** — if you have maintained GBP for local SEO, you are ahead of competitors on one of the highest-weighted AI Overview signals

## What to stop or change

There are a handful of SEO-era practices that actively interfere with GEO:

- **Keyword stuffing** — exact-match keyword density optimization produces unnatural content that AI engines do not cite as authoritative
- **Thin content pages** — pages built to rank for long-tail variants but containing little substantive information score poorly on the citation-worthiness dimension AI engines evaluate
- **Inconsistent NAP** — local SEO sometimes tolerates minor NAP variations across directories; GEO requires exact consistency for entity resolution

## The upgrade model

Rather than abandoning existing content, the most effective approach is a structured upgrade:

1. Add FAQ schema and a Quick Answer section to your highest-traffic pages
2. Rewrite thin pages into authority resources with 700+ words of substantive content
3. Add sameAs links and Organization schema to your homepage and About page
4. Run an entity consistency audit across all platforms

> Think of it as upgrading your existing library, not burning it down and starting over.`,
    relatedQuestions: [
      'Is GEO just a rebrand of SEO?',
      'Do backlinks still matter?',
      'Which AI engine matters most for my business?',
      'How long does GEO take to show results?',
    ],
    sources: [
      { label: 'Google Search Central — SEO Starter Guide', url: 'https://developers.google.com/search/docs/fundamentals/seo-starter-guide' },
      { label: 'Schema.org — Organization', url: 'https://schema.org/Organization' },
    ],
  },

  [slugify('Which AI engine matters most for my business?')]: {
    lastUpdated: 'July 2026',
    takeaways: [
      'For most businesses, Google AI Overviews has the highest immediate impact because it sits inside existing Google Search behavior.',
      'ChatGPT matters most for professional services, B2B, and technical queries.',
      'Perplexity is the engine most used by researchers, journalists, and buyers doing comparison shopping.',
      'All major engines share underlying signals — optimizing for one improves standing in all.',
      'Start with Google AI Overviews, then verify your presence in ChatGPT and Perplexity.',
    ],
    body: `## The engine landscape in 2026

There are now four engines worth monitoring for AI-driven recommendations: Google AI Overviews, ChatGPT (with Browse), Perplexity AI, and Gemini. Each serves different user segments and draws on different data sources.

### Google AI Overviews

For the majority of businesses, Google AI Overviews is the highest-priority engine. It sits directly inside Google Search — the most trafficked search environment in the world — and appears for a growing share of commercial and informational queries. Your existing Google Business Profile, structured data, and website authority all feed directly into AI Overviews ranking signals.

**Best for:** Local businesses, service providers, e-commerce, any business whose customers primarily discover through Google.

### ChatGPT

ChatGPT with Browse has become the default research tool for a large share of professional-services buyers. B2B prospects, consultants evaluating vendors, and technical buyers commonly use ChatGPT for multi-step research. If your business competes for professional service buyers or B2B contracts, ChatGPT visibility is high priority.

**Best for:** Agencies, consultants, software companies, B2B service providers.

### Perplexity

Perplexity has carved out a niche as the preferred engine for citation-heavy research. Users who want sources — journalists, researchers, buyers comparing multiple vendors — skew toward Perplexity. Appearing in Perplexity typically requires citeable content with clear author attribution and external references.

**Best for:** Businesses competing for informed buyers, content-heavy brands, anyone who publishes authority resources.

### Gemini

Gemini (Google DeepMind) is increasingly integrated into Google Workspace and Android. Its business recommendations draw heavily from Google Business Profile and structured data — signals you are already building for AI Overviews.

## The compound truth

Because the major engines share foundational signals — structured data, entity consistency, content authority, reputation — optimizing for Google AI Overviews builds the substrate that improves your standing everywhere. You do not need an engine-by-engine strategy. Build the foundation once; verify your presence across engines quarterly.`,
    comparisonTable: {
      headers: ['Engine', 'Primary User Segment', 'Key Signals', 'Priority For Most Businesses'],
      rows: [
        { Engine: 'Google AI Overviews', 'Primary User Segment': 'General consumers + local', 'Key Signals': 'GBP, schema, domain authority', 'Priority For Most Businesses': 'Highest' },
        { Engine: 'ChatGPT', 'Primary User Segment': 'Professional / B2B', 'Key Signals': 'Web content, reviews, entity clarity', 'Priority For Most Businesses': 'High' },
        { Engine: 'Perplexity', 'Primary User Segment': 'Researchers, journalists', 'Key Signals': 'Citable content, author attribution', 'Priority For Most Businesses': 'Medium–High' },
        { Engine: 'Gemini', 'Primary User Segment': 'Google Workspace users', 'Key Signals': 'GBP, structured data', 'Priority For Most Businesses': 'Medium' },
      ],
    },
    relatedQuestions: [
      'Is GEO just a rebrand of SEO?',
      'How do I know if GEO is working?',
      'Can I pay to be recommended by ChatGPT or Perplexity?',
      'Why does one engine recommend me and another doesn\'t?',
    ],
    sources: [
      { label: 'Google AI Overviews — How They Work', url: 'https://blog.google/products/search/generative-ai-search/' },
      { label: 'Perplexity AI — About', url: 'https://www.perplexity.ai/about' },
    ],
  },

  // ─── 90-DAY ROADMAP ─────────────────────────────────────────────────────────

  [slugify('Can I really become visible in AI search in 90 days?')]: {
    lastUpdated: 'July 2026',
    takeaways: [
      '90 days is enough to complete the full entity foundation and begin content and reputation programs.',
      'Measurable AI visibility improvement is realistic within 60–90 days for businesses starting from zero.',
      'The 90-day window is about completing foundational work — not achieving category dominance.',
      'Businesses in low-competition categories can achieve citation within 30–45 days with disciplined execution.',
      'The compounding benefits extend well beyond 90 days — the roadmap builds infrastructure, not just quick wins.',
    ],
    body: `## What "visible in 90 days" actually means

Ninety days is not a promise of category dominance. It is a realistic timeline for completing the foundational infrastructure that makes AI citation possible — and for seeing measurable movement on your visibility audit score.

For businesses starting with no entity foundation, no schema, and no structured AI visibility work, 90 days of disciplined execution typically produces:

- A fully resolved entity across all major engines
- Schema validation at zero errors
- An About page that AI engines can read as an authoritative identity document
- Initial content assets that begin attracting AI citations
- A review program in motion with early velocity

## Why 90 days is the right horizon

The 90-day frame aligns with how AI engines update their knowledge. Google AI Overviews re-indexes content on a rolling weekly basis. Perplexity and ChatGPT update their knowledge on longer cycles. Completing your foundation in the first 30 days gives the remaining 60 days for signals to propagate and compound.

Shorter timelines are possible for businesses in low-competition categories or geographic markets. Longer timelines are typical for businesses with significant entity inconsistency to clean up, or those in highly competitive professional service categories.

## What happens after 90 days

The 90-day roadmap builds infrastructure that compounds. Businesses that maintain monthly content cadence and consistent review velocity after the initial 90 days typically see continued improvement in category and problem-query visibility through months four through twelve.

The businesses that succeed are the ones that treat the 90-day roadmap as the starting pistol, not the finish line.`,
    relatedQuestions: [
      'What should I do in month one?',
      'What metrics should I track over the 90 days?',
      'Do I need to hire help, or can I run this roadmap myself?',
      'How long does GEO take to show results?',
    ],
    sources: [
      { label: 'Google Search Central — Crawling Overview', url: 'https://developers.google.com/search/docs/crawling-indexing/overview-google-crawlers' },
      { label: 'Schema.org Validator', url: 'https://validator.schema.org/' },
    ],
  },

  [slugify('Why does the sequence matter — can\'t I do everything at once?')]: {
    lastUpdated: 'July 2026',
    takeaways: [
      'Content published before entity foundation is harder for engines to attribute to you.',
      'Reviews earned before you have citable pages have less authority to reinforce.',
      'Sequence is not about doing less — it is about making each stage compound on the one before.',
      'Parallel execution of all stages simultaneously is possible but produces weaker compound returns.',
      'Foundation → Content → Reputation is the order that maximizes signal quality at each stage.',
    ],
    body: `## Why order matters in GEO

GEO is a system of compounding signals — each layer amplifies the ones beneath it. When you build them in the wrong order, you are publishing content that engines cannot confidently attribute to your entity, and earning reviews that reference pages that do not yet exist.

## Stage 1: Entity Foundation

The foundation stage establishes what your business is — its name, category, location, key people, and the web of consistent signals that allow AI engines to resolve it as a distinct entity.

Content published before your entity is resolved floats without a confident attribution. An article about "best practices for commercial landscaping" is cited differently when the publisher is a known entity (consistent Name, Address, Phone, schema, sameAs links) than when it is an unknown domain.

## Stage 2: Content Authority

Once your entity is stable, content you publish earns the entity's accumulated credibility. Each article strengthens the topical authority signal. Internal links between articles build a coherent knowledge hub that engines recognize as a resource rather than a collection of isolated pages.

Publishing content before the entity foundation means each piece accrues authority slowly and in isolation. Publishing after the foundation means each piece benefits from entity recognition and reinforces the topical cluster.

## Stage 3: Reputation

Reputation signals — reviews, third-party mentions, press citations — perform best when they link back to a stable entity with citable content. A review that mentions your service is stronger when it can be connected to your entity. A press mention that links to your authority content is stronger than one that links to a thin about page.

## The practical argument for parallel work

There is one practical exception: you can begin claiming and completing your Google Business Profile and social profiles (early entity work) at the same time as starting your review request program, because GBP completion and initial reviews are mutually reinforcing. The strict sequence applies to content — do not invest heavily in new content creation until your entity foundation is validated.`,
    relatedQuestions: [
      'What should I do in month one?',
      'Can I really become visible in AI search in 90 days?',
      'What happens after the 90 days are over?',
      'Can I do GEO myself?',
    ],
    sources: [
      { label: 'Google Business Profile Help', url: 'https://support.google.com/business' },
      { label: 'Google Structured Data Docs', url: 'https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data' },
    ],
  },

  [slugify('What metrics should I track over the 90 days?')]: {
    lastUpdated: 'July 2026',
    takeaways: [
      'AI visibility audit score (baseline vs. current) is the primary metric — track it monthly.',
      'Category and problem query appearance matters more than branded name appearance.',
      'Schema validation errors must stay at zero — any error is a signal quality failure.',
      'Review velocity (new reviews per month) is the leading indicator for reputation authority.',
      'Entity consistency score across platforms should reach 100% before the end of month one.',
    ],
    body: `## The metrics framework for 90-day GEO

Traditional SEO metrics — organic traffic, keyword rankings, domain authority — do not directly capture AI visibility progress. You need a parallel measurement system.

### Foundation metrics (Month 1)

- **Entity consistency score** — audit your Name, Address, Phone, and category across all platforms. Target: zero discrepancies.
- **Schema validation** — run the Schema.org validator and the Google Rich Results Test. Target: zero errors, zero warnings.
- **Google Business Profile completeness** — measure against every available field. Target: 100%.
- **Baseline AI visibility audit score** — run 10–15 test queries across ChatGPT, Perplexity, Google AI Overviews, and Gemini. Document exactly what each engine returns. This is your benchmark for every future measurement.

### Content metrics (Month 2)

- **New authority pages published** — target two per month minimum.
- **AI citation rate** — of your test queries, what percentage now cite your own content vs. competitors?
- **Internal link depth** — does your content hub have meaningful cross-links between related articles?

### Reputation metrics (Month 3)

- **Review velocity** — new reviews per month across all platforms.
- **Review specificity** — what percentage of reviews mention specific services, outcomes, or staff by name? (More specific = more citable by AI engines.)
- **Third-party mention growth** — new external sites referencing your business name, category, and location.

## The quarterly re-audit

At the end of 90 days, re-run your full baseline audit using the same query set. The key questions:

1. Has my visibility audit score improved?
2. Am I appearing in category and problem queries I was not in before?
3. Are AI engines citing my own content rather than competitors?
4. Has my entity been resolved in all four major engines?`,
    comparisonTable: {
      headers: ['Stage', 'Metric', 'Target'],
      rows: [
        { Stage: 'Month 1', Metric: 'Entity consistency', Target: 'Zero discrepancies across all platforms' },
        { Stage: 'Month 1', Metric: 'Schema validation errors', Target: 'Zero' },
        { Stage: 'Month 1', Metric: 'GBP completeness', Target: '100%' },
        { Stage: 'Month 2', Metric: 'Authority pages published', Target: '2+ per month' },
        { Stage: 'Month 2', Metric: 'AI citation rate', Target: 'Appearing in 30%+ of test queries' },
        { Stage: 'Month 3', Metric: 'Review velocity', Target: '4+ new reviews per month' },
        { Stage: 'Month 3', Metric: 'Third-party mentions', Target: '2+ new external references per month' },
      ],
    },
    relatedQuestions: [
      'How do I know if GEO is working?',
      'How often should I run an AI visibility audit?',
      'What should I do in month one?',
      'What happens after the 90 days are over?',
    ],
    sources: [
      { label: 'Google Rich Results Test', url: 'https://search.google.com/test/rich-results' },
      { label: 'Schema.org Validator', url: 'https://validator.schema.org/' },
    ],
  },

  [slugify('What happens after the 90 days are over?')]: {
    lastUpdated: 'July 2026',
    takeaways: [
      'The 90-day roadmap builds infrastructure that compounds indefinitely — the work does not stop.',
      'Month four onwards is about maintaining content cadence and review velocity.',
      'Quarterly audits identify new competitors, new query patterns, and gaps to fill.',
      'Category authority is typically achieved between months six and twelve for competitive markets.',
      'Businesses that stop at day 90 will see competitors overtake them within six months.',
    ],
    body: `## The 90-day roadmap is a foundation, not a finish line

The 90-day roadmap is designed to produce a complete, validated AI visibility infrastructure. By day 90, your entity is resolved, your schema is clean, your About page is authoritative, your content library has its first anchor articles, and your review program is in motion.

What happens next determines whether you become the category authority or a credible also-ran.

## Months 4–6: The growth phase

The signals you built in the first 90 days begin compounding. Content published in month two and three attracts its first citations. Review velocity accumulates into the kind of review density that AI engines weight as reputation authority. Third-party mentions from your outreach program appear in engine knowledge bases.

The work in this phase:
- Publish two authority articles per month (minimum)
- Maintain review request cadence — four or more new reviews per month
- Pursue one new authoritative external citation per month (press mention, industry directory, partner feature)
- Run a mid-year visibility audit to identify gaps and new competitor movements

## Months 7–12: The authority phase

By month six, businesses that have maintained consistent content and reputation cadence begin appearing in category-level queries — not just branded name searches. This is where GEO investment produces its highest return: unprompted recommendations by AI engines to users who have never heard of you.

The work in this phase is mostly maintenance and amplification:
- Continue content and review cadence
- Upgrade highest-traffic pages with richer schema and updated content
- Track competitor citations and publish content in underserved topical areas

## The risk of stopping

Businesses that treat the 90-day roadmap as a one-time project rather than a standing discipline see competitors who maintain cadence overtake them. AI engines continuously update their knowledge. A business with no new reviews and no new content in six months is a weaker citation candidate than it was at day 90.`,
    relatedQuestions: [
      'Can I really become visible in AI search in 90 days?',
      'What metrics should I track over the 90 days?',
      'Is this roadmap different for local versus national businesses?',
      'How long does GEO take to show results?',
    ],
    sources: [
      { label: 'Google Search Central Blog', url: 'https://developers.google.com/search/blog' },
    ],
  },

  [slugify('Do I need to hire help, or can I run this roadmap myself?')]: {
    lastUpdated: 'July 2026',
    takeaways: [
      'The foundation stage can often be run in-house with a structured checklist and 10–15 hours of focus.',
      'Schema implementation is the most common DIY failure point — errors are invisible without validation tools.',
      'Content cadence requires sustained editorial commitment that most business owners underestimate.',
      'Review programs require operational integration that is hard to sustain alongside running a business.',
      'Professional help is worth considering if you are in a competitive category or more than 60 days behind on foundation work.',
    ],
    body: `## What the roadmap requires by stage

The honest answer depends on which stage you are in, what your competitive environment looks like, and how much time you can realistically commit each week.

### Foundation (most DIY-accessible)

The entity consistency audit, GBP completion, sameAs profile claiming, and About page rewrite are all accessible to any business owner willing to follow a structured checklist and spend 10–15 focused hours. The work is methodical, not technical.

Schema implementation sits at the edge of DIY accessibility. Organization and LocalBusiness JSON-LD can be added using Google's documentation and validated with their free tools. Errors are common and invisible without running the validator — the most dangerous scenario is confidently deploying broken schema and not realizing it for months.

### Content (moderate DIY difficulty)

Publishing two authority articles per month requires approximately 6–10 hours of substantive writing and research per article. That is 12–20 hours per month on top of running your business. If you have domain expertise and can sustain that investment, DIY content is viable. If you slow to a trickle after three months — the most common failure mode — you will fall behind competitors who are publishing consistently.

### Reputation (hardest to DIY)

Review programs require integration with your customer journey: an automated or semi-automated request sequence, a response management workflow, and sentiment monitoring. Earning third-party mentions requires structured outreach — emailing journalists, pitching industry publications, pursuing directory listings — that most operators do not have capacity for.

## The decision framework

Hire help if:
- You are in a competitive category (3+ funded competitors with active GEO programs)
- You are more than 60 days behind on foundation work
- You cannot commit 15+ hours per month to ongoing execution
- You have tried DIY content before and found it unsustainable

Run it yourself if:
- You are in a low-competition category or geographic market
- You have strong domain expertise and writing ability
- You have an operations team that can own the review program`,
    relatedQuestions: [
      'Can I do GEO myself?',
      'Can I really become visible in AI search in 90 days?',
      'What should I do in month one?',
      'Is this roadmap different for local versus national businesses?',
    ],
    sources: [
      { label: 'Google Business Profile Help', url: 'https://support.google.com/business' },
      { label: 'Google Structured Data Docs', url: 'https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data' },
    ],
  },

  [slugify('Is this roadmap different for local versus national businesses?')]: {
    lastUpdated: 'July 2026',
    takeaways: [
      'Local businesses benefit from faster entity resolution because geographic signals narrow the competitive field.',
      'Google Business Profile is far more important for local businesses than for national ones.',
      'National businesses need broader topical authority and more content volume.',
      'Review platforms differ: local businesses prioritize Google and Yelp; national businesses also need industry-specific platforms.',
      'The sequence (foundation → content → reputation) is identical; the execution details differ significantly.',
    ],
    body: `## The sequence is the same; the execution differs

Both local and national businesses follow the same three-stage roadmap: entity foundation, content authority, reputation signals. What changes is which signals carry the most weight and what competitive baseline you are starting from.

## For local businesses

Local businesses operate in a smaller competitive field — typically other businesses in the same city or metro area. This means:

**Google Business Profile is your highest-leverage asset.** AI Overviews for local queries draw heavily from GBP data. A fully completed, actively managed GBP (photos, posts, review responses, service descriptions) is more impactful than months of content publishing for a local business.

**Entity signals are geographic.** Your Name + Address + Phone consistency across local directories (Yelp, Yellow Pages, local chambers, neighborhood platforms) matters more than global platform consistency.

**Review velocity at the local level.** You need fewer reviews to achieve local category authority than a national business needs for national category authority. A local landscaper with 60 recent, specific reviews is a strong AI recommendation candidate.

## For national businesses

National businesses compete across all geographies and often across multiple buyer segments. This requires:

**Broader topical authority.** You need more content articles, covering more query types, across more subcategories of your service or product. A national consulting firm needs a content library covering each service line, each industry vertical, and each stage of the buyer journey.

**Platform diversity for reviews.** Google and Yelp remain important, but G2, Clutch, Trustpilot, or industry-specific platforms may carry more weight for your buyer segment.

**More aggressive third-party mention building.** National authority requires national press mentions, industry publication features, and analyst citations — not just local directory listings.

## The timeline difference

Local businesses in low-competition markets often achieve measurable AI citation within 45–60 days of completing foundation work. National businesses in competitive categories should expect 90 days for foundation plus 3–6 months of content and reputation work before achieving consistent category-level citation.`,
    relatedQuestions: [
      'Can I really become visible in AI search in 90 days?',
      'Which review platform should I prioritize?',
      'Which AI engine matters most for my business?',
      'Do I need to hire help, or can I run this roadmap myself?',
    ],
    sources: [
      { label: 'Google Business Profile — Local SEO', url: 'https://support.google.com/business/answer/7091' },
      { label: 'Schema.org — LocalBusiness', url: 'https://schema.org/LocalBusiness' },
    ],
  },

  // ─── THE P.E.A.R.L. FRAMEWORK ───────────────────────────────────────────────

  [slugify('What does P.E.A.R.L. stand for?')]: {
    lastUpdated: 'July 2026',
    takeaways: [
      'P.E.A.R.L. stands for Process, Entity, Assets, Reputation, and Leverage.',
      'Each pillar addresses a distinct layer of how AI engines evaluate and recommend businesses.',
      'The framework is sequenced — entity before assets, assets before reputation.',
      'Together the five pillars produce compounding authority that is hard for competitors to replicate quickly.',
      'The framework is designed for small-to-medium businesses, not enterprise organizations.',
    ],
    body: `## What P.E.A.R.L. stands for

P.E.A.R.L. is Hey Pearl's proprietary framework for building the infrastructure AI engines use to discover, evaluate, and recommend a business. Each letter represents a distinct pillar.

### P — Process

The documented systems that make your business consistently deliverable and independently verifiable. AI engines weight businesses that have published, verifiable processes — case studies, methodology pages, certifications — more heavily than businesses that only claim expertise. Process documentation is the foundation that makes expertise citable.

### E — Entity

The structured identity layer that allows AI engines to resolve your business as a distinct, consistent entity in their knowledge models. Entity work covers schema markup, NAP consistency, sameAs links, and Google Business Profile completeness. Without a resolved entity, content and reviews float without confident attribution.

### A — Assets

The content library that establishes topical authority in your category. Assets include authority articles, FAQ pages, service pages, case studies, and any content designed to answer the questions your buyers ask AI engines. Assets are what engines cite when they compose a recommendation.

### R — Reputation

The third-party signals that corroborate your entity's claims. Reviews (volume, velocity, specificity), press mentions, industry directory listings, partner features, and citations from authoritative domains. Reputation is the external validation layer that turns entity + assets into trusted recommendations.

### L — Leverage

The automation and integration infrastructure that allows the other four pillars to compound without requiring constant manual effort. Review request automation, content distribution systems, social proof syndication, and analytics dashboards. Leverage is what converts a one-time sprint into a standing competitive advantage.

## Why the framework is sequenced

Each pillar builds on the one before it. Entity before assets: content published before your entity is resolved accrues credibility slowly. Assets before reputation: reviews that reference non-existent content have less to reinforce. Reputation before leverage: you cannot automate what you have not yet defined and validated.`,
    comparisonTable: {
      headers: ['Pillar', 'What It Builds', 'Key Outputs'],
      rows: [
        { Pillar: 'Process', 'What It Builds': 'Verifiable expertise', 'Key Outputs': 'Methodology pages, case studies, certifications' },
        { Pillar: 'Entity', 'What It Builds': 'AI recognition', 'Key Outputs': 'Schema, GBP, sameAs links, NAP consistency' },
        { Pillar: 'Assets', 'What It Builds': 'Topical authority', 'Key Outputs': 'Authority articles, FAQ pages, service pages' },
        { Pillar: 'Reputation', 'What It Builds': 'Third-party trust', 'Key Outputs': 'Reviews, press mentions, directory citations' },
        { Pillar: 'Leverage', 'What It Builds': 'Compounding systems', 'Key Outputs': 'Automation, analytics, distribution' },
      ],
    },
    relatedQuestions: [
      'Do I have to implement all five pillars at once?',
      'Why does documented process matter for AI visibility?',
      'How does automation create authority signals?',
      'What makes the framework\'s assets compound?',
    ],
    sources: [
      { label: 'Schema.org — Organization', url: 'https://schema.org/Organization' },
      { label: 'Google Search Central — E-E-A-T', url: 'https://developers.google.com/search/docs/fundamentals/creating-helpful-content' },
    ],
  },

  [slugify('Why does documented process matter for AI visibility?')]: {
    lastUpdated: 'July 2026',
    takeaways: [
      'Documented process is how AI engines distinguish experts from claimants — credentials and methodology pages are citable proof.',
      'A business that describes how it delivers a service is easier to recommend than one that only claims to be good at it.',
      'Process documentation feeds the Experience and Expertise dimensions of E-E-A-T.',
      'Case studies and methodology pages are among the most citable content formats for professional service businesses.',
      'Process pages perform better in AI recommendations than generic "about us" content.',
    ],
    body: `## The difference between claiming and demonstrating

AI engines are designed to surface trustworthy sources for complex questions. When a user asks "who is the best accountant for my small business," the engine evaluates candidates not just on entity signals and reviews, but on the depth of evidence that the business actually knows what it is doing.

This is where documented process becomes a significant competitive signal.

## What "documented process" means in practice

Process documentation is any content that makes your methodology verifiable:

- **Service delivery methodology pages** — how you run a client engagement, what steps are involved, what the client experiences at each stage
- **Case studies** — specific client situations, the approach taken, and the measurable outcome
- **Certification and credential pages** — what qualifications your team holds, who issues them, and how to verify them
- **FAQ and Q&A content** — detailed answers to the questions buyers ask, demonstrating you understand the problems they face

The critical word is "verifiable." Content that describes your process in specific, verifiable terms — named frameworks, measurable outcomes, certified credentials — is more citable than content that makes generic excellence claims.

## How this feeds E-E-A-T

Google's E-E-A-T signals (Experience, Expertise, Authoritativeness, Trustworthiness) apply to all AI engines, not just Google. Documented process addresses the Experience and Expertise dimensions directly:

- **Experience:** Case studies with specific client outcomes demonstrate first-hand experience
- **Expertise:** Methodology pages and credential documentation demonstrate knowledge depth

AI engines weight content from businesses that demonstrate expertise differently from content that asserts it.

## What to publish

For a service business, the minimum process documentation set is:
1. A methodology or approach page describing your service delivery framework
2. Two to three case studies with specific situations and measurable outcomes
3. A credentials or certifications page if your industry has recognized qualifications
4. FAQ content covering the questions buyers ask in the research phase`,
    relatedQuestions: [
      'What does P.E.A.R.L. stand for?',
      'Is E-E-A-T an official ranking factor?',
      'Should my content be attributed to individuals instead of the brand?',
      'What is the single most important thing to add to my About page?',
    ],
    sources: [
      { label: 'Google — E-E-A-T and Quality Rater Guidelines', url: 'https://developers.google.com/search/docs/fundamentals/creating-helpful-content' },
      { label: 'Schema.org — HowTo', url: 'https://schema.org/HowTo' },
    ],
  },

  [slugify('How does automation create authority signals?')]: {
    lastUpdated: 'July 2026',
    takeaways: [
      'Automation ensures review requests go out consistently — consistency produces velocity, and velocity is a primary reputation signal.',
      'Automated content distribution extends the reach of your authority assets without additional creation effort.',
      'Social proof syndication ensures your reputation signals appear in more places engines can discover.',
      'Analytics automation helps you catch signal degradation before it becomes a competitive problem.',
      'The goal is converting a one-time sprint into a standing system that compounds without constant manual effort.',
    ],
    body: `## Why authority signals require consistency

AI engines do not evaluate businesses at a single point in time. They update their knowledge continuously, weighting businesses that demonstrate ongoing activity, consistent reputation growth, and sustained content production more highly than businesses that produced all their signals at once and stopped.

Automation is how you sustain the consistency that makes authority compound.

## The four automation layers

### Review request automation

The most impactful automation for most businesses. A review request sequence — an email or SMS sent at the right moment in your customer journey — produces consistent review velocity without requiring manual effort per transaction. Businesses that send review requests manually convert 5–10% of satisfied customers into reviewers. Automated sequences with the right timing convert 20–40%.

Review velocity (new reviews per month) is a primary AI engine reputation signal. Automation is how you sustain it.

### Content distribution

Authority articles and FAQ pages produce the most value when they are distributed across multiple channels. Automated distribution to email subscribers, social profiles, and industry community platforms extends the reach of each piece without requiring additional creation effort. Wider distribution also increases the probability of earning third-party citations.

### Social proof syndication

Review monitoring and response tools can syndicate your best reviews to your website and ensure responses go out within 24 hours — both signals that AI engines read as reputation quality indicators.

### Analytics and alerting

Automated alerts for schema validation errors, Google Business Profile changes, and ranking shifts let you catch signal degradation before it compounds. A broken schema goes unnoticed for months in a manual monitoring workflow.

## What automation does not replace

Automation amplifies your authority signals; it does not create them. You still need to deliver excellent service, earn the review, and write the article. Automation ensures those inputs convert into consistent, compounding signals rather than being lost to operational friction.`,
    relatedQuestions: [
      'What does P.E.A.R.L. stand for?',
      'What is review velocity and why does it matter?',
      'What makes the framework\'s assets compound?',
      'Do I need to hire help, or can I run this roadmap myself?',
    ],
    sources: [
      { label: 'Google Business Profile — Review Best Practices', url: 'https://support.google.com/business/answer/3474050' },
    ],
  },

  [slugify('Why is revenue a pillar in an AI visibility framework?')]: {
    lastUpdated: 'July 2026',
    takeaways: [
      'Revenue is the measure of whether your AI visibility investment is working — without it, visibility is a vanity metric.',
      'The P.E.A.R.L. framework treats revenue as the output layer: visibility → inquiry → conversion → revenue.',
      'Businesses that track AI-attributed inquiries can measure the financial return on their GEO investment.',
      'Revenue tracking closes the loop between marketing spend and business outcome.',
      'GEO without revenue tracking produces good metrics and no accountability.',
    ],
    body: `## Why GEO needs a revenue layer

Most AI visibility frameworks stop at the visibility metric: are you appearing in AI answers? This is a necessary question, but it is not sufficient. Visibility without inquiry conversion produces a marketing metric, not a business outcome.

The P.E.A.R.L. framework includes Revenue as a pillar because the purpose of AI visibility is not to appear in answers — it is to generate business.

## The visibility-to-revenue chain

AI visibility produces a chain of outcomes:

1. **Visibility** — you appear in AI-generated recommendations for relevant queries
2. **Inquiry** — users who see your recommendation visit your website or contact you directly
3. **Conversion** — a share of those inquiries become clients or customers
4. **Revenue** — that conversion rate and average transaction value determine the financial return on your GEO investment

Each link in this chain can be measured. The Revenue pillar is about instrumenting all four links, not just the first.

## How to attribute revenue to AI visibility

AI-attributed inquiry tracking requires:

- **UTM parameters** on your website links in GBP and citation sources
- **Source questions** in your intake or inquiry form ("How did you hear about us?")
- **Call tracking** with source attribution for phone inquiries
- **Referral source analysis** in your CRM or booking system

With these systems in place, you can calculate the revenue generated per month from AI-driven discovery — and therefore the ROI of your GEO investment.

## The accountability function

Revenue tracking creates accountability that prevents GEO from becoming a perpetual investment without measurable return. If visibility scores improve but revenue does not, the chain is broken somewhere — in conversion, in offer-market fit, or in the quality of the inquiries being generated. That diagnosis is impossible without revenue tracking.`,
    relatedQuestions: [
      'What does P.E.A.R.L. stand for?',
      'How do I know if GEO is working?',
      'What metrics should I track over the 90 days?',
      'How long does GEO take to show results?',
    ],
    sources: [
      { label: 'Google Analytics — UTM Parameters', url: 'https://support.google.com/analytics/answer/1033863' },
      { label: 'Google Search Console', url: 'https://search.google.com/search-console/about' },
    ],
  },

  [slugify("What makes the framework's assets compound?")]: {
    lastUpdated: 'July 2026',
    takeaways: [
      'Content assets compound through internal linking — each new article strengthens the topical authority of the whole cluster.',
      'FAQ pages that link to full articles and full articles that link to FAQ pages create a reinforcing citation network.',
      'Review velocity compounds: each new review raises the probability that the next AI engine update includes your business.',
      'Schema signals compound with new content — each new page that validates adds to your structured data coverage.',
      'The compounding effect accelerates after month six when the cluster reaches critical topical mass.',
    ],
    body: `## How authority assets compound over time

A single authority article is a citation candidate. A cluster of twenty internally-linked authority articles covering a topic from multiple angles is a recognized topical authority. AI engines evaluate content clusters differently from isolated pages — a well-structured content hub signals depth of expertise that a single page cannot.

## The internal linking effect

Each new article you publish strengthens the existing cluster through internal links. An article on "how AI engines evaluate business reputation" links to articles on review velocity, schema markup, and entity strategy. Each internal link tells the engine: this site treats this topic with depth and consistency.

The compounding benefit accelerates as the cluster grows. The fifth article in your cluster produces more authority signal than the first, because it has four related articles to reinforce it.

## FAQ-to-article cross-linking

The FAQ page format amplifies compounding because each FAQ page can link to its parent article and to related FAQ pages. An article with eight FAQs generates eight satellite pages, each of which links back to the parent. This creates a hub-and-spoke structure that concentrates topical authority in the central article while distributing it across the full cluster.

## Review velocity compounds

Each new review raises the baseline for the next engine update evaluation. A business with two reviews that gains three more is at five — still a thin dataset. A business with forty-five reviews that gains three more is demonstrating consistent velocity — a very different signal.

The inflection point for most businesses is around thirty to forty recent reviews (within the last twelve months). Below that threshold, AI engines treat review data as insufficient for confident recommendation. Above it, review velocity becomes a competitive moat that takes competitors months to replicate.

## Why this is a moat

The compound nature of the P.E.A.R.L. assets makes them defensible. A competitor can read your articles and publish their own. They cannot instantly acquire your review history, your topical authority cluster, or your entity consistency across hundreds of platforms. Each month of sustained execution widens the gap.`,
    relatedQuestions: [
      'What does P.E.A.R.L. stand for?',
      'What is review velocity and why does it matter?',
      'Why is reputation harder for competitors to copy than other AI signals?',
      'What happens after the 90 days are over?',
    ],
    sources: [
      { label: 'Google Search Central — Content Clusters', url: 'https://developers.google.com/search/docs/fundamentals/creating-helpful-content' },
    ],
  },

  [slugify('Do I have to implement all five pillars at once?')]: {
    lastUpdated: 'July 2026',
    takeaways: [
      'No — the framework is designed to be implemented sequentially, not simultaneously.',
      'Entity (E) is the only pillar that must be completed before the others can compound.',
      'Process (P) documentation can begin in parallel with entity work.',
      'Assets (A) and Reputation (R) are month-two and month-three priorities respectively.',
      'Leverage (L) — automation — is most valuable after the other four pillars have initial implementations in place.',
    ],
    body: `## The sequence is a feature, not a constraint

The P.E.A.R.L. framework is often misread as requiring all five pillars to be running at full capacity from day one. That misreading produces overwhelm and scattered effort. The framework is designed to be implemented sequentially, with each pillar building on the one before.

## The only hard dependency

Entity (E) is the one pillar with a hard sequence dependency. Content published before your entity is resolved floats without confident attribution. Reviews earned before you have citable pages have less to reinforce. Entity first is not optional.

Everything else has more flexibility.

## What can run in parallel

**Process and Entity** can run simultaneously. While you are auditing and cleaning up entity signals, you can also begin drafting your methodology page and identifying case study candidates. Process documentation does not depend on entity resolution.

**Early reputation work can overlap with Entity.** Claiming and completing your Google Business Profile is both entity work and the first step in your review program. Sending review requests to your most satisfied recent customers can begin as soon as your GBP is complete.

## The sequenced build

A realistic phased approach:

- **Month 1:** Entity + Process foundation
- **Month 2:** Assets (first two authority articles + FAQ page structure)
- **Month 3:** Reputation (systematic review program + initial outreach for third-party mentions)
- **Month 4+:** Leverage (automation layers for review requests, content distribution, analytics alerts)

By month four, all five pillars are in motion. By month six, the compound effects of the full stack begin to show measurable visibility improvements in category and problem queries.`,
    relatedQuestions: [
      'What does P.E.A.R.L. stand for?',
      'What should I do in month one?',
      'Why does the sequence matter — can\'t I do everything at once?',
      'Can I really become visible in AI search in 90 days?',
    ],
    sources: [
      { label: 'Google Business Profile Help', url: 'https://support.google.com/business' },
      { label: 'Schema.org — Organization', url: 'https://schema.org/Organization' },
    ],
  },

  // ─── REPUTATION AUTHORITY ───────────────────────────────────────────────────

  [slugify('Do AI engines actually read the text of my reviews, or just the star rating?')]: {
    lastUpdated: 'July 2026',
    takeaways: [
      'Yes — AI engines read and process the full text of your reviews, not just the numeric rating.',
      'Specific service mentions in review text directly feed the category and service queries engines use for recommendations.',
      'Reviews that mention specific outcomes ("saved us $4,000") are more citable than generic praise.',
      'Staff name mentions in reviews reinforce Person entity signals for your team members.',
      'A 4.7-star average with rich, specific review text outperforms a 5.0 average with thin generic reviews.',
    ],
    body: `## Why review text matters more than star ratings

Star ratings are aggregation signals — they tell an engine that a business is generally well-regarded. Review text tells an engine what the business is actually good at, who it serves, and in what specific situations it delivers value.

When a user asks ChatGPT or Perplexity "who is the best accountant for small business taxes in Austin," the engine does not just filter by star rating. It reads the review corpus for signal-rich text that aligns the business with that specific query.

## What AI engines extract from review text

### Service and category signals

Reviews that name specific services ("They handled our quarterly payroll taxes perfectly") are direct signals for category and service queries. A business with ten reviews mentioning "estate planning" is a stronger candidate for estate planning recommendations than a business with fifty generic reviews.

### Outcome signals

Reviews that describe specific, measurable outcomes carry extra weight because they are independently verifiable and citation-worthy. "They helped us increase revenue by 30% in six months" is far more citable than "They were great."

### Person entity signals

Reviews that name specific team members ("Ask for Maria — she went above and beyond") reinforce Person entity signals for those individuals, strengthening the business's expertise credibility.

### Complaint and response signals

How a business responds to negative reviews also signals trustworthiness to AI engines. A measured, specific response to a complaint demonstrates accountability — a quality engines weight positively in recommendation contexts.

## What this means for your review program

Stop treating review requests as a star-rating collection exercise. Guide reviewers to write specific, outcome-focused reviews by:

- Asking them to mention the specific service they received
- Encouraging them to describe a specific outcome or result
- Making it easy to write three sentences, not one
- Responding to every review with a specific, non-templated acknowledgment`,
    relatedQuestions: [
      'Which review platform should I prioritize?',
      'What is review velocity and why does it matter?',
      'How many reviews do I need to show up in AI recommendations?',
      'Should I respond to negative reviews for AI visibility?',
    ],
    sources: [
      { label: 'Google Business Profile — Reviews Best Practices', url: 'https://support.google.com/business/answer/3474050' },
      { label: 'Schema.org — Review', url: 'https://schema.org/Review' },
    ],
  },

  [slugify('Which review platform should I prioritize?')]: {
    lastUpdated: 'July 2026',
    takeaways: [
      'Google Business Profile reviews are the highest priority for most businesses — they feed directly into Google AI Overviews.',
      'The second platform depends on your industry: Yelp for local services, Clutch for B2B agencies, G2 for software.',
      'Diversify across at least two platforms — AI engines weight multi-platform reputation more than single-platform concentration.',
      'Never focus on a platform your customers do not use — irrelevant reviews signal inauthenticity.',
      'Industry-specific directories (Houzz, Avvo, Zocdoc) can outperform general platforms for specialized businesses.',
    ],
    body: `## The platform hierarchy for AI visibility

Not all review platforms carry equal weight across all AI engines and buyer segments. The right platform mix depends on where your buyers do their research and which engines matter most for your business.

### Tier 1: Google Business Profile

For the majority of businesses, GBP reviews are the single highest-impact review platform for AI visibility. They feed directly into Google AI Overviews, Google Maps recommendations, and Google's local knowledge graph. They are also the first thing Perplexity and ChatGPT encounter when crawling for business reputation data.

Every business should prioritize GBP reviews first, regardless of industry.

### Tier 2: Industry-Specific Platforms

Once your GBP review base is established (target: 25+ reviews with recent velocity), invest in the platform most used by your buyer segment:

- **Yelp** — local service businesses (restaurants, salons, contractors, healthcare)
- **Clutch** — B2B agencies, marketing firms, consulting practices
- **G2 / Capterra** — software and SaaS businesses
- **Zocdoc / Healthgrades** — healthcare providers
- **Houzz / Angi** — home improvement and contractor businesses
- **Avvo / Martindale** — legal practices
- **TripAdvisor** — hospitality and tourism businesses

### Tier 3: General Platforms

Facebook, Trustpilot, and Yelp (for non-local businesses) are third-tier — useful for review volume and cross-platform corroboration, but lower signal weight than industry-specific platforms for most query types.

## The multi-platform advantage

AI engines treat multi-platform reputation as a more reliable signal than single-platform concentration. A business with 40 GBP reviews and 20 Clutch reviews is a stronger recommendation candidate than a business with 60 reviews concentrated on one platform — because multi-platform presence corroborates the claims rather than relying on a single source.`,
    comparisonTable: {
      headers: ['Business Type', 'Priority Platform 1', 'Priority Platform 2'],
      rows: [
        { 'Business Type': 'Local service (contractor, salon, etc.)', 'Priority Platform 1': 'Google Business Profile', 'Priority Platform 2': 'Yelp' },
        { 'Business Type': 'Marketing / creative agency', 'Priority Platform 1': 'Google Business Profile', 'Priority Platform 2': 'Clutch' },
        { 'Business Type': 'SaaS / software', 'Priority Platform 1': 'G2', 'Priority Platform 2': 'Capterra' },
        { 'Business Type': 'Healthcare', 'Priority Platform 1': 'Google Business Profile', 'Priority Platform 2': 'Healthgrades / Zocdoc' },
        { 'Business Type': 'Legal', 'Priority Platform 1': 'Google Business Profile', 'Priority Platform 2': 'Avvo / Martindale' },
        { 'Business Type': 'B2B consulting', 'Priority Platform 1': 'Google Business Profile', 'Priority Platform 2': 'Clutch' },
      ],
    },
    relatedQuestions: [
      'Do AI engines actually read the text of my reviews, or just the star rating?',
      'How many reviews do I need to show up in AI recommendations?',
      'What is review velocity and why does it matter?',
      'Is this roadmap different for local versus national businesses?',
    ],
    sources: [
      { label: 'Google Business Profile Help', url: 'https://support.google.com/business/answer/3474050' },
      { label: 'Clutch — How It Works', url: 'https://clutch.co/how-clutch-works' },
    ],
  },

  [slugify('How many reviews do I need to show up in AI recommendations?')]: {
    lastUpdated: 'July 2026',
    takeaways: [
      'There is no magic number — but fewer than 15 recent reviews is almost always insufficient for confident AI recommendation.',
      'Most local businesses need 25–40 recent reviews (within 12 months) to compete for category recommendations.',
      'Review recency matters as much as total count — 10 reviews from last month outperform 100 reviews from 3 years ago.',
      'Specific, outcome-rich review text can compensate partially for lower volume.',
      'Competitors with more reviews will consistently outcompete you in ambiguous category queries.',
    ],
    body: `## Why there is no universal threshold

AI engines do not publish review count thresholds for recommendations — they weight reputation signals holistically. A business with 25 specific, recent reviews in a low-competition market may be recommended confidently. The same 25 reviews in a market where the top three competitors have 200+ would carry much less relative weight.

The more useful frame is competitive adequacy: you need enough reviews to be a credible recommendation candidate relative to your direct competitors.

## The practical benchmarks

Research across multiple local and service categories suggests the following practical benchmarks:

- **Fewer than 15 reviews:** Engines treat review data as insufficient for confident recommendation. You may appear in branded name searches but rarely in category queries.
- **15–25 reviews:** You begin appearing in lower-competition category queries. Recency and specificity matter most at this range.
- **25–50 reviews:** You are a competitive candidate for most local and regional category queries. Review velocity and text quality become the differentiators.
- **50+ reviews with consistent velocity:** You are a strong recommendation candidate. Competitors need sustained effort to overtake you in category queries.

## Why recency matters more than you think

AI engines — particularly Google AI Overviews — weight recent reviews more heavily than historical averages. A business with 80 total reviews but only 3 in the last 12 months signals stagnation. A business with 30 total reviews but 12 in the last 12 months signals an active, growing business.

Target a minimum of four new reviews per month as a standing operational metric — not a campaign goal.

## Quality partially compensates for quantity

A review that describes a specific outcome ("they helped me avoid a $12,000 tax penalty") is more citable than five reviews saying "highly recommend." If you cannot yet achieve volume, prioritize guiding your most satisfied clients to write specific, detailed reviews.`,
    relatedQuestions: [
      'What is review velocity and why does it matter?',
      'Do AI engines actually read the text of my reviews, or just the star rating?',
      'Which review platform should I prioritize?',
      'Should I respond to negative reviews for AI visibility?',
    ],
    sources: [
      { label: 'Google Business Profile — Reviews', url: 'https://support.google.com/business/answer/3474050' },
    ],
  },

  [slugify('What is review velocity and why does it matter?')]: {
    lastUpdated: 'July 2026',
    takeaways: [
      'Review velocity is the rate at which new reviews are published — typically measured as new reviews per month.',
      'AI engines use velocity as a proxy for business activity: a growing review base signals an active, serving business.',
      'Consistent velocity (4+ per month) outperforms periodic spikes (20 in one month, then none for six months).',
      'Velocity decay is one of the fastest ways to lose AI recommendation status you have already earned.',
      'Automated review request sequences are the most reliable way to sustain consistent velocity.',
    ],
    body: `## What review velocity is

Review velocity is the rate at which your business accumulates new reviews over time, typically expressed as reviews per month or reviews per quarter. It is distinct from your total review count or your average star rating.

An older business might have 150 reviews and a 4.8-star average — but if only 3 of those reviews are from the last 12 months, the velocity signal is extremely weak.

## Why AI engines care about velocity

AI engines are designed to recommend businesses that are currently active, currently serving customers, and currently delivering the quality they advertise. An old review base tells the engine that a business was good — not that it is good now.

Review velocity is the primary signal that answers the engine's implicit question: *is this business still operating at the quality level that earned its reputation?*

A business with 25 reviews from the last six months demonstrates current relevance. A business with 100 reviews from three years ago, with no recent additions, raises a quiet question the engine resolves in favor of the more active competitor.

## The consistency rule

Velocity spikes — 20 reviews in one month after a campaign, then silence for five months — are less valuable than consistent monthly additions. Engines evaluating a sudden spike of reviews may treat them with lower confidence (a pattern associated with solicited review campaigns). A steady 4–6 reviews per month is both more trustworthy and more defensible over time.

## How to build sustainable velocity

The most reliable method is an automated review request sequence triggered at the right moment in your customer journey — typically 24–72 hours after a successful delivery or completed service. The sequence should:

1. Send a warm request from a named individual, not a generic company email
2. Link directly to your Google Business Profile review form
3. Follow up once, three to five days later, if no review was received
4. Stop after one follow-up — do not over-request

A well-designed sequence converts 20–40% of satisfied customers into reviewers. At that rate, a business serving 20 customers per month generates 4–8 new reviews monthly without any manual effort.`,
    relatedQuestions: [
      'How many reviews do I need to show up in AI recommendations?',
      'Do AI engines actually read the text of my reviews, or just the star rating?',
      'Which review platform should I prioritize?',
      'Why is reputation harder for competitors to copy than other AI signals?',
    ],
    sources: [
      { label: 'Google Business Profile — Review Best Practices', url: 'https://support.google.com/business/answer/3474050' },
    ],
  },

  [slugify('Should I respond to negative reviews for AI visibility?')]: {
    lastUpdated: 'July 2026',
    takeaways: [
      'Yes — responding to negative reviews signals accountability and professionalism, both of which AI engines weight.',
      'A thoughtful response to a negative review often matters more for AI recommendations than the negative review itself.',
      'Never respond defensively or blame the reviewer — engines read response tone as a signal of trustworthiness.',
      'Respond within 24 hours — response speed is itself a trust signal.',
      'Acknowledge the specific concern, offer resolution, and invite direct contact — this is the structure engines find most credible.',
    ],
    body: `## Why negative review responses matter for AI visibility

AI engines do not just read your reviews — they read your responses to reviews. The way a business responds to criticism is one of the strongest trustworthiness signals available to engines that cannot visit your office or interview your clients.

A business that ignores negative reviews signals that it does not take accountability seriously. A business that responds defensively signals fragility. A business that responds specifically, constructively, and with an offer to make things right signals the kind of professionalism that engines confidently recommend.

## The anatomy of a credible response

A high-signal negative review response has four components:

1. **Acknowledgment** — confirm you read the review and understand the concern ("I hear you, and I am sorry your experience with the timeline did not meet expectations.")
2. **Specificity** — reference the specific situation, not a generic template ("Our typical delivery window is 5–7 days, and your project extended beyond that.")
3. **Accountability** — take ownership of what went wrong without deflection
4. **Resolution path** — invite the reviewer to contact you directly to resolve the issue ("Please reach out to me at [email] so I can make this right.")

What to avoid: generic templated responses ("Thank you for your feedback, we're sorry to hear this..."), defensive language that challenges the reviewer's account, or responses that offer excuses rather than ownership.

## The counter-intuitive benefit

A negative review with a strong, specific response can actually improve your AI recommendation standing relative to competitors with all-positive reviews but no responses at all. The negative review signals you serve enough clients that some situations go wrong. The response signals you care enough to make them right. That combination is one of the most authentic trust signals an AI engine can observe.

## Response timing

Respond within 24 hours. Engines that index review activity treat slow or absent responses as a negative signal. Many review platforms display response recency — a response from three days ago is visible to users and engines alike.`,
    relatedQuestions: [
      'Do AI engines actually read the text of my reviews, or just the star rating?',
      'How many reviews do I need to show up in AI recommendations?',
      'What is review velocity and why does it matter?',
      'Why is reputation harder for competitors to copy than other AI signals?',
    ],
    sources: [
      { label: 'Google Business Profile — Responding to Reviews', url: 'https://support.google.com/business/answer/3474050' },
    ],
  },

  [slugify('Why is reputation harder for competitors to copy than other AI signals?')]: {
    lastUpdated: 'July 2026',
    takeaways: [
      'Reviews cannot be manufactured quickly without violating platform terms — authentic review velocity takes months to build.',
      'Third-party mentions require relationships and track record that cannot be created overnight.',
      'Press citations depend on journalists and editors who evaluate credibility independently.',
      'A competitor who starts their review program today is 12–24 months behind a business that has been running one consistently.',
      'The compounding nature of reputation signals makes early movers increasingly hard to displace.',
    ],
    body: `## Why reputation is a moat

Schema markup can be copied in an afternoon. A website can be redesigned in a week. A competitor can read your authority articles and publish their own version within a month. These signals are valuable — but they are not defensible.

Reputation signals are different. They require time, genuine customer relationships, and third-party cooperation that no amount of budget can instantly accelerate.

## The time lag on reviews

A competitor who decides today to build their review program will run their first automated request sequence next week, receive their first reviews within two to four weeks, and reach 25 reviews in three to four months if they are disciplined. By that point, a business that has been running a consistent program for twelve months already has 60–80 recent reviews and established velocity.

That twelve-month gap cannot be shortened. It can only be started.

## The credibility filter on third-party mentions

Press mentions, industry publication features, and curated directory listings require journalists, editors, and directory managers to independently conclude that your business is worth featuring. These gatekeepers evaluate track record, credibility, and relevance — criteria that cannot be faked by budget alone.

A startup with two months of operation cannot get a meaningful press mention in a credible industry publication, regardless of how much it spends on PR. A business with three years of documented results, specific client outcomes, and a visible founder can.

## The compound effect

The most defensible aspect of reputation authority is its compound nature. Each review adds to a history that the next review builds on. Each press mention adds to a track record that the next journalist checks. Each directory listing adds to a web of third-party corroboration that makes your entity easier to recommend with confidence.

A competitor starting from zero faces not just a quantity gap but a credibility gap — a history of demonstrated reliability that takes years to replicate at full depth.`,
    relatedQuestions: [
      'What is review velocity and why does it matter?',
      "What makes the framework's assets compound?",
      'Do AI engines actually read the text of my reviews, or just the star rating?',
      'How many reviews do I need to show up in AI recommendations?',
    ],
    sources: [
      { label: 'Google Business Profile — Review Policies', url: 'https://support.google.com/contributionpolicy/answer/7422880' },
    ],
  },

  // ─── CONTENT ARCHITECTURE ───────────────────────────────────────────────────

  [slugify('Why do AI engines rely on the About page specifically?')]: {
    lastUpdated: 'July 2026',
    takeaways: [
      'The About page is the first place AI engines look to resolve what a business is and who runs it.',
      'It is the canonical identity document for your entity — the page that answers "who are you?" directly.',
      'AI engines use About page content to establish the founder\'s credentials, the business\'s specialty, and the geographic scope.',
      'A weak or absent About page forces the engine to guess — and it guesses conservatively, which means fewer recommendations.',
      'A well-structured About page can produce measurable AI visibility improvement within weeks of publishing.',
    ],
    body: `## The About page as an identity document

When an AI engine encounters your business for the first time — or re-evaluates it during an indexing pass — it needs to answer several foundational questions: Who runs this business? What do they specifically do? Where do they operate? What makes them credible? When did they start?

The About page is the page purpose-built to answer those questions. It is not a marketing page. It is an identity document.

AI engines prioritize the About page for entity resolution because it is the most likely place to find explicit, self-declared facts in a structured and coherent form. A service page describes what you sell. A blog post describes what you know. The About page describes who you are.

## What AI engines extract from a good About page

### Founder identity

Engines extract the founder or key principal's name, title, credentials, and professional background. This feeds the Person entity — the individual associated with the business whose credibility reinforces the business's expertise signals.

### Business identity facts

Founding year, legal name, city of operation, primary service category, and differentiating positioning statement are all extracted and used to populate the entity model.

### Credential signals

Any verifiable credentials — certifications, industry memberships, publications, speaking history — are read as expertise evidence. The more specific and verifiable, the stronger the signal.

### sameAs references

Links from the About page to your Google Business Profile, LinkedIn, professional association profile, and industry directories are treated as explicit sameAs declarations — connections that tell the engine where to find more information about this entity.

## What happens with a weak About page

A weak About page — one that speaks in vague marketing language, lacks specific facts, and contains no verifiable credentials or external links — leaves the engine to infer from secondary signals. Inference is less confident than direct statement. Less confident resolution means fewer recommendations.`,
    relatedQuestions: [
      'What is the single most important thing to add to my About page?',
      'Do I really need schema markup on my About page?',
      'What are sameAs links and why do they matter?',
      'Can a bad About page actually hurt me?',
    ],
    sources: [
      { label: 'Google — E-E-A-T Guidelines', url: 'https://developers.google.com/search/docs/fundamentals/creating-helpful-content' },
      { label: 'Schema.org — Person', url: 'https://schema.org/Person' },
    ],
  },

  [slugify('What is the single most important thing to add to my About page?')]: {
    lastUpdated: 'July 2026',
    takeaways: [
      'A clear, factual identity statement in the first paragraph — who you are, what you do, where you do it, for whom.',
      'This single paragraph is what most AI engines read first and weight most heavily for entity resolution.',
      'Generic mission statements ("we help businesses grow") are near-worthless; specific factual claims are high-signal.',
      'Every additional element (schema, sameAs links, credentials) amplifies this foundation.',
      'If you only change one thing on your About page, change the opening paragraph to be factually specific.',
    ],
    body: `## The opening paragraph as primary signal

AI engines do not read your entire About page with equal attention. The first substantive paragraph — the one that answers "who are you?" — receives the highest weighting in entity resolution. This is the text most likely to appear in the engine's internal model of your business.

Most About pages fail at this paragraph. They open with mission statements ("We believe in building lasting relationships"), philosophical claims ("Excellence is at the heart of everything we do"), or generic service descriptions ("We help businesses achieve their goals"). None of these are citable facts.

## What the opening paragraph should contain

A high-signal About page opening answers six questions in plain, specific language:

1. **Who:** The business name and the founder's or key principal's full name
2. **What:** The specific service or product category — not a generic description
3. **Where:** The city, region, or market served — specific enough to support geographic entity resolution
4. **For whom:** The specific client type or industry served
5. **Since when:** The founding year — a simple fact that signals track record
6. **Why different:** One specific differentiator — not "high quality" but a named methodology, credential, or approach

**Example (weak):** "Apex Solutions is a professional services firm dedicated to helping businesses succeed through strategic guidance and innovative thinking."

**Example (strong):** "Apex Solutions is a financial planning practice founded in 2018 by CFP-certified advisor Jordan Kim, based in Denver, Colorado. We specialize in retirement planning for self-employed professionals and business owners in the Mountain West."

The strong version gives an engine six citable facts. The weak version gives it zero.

## After the opening paragraph

Once the identity statement is in place, the highest-value additions are:
1. Organization + Person JSON-LD schema on the same page
2. sameAs links to your Google Business Profile, LinkedIn, and professional association
3. A credentials or expertise section with verifiable qualifications
4. A specific methodology or approach section that demonstrates process depth`,
    relatedQuestions: [
      'Why do AI engines rely on the About page specifically?',
      'Do I really need schema markup on my About page?',
      'What are sameAs links and why do they matter?',
      'Why does documented process matter for AI visibility?',
    ],
    sources: [
      { label: 'Google — Helpful Content Guidelines', url: 'https://developers.google.com/search/docs/fundamentals/creating-helpful-content' },
      { label: 'Schema.org — Organization', url: 'https://schema.org/Organization' },
    ],
  },

  [slugify('Do I really need schema markup on my About page?')]: {
    lastUpdated: 'July 2026',
    takeaways: [
      'Yes — schema markup on your About page is the highest-leverage single technical action for entity recognition.',
      'Schema converts your page\'s factual content into machine-readable structured data that engines can process without interpretation.',
      'Organization + Person schema on the About page establishes your entity\'s core attributes in the format engines prefer.',
      'Without schema, engines infer your identity from unstructured text — a lower-confidence process that produces fewer recommendations.',
      'Schema validation must pass with zero errors — broken schema is worse than no schema.',
    ],
    body: `## Why schema on the About page specifically

You can add schema to any page on your site. But the About page is where schema has the highest impact for entity recognition, because it is the page where entity-establishing facts are most concentrated.

Organization schema on your About page explicitly declares:
- Your business name, URL, and logo
- Your description in structured format
- Your contact information
- Your sameAs links to external authoritative profiles
- Your founding date, geographic area, and category

Person schema on the same page declares:
- The founder's or key principal's name, title, and credentials
- Their affiliation with the organization
- Their sameAs links to LinkedIn, professional directories, and other authoritative profiles

This combination gives AI engines a machine-readable identity document — one they can process with certainty rather than infer from natural language.

## The difference between structured and unstructured content

Without schema, an engine reads your About page as natural language text and applies natural language understanding to extract facts. This process introduces ambiguity: is "Jordan Kim" the founder or a client? Is "Denver" the headquarters or a service area? Is "since 2018" the founding date or the date of a specific service?

With Organization and Person schema, every fact is declared explicitly in a structured format the engine processes without ambiguity. No inference required — just structured data consumption.

## Implementation basics

Organization and Person schema are implemented as JSON-LD — a JavaScript object embedded in a script tag in your page's head element. It does not affect the visual design of your page and does not require a developer to implement in most website platforms.

After implementing:
1. Validate at schema.org/validator — zero errors required
2. Test at search.google.com/test/rich-results
3. Re-validate after any changes to your About page content`,
    relatedQuestions: [
      'Which schema type should I add first?',
      'Why do AI engines rely on the About page specifically?',
      'What are sameAs links and why do they matter?',
      "What's the difference between a website and an entity?",
    ],
    sources: [
      { label: 'Schema.org — Organization', url: 'https://schema.org/Organization' },
      { label: 'Schema.org — Person', url: 'https://schema.org/Person' },
      { label: 'Google Rich Results Test', url: 'https://search.google.com/test/rich-results' },
    ],
  },

  [slugify('What are sameAs links and why do they matter?')]: {
    lastUpdated: 'July 2026',
    takeaways: [
      'sameAs links are explicit connections from your website to external authoritative profiles — they tell AI engines where to find more information about your entity.',
      'They are the primary mechanism by which engines corroborate your entity claims across multiple sources.',
      'A sameAs link to your Google Business Profile is the single highest-value sameAs connection for most businesses.',
      'sameAs links must be consistent with the entity information on each linked platform.',
      'Every major external profile you control should be connected via a sameAs declaration.',
    ],
    body: `## What sameAs means in practice

In schema.org terminology, the \`sameAs\` property is used to link your entity to other representations of the same entity on external platforms. When your Organization schema includes a sameAs link to your Google Business Profile, you are telling every engine that crawls your schema: "The entity at this URL is the same as the entity described at that GBP profile."

This is how AI engines build corroborated entity models — by following sameAs links from your site to external profiles, verifying that the information is consistent, and combining all the signals into a more confident entity resolution.

## Why corroboration matters

An engine that sees only your own website making claims about who you are has one source: you. An engine that can follow sameAs links to your Google Business Profile, LinkedIn page, professional association directory, and industry listing has five or six corroborating sources — each of which independently confirms your name, category, location, and credentials.

Corroborated entity claims are more confidently cited in recommendations. An unverified claim is a single data point. A corroborated claim is evidence.

## The high-value sameAs targets

Priority sameAs links for most businesses:
1. **Google Business Profile** — highest value for local and AI Overviews recommendations
2. **LinkedIn** (company page) — high value for professional services and B2B categories
3. **Professional association directory** — high value if your industry has a recognized credentialing body
4. **Industry-specific directory** — Clutch, G2, Houzz, Avvo, etc., depending on your category
5. **Facebook Business Page** — moderate value as a secondary corroboration source
6. **Yelp / TripAdvisor** — high value for service and hospitality businesses

## How to implement sameAs

In your Organization JSON-LD schema, add a \`sameAs\` array:

\`\`\`
"sameAs": [
  "https://g.page/your-business-profile",
  "https://www.linkedin.com/company/your-company",
  "https://www.yelp.com/biz/your-business"
]
\`\`\`

Every URL you include must link to a profile that consistently matches your declared entity information — same name, same address, same category. Inconsistent profiles weaken rather than reinforce your entity.`,
    relatedQuestions: [
      'Do I really need schema markup on my About page?',
      'Why does inconsistent business info hurt so much?',
      "What's the difference between a website and an entity?",
      'Why do AI engines rely on the About page specifically?',
    ],
    sources: [
      { label: 'Schema.org — sameAs Property', url: 'https://schema.org/sameAs' },
      { label: 'Google — Knowledge Graph Overview', url: 'https://blog.google/products/search/introducing-knowledge-graph-things-not/' },
    ],
  },

  [slugify('Can a bad About page actually hurt me?')]: {
    lastUpdated: 'July 2026',
    takeaways: [
      'Yes — a weak About page does not just fail to help; it forces AI engines to resolve your entity with less confidence.',
      'Generic marketing language on your About page is actively less useful than a plain factual statement.',
      'Conflicting information between your About page and your external profiles creates entity ambiguity that suppresses recommendations.',
      'An About page that makes unverifiable expertise claims can trigger lower trustworthiness weighting.',
      'The most common damage is invisible: you simply never appear in category queries you should win.',
    ],
    body: `## The invisible damage of a weak About page

The damage done by a bad About page is mostly invisible. You do not receive a penalty notification. You do not see your rankings drop overnight. What happens instead is quieter: AI engines resolve your entity with lower confidence and bias toward recommending competitors whose identity is clearer.

This shows up as absence rather than as active suppression. You do not appear in category queries where you should be competitive. Potential clients ask ChatGPT for a recommendation in your category and your name does not come up — not because you were penalized, but because the engine was not confident enough in what you are to stake a recommendation on you.

## Specific ways a bad About page hurts

### Generic mission statements

"We are dedicated to excellence and client satisfaction" is not a citable fact. An engine that extracts this as your primary identity statement has almost nothing to work with. The business that says "We are a certified financial planning practice serving retirees in the Phoenix metro area since 2016" gives the engine six facts to work with.

### Conflicting information

An About page that lists your founding year as 2015 when your Google Business Profile says 2017, or that lists your primary location as "nationwide" when your GBP is registered in Nashville, creates entity ambiguity. Engines that encounter conflicting self-declarations resolve the conflict by reducing confidence — which means fewer recommendations.

### Unverifiable expertise claims

"Our team of experts has decades of combined experience" is a common About page phrase that carries no signal weight. It is unverifiable, non-specific, and indistinguishable from the same sentence on every competitor's page. Verifiable alternatives: named credentials, specific certifications with issuing bodies, published works, or measurable client outcomes.

## The fix is fast

Rewriting your About page to include specific, factual, verifiable content is one of the highest-ROI GEO improvements available — it takes hours, not months, and produces measurable signal improvement within weeks of re-crawling.`,
    relatedQuestions: [
      'Why do AI engines rely on the About page specifically?',
      'What is the single most important thing to add to my About page?',
      'Why does inconsistent business info hurt so much?',
      'How long does it take for changes to show up in AI results?',
    ],
    sources: [
      { label: 'Google — Helpful Content Guidelines', url: 'https://developers.google.com/search/docs/fundamentals/creating-helpful-content' },
    ],
  },

  [slugify('How long does it take for changes to show up in AI results?')]: {
    lastUpdated: 'July 2026',
    takeaways: [
      'Google AI Overviews typically reflects schema and content changes within 1–4 weeks after re-crawling.',
      'ChatGPT and Gemini update their knowledge on longer cycles — expect 4–12 weeks for significant changes to appear.',
      'Perplexity can reflect content changes faster than ChatGPT because it crawls the live web for each query.',
      'Entity changes (schema, GBP updates) propagate faster than content changes.',
      'The best indicator of propagation is your Google Search Console crawl data, not the AI engines themselves.',
    ],
    body: `## The propagation lag by engine

Different AI engines update their knowledge on different cadences, which means changes you make to your website, schema, or Google Business Profile take different amounts of time to appear in each engine's recommendations.

### Google AI Overviews

Google crawls your site continuously but re-evaluates structured data and entity signals on a rolling schedule. Most schema changes are reflected in Google's index within 1–4 weeks. AI Overviews are generated from this index, so changes made to your schema and About page today are typically visible in AI Overviews within 2–6 weeks.

GBP updates (category changes, description updates, new photos) can propagate into AI Overviews faster — sometimes within days for high-activity profiles.

### Perplexity

Perplexity crawls the live web to source answers, which means it can reflect your content changes faster than engines that rely on training data. A new authority article can appear in Perplexity results within days to a couple of weeks of publication.

### ChatGPT

ChatGPT's knowledge draws from both training data (which updates on a longer cycle) and Browse (which accesses live web content for specific queries). For entity-level information (who is your business, what do you do), changes propagate on a training cycle timeline — expect 4–12 weeks for significant entity changes to be reflected consistently.

### Gemini

Gemini draws heavily from Google's knowledge graph, meaning its entity update cadence closely follows Google's. GBP and schema changes can appear relatively quickly; deep entity model changes take longer.

## What you can control

You cannot force any engine to re-crawl your site immediately. What you can do:
- Submit updated pages to Google Search Console for indexing
- Verify your GBP changes are live within the platform
- Monitor your Search Console crawl activity to confirm your updates have been seen
- Use Perplexity to get the fastest read on whether your new content is being cited`,
    relatedQuestions: [
      'How do I know if GEO is working?',
      'How often should I run an AI visibility audit?',
      'Can a bad About page actually hurt me?',
      'Which AI engine matters most for my business?',
    ],
    sources: [
      { label: 'Google Search Console — Indexing', url: 'https://support.google.com/webmasters/answer/6065812' },
      { label: 'Google Search Status Dashboard', url: 'https://status.search.google.com/' },
    ],
  },

  // ─── PRACTICAL GEO / AUDIT ──────────────────────────────────────────────────

  [slugify('How often should I run an AI visibility audit?')]: {
    lastUpdated: 'July 2026',
    takeaways: [
      'Run a full baseline audit before starting any GEO work — this is your comparison point for everything.',
      'Re-run the full audit every 90 days during the active build phase.',
      'After achieving category visibility, quarterly audits are sufficient for most businesses.',
      'Run a spot audit any time a competitor launches, a major platform updates, or you make significant changes to your entity.',
      'Use the same query set each time — consistency in testing is what makes progress measurable.',
    ],
    body: `## The audit cadence by phase

The frequency of your AI visibility audits should match the pace of change in your GEO program and competitive environment.

### Phase 1: The baseline (before you start)

Before any GEO work, run a full audit. Test your business against 10–15 queries across ChatGPT, Perplexity, Google AI Overviews, and Gemini. Document exactly what each engine says — whether you appear, in what context, and which competitors are cited instead.

This baseline is the most important audit you will ever run. Without it, you cannot measure progress or attribute improvements to specific actions.

### Phase 2: Monthly checks during the foundation stage (months 1–3)

During the first 90 days, run a lightweight check monthly — not the full query set, but a sample of 5–6 representative queries. The goal is to confirm your schema changes and entity updates are propagating, catch any regressions quickly, and build a sense of what the engines are seeing.

### Phase 3: Quarterly full audits (months 4+)

After your foundation is complete, quarterly full audits are sufficient for most businesses in stable competitive environments. A quarterly audit takes 60–90 minutes and covers the full query set against all four engines.

### Triggered audits

Run a spot audit whenever:
- A significant competitor launches or changes their GEO program
- Google, ChatGPT, or Perplexity announces a major platform update
- You make significant changes to your entity, schema, or content architecture
- You receive an unexpected surge or drop in AI-attributed inquiries

## The consistency rule

Use the same query set every time. Adding new queries mid-program makes it impossible to compare results across periods. If you want to test new query types, create a separate expansion set and track them independently from your baseline set.`,
    relatedQuestions: [
      'How do I know if GEO is working?',
      'What metrics should I track over the 90 days?',
      'Do I need paid tools to audit my AI visibility?',
      'Why should I run queries while logged out?',
    ],
    sources: [
      { label: 'Google Search Console', url: 'https://search.google.com/search-console/about' },
      { label: 'Schema.org Validator', url: 'https://validator.schema.org/' },
    ],
  },

  [slugify('Do I need paid tools to audit my AI visibility?')]: {
    lastUpdated: 'July 2026',
    takeaways: [
      'No — a rigorous AI visibility audit can be run entirely with free tools.',
      'ChatGPT, Perplexity, Google AI Overviews, and Gemini are all free to access.',
      'Google Search Console, Schema.org Validator, and the Rich Results Test are free and essential.',
      'Paid tools add convenience and automation but do not access data unavailable in free tools.',
      'Start with free tools; add paid tools when audit volume makes manual processes unsustainable.',
    ],
    body: `## What you need for a complete free audit

A rigorous AI visibility audit requires five categories of checking. All can be done at zero cost.

### 1. AI engine query testing

Test your business against 10–15 queries across:
- **ChatGPT** (free tier) — chat.openai.com, with Browse enabled
- **Perplexity** (free tier) — perplexity.ai
- **Google AI Overviews** — standard Google Search (logged out)
- **Gemini** (free tier) — gemini.google.com

Run all tests in incognito mode while logged out of your accounts. Logged-in results reflect personalization that does not represent what a new potential client would see.

### 2. Schema validation

- **Schema.org Validator** (validator.schema.org) — free, validates all schema types
- **Google Rich Results Test** (search.google.com/test/rich-results) — free, tests Google-specific rich result eligibility

### 3. Entity consistency check

Manually search your business name on Google, Yelp, Facebook, LinkedIn, and the top 3 industry directories in your category. Verify that your Name, Address, and Phone (NAP) are identical across all platforms. This is tedious manually but requires no paid tool.

### 4. GBP completeness check

Google Business Profile Manager is free. Check your profile completeness score and identify missing fields manually.

### 5. Content coverage check

Use a free tool like Google's "site:" operator to inventory your indexed pages. Identify which service and FAQ topics are covered and which are absent.

## When paid tools add value

Paid tools like Semrush, Ahrefs, or specialist GEO platforms add value when:
- You have too many locations to audit manually
- You need competitive benchmarking across dozens of competitors
- You want automated alerts for entity or ranking changes
- You are running audits for multiple clients simultaneously

For a single business running quarterly audits, free tools are sufficient indefinitely.`,
    relatedQuestions: [
      'How often should I run an AI visibility audit?',
      'Why should I run queries while logged out?',
      'What metrics should I track over the 90 days?',
      'How do I know if GEO is working?',
    ],
    sources: [
      { label: 'Schema.org Validator', url: 'https://validator.schema.org/' },
      { label: 'Google Rich Results Test', url: 'https://search.google.com/test/rich-results' },
      { label: 'Google Search Console', url: 'https://search.google.com/search-console/about' },
    ],
  },

  [slugify('Why should I run queries while logged out?')]: {
    lastUpdated: 'July 2026',
    takeaways: [
      'AI engines personalize results based on your search history, location, and account data — logged-in results are not what new clients see.',
      'Running queries while logged out shows you the cold-start experience: what an engine recommends to someone who has never heard of you.',
      'Your business may appear prominently in your logged-in results because you have searched for it before — a false positive.',
      'Use incognito mode in addition to logging out — some personalization persists in browser cookies even without account login.',
      'The logged-out, incognito result is the only honest baseline for AI visibility measurement.',
    ],
    body: `## Why personalization distorts your audit

When you run AI engine queries while logged into your Google, ChatGPT, or Perplexity account, you are testing a personalized view of the engine's output. The engine knows your search history, your location, your preferences, and in many cases the businesses you have previously researched or visited.

If you have ever searched for your own business, visited your own website, or interacted with your Google Business Profile as an owner, the engine's personalization layer has flagged your business as relevant to you specifically. This means you are more likely to appear in your own logged-in queries than you are in the queries of a potential client who has never heard of you.

## The cold-start test

The metric that matters for GEO is the cold-start experience: what does an AI engine recommend to someone who:
- Has never heard of your business
- Has not visited your website
- Is not in your geographic area or network
- Has no prior signal indicating your relevance

This is what a new potential client experiences. Running your audit while logged out and in incognito mode approximates this experience.

## How to run a clean audit

1. Open a fresh incognito window (Ctrl/Cmd + Shift + N in most browsers)
2. Do not log into any AI engine account within that session
3. If testing Google AI Overviews, do not log into your Google account
4. Clear your browser's location permission or use a VPN to a neutral location if testing local queries from your own address

## What you are actually measuring

A clean, logged-out audit measures your business's organic recommendation probability — the likelihood that an unfamiliar user, asking a relevant query, encounters your business in the AI's response. This is the only version of the metric that matters for new customer acquisition.`,
    relatedQuestions: [
      'How often should I run an AI visibility audit?',
      'Do I need paid tools to audit my AI visibility?',
      'How do I know if GEO is working?',
      'What metrics should I track over the 90 days?',
    ],
    sources: [
      { label: 'Google — Incognito Mode and Search', url: 'https://support.google.com/chrome/answer/95464' },
    ],
  },

  [slugify('What if the AI engines have my information wrong?')]: {
    lastUpdated: 'July 2026',
    takeaways: [
      'AI engines can have incorrect information about your business — this is one of the most important audit findings to address.',
      'The primary correction mechanism is making your own authoritative sources (GBP, website schema, sameAs profiles) clearly correct and consistent.',
      'You can submit corrections directly to Google Business Profile, Yelp, and most major directories.',
      'ChatGPT and Perplexity do not have direct correction submission tools — you correct them by fixing the sources they crawl.',
      'Corrections typically take 4–12 weeks to propagate through all engines.',
    ],
    body: `## Why engines get information wrong

AI engines synthesize information from multiple sources: training data, web crawling, structured data feeds, and aggregated review platforms. When those sources contradict each other or contain outdated information, the engine may surface incorrect details about your business — wrong address, wrong category, wrong founding year, wrong services.

This is more common than most businesses realize. It is also one of the most important issues to find and fix in your AI visibility audit.

## The correction hierarchy

### Step 1: Fix your primary sources

AI engines weight some sources much more heavily than others. Fixing incorrect information at the primary source is faster and more reliable than trying to correct engines directly.

**Highest priority:**
- **Google Business Profile** — the highest-weight local entity source for most engines. Corrections go live within 24–72 hours in most cases.
- **Your own website schema** — JSON-LD structured data on your site is read directly by every engine that crawls it. Correct your schema and submit the page for re-indexing in Google Search Console.
- **Your About page** — rewrite any factual information that contradicts what engines are currently showing.

### Step 2: Correct secondary sources

Fix incorrect information in Yelp, Facebook Business, LinkedIn, industry directories, and any other platforms in your sameAs array. These corrections take longer to propagate into engine knowledge models but are necessary for full corroboration.

### Step 3: Direct engine feedback

- **Google AI Overviews:** Use the "More about this result" feedback link on AI Overview cards
- **Bing Copilot:** Bing Webmaster Tools has a correction submission pathway
- **ChatGPT / Perplexity:** No direct correction tool — fixing your source pages is the primary lever

## What to do about persistent errors

If incorrect information persists after 60+ days of source corrections, the error may be coming from a source you have not yet identified. Run a broader audit: search your business name across 15+ platforms and look for the source that still carries the wrong information.`,
    relatedQuestions: [
      'Why does inconsistent business info hurt so much?',
      'How often should I run an AI visibility audit?',
      'How long does it take for changes to show up in AI results?',
      'What are sameAs links and why do they matter?',
    ],
    sources: [
      { label: 'Google Business Profile — Edit Your Business Info', url: 'https://support.google.com/business/answer/3039617' },
      { label: 'Google Search Console — URL Inspection', url: 'https://support.google.com/webmasters/answer/9012289' },
    ],
  },

  [slugify('Why do I appear when named but not in category searches?')]: {
    lastUpdated: 'July 2026',
    takeaways: [
      'Appearing for your brand name means your entity is resolved; not appearing for category queries means your topical authority is insufficient.',
      'Category visibility requires content that answers the questions buyers ask when they don\'t know your name.',
      'Review specificity matters: reviews that mention specific services boost category query appearance.',
      'Your FAQ and authority content must target problem and category queries, not just branded terms.',
      'This gap is the most common AI visibility issue — and one of the most valuable to close.',
    ],
    body: `## The two levels of AI visibility

There are two meaningfully different levels of AI engine presence:

**Level 1: Branded name recognition.** When someone asks "What does [Your Business Name] do?" or "Is [Your Business Name] any good?" the engine can answer. This means your entity is resolved — the engine knows who you are.

**Level 2: Category recommendation.** When someone asks "Who should I hire for [your service] in [your area]?" or "What's the best [your business type] for [specific situation]?" the engine recommends you without being asked specifically. This means your authority is sufficient for unprompted recommendation.

Most businesses achieve Level 1 within weeks of basic entity work. Level 2 is where the significant business value lies, and it takes substantially more investment.

## Why the gap exists

AI engines recommend businesses in category queries based on the strength of category authority signals:

- **Topical content coverage** — do you have authority articles answering the questions buyers ask in your category?
- **Review specificity** — do your reviews mention the specific services engines use to match you to category queries?
- **Schema category alignment** — does your LocalBusiness or Organization schema accurately declare your primary category and subcategories?
- **Competitive standing** — how do your authority signals compare to the businesses currently being recommended?

## How to close the gap

### Content: Target category and problem queries

Publish authority articles that answer the questions buyers ask before they know your name:
- "How to choose a [your service type] in [your city]"
- "What to expect from [your service] process"
- "Signs you need [your service] now"

These titles match the query patterns engines use when composing category recommendations.

### Reviews: Request service-specific feedback

Ask satisfied clients to mention the specific service they received in their review. A review that says "Their quarterly tax planning saved us money three years in a row" is a direct match for "best tax planner for small businesses" — a category query.

### Schema: Declare your category explicitly

Ensure your schema's \`serviceType\`, \`hasOfferCatalog\`, or \`knowsAbout\` fields explicitly list the categories and services you want to appear for. Engines that cannot determine your category from schema alone must infer it from content — a less confident process.`,
    relatedQuestions: [
      'How do I know if GEO is working?',
      'Do AI engines actually read the text of my reviews, or just the star rating?',
      'What is a good AI visibility score?',
      'How long does GEO take to show results?',
    ],
    sources: [
      { label: 'Schema.org — LocalBusiness', url: 'https://schema.org/LocalBusiness' },
      { label: 'Google Business Profile — Categories', url: 'https://support.google.com/business/answer/3038177' },
    ],
  },

  [slugify('What is a good AI visibility score?')]: {
    lastUpdated: 'July 2026',
    takeaways: [
      'There is no industry-standard AI visibility score — you must define your own scoring system against your baseline.',
      'A useful visibility score tracks: what percentage of your test queries return a citation or recommendation for your business.',
      'A score above 60% across your core query set is a strong performance for most businesses.',
      'Progress matters more than absolute score — consistent improvement over 90 days is more meaningful than hitting a target number.',
      'Compare your score against your direct competitors, not against a generic benchmark.',
    ],
    body: `## Why there is no universal standard

Unlike domain authority (a proprietary 0–100 score published by Moz and Ahrefs) or keyword ranking position (a 1–10 scale), there is no published, standardized AI visibility score. AI engine operators do not release the factors or weights that determine recommendation probability.

This means your AI visibility score is necessarily self-defined — a structured measurement you create and track over time.

## A practical scoring framework

Here is a framework used to build meaningful, comparable visibility scores:

### Step 1: Build a query set

Create a query set of 15–20 queries that represent how potential clients find businesses like yours. Include:
- 5 branded queries ("What does [Your Business Name] do?")
- 5 category queries ("Best [service type] in [city]")
- 5 problem queries ("Who should I call if [specific problem]?")
- 5 comparison queries ("Should I use [Your Business Name] or [Competitor]?")

### Step 2: Test across four engines

Run each query in ChatGPT, Perplexity, Google AI Overviews, and Gemini while logged out. Record whether your business appears in the response — as the primary recommendation, as a named alternative, or not at all.

### Step 3: Score by query type and engine

Award points:
- Primary recommendation: 3 points
- Named as a credible alternative: 1 point
- Not mentioned: 0 points

Maximum score: 15 queries × 4 engines × 3 points = 180 points.

### Interpreting your score

- **0–30% of maximum:** Entity foundation needs work. Focus on schema, GBP, and About page.
- **30–60% of maximum:** Foundation is established; content and reputation authority need investment.
- **60–80% of maximum:** Strong performance. Category query gaps remain — focus on content targeting those queries.
- **80%+ of maximum:** Category authority achieved. Maintenance and competitor monitoring are the priority.`,
    comparisonTable: {
      headers: ['Score Range', 'Interpretation', 'Primary Action'],
      rows: [
        { 'Score Range': '0–30%', Interpretation: 'Entity not resolved or missing', 'Primary Action': 'Schema + GBP + About page' },
        { 'Score Range': '30–60%', Interpretation: 'Entity resolved, authority low', 'Primary Action': 'Content + reputation programs' },
        { 'Score Range': '60–80%', Interpretation: 'Strong foundation, category gaps', 'Primary Action': 'Category-targeted content' },
        { 'Score Range': '80%+', Interpretation: 'Category authority achieved', 'Primary Action': 'Maintenance + competitive monitoring' },
      ],
    },
    relatedQuestions: [
      'How do I know if GEO is working?',
      'How often should I run an AI visibility audit?',
      'Why do I appear when named but not in category searches?',
      'What metrics should I track over the 90 days?',
    ],
    sources: [
      { label: 'Google Search Console', url: 'https://search.google.com/search-console/about' },
    ],
  },

  // ─── ENTITY SEO (remaining) ──────────────────────────────────────────────────

  [slugify('Do I need a Wikipedia or Wikidata page to be an entity?')]: {
    lastUpdated: 'July 2026',
    takeaways: [
      'No — the vast majority of local and small businesses achieve strong entity status without Wikipedia or Wikidata.',
      'Wikipedia notability standards disqualify most businesses — attempting to create a non-notable page risks deletion and harm.',
      'Wikidata is more accessible and can be useful for specific entity types, but is not required for local business entity recognition.',
      'Google Business Profile, schema markup, and consistent sameAs links are sufficient for entity resolution for most businesses.',
      'Focus on the entity signals within your reach rather than chasing Wikipedia.',
    ],
    body: `## The Wikipedia misconception

Many businesses pursuing GEO believe they need a Wikipedia page to be recognized as an entity by AI engines. This misconception likely comes from observing that well-known brands and public figures with Wikipedia pages have prominent Knowledge Panels and strong AI engine presence.

The causal relationship runs the opposite direction: prominent brands have Wikipedia pages because they are notable, not vice versa.

## Wikipedia's notability standards

Wikipedia has strict notability requirements. A business must have received significant coverage in independent, reliable secondary sources — newspapers, magazines, books, or peer-reviewed journals — that are not related to the business itself and are not based on press releases.

Most local and small businesses do not qualify. Attempting to create a Wikipedia page that does not meet notability standards results in deletion, sometimes rapid, which can be interpreted by AI engines as a failed entity claim.

**Do not attempt to create a Wikipedia page for your business unless you have substantial third-party press coverage in major publications. The risk of harm outweighs the potential benefit.**

## Wikidata: a more accessible option

Wikidata is a structured data knowledge base that feeds Wikipedia and many AI engine knowledge graphs. It has lower notability requirements than Wikipedia and is more accessible for professional practitioners, founders with published works or media appearances, and organizations with verifiable public records.

For most businesses, a Wikidata entry for the founder (if they have notable publications, media appearances, or professional recognition) is more achievable and more valuable than a business page.

## What actually drives entity resolution

For the majority of local and small businesses, entity status is built through:
1. Organization + Person schema on your website
2. Google Business Profile fully completed
3. sameAs links to LinkedIn, industry directories, and professional associations
4. Consistent NAP across 15+ external platforms
5. Third-party reviews that corroborate your identity and category

These signals, consistently maintained, produce strong entity recognition without Wikipedia.`,
    relatedQuestions: [
      "What's the difference between a website and an entity?",
      'How do I get a Google Knowledge Panel?',
      'What are sameAs links and why do they matter?',
      'Why does inconsistent business info hurt so much?',
    ],
    sources: [
      { label: 'Wikipedia — Notability Guidelines', url: 'https://en.wikipedia.org/wiki/Wikipedia:Notability' },
      { label: 'Wikidata — About', url: 'https://www.wikidata.org/wiki/Wikidata:About' },
      { label: 'Schema.org — Organization', url: 'https://schema.org/Organization' },
    ],
  },

  [slugify('How do I get a Google Knowledge Panel?')]: {
    lastUpdated: 'July 2026',
    takeaways: [
      'Knowledge Panels are granted by Google — you cannot directly request one for a business.',
      'Google generates Knowledge Panels automatically when entity signals reach sufficient confidence threshold.',
      'The fastest path to a Knowledge Panel for most businesses is a fully completed GBP + schema + consistent sameAs links.',
      'Claiming an existing Knowledge Panel is different from generating a new one — claim it via Google\'s verification process.',
      'Not every business will earn a standalone Knowledge Panel, but entity recognition in AI engines does not require one.',
    ],
    body: `## What a Google Knowledge Panel is

A Google Knowledge Panel is the information card that appears on the right side of Google Search results when you search for a specific entity — a business, person, or organization that Google has resolved into its knowledge graph. It displays the entity's name, category, description, contact information, photos, and related entities.

Having a Knowledge Panel indicates Google has resolved your business as a confident entity — a signal that also influences Google AI Overviews and Gemini recommendations.

## How Knowledge Panels are generated

Google generates Knowledge Panels automatically based on entity resolution confidence. There is no application or request process. When your entity signals reach a sufficient confidence threshold — consistent schema, complete GBP, multiple corroborating sameAs sources, and sufficient third-party references — Google's systems create or update your panel.

## The fastest path to Knowledge Panel generation

For most businesses, the fastest path is:

1. **Complete your Google Business Profile** — this is the most direct feed into Google's local knowledge graph
2. **Implement Organization schema** with sameAs links to GBP, LinkedIn, and other authoritative profiles
3. **Ensure NAP consistency** across all major directories
4. **Accumulate third-party references** — press mentions, industry directory listings, and review platform profiles
5. **Publish a well-structured About page** with Person schema for the key individual

Businesses that complete all five steps typically see a Knowledge Panel generate within 4–12 weeks, though Google does not publish timeline guarantees.

## Claiming an existing Knowledge Panel

If a Knowledge Panel already exists for your business but contains incorrect information, you can claim it through Google's Knowledge Panel verification process (search your business name, click "Claim this knowledge panel"). Claiming allows you to suggest updates and verify ownership, though Google retains editorial control.

## A note on realistic expectations

Not every local or small business will earn a standalone Knowledge Panel — Google sets the entity confidence threshold based on available signals. However, entity recognition in AI engines (which is the metric that drives GEO ROI) does not require a Knowledge Panel. Appearing in AI Overviews, ChatGPT, and Perplexity recommendations happens below the Knowledge Panel threshold.`,
    relatedQuestions: [
      "What's the difference between a website and an entity?",
      'Do I need a Wikipedia or Wikidata page to be an entity?',
      'What are sameAs links and why do they matter?',
      'How long does it take to establish entity status?',
    ],
    sources: [
      { label: 'Google — Knowledge Panels Help', url: 'https://support.google.com/knowledgepanel/answer/9163198' },
      { label: 'Google Business Profile Help', url: 'https://support.google.com/business' },
    ],
  },

  [slugify('Why does inconsistent business info hurt so much?')]: {
    lastUpdated: 'July 2026',
    takeaways: [
      'AI engines build entity models by corroborating information across multiple sources — inconsistency breaks corroboration.',
      'A single inconsistent NAP (Name, Address, Phone) entry can suppress your entity confidence score across all engines.',
      'The most common inconsistency is minor name variations: "Smith & Co" vs "Smith and Company" vs "Smith & Co. LLC".',
      'Even small differences — a suite number format, a phone number with vs. without area code — create entity fragmentation.',
      'Fixing inconsistency is tedious but produces measurable AI visibility improvement within weeks.',
    ],
    body: `## How entity models work

When an AI engine encounters a business name, it searches for corroborating signals across multiple sources: your own website, Google Business Profile, Yelp, LinkedIn, industry directories, review platforms, and press references. If those sources agree — same name, same address, same phone, same category — the engine resolves a high-confidence entity.

If those sources disagree, even in minor ways, the engine must decide which version to trust or — more commonly — reduce its confidence in the entity overall.

## The corroboration failure mode

Imagine an engine finding the following across five sources:
- Website: "Smith & Company Financial Planning"
- Google Business Profile: "Smith & Co. Financial Planning LLC"
- Yelp: "Smith and Company"
- LinkedIn: "Smith & Company"
- Industry directory: "Smith & Co Financial"

All five clearly refer to the same business. But from an algorithmic perspective, they are five different strings — none of which perfectly corroborates any other. The entity that emerges from this dataset is lower-confidence than one where all five sources return the exact same string.

## The most common inconsistencies

- **Legal suffix variations:** "LLC," "Inc.," or "& Associates" appearing in some sources but not others
- **Ampersand vs. "and":** "Smith & Jones" vs. "Smith and Jones"
- **Address format:** "Suite 100" vs. "#100" vs. "Ste. 100"
- **Phone format:** "(512) 555-0100" vs. "512-555-0100" vs. "+1-512-555-0100"
- **Business category:** different primary categories claimed across different platforms

## The fix is methodical, not complex

Choose one canonical version of every entity attribute — your exact business name, your exact address format, your exact phone format — and apply it rigorously across every platform you control. The canonical version should match your Google Business Profile exactly, since GBP is the highest-weight source for most AI engines.

Tools like Yext, BrightLocal, or Moz Local can accelerate the audit and correction process, but the work can also be done manually across the top 15–20 directories without paid tools.`,
    relatedQuestions: [
      "What's the difference between a website and an entity?",
      'What are sameAs links and why do they matter?',
      'Can a bad About page actually hurt me?',
      'What if the AI engines have my information wrong?',
    ],
    sources: [
      { label: 'Schema.org — Organization', url: 'https://schema.org/Organization' },
      { label: 'Google Business Profile — Edit Business Info', url: 'https://support.google.com/business/answer/3039617' },
    ],
  },

  [slugify('How long does it take to establish entity status?')]: {
    lastUpdated: 'July 2026',
    takeaways: [
      'Basic entity resolution (appearing for branded name queries) typically takes 2–6 weeks after completing the entity foundation.',
      'Category-level entity authority (appearing in unprompted category recommendations) takes 3–6 months of sustained work.',
      'The starting condition matters: businesses with significant inconsistency to clean up take longer.',
      'Google Business Profile completion is the fastest single action for accelerating entity recognition.',
      'Entity status is not binary — it builds progressively, and each signal improvement produces incremental recommendation gains.',
    ],
    body: `## The entity recognition progression

Entity recognition is not a switch that flips on. It builds progressively as signals accumulate and corroborate each other. Understanding this progression helps set realistic expectations.

### Week 1–2: Foundation complete

You have implemented Organization and Person schema, completed your GBP, established your sameAs links, and rewritten your About page with specific factual content. At this point, your signals are in place but have not yet been crawled and indexed.

### Weeks 3–6: Initial indexing

Google typically re-crawls schema-bearing pages within 2–4 weeks of significant updates. Your structured data begins populating Google's entity graph. Your GBP updates are already live in Google's local knowledge system. You begin appearing in simple branded name queries in Google AI Overviews.

### Months 2–3: Entity solidification

As other engines (Perplexity, ChatGPT) update their knowledge from crawled content, your entity signals begin propagating more broadly. Your review velocity program produces its first 8–15 reviews. You begin appearing in some lower-competition category queries.

### Months 4–6: Authority emergence

Your content library has grown to 4–6 authority articles. Your review base has 20–30 recent, specific reviews. Third-party mentions begin appearing. You start appearing in competitive category queries and problem-solution queries. This is where entity status produces its highest business value.

## What slows entity recognition

- Significant NAP inconsistency to clean up — every discrepancy you must find and fix is weeks of propagation time
- Schema errors that were not caught before deployment — broken schema delays indexing
- Low review velocity — without growing reputation signals, entity authority plateaus
- Absence of third-party corroboration — self-declared entity claims without external corroboration are lower-confidence`,
    relatedQuestions: [
      "What's the difference between a website and an entity?",
      'How do I get a Google Knowledge Panel?',
      'Is entity SEO relevant for small local businesses?',
      'How long does GEO take to show results?',
    ],
    sources: [
      { label: 'Google Search Central — Crawling Overview', url: 'https://developers.google.com/search/docs/crawling-indexing/overview-google-crawlers' },
      { label: 'Schema.org Validator', url: 'https://validator.schema.org/' },
    ],
  },

  [slugify('Is entity SEO relevant for small local businesses?')]: {
    lastUpdated: 'July 2026',
    takeaways: [
      'Yes — entity recognition is especially high-leverage for small local businesses because geographic signals narrow the competitive field.',
      'A local business with strong entity signals can outcompete larger brands in local AI recommendations.',
      'Google Business Profile is the highest-leverage entity signal specifically designed for local businesses.',
      'Local reviews on Google carry direct entity signal weight — more so than for national businesses.',
      'Small local businesses often have an entity advantage over large chains because their NAP data is simpler to make consistent.',
    ],
    body: `## Why local businesses benefit from entity work

Entity SEO is not only for large brands or enterprise organizations. For small local businesses, entity recognition is one of the highest-leverage investments available — because local AI recommendations operate in a narrower competitive field.

When a user asks Google AI Overviews or ChatGPT "who is the best plumber in Austin," the engine is not evaluating every plumber in the country. It is evaluating a manageable set of businesses operating in Austin with sufficient entity signals to be recommended with confidence. A small local plumbing company with excellent entity signals can outrank a national chain with weak local entity data.

## The local entity advantage

Small local businesses have specific advantages in entity work that larger organizations often lack:

**Simpler NAP data.** A single-location business has one Name, one Address, and one Phone to make consistent. A multi-location franchise has dozens. Consistency — the foundation of entity recognition — is fundamentally easier for small businesses.

**Google Business Profile designed for you.** GBP was built for local businesses. Every field in the GBP interface is an entity signal. Fully completing your GBP is the single highest-ROI entity action available to any local business.

**Local review platforms.** Reviews on Google, Yelp, and NextDoor are highly weighted for local AI recommendations. A local business with 40 specific, recent reviews is a stronger local recommendation candidate than a national brand with 500 national reviews and no local concentration.

## What local businesses should do first

1. Claim and fully complete your Google Business Profile — every field
2. Run a NAP consistency audit across local directories
3. Implement Organization or LocalBusiness schema with your service area declared
4. Add sameAs links to GBP, Yelp, and your local chamber or industry association
5. Launch a review velocity program targeting 4+ new reviews per month`,
    relatedQuestions: [
      "What's the difference between a website and an entity?",
      'How do I get a Google Knowledge Panel?',
      'Is this roadmap different for local versus national businesses?',
      'Which review platform should I prioritize?',
    ],
    sources: [
      { label: 'Schema.org — LocalBusiness', url: 'https://schema.org/LocalBusiness' },
      { label: 'Google Business Profile Help', url: 'https://support.google.com/business' },
    ],
  },

  // ─── STRUCTURED DATA (remaining) ────────────────────────────────────────────

  [slugify('Do I really need schema if my content already explains everything?')]: {
    lastUpdated: 'July 2026',
    takeaways: [
      'Yes — natural language content and structured schema serve different purposes for AI engines.',
      'Your content is read by humans and partially by engines; schema is read exclusively by machines, with certainty.',
      'Schema eliminates ambiguity: engines do not infer, they process declared facts.',
      'Pages with schema markup are cited in AI-generated answers at a higher rate than equivalent unstructured content.',
      'Schema takes hours to implement and produces signal improvements that last years.',
    ],
    body: `## Why natural language is insufficient alone

Your content may explain everything about your business clearly and accurately. A reader who visits your About page and reads it carefully will understand who you are, what you do, and why you are credible.

AI engines do not read the way humans do. They process your content through natural language understanding algorithms, which extract probable facts from text — but "probable" is the key word. Natural language understanding introduces interpretive uncertainty at every step.

Schema markup eliminates that uncertainty. It replaces "this text probably means X" with "this field is declared as X." The difference in confidence is significant, and higher-confidence entity facts produce more frequent citations.

## What schema does that content cannot

### Structural disambiguation

Consider the sentence: "Founded by Jordan Kim in 2019, our Denver practice specializes in estate planning."

An engine parsing that sentence must determine: Is "Jordan Kim" a person or a brand? Is "2019" the founding date or a reference year? Is "Denver" the headquarters or a service area? Is "estate planning" the primary service or a secondary offering?

Organization and Person schema answer all four questions explicitly, with no interpretation required.

### Relationship declaration

Schema can declare relationships between entities — the founder's affiliation with the organization, the organization's membership in a professional association, the service's relationship to a category — in a way that natural language cannot convey with equal precision.

### sameAs connections

Schema's \`sameAs\` property creates explicit connections to external entity representations that no amount of natural language content can replicate.

## The compound benefit

Schema-bearing pages are not just parsed more accurately. They are weighted more heavily in the citation evaluation process because the engine can process them with higher confidence. A business whose facts are machine-readable is a lower-risk recommendation than one whose facts must be inferred.

The time cost of schema implementation is measured in hours. The benefit compounds for years.`,
    relatedQuestions: [
      'Which schema type should I add first?',
      'Can incorrect schema hurt me?',
      'How do AI engines find my schema?',
      "What's the difference between a website and an entity?",
    ],
    sources: [
      { label: 'Google Structured Data Documentation', url: 'https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data' },
      { label: 'Schema.org — Getting Started', url: 'https://schema.org/docs/gs.html' },
    ],
  },

  [slugify('Can incorrect schema hurt me?')]: {
    lastUpdated: 'July 2026',
    takeaways: [
      'Yes — incorrect schema can suppress your entity confidence score and reduce AI recommendations.',
      'Markup that misrepresents your business (wrong category, unearned credentials) can trigger trust penalties.',
      'Schema validation errors are silent: your page still loads, but the structured data is ignored or penalized.',
      'The most common error is correct intent with incorrect implementation — technically invalid JSON-LD.',
      'Always validate schema at schema.org/validator before deploying — zero errors, zero warnings.',
    ],
    body: `## The two categories of schema harm

Not all schema errors are equal. There are two distinct categories: implementation errors (technically incorrect JSON-LD) and semantic errors (technically valid but inaccurate or misleading claims).

### Implementation errors

Implementation errors occur when your JSON-LD syntax is incorrect, a required property is missing, or a field value does not match the expected format. Examples:
- Missing required fields (an Organization without a \`name\` property)
- Invalid URL format in a \`url\` field
- Incorrect \`@type\` declaration (using "Business" instead of "LocalBusiness")
- Unclosed JSON brackets or missing commas

These errors cause the schema to be ignored entirely. The page looks normal to visitors, the schema tag appears in the HTML, but the engine cannot process the structured data. You lose all the citation-confidence benefits of schema without any visible indication that something is wrong.

**Detection:** Run the Schema.org Validator (validator.schema.org) and Google's Rich Results Test after every schema implementation or update. Both tools show errors and warnings — zero of each is the target.

### Semantic errors

Semantic errors occur when your schema is technically valid but makes claims that are inaccurate or misleading. Examples:
- Claiming ratings or awards you have not received
- Declaring a service category you do not offer
- Using \`AggregateRating\` with fabricated review counts
- Marking a service description page as a \`Product\` type

Google's quality rater guidelines and AI engine trust systems specifically watch for schema that does not match page content. Pages where schema claims conflict with visible content are treated as lower-trustworthiness signals — the opposite of the benefit schema is meant to provide.

## The validation habit

Make schema validation a standard part of your content workflow. Any time you update your About page, add a new article, or change your schema declarations:
1. Run validator.schema.org on the updated page
2. Run the Google Rich Results Test
3. Confirm zero errors and zero warnings before considering the task complete`,
    relatedQuestions: [
      'Do I really need schema if my content already explains everything?',
      'Which schema type should I add first?',
      'How do AI engines find my schema?',
      'Is schema a one-time task?',
    ],
    sources: [
      { label: 'Schema.org Validator', url: 'https://validator.schema.org/' },
      { label: 'Google Rich Results Test', url: 'https://search.google.com/test/rich-results' },
      { label: 'Google — Structured Data Policies', url: 'https://developers.google.com/search/docs/appearance/structured-data/sd-policies' },
    ],
  },

  [slugify('Does FAQ schema still work after Google reduced its rich-result display?')]: {
    lastUpdated: 'July 2026',
    takeaways: [
      'Yes — FAQ schema remains highly valuable for AI engine citation even after Google reduced its SERP rich-result display.',
      'Google reduced FAQ rich results on the traditional SERP; it did not remove FAQ schema\'s weight for AI Overviews and entity signals.',
      'FAQ schema is the content format that most closely matches the Q&A output structure of AI-generated answers.',
      'ChatGPT and Perplexity read FAQ schema and use it to source specific question-answer pairs directly.',
      'The shift away from rich results for FAQ on traditional SERP is not a signal to stop using FAQ schema.',
    ],
    body: `## What changed with Google's FAQ rich results

In 2023, Google announced a significant reduction in FAQ rich results on traditional search results pages. Previously, FAQ schema on a page would display expandable question-and-answer dropdowns beneath the blue link in SERP. Google reduced this to only appear for a small number of authoritative sites.

This change affected what users see on the traditional SERP. It did not change how FAQ schema is used for AI engine knowledge and entity signals.

## Why FAQ schema still matters

### AI Overview sourcing

Google AI Overviews draw on structured data — including FAQPage schema — when composing answers. A page with FAQPage schema on a relevant question is more likely to be cited in an AI Overview than the same page without schema, because the structured data gives Google explicit, machine-readable Q&A pairs to use as source material.

### ChatGPT and Perplexity

ChatGPT (with Browse) and Perplexity both crawl web content and read structured data. FAQPage schema on your pages provides these engines with explicitly declared question-answer pairs — exactly the format they synthesize when generating their own responses. A business with FAQPage schema on relevant questions is a higher-probability citation source than one requiring the engine to extract Q&A from unstructured prose.

### Topical authority signals

FAQPage schema is also a topical coverage signal — it tells engines that your site addresses specific questions in your category, contributing to the broader topical authority assessment.

## The practical recommendation

Continue implementing FAQPage schema on your FAQ pages and any page with significant question-and-answer content. The benefit for AI engine citation is substantial and growing as AI Overviews expand. The loss of SERP FAQ rich results is a minor reduction in a secondary benefit — it does not change the schema's value for GEO.`,
    relatedQuestions: [
      'Which schema type should I add first?',
      'Do I really need schema if my content already explains everything?',
      'How do AI engines find my schema?',
      'Is schema a one-time task?',
    ],
    sources: [
      { label: 'Google — FAQ Rich Results Update', url: 'https://developers.google.com/search/blog/2023/08/howto-faq-changes' },
      { label: 'Schema.org — FAQPage', url: 'https://schema.org/FAQPage' },
    ],
  },

  [slugify('How do AI engines find my schema?')]: {
    lastUpdated: 'July 2026',
    takeaways: [
      'AI engines find your schema the same way they find your content: by crawling your pages.',
      'Schema must be in the HTML served to the crawler — client-side rendered schema is often missed.',
      'Server-side rendered JSON-LD in the <head> is the most reliably crawled schema format.',
      'Submit updated pages to Google Search Console after adding or changing schema to accelerate discovery.',
      'Schema embedded in your HTML does not require a separate submission process.',
    ],
    body: `## The crawling process

When an AI engine crawler visits your website, it reads the full HTML of each page, including any \`<script type="application/ld+json">\` tags in the \`<head>\` or \`<body>\`. These tags contain your JSON-LD structured data — the schema.

The crawler parses the JSON-LD, extracts the entity declarations, validates them against the schema.org type definitions, and feeds the valid structured data into the engine's knowledge pipeline.

This process is automatic. You do not need to submit your schema separately — it is discovered as part of normal crawling.

## The critical requirement: server-side rendering

The most common schema implementation error that causes crawlers to miss structured data is client-side rendering. Some website platforms (React, Vue, Angular applications) render page content — including schema — using JavaScript that executes in the browser after the initial HTML is served.

Most AI engine crawlers process the initial HTML but have limited JavaScript execution capability. Schema embedded only in client-side rendered JavaScript may never be crawled.

**The solution:** Ensure your JSON-LD structured data is included in the server-side rendered HTML — the raw HTML that the crawler receives before JavaScript executes. In Next.js, this means your schema should be in the page's server-rendered output (not added only via useEffect or similar client-side code). In WordPress, schema plugins that inject into the \`<head>\` are generally server-side rendered.

## Accelerating discovery

After adding or changing schema, submit the affected pages for indexing in Google Search Console (URL Inspection tool → Request Indexing). This does not guarantee immediate crawling, but signals to Google that the page has changed and accelerates re-evaluation.

Perplexity and ChatGPT do not offer direct indexing submission tools — they crawl on their own schedules.

## Verifying discovery

After 2–4 weeks, check Google Search Console's Rich Results Status report to confirm your schema has been crawled and validated. If schema is not appearing in the report, it may not be reaching the crawler — investigate your rendering pipeline.`,
    relatedQuestions: [
      'Can incorrect schema hurt me?',
      'Is schema a one-time task?',
      'Which schema type should I add first?',
      'Do I really need schema if my content already explains everything?',
    ],
    sources: [
      { label: 'Google Search Console — Rich Results Status', url: 'https://support.google.com/webmasters/answer/7552505' },
      { label: 'Google — JSON-LD Structured Data', url: 'https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data' },
    ],
  },

  [slugify('Is schema a one-time task?')]: {
    lastUpdated: 'July 2026',
    takeaways: [
      'No — schema must be maintained as your business information changes.',
      'Any change to your business name, address, categories, hours, or key personnel requires a schema update.',
      'New content types (new services, new blog articles, new FAQs) each benefit from appropriate schema additions.',
      'Schema validation should be re-run quarterly as a standing maintenance task.',
      'Outdated schema is worse than no schema — it tells engines incorrect facts about your business.',
    ],
    body: `## The maintenance requirement

Schema is not a "set it and forget it" implementation. It is a living representation of your business's current facts. When those facts change — and every business's facts change — your schema must be updated to match.

The consequences of stale schema are significant: an engine that reads your schema and finds it conflicts with other sources (like your GBP or website content) resolves the conflict by reducing entity confidence. Outdated schema creates exactly the kind of inconsistency that suppresses recommendations.

## When to update your schema

Update your Organization or LocalBusiness schema immediately when any of the following changes:
- Business name (including legal suffix changes)
- Address or service area
- Primary phone number
- Primary category or service description
- Hours of operation
- Logo or primary image
- Key personnel (founder, primary contact)

Update your Person schema when:
- Key personnel change titles, roles, or credentials
- New verifiable credentials are earned
- New sameAs profiles are established

Add new schema when:
- You publish new blog articles (Article schema)
- You add new FAQ content (FAQPage schema)
- You launch new services (Service or Offer schema)

## The quarterly validation habit

Even without changes to your business information, re-validate your schema quarterly. Website updates, CMS upgrades, or theme changes can inadvertently break schema that was previously valid. A schema tag that is syntactically broken produces no signal — and you will not know unless you check.

**Quarterly schema maintenance checklist:**
1. Run validator.schema.org on your homepage, About page, and top service pages
2. Run the Google Rich Results Test on pages with FAQPage schema
3. Review Google Search Console's Rich Results report for new errors
4. Verify all sameAs URLs still resolve correctly (platforms occasionally change URL structures)`,
    relatedQuestions: [
      'Which schema type should I add first?',
      'Can incorrect schema hurt me?',
      'How do AI engines find my schema?',
      'Why does inconsistent business info hurt so much?',
    ],
    sources: [
      { label: 'Schema.org Validator', url: 'https://validator.schema.org/' },
      { label: 'Google Rich Results Test', url: 'https://search.google.com/test/rich-results' },
    ],
  },

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
  // ─── AUTHORITY SIGNALS / E-E-A-T ────────────────────────────────────────────

  [slugify('Is E-E-A-T an official ranking factor?')]: {
    lastUpdated: 'July 2026',
    takeaways: [
      'E-E-A-T is not a direct algorithmic ranking factor with a numeric score — it is a framework used by human quality raters.',
      'Quality rater evaluations calibrate Google\'s algorithms, which means E-E-A-T principles indirectly influence rankings.',
      'For AI engines, E-E-A-T principles apply as content quality and trustworthiness signals even outside Google.',
      'The practical implication is the same whether or not it is "official" — demonstrating expertise and trust improves citation probability.',
      'Acting as if E-E-A-T is a direct signal produces the right behaviors regardless of the definitional debate.',
    ],
    body: `## The definitional nuance

Google's E-E-A-T framework — Experience, Expertise, Authoritativeness, and Trustworthiness — appears in Google's Search Quality Rater Guidelines, a document used to train human evaluators who assess search quality. These evaluators do not directly rank individual pages; they provide training signal that calibrates Google's algorithms.

E-E-A-T is therefore not a direct algorithmic factor in the way that page speed or backlink count are algorithmic factors. There is no E-E-A-T score in Google's ranking system that can be directly measured or optimized.

What E-E-A-T is, in practice, is a framework that describes the qualities Google's algorithms are calibrated to reward. Pages written by demonstrably experienced experts, published on authoritative domains, with verifiable trust signals, perform better — not because E-E-A-T is computed directly, but because the signals associated with it are.

## What E-E-A-T means in practice

### Experience (the extra E added in 2022)

Has the author or business had direct, first-hand experience with the topic they are writing about? A review written by someone who actually used the product, a service description written by a practitioner who delivers it, a medical article written by a clinician who treats patients — these demonstrate experience in a way that secondhand content does not.

### Expertise

Does the content demonstrate deep, accurate knowledge of the subject? Expertise signals include specific technical detail, correct use of domain terminology, accurate citation of authoritative sources, and named credentials.

### Authoritativeness

Is the publisher recognized as an authority in the domain by other authorities? This is primarily a backlink and citation signal — who links to you and cites you matters.

### Trustworthiness

Is the content accurate, transparent about its sources, honest about limitations, and associated with a clearly identified publisher? Transparency — named authors, clear contact information, accurate business information — is the core of trustworthiness.

## For AI engines beyond Google

While E-E-A-T is a Google-specific framework, the underlying principles apply to every AI engine's content quality evaluation. ChatGPT, Perplexity, and Gemini all weight content from demonstrably expert, attributable sources more heavily than anonymous or unverifiable content.`,
    relatedQuestions: [
      'Why did Google add the extra E for Experience?',
      'Does E-E-A-T matter for AI engines beyond Google?',
      'Should my content be attributed to individuals instead of the brand?',
      'Why does documented process matter for AI visibility?',
    ],
    sources: [
      { label: 'Google Search Quality Rater Guidelines', url: 'https://static.googleusercontent.com/media/guidelines.raterhub.com/en//searchqualityevaluatorguidelines.pdf' },
      { label: 'Google — E-E-A-T and Helpful Content', url: 'https://developers.google.com/search/docs/fundamentals/creating-helpful-content' },
    ],
  },

  [slugify('Why did Google add the extra E for Experience?')]: {
    lastUpdated: 'July 2026',
    takeaways: [
      'Google added Experience in 2022 to distinguish first-hand knowledge from secondhand expertise.',
      'The addition was a response to AI-generated content that could demonstrate expertise without first-hand experience.',
      'Experience signals include: personal case studies, "lessons learned" content, specific client outcome descriptions, and practitioner-authored articles.',
      'For AI visibility specifically, Experience signals are among the hardest to fabricate and therefore among the most valued.',
      'Content that demonstrates you have done the thing, not just that you know about the thing, is now distinctly more valuable.',
    ],
    body: `## The problem the extra E was designed to solve

Before 2022, Google's quality framework used E-A-T: Expertise, Authoritativeness, Trustworthiness. These three dimensions could all — in principle — be demonstrated by someone who had studied a topic deeply without direct first-hand experience.

A content writer with research skills could produce a technically accurate, well-cited article about estate planning without having ever planned an estate. A medical writer could produce a clinically accurate article about a treatment without having prescribed it.

The explosion of AI-generated content sharpened this problem. Large language models can produce content that demonstrates impressive apparent expertise — correct terminology, accurate citations, well-structured arguments — without any first-hand experience of the subject matter.

Google's response was to add Experience: the explicit signal of direct, first-hand involvement with the topic.

## What Experience looks like in content

Experience cannot be faked with research alone. Signals of first-hand experience include:

- **Specific, verifiable outcomes:** "This approach reduced our client's onboarding time from 14 days to 3 days" is an experience claim. "Reducing onboarding time improves retention" is an expertise claim. The former is harder to fabricate.
- **Situational specificity:** Describing the exact circumstances, challenges, and decisions in a client engagement demonstrates first-hand involvement in a way that generic advice does not.
- **Honest acknowledgment of complexity:** Practitioners with direct experience acknowledge edge cases, exceptions, and situations where the standard approach does not work. AI-generated expertise often presents cleaner, more universal answers.
- **Named authorship by a practitioner:** Content attributed to a named professional who can be verified as a practitioner — through their LinkedIn profile, professional registration, or speaking history — carries Experience signal that anonymous content does not.

## The implication for GEO content

For GEO specifically, the Experience dimension means that your best-performing content is content you could only have written from direct involvement in your work: case studies, project retrospectives, lessons from real client engagements, and practitioner-perspective analyses.`,
    relatedQuestions: [
      'Is E-E-A-T an official ranking factor?',
      'Should my content be attributed to individuals instead of the brand?',
      'Can AI-assisted content still rank and get cited?',
      'Why does documented process matter for AI visibility?',
    ],
    sources: [
      { label: 'Google — Adding Experience to E-A-T', url: 'https://developers.google.com/search/blog/2022/12/google-raters-guidelines-e-e-a-t' },
      { label: 'Google Quality Rater Guidelines', url: 'https://static.googleusercontent.com/media/guidelines.raterhub.com/en//searchqualityevaluatorguidelines.pdf' },
    ],
  },

  [slugify('Does E-E-A-T matter for AI engines beyond Google?')]: {
    lastUpdated: 'July 2026',
    takeaways: [
      'Yes — while E-E-A-T is a Google-specific framework, the underlying principles apply to all major AI engines.',
      'Every AI engine weights content from demonstrably expert, attributable, trustworthy sources more heavily.',
      'Perplexity and ChatGPT both use source credibility signals that closely mirror E-E-A-T dimensions.',
      'The signals that satisfy E-E-A-T (named authorship, credentials, specific outcomes, accurate citations) improve citation probability across all engines.',
      'Building for E-E-A-T is building for cross-engine authority — not just Google optimization.',
    ],
    body: `## E-E-A-T as a universal principle, not just a Google framework

E-E-A-T is Google's named framework, but the underlying principles reflect how any system evaluating content quality must behave. AI engines that recommend businesses and cite sources to users have a fundamental interest in recommending credible sources — because incorrect or low-quality recommendations damage user trust in the engine.

Every major AI engine has developed its own version of source credibility evaluation, even if they do not use Google's framework or terminology.

## How Perplexity evaluates content credibility

Perplexity's design is explicitly source-centric — it shows citations for every factual claim and allows users to verify sources directly. To appear as a Perplexity citation, content must:
- Be accessible to crawlers on the live web
- Contain specific, citable facts rather than generalized claims
- Have clear authorship attribution
- Be on a domain with established credibility (backlink authority, age, history of accurate information)

These criteria map almost directly to the Expertise and Trustworthiness dimensions of E-E-A-T.

## How ChatGPT evaluates content credibility

ChatGPT (with Browse) synthesizes information from web sources with a preference for content from recognized authoritative domains. In practice, this means:
- Academic and research institutions carry high weight
- Established trade publications and industry associations carry high weight
- Content with named expert authors carries higher weight than anonymous content
- Pages with specific, verifiable claims outperform vague generalist content

This maps to the Authoritativeness and Expertise dimensions.

## The practical implication

Optimizing your content for E-E-A-T — named authorship, specific credentials, first-hand experience demonstrations, accurate external citations — produces content that performs well across all major AI engines, not just Google. E-E-A-T compliance is cross-engine GEO optimization.`,
    relatedQuestions: [
      'Is E-E-A-T an official ranking factor?',
      'Should my content be attributed to individuals instead of the brand?',
      'Which AI engine matters most for my business?',
      'Can AI-assisted content still rank and get cited?',
    ],
    sources: [
      { label: 'Google — E-E-A-T Framework', url: 'https://developers.google.com/search/docs/fundamentals/creating-helpful-content' },
      { label: 'Perplexity AI — About', url: 'https://www.perplexity.ai/about' },
    ],
  },

  [slugify('How do I show experience if my business is young?')]: {
    lastUpdated: 'July 2026',
    takeaways: [
      'Business age is not the primary experience signal — documented first-hand outcomes are.',
      'A two-year-old business with three detailed case studies outperforms a ten-year-old business with no documented outcomes.',
      'The founder\'s prior experience before starting the business is fully transferable as an experience signal.',
      'Specific client results from your earliest work are more valuable than waiting to accumulate years of history.',
      'Publishing honestly about what you have learned from real engagements demonstrates experience in a way years alone cannot.',
    ],
    body: `## Why business age is not the experience signal

A common misconception is that Experience in the E-E-A-T sense refers to how long a business has been operating. It does not. Experience refers to documented evidence of direct, first-hand involvement with the subject matter.

A two-year-old accounting practice with three detailed case studies describing specific tax situations, specific strategies applied, and specific outcomes achieved demonstrates more Experience signal than a twenty-year-old practice with a generic "we have decades of experience" claim on their About page.

## Sources of experience signals for new businesses

### Prior individual experience

If you founded your business after years in a related role — a financial planner who spent ten years at a wealth management firm before launching their own practice, a contractor who worked for a larger firm before going independent — that prior experience is fully transferable.

Document it explicitly: "Founded by [Name], who spent 12 years managing large-scale commercial renovation projects at [Previous Firm] before establishing this practice." This is not just marketing language — it is an experience declaration that engines can evaluate.

### Early client outcomes

Your earliest clients represent your first Experience evidence. Even if you only have three or four completed engagements, each one is an opportunity to document:
- The specific situation the client came to you with
- The approach you took and why
- The measurable outcome they achieved
- A quote or testimonial (with permission) confirming the result

Three specific, honest case studies outperform a decade of implied experience.

### Published learning

Content that shares what you have learned from real engagements — including honest acknowledgment of what did not work the first time, and why — is a strong experience signal. Practitioners with first-hand experience write about the messiness of real-world application; theorists write about clean, idealized processes.

Publish one "lessons from the field" article every quarter. Over two years, you will have eight articles documenting direct experience in a form that AI engines read as authority evidence.`,
    relatedQuestions: [
      'Is E-E-A-T an official ranking factor?',
      'Why did Google add the extra E for Experience?',
      'Should my content be attributed to individuals instead of the brand?',
      'Why does documented process matter for AI visibility?',
    ],
    sources: [
      { label: 'Google — E-E-A-T and Helpful Content', url: 'https://developers.google.com/search/docs/fundamentals/creating-helpful-content' },
    ],
  },

  [slugify('Should my content be attributed to individuals instead of the brand?')]: {
    lastUpdated: 'July 2026',
    takeaways: [
      'Yes — individual author attribution produces stronger E-E-A-T signals than brand-attributed content.',
      'A named, credentialed author is a resolvable entity; "the Acme Team" is not.',
      'Author schema (Person type with credentials, sameAs links) amplifies the authority signal of every article they write.',
      'Perplexity and ChatGPT treat named-author content as higher-credibility source material.',
      'The practical approach: attribute primary content to the founder or key expert; use the brand for purely informational content.',
    ],
    body: `## Why individual attribution matters

An AI engine evaluating a piece of content for citation needs to assess the author's credibility. When content is attributed to a brand — "by the Acme Team" or simply unattributed — the engine has one entity to evaluate: the business. When content is attributed to a named individual, the engine can evaluate two entities: the business and the author.

A named author with verifiable credentials, a professional profile, published works, and speaking engagements is a richer credibility signal than a brand name alone. The author's credibility reinforces the business's credibility, creating a compound signal that unnamed content cannot produce.

## What individual attribution looks like in practice

### Author byline on every article

Every article, insight piece, or FAQ on your site should carry a named author byline — not "Hey Pearl Team" but "Dale Gatchallan, Founder." Include the author's title, a brief credential line, and a link to their full bio.

### Author bio page

Create a dedicated author page for your primary content creator(s) with:
- Full name and professional photo
- Title and role
- Specific credentials and certifications
- Years of direct experience in the domain
- External links to LinkedIn, professional directories, and any published works
- Person JSON-LD schema with sameAs links

### Article schema with author

Every article page should include Article or BlogPosting schema with the \`author\` property declaring the Person entity — linking the article to its author in a machine-readable format.

### The sameAs amplification

Author attribution reaches its full potential when the author is a resolved Person entity — one with schema, a complete LinkedIn profile, and sameAs connections between them. An article attributed to a resolved Person is effectively endorsed by that person's entire credibility profile.`,
    relatedQuestions: [
      'Is E-E-A-T an official ranking factor?',
      'Why did Google add the extra E for Experience?',
      'Can AI-assisted content still rank and get cited?',
      'What is the single most important thing to add to my About page?',
    ],
    sources: [
      { label: 'Schema.org — Person', url: 'https://schema.org/Person' },
      { label: 'Schema.org — Article author property', url: 'https://schema.org/author' },
      { label: 'Google — E-E-A-T', url: 'https://developers.google.com/search/docs/fundamentals/creating-helpful-content' },
    ],
  },

  [slugify('Can AI-assisted content still rank and get cited?')]: {
    lastUpdated: 'July 2026',
    takeaways: [
      'Yes — AI-assisted content can rank and be cited, but only when it demonstrates genuine expertise and first-hand experience.',
      'Google\'s policy is explicitly quality-first: helpful content from any production method is acceptable.',
      'AI-generated content that could have been written by anyone, about anything, is the problem — not AI assistance per se.',
      'The addition of practitioner experience, specific client outcomes, and genuine editorial judgment transforms generic AI output into citable content.',
      'Use AI to accelerate research, structure, and drafting; use human expertise to add the Experience signals that make content citable.',
    ],
    body: `## Google's actual policy on AI content

Google's official position, as of its helpful content updates, is that content quality and helpfulness are what matter — not the method of production. AI-assisted content that is helpful, accurate, and demonstrates expertise is acceptable. AI-generated content that is thin, generic, or designed primarily to manipulate rankings is not.

The key word is "helpful." The test Google applies is: does this content genuinely help the intended reader? Does it demonstrate first-hand knowledge or expertise? Could it only have been written by someone with real experience in the domain?

## Why generic AI content fails the citation test

Large language models produce content that is coherent, grammatically correct, and topically relevant. They produce it by synthesizing patterns from their training data — they have not done the work, had the client, or delivered the outcome.

AI-generated content without expert editing tends to:
- Make correct but generic statements that apply equally to any business in the category
- Lack the specific, verifiable examples that demonstrate first-hand experience
- Present overly clean, idealized processes without acknowledging real-world complexity
- Miss the specific insights that practitioners develop from actual work

These are exactly the signals AI engines use to distinguish citable expertise content from generic filler.

## The right workflow for AI-assisted content

The most effective workflow combines AI efficiency with human expertise:

1. **AI drafts the structure and research:** Use AI to produce an initial draft, identify relevant statistics, and organize the article structure
2. **Expert adds the Experience layer:** A practitioner edits the draft to add specific client examples, honest complexity acknowledgments, and practitioner insights that only first-hand experience produces
3. **Attribution and schema:** Publish under a named expert author with Author schema and Person entity links
4. **Citation and sourcing:** Add external authoritative citations that corroborate the article's factual claims

The result is content that benefits from AI efficiency and demonstrates the human expertise that makes it citable.`,
    relatedQuestions: [
      'Why did Google add the extra E for Experience?',
      'Is E-E-A-T an official ranking factor?',
      'Should my content be attributed to individuals instead of the brand?',
      'Does E-E-A-T matter for AI engines beyond Google?',
    ],
    sources: [
      { label: 'Google — AI-Generated Content and Search', url: 'https://developers.google.com/search/blog/2023/02/google-search-and-ai-content' },
      { label: 'Google — Helpful Content System', url: 'https://developers.google.com/search/docs/appearance/helpful-content-system' },
    ],
  },

  // ─── AI SEARCH INTELLIGENCE ─────────────────────────────────────────────────

  [slugify('Can I pay to be recommended by ChatGPT or Perplexity?')]: {
    lastUpdated: 'July 2026',
    takeaways: [
      'No — as of mid-2026, there is no pay-to-play advertising mechanism that places businesses inside ChatGPT or Perplexity recommendations.',
      'Perplexity introduced sponsored follow-up questions in 2024, but these are distinct from organic recommendations.',
      'AI engine recommendations are merit-based: entity clarity, content authority, and reputation signals determine citation.',
      'Businesses that attempt to influence recommendations through inauthentic means risk algorithmic suppression.',
      'The correct investment is in the organic signals that produce durable, compounding recommendation probability.',
    ],
    body: `## The current state of AI engine advertising

As of mid-2026, the major AI engines operate primarily on organic recommendation models — they recommend businesses based on merit signals (entity recognition, content authority, reputation) rather than payment.

### What exists

**Perplexity Sponsored Questions (2024–present):** Perplexity introduced a sponsored results format where advertisers can place their content as follow-up suggestions adjacent to organic answers. This is a display advertising product, not an organic recommendation placement. It is visible to users as sponsored content and functions more like a Google Display ad than a search ranking.

**Microsoft Advertising in Copilot:** Microsoft has introduced advertising placements within Copilot responses for commercial queries. As with Perplexity, these are labeled as sponsored.

**Google AI Overviews:** Google has begun testing ad placements within AI Overview responses, labeled as advertisements. These are separate from the organic citation layer.

### What does not exist

There is no mechanism to pay ChatGPT, Perplexity, or Google to include your business in organic AI recommendations. The organic layer — the citations and recommendations that appear without advertising labels — is determined by entity and content quality signals.

## Why organic is the right investment

Even as advertising options expand around AI engines, organic recommendations carry significantly higher user trust than labeled advertisements. Users who ask an AI engine for a business recommendation and receive an organic citation treat it as a genuine expert recommendation. Users who receive a labeled advertisement treat it accordingly.

The businesses that will dominate AI engine recommendations long-term are the ones building the organic authority infrastructure now — not the ones relying on advertising placements that can be changed or competed away with budget.`,
    relatedQuestions: [
      'Is GEO just a rebrand of SEO?',
      'Which AI engine matters most for my business?',
      'Why does one engine recommend me and another doesn\'t?',
      'How long does GEO take to show results?',
    ],
    sources: [
      { label: 'Perplexity AI — Advertising', url: 'https://www.perplexity.ai/hub/blog/perplexity-announces-sponsored-follow-up-questions' },
      { label: 'Google — Ads in AI Overviews', url: 'https://blog.google/products/ads-commerce/google-ai-overviews-ads/' },
    ],
  },

  [slugify('Why does one engine recommend me and another doesn\'t?')]: {
    lastUpdated: 'July 2026',
    takeaways: [
      'Different engines draw on different data sources and update on different schedules — divergent results are expected.',
      'Google AI Overviews weights GBP and structured data heavily; ChatGPT weights web content authority and review signals.',
      'Perplexity reads the live web and may reflect recent changes faster than engines using training data.',
      'Inconsistent entity signals create divergent recommendations — fix inconsistency first.',
      'The goal is parity across engines, achieved by building the foundational signals that all engines share.',
    ],
    body: `## Why AI engines disagree

Each major AI engine operates from different data sources, different update schedules, and different weighting models. It is entirely normal — and actually expected — for your business to appear prominently in one engine and be absent from another. Understanding why helps you close the gaps.

## The source differences

### Google AI Overviews

AI Overviews draw primarily from:
- Google's own search index (crawled content)
- Google Business Profile data
- Google's structured data pipeline
- Google Maps and local knowledge graph

If you are visible in Google AI Overviews but not elsewhere, you have strong GBP and schema signals but may have weaker web content authority that other engines rely on.

### ChatGPT

ChatGPT's recommendations draw from:
- Training data (web content from its training window)
- Browse results (live web content for queries that trigger Browse)
- Third-party data sources integrated into its knowledge base

If you appear in ChatGPT but not Google AI Overviews, you likely have strong web content authority (backlinks, domain age, publishing history) but may have weaker GBP or local schema signals.

### Perplexity

Perplexity crawls the live web for each query and heavily weights:
- Recently published, source-citable content
- Named authorship and authority page structure
- External references from credible domains

If you appear in Perplexity but not other engines, your content quality is strong but your entity foundation (schema, GBP, NAP consistency) may lag.

## The universal fix

Because different engines weight different signals, the most reliable path to cross-engine visibility is building all the foundational signals simultaneously:
- Organization/LocalBusiness schema (helps Google and Gemini)
- Complete GBP (helps Google AI Overviews specifically)
- Authority content with named authorship (helps Perplexity and ChatGPT)
- Review velocity across multiple platforms (helps all engines)

This approach produces parity across engines rather than optimizing for one at the expense of others.`,
    relatedQuestions: [
      'Which AI engine matters most for my business?',
      'Can I pay to be recommended by ChatGPT or Perplexity?',
      'How long does it take for changes to show up in AI results?',
      'Why do I appear when named but not in category searches?',
    ],
    sources: [
      { label: 'Google AI Overviews', url: 'https://blog.google/products/search/generative-ai-search/' },
      { label: 'Perplexity AI — About', url: 'https://www.perplexity.ai/about' },
    ],
  },

  [slugify('How important are reviews really?')]: {
    lastUpdated: 'July 2026',
    takeaways: [
      'Reviews are one of the three primary AI recommendation signals, alongside entity clarity and content authority.',
      'For local business recommendations, reviews may be the single highest-weighted signal in Google AI Overviews.',
      'Review quality (specific, outcome-focused text) matters as much as review quantity.',
      'A business with excellent schema and content but no review velocity is vulnerable in competitive category queries.',
      'Reviews are the one signal that competitors cannot replicate quickly — making them a durable competitive moat.',
    ],
    body: `## How central reviews are to AI recommendations

When an AI engine recommends a local service business, it is making a claim on behalf of a user: "This business is worth your time and money." That is a high-stakes claim, and engines are conservative about making it without sufficient corroborating evidence.

Reviews are the primary form of that corroboration. They represent the aggregated opinions of people who have actually used the service — independent, third-party evidence that the business delivers what it claims. No amount of self-declared schema or brand-authored content provides the same type of evidence.

## Why reviews are weighted so heavily for local businesses

For a local plumber, accountant, or contractor, the trust calculus is simple: an AI engine with 50 specific, recent reviews from satisfied clients can recommend that business with high confidence. An engine with two old reviews and a polished website cannot make the same recommendation with equal confidence — and engines are calibrated to err on the side of caution.

Research suggests that for local service queries in Google AI Overviews, review signals (count, recency, rating, and text quality) carry weighting comparable to or exceeding structured data signals. This is especially true for queries like "best [service] near me" or "who should I call for [specific problem]."

## The quality dimension

Volume without quality is less valuable than it appears. Fifty reviews saying "great service, highly recommend" are weaker signals than twenty reviews describing specific situations, named services, and measurable outcomes. AI engines extract semantic content from review text — businesses whose reviews use service-specific language match more strongly to service-specific queries.

## Reviews as competitive moat

Unlike schema (which can be copied in hours) or content (which can be replicated in weeks), a review corpus takes months to build and requires genuine customer satisfaction to sustain. A competitor who decides today to build their review program is 12 months behind a business that has been running one consistently. That gap is not closeable with budget.`,
    relatedQuestions: [
      'Do AI engines actually read the text of my reviews, or just the star rating?',
      'What is review velocity and why does it matter?',
      'How many reviews do I need to show up in AI recommendations?',
      'Why is reputation harder for competitors to copy than other AI signals?',
    ],
    sources: [
      { label: 'Google Business Profile — Reviews', url: 'https://support.google.com/business/answer/3474050' },
    ],
  },

  [slugify('Do backlinks still matter?')]: {
    lastUpdated: 'July 2026',
    takeaways: [
      'Yes — backlinks remain a significant authority signal for AI engines that weight domain credibility.',
      'The nature of what makes a backlink valuable has shifted toward citation-authority: editorial links from credible sources.',
      'Mass link building, directory spam, and low-quality backlink schemes are not just ineffective — they are now counterproductive.',
      'For AI engines, backlinks matter as an indirect signal: high-authority domains with links to you are more likely to cite you.',
      'Earning backlinks through citable content and genuine press is now more valuable than any volume-based approach.',
    ],
    body: `## Backlinks in the AI search era

Backlinks — links from external websites to your pages — have been a foundational SEO signal for 25 years. The question for GEO is whether they retain relevance when AI engines synthesize answers rather than rank pages.

The answer is: yes, but the mechanism has changed.

## How backlinks feed AI engine authority

AI engines that crawl the web (Perplexity, ChatGPT with Browse, Google's index for AI Overviews) weight content from domains they evaluate as credible. Domain credibility is still substantially influenced by the quality and volume of inbound links. A page on a domain that 40 reputable external sites link to is treated as more authoritative than the same content on an unlinked domain.

The change is in what "quality" means. AI engines appear to weight editorial backlinks — links placed because a publisher found your content worth referencing — more heavily than directory links, paid links, or reciprocal schemes. An editorial link from a trade publication citing your methodology page is worth more than 100 directory submissions.

## The citation loop

There is also a direct citation loop for AI visibility: the external sites that link to your content are often the same sites AI engines draw on as source material. A trade publication that links to your research is not just sending link equity — it is establishing your content as a source that the publication considers credible. When an AI engine reads that publication's content, it also reads their citations — and your work is on that list.

## What to pursue

- **Press and media mentions:** Pitch journalists in your industry with specific story angles that use your data, case studies, or expertise
- **Industry association features:** Guest articles, speaking opportunities, and directory listings from recognized associations in your field
- **Partner and supplier citations:** Co-marketing content, case studies with clients, and supplier spotlight features that earn legitimate inbound links
- **Original research:** Data, surveys, or analysis that other sites cite in their own content — the highest-authority backlink type

What to avoid: any link building that scales through automation, purchase, or artificial reciprocity. These approaches were declining in value before AI search and are now actively counterproductive.`,
    relatedQuestions: [
      'Is GEO just a rebrand of SEO?',
      'Do I need to abandon my SEO work?',
      'Why is reputation harder for competitors to copy than other AI signals?',
      'Should my content be attributed to individuals instead of the brand?',
    ],
    sources: [
      { label: 'Google Search Central — Links and SEO', url: 'https://developers.google.com/search/docs/essentials/spam-policies#link-spam' },
    ],
  },

  [slugify('How often do these engines update what they know?')]: {
    lastUpdated: 'July 2026',
    takeaways: [
      'Perplexity crawls the live web in near-real-time — changes to your content can appear in its responses within days.',
      'Google AI Overviews reflects Google\'s index, which updates continuously with a rolling crawl schedule.',
      'ChatGPT training data has a knowledge cutoff; Browse mode can access live content but not all queries trigger it.',
      'Gemini updates follow Google\'s index cadence and GBP update schedules.',
      'GBP changes are the fastest to propagate — typically within 24–72 hours for AI Overviews.',
    ],
    body: `## The update cadence by engine

Understanding how often each engine refreshes its knowledge helps you plan your GEO program and set realistic expectations for when changes appear.

### Perplexity: Near-real-time

Perplexity's architecture is fundamentally different from training-data engines. For most queries, it crawls the live web at query time and synthesizes answers from current content. This means changes you make to your website — new articles, updated service descriptions, corrected schema — can appear in Perplexity responses within days of publishing.

Perplexity is the fastest signal propagation environment and the best engine for quickly testing whether new content is being picked up.

### Google AI Overviews: Rolling index + GBP

Google AI Overviews draws on Google's continuously updated search index. Most pages are re-crawled within days to weeks of significant changes. High-authority pages with frequent updates are crawled more often.

GBP updates propagate faster — typically 24–72 hours for category changes and description updates, and almost immediately for hours and review responses.

### ChatGPT: Training data + Browse

ChatGPT's knowledge has two layers:
- **Training data:** Updated on a periodic cycle (typically aligned with major model releases). Information added to the web after a training cutoff date may not appear in non-Browse responses.
- **Browse:** When activated, Browse accesses live web content. Not all queries trigger Browse — and even when triggered, it depends on whether your content is indexed and accessible.

For entity-level information (who is your business, what do you do), expect changes to propagate into ChatGPT's training data on a 3–6 month cycle after a major model update.

### Gemini: Google index + GBP

Gemini draws heavily from Google's knowledge graph, meaning its update cadence closely follows Google's — faster for GBP and schema changes, slower for deep entity model updates.

## The practical implication

Publish new content and schema corrections, then:
1. Submit updated URLs to Google Search Console for accelerated indexing
2. Wait 1–2 weeks and test in Perplexity (fastest feedback)
3. Wait 3–6 weeks and test in Google AI Overviews
4. Wait 6–12 weeks and test in ChatGPT (slowest propagation)`,
    relatedQuestions: [
      'How long does it take for changes to show up in AI results?',
      'How often should I run an AI visibility audit?',
      'Which AI engine matters most for my business?',
      'Why does one engine recommend me and another doesn\'t?',
    ],
    sources: [
      { label: 'Google Search Console — Indexing', url: 'https://support.google.com/webmasters/answer/6065812' },
      { label: 'Perplexity AI — How It Works', url: 'https://www.perplexity.ai/about' },
    ],
  },

  [slugify('Is this worth it if I only serve a small local market?')]: {
    lastUpdated: 'July 2026',
    takeaways: [
      'Yes — small local markets are where GEO delivers the fastest, most measurable ROI.',
      'Local AI recommendations operate in a narrow competitive field: being one of 5–10 strong entities beats being one of 10,000 undifferentiated ones.',
      'Google AI Overviews for local queries is one of the highest-traffic surfaces in local business discovery.',
      'A small local business that builds entity authority now faces significantly fewer competitors with the same infrastructure.',
      'The effort required to dominate a small local market with GEO is substantially less than dominating a national market.',
    ],
    body: `## Why local markets are the best GEO opportunity

GEO is not just for national brands or enterprise businesses. For small local businesses, AI visibility work often delivers the fastest and most measurable return — because the competitive field is narrower, the entity signals required are simpler, and the queries that drive local business recommendations are some of the most commercially valuable in local search.

## The local competitive reality

When a user in your city asks an AI engine for a recommendation in your category, the engine is selecting from a manageable pool of candidates — typically the 5–20 businesses in your area with sufficient entity signals to be confidently recommended. In most local markets, fewer than five businesses have completed entity foundations, consistent review velocity, and citable content.

If you complete these three elements, you are almost immediately a top-tier recommendation candidate — not because you have outspent competitors, but because you have built infrastructure that most local businesses have not.

Compare this to national markets: competing for "best financial planner" nationally puts you against hundreds of businesses with mature GEO programs, large content libraries, and decades of reputation data. Competing for "best financial planner in [your city]" often puts you against a handful of partially optimized competitors.

## The ROI calculation for local businesses

A single new client from AI-driven discovery is often worth hundreds to thousands of dollars in lifetime value. If your AI visibility investment produces even one additional client per quarter, it almost certainly pays for itself.

Track this with a simple intake question: "How did you find us?" Over 12 months, you will develop a clear picture of what AI-driven discovery is worth to your practice — and whether to invest more.

## Getting started in a small local market

The minimum viable GEO investment for a small local business:
1. Complete Google Business Profile (every field, 10+ photos, weekly posts)
2. Implement LocalBusiness schema with service area
3. Build to 25+ recent, specific reviews on Google
4. Publish 3–4 authority articles targeting local problem and category queries
5. Run an AI visibility audit to establish baseline and track improvement`,
    relatedQuestions: [
      'Is this roadmap different for local versus national businesses?',
      'Is entity SEO relevant for small local businesses?',
      'Can I really become visible in AI search in 90 days?',
      'How important are reviews really?',
    ],
    sources: [
      { label: 'Google Business Profile Help', url: 'https://support.google.com/business' },
      { label: 'Schema.org — LocalBusiness', url: 'https://schema.org/LocalBusiness' },
    ],
  },

};

export function getFaqEnrichment(question: string): FaqEnrichment | undefined {
  return enrichments[slugify(question)];
}

export function getAllEnrichedSlugs(): string[] {
  return Object.keys(enrichments);
}
