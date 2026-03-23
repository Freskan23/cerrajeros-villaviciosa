import { SITE_URL } from '@data/business';

export function getCanonicalUrl(path: string): string {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${SITE_URL}${cleanPath}`;
}

export function getOgImageUrl(imagePath: string): string {
  if (imagePath.startsWith('http')) return imagePath;
  return `${SITE_URL}${imagePath.startsWith('/') ? '' : '/'}${imagePath}`;
}

export interface SEOProps {
  title: string;
  description: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
  keywords?: string;
  noindex?: boolean;
}

export function buildTitle(pageTitle: string, suffix = 'Cerrajeros Villaviciosa 24h'): string {
  return `${pageTitle} | ${suffix}`;
}
