'use client';

import { useState, useEffect, useCallback } from 'react';

const FORM_ENDPOINT = 'https://formspree.io/f/xwvjwkle';

export default function ContactModal() {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const close = useCallback(() => {
    setOpen(false);
    setStatus('idle');
  }, []);

  // Listen for global open events (triggered by "Start a Project" buttons)
  useEffect(() => {
    const handler = () => setOpen(true);
    window.addEventListener('open-contact-modal', handler);
    return () => window.removeEventListener('open-contact-modal', handler);
  }, []);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, close]);

  if (!open) return null;

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });

      if (res.ok) {
        setStatus('sent');
        // Fire GA4 conversion event
        if (typeof window !== 'undefined' && (window as any).gtag) {
          (window as any).gtag('event', 'generate_lead', {
            event_category: 'engagement',
            event_label: 'contact_form_submit',
          });
        }
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  return (
    <div className="cm-overlay" role="dialog" aria-modal="true" aria-labelledby="cm-title" onClick={close}>
      <div className="cm-panel" onClick={(e) => e.stopPropagation()}>
        <button className="cm-close" onClick={close} aria-label="Close contact form">
          ×
        </button>

        {status === 'sent' ? (
          <div className="cm-success">
            <h3 id="cm-title">Message sent.</h3>
            <p>Thanks for reaching out — we&apos;ll get back to you within 1 business day.</p>
            <button className="cm-btn" onClick={close}>Close</button>
          </div>
        ) : (
          <>
            <h3 id="cm-title" className="cm-title">Start a Project</h3>
            <p className="cm-sub">Tell us a bit about what you&apos;re building. We typically reply within 24 hours.</p>

            <form className="cm-form" onSubmit={handleSubmit}>
              <div className="cm-row">
                <label htmlFor="cm-name">Name</label>
                <input id="cm-name" name="name" type="text" required placeholder="Your name" />
              </div>

              <div className="cm-row">
                <label htmlFor="cm-email">Email</label>
                <input id="cm-email" name="email" type="email" required placeholder="you@company.com" />
              </div>

              <div className="cm-row">
                <label htmlFor="cm-company">Company (optional)</label>
                <input id="cm-company" name="company" type="text" placeholder="Company name" />
              </div>

              <div className="cm-row">
                <label htmlFor="cm-budget">Budget range</label>
                <select id="cm-budget" name="budget" defaultValue="">
                  <option value="" disabled>Select a range</option>
                  <option value="< $2k">Under $2,000</option>
                  <option value="$2k - $5k">$2,000 – $5,000</option>
                  <option value="$5k - $15k">$5,000 – $15,000</option>
                  <option value="$15k+">$15,000+</option>
                  <option value="Not sure yet">Not sure yet</option>
                </select>
              </div>

              <div className="cm-row">
                <label htmlFor="cm-message">Project details</label>
                <textarea
                  id="cm-message"
                  name="message"
                  required
                  rows={4}
                  placeholder="What are you looking to build?"
                />
              </div>

              {/* Honeypot field for spam protection */}
              <input type="text" name="_gotcha" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

              <button type="submit" className="cm-btn cm-submit" disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending…' : 'Send Message →'}
              </button>

              {status === 'error' && (
                <p className="cm-error">Something went wrong. Please try again or email hello@codeq.tech directly.</p>
              )}
            </form>
          </>
        )}
      </div>
    </div>
  );
}
