const stats = [
  { value: 50,  suffix: '+',  label: 'Projects Shipped' },
  { value: 10,  suffix: '+',  label: 'Years in Business' },
  { value: 100, suffix: '%',  label: 'Projects Delivered' },
  { value: 4,   suffix: '',   label: 'Core Services' },
];

export default function Numbers() {
  return (
    <section id="numbers" aria-label="Our numbers">
      <div className="num-grid">
        {stats.map((stat) => (
          <div className="nc" key={stat.label}>
            <div className="nc-rip" aria-hidden="true"></div>
            <span
              className="nv"
              data-t={stat.value}
              data-s={stat.suffix}
              aria-label={`${stat.value}${stat.suffix} ${stat.label}`}
            >
              {/* SEO: render real value — JS animates from 0 on scroll */}
              {stat.value}{stat.suffix}
            </span>
            <span className="nl">{stat.label}</span>
            <div className="nc-bar" aria-hidden="true"></div>
          </div>
        ))}
      </div>
    </section>
  );
}