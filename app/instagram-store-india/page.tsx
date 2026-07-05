import type { Metadata } from 'next';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/sections/Footer';
import StoreHeroArt from '@/components/marketing/StoreHeroArt';
import MessyInboxArt from '@/components/marketing/MessyInboxArt';
import StorefrontArt from '@/components/marketing/StorefrontArt';
import StartProjectButton from './StartProjectButton';
import s from './store.module.css';

export const metadata: Metadata = {
  title: 'Turn Your Instagram Shop Into a Real Website | codeq',
  description:
    'Affordable websites for Instagram & WhatsApp sellers in India. Catalog, UPI checkout, order tracking, and SEO — built and managed by a real developer, not a templated app.',
  alternates: { canonical: '/instagram-store-india' },
  openGraph: {
    title: 'Instagram Store → Real Website | codeq',
    description: 'Stop losing orders in DMs. A branded website with catalog, payments, and order tracking for Instagram sellers in India.',
    url: 'https://codeq.tech/instagram-store-india',
  },
};

const painPoints = [
  'Orders and prices buried in DM screenshots and notebooks',
  'No way to know what’s in stock without checking manually',
  'Customers ghost after "DM for price" instead of buying instantly',
  'Payment proof sent as screenshots — easy to fake, hard to track',
  'Zero visibility outside your follower list — no Google presence at all',
  'No professional look — buyers hesitate to trust a DM-only seller',
];

const included = [
  'Branded, mobile-first website with your product catalog',
  'UPI / Razorpay checkout — no more manual payment screenshots',
  'Simple admin dashboard to add products, track orders & stock',
  'WhatsApp order confirmations sent automatically',
  'Google-searchable pages — not just dependent on Instagram reach',
  'Your own domain (yourshop.com) instead of a generic app link',
];

const tiers = [
  {
    name: 'Starter Store',
    price: '₹6,999',
    period: 'one-time',
    tag: 'For sellers just getting off DMs',
    features: [
      'Branded 1-page storefront (up to 30 products)',
      'UPI payment link checkout',
      'WhatsApp click-to-order button',
      'Mobile-optimized design',
      '1 round of revisions',
    ],
  },
  {
    name: 'Growth Store',
    price: '₹14,999',
    period: 'one-time · + ₹999/mo',
    tag: 'For sellers ready to scale orders',
    highlight: true,
    features: [
      'Everything in Starter, unlimited products',
      'Admin dashboard — orders, stock & payments in one place',
      'Automated order & shipping status updates',
      'Basic on-page SEO setup (titles, descriptions, sitemap)',
      'Shipping/courier tracking link integration',
      'Monthly plan covers hosting, updates & support',
    ],
  },
  {
    name: 'Pro Store + SEO',
    price: '₹24,999',
    period: 'one-time · + ₹1,999/mo',
    tag: 'For sellers who want Google traffic too',
    features: [
      'Everything in Growth',
      'Ongoing SEO — ranking for real buyer search terms',
      'Discount codes & promo tools',
      'Sales analytics — best sellers, peak times, repeat buyers',
      'Abandoned cart recovery messages',
      'Priority WhatsApp support',
    ],
  },
];

const process = [
  { num: '01', title: 'Quick Chat', body: 'Send us your Instagram handle and current catalog — we’ll tell you exactly what to fix first, free.' },
  { num: '02', title: 'We Build', body: 'Your store goes live in 5–7 days, using the product photos you already have.' },
  { num: '03', title: 'You Sell', body: 'Share one link in your bio. Orders, payments, and stock are finally in one place.' },
  { num: '04', title: 'We Support', body: 'Ongoing plans keep your site updated, hosted, and growing — no tech headaches for you.' },
];

const faqs = [
  { q: 'I only sell through Instagram DMs right now — do I really need a website?', a: 'Instagram checkout still isn’t available for most sellers in India, so you’re manually handling every order anyway. A website doesn’t replace your Instagram — it becomes the place your followers actually buy from, with payments and stock tracked automatically instead of in your head.' },
  { q: 'I’ve seen free/cheap app-based store builders. Why pay for this instead?', a: 'Those tools work, but you get a templated store on their app, with their branding and a per-order fee forever. We build you an actual branded website you own, plus real SEO so people can find you on Google — not just through your existing followers.' },
  { q: 'What do I need to provide to get started?', a: 'Just your existing product photos, prices, and your Instagram/WhatsApp details. If you don’t have great photos yet, we can advise on quick fixes before launch.' },
  { q: 'Can I upgrade my plan later?', a: 'Yes — most sellers start with Starter or Growth and move up once orders pick up. We’ll only recommend an upgrade when it actually pays for itself.' },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'E-commerce Website Development for Instagram Sellers',
  provider: { '@type': 'Organization', name: 'codeq', url: 'https://codeq.tech' },
  areaServed: 'India',
  url: 'https://codeq.tech/instagram-store-india',
};
const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};

