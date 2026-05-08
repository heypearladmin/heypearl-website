export type Service = {
  slug: string;
  number: string;
  name: string;
  shortName: string;
  href: string;
  tagline: string;
  description: string;
  bullets: string[];
};

export const services: Service[] = [
  {
    slug: 'geo',
    number: '01',
    name: 'GEO Authority System',
    shortName: 'GEO',
    href: '/services/geo',
    tagline: 'Generative Engine Optimization',
    description:
      'A structured authority system that makes your business visible, citable, and trusted across AI search, AI Overviews, and the next generation of discovery tools.',
    bullets: [
      'AI discoverability and citation infrastructure',
      'Local and category authority signals',
      'Structured data and entity architecture',
      'AI-ready site architecture and schema',
      'Visibility systems built for compounding growth',
    ],
  },
  {
    slug: 'content',
    number: '02',
    name: 'Content Infrastructure',
    shortName: 'Content',
    href: '/services/geo#content',
    tagline: 'Editorial systems that compound',
    description:
      'A content engine engineered for authority, not noise. Articles, newsletters, and lifestyle content that feed both human readers and AI models that cite you.',
    bullets: [
      'Editorial blog and pillar content',
      'Newsletter systems and audience flywheels',
      'Lifestyle and brand-led social content',
      'Authority positioning frameworks',
      'Topic clusters mapped to AI demand',
    ],
  },
  {
    slug: 'reputation',
    number: '03',
    name: 'Reputation Systems',
    shortName: 'Reputation',
    href: '/services/heylocal#reputation',
    tagline: 'Trust signals that AI listens to',
    description:
      'Reviews, citations, and trust signals built into a structured reputation system. The signals AI uses to decide who is worth recommending.',
    bullets: [
      'Review acquisition and orchestration',
      'Local citations and directory authority',
      'Trust and reputation graphs',
      'Sentiment monitoring and response',
      'Multi-platform reputation infrastructure',
    ],
  },
  {
    slug: 'automation',
    number: '04',
    name: 'Automation & PearlOS',
    shortName: 'Automation',
    href: '/services/geo#automation',
    tagline: 'The backend engine',
    description:
      'PearlOS is the operational layer underneath HeyPearl. CRM, lead nurture, AI response, and booking workflows that turn visibility into closed business.',
    bullets: [
      'CRM workflows and pipeline design',
      'Lead nurture and follow-up sequences',
      'AI response and inbox systems',
      'Booking and scheduling workflows',
      'Operational dashboards and reporting',
    ],
  },
  {
    slug: 'authority-websites',
    number: '05',
    name: 'Authority Websites',
    shortName: 'Websites',
    href: '/services/authority-websites',
    tagline: 'Editorial, AI-friendly websites',
    description:
      'Cinematic, editorial websites engineered to be cited, indexed, and surfaced by AI. Built on architectures that prioritize clarity, trust, and discovery.',
    bullets: [
      'Editorial design language',
      'Authority page architecture',
      'AI-friendly schema and structure',
      'Speed, accessibility, and clarity',
      'Conversion infrastructure built in',
    ],
  },
];

export const howItWorks = [
  {
    step: 'Step 01',
    title: 'Discovery & Strategy',
    description:
      'We map your category, audience, AI visibility gaps, and the authority signals you already own. Then we design the system you need next.',
  },
  {
    step: 'Step 02',
    title: 'Infrastructure Setup',
    description:
      'Schema, content architecture, reputation systems, and PearlOS workflows are installed. The foundation that everything else compounds on.',
  },
  {
    step: 'Step 03',
    title: 'Authority Expansion',
    description:
      'Editorial content, citations, and structured authority pages start filling the index. Your business becomes findable, citable, and trusted.',
  },
  {
    step: 'Step 04',
    title: 'AI Visibility Growth',
    description:
      'AI Overviews, ChatGPT, Gemini, and Perplexity start surfacing you. We measure, refine, and keep compounding your visibility month over month.',
  },
];

export const whyHeyPearl = {
  agencies: [
    'Random tactics with no architecture',
    'Vanity metrics and screenshot dashboards',
    'Outdated SEO playbooks built for 2018',
    'Disconnected campaigns instead of systems',
    'No view of how AI actually surfaces businesses',
  ],
  heypearl: [
    'Authority ecosystems built as infrastructure',
    'Structured for AI discovery from day one',
    'Operations, visibility, and automation as one',
    'Long term digital dominance, not short bursts',
    'A founder-led standard at every layer',
  ],
};
