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

      <a
        href="mailto:hello@codeq.tech"
        className="cta-btn mag"
        aria-label="Start a project with codeq"
      >
        <span>Start a Project</span>
        <span aria-hidden="true">→</span>
      </a>
    </section>
  );
}
