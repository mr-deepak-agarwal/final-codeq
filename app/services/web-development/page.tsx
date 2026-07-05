import type { Metadata } from 'next';
import PageShell, { StartProjectButton, styles as s } from '@/components/marketing/PageShell';

export const metadata: Metadata = {
  title: 'Web Design & Development Services',
  description:
    'Next.js web development for businesses in India, the US, UK, and Australia. Pixel-perfect, sub-1s-load marketing sites, SaaS dashboards, and WordPress-to-Next.js migrations — built by senior engineers.',
  alternates: { canonical: '/services/web-development' },
  openGraph: {
    title: 'Web Design & Development | codeq',
    description: 'Pixel-perfect, performance-first websites built in Next.js for clients in India and worldwide.',
    url: 'https://codeq.tech/services/web-development',
  },
};

const deliverables = [
  'Custom Next.js / React websites and web apps',
  'WordPress-to-Next.js migrations with full SEO equity preservation (301 redirect mapping)',
  'SaaS dashboards and internal tools',
  'E-commerce storefronts',
  'Landing pages built for conversion',
  'Ongoing maintenance and feature retainers',
];

const outcomes = [
  { val: 'Sub-1s', key: 'Typical Load Time' },
  { val: '98+', key: 'Lighthouse Score' },
  { val: '100%', key: 'Mobile-First Builds' },
];

const process = [
  { num: '01', title: 'Discovery & Scope', body: 'We map your goals, content, and integrations into a fixed-price scope before any code is written.' },
  { num: '02', title: 'Design & Build', body: 'Senior engineers build directly in code — no separate design hand-off that gets lost in translation.' },
  { num: '03', title: 'Review & Launch', body: 'Weekly previews, a staging environment, and a pre-launch SEO & performance audit before go-live.' },
  { num: '04', title: 'Support', body: 'Post-launch monitoring and an optional retainer for ongoing changes, content, and features.' },
];

const faqs = [
  { q: 'How long does a typical website take?', a: 'A marketing site usually takes 2-6 weeks depending on page count and integrations. SaaS dashboards and complex platforms take longer — we give a firm timeline in the proposal.' },
  { q: 'Can you migrate our existing WordPress site without losing rankings?', a: 'Yes — this is one of our most common projects. We map every existing URL to its new Next.js equivalent with 301 redirects and rebuild metadata before launch so search rankings transfer rather than reset.' },
  { q: 'Do you design as well as develop?', a: 'Yes. We design directly in code rather than handing static mockups to a separate dev team, which keeps the build faster and the final product closer to what was agreed.' },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Web Design & Development',
  provider: { '@type': 'Organization', name: 'codeq', url: 'https://codeq.tech' },
  areaServed: ['India', 'United States', 'United Kingdom', 'Australia'],
  url: 'https://codeq.tech/services/web-development',
};
const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};

export default function WebDevPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <PageShell
        active="/services"
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Services', href: '/services' }, { label: 'Web Development' }]}
        eyebrow="01 / Web"
        title={<>Web Design<br />& <em>Development</em></>}
        lede="Pixel-perfect, performance-first websites and web applications built in Next.js — for businesses in India and clients abroad who need a site that loads fast, ranks well, and converts."
      >
        <div className={s.section}>
          <div className={s.statRow}>
            {outcomes.map((o) => (
              <div key={o.key}><div className={s.statVal}>{o.val}</div><div className={s.statKey}>{o.key}</div></div>
            ))}
          </div>
        </div>

        <div className={s.section}>
          <p className={s.sectionLabel}>What&apos;s Included</p>
          <h2 className={s.h2}>What we build.</h2>
          <ul className={s.list} style={{ maxWidth: 640 }}>
            {deliverables.map((d) => <li key={d}>{d}</li>)}
          </ul>
        </div>

        <div className={s.section}>
          <p className={s.sectionLabel}>How It Works</p>
          <h2 className={s.h2}>Our process.</h2>
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
          <h2 className={s.h2}>Ready to start your website?</h2>
          <p className={s.lede}>Send us your goals and we&apos;ll come back with a scoped proposal within 48 hours.</p>
          <div className={s.btnRow} style={{ justifyContent: 'center' }}>
            <StartProjectButton />
          </div>
        </div>
      </PageShell>
    </>
  );
}