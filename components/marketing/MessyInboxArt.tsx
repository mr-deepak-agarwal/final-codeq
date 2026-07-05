export default function MessyInboxArt() {
  return (
    <svg
      viewBox="0 0 360 420"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%', height: 'auto', maxWidth: 360 }}
      role="img"
      aria-label="Scattered screenshots and notes representing orders buried in DMs"
    >
      {/* soft ambient shape */}
      <ellipse cx="180" cy="210" rx="150" ry="150" fill="#1B4D2F" opacity="0.06" />

      {/* note 1 — behind, tilted left */}
      <g transform="translate(38,52) rotate(-9)">
        <rect x="0" y="0" width="168" height="112" rx="12" fill="#FFFFFF" stroke="#E4DECB" strokeWidth="1.5" />
        <circle cx="24" cy="26" r="10" fill="#E4DECB" />
        <rect x="42" y="20" width="72" height="7" rx="3.5" fill="#D8D1BB" />
        <rect x="42" y="32" width="50" height="6" rx="3" fill="#E4DECB" />
        <rect x="16" y="54" width="136" height="14" rx="7" fill="#F3EFE4" />
        <rect x="16" y="74" width="98" height="14" rx="7" fill="#F3EFE4" />
        <text x="20" y="65" fontFamily="var(--font-sans, sans-serif)" fontSize="9" fill="#8A8674">available in blue?</text>
        <text x="20" y="85" fontFamily="var(--font-sans, sans-serif)" fontSize="9" fill="#8A8674">price for 2 pcs?</text>
      </g>

      {/* note 2 — front, tilted right, struck through */}
      <g transform="translate(150,140) rotate(7)">
        <rect x="0" y="0" width="172" height="126" rx="12" fill="#FFFFFF" stroke="#E4DECB" strokeWidth="1.5" />
        <circle cx="24" cy="27" r="10" fill="#1B4D2F" opacity="0.15" />
        <rect x="42" y="21" width="76" height="7" rx="3.5" fill="#D8D1BB" />
        <rect x="42" y="33" width="48" height="6" rx="3" fill="#E4DECB" />
        <rect x="16" y="56" width="140" height="16" rx="8" fill="#F3EFE4" />
        <text x="24" y="68" fontFamily="var(--font-sans, sans-serif)" fontWeight="700" fontSize="11" fill="#4A4738">₹1,299 · paid?</text>
        <rect x="16" y="82" width="90" height="14" rx="7" fill="#F3EFE4" />
        <text x="24" y="92" fontFamily="var(--font-sans, sans-serif)" fontSize="9" fill="#8A8674">screenshot sent 🙏</text>
        <line x1="12" y1="14" x2="160" y2="112" stroke="#B8863B" strokeWidth="2.25" opacity="0.7" />
        <line x1="160" y1="14" x2="12" y2="112" stroke="#B8863B" strokeWidth="2.25" opacity="0.7" />
      </g>

      {/* note 3 — small, top right, a lonely question mark */}
      <g transform="translate(238,44) rotate(11)">
        <rect x="0" y="0" width="86" height="72" rx="10" fill="#FFFFFF" stroke="#E4DECB" strokeWidth="1.5" />
        <text x="43" y="48" fontFamily="var(--font-serif, serif)" fontSize="34" fontWeight="300" fill="#B8863B" textAnchor="middle">?</text>
      </g>

      {/* notebook stack, bottom */}
      <g transform="translate(60,300)">
        <rect x="0" y="10" width="150" height="86" rx="8" fill="#EFE9D8" />
        <rect x="8" y="0" width="150" height="86" rx="8" fill="#FFFFFF" stroke="#E4DECB" strokeWidth="1.5" />
        <line x1="24" y1="18" x2="140" y2="18" stroke="#E4DECB" strokeWidth="1.5" />
        <line x1="24" y1="34" x2="120" y2="34" stroke="#E4DECB" strokeWidth="1.5" />
        <line x1="24" y1="50" x2="132" y2="50" stroke="#E4DECB" strokeWidth="1.5" />
        <line x1="24" y1="66" x2="96" y2="66" stroke="#E4DECB" strokeWidth="1.5" />
        <path d="M100 48 q10 -10 20 0" stroke="#1B4D2F" strokeWidth="1.6" fill="none" opacity="0.5" />
      </g>

      {/* dashed trail suggesting things falling out of order */}
      <path d="M210 260 C 230 280, 240 300, 220 320" stroke="#8A8674" strokeWidth="1.5" fill="none" strokeDasharray="2 6" opacity="0.5" />
    </svg>
  );
}
