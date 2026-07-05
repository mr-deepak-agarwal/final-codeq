'use client';

import s from './store.module.css';

export default function StartProjectButton({ label = 'Start a Project' }: { label?: string }) {
  return (
    <button
      type="button"
      className={s.btnFill}
      onClick={() => window.dispatchEvent(new Event('open-contact-modal'))}
    >
      <span>{label}</span> <span aria-hidden="true">→</span>
    </button>
  );
}
