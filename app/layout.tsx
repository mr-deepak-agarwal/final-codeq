import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import ContactModal from '@/components/ui/ContactModal';
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
    title: 'codeq — Quality in Every Line',
    description:
      'Senior engineering, delivered directly. The Q stands for Quality.',
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-CNBKER80ZF"
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-CNBKER80ZF');
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'ProfessionalService',
              name: 'codeq',
              url: 'https://codeq.tech',
              image: 'https://codeq.tech/og-image.png',
              description:
                'codeq is a senior engineering studio building web experiences, AI-powered tools, and full-stack systems for businesses worldwide.',
              founder: {
                '@type': 'Person',
                name: 'Deepak Agarwal',
                sameAs: 'https://www.linkedin.com/in/deepak-agarwal-08369876/',
              },
              areaServed: 'Worldwide',
              email: 'hello@codeq.tech',
            }),
          }}
        />
        {children}
        <ContactModal />
      </body>
    </html>
  );
}