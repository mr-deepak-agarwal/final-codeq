import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import ContactModal from '@/components/ui/ContactModal';
import CookieBanner from '@/components/ui/CookieBanner';
import { Cormorant_Garamond, Syne, DM_Mono } from 'next/font/google';
import './globals.css';

/* ── Fonts ── */
const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '600'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
});

const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-sans',
  display: 'swap',
});

const dmMono = DM_Mono({
  subsets: ['latin'],
  weight: ['300', '400'],
  variable: '--font-mono',
  display: 'swap',
});

const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? 'G-CNBKER80ZF';

/* ── SEO Metadata ── */
export const metadata: Metadata = {
  metadataBase: new URL('https://codeq.tech'),
  title: {
    default: 'codeq — Quality in Every Line',
    template: '%s | codeq',
  },
  description:
    'codeq is a senior engineering studio. We design and build pixel-perfect web experiences, AI-powered tools, and full-stack systems for businesses worldwide — direct access to the engineers building your product, no junior layers.',
  keywords: [
    'web development agency',
    'Next.js development',
    'React developers',
    'TypeScript',
    'AI application development',
    'full-stack development',
    'senior development team',
    'custom software development',
    'SaaS development agency',
    'codeq',
  ],
  authors: [{ name: 'codeq', url: 'https://codeq.tech' }],
  creator: 'codeq',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://codeq.tech',
    siteName: 'codeq',
    title: 'codeq — Quality in Every Line',
    description:
      'Senior engineering, delivered directly. We build web experiences, AI tools, and full-stack systems that businesses are proud to ship — for clients worldwide.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'codeq — Quality in Every Line',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@codeqtech',          // ← add your actual handle here
    title: 'codeq — Quality in Every Line',
    description: 'Senior engineering, delivered directly. The Q stands for Quality.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#07070A',
};

/* ── JSON-LD ── */
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    /* ── Organisation / ProfessionalService ── */
    {
      '@type': ['ProfessionalService', 'Organization'],
      '@id': 'https://codeq.tech/#organization',
      name: 'codeq',
      alternateName: 'codeq.tech',
      url: 'https://codeq.tech',
      logo: {
        '@type': 'ImageObject',
        url: 'https://codeq.tech/og-image.png',
        width: 1200,
        height: 630,
      },
      image: 'https://codeq.tech/og-image.png',
      description:
        'codeq is a senior engineering studio building pixel-perfect web experiences, AI-powered tools, and full-stack systems for businesses worldwide.',
      email: 'hello@codeq.tech',
      foundingDate: '2016',
      areaServed: 'Worldwide',
      slogan: 'Quality in Every Line',
      knowsAbout: [
        'Web Design',
        'Web Development',
        'Next.js',
        'React',
        'TypeScript',
        'AI Application Development',
        'Full-Stack Development',
        'SEO',
        'SaaS Development',
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'codeq Services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Web Design & Development',
              description:
                'Pixel-perfect, performance-first websites built in Next.js — from marketing sites to complex SaaS dashboards.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'SEO & Growth Marketing',
              description:
                'Technical audits, full-funnel ad campaigns, and measurable organic growth with no vanity metrics.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'AI-Powered Applications',
              description:
                'Custom LLM integrations, document processors, and ML pipelines that deliver production-grade ROI.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Full-Stack Systems',
              description:
                'Robust APIs, admin portals, ERP systems, and CRM tools architected for scale and maintained for years.',
            },
          },
        ],
      },
      sameAs: ['https://www.linkedin.com/in/deepak-agarwal-08369876/'],
      founder: {
        '@type': 'Person',
        '@id': 'https://codeq.tech/#founder',
        name: 'Deepak Agarwal',
        jobTitle: 'Founder & Lead Engineer',
        description:
          'Engineer and founder with 8+ years building web and mobile products. Former CTO of a legal-tech startup.',
        sameAs: 'https://www.linkedin.com/in/deepak-agarwal-08369876/',
      },
    },
    /* ── WebSite (enables Sitelinks Searchbox eligibility) ── */
    {
      '@type': 'WebSite',
      '@id': 'https://codeq.tech/#website',
      url: 'https://codeq.tech',
      name: 'codeq',
      publisher: { '@id': 'https://codeq.tech/#organization' },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${syne.variable} ${dmMono.variable}`}
    >
      <body className="font-sans bg-dark text-cream overflow-x-hidden antialiased">
        {/* Hide loader for crawlers/bots that don't run JS */}
        <noscript>
          <style>{`#loader { display: none !important; } .rv,.rvl { opacity: 1 !important; transform: none !important; }`}</style>
        </noscript>

        {/*
          ── GA4 Consent Mode v2 ──────────────────────────────────────
          1. Pre-initialise dataLayer + set consent DEFAULT to 'denied'
             BEFORE the GA4 script loads — this is what Consent Mode v2
             requires. GA4 will still load (for modelling) but will not
             write analytics cookies until consent is 'granted'.
          2. The CookieBanner component calls gtag('consent','update',…)
             when the user accepts/declines.
        */}
        <Script id="ga4-consent-default" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('consent', 'default', {
              analytics_storage: 'denied',
              ad_storage:        'denied',
              wait_for_update:   500,
            });
            /* Restore consent immediately if already given (no flicker) */
            var _c = localStorage.getItem('codeq_cookie_consent');
            if (_c === 'granted') {
              gtag('consent', 'update', { analytics_storage: 'granted', ad_storage: 'granted' });
            }
          `}
        </Script>

        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}', { send_page_view: true });
          `}
        </Script>

        {/* Improved JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {children}
        <ContactModal />
        <CookieBanner />
      </body>
    </html>
  );
}