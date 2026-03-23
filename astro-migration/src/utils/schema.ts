import {
  SITE_URL, APP_BUSINESS_NAME, APP_BUSINESS_LEGAL_NAME,
  APP_PHONE, APP_EMAIL, APP_ADDRESS, APP_POSTAL_CODE,
  APP_LOCALITY, APP_REGION, APP_COUNTRY,
  APP_GEO_LAT, APP_GEO_LNG, APP_LOGO,
  SERVICES, ZONES
} from '../data/business';

export function buildLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Locksmith',
    '@id': `${SITE_URL}/#organization`,
    name: APP_BUSINESS_NAME,
    legalName: APP_BUSINESS_LEGAL_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}${APP_LOGO}`,
    image: `${SITE_URL}/hero-cerrajero.webp`,
    description: 'Cerrajeros profesionales en Villaviciosa del Odón disponibles 24/7. Apertura de puertas desde 90€, cambio de cerraduras, bombines antibumping y amaestramiento.',
    telephone: APP_PHONE,
    email: APP_EMAIL,
    priceRange: '€€',
    currenciesAccepted: 'EUR',
    paymentAccepted: 'Cash, Credit Card, Debit Card',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '97',
      bestRating: '5',
      worstRating: '1',
    },
    review: [
      {
        '@type': 'Review',
        author: { '@type': 'Person', name: 'María G.' },
        datePublished: '2026-03-10',
        reviewBody: 'Excelente servicio. Llegaron en 15 minutos a Centro y abrieron sin romper nada.',
        reviewRating: { '@type': 'Rating', ratingValue: '5' },
      },
      {
        '@type': 'Review',
        author: { '@type': 'Person', name: 'Carlos M.' },
        datePublished: '2026-03-08',
        reviewBody: 'Instalaron bombín antibumping de alta gama en El Bosque. Muy profesionales.',
        reviewRating: { '@type': 'Rating', ratingValue: '5' },
      },
      {
        '@type': 'Review',
        author: { '@type': 'Person', name: 'Elena R.' },
        datePublished: '2026-03-05',
        reviewBody: 'Servicio de urgencias a las 3am. Llegaron en 20 minutos. Totalmente recomendable.',
        reviewRating: { '@type': 'Rating', ratingValue: '5' },
      },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Servicios de Cerrajería',
      itemListElement: SERVICES.map(s => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: s.name,
          url: `${SITE_URL}/servicios/${s.slug}`,
        },
      })),
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: APP_ADDRESS,
      addressLocality: APP_LOCALITY,
      addressRegion: APP_REGION,
      postalCode: APP_POSTAL_CODE,
      addressCountry: APP_COUNTRY,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: APP_GEO_LAT,
      longitude: APP_GEO_LNG,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59',
    },
    areaServed: [
      { '@type': 'City', name: 'Villaviciosa del Odón' },
      ...ZONES.filter(z => z.type === 'barrio').map(z => ({ '@type': 'Place', name: z.name })),
      ...ZONES.filter(z => z.type === 'municipio').map(z => ({ '@type': 'City', name: z.name })),
    ],
    sameAs: [
      'https://www.facebook.com/cerrajeriavillaviciosa24h',
      'https://www.instagram.com/cerrajeriavillaviciosa24h',
    ],
  };
}

export function buildWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: APP_BUSINESS_NAME,
    url: SITE_URL,
    potentialAction: {
      '@type': 'SearchAction',
      target: { '@type': 'EntryPoint', urlTemplate: `${SITE_URL}/?s={search_term_string}` },
      'query-input': 'required name=search_term_string',
    },
  };
}

export function buildServiceSchema(service: { name: string; slug: string; description: string; price?: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${SITE_URL}/servicios/${service.slug}/#service`,
    name: service.name,
    description: service.description,
    url: `${SITE_URL}/servicios/${service.slug}`,
    provider: { '@id': `${SITE_URL}/#organization` },
    areaServed: { '@type': 'City', name: APP_LOCALITY },
  };
}

export function buildFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };
}

export function buildBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${SITE_URL}${item.url}`,
    })),
  };
}

export function buildArticleSchema(article: { title: string; slug: string; date: string; image: string; description: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    image: `${SITE_URL}${article.image}`,
    datePublished: article.date,
    dateModified: article.date,
    author: { '@type': 'Organization', name: 'Cerrajería Villaviciosa 24h', url: SITE_URL },
    publisher: {
      '@type': 'Organization',
      name: 'Cerrajería Villaviciosa 24h',
      logo: { '@type': 'ImageObject', url: `${SITE_URL}${APP_LOGO}` },
    },
    description: article.description,
  };
}
