'use client';
import { useState } from 'react';

const services = [
  {
    id: 'svc1',
    num: '01',
    label: '01 / Web',
    badge: 'Interfaces that convert',
    title: 'Web Design\n& Development',
    tags: ['Next.js', 'React', 'TypeScript', 'Figma', 'Tailwind'],
    body: "Pixel-perfect, performance-first websites built in Next.js. We design in Figma and obsess over every interaction until it's right — from marketing sites to complex SaaS dashboards. No handoffs, no excuses.",
    outs: ['Sub-1s load times', '98+ Lighthouse score', 'Mobile-first always'],
    stat: { val: '98+', key: 'Lighthouse score' },
    accent: 'var(--gl)',
  },
  {
    id: 'svc2',
    num: '02',
    label: '02 / AI',
    badge: 'Intelligence, applied',
    title: 'AI-Powered\nApplications',
    tags: ['OpenAI', 'Anthropic', 'LangChain', 'Python', 'RAG'],
    body: 'We integrate LLMs and ML pipelines directly into your product. Custom AI tools, document processors, and automations that deliver measurable ROI — not demos that never ship.',
    outs: ['Measurable time savings', 'Production-grade reliability', 'Explainable outputs'],
    stat: { val: 'RAG', key: 'Architecture' },
    accent: 'var(--gl)',
  },
  {
    id: 'svc3',
    num: '03',
    label: '03 / Systems',
    badge: 'Backends that scale',
    title: 'Full-Stack\nSystems',
    tags: ['Node.js', 'PostgreSQL', 'Prisma', 'AWS', 'tRPC'],
    body: 'Robust APIs, admin portals, ERP systems, and CRM tools. We architect for scale and maintain for years — not sprints. Clean code, proper docs, handoff-ready from day one.',
    outs: ['99.9% uptime targets', 'Clean, documented code', 'Handoff-ready systems'],
    stat: { val: '99.9%', key: 'Uptime targets' },
    accent: 'var(--gl)',
  },
];

export default function Services() {
  const [active, setActive] = useState(0);
  const svc = services[active];

  return (
    <section id="services" aria-labelledby="services-heading">
      <div className="svc-header">
        <p className="sec-label rv">What We Do</p>
        <h2 className="sec-h2 rv" id="services-heading">
          <span className="hw">Three</span>{' '}
          <span className="hw">disciplines.</span>
          <br />
          <em>
            <span className="hw">One</span>{' '}
            <span className="hw">standard.</span>
          </em>
        </h2>
      </div>

      <div className="svc-split">
        {/* LEFT — service list */}
        <div className="svc-split-left">
          {services.map((s, i) => (
            <div
              key={s.id}
              className={`svc-row${active === i ? ' active' : ''}`}
              onMouseEnter={() => setActive(i)}
              onClick={() => setActive(i)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && setActive(i)}
              aria-label={`View ${s.title.replace('\n', ' ')}`}
            >
              <div className="svc-row-left">
                <span className="svc-row-num">{s.num}</span>
                <span className="svc-row-name">
                  {s.title.split('\n').map((line, j, arr) => (
                    <span key={j}>{line}{j < arr.length - 1 && <br />}</span>
                  ))}
                </span>
              </div>
              <div className="svc-row-arrow" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12,5 19,12 12,19" />
                </svg>
              </div>
            </div>
          ))}
          <p className="svc-hint" aria-hidden="true">Hover to explore</p>
        </div>

        {/* RIGHT — detail panel */}
        <div className="svc-split-right" aria-live="polite">
          {services.map((s, i) => (
            <div
              key={s.id}
              className={`svc-panel${active === i ? ' active' : ''}`}
              aria-hidden={active !== i}
            >
              <span className="svc-panel-badge">{s.badge}</span>
              <h3 className="svc-panel-title">
                {s.title.split('\n').map((line, j, arr) => (
                  <span key={j}>{line}{j < arr.length - 1 && <br />}</span>
                ))}
              </h3>
              <p className="svc-panel-body">{s.body}</p>
              <div className="svc-panel-stat">
                <span className="svc-stat-val">{s.stat.val}</span>
                <span className="svc-stat-key">{s.stat.key}</span>
              </div>
              <ul className="svc-panel-outs">
                {s.outs.map((out) => (
                  <li key={out}>{out}</li>
                ))}
              </ul>
              <div className="tags">
                {s.tags.map((tag) => (
                  <span className="tag" key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}