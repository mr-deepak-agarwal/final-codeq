import type { Metadata } from 'next';
import LegalLayout from '@/components/legal/LegalLayout';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description:
    'The terms and conditions governing your use of codeq.tech and engagement of codeq for web development, design, SEO, and software services.',
  alternates: { canonical: '/terms' },
  robots: { index: true, follow: true },
};

export default function TermsOfServicePage() {
  return (
    <LegalLayout title="Terms of Service" updated="15 June 2026">
      <p>
        These Terms of Service (&ldquo;Terms&rdquo;) govern your access to and use of
        codeq.tech (the &ldquo;Site&rdquo;) and any services provided by codeq
        (&ldquo;codeq&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;). By using the
        Site or engaging us for a project, you agree to these Terms.
      </p>

      <h2>1. Use of the Site</h2>
      <p>
        You may use the Site for lawful purposes only. You agree not to use the Site
        in any way that could damage, disable, or impair its functionality, or
        interfere with another party&rsquo;s use of it.
      </p>

      <h2>2. Services</h2>
      <p>
        codeq provides web design and development, AI-powered applications,
        full-stack systems, SEO and growth marketing, and related services. The
        specific scope, deliverables, timeline, and fees for any project are set out
        in a separate proposal or agreement between codeq and the client
        (&ldquo;Project Agreement&rdquo;). Where there is a conflict between these
        Terms and a Project Agreement, the Project Agreement prevails for that
        project.
      </p>

      <h2>3. Quotes and Payment</h2>
      <ul>
        <li>
          Quotes are based on the scope discussed at the time of proposal. Significant
          changes to scope may result in revised pricing or timelines, communicated
          before additional work begins.
        </li>
        <li>
          Payment terms (including any deposit, milestone payments, or final payment)
          are specified in the Project Agreement. Work may be paused if payments are
          not received as agreed.
        </li>
        <li>
          All fees are exclusive of applicable taxes unless stated otherwise.
        </li>
      </ul>

      <h2>4. Client Responsibilities</h2>
      <p>
        Clients agree to provide timely feedback, content, access credentials, and
        other materials reasonably required for codeq to complete a project. Delays
        in providing these may affect project timelines.
      </p>

      <h2>5. Intellectual Property</h2>
      <ul>
        <li>
          Upon full payment for a project, ownership of the final deliverables (code,
          designs, and content created specifically for the client) transfers to the
          client, unless otherwise agreed in writing.
        </li>
        <li>
          codeq retains the right to use general knowledge, methods, and reusable
          components developed during a project, and to display completed work in its
          portfolio unless the client requests otherwise in writing.
        </li>
        <li>
          Third-party tools, libraries, fonts, plugins, and frameworks remain subject
          to their own licences.
        </li>
      </ul>

      <h2>6. Confidentiality</h2>
      <p>
        Both parties agree to keep confidential any non-public business, technical,
        or financial information shared during a project, and to use it only for the
        purposes of that project.
      </p>

      <h2>7. Warranties and Disclaimers</h2>
      <p>
        We strive to deliver high-quality work and will address defects in
        deliverables reported within a reasonable period after handover, as further
        described in the Project Agreement. Except as expressly stated, services and
        the Site are provided &ldquo;as is&rdquo; without warranties of any kind, to
        the extent permitted by law.
      </p>

      <h2>8. Limitation of Liability</h2>
      <p>
        To the maximum extent permitted by law, codeq&rsquo;s total liability arising
        from or relating to any project or use of the Site shall not exceed the
        amount paid by the client for the relevant project. codeq shall not be liable
        for indirect, incidental, or consequential damages, including loss of
        revenue, data, or business opportunities.
      </p>

      <h2>9. Termination</h2>
      <p>
        Either party may terminate a project as set out in the relevant Project
        Agreement. Upon termination, the client is responsible for payment for work
        completed up to the termination date.
      </p>

      <h2>10. Governing Law</h2>
      <p>
        These Terms are governed by the laws of India. Any disputes arising under
        these Terms shall be subject to the jurisdiction of the courts of Jaipur,
        Rajasthan, India, unless otherwise agreed in writing for a specific project.
      </p>

      <h2>11. Changes to These Terms</h2>
      <p>
        We may update these Terms from time to time. The &ldquo;Last updated&rdquo;
        date at the top of this page reflects the most recent revision. Continued use
        of the Site after changes are posted constitutes acceptance of the updated
        Terms.
      </p>

      <h2>12. Contact Us</h2>
      <p>
        For questions about these Terms, contact us at{' '}
        <a href="mailto:hello@codeq.tech">hello@codeq.tech</a>.
      </p>
    </LegalLayout>
  );
}