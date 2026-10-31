import { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/site-config';
import { packagesData, destinationsData } from '@/lib/constants';

export default function sitemap(): MetadataRoute.Sitemap {
  // SEO:
  // The sitemap provides search engines with a complete list of crawlable
  // public URLs, helping ensure all pages are indexed efficiently.
  const baseUrl = siteConfig.url;

  const staticPages = [
    '',
    '/packages',
    '/about',
    '/gallery',
    '/blog',
    '/contact',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  const packagePages = packagesData.map((pkg) => ({
    url: `${baseUrl}/packages/${pkg.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  const destinationPages = destinationsData.map((dest) => ({
    url: `${baseUrl}/destinations/${dest.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticPages, ...packagePages, ...destinationPages];
}
