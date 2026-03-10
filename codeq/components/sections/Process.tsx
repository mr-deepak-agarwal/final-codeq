const steps = [
  {
    num: '01',
    step: 'Step 01',
    title: 'Discovery',
    body: '30-minute call. We listen, ask hard questions, and define scope honestly. No fluff, no overselling. Just clarity.',
    details: [
      { icon: <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>, title: 'DEEP LISTENING', text: 'Understand your vision & constraints' },
      { icon: <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>, title: 'HONEST ASSESSMENT', text: "We'll tell you if it won't work—and why" },
    ],
    vis: (
      <svg className="vis-svg" viewBox="0 0 360 120" fill="none" aria-hidden="true">
        <circle cx="60" cy="60" r="40" stroke="rgba(82,201,122,.4)" strokeWidth="1"/>
        <circle cx="60" cy="60" r="25" stroke="rgba(82,201,122,.3)" strokeWidth="1" strokeDasharray="4 4"/>
        <circle cx="60" cy="60" r="10" stroke="rgba(82,201,122,.5)" strokeWidth="1.5"/>
        <line x1="100" y1="60" x2="180" y2="60" stroke="rgba(82,201,122,.2)" strokeWidth="1"/>
        <circle cx="180" cy="60" r="5" fill="rgba(82,201,122,.4)"/>
        <text x="200" y="48" fontFamily="monospace" fontSize="10" fill="rgba(82,201,122,.5)">scope.defined</text>
        <text x="200" y="78" fontFamily="monospace" fontSize="10" fill="rgba(240,237,228,.2)">clarity: true</text>
      </svg>
    ),
  },
  {
    num: '02',
    step: 'Step 02',
    title: 'Proposal',
    body: 'Fixed price. Clear deliverables. No hourly billing surprises. You know exactly what you\'re getting before anything starts.',
    details: [
      { icon: <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>, title: 'TRANSPARENT PRICING', text: 'One price, no hidden fees or scope creep' },
      { icon: <><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="M22 4L12 14.01l-3-3"/></>, title: 'CLEAR MILESTONES', text: 'Phased delivery with specific dates' },
    ],
    vis: (
      <svg className="vis-svg" viewBox="0 0 360 120" fill="none" aria-hidden="true">
        <rect x="20" y="20" width="120" height="80" rx="4" stroke="rgba(201,122,46,.35)" strokeWidth="1"/>
        <line x1="36" y1="44" x2="124" y2="44" stroke="rgba(201,122,46,.25)" strokeWidth="1"/>
        <text x="36" y="38" fontFamily="monospace" fontSize="9" fill="rgba(201,122,46,.5)">PROPOSAL.PDF</text>
        <text x="235" y="55" fontFamily="monospace" fontSize="10" fill="rgba(240,237,228,.3)">fixed_price</text>
        <text x="235" y="70" fontFamily="monospace" fontSize="10" fill="rgba(240,237,228,.2)">no_surprises</text>
      </svg>
    ),
  },
  {
    num: '03',
    step: 'Step 03',
    title: 'Build',
    body: 'Weekly demos. Async-first communication. You see real progress every step — no black-box development, ever.',
    details: [
      { icon: <><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></>, title: 'WEEKLY DEMOS', text: 'Regular progress reports with working demos' },
      { icon: <><path d="M9 11l3 3 8-8"/><path d="M20 12v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h9"/></>, title: 'QUALITY CHECKS', text: 'Tested, documented, deployment-ready' },
    ],
    vis: (
      <svg className="vis-svg" viewBox="0 0 360 120" fill="none" aria-hidden="true">
        <rect x="20" y="50" width="40" height="50" rx="2" fill="rgba(82,201,122,.08)" stroke="rgba(82,201,122,.3)" strokeWidth="1"/>
        <rect x="70" y="35" width="40" height="65" rx="2" fill="rgba(82,201,122,.1)" stroke="rgba(82,201,122,.35)" strokeWidth="1"/>
        <rect x="120" y="20" width="40" height="80" rx="2" fill="rgba(82,201,122,.12)" stroke="rgba(82,201,122,.4)" strokeWidth="1"/>
        <text x="175" y="55" fontFamily="monospace" fontSize="9" fill="rgba(82,201,122,.4)">weekly_demo()</text>
        <text x="175" y="70" fontFamily="monospace" fontSize="9" fill="rgba(240,237,228,.2)">progress: visible</text>
      </svg>
    ),
  },
  {
    num: '04',
    step: 'Step 04',
    title: 'Launch',
    body: "We don't disappear post-launch. Support, full documentation, and a team that picks up the phone. Forever.",
    details: [
      { icon: <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>, title: 'ONGOING SUPPORT', text: "We don't disappear after launch" },
      { icon: <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M16 13H8M16 17H8M10 9H8"/></>, title: 'FULL DOCUMENTATION', text: 'Complete technical & user documentation' },
    ],
    vis: (
      <svg className="vis-svg" viewBox="0 0 360 120" fill="none" aria-hidden="true">
        <path d="M30 90 Q90 30 160 20 Q230 10 300 60" stroke="rgba(82,201,122,.4)" strokeWidth="1.5" fill="none"/>
        <circle cx="300" cy="60" r="8" fill="rgba(82,201,122,.3)" stroke="rgba(82,201,122,.6)" strokeWidth="1.5"/>
        <text x="280" y="38" fontFamily="monospace" fontSize="9" fill="rgba(82,201,122,.5)">launched ✓</text>
        <text x="270" y="52" fontFamily="monospace" fontSize="9" fill="rgba(240,237,228,.2)">support: always</text>
      </svg>
    ),
  },
];

export default function Process() {
  return (
    <section id="process" aria-labelledby="process-heading">
      <div className="proc-bg" aria-hidden="true">04</div>

      <div className="proc-head">
        <p className="sec-label rv">How We Work</p>
        <h2 className="sec-h2 rv" id="process-heading" style={{ color: 'var(--cream)' }}>
          <span className="hw" style={{ color: 'var(--cream)' }}>Four</span>{' '}
          <span className="hw" style={{ color: 'var(--cream)' }}>steps.</span>
          <br />
          <em>Zero surprises.</em>
        </h2>
      </div>

      <div className="proc-steps">
        {steps.map((s, i) => (
          <div
            className="ps rv"
            key={s.num}
            data-step={i + 1}
            style={i > 0 ? { transitionDelay: `${i * 0.1}s` } : {}}
          >
            {i < steps.length - 1 && <div className="ps-flow-line" aria-hidden="true"></div>}
            <div className="ps-num" data-num={s.num} aria-hidden="true">{s.num}</div>
            <div>
              <span className="ps-step">{s.step}</span>
              <h3 className="ps-title">{s.title}</h3>
              <p className="ps-body">{s.body}</p>
            </div>
            <div className="ps-vis">{s.vis}</div>
            <div className="ps-detail-cards">
              {s.details.map((d) => (
                <div className="ps-detail-card" key={d.title}>
                  <div className="ps-detail-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24">{d.icon}</svg>
                  </div>
                  <div className="ps-detail-title">{d.title}</div>
                  <div className="ps-detail-text">{d.text}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
