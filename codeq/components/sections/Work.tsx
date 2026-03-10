const bigProjects = [
  {
    num: '01 / 2024',
    cat: 'Consulting Website',
    name: 'Vertex Consulting',
    desc: 'High-converting B2B consulting site. Precision storytelling, surgical UX, Figma to launch in 3 weeks flat.',
    gradient: 'linear-gradient(145deg,#0a0e1e,#14203a 50%,#060810)',
    catColor: '',
    stats: [
      { label: 'Inbound Leads', val: '+40%' },
      { label: 'Load Time',     val: '0.9s' },
      { label: 'Timeline',      val: '3 weeks' },
    ],
    icon: (
      <svg viewBox="0 0 100 100" fill="none" stroke="rgba(82,201,122,.6)" strokeWidth="1">
        <circle cx="50" cy="50" r="40"/><circle cx="50" cy="50" r="25"/>
        <circle cx="50" cy="50" r="10"/>
        <line x1="50" y1="10" x2="50" y2="90"/>
        <line x1="10" y1="50" x2="90" y2="50"/>
      </svg>
    ),
  },
  {
    num: '02 / 2024',
    cat: 'School Website',
    name: 'Brightfield Academy',
    desc: 'Parent-first school site. Admissions flow, events calendar, 98 Lighthouse score out of the box.',
    gradient: 'linear-gradient(145deg,#1a0d18,#38143a 50%,#0f070f)',
    catColor: 'rgba(201,122,46,.3)',
    catTextColor: '#E9AA5E',
    stats: [
      { label: 'Admissions Enquiries', val: '3×' },
      { label: 'Lighthouse Score',     val: '98' },
      { label: 'Timeline',             val: '2 weeks' },
    ],
    icon: (
      <svg viewBox="0 0 100 100" fill="none" stroke="rgba(201,122,46,.6)" strokeWidth="1">
        <rect x="15" y="15" width="70" height="70" rx="4"/>
        <line x1="15" y1="35" x2="85" y2="35"/>
        <line x1="50" y1="35" x2="50" y2="85"/>
      </svg>
    ),
  },
];

const gridProjects = [
  {
    num: '03 / 2024',
    cat: 'AI SaaS Platform',
    name: 'NeuroFlow',
    desc: 'A no-code AI workflow builder for non-technical founders. Built with LangChain + RAG.',
    gradient: 'linear-gradient(145deg,#0d2416,#1B4D2F 50%,#091009)',
    stats: [{ label: 'Time saved / user', val: '6h/wk' }, { label: 'MAU Growth', val: '+220%' }, { label: 'Timeline', val: '6 weeks' }],
    icon: (
      <svg viewBox="0 0 100 100" fill="none" stroke="rgba(82,201,122,.6)" strokeWidth="1">
        <circle cx="25" cy="50" r="10"/><circle cx="75" cy="25" r="10"/><circle cx="75" cy="75" r="10"/>
        <line x1="35" y1="50" x2="65" y2="25"/><line x1="35" y1="50" x2="65" y2="75"/>
      </svg>
    ),
  },
  {
    num: '04 / 2023',
    cat: 'ERP System',
    name: 'Meridian ERP',
    desc: 'Full internal operations platform: inventory, HR, CRM. Built in 10 weeks, live in 12.',
    gradient: 'linear-gradient(145deg,#1a1208,#3d2a14 50%,#0d0a04)',
    catColor: 'rgba(201,122,46,.3)',
    catTextColor: '#E9AA5E',
    stats: [{ label: 'Processes automated', val: '14' }, { label: 'Team hours saved', val: '40/wk' }, { label: 'Timeline', val: '12 weeks' }],
    icon: (
      <svg viewBox="0 0 100 100" fill="none" stroke="rgba(201,122,46,.6)" strokeWidth="1">
        <rect x="20" y="20" width="25" height="25" rx="2"/><rect x="55" y="20" width="25" height="25" rx="2"/>
        <rect x="20" y="55" width="25" height="25" rx="2"/><rect x="55" y="55" width="25" height="25" rx="2"/>
      </svg>
    ),
  },
  {
    num: '05 / 2023',
    cat: 'E-Commerce',
    name: 'Luxe Studio',
    desc: 'Fashion-forward e-commerce with custom animations, 3D product viewer, and blazing-fast checkout.',
    gradient: 'linear-gradient(145deg,#160828,#38145a 50%,#0d0614)',
    stats: [{ label: 'Conversion Rate', val: '+35%' }, { label: 'Cart abandonment', val: '-28%' }, { label: 'Timeline', val: '5 weeks' }],
    icon: (
      <svg viewBox="0 0 100 100" fill="none" stroke="rgba(176,127,235,.6)" strokeWidth="1">
        <path d="M20 35h60l-8 35H28z"/><circle cx="38" cy="82" r="5"/><circle cx="62" cy="82" r="5"/>
        <path d="M20 35l-8-20h-8"/>
      </svg>
    ),
  },
];

function FlipCard({
  num, cat, name, desc, gradient, catColor, catTextColor, stats, icon, big = false,
}: {
  num: string; cat: string; name: string; desc: string; gradient: string;
  catColor?: string; catTextColor?: string; stats: { label: string; val: string }[];
  icon: React.ReactNode; big?: boolean;
}) {
  return (
    <article className={`fcard rv${big ? ' fcard-big' : ''}`} aria-label={`Project: ${name}`}>
      <div className="fcard-inner">
        {/* Front */}
        <div className="fcard-f" style={{ background: gradient }}>
          <div className="fcard-anim" aria-hidden="true">
            <div className="fcard-dot" style={{ width: '200px', height: '200px', top: '-40px', right: '-40px', animationDuration: '4s' }}></div>
          </div>
          <div className="fcard-icon" aria-hidden="true">{icon}</div>
          <div className="fcard-arr" aria-hidden="true">↗</div>
          <span className="fcard-num">{num}</span>
          <span
            className="fcard-cat"
            style={catColor ? { borderColor: catColor, color: catTextColor } : {}}
          >
            {cat}
          </span>
          <h3 className="fcard-name">{name}</h3>
        </div>

        {/* Back */}
        <div className="fcard-b">
          <div className="fcard-b-top">
            <span
              className="fcard-b-cat"
              style={catColor ? { borderColor: catColor, color: catTextColor } : {}}
            >
              {cat}
            </span>
            <h3 className="fcard-b-name">{name}</h3>
            <p className="fcard-b-desc">{desc}</p>
          </div>
          <div className="fcard-b-stats">
            {stats.map((s) => (
              <div className="fstat" key={s.label}>
                <span className="fstat-l">{s.label}</span>
                <span className="fstat-v">{s.val}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

export default function Work() {
  return (
    <section id="work" aria-labelledby="work-heading">
      <div className="work-hdr">
        <div>
          <p className="sec-label rv" style={{ marginBottom: '16px', color: 'var(--grey)' }}>Selected Work</p>
          <h2 className="work-h2 rv" id="work-heading">
            Projects that<br /><em>move the needle.</em>
          </h2>
        </div>
        <p className="work-note rv">Hover each card to see results. Every number is real.</p>
      </div>

      <div className="flip-row-big">
        {bigProjects.map((p) => (
          <FlipCard key={p.name} {...p} big />
        ))}
      </div>

      <div className="flip-grid">
        {gridProjects.map((p) => (
          <FlipCard key={p.name} {...p} />
        ))}
      </div>
    </section>
  );
}
