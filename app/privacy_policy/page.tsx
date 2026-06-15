import type { Metadata } from 'next';
import LegalLayout from '@/components/legal/LegalLayout';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'How codeq collects, uses, and protects your personal information when you visit codeq.tech or work with us on a project.',
  alternates: { canonical: '/privacy' },
  robots: { index: true, follow: true },
};

export default function PrivacyPolicyPage() {
  return (
    <LegalLayout title="Privacy Policy" updated="15 June 2026">
      <p>
        codeq (&ldquo;codeq&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) operates
        codeq.tech (the &ldquo;Site&rdquo;). This Privacy Policy explains what information we
        collect, how we use it, and the choices you have. By using the Site or
        contacting us, you agree to the practices described here.
      </p>

      <h2>1. Information We Collect</h2>
      <p>We collect information in the following ways:</p>
      <ul>
        <li>
          <strong>Information you provide directly</strong> — such as your name, email
          address, company name, and project details when you submit a contact form,
          send us an email, or book a call.
        </li>
        <li>
          <strong>Automatically collected information</strong> — including your IP
          address, browser type, device information, pages visited, and referral
          source, gathered through cookies and analytics tools.
        </li>
        <li>
          <strong>Communications</strong> — records of emails, calls, and messages
          exchanged with us during a project or enquiry.
        </li>
      </ul>

      <h2>2. How We Use Your Information</h2>
      <p>We use the information we collect to:</p>
      <ul>
        <li>Respond to enquiries and provide quotes or proposals</li>
        <li>Deliver, manage, and support projects we are engaged for</li>
        <li>Improve the Site, our services, and user experience</li>
        <li>Understand how visitors find and use the Site (analytics)</li>
        <li>Send project-related communications and, where permitted, occasional updates</li>
        <li>Comply with legal obligations</li>
      </ul>

      <h2>3. Cookies and Analytics</h2>
      <p>
        The Site uses cookies and similar technologies, including Google Analytics, to
        understand how visitors use the Site and to improve performance. For details
        on the specific cookies used and how to manage your preferences, please see
        our <a href="/cookies">Cookie Policy</a>.
      </p>

      <h2>4. Sharing of Information</h2>
      <p>
        We do not sell your personal information. We may share information with:
      </p>
      <ul>
        <li>
          Trusted service providers who help us operate the Site or deliver projects
          (e.g. hosting providers, email and analytics platforms), bound by
          confidentiality obligations
        </li>
        <li>Authorities, where required by law or to protect our legal rights</li>
        <li>A successor entity in the event of a business transfer or restructuring</li>
      </ul>

      <h2>5. Data Retention</h2>
      <p>
        We retain personal information only for as long as necessary to fulfil the
        purposes outlined in this policy, including any legal, accounting, or
        reporting requirements. Project-related correspondence may be retained for
        the duration of an ongoing client relationship and a reasonable period
        afterwards.
      </p>

      <h2>6. Your Rights</h2>
      <p>
        Depending on your location, you may have rights to access, correct, delete,
        or restrict the use of your personal information, and to object to certain
        processing. To exercise any of these rights, contact us using the details
        below and we will respond within a reasonable timeframe.
      </p>

      <h2>7. Data Security</h2>
      <p>
        We take reasonable technical and organisational measures to protect your
        information against unauthorised access, loss, or misuse. However, no method
        of transmission or storage is completely secure, and we cannot guarantee
        absolute security.
      </p>

      <h2>8. International Visitors</h2>
      <p>
        codeq is based in India and serves clients worldwide. By using the Site or
        sharing information with us, you understand that your information may be
        processed in India or other locations where we or our service providers
        operate.
      </p>

      <h2>9. Children&rsquo;s Privacy</h2>
      <p>
        The Site is not directed at individuals under the age of 18, and we do not
        knowingly collect personal information from children.
      </p>

      <h2>10. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. The &ldquo;Last
        updated&rdquo; date at the top of this page reflects the most recent
        revision. Continued use of the Site after changes are posted constitutes
        acceptance of the updated policy.
      </p>

      <h2>11. Contact Us</h2>
      <p>
        If you have questions about this Privacy Policy or how we handle your
        information, contact us at{' '}
        <a href="mailto:hello@codeq.tech">hello@codeq.tech</a>.
      </p>
    </LegalLayout>
  );
}