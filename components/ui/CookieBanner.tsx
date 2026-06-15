'use client';

import { useEffect, useState } from 'react';

/* ─── helpers ─────────────────────────────────────────────── */
const COOKIE_KEY = 'codeq_cookie_consent';

function getConsent(): 'granted' | 'denied' | null {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem(COOKIE_KEY) as 'granted' | 'denied' | null;
}

/** Push a GA4 consent update. Works whether GA4 has loaded yet or not
 *  because we pre-initialise dataLayer with the default 'denied' state
 *  in layout.tsx before the GA4 script loads.
 */
function pushConsent(state: 'granted' | 'denied') {
  if (typeof window === 'undefined') return;
  (window as any).gtag?.('consent', 'update', {
    analytics_storage: state,
    ad_storage:        state,
  });
}

/* ─── component ───────────────────────────────────────────── */
export default function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Show banner only if user hasn't decided yet
    if (getConsent() === null) setShow(true);
  }, []);

  function accept() {
    localStorage.setItem(COOKIE_KEY, 'granted');
    pushConsent('granted');
    setShow(false);
  }

  function decline() {
    localStorage.setItem(COOKIE_KEY, 'denied');
    pushConsent('denied');
    setShow(false);
  }

  if (!show) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent"
      style={{
        position:        'fixed',
        bottom:          '24px',
        left:            '50%',
        transform:       'translateX(-50%)',
        zIndex:          9999,
        width:           'min(640px, calc(100vw - 32px))',
        background:      'rgba(14,14,18,0.92)',
        backdropFilter:  'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        border:          '1px solid rgba(240,237,228,0.1)',
        borderRadius:    '12px',
        padding:         '20px 24px',
        display:         'flex',
        gap:             '20px',
        alignItems:      'center',
        flexWrap:        'wrap',
        boxShadow:       '0 8px 40px rgba(0,0,0,0.5)',
        fontFamily:      'var(--font-sans, sans-serif)',
      }}
    >
      {/* Text */}
      <p style={{
        flex:       '1 1 260px',
        margin:     0,
        fontSize:   '13px',
        lineHeight: '1.6',
        color:      'rgba(240,237,228,0.75)',
      }}>
        We use cookies to understand how visitors interact with our site (Google
        Analytics). No advertising cookies.{' '}
        <a
          href="/cookie_policy"
          style={{ color: 'rgba(240,237,228,0.9)', textDecoration: 'underline' }}
        >
          Cookie Policy
        </a>
      </p>

      {/* Actions */}
      <div style={{ display: 'flex', gap: '10px', flexShrink: 0 }}>
        <button
          onClick={decline}
          style={{
            padding:      '8px 18px',
            borderRadius: '6px',
            border:       '1px solid rgba(240,237,228,0.2)',
            background:   'transparent',
            color:        'rgba(240,237,228,0.6)',
            fontSize:     '13px',
            cursor:       'pointer',
            fontFamily:   'inherit',
          }}
        >
          Decline
        </button>
        <button
          onClick={accept}
          style={{
            padding:      '8px 18px',
            borderRadius: '6px',
            border:       'none',
            background:   '#52C97A',
            color:        '#07070A',
            fontSize:     '13px',
            fontWeight:   600,
            cursor:       'pointer',
            fontFamily:   'inherit',
          }}
        >
          Accept
        </button>
      </div>
    </div>
  );
}