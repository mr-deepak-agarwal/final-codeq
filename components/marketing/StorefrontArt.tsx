export default function StorefrontArt() {
  return (
    <svg
      viewBox="0 0 360 420"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%', height: 'auto', maxWidth: 360 }}
      role="img"
      aria-label="A clean, organised online store with catalog, cart, and UPI checkout"
    >
      <ellipse cx="180" cy="210" rx="150" ry="150" fill="#1B4D2F" opacity="0.06" />

      {/* browser / site frame */}
      <g transform="translate(30,36)">
        <rect x="0" y="0" width="300" height="348" rx="16" fill="#FFFFFF" stroke="#E4DECB" strokeWidth="1.5" />

        {/* header bar */}
        <rect x="0" y="0" width="300" height="40" rx="16" fill="#F3EFE4" />
        <rect x="0" y="24" width="300" height="16" fill="#F3EFE4" />
        <circle cx="22" cy="20" r="4" fill="#B8863B" opacity="0.7" />
        <circle cx="36" cy="20" r="4" fill="#1B4D2F" opacity="0.35" />
        <circle cx="50" cy="20" r="4" fill="#1B4D2F" opacity="0.2" />
        <text x="150" y="24" textAnchor="middle" fontFamily="var(--font-serif, serif)" fontSize="13" fill="#16211B">meera.store</text>

        {/* product grid */}
        {[
          { x: 20, y: 56, fill: '#1B4D2F' },
          { x: 116, y: 56, fill: '#4C7A5C' },
          { x: 212, y: 56, fill: '#4C7A5C' },
          { x: 20, y: 150, fill: '#4C7A5C' },
          { x: 116, y: 150, fill: '#1B4D2F' },
          { x: 212, y: 150, fill: '#4C7A5C' },
        ].map((c, i) => (
          <g key={i}>
            <rect x={c.x} y={c.y} width="68" height="68" rx="10" fill={c.fill} opacity="0.9" />
            <rect x={c.x} y={c.y + 76} width="48" height="7" rx="3.5" fill="#D8D1BB" />
            <rect x={c.x} y={c.y + 88} width="28" height="6" rx="3" fill="#1B4D2F" opacity="0.55" />
          </g>
        ))}

        {/* checkout bar */}
        <rect x="16" y="266" width="268" height="64" rx="14" fill="#16211B" />
        <text x="32" y="292" fontFamily="var(--font-sans, sans-serif)" fontWeight="700" fontSize="13" fill="#F3EFE4">Cart · ₹1,499</text>
        <text x="32" y="310" fontFamily="var(--font-mono, monospace)" fontSize="9.5" fill="#7FBF95">UPI · Cards · COD</text>
        <rect x="230" y="282" width="38" height="34" rx="17" fill="#1B4D2F" />
        <path d="M241 299 l5 5 l10 -11" stroke="#F3EFE4" strokeWidth="2.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </g>

      {/* floating order-confirmed badge */}
      <g transform="translate(210,10) rotate(-5)">
        <rect x="0" y="0" width="126" height="44" rx="22" fill="#FFFFFF" stroke="#1B4D2F" strokeWidth="1.5" />
        <circle cx="24" cy="22" r="9" fill="#1B4D2F" />
        <path d="M20 22 l3 3 l6 -7" stroke="#F3EFE4" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <text x="40" y="19" fontFamily="var(--font-sans, sans-serif)" fontWeight="700" fontSize="9.5" fill="#16211B">Order</text>
        <text x="40" y="32" fontFamily="var(--font-sans, sans-serif)" fontWeight="700" fontSize="9.5" fill="#16211B">Confirmed</text>
      </g>

      {/* floating google-found badge */}
      <g transform="translate(6,190) rotate(4)">
        <rect x="0" y="0" width="92" height="40" rx="20" fill="#FFFFFF" stroke="#B8863B" strokeWidth="1.5" />
        <text x="46" y="25" textAnchor="middle" fontFamily="var(--font-mono, monospace)" fontSize="9.5" fill="#8A6423">on Google</text>
      </g>
    </svg>
  );
}
