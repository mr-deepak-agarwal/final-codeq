import type { Metadata, Viewport } from 'next';
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
    'codeq is a boutique web development studio. We design and engineer pixel-perfect web experiences, AI-powered tools, and full-stack systems that businesses are proud to ship.',
  keywords: [
    'web development',
    'Next.js',
    'React',
    'TypeScript',
    'AI applications',
    'full-stack',
    'boutique dev studio',
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
      'A boutique dev studio where the Q stands for Quality. We build web experiences, AI tools, and full-stack systems that businesses are proud to ship.',
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
      'A boutique dev studio where the Q stands for Quality.',
    images: ['/og-image.png'],
    creator: '@codeqtech',
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
        {children}
      </body>
    </html>
  );
}
