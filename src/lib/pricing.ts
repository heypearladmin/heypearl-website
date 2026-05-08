export type PricingTier = {
  id: string;
  family: 'GEO' | 'HEYLOCAL';
  name: string;
  position: 'Foundation' | 'Growth' | 'Authority';
  price: number;
  cadence: 'mo';
  positioning: string;
  description: string;
  features: string[];
  highlight?: boolean;
};

export const geoTiers: PricingTier[] = [
  {
    id: 'geo-core',
    family: 'GEO',
    name: 'GEO Core',
    position: 'Foundation',
    price: 1500,
    cadence: 'mo',
    positioning: 'Authority foundation',
    description:
      'The foundation layer of AI visibility. Structured signals, base authority pages, and the architecture AI needs to understand who you are.',
    features: [
      'GEO audit and authority strategy',
      'Structured data and schema layer',
      'Foundational authority pages',
      'Monthly editorial content cadence',
      'Reputation signal monitoring',
      'Quarterly visibility review',
    ],
  },
  {
    id: 'geo-growth',
    family: 'GEO',
    name: 'GEO Growth',
    position: 'Growth',
    price: 2500,
    cadence: 'mo',
    positioning: 'Visibility infrastructure',
    description:
      'Expanded authority infrastructure built to grow visibility across AI search and traditional discovery. Designed for businesses that are scaling.',
    features: [
      'Everything in GEO Core',
      'Expanded editorial and content engine',
      'Topic cluster and entity expansion',
      'Citation and reputation orchestration',
      'PearlOS lead workflows included',
      'Monthly authority strategy session',
    ],
    highlight: true,
  },
  {
    id: 'geo-authority-ai',
    family: 'GEO',
    name: 'GEO Authority AI',
    position: 'Authority',
    price: 3500,
    cadence: 'mo',
    positioning: 'Category-leading AI visibility',
    description:
      'The full AI-era authority infrastructure. Built for operators who intend to be the answer AI gives in their category.',
    features: [
      'Everything in GEO Growth',
      'Category authority architecture',
      'High-cadence content and visibility ops',
      'Advanced PearlOS automation suite',
      'AI response and inbox systems',
      'Founder-level strategic oversight',
    ],
  },
];

export const heyLocalTiers: PricingTier[] = [
  {
    id: 'heylocal-presence',
    family: 'HEYLOCAL',
    name: 'HeyLocal Presence',
    position: 'Foundation',
    price: 1000,
    cadence: 'mo',
    positioning: 'Local visibility infrastructure',
    description:
      'A clean, structured local presence built to be found and trusted across maps, search, and AI summaries.',
    features: [
      'Local authority audit',
      'Profile and citation cleanup',
      'Foundational review system',
      'Local schema and structured data',
      'Monthly visibility report',
    ],
  },
  {
    id: 'heylocal-growth',
    family: 'HEYLOCAL',
    name: 'HeyLocal Growth',
    position: 'Growth',
    price: 1500,
    cadence: 'mo',
    positioning: 'Local growth platform',
    description:
      'A growth-ready local infrastructure. Reputation, content, and AI signals built to compound month after month.',
    features: [
      'Everything in HeyLocal Presence',
      'Localized editorial content cadence',
      'Active review acquisition system',
      'Citation and directory expansion',
      'Local automation workflows',
      'Quarterly strategy session',
    ],
    highlight: true,
  },
  {
    id: 'heylocal-authority-ai',
    family: 'HEYLOCAL',
    name: 'HeyLocal Authority AI',
    position: 'Authority',
    price: 2500,
    cadence: 'mo',
    positioning: 'AI-era local dominance',
    description:
      'The complete local authority system. Designed for businesses that want to be the trusted local name AI surfaces first.',
    features: [
      'Everything in HeyLocal Growth',
      'AI Overviews and answer engine targeting',
      'Local entity and authority architecture',
      'PearlOS lead and booking automation',
      'AI response and follow-up systems',
      'Monthly authority and ops review',
    ],
  },
];

export const allTiers = [...geoTiers, ...heyLocalTiers];
