// ─── Types ────────────────────────────────────────────────────────────────────

export type CaseStudy = {
  id: string;
  label: string;
  handle: string;    // hyperlocal identity label, e.g. "The Montlake Agent"
  segment: 'Independent Agent' | 'Brokerage' | 'Team' | 'Service Business';
  city: string;      // general metro, e.g. "Seattle, WA"
  modules: string[];
  challenge: string;
  solution: string;
  results: { metric: string; label: string }[];
  quote: string;
  timeline: string;
  updatedAt: string; // e.g. "August 2026"
};

export type Win = {
  handle: string;              // hyperlocal identity label
  segment: string;
  result: string;              // one-line win, e.g. "Named primary recommendation for 'luxury homes in Montlake' on ChatGPT"
  engine: string;              // AI engine where the win was observed
  dayFromActivation: number;
  month: string;               // e.g. "Aug 2026"
};

// ─── Aggregate Stats ──────────────────────────────────────────────────────────
// Update these as real data accumulates across all 8 engagements.

export const DASHBOARD_METRICS = [
  { value: '—', label: 'Average increase in AI recommendation frequency', sub: 'across all active engagements' },
  { value: '—', label: 'Average days to first measurable AI citation', sub: 'from PearlOS activation' },
  { value: '—', label: 'Average Knowledge Graph completion score', sub: 'at 90-day mark' },
  { value: '6', label: 'AI engines monitored per engagement', sub: 'ChatGPT, Perplexity, Gemini, Claude, Copilot, AI Overviews' },
  { value: '—', label: 'Average Authority Score point gain', sub: 'from baseline to 90-day review' },
  { value: '—', label: 'Average AI Share of Voice growth', sub: 'within primary service category' },
];

