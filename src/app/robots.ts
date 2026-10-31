import { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/site-config';

export default function robots(): MetadataRoute.Robots {
  // SEO:
  // The robots.ts file instructs search engine crawlers which URLs
  // they can access. We allow public pages and reference our sitemap.
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/admin/'],
    },
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
