'use client';

const navLinks  = ['Services', 'Work', 'Process', 'About', 'Contact'];
const legalLinks = ['Privacy Policy', 'Terms of Service', 'Cookie Policy'];

export default function Footer() {
  return (
    <footer role="contentinfo">
      <div className="foot-top">
        {/* Brand */}
        <div className="fb">
          <a href="#" className="nlogo" aria-label="codeq — home">
            <div className="nlogo-sq" aria-hidden="true">Q</div>
            <div>
              <span className="nlogo-name">codeq</span>
              <span className="nlogo-sub">.tech</span>
            </div>
          </a>
          <p className="fb-tagline">
            Senior engineering, delivered directly. The Q stands for Quality.
          </p>
          <nav className="fb-social" aria-label="Social media links">
            {[
              { label: 'LinkedIn', symbol: 'in', href: 'https://www.linkedin.com/in/deepak-agarwal-08369876/' },
              { label: 'GitHub',   symbol: 'GH', href: '#' },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith('http') ? '_blank' : undefined}
                rel={s.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="fb-soc-link"
                aria-label={s.label}
              >
                {s.symbol}
              </a>
            ))}
          </nav>
        </div>

        {/* Navigation */}
        <nav className="fcol" aria-label="Footer navigation">
          <h5>Navigation</h5>
          {navLinks.map((l) => (
            <a href={`#${l.toLowerCase()}`} key={l}>{l}</a>
          ))}
        </nav>

        {/* Legal */}
        <div className="fcol">
          <h5>Legal</h5>
          {legalLinks.map((l) => (
            <a href="#" key={l}>{l}</a>
          ))}
        </div>

        {/* CTA col */}
        <div className="fcol foot-cta-col">
          <h5>Start a Project</h5>
          <a
            href="mailto:hello@codeq.tech"
            className="fcol-cta-email"
            aria-label="Email codeq"
          >
            hello@codeq.tech
          </a>
          <p className="fcol-cta-note">Currently accepting new projects</p>
          <button
            type="button"
            className="foot-cta-btn"
            aria-label="Get in touch with codeq"
            onClick={() => window.dispatchEvent(new Event('open-contact-modal'))}
          >
            Get in Touch <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>

      {/* Big wordmark */}
      <div className="foot-wm" aria-hidden="true">
        <svg className="wm-svg" viewBox="0 0 1440 160" fill="none" xmlns="http://www.w3.org/2000/svg">
          <text
            className="wm-text"
            x="50%" y="145"
            textAnchor="middle"
            fontFamily="Cormorant Garamond, serif"
            fontSize="180"
            fontWeight="300"
            fill="rgba(240,237,228,0.06)"
            letterSpacing="-0.04em"
          >
            {'codeq'.split('').map((l, i) => (
              <tspan key={i} className="wml">{l}</tspan>
            ))}
          </text>
        </svg>
      </div>

      {/* Bottom bar */}
      <div className="foot-bottom">
        <p className="fcopy">
          © {new Date().getFullYear()} codeq. All rights reserved.
        </p>
        <div className="fcopy-right">
          <span className="fcopy">Built with Next.js</span>
          <span className="fcopy-dot" aria-hidden="true"></span>
          <span className="fcopy">Quality in Every Line</span>
        </div>
      </div>
    </footer>
  );
}
