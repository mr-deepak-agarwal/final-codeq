export default function Testimonial() {
  const words = [
    'codeq','delivered','a','production','AI','platform','in','5','weeks.',
    'The','code','quality','surpassed','what','our','internal','team',
    "would've",'produced.',"We're",'already','on','our','third','project.',
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
            <cite>James M. &nbsp;·&nbsp; CTO, San Francisco, California</cite>
          </footer>
        </blockquote>
      </div>
    </section>
  );
}
