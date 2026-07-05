import type { Metadata } from 'next';
import PageShell, { StartProjectButton } from '@/components/marketing/PageShell';
import s from '@/app/marketing.module.css';

export const metadata: Metadata = {
  title: 'AI Application Development Services',
  description:
    'Custom LLM integrations, RAG pipelines, and AI-powered tools for businesses in India, the US, UK, and Australia. Production-grade AI applications that ship — not demos.',
  alternates: { canonical: '/services/ai-development' },
  openGraph: {
    title: 'AI-Powered Applications | codeq',
    description: 'Custom LLM integrations and AI tools built into your product, shipped to production.',
    url: 'https://codeq.tech/services/ai-development',
  },
};

const deliverables = [
  'LLM integrations using OpenAI, Anthropic, and open-source models',
  'RAG (retrieval-augmented generation) pipelines over your own data',
  'Document processing and automation tools',
  'AI chat and support assistants embedded in your product',
  'Custom internal tools that automate repetitive workflows',
  'Evaluation and monitoring so AI features stay reliable in production',
];

const outcomes = [
  { val: 'Measurable', key: 'Time Savings' },
  { val: 'Production', key: 'Grade Reliability' },
  { val: 'Explainable', key: 'Outputs' },
];

const process = [
  { num: '01', title: 'Define the Use Case', body: 'We scope the exact workflow AI should replace or augment — not "add AI everywhere".' },
  { num: '02', title: 'Prototype Fast', body: 'A working prototype against real data, so you can see actual output quality before committing.' },
  { num: '03', title: 'Build to Production', body: 'Error handling, rate limits, cost controls, and monitoring — the parts demos skip.' },
  { num: '04', title: 'Monitor & Improve', body: 'We track output quality and cost after launch, and iterate on prompts and pipelines.' },
];

const faqs = [
  { q: 'We have a lot of internal documents — can AI help us search them?', a: 'Yes — this is a RAG (retrieval-augmented generation) pipeline, one of our most common builds. We index your documents and connect them to an LLM so staff or customers can ask natural-language questions and get accurate, sourced answers.' },
  { q: 'Will the AI feature actually work reliably, not just in a demo?', a: 'We build with production constraints from day one — rate limiting, fallback behaviour, cost monitoring, and evaluation sets — so the feature holds up under real usage, not just a clean demo run.' },
  { q: 'Do you build the AI feature into an existing app, or only new products?', a: 'Both. Most of our AI work is added into an existing codebase — we review the architecture first so the integration is compatible with what you already have.' },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'AI Application Development',
  provider: { '@type': 'Organization', name: 'codeq', url: 'https://codeq.tech' },
  areaServed: ['India', 'United States', 'United Kingdom', 'Australia'],
  url: 'https://codeq.tech/services/ai-development',
};
const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};

export default function AiDevPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <PageShell
        active="/services"
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Services', href: '/services' }, { label: 'AI Development' }]}
        eyebrow="03 / AI"
        title={<>AI-Powered<br /><em>Applications</em></>}
        lede="We integrate LLMs and ML pipelines directly into your product. Custom AI tools, document processors, and automations that deliver measurable ROI — not demos that never ship."
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
          <h2 className={s.h2}>Have an AI idea you want validated?</h2>
          <p className={s.lede}>Tell us the workflow you want to automate — we&apos;ll tell you honestly if AI is the right fit.</p>
          <div className={s.btnRow} style={{ justifyContent: 'center' }}>
            <StartProjectButton />
          </div>
        </div>
      </PageShell>
    </>
  );
}