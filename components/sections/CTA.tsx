export default function CTA() {
  return (
    <section id="cta" aria-labelledby="cta-heading">
      <div className="cta-pts" id="ctap" aria-hidden="true"></div>

      <span className="cta-eye" aria-hidden="true">Get In Touch</span>

      <h2 className="cta-h2" id="cta-heading">
        <span className="cw">Let&apos;s</span>{' '}
        <span className="cw">build</span>
        <br />
        <span className="cw">something</span>{' '}
        <em><span className="cw">great.</span></em>
      </h2>

      <a
        href="mailto:hello@codeq.tech"
        className="cta-email"
        aria-label="Email codeq at hello@codeq.tech"
      >
        hello@codeq.tech
      </a>

      <div className="cta-actions">
        <a
          href="mailto:hello@codeq.tech"
          className="cta-btn mag"
          aria-label="Start a project with codeq"
        >
          <span>Start a Project</span>
          <span aria-hidden="true">→</span>
        </a>
        <a
          href="https://calendly.com/codeq-tech/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="cta-btn-ghost mag"
          aria-label="Book a 30-minute call with codeq"
        >
          <span>Book a 30-min Call</span>
          <span aria-hidden="true">↗</span>
        </a>
      </div>
    </section>
  );
}