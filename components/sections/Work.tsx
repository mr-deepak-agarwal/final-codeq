const bigProjects = [
  {
    num: '',
    cat: 'Consulting Website',
    name: 'MARC Glocal',
    image: '/marc.png',
    desc: 'Full-stack Next.js rebuild for a 15-year-old growth advisory firm. SEO migration from WordPress, Supabase lead capture, blog & insights CMS, Google Ads integration, and a global hub for US clients.',
    gradient: 'linear-gradient(145deg,#0a1628,#1a3a5c 50%,#060d1a)',
    catColor: '',
    stats: [
      { label: 'Services Covered', val: '8+' },
      { label: 'Load Time',        val: '<1s' },
      { label: 'Timeline',         val: '6 weeks' },
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
    num: '',
    cat: 'Healthcare Platform',
    image: '/arogya.png',
    name: 'Arogyaxpress',
    desc: 'Home healthcare booking platform offering 12 services including nursing, physiotherapy, palliative care, and lab visits. Multi-step enquiry flow with service routing and WhatsApp integration.',
    gradient: 'linear-gradient(145deg,#0d1f0f,#1a3d20 50%,#060e07)',
    catColor: '',
    stats: [
      { label: 'Services Listed',  val: '12' },
      { label: 'Booking Flow',     val: '2-step' },
      { label: 'Timeline',         val: '3 weeks' },
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
    num: '',
    cat: 'Local Business Website',
    name: 'FlyBon Stamps',
    image: '/flybon.png',
    desc: 'Clean, fast Next.js site for a stamp-making studio operating since 2010 across Goa and Bengaluru. 4.9-star rated, 376 reviews. Showcases product range with a direct call-to-order CTA.',
    gradient: 'linear-gradient(145deg,#1a0a00,#3d1f00 50%,#0d0500)',
    stats: [
      { label: 'Google Rating',    val: '4.9★' },
      { label: 'Reviews',          val: '376' },
      { label: 'Timeline',         val: '2 weeks' },
    ],
    icon: (
      <svg viewBox="0 0 100 100" fill="none" stroke="rgba(82,201,122,.6)" strokeWidth="1">
        <circle cx="25" cy="50" r="10"/><circle cx="75" cy="25" r="10"/><circle cx="75" cy="75" r="10"/>
        <line x1="35" y1="50" x2="65" y2="25"/><line x1="35" y1="50" x2="65" y2="75"/>
        </svg>
        ),
  },
  {
    num: '',
    cat: 'ERP System',
    name: 'Bizpally',
    image: '/bizpally.png',
    desc: 'Full-featured business management ERP with CRM, HR, project tracking, inventory, task management, calendar, and team chat — all under one dashboard. Multi-role access with admin controls.',
    gradient: 'linear-gradient(145deg,#0a1a0a,#1a3d1a 50%,#060e06)',
    catColor: '',
    stats: [
      { label: 'Modules Built',    val: '8+' },
      { label: 'User Roles',       val: 'Multi' },
      { label: 'Timeline',         val: '12 weeks' },
    ],
    icon: (
      <svg viewBox="0 0 100 100" fill="none" stroke="rgba(201,122,46,.6)" strokeWidth="1">
        <rect x="20" y="20" width="25" height="25" rx="2"/><rect x="55" y="20" width="25" height="25" rx="2"/>
        <rect x="20" y="55" width="25" height="25" rx="2"/><rect x="55" y="55" width="25" height="25" rx="2"/>
        </svg>
        ),
  },
  {
    num: '',
    cat: 'School Website',
    name: 'Hansraj Academy',
    image: '/hansraj.png',
    desc: 'Institutional website for a RBSE-affiliated school in Jaipur established in 2011. Covers admissions, facilities, and contact — clean, mobile-friendly, and built for parent-facing trust.',
    gradient: 'linear-gradient(145deg,#0a0a1a,#1a1a3d 50%,#06060e)',
    catColor: '',
    stats: [
      { label: 'Est.',             val: '2011' },
      { label: 'Classes',          val: 'PG–X' },
      { label: 'Timeline',         val: '2 weeks' },
    ],
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
        {/*<p className="work-note rv">Sample projects illustrating our capabilities.<br />Real client work available on request.</p>
      */}</div>

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