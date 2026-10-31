import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import OrganizationSchema from '@/components/seo/OrganizationSchema';
import { siteConfig } from '@/lib/site-config';

export const metadata: Metadata = {
  // SEO:
  // The title identifies the primary topic of this page.
  // Search engines use it as the main title in search results.
  title: 'Vrindavan Trip | Mathura, Vrindavan & Gokul Tour Packages',
  
  // SEO:
  // The description provides a concise summary of the page for search snippets.
  description: siteConfig.description,
  
  // SEO:
  // Canonical URL identifies the preferred version of the page.
  alternates: {
    canonical: '/',
  },
  
  // SEO:
  // Open Graph metadata enhances social media sharing appearance.
  openGraph: {
    title: 'Vrindavan Trip | Mathura, Vrindavan & Gokul Tour Packages',
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: 'en_IN',
    type: 'website',
  },
  
  // SEO:
  // Twitter Card metadata for rich Twitter/X previews.
  twitter: {
    card: 'summary_large_image',
    title: 'Vrindavan Trip | Mathura, Vrindavan & Gokul Tour Packages',
    description: siteConfig.description,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
   <html lang="en" data-scroll-behavior="smooth">
      <head>
        <OrganizationSchema />
      </head>
      <body className="min-h-screen flex flex-col bg-white text-textDark">
        <Header />
        <main className="grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