// ─── Case Studies ─────────────────────────────────────────────────────────────
// Documented engagement stories — real data, anonymized client handles.
// Use the client's hyperlocal area as the handle — specific enough to feel real,
// vague enough to protect identity. E.g. "The Montlake Agent", "The South Congress Brokerage".

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'pensacola-gulf-coast-agent',
    label: 'Case Study 01',
    handle: 'The Pensacola Gulf Coast Agent',
    segment: 'Independent Agent',
    city: 'Pensacola, FL',
    modules: ['Authority Website', 'Authority Pages', 'GEO Engine', 'AI Visibility', 'Knowledge Graph'],
    challenge:
      'An experienced Gulf Coast real estate professional needed more than a traditional website. The goal was to establish long-term authority in the Pensacola market by improving search visibility, creating hyperlocal content, and building a digital foundation optimized for both Google and AI-powered search platforms — starting from a near-zero baseline.',
    solution:
      'HeyPearl implemented a complete Authority System: a modern authority website, hyperlocal neighborhood pages, AI-optimized blog content, technical SEO, AI schema implementation, Google Business Profile optimization, and a full GEO content strategy targeting the specific queries Pensacola buyers and sellers use.',
    results: [
      { metric: '#1', label: 'ranked across all five tracked AI search topics within 3.5 months' },
      { metric: '165', label: 'ranking keywords — from a near-zero baseline at launch' },
      { metric: '92/100', label: 'Technical Health Score at the 90-day mark' },
    ],
    quote: 'The strategy gave me a clear roadmap for growing my online presence. Every improvement builds on the last, creating lasting value for my business.',
    timeline: '3.5 months',
    updatedAt: 'July 2026',
  },
  {
    id: 'new-braunfels-agent',
    label: 'Case Study 02',
    handle: 'The New Braunfels Agent',
    segment: 'Independent Agent',
    city: 'New Braunfels, TX',
    modules: ['Authority Website', 'Authority Pages', 'GEO Engine', 'AI Visibility', 'Knowledge Graph'],
    challenge:
      'New Braunfels is one of the fastest-growing cities in Texas — sitting between San Antonio and Austin, with new neighborhoods, relocation demand, and out-of-state buyers arriving in waves. Todd came to HeyPearl with a near-zero digital presence: no website sessions, no search impressions, no reviews. The market opportunity was real, but without search and AI visibility, none of it was reachable.',
    solution:
      'HeyPearl built the entire digital authority stack from scratch. OTTO resolved 406 technical issues and expanded the site from 23 to 56 pages — lifting site health from 0 to 79/100 without Todd touching a single line of code. Hyperlocal neighborhood and relocation content was published around the queries New Braunfels buyers actually use. Entity architecture, structured data, and an AI-optimized content strategy established Todd as the recognized area authority across both Google and AI-powered platforms.',
    results: [
      { metric: '#1', label: 'AI-recommended source for 3 of 5 tracked local search topics — achieved within 7 months of activation' },
      { metric: '2,590', label: 'Google search impressions in month 8 — up 2,300 in a single month from 290 the month prior' },
      { metric: '178', label: 'ranking keywords tracked across the New Braunfels area — built entirely from zero at activation' },
    ],
    quote: 'Before working with HeyPearl, I had almost no online presence. Now I\'m showing up at the top of AI searches in New Braunfels, my Google impressions went from basically zero to nearly 3,000 in a single month, and I didn\'t have to figure any of it out myself. That\'s a game changer.',
    timeline: '8 months',
    updatedAt: 'July 2026',
  },
  {
    id: 'leavenworth-team',
    label: 'Case Study 03',
    handle: 'The Leavenworth Team',
    segment: 'Team',
    city: 'Leavenworth, KS',
    modules: ['Authority Website', 'Authority Pages', 'GEO Engine', 'AI Visibility', 'Knowledge Graph', 'Authority Score'],
    challenge:
      'A veteran-owned husband-and-wife real estate team had deep community roots serving military families around Fort Leavenworth and the Kansas City metro — but zero digital authority. Their Google Business Profile was active yet unoptimized. Their site was effectively unindexed for months. And in a market where military buyers often relocate on tight timelines and rely on AI search before picking up the phone, being invisible wasn\'t an option.',
    solution:
      'HeyPearl deployed a full authority build: OTTO resolved 1,939 technical issues and expanded the site from 97 to 237 pages, lifting the health score from 0 to 75/100. A concentrated review campaign drove 101+ five-star reviews in under 60 days — establishing instant social proof. AI-optimized content around veteran-owned real estate, military relocation, and Kansas City area topics established the team as the recommended authority across all tracked AI platforms.',
    results: [
      { metric: '#1', label: 'ranked across all 5 tracked AI search topics by month 8 — veteran real estate, military relocation, and KC metro buying' },
      { metric: '101+', label: 'five-star Google reviews collected — from 0 reviews in the first 90 days of engagement' },
      { metric: '97.4%', label: 'local pack coverage across the Leavenworth and Kansas City metro area' },
    ],
    quote: 'We serve military families and local buyers who deserve to work with someone they can trust. Now when they search on Google or ask ChatGPT, we\'re the name that comes up. HeyPearl built that for us — and it\'s been a game changer for our business.',
    timeline: '8 months',
    updatedAt: 'July 2026',
  },
  {
    id: 'austin-area-agent',
    label: 'Case Study 04',
    handle: 'The Austin Area Agent',
    segment: 'Independent Agent',
    city: 'Austin, TX',
    modules: ['Authority Website', 'GEO Engine', 'AI Visibility', 'Knowledge Graph', 'Authority Score'],
    challenge:
      'Austin is one of the most competitive real estate markets in the US — dense with agents, heavy on search advertising, and increasingly driven by AI-powered buyer research. Laurel came to HeyPearl with an existing brand but a thin digital footprint: no Google reviews, minimal GBP traction, and a website that couldn\'t compete technically. In a market this competitive, being hard to find online meant losing buyers before the first conversation.',
    solution:
      'HeyPearl built a new authority website, resolved 460 technical SEO issues to achieve 100% site health, and deployed an AI content strategy targeting Austin buyer, seller, and relocation queries. A concentrated review campaign brought her from 0 to 33 five-star reviews in six months — 32 of them arriving in a single month. Entity architecture and AEO content established her as the recognized Austin authority across all major AI platforms.',
    results: [
      { metric: '#1', label: 'AI-recommended source for all 5 tracked Austin local search topics — with 85.4% positive sentiment across AI platforms' },
      { metric: '100%', label: 'website health score achieved in month 6 — 460 technical issues auto-resolved from a standing start' },
      { metric: '33', label: 'five-star Google reviews in 6 months — 32 collected in a single month from a concentrated review campaign' },
    ],
    quote: 'Austin is one of the most competitive real estate markets in the country. After six months with HeyPearl, I\'m showing up first on every AI search I track — and I went from zero reviews to 33 in the time I\'ve been working with them. The visibility I have now is something I couldn\'t have built on my own.',
    timeline: '6 months',
    updatedAt: 'July 2026',
  },
  {
    id: 'seattle-luxury-agent',
    label: 'Case Study 05',
    handle: 'The Seattle Luxury Agent',
    segment: 'Independent Agent',
    city: 'Seattle, WA',
    modules: ['Authority Website', 'Authority Score', 'Knowledge Graph', 'GEO Engine', 'AI Visibility'],
    challenge:
      'Seattle is one of the most competitive real estate markets in the US — and the luxury segment is especially dense with established agents, deep advertising budgets, and entrenched search authority. Christine came to HeyPearl with an active brand, a strong social following, and a solid reputation — but her average search position was 18.5 and she had zero measured local pack presence. With buyers increasingly starting their search online and on AI, she was effective in person but invisible at the top of the funnel.',
    solution:
      'HeyPearl migrated Christine to a new authority domain, resolved 112 technical issues, and expanded the site from 13 to 28 pages — lifting website health from 0 to 61/100 in a single month. Google Business Profile optimization drove her action rate to 24.2%, the highest in the program. A concentrated review campaign delivered 32 new reviews in under 60 days. Local pack authority was built across the Seattle service area, resulting in 66.7% grid coverage — 26 of 39 tracked map points showing her listing.',
    results: [
      { metric: '66.7%', label: 'local pack visibility across the Seattle grid — 26 of 39 map points showing in one of the most competitive luxury markets in the US' },
      { metric: '13,300', label: 'monthly Google Search impressions by month 5 — a 3.9x increase from 3,389 at activation' },
      { metric: '33', label: 'Google reviews at 4.8 stars — review campaign delivered 32 new reviews in under 60 days' },
    ],
    quote: 'Seattle is one of the most competitive real estate markets in the country. After six months with HeyPearl, I\'m appearing on 66% of the local search map, my search impressions have nearly quadrupled, and I have 33 reviews I didn\'t have before. That kind of authority doesn\'t happen by accident.',
    timeline: '6 months',
    updatedAt: 'July 2026',
  },
  {
    id: 'woodbury-agent',
    label: 'Case Study 06',
    handle: 'The Woodbury Agent',
    segment: 'Independent Agent',
    city: 'Woodbury, MN',
    modules: ['Authority Website', 'Authority Pages', 'GEO Engine', 'AI Visibility', 'Knowledge Graph'],
    challenge:
      'Woodbury is a growing Twin Cities suburb with a competitive local real estate market — and the established agents already command hundreds of reviews and years of domain authority. Dave came to HeyPearl with 88 Facebook followers, 108 Instagram followers, zero Google reviews, and a site that had yet to appear in organic search. Building authority from zero against agents with 200–400 reviews required a different sequence: establish AI visibility first, build the technical foundation, and let the organic and review channels compound.',
    solution:
      'HeyPearl rebuilt the technical foundation from scratch — resolving 990 issues and lifting website health from 0 to 93/100, with the site expanding from 100 to 117 pages. An AEO content strategy and entity architecture established Dave as the AI-recommended source across all 5 tracked Woodbury search topics, with 76.7% positive AI sentiment and 31 new AI citations identified in a single month. A review campaign brought him from 0 to 19 Google reviews at a perfect 5.0 stars. Authority was further reinforced by 512 backlinks from 144 unique referring domains — all building toward the search indexing and local pack visibility still ahead.',
    results: [
      { metric: '#1', label: 'AI-recommended source across all 5 tracked Woodbury local search topics — with 76.7% positive AI sentiment in month 4 of the engagement' },
      { metric: '93/100', label: 'website health score by month 5 — from zero at activation, with 990 technical issues resolved and 512 authority backlinks established' },
      { metric: '19', label: 'Google reviews at a perfect 5.0 stars — from zero reviews at activation, built through a concentrated review campaign' },
    ],
    quote: 'I came into this with almost no online presence — 88 Facebook followers and zero reviews. Within five months I\'m the top recommendation on AI search in Woodbury, my site health is at 93%, and I have 19 five-star reviews. HeyPearl built an authority foundation I didn\'t even know I needed.',
    timeline: '5 months',
    updatedAt: 'July 2026',
  },
];

