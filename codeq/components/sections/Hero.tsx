export default function Hero() {
  return (
    <section id="hero" aria-label="Hero — codeq">
      <canvas id="hcanvas" aria-hidden="true"></canvas>
      <div className="hero-noise" aria-hidden="true"></div>
      <div className="hero-vignette" aria-hidden="true"></div>

      <div className="hero-inner">
        <div className="h-left">
          <div className="hero-badge">
            <span className="hbp" aria-hidden="true"></span>
            <span>Accepting New Projects · Est. 2019</span>
          </div>

          {/* h1 words split for animation — wrapped in landmark for SEO */}
          <h1 className="hero-h1">
            <span className="h1l">
              <span className="h1w">We</span>{' '}
              <span className="h1w">build</span>
            </span>
            <span className="h1l">
              <span className="h1w">digital</span>
            </span>
            <span className="h1l">
              <span className="h1w">products</span>
            </span>
            <span className="h1l">
              <span className="h1w">with</span>{' '}
              <span className="h1w em">Quality.</span>
            </span>
          </h1>
        </div>

        <div className="hero-right">
          <p className="hero-desc">
            codeq — where the Q stands for Quality. We design and engineer web experiences,
            AI tools, and full-stack systems that businesses are proud to ship.
          </p>

          <nav className="hero-btns" aria-label="Hero actions">
            <a href="#cta"  className="btn-fill mag" aria-label="Start a project">
              <span>Start a Project →</span>
            </a>
            <a href="#work" className="btn-ghost mag" aria-label="View our work">
              View Our Work
            </a>
          </nav>

          <div
            className="hero-terminal"
            role="img"
            aria-label="Animated terminal showing codeq technology stack"
          >
            <div className="hero-terminal-body" id="htb"></div>
          </div>
        </div>
      </div>

      <div className="hero-scroll" aria-hidden="true">
        <span className="hs-txt">Scroll</span>
        <div className="hs-line">
          <div className="hs-fill"></div>
        </div>
      </div>
    </section>
  );
}
