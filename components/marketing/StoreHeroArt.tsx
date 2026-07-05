export default function StoreHeroArt() {
  return (
    <svg viewBox="0 0 420 480" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: 'auto', maxWidth: 420 }} role="img" aria-label="A messy DM inbox turning into a clean, organised online store">
      <defs>
        <linearGradient id="screenGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0D0D11" />
          <stop offset="100%" stopColor="#07070A" />
        </linearGradient>
      </defs>

      {/* ambient glow */}
      <ellipse cx="230" cy="230" rx="180" ry="180" fill="#1B4D2F" opacity="0.25" />

      {/* torn DM note, tilted, sitting behind the phone */}
      <g transform="translate(18,54) rotate(-7)">
        <rect x="0" y="0" width="150" height="118" rx="10" fill="#111318" stroke="rgba(240,237,228,.14)" />
        <circle cx="22" cy="24" r="9" fill="rgba(240,237,228,.14)" />
        <rect x="38" y="18" width="80" height="7" rx="3.5" fill="rgba(240,237,228,.20)" />
        <rect x="38" y="30" width="55" height="6" rx="3" fill="rgba(240,237,228,.12)" />
        <rect x="14" y="50" width="122" height="16" rx="8" fill="rgba(240,237,228,.08)" />
        <rect x="14" y="72" width="90" height="16" rx="8" fill="rgba(240,237,228,.08)" />
        <text x="20" y="63" fontFamily="var(--font-sans, sans-serif)" fontSize="9" fill="rgba(240,237,228,.55)">price pls? 🙏</text>
        <text x="20" y="85" fontFamily="var(--font-sans, sans-serif)" fontSize="9" fill="rgba(240,237,228,.55)">is this available?</text>
        <line x1="10" y1="10" x2="140" y2="108" stroke="#E2664A" strokeWidth="2.5" opacity="0.75" />
        <line x1="140" y1="10" x2="10" y2="108" stroke="#E2664A" strokeWidth="2.5" opacity="0.75" />
      </g>

      {/* phone frame */}
      <g transform="translate(120,20)">
        <rect x="0" y="0" width="220" height="420" rx="30" fill="#111318" stroke="rgba(240,237,228,.15)" strokeWidth="2" />
        <rect x="8" y="10" width="204" height="400" rx="22" fill="url(#screenGrad)" />

        {/* status/shop header */}
        <circle cx="30" cy="34" r="4" fill="#52C97A" />
        <text x="40" y="38" fontFamily="var(--font-serif, serif)" fontSize="15" fill="#F0EDE4">meera.store</text>

        {/* product grid */}
        {[
          { x: 20, y: 56, fill: '#1B4D2F' },
          { x: 118, y: 56, fill: '#2E7D4F' },
          { x: 20, y: 150, fill: '#2E7D4F' },
          { x: 118, y: 150, fill: '#1B4D2F' },
        ].map((c, i) => (
          <g key={i}>
            <rect x={c.x} y={c.y} width="82" height="82" rx="10" fill={c.fill} />
            <rect x={c.x} y={c.y + 90} width="60" height="8" rx="4" fill="rgba(240,237,228,.7)" />
            <rect x={c.x} y={c.y + 103} width="34" height="7" rx="3.5" fill="#52C97A" />
          </g>
        ))}

        {/* checkout bar */}
        <rect x="16" y="330" width="188" height="60" rx="14" fill="#F0EDE4" />
        <text x="30" y="356" fontFamily="var(--font-sans, sans-serif)" fontWeight="700" fontSize="12" fill="#07070A">View Cart · ₹1,499</text>
        <text x="30" y="374" fontFamily="var(--font-mono, monospace)" fontSize="9" fill="#1B4D2F">UPI · Cards · COD</text>
        <rect x="160" y="342" width="34" height="34" rx="17" fill="#1B4D2F" />
        <path d="M172 359 l5 5 l9 -11" stroke="#52C97A" strokeWidth="2.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </g>

      {/* floating confirmation badge */}
      <g transform="translate(300,80) rotate(6)">
        <rect x="0" y="0" width="118" height="46" rx="23" fill="#0D2818" stroke="#52C97A" strokeWidth="1.5" />
        <circle cx="24" cy="23" r="9" fill="#52C97A" />
        <path d="M20 23 l3 3 l6 -7" stroke="#07070A" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <text x="40" y="20" fontFamily="var(--font-sans, sans-serif)" fontWeight="700" fontSize="9.5" fill="#F0EDE4">Order</text>
        <text x="40" y="33" fontFamily="var(--font-sans, sans-serif)" fontWeight="700" fontSize="9.5" fill="#F0EDE4">Confirmed</text>
      </g>

      {/* arrow connecting chaos -> store */}
      <g transform="translate(150,250)">
        <path d="M0 0 C 10 -18, -6 -30, 8 -42" stroke="#7A7870" strokeWidth="1.6" fill="none" strokeDasharray="3 5" opacity="0.6" />
      </g>
    </svg>
  );
}
