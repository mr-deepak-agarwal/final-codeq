'use client';

import type { ReactNode } from 'react';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/sections/Footer';
import styles from '@/app/marketing.module.css';

type Crumb = { label: string; href?: string };

export function StartProjectButton({ label = 'Start a Project' }: { label?: string }) {
  return (
    <button
      type="button"
      className={styles.btnFill}
      onClick={() => window.dispatchEvent(new Event('open-contact-modal'))}
    >
      <span>{label}</span> <span aria-hidden="true">→</span>
    </button>
  );
}

export default function PageShell({
  active,
  breadcrumbs,
  eyebrow,
  title,
  lede,
  visual,
  children,
}: {
  active?: string;
  breadcrumbs: Crumb[];
  eyebrow: string;
  title: ReactNode;
  lede: string;
  visual?: ReactNode;
  children: ReactNode;
}) {
  return (
    <div style={{ cursor: 'auto' }}>
      <Navbar />
      <main className={styles.main} id="main-content">
        <div className={visual ? `${styles.hero} ${styles.heroSplit}` : styles.hero}>
          <div>
            <nav className={styles.breadcrumb} aria-label="Breadcrumb">
              {breadcrumbs.map((c, i) => (
                <span key={c.label}>
                  {c.href ? <a href={c.href}>{c.label}</a> : <span>{c.label}</span>}
                  {i < breadcrumbs.length - 1 && <span> / </span>}
                </span>
              ))}
            </nav>
            <p className={styles.eyebrow}>{eyebrow}</p>
            <h1 className={styles.h1}>{title}</h1>
            <p className={styles.lede}>{lede}</p>
          </div>
          {visual && <div className={styles.heroVisual} style={{ minWidth: 0 }}>{visual}</div>}
        </div>
        {children}
      </main>
      <Footer />
    </div>
  );
}
