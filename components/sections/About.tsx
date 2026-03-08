const values = [
  { num: '01', title: 'Quality is Non-Negotiable',  body: 'Every line, every pixel held to one standard: is it excellent?' },
  { num: '02', title: 'Senior Talent Only',          body: 'The people who quote your project build it. No bait-and-switch.' },
  { num: '03', title: 'Transparent by Default',      body: 'Weekly standups, shared repos, open dashboards. Always.' },
  { num: '04', title: 'Outcomes Drive Decisions',    body: 'We ask "will this move your metrics?" before writing a line.' },
];

const stats = [
  { val: 50,  suffix: '+', key: 'projects_shipped' },
  { val: 28,  suffix: '',  key: 'us_clients' },
  { val: 8,   suffix: '+', key: 'years_deep' },
  { val: 100, suffix: '%', key: 'satisfaction' },
];

export default function About() {
  return (
    <section id="about" aria-labelledby="about-heading">
      {/* LEFT — laptop animation */}
      <div className="ab-left">
        <div className="laptop-scene" id="laptopScene" aria-label="Animated laptop showing code editor and browser preview" role="img">
          <div className="laptop-inner">
            <div className="mac-wrap">
              <div className="mac-lid">
                <div className="mac-notch" aria-hidden="true"></div>
                <div className="mac-bezel">
                  <div className="mac-screen">
                    {/* Editor phase */}
                    <div className="phase-editor" id="phaseEditor" aria-hidden="true">
                      <div className="ed-titlebar">
                        <div className="ed-dot r"></div>
                        <div className="ed-dot y"></div>
                        <div className="ed-dot g"></div>
                      </div>
                      <div className="ed-tabbar">
                        <div className="ed-tab">explorer</div>
                        <div className="ed-tab active">App.tsx</div>
                        <div className="ed-tab">globals.css</div>
                      </div>
                      <div className="ed-body">
                        <div className="ed-sidebar"></div>
                        <div className="ed-main">
                          <div className="ed-lines" id="edLines"></div>
                          <div className="ed-code-area" id="edCode"></div>
                        </div>
                      </div>
                    </div>

                    {/* Browser phase */}
                    <div className="phase-browser" id="phaseBrowser" aria-hidden="true">
                      <div className="br-bar">
                        <div className="br-dot r"></div>
                        <div className="br-dot y"></div>
                        <div className="br-dot g"></div>
                        <div className="br-url">
                          <span className="br-lock">🔒</span>
                          <span>codeq.tech</span>
                        </div>
                      </div>
                      <div className="br-page">
                        <div className="site-nav" id="siteNav">
                          <div className="site-logo">code<span>q</span></div>
                          <div className="site-navlinks">
                            <span className="site-navlink">Work</span>
                            <span className="site-navlink">Services</span>
                            <span className="site-navlink">About</span>
                          </div>
                          <div className="site-cta-btn">Get in touch</div>
                        </div>
                        <div className="site-hero">
                          <div className="site-tag" id="siteTag">BOUTIQUE DEV STUDIO</div>
                          <div className="site-h1">
                            <span className="site-h1-line" id="shl1">We build what</span>
                            <span className="site-h1-line agreen" id="shl2">others can&apos;t.</span>
                          </div>
                          <div className="site-sub" id="siteSub">Senior engineers only. No juniors, no agencies, no compromise on quality.</div>
                          <div className="site-btns">
                            <div className="site-btn-p" id="sbtn1">View our work</div>
                            <div className="site-btn-s" id="sbtn2">Meet the team →</div>
                          </div>
                        </div>
                        <div className="site-services">
                          <div className="site-card" id="sc1"><div className="site-card-icon">⚡</div><div className="site-card-title">PRODUCT ENG</div><div className="site-card-body">Full-stack, scalable systems built to last.</div></div>
                          <div className="site-card" id="sc2"><div className="site-card-icon">✦</div><div className="site-card-title">DESIGN SYSTEMS</div><div className="site-card-body">Pixel-perfect UI with living components.</div></div>
                          <div className="site-card" id="sc3"><div className="site-card-icon">◈</div><div className="site-card-title">TECH LEADERSHIP</div><div className="site-card-body">CTO-level strategy for growing teams.</div></div>
                        </div>
                        <div className="site-stats-row">
                          <div className="site-stat-cell" id="ss1"><div className="site-stat-v">50+</div><div className="site-stat-k">PROJECTS</div></div>
                          <div className="site-stat-cell" id="ss2"><div className="site-stat-v">8+</div><div className="site-stat-k">YEARS</div></div>
                          <div className="site-stat-cell" id="ss3"><div className="site-stat-v">28</div><div className="site-stat-k">US CLIENTS</div></div>
                          <div className="site-stat-cell" id="ss4"><div className="site-stat-v">100%</div><div className="site-stat-k">QUALITY</div></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Keyboard */}
              <div className="mac-keyboard" aria-hidden="true">
                <div className="kb-rows">
                  {[0, 1].map((row) => (
                    <div className="kb-row" key={row}>
                      <div className="kb-key wide"></div>
                      {Array.from({ length: 11 }).map((_, i) => <div className="kb-key" key={i}></div>)}
                      <div className="kb-key wide"></div>
                    </div>
                  ))}
                  <div className="kb-row"><div className="kb-key space"></div></div>
                </div>
                <div className="kb-trackpad"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT — text */}
      <div className="ab-right">
        <div className="ab-top-row" id="abTop">
          <span className="ab-eyebrow">codeq · <em>about</em> · est. 2016</span>
          <span className="ab-qtag">quality_first</span>
        </div>

        <h2 className="ab-hl" id="abHl about-heading">
          Small studio.<br /><em>Senior craft.</em>
        </h2>

        <p className="ab-desc" id="abDesc">
          A boutique development studio where the Q stands for Quality — not a tagline, but a
          filter for every decision we make. We work directly with founders who need a technical
          partner they can trust. No junior developers hidden behind a polished sales front.
        </p>

        <div className="ab-vlist" id="abVals">
          {values.map((v) => (
            <div className="ab-vi" key={v.num}>
              <span className="ab-vi-num" aria-hidden="true">{v.num}</span>
              <span className="ab-vi-txt">
                <strong>{v.title}</strong>
                {v.body}
              </span>
            </div>
          ))}
        </div>

        <div className="ab-nums" id="abNums">
          {stats.map((s) => (
            <div className="ab-num" key={s.key}>
              <span
                className="ab-num-val"
                data-target={s.val}
                data-suffix={s.suffix}
                aria-label={`${s.val}${s.suffix} ${s.key.replace(/_/g, ' ')}`}
              >
                0
              </span>
              <span className="ab-num-key">{s.key}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
