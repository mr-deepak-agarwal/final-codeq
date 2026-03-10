// Ticker.tsx
export default function Ticker() {
  const items = [
    'Web Design & Development',
    'AI-Powered Applications',
    'Full-Stack Systems',
    'Quality Is Our Standard',
    'Next.js · React · TypeScript',
    'Shipped On Time. Always.',
    'The Q Stands for Quality',
  ];

  return (
    <div className="ticker" aria-label="codeq services ticker" role="marquee">
      <div className="t-track" aria-hidden="true">
        {[...items, ...items].map((item, i) => (
          <span className="ti" key={i}>
            <span className="td"></span>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
