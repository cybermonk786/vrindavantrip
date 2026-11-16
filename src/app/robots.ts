// app/robots.ts
import type { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/site-config';

// Force Next.js to pre-render robots.txt as a static asset at build time
export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = (siteConfig.url || 'https://www.vrindavantrip.com').replace(/\/+$/, '');

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}