// ─── Recent Wins ──────────────────────────────────────────────────────────────
// Lightweight, frequently updated feed of specific wins.
// Add a new entry each time a client hits a notable milestone.
// Newest first.

export const RECENT_WINS: Win[] = [
  // Newest first. dayFromActivation is calculated from each client's program start date.
  // Note: Texas Hill Country, Seattle Luxury, Austin Area, Albany Area started Apr–May 2026.
  // New Braunfels and Leavenworth both started Nov 22, 2025. Pensacola started Apr 14, 2026.
  // Woodbury started Feb 16, 2026.

  // ── July 2026 ──────────────────────────────────────────────────────────────
  {
    handle: 'The Texas Hill Country Agent',
    segment: 'Independent Agent',
    result: 'Ranked #1 or #2 for 6 of 7 tracked AI buyer queries — ranch property appraisals, water rights, land listings, and more',
    engine: 'All engines',
    dayFromActivation: 75,
    month: 'Jul 2026',
  },
  {
    handle: 'The Seattle Luxury Agent',
    segment: 'Independent Agent',
    result: 'Appearing in 26 of 39 map grid points near Seattle — 66.7% local pack visibility in one of the most competitive luxury markets in the US',
    engine: 'Google Maps',
    dayFromActivation: 165,
    month: 'Jul 2026',
  },
  {
    handle: 'The Seattle Luxury Agent',
    segment: 'Independent Agent',
    result: '33 Google reviews at 4.8 stars — 32 new reviews collected in under 60 days from a concentrated review campaign',
    engine: 'Google',
    dayFromActivation: 165,
    month: 'Jul 2026',
  },
  {
    handle: 'The Leavenworth Team',
    segment: 'Team',
    result: 'Ranked #1 across all 5 tracked AI search topics — veteran-owned real estate, military relocation, and KC metro buying queries all returning the team as the top recommendation',
    engine: 'All engines',
    dayFromActivation: 235,
    month: 'Jul 2026',
  },
  {
    handle: 'The Austin Area Agent',
    segment: 'Independent Agent',
    result: 'Site health reached 100% — 460 technical issues auto-resolved without touching a line of code, building a clean foundation for search authority',
    engine: 'OTTO SEO',
    dayFromActivation: 165,
    month: 'Jul 2026',
  },
  {
    handle: 'The Austin Area Agent',
    segment: 'Independent Agent',
    result: '33 five-star Google reviews at 5.0 stars — 32 earned in a single month from a concentrated review campaign, up from 1 review on file the month before',
    engine: 'Google',
    dayFromActivation: 165,
    month: 'Jul 2026',
  },
  {
    handle: 'The New Braunfels Agent',
    segment: 'Independent Agent',
    result: 'Search impressions jumped from 290 to 2,590 in a single month — 178 keywords now tracking across the New Braunfels area',
    engine: 'Google Search',
    dayFromActivation: 235,
    month: 'Jul 2026',
  },
  {
    handle: 'The Albany Area Agent',
    segment: 'Independent Agent',
    result: 'Search impressions up 210% month-over-month to 558 — average ranking position now 8.6 with 23 tracked keywords',
    engine: 'Google Search',
    dayFromActivation: 55,
    month: 'Jul 2026',
  },
  {
    handle: 'The Pensacola Gulf Coast Agent',
    segment: 'Independent Agent',
    result: 'Ranked #1 across all five tracked AI search topics — from a near-zero digital baseline at launch',
    engine: 'All engines',
    dayFromActivation: 107,
    month: 'Jul 2026',
  },
  {
    handle: 'The Woodbury Agent',
    segment: 'Independent Agent',
    result: '204 website sessions — best month since activation, up 63% month-over-month, with organic search sessions averaging 4m 05s engagement time',
    engine: 'Google Analytics',
    dayFromActivation: 165,
    month: 'Jul 2026',
  },
  {
    handle: 'The Woodbury Agent',
    segment: 'Independent Agent',
    result: 'Website health score reached 93/100 — 990 technical issues resolved since activation, with 527 authority backlinks across 144 referring domains',
    engine: 'OTTO SEO',
    dayFromActivation: 165,
    month: 'Jul 2026',
  },

  // ── June 2026 ─────────────────────────────────────────────────────────────
  {
    handle: 'The Seattle Luxury Agent',
    segment: 'Independent Agent',
    result: 'Google Search impressions reached 13,300 — a 3.9x increase from 3,389 at activation — as new authority domain, technical fixes, and content began compounding',
    engine: 'Google Search',
    dayFromActivation: 140,
    month: 'Jun 2026',
  },
  {
    handle: 'The Seattle Luxury Agent',
    segment: 'Independent Agent',
    result: 'New authority domain launched — 112 technical issues resolved, website health reached 61/100 from zero, and site expanded from 13 to 28 pages',
    engine: 'OTTO SEO',
    dayFromActivation: 140,
    month: 'Jun 2026',
  },
  {
    handle: 'The Austin Area Agent',
    segment: 'Independent Agent',
    result: 'Ranked #1 AI-recommended source for all 5 tracked Austin local search topics — 85.4% positive AI sentiment across ChatGPT and major AI platforms',
    engine: 'All engines',
    dayFromActivation: 145,
    month: 'Jun 2026',
  },
  {
    handle: 'The Austin Area Agent',
    segment: 'Independent Agent',
    result: 'New authority website launched — 292 technical issues resolved, site health reached 59/100 from zero, and page count grew from 25 to 36',
    engine: 'OTTO SEO',
    dayFromActivation: 145,
    month: 'Jun 2026',
  },
  {
    handle: 'The Leavenworth Team',
    segment: 'Team',
    result: '101+ five-star Google reviews collected in under 60 days — from a single review on file in May to a 4.97-star average now dominating local search results',
    engine: 'Google',
    dayFromActivation: 196,
    month: 'Jun 2026',
  },
  {
    handle: 'The New Braunfels Agent',
    segment: 'Independent Agent',
    result: 'Ranked #1 AI-recommended source for 3 of 5 local search topics — including Local Market Expertise — with 131 authority links built from 77 unique referring sources',
    engine: 'All engines',
    dayFromActivation: 196,
    month: 'Jun 2026',
  },
  {
    handle: 'The Leavenworth Team',
    segment: 'Team',
    result: '1,939 technical SEO issues resolved in a single month — site expanded from 97 to 237 pages and website health score reached 75/100 from zero',
    engine: 'OTTO SEO',
    dayFromActivation: 196,
    month: 'Jun 2026',
  },
  {
    handle: 'The Woodbury Agent',
    segment: 'Independent Agent',
    result: '#1 AI-recommended source across all 5 tracked local real estate topics — 76.7% positive AI sentiment with 31 new AI citations found in a single month',
    engine: 'All engines',
    dayFromActivation: 134,
    month: 'Jun 2026',
  },
  {
    handle: 'The Woodbury Agent',
    segment: 'Independent Agent',
    result: '990 technical SEO issues resolved — site health reached 69/100 from zero, site expanded from 100 to 117 pages, and 18 Google reviews now on file',
    engine: 'OTTO SEO',
    dayFromActivation: 134,
    month: 'Jun 2026',
  },

  // ── May 2026 ──────────────────────────────────────────────────────────────
  {
    handle: 'The Seattle Luxury Agent',
    segment: 'Independent Agent',
    result: 'Google Business Profile action rate hit 24.2% — 66 direction requests and 88 total interactions in a single month, the highest action rate in the program',
    engine: 'Google Maps',
    dayFromActivation: 110,
    month: 'May 2026',
  },
  {
    handle: 'The Austin Area Agent',
    segment: 'Independent Agent',
    result: 'Google Business Profile action rate reached 57% — 42 direction requests in the month, with Google Maps now driving over 50% of all profile impressions',
    engine: 'Google Maps',
    dayFromActivation: 115,
    month: 'May 2026',
  },
  {
    handle: 'The Leavenworth Team',
    segment: 'Team',
    result: 'First non-branded search click earned — "best selling agents near me" — content beginning to rank for buyer-intent queries beyond direct brand searches',
    engine: 'Google Search',
    dayFromActivation: 160,
    month: 'May 2026',
  },
  {
    handle: 'The Woodbury Agent',
    segment: 'Independent Agent',
    result: 'GBP impressions peaked at 251 — up 365% from 54 at activation — with a first Woodbury seller-focused blog post driving early organic traffic',
    engine: 'Google Maps',
    dayFromActivation: 104,
    month: 'May 2026',
  },

  // ── April 2026 ────────────────────────────────────────────────────────────
  {
    handle: 'The Leavenworth Team',
    segment: 'Team',
    result: 'First real inbound call volume from Google Business Profile — 5 calls in the month, with 110 total profile interactions and a 19.4% action rate',
    engine: 'Google Maps',
    dayFromActivation: 130,
    month: 'Apr 2026',
  },
  {
    handle: 'The New Braunfels Agent',
    segment: 'Independent Agent',
    result: 'First 5-star Google review earned — GBP now showing 18.8% action rate with 45 direction requests and 22 website clicks in a single month',
    engine: 'Google',
    dayFromActivation: 130,
    month: 'Apr 2026',
  },
  {
    handle: 'The Woodbury Agent',
    segment: 'Independent Agent',
    result: 'First 126 website sessions recorded — 4m 42s average session time and /contact page at 17% of all pageviews, a strong high-intent signal in month 2',
    engine: 'Google Analytics',
    dayFromActivation: 73,
    month: 'Apr 2026',
  },

  // ── March 2026 ────────────────────────────────────────────────────────────
  {
    handle: 'The Seattle Luxury Agent',
    segment: 'Independent Agent',
    result: 'Google Search clicks more than doubled month-over-month to 152 — impressions hit 7,337 and GBP website clicks jumped 3.5x as the profile gained traction',
    engine: 'Google Search',
    dayFromActivation: 49,
    month: 'Mar 2026',
  },
  {
    handle: 'The Austin Area Agent',
    segment: 'Independent Agent',
    result: 'First 2 five-star Google reviews earned — Google Business Profile interactions jumped 171% month-over-month, with 40 direction requests in a single month',
    engine: 'Google',
    dayFromActivation: 54,
    month: 'Mar 2026',
  },
  {
    handle: 'The Leavenworth Team',
    segment: 'Team',
    result: 'Site indexed and first organic search traffic appeared — 12 clicks and 492 impressions across 34 tracked keywords, all from zero the month before',
    engine: 'Google Search',
    dayFromActivation: 99,
    month: 'Mar 2026',
  },
  {
    handle: 'The Woodbury Agent',
    segment: 'Independent Agent',
    result: 'GBP impressions tripled month-over-month (54 → 161) — first 10 website clicks from the profile and Instagram reach grew to 599, 5.5x the follower count',
    engine: 'Google Maps',
    dayFromActivation: 43,
    month: 'Mar 2026',
  },

  // ── February 2026 ─────────────────────────────────────────────────────────
  {
    handle: 'The Seattle Luxury Agent',
    segment: 'Independent Agent',
    result: '3,389 Google Search impressions and 64 organic clicks in the first 19 days of activation — 220 keywords already tracking from a standing start',
    engine: 'Google Search',
    dayFromActivation: 18,
    month: 'Feb 2026',
  },
  {
    handle: 'The Austin Area Agent',
    segment: 'Independent Agent',
    result: '884 Google Search impressions and 25 organic clicks in the first month of activation — 57 keywords now tracking from a standing start',
    engine: 'Google Search',
    dayFromActivation: 23,
    month: 'Feb 2026',
  },
  {
    handle: 'The Leavenworth Team',
    segment: 'Team',
    result: 'First 5-star Google review earned at day 68 — the first verified conversion from digital presence to real social proof',
    engine: 'Google',
    dayFromActivation: 68,
    month: 'Feb 2026',
  },
];

// ─── Testimonials ─────────────────────────────────────────────────────────────
// Tied to real clients. Use handle + segment as attribution — no real names.

export const TESTIMONIALS = [
  {
    quote: 'The strategy gave me a clear roadmap for growing my online presence. Every improvement builds on the last, creating lasting value for my business.',
    handle: 'The Pensacola Gulf Coast Agent',
    segment: 'Independent Agent',
    city: 'Pensacola, FL',
  },
  {
    quote: 'Replace with real client quote.',
    handle: 'The [Area] Brokerage',
    segment: 'Brokerage Owner',
    city: 'City, ST',
  },
  {
    quote: 'Replace with real client quote.',
    handle: 'The [Area] Team',
    segment: 'Team Lead',
    city: 'City, ST',
  },
];