export default function InstagramStoreIndiaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <Navbar />

      <div className={s.page}>
        <div className={s.hero}>
          <div>
            <nav className={s.breadcrumb} aria-label="Breadcrumb">
              <a href="/">Home</a> <span> / </span> <span>Instagram Store India</span>
            </nav>
            <p className={s.eyebrow}>For Indian Instagram &amp; WhatsApp Sellers</p>
            <h1 className={s.h1}>Stop selling<br />from your <em>DMs.</em></h1>
            <p className={s.lede}>
              A real website for your shop — catalog, UPI payments, and order tracking in one place.
              Built for Instagram sellers in India who are ready to look professional and stop losing sales to messy DMs.
            </p>
          </div>
          <div className={s.heroVisual}>
            <StoreHeroArt />
          </div>
        </div>

        <div className={s.heroCtaRow}>
          <StartProjectButton label="Get My Free Store Review" />
          <a href="#pricing" className={s.btnGhost}>See Pricing</a>
        </div>

        <div className={s.section}>
          <div className={s.statRow}>
            <div><div className={s.statVal}>5–7 days</div><div className={s.statKey}>To Go Live</div></div>
            <div><div className={s.statVal}>₹6,999</div><div className={s.statKey}>Starting Price</div></div>
            <div><div className={s.statVal}>UPI + WhatsApp</div><div className={s.statKey}>Built In, Day One</div></div>
          </div>
        </div>

        <div className={s.section}>
          <div className={s.split}>
            <div>
              <p className={s.sectionLabel}>The Problem</p>
              <h2 className={s.h2}>Sound familiar?</h2>
              <ul className={s.list}>
                {painPoints.map((p) => <li key={p}>{p}</li>)}
              </ul>
            </div>
            <div className={s.splitVisual}>
              <MessyInboxArt />
            </div>
          </div>
        </div>

        <div className={s.section}>
          <div className={s.split}>
            <div>
              <p className={s.sectionLabel}>What You Get</p>
              <h2 className={s.h2}>Everything your DMs can&apos;t do.</h2>
              <ul className={s.list}>
                {included.map((i) => <li key={i}>{i}</li>)}
              </ul>
            </div>
            <div className={s.splitVisual}>
              <StorefrontArt />
            </div>
          </div>
        </div>

        <div className={s.section} id="pricing">
          <p className={s.sectionLabel}>Pricing</p>
          <h2 className={s.h2}>Plans built for small sellers, not enterprise budgets.</h2>
          <div className={s.grid3}>
            {tiers.map((t) => (
              <div
                key={t.name}
                className={s.card}
                style={t.highlight
                  ? { borderColor: '#1B4D2F', boxShadow: '0 4px 20px rgba(27,77,47,.08)', position: 'relative' }
                  : { position: 'relative' }}
              >
                {t.highlight && <span className={s.popularBadge}>Most Popular</span>}
                <h3 className={s.cardTitle}>{t.name}</h3>
                <div className={s.statVal} style={{ fontSize: 'clamp(26px,3vw,34px)', marginBottom: 2 }}>{t.price}</div>
                <div className={s.statKey} style={{ marginBottom: 14 }}>{t.period}</div>
                <p className={s.cardBody} style={{ marginBottom: 16, fontStyle: 'italic' }}>{t.tag}</p>
                <ul className={s.list}>
                  {t.features.map((f) => <li key={f}>{f}</li>)}
                </ul>
              </div>
            ))}
          </div>
          <p className={s.priceNote}>
            Prices in INR, one-time build fee plus an optional monthly plan for hosting, updates &amp; support. Custom catalogs of 200+ products or multi-language sites are quoted separately.
          </p>
        </div>

        <div className={s.section}>
          <p className={s.sectionLabel}>How It Works</p>
          <h2 className={s.h2}>From Instagram to online in a week.</h2>
          <div className={s.grid4}>
            {process.map((p) => (
              <div key={p.num}>
                <span className={s.cardNum}>{p.num}</span>
                <h3 className={s.cardTitle}>{p.title}</h3>
                <p className={s.cardBody}>{p.body}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={s.section}>
          <p className={s.sectionLabel}>FAQ</p>
          <h2 className={s.h2}>Common questions.</h2>
          <div className={s.maxw} style={{ margin: 0 }}>
            {faqs.map((f) => (
              <div className={s.faqItem} key={f.q}>
                <p className={s.faqQ}>{f.q}</p>
                <p className={s.faqA}>{f.a}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={s.ctaBand}>
          <h2 className={s.h2}>Ready to get off DMs?</h2>
          <p className={s.lede}>Send your Instagram handle and we&apos;ll tell you exactly what your store needs — no charge for the first look.</p>
          <div className={s.btnRow}>
            <StartProjectButton label="Get My Free Store Review" />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
