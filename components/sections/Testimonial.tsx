export default function Testimonial() {
  const words = [
    'Your', 'real', 'testimonial', 'quote', 'goes', 'here', '—',
    'replace', 'this', 'with', 'the', 'actual', 'words', 'from', 'your', 'client.',
  ];

  return (
    <section id="testi" aria-labelledby="testi-quote">
      <div className="testi-bg" aria-hidden="true">&ldquo;</div>
      <div className="testi-orb" aria-hidden="true"></div>
      <div className="testi-wrap">
        <span className="testi-mark rv" aria-hidden="true">&ldquo;</span>
        <blockquote>
          <p className="testi-q rv" id="testi-quote" style={{ transitionDelay: '.15s' }}>
            {words.map((w, i) => (
              <span className="tw-q" key={i}>{w} </span>
            ))}
          </p>
          <footer className="testi-by rv" style={{ transitionDelay: '.3s' }}>
            <cite>Client Name &nbsp;·&nbsp; Role, Company</cite>
          </footer>
        </blockquote>
      </div>
    </section>
  );
}