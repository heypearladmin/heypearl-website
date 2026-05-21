import { site } from '@/lib/site';

type SchemaObject = Record<string, unknown>;

function withContext(schema: SchemaObject): SchemaObject {
  return { '@context': 'https://schema.org', ...schema };
}

export function organizationSchema(): SchemaObject {
  return withContext({
    '@type': 'Organization',
    '@id': `${site.url}/#organization`,
    name: site.name,
    legalName: site.legalName,
    url: site.url,
    logo: {
      '@type': 'ImageObject',
      url: `${site.url}/images/heypearl-logo-dark.png`,
      width: 200,
      height: 50,
    },
    description: site.description,
    telephone: site.contact.phone,
    email: site.contact.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: site.contact.address.line1,
      addressLocality: site.contact.address.city,
      addressRegion: site.contact.address.region,
      postalCode: site.contact.address.postal,
      addressCountry: site.contact.address.country,
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: site.contact.phone,
      email: site.contact.email,
      contactType: 'customer service',
      availableLanguage: 'English',
    },
    founder: {
      '@type': 'Person',
      '@id': `${site.url}/#founder`,
      name: site.founder.name,
      url: site.founder.site,
      jobTitle: site.founder.role,
    },
    sameAs: [
      site.social.facebook,
      site.social.instagram,
      site.social.youtube,
      site.founder.site,
      site.founder.facebook,
      site.founder.instagram,
      site.founder.youtube,
    ],
  });
}

export function webSiteSchema(): SchemaObject {
  return withContext({
    '@type': 'WebSite',
    '@id': `${site.url}/#website`,
    url: site.url,
    name: site.name,
    description: site.description,
    inLanguage: 'en-US',
    publisher: { '@id': `${site.url}/#organization` },
  });
}

export function localBusinessSchema(): SchemaObject {
  return withContext({
    '@type': ['LocalBusiness', 'ProfessionalService'],
    '@id': `${site.url}/#localbusiness`,
    name: site.name,
    url: site.url,
    telephone: site.contact.phone,
    email: site.contact.email,
    description: site.description,
    priceRange: '$$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: site.contact.address.line1,
      addressLocality: site.contact.address.city,
      addressRegion: site.contact.address.region,
      postalCode: site.contact.address.postal,
      addressCountry: site.contact.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      addressCountry: 'US',
    },
    areaServed: [
      { '@type': 'State', name: 'Texas' },
      { '@type': 'Country', name: 'United States' },
    ],
    openingHours: 'Mo-Fr 09:00-17:00',
    sameAs: [site.social.facebook, site.social.instagram, site.social.youtube],
  });
}

export function personSchema(): SchemaObject {
  return withContext({
    '@type': 'Person',
    '@id': `${site.url}/#founder`,
    name: site.founder.name,
    url: site.founder.site,
    jobTitle: site.founder.role,
    description:
      'Founder & CEO of HeyPearl. Operator, strategist, and pioneer of the P.E.A.R.L. framework for authority infrastructure in the AI search era.',
    worksFor: { '@id': `${site.url}/#organization` },
    image: {
      '@type': 'ImageObject',
      url: `${site.url}${site.founder.photo}`,
      caption: `${site.founder.name}, ${site.founder.role} at ${site.name}`,
    },
    sameAs: [
      site.founder.site,
      site.founder.facebook,
      site.founder.instagram,
      site.founder.youtube,
    ],
  });
}

export function serviceSchema(params: {
  name: string;
  url: string;
  description: string;
  category?: string;
}): SchemaObject {
  return withContext({
    '@type': 'Service',
    '@id': `${params.url}#service`,
    name: params.name,
    url: params.url,
    description: params.description,
    serviceType: params.category ?? 'Digital Marketing',
    provider: { '@id': `${site.url}/#organization` },
    areaServed: { '@type': 'Country', name: 'United States' },
    inLanguage: 'en-US',
  });
}

export function breadcrumbSchema(
  items: { name: string; url: string }[]
): SchemaObject {
  return withContext({
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  });
}

export function faqSchema(
  items: { question: string; answer: string }[]
): SchemaObject {
  return withContext({
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  });
}

export function articleSchema(params: {
  title: string;
  description: string;
  url: string;
  image?: string;
  datePublished?: string;
  dateModified?: string;
  authorName?: string;
}): SchemaObject {
  return withContext({
    '@type': 'Article',
    headline: params.title,
    description: params.description,
    url: params.url,
    ...(params.image ? { image: `${site.url}${params.image}` } : {}),
    ...(params.datePublished ? { datePublished: params.datePublished } : {}),
    dateModified: params.dateModified ?? params.datePublished,
    author: {
      '@type': 'Person',
      '@id': `${site.url}/#founder`,
      name: params.authorName ?? site.founder.name,
    },
    publisher: { '@id': `${site.url}/#organization` },
    mainEntityOfPage: { '@type': 'WebPage', '@id': params.url },
  });
}

export function blogPostingSchema(params: {
  title: string;
  description: string;
  url: string;
  image?: string;
  datePublished: string;
  dateModified?: string;
  keywords?: string[];
}): SchemaObject {
  return withContext({
    '@type': 'BlogPosting',
    headline: params.title,
    description: params.description,
    url: params.url,
    ...(params.image ? { image: `${site.url}${params.image}` } : {}),
    datePublished: params.datePublished,
    dateModified: params.dateModified ?? params.datePublished,
    ...(params.keywords ? { keywords: params.keywords.join(', ') } : {}),
    author: { '@id': `${site.url}/#founder` },
    publisher: { '@id': `${site.url}/#organization` },
    mainEntityOfPage: { '@type': 'WebPage', '@id': params.url },
  });
}
