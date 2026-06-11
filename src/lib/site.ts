export const site = {
  name: 'Hey Pearl',
  domain: 'heypearl.io',
  legalName: 'Hey Pearl Agency LLC',
  tagline: 'Software with a soul.',
  description:
    'Authority infrastructure for the AI search era. Hey Pearl operationalizes the P.E.A.R.L. framework — Process, Efficiency, Automation, Revenue, Leverage — for modern businesses.',
  url: 'https://heypearl.io',
  ogImage: '/images/og-default.jpg',
  // Misti's Calendly for founder-led strategy calls
  strategyCallUrl: 'https://calendly.com/hey-pearl/meet',
  contact: {
    phone: '+1 830 402 4045',
    phoneDisplay: '(830) 402-4045',
    email: 'support@heypearl.io',
    address: {
      line1: '1606 Headway Cir',
      city: 'Austin',
      region: 'TX',
      postal: '78754',
      country: 'USA',
      display: '1606 Headway Cir, Austin TX 78754',
    },
  },
  social: {
    facebook: 'https://facebook.com/heypearlagency',
    instagram: 'https://instagram.com/heypearl.io',
    youtube: 'https://youtube.com/@HeyPearl.Agency',
  },
  founder: {
    name: 'Misti Bruton',
    role: 'Founder & CEO',
    site: 'https://www.mistibruton.com/',
    facebook: 'https://facebook.com/mistibrutonceo',
    instagram: 'https://instagram.com/themistibruton',
    youtube: 'https://youtube.com/@themistibruton',
    photo: '/images/misti-headshot.jpg',
  },
} as const;

export type SiteConfig = typeof site;
