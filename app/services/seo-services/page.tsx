import type { Metadata } from 'next';
import PageShell, { StartProjectButton } from '@/components/marketing/PageShell';
import s from '@/app/marketing.module.css';

export const metadata: Metadata = {
  title: 'SEO & Growth Marketing Services',
  description:
    'Technical SEO audits, on-page fixes, and full-funnel Google & Meta Ads management for businesses in India, the US, UK, and Australia. No vanity metrics — just rankings and leads you can measure.',
  alternates: { canonical: '/services/seo-services' },
  openGraph: {
    title: 'SEO & Growth Marketing | codeq',
    description: 'Technical SEO audits and full-funnel ad campaigns that turn search traffic into qualified leads.',
    url: 'https://codeq.tech/services/seo-services',
  },
};

const deliverables = [
  'Technical SEO audits — crawlability, metadata, structured data, Core Web Vitals',
  'On-page optimisation and content strategy for money pages',
  'Google Ads & Meta Ads campaign setup and management',
  'Conversion tracking audits — finding the gaps agencies miss',
  'Local SEO for India-based businesses, international SEO for US/UK/AU expansion',
  'Monthly reporting tied to real KPIs, not vanity metrics',
];

const outcomes = [
  { val: '90 days', key: 'To First Ranking Gains' },
  { val: '0', key: 'Vanity Metrics' },
  { val: 'Monthly', key: 'KPI Reporting' },
];

const process = [
  { num: '01', title: 'Audit', body: 'Full technical, on-page, and conversion-tracking audit — we show you exactly what\u2019s broken before recommending fixes.' },
  { num: '02', title: 'Fix & Build', body: 'We implement technical fixes directly in your codebase and build out content for the pages that drive revenue.' },
  { num: '03', title: 'Run Campaigns', body: 'Google & Meta Ads campaigns built around real conversion data, not assumptions.' },
  { num: '04', title: 'Report & Iterate', body: 'Monthly reporting on rankings, traffic, and leads — with next-step recommendations every cycle.' },
];

const faqs = [
  { q: 'We already have an SEO or PPC agency — can you audit their work?', a: 'Yes. A common engagement is an independent audit of an existing agency\u2019s setup — we regularly find gaps like incomplete conversion tracking, missing structured data, or pages blocked from indexing that the current agency has missed.' },
  { q: 'Do you handle Google Ads for international markets?', a: 'Yes — we set up and manage campaigns targeting India as well as the US, UK, and Australia, including currency, geo-targeting, and ad copy adapted per market.' },
  { q: 'How fast will we see results?', a: 'Technical fixes can show up in Search Console within weeks. Organic ranking gains typically take 90 days or more, depending on competition. Paid campaigns can generate leads from week one.' },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'SEO & Growth Marketing',
  provider: { '@type': 'Organization', name: 'codeq', url: 'https://codeq.tech' },
  areaServed: ['India', 'United States', 'United Kingdom', 'Australia'],
  url: 'https://codeq.tech/services/seo-services',
};
const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};

export default function SeoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <PageShell
        active="/services"
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Services', href: '/services' }, { label: 'SEO & Growth Marketing' }]}
        eyebrow="02 / Growth"
        title={<>SEO & Growth<br /><em>Marketing</em></>}
        lede="From technical audits to full-funnel ad campaigns — we grow organic traffic and build paid strategies that convert, for businesses in India and abroad. No bloated retainers, no vanity metrics."
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
          <h2 className={s.h2}>What we cover.</h2>
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
          <h2 className={s.h2}>Want a free audit snapshot?</h2>
          <p className={s.lede}>Tell us your site URL and current ad setup — we&apos;ll point out the biggest gap we see.</p>
          <div className={s.btnRow} style={{ justifyContent: 'center' }}>
            <StartProjectButton />
          </div>
        </div>
      </PageShell>
    </>
  );
}