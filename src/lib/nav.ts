export type NavItem = {
  label: string;
  href: string;
  description?: string;
  children?: NavItem[];
};

export const primaryNav: NavItem[] = [
  {
    label: 'Platform',
    href: '/platform',
    children: [
      {
        label: 'PearlOS',
        href: '/platform/pearlos',
        description: 'The operating layer that runs your entire AI authority system.',
      },
      {
        label: 'Authority Pages',
        href: '/platform/authority-pages',
        description: 'AI-ready page architecture built for citation and recommendation.',
      },
      {
        label: 'Authority Score',
        href: '/platform/authority-score',
        description: 'Measure and track your AI visibility across every major engine.',
      },
      {
        label: 'Knowledge Graph',
        href: '/platform/knowledge-graph',
        description: 'Entity architecture that tells AI engines exactly who you are.',
      },
      {
        label: 'AI Visibility',
        href: '/platform/ai-visibility',
        description: 'Real-time monitoring of how AI engines represent your business.',
      },
      {
        label: 'GEO Engine',
        href: '/platform/geo-engine',
        description: 'Generative Engine Optimization tools built for the AI era.',
      },
    ],
  },
  {
    label: 'Solutions',
    href: '/solutions',
    children: [
      {
        label: 'Real Estate',
        href: '/solutions/real-estate',
        description: 'Authority infrastructure for agents, brokers, and property groups.',
      },
      {
        label: 'Service Businesses',
        href: '/solutions/service-businesses',
        description: 'AI visibility for local and regional service providers.',
      },
      {
        label: 'Teams',
        href: '/solutions/teams',
        description: 'Collaborative authority building for multi-person teams.',
      },
      {
        label: 'Brokerages',
        href: '/solutions/brokerages',
        description: 'Enterprise-grade AI authority for brokerage networks.',
      },
      {
        label: 'Enterprise',
        href: '/solutions/enterprise',
        description: 'Custom authority infrastructure at organizational scale.',
      },
    ],
  },
  {
    label: 'Results',
    href: '/results',
  },
  {
    label: 'Resources',
    href: '/resources',
    children: [
      {
        label: 'AI Authority',
        href: '/resources/ai-authority',
        description: 'Deep guides on AI visibility, GEO, and authority infrastructure.',
      },
      {
        label: 'Guides',
        href: '/resources/guides',
        description: 'Step-by-step tactical guides for building AI authority.',
      },
      {
        label: 'Knowledge Base',
        href: '/resources/knowledge-base',
        description: 'Reference documentation for the HeyPearl platform.',
      },
      {
        label: 'Blog',
        href: '/resources/blog',
        description: 'News, updates, and commentary on AI search.',
      },
      {
        label: 'FAQ',
        href: '/faq',
        description: 'Answers to the most common questions about AI authority.',
      },
      {
        label: 'Glossary',
        href: '/resources/glossary',
        description: 'Definitions for every term in the AI authority ecosystem.',
      },
    ],
  },
  { label: 'Pricing', href: '/pricing' },
  {
    label: 'Company',
    href: '/about',
    children: [
      {
        label: 'About HeyPearl',
        href: '/about',
        description: 'The company defining AI Authority Infrastructure.',
      },
      {
        label: 'Founder',
        href: '/about/founder',
        description: 'Misti Bruton — founder, practitioner, category creator.',
      },
      {
        label: 'Contact',
        href: '/contact',
        description: 'Get in touch or book a strategy call.',
      },
    ],
  },
];

export const footerNav = {
  platform: [
    { label: 'PearlOS',           href: '/platform/pearlos' },
    { label: 'Authority Pages',   href: '/platform/authority-pages' },
    { label: 'Authority Score',   href: '/platform/authority-score' },
    { label: 'Knowledge Graph',   href: '/platform/knowledge-graph' },
    { label: 'AI Visibility',     href: '/platform/ai-visibility' },
    { label: 'GEO Engine',        href: '/platform/geo-engine' },
  ],
  solutions: [
    { label: 'Real Estate',        href: '/solutions/real-estate' },
    { label: 'Service Businesses', href: '/solutions/service-businesses' },
    { label: 'Teams',              href: '/solutions/teams' },
    { label: 'Brokerages',         href: '/solutions/brokerages' },
    { label: 'Enterprise',         href: '/solutions/enterprise' },
  ],
  resources: [
    { label: 'AI Authority', href: '/resources/ai-authority' },
    { label: 'Guides',       href: '/resources/guides' },
    { label: 'FAQ',          href: '/faq' },
    { label: 'Glossary',     href: '/resources/glossary' },
    { label: 'Blog',         href: '/resources/blog' },
  ],
  company: [
    { label: 'About',          href: '/about' },
    { label: 'Founder',        href: '/about/founder' },
    { label: 'Results',        href: '/results' },
    { label: 'Pricing',        href: '/pricing' },
    { label: 'Contact',        href: '/contact' },
    { label: 'Strategy Call',  href: '/contact#strategy' },
  ],
  legal: [
    { label: 'Policies', href: '/policies' },
    { label: 'Privacy',  href: '/privacy' },
    { label: 'Terms',    href: '/terms' },
  ],
};
