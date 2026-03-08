const stats = [
  { value: 40,  suffix: '+',  label: 'Projects Shipped' },
  { value: 28,  suffix: '',   label: 'US Clients' },
  { value: 6,   suffix: '+',  label: 'Years Deep' },
  { value: 100, suffix: '%',  label: 'On-Time Rate' },
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
              0
            </span>
            <span className="nl">{stat.label}</span>
            <div className="nc-bar" aria-hidden="true"></div>
          </div>
        ))}
      </div>
    </section>
  );
}
