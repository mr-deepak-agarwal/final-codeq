import type { Metadata } from 'next';
import LegalLayout from '@/components/legal/LegalLayout';

export const metadata: Metadata = {
  title: 'Cookie Policy',
  description:
    'How codeq uses cookies and similar technologies on codeq.tech, what data they collect, and how you can manage your preferences.',
  alternates: { canonical: '/cookie_policy' },
  robots: { index: true, follow: true },
};

export default function CookiePolicyPage() {
  return (
    <LegalLayout title="Cookie Policy" updated="15 June 2026">
      <p>
        This Cookie Policy explains how codeq (&ldquo;codeq&rdquo;, &ldquo;we&rdquo;,
        &ldquo;us&rdquo;, or &ldquo;our&rdquo;) uses cookies and similar tracking
        technologies on codeq.tech (the &ldquo;Site&rdquo;). It should be read
        alongside our <a href="/privacy_policy">Privacy Policy</a>, which covers how
        we handle your personal information more broadly.
      </p>

      <h2>1. What Are Cookies?</h2>
      <p>
        Cookies are small text files placed on your device when you visit a website.
        They are widely used to make websites work efficiently, remember your
        preferences, and provide information to the site owner. Similar technologies
        include pixels, local storage, and session storage, which serve comparable
        purposes.
      </p>

      <h2>2. Cookies We Use</h2>
      <p>
        The Site uses the following categories of cookies:
      </p>

      <h3>Essential cookies</h3>
      <p>
        These cookies are necessary for the Site to function and cannot be switched
        off. They do not store any personally identifiable information. Examples
        include cookies that remember your progress through a form or maintain basic
        session state.
      </p>

      <h3>Analytics cookies</h3>
      <p>
        We use Google Analytics 4 (GA4) to understand how visitors interact with the
        Site — for example, which pages are visited most often, how long visitors
        stay, and where they arrive from. This helps us improve the Site and our
        services. GA4 sets the following cookies:
      </p>
      <ul>
        <li>
          <strong>_ga</strong> — Distinguishes unique users. Expires after 2 years.
        </li>
        <li>
          <strong>_ga_[ID]</strong> — Stores and counts page views for a specific
          property. Expires after 2 years.
        </li>
        <li>
          <strong>_gid</strong> — Distinguishes users. Expires after 24 hours.
        </li>
        <li>
          <strong>_gat</strong> — Used to throttle request rate. Expires after
          1 minute.
        </li>
      </ul>
      <p>
        Analytics data is aggregated and anonymised where possible. We do not use
        this data to identify you personally. For more information on how Google
        processes this data, see{' '}
        <a
          href="https://policies.google.com/privacy"
          target="_blank"
          rel="noopener noreferrer"
        >
          Google&rsquo;s Privacy Policy
        </a>
        .
      </p>

      <h3>Performance cookies</h3>
      <p>
        The Site uses performance-related browser APIs (such as the Performance
        Observer) to monitor page load times and Core Web Vitals. These operate
        in-memory and do not set persistent cookies.
      </p>

      <h3>Third-party cookies</h3>
      <p>
        If you use the &ldquo;Book a 30-min Call&rdquo; link, you will be directed
        to Calendly (calendly.com), which sets its own cookies governed by{' '}
        <a
          href="https://calendly.com/privacy"
          target="_blank"
          rel="noopener noreferrer"
        >
          Calendly&rsquo;s Privacy Policy
        </a>
        . We do not control third-party cookies set on external sites.
      </p>

      <h2>3. What We Do Not Do</h2>
      <ul>
        <li>We do not use cookies to serve advertising or retargeting campaigns.</li>
        <li>We do not sell data collected via cookies to third parties.</li>
        <li>
          We do not use cookies to build profiles for cross-site tracking beyond
          what Google Analytics collects for aggregate site analytics.
        </li>
      </ul>

      <h2>4. Managing Your Cookie Preferences</h2>
      <p>
        You can control and manage cookies in several ways:
      </p>
      <ul>
        <li>
          <strong>Browser settings</strong> — Most browsers allow you to block or
          delete cookies through their settings menu. Blocking all cookies may affect
          how some parts of the Site function.
        </li>
        <li>
          <strong>Google Analytics opt-out</strong> — You can prevent GA4 from
          collecting your data by installing the{' '}
          <a
            href="https://tools.google.com/dlpage/gaoptout"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Analytics Opt-out Browser Add-on
          </a>
          .
        </li>
        <li>
          <strong>Do Not Track</strong> — Some browsers send a &ldquo;Do Not
          Track&rdquo; signal. We respect this signal where technically feasible.
        </li>
      </ul>

      <h2>5. Changes to This Policy</h2>
      <p>
        We may update this Cookie Policy from time to time to reflect changes in the
        technologies we use or applicable regulations. The &ldquo;Last
        updated&rdquo; date at the top of this page reflects the most recent
        revision. Continued use of the Site after changes are posted constitutes
        acceptance of the updated policy.
      </p>

      <h2>6. Contact Us</h2>
      <p>
        If you have questions about how we use cookies, contact us at{' '}
        <a href="mailto:hello@codeq.tech">hello@codeq.tech</a>.
      </p>
    </LegalLayout>
  );
}