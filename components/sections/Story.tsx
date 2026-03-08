export default function Story() {
  return (
    <section id="story" aria-label="Our philosophy">
      <div className="story-pin">
        <div className="story-orb orb-a" aria-hidden="true"></div>
        <div className="story-orb orb-b" aria-hidden="true"></div>
        <div className="story-text">
          {/* Each word gets a data-i attr for scroll-reveal JS */}
          {[
            { text: 'Most',       cls: '' },
            { text: 'agencies',   cls: '' },
            { text: 'ship',       cls: '' },
            { text: 'fast.',      cls: '' },
            { text: '\n',         cls: 'br' },
            { text: 'We',         cls: '' },
            { text: 'ship',       cls: '' },
            { text: 'right.',     cls: 'ac' },
            { text: '\n',         cls: 'br' },
            { text: "There's",    cls: 'ac' },
            { text: 'a',          cls: '' },
            { text: 'difference.', cls: 'ac' },
          ].map((w, i) =>
            w.cls === 'br' ? (
              <br key={i} />
            ) : (
              <span
                key={i}
                className={`tw${w.cls ? ' ' + w.cls : ''}`}
                data-i={i}
              >
                {w.text}
              </span>
            )
          )}
        </div>
      </div>
    </section>
  );
}
