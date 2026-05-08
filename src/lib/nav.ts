export type NavItem = {
  label: string;
  href: string;
  description?: string;
  children?: NavItem[];
};

export const primaryNav: NavItem[] = [
  {
    label: 'Services',
    href: '/services',
    children: [
      {
        label: 'GEO Authority System',
        href: '/services/geo',
        description: 'Generative Engine Optimization for AI search visibility.',
      },
      {
        label: 'HeyLocal',
        href: '/services/heylocal',
        description: 'Local authority and AI discoverability for place-based businesses.',
      },
      {
        label: 'Authority Websites',
        href: '/services/authority-websites',
        description: 'Editorial, AI-friendly websites built for trust and discovery.',
      },
    ],
  },
  { label: 'Pricing', href: '/pricing' },
  { label: 'About', href: '/about' },
  { label: 'Insights', href: '/insights' },
  { label: 'Contact', href: '/contact' },
];

export const footerNav = {
  platform: [
    { label: 'GEO Authority System', href: '/services/geo' },
    { label: 'HeyLocal', href: '/services/heylocal' },
    { label: 'Authority Websites', href: '/services/authority-websites' },
    { label: 'Pricing', href: '/pricing' },
  ],
  company: [
    { label: 'About', href: '/about' },
    { label: 'Insights', href: '/insights' },
    { label: 'Contact', href: '/contact' },
    { label: 'Strategy Call', href: '/contact#strategy' },
  ],
  legal: [
    { label: 'Privacy', href: '/privacy' },
    { label: 'Terms', href: '/terms' },
  ],
};
