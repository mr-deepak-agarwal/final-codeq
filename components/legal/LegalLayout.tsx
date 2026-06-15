import type { ReactNode } from 'react';
import Link from 'next/link';

interface LegalLayoutProps {
  title: string;
  updated: string;
  children: ReactNode;
}

export default function LegalLayout({ title, updated, children }: LegalLayoutProps) {
  return (
    <>
      {/* ── Minimal top bar ── */}
      <header style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        borderBottom: '1px solid rgba(240,237,228,.07)',
        background: 'rgba(7,7,10,.85)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 clamp(20px, 5vw, 80px)',
        height: '64px',
      }}>
        <Link href="/" style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          textDecoration: 'none',
        }}>
          <div style={{
            width: '32px',
            height: '32px',
            background: 'var(--green)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: 'var(--font-serif, serif)',
            fontSize: '18px',
            fontWeight: 300,
            color: 'var(--cream)',
            flexShrink: 0,
          }}>
            Q
          </div>
          <div style={{ lineHeight: 1.1 }}>
            <span style={{
              fontFamily: 'var(--font-sans, sans-serif)',
              fontWeight: 700,
              fontSize: '14px',
              color: 'var(--cream)',
              letterSpacing: '.06em',
              textTransform: 'uppercase',
            }}>
              codeq
            </span>
            <span style={{
              fontFamily: 'var(--font-sans, sans-serif)',
              fontWeight: 400,
              fontSize: '14px',
              color: 'var(--grey)',
            }}>
              .tech
            </span>
          </div>
        </Link>

        <Link href="/" style={{
          fontFamily: 'var(--font-sans, sans-serif)',
          fontSize: '11px',
          fontWeight: 600,
          letterSpacing: '.12em',
          textTransform: 'uppercase',
          color: 'var(--grey)',
          textDecoration: 'none',
          transition: 'color .2s',
        }}
          onMouseEnter={e => (e.currentTarget.style.color = 'var(--cream)')}
          onMouseLeave={e => (e.currentTarget.style.color = 'var(--grey)')}
        >
          ← Back to site
        </Link>
      </header>

      {/* ── Page body ── */}
      <main style={{
        minHeight: '100vh',
        background: 'var(--dark)',
        color: 'var(--cream)',
        paddingTop: '64px',
      }}>
        {/* Hero strip */}
        <div style={{
          borderBottom: '1px solid rgba(240,237,228,.07)',
          padding: 'clamp(48px, 8vw, 96px) clamp(20px, 5vw, 80px) clamp(32px, 5vw, 56px)',
        }}>
          <p style={{
            fontFamily: 'var(--font-mono, monospace)',
            fontSize: '10px',
            fontWeight: 300,
            letterSpacing: '.2em',
            textTransform: 'uppercase',
            color: 'var(--grey)',
            marginBottom: '16px',
          }}>
            Legal
          </p>
          <h1 style={{
            fontFamily: 'var(--font-serif, serif)',
            fontSize: 'clamp(36px, 6vw, 72px)',
            fontWeight: 300,
            lineHeight: 1.05,
            letterSpacing: '-.02em',
            color: 'var(--cream)',
            marginBottom: '20px',
          }}>
            {title}
          </h1>
          <p style={{
            fontFamily: 'var(--font-mono, monospace)',
            fontSize: '11px',
            fontWeight: 300,
            letterSpacing: '.12em',
            color: 'var(--grey)',
          }}>
            Last updated: {updated}
          </p>
        </div>

        {/* Content */}
        <div style={{
          maxWidth: '720px',
          margin: '0 auto',
          padding: 'clamp(40px, 6vw, 80px) clamp(20px, 5vw, 80px)',
        }}>
          <div className="legal-content">
            {children}
          </div>
        </div>

        {/* Footer strip */}
        <footer style={{
          borderTop: '1px solid rgba(240,237,228,.07)',
          padding: 'clamp(24px, 4vw, 40px) clamp(20px, 5vw, 80px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '12px',
        }}>
          <p style={{
            fontFamily: 'var(--font-mono, monospace)',
            fontSize: '10px',
            fontWeight: 300,
            letterSpacing: '.12em',
            color: 'var(--grey)',
          }}>
            © {new Date().getFullYear()} codeq. All rights reserved.
          </p>
          <nav style={{ display: 'flex', gap: '24px' }} aria-label="Legal pages">
            {[
              { href: '/privacy_policy', label: 'Privacy' },
              { href: '/terms_of_service', label: 'Terms' },
              { href: '/cookie_policy', label: 'Cookies' },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                style={{
                  fontFamily: 'var(--font-mono, monospace)',
                  fontSize: '10px',
                  fontWeight: 300,
                  letterSpacing: '.12em',
                  textTransform: 'uppercase',
                  color: 'var(--grey)',
                  textDecoration: 'none',
                  transition: 'color .2s',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--cream)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--grey)')}
              >
                {label}
              </Link>
            ))}
          </nav>
        </footer>
      </main>

      {/* ── Prose styles scoped to .legal-content ── */}
      <style>{`
        .legal-content p,
        .legal-content li {
          font-family: var(--font-sans, sans-serif);
          font-size: clamp(14px, 1.6vw, 16px);
          font-weight: 400;
          line-height: 1.75;
          color: rgba(240,237,228,.75);
          margin-bottom: 1em;
        }

        .legal-content h2 {
          font-family: var(--font-serif, serif);
          font-size: clamp(20px, 2.5vw, 28px);
          font-weight: 300;
          letter-spacing: -.01em;
          color: var(--cream);
          margin-top: 2.5em;
          margin-bottom: .6em;
          padding-bottom: .4em;
          border-bottom: 1px solid rgba(240,237,228,.07);
        }

        .legal-content h3 {
          font-family: var(--font-sans, sans-serif);
          font-size: clamp(13px, 1.4vw, 15px);
          font-weight: 600;
          letter-spacing: .08em;
          text-transform: uppercase;
          color: var(--cream);
          margin-top: 1.8em;
          margin-bottom: .5em;
        }

        .legal-content ul {
          padding-left: 1.25em;
          margin-bottom: 1em;
        }

        .legal-content li {
          margin-bottom: .4em;
        }

        .legal-content li::marker {
          color: var(--gl);
        }

        .legal-content strong {
          font-weight: 600;
          color: var(--cream);
        }

        .legal-content a {
          color: var(--gl);
          text-decoration: underline;
          text-decoration-color: rgba(82,201,122,.35);
          text-underline-offset: 3px;
          transition: text-decoration-color .2s, color .2s;
        }

        .legal-content a:hover {
          color: #7ddfaa;
          text-decoration-color: rgba(82,201,122,.7);
        }

        .legal-content > *:first-child {
          margin-top: 0;
        }
      `}</style>
    </>
  );
}