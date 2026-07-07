import { useEffect } from 'react';

type SEOProps = {
  title: string;
  description: string;
  path?: string;
  schema?: object | object[];
  ogImage?: string;
};

const BASE = 'https://rankflowagency.online';

function setMeta(name: string, content: string, attr: 'name' | 'property' = 'name') {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${name}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setLink(rel: string, href: string) {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

function setJsonLd(id: string, data: object | object[]) {
  let el = document.getElementById(id) as HTMLScriptElement | null;
  if (!el) {
    el = document.createElement('script');
    el.id = id;
    el.type = 'application/ld+json';
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(data);
}

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Rank Flow Digital',
  url: BASE,
  email: 'info@rankflowagency.online',
  description:
    'Premium SEO & digital marketing agency helping local businesses, startups, SaaS, e-commerce, law firms, dentists, and real estate rank higher and grow revenue.',
  sameAs: [
    'https://www.facebook.com/profile.php?id=61591547398435',
    'https://www.instagram.com/rankflowdigitalhubs/',
    'https://www.fiverr.com/s/kL9AD5w',
    BASE,
  ],
};

export function SEO({ title, description, path = '/', schema, ogImage }: SEOProps) {
  useEffect(() => {
    const full = `${title} | Rank Flow Digital`;
    document.title = full;
    setMeta('description', description);
    const canonical = `${BASE}${path === '/' ? '/' : path}`;
    setLink('canonical', canonical);
    setMeta('og:title', full, 'property');
    setMeta('og:description', description, 'property');
    setMeta('og:url', canonical, 'property');
    setMeta('og:image', ogImage || `${BASE}/og-image.jpg`, 'property');
    setMeta('twitter:title', full);
    setMeta('twitter:description', description);
    setMeta('twitter:image', ogImage || `${BASE}/og-image.jpg`);
    setJsonLd('ld-organization', organizationSchema);
    if (schema) setJsonLd('ld-page', schema);
  }, [title, description, path, schema, ogImage]);

  return null;
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${BASE}${item.path === '/' ? '/' : item.path}`,
    })),
  };
}

export function articleSchema(post: { title: string; excerpt: string; date: string; img: string; category: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    articleSection: post.category,
    image: post.img,
    author: { '@type': 'Organization', name: 'Rank Flow Digital' },
    publisher: { '@type': 'Organization', name: 'Rank Flow Digital' },
  };
}

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Rank Flow Digital',
  url: BASE,
  email: 'info@rankflowagency.online',
  image: `${BASE}/og-image.jpg`,
  priceRange: '$$',
  areaServed: 'Worldwide',
  description:
    'Premium SEO & digital marketing agency offering SEO, local SEO, technical SEO, guest posting, content writing, web design, logo design, and monthly SEO management.',
};
