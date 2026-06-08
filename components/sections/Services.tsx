// Card order: svc3 (bottom of stack), svc2 (middle), svc1 (top) — matches HTML
// nth-child(1) = svc3 = green, nth-child(2) = svc2 = purple, nth-child(3) = svc1 = orange

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
  },
];

export default function Services() {
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

      <div className="svc-scroll-wrap" id="svcWrap">
        <div className="svc-sticky" id="svcSticky">
          {services.map((svc) => (
            <div
              className="svc-card"
              id={svc.id}
              key={svc.id}
              aria-label={`Service: ${svc.title.replace('\n', ' ')}`}
            >
              <div className="svc-orb" aria-hidden="true"></div>
              <div className="svc-cn" aria-hidden="true">{svc.num}</div>
              <div className="svc-card-inner">
                <div className="svc-left">
                  <div>
                    <div className="svc-top-row">
                      <span className="svc-num">{svc.label}</span>
                      <span className="svc-badge">{svc.badge}</span>
                    </div>
                    <h3 className="svc-title">
                      {svc.title.split('\n').map((line, i, arr) => (
                        <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
                      ))}
                    </h3>
                  </div>
                  <div className="tags">
                    {svc.tags.map((tag) => (
                      <span className="tag" key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
                <div className="svc-right">
                  <p className="svc-body">{svc.body}</p>
                  <ul className="svc-outs">
                    {svc.outs.map((out) => (
                      <li key={out}>{out}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
          <div className="svc-hint" id="svcHint" aria-hidden="true">Scroll to explore</div>
        </div>
      </div>
    </section>
  );
}
