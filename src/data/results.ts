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
// 3 featured stories. Replace placeholder text with real client data.
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
];

// ─── Recent Wins ──────────────────────────────────────────────────────────────
// Lightweight, frequently updated feed of specific wins.
// Add a new entry each time a client hits a notable milestone.
// Newest first.

export const RECENT_WINS: Win[] = [
  // Add new wins above this line — newest first
  // Note: dayFromActivation is approximate for clients whose exact start date is unconfirmed.

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
    dayFromActivation: 95,
    month: 'Jul 2026',
  },
  {
    handle: 'The Austin Area Agent',
    segment: 'Independent Agent',
    result: 'Site health reached 100% — 460 technical issues auto-resolved without touching a line of code, building a clean foundation for search authority',
    engine: 'OTTO SEO',
    dayFromActivation: 70,
    month: 'Jul 2026',
  },
  {
    handle: 'The New Braunfels Agent',
    segment: 'Independent Agent',
    result: 'Search impressions jumped from 290 to 2,590 in a single month — 178 keywords now tracking across the New Braunfels area',
    engine: 'Google Search',
    dayFromActivation: 65,
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
