'use client';

import { useState, useEffect, useCallback } from 'react';

const testimonials = [
  {
    words: [
      'codeq', "didn't", 'just', 'rebuild', 'our', 'website', '—', 'they', 'rebuilt',
      'how', 'we', 'show', 'up', 'online.', 'The', 'migration', 'from', 'WordPress',
      'was', 'seamless,', 'the', 'new', 'site', 'is', 'dramatically', 'faster,', 'and',
      "we're", 'already', 'seeing', 'better', 'leads', 'through', 'the', 'contact',
      'flow.', 'Working', 'with', 'a', 'team', 'that', 'actually', 'understands',
      'both', 'the', 'technical', 'and', 'business', 'side', 'made', 'all', 'the', 'difference.',
    ],
    cite: 'Ashutosh Kharangate',
    role: 'Founder & Managing Director, MARC Glocal',
  },
  {
    words: [
      'We', 'needed', 'a', 'platform', 'that', 'could', 'handle', 'the', 'complexity',
      'of', 'home', 'healthcare', '—', 'multiple', 'services,', 'patient', 'routing,',
      'payments,', 'notifications', '—', 'and', 'codeq', 'delivered', 'all', 'of', 'it',
      'without', 'us', 'having', 'to', 'chase', 'them', 'once.', 'Clean,', 'fast,',
      'and', 'exactly', 'what', 'we', 'envisioned.',
    ],
    cite: 'Sneha Bhagwat',
    role: 'Co-Founder, ArogyaXpress',
  },
];

export default function Testimonial() {
  const [active, setActive]   = useState(0);
  const [visible, setVisible] = useState(true);

  const switchTo = useCallback((idx: number) => {
    setVisible(false);
    setTimeout(() => {
      setActive(idx);
      setVisible(true);
    }, 400);
  }, []);

  // Auto-advance every 7 seconds
  useEffect(() => {
    const id = setInterval(() => {
      setActive((prev) => {
        const next = (prev + 1) % testimonials.length;
        setVisible(false);
        setTimeout(() => { setActive(next); setVisible(true); }, 400);
        return prev; // keep prev until timeout fires
      });
    }, 7000);
    return () => clearInterval(id);
  }, []);

  const t = testimonials[active];

  return (
    <section id="testi" aria-labelledby="testi-quote">
      <div className="testi-bg" aria-hidden="true">&ldquo;</div>
      <div className="testi-orb" aria-hidden="true"></div>

      <div className="testi-wrap">
        <span className="testi-mark rv" aria-hidden="true">&ldquo;</span>

        <blockquote
          style={{
            opacity:    visible ? 1 : 0,
            transform:  visible ? 'translateY(0)' : 'translateY(12px)',
            transition: 'opacity .4s ease, transform .4s ease',
          }}
        >
          <p className="testi-q rv" id="testi-quote" style={{ transitionDelay: '.15s' }}>
            {t.words.map((w, i) => (
              <span className="tw-q" key={i}>{w} </span>
            ))}
          </p>
          <footer className="testi-by rv" style={{ transitionDelay: '.3s' }}>
            <cite>
              <strong style={{ color: 'var(--cream)', fontStyle: 'normal' }}>{t.cite}</strong>
              &nbsp;·&nbsp;{t.role}
            </cite>
          </footer>
        </blockquote>

        {/* Dot navigation */}
        <div className="testi-dots" role="tablist" aria-label="Testimonial navigation">
          {testimonials.map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === active}
              aria-label={`Testimonial ${i + 1}`}
              className={`testi-dot${i === active ? ' active' : ''}`}
              onClick={() => switchTo(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}