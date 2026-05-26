import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Privacy Policy for directive-8020.com — how we collect, use, and protect your data.',
  openGraph: {
    title: 'Privacy Policy | Directive 8020 Guide',
    description:
      'Our privacy policy covering Google Analytics, Umami analytics, cookies, and affiliate disclosures.',
    type: 'website',
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-slate-900 border-b border-slate-800">
        <div className="relative max-w-4xl mx-auto px-4 py-16 md:py-20 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">
            Privacy Policy
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Last updated: May 24, 2026
          </p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-12 mdx-content">
        <h2>1. Information We Collect</h2>

        <h3>Automatically Collected Data</h3>
        <p>
          When you visit directive-8020.com, we automatically collect certain
          information through analytics services:
        </p>
        <ul>
          <li>
            <strong>Google Analytics (GA4):</strong> We use Google Analytics to
            understand how visitors use our site. This service collects
            information including your IP address, browser type, device
            information, pages visited, time spent on pages, and referring
            URLs. Google Analytics uses cookies for this purpose. You can opt
            out of Google Analytics tracking by installing the{' '}
            <a
              href="https://tools.google.com/dlpage/gaoptout"
              className="text-violet-400 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Analytics Opt-out Browser Add-on
            </a>
            .
          </li>
          <li>
            <strong>Umami Analytics:</strong> We may also use Umami, a
            privacy-focused analytics service that does not use cookies and
            does not collect personal data. Umami collects anonymized page
            view data including referrer, browser type, and device type.
          </li>
        </ul>

        <h3>Data We Do NOT Collect</h3>
        <p>
          directive-8020.com does not have user accounts, comment sections,
          or contact forms that collect personal information. We do not
          collect names, email addresses, or any personally identifiable
          information.
        </p>

        <h2>2. Cookies</h2>
        <p>
          Google Analytics places first-party cookies on your browser to
          distinguish unique users and track session data. These cookies do
          not contain personally identifiable information. You can disable
          cookies in your browser settings at any time. Umami Analytics does
          not use cookies.
        </p>

        <h2>3. Third-Party Services</h2>
        <p>
          We use the following third-party services that may collect data
          according to their own privacy policies:
        </p>
        <ul>
          <li>
            <strong>Google Analytics</strong> —{' '}
            <a
              href="https://policies.google.com/privacy"
              className="text-violet-400 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Privacy Policy
            </a>
          </li>
          <li>
            <strong>Cloudflare Pages</strong> (hosting) —{' '}
            <a
              href="https://www.cloudflare.com/privacypolicy/"
              className="text-violet-400 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Cloudflare Privacy Policy
            </a>
          </li>
          <li>
            <strong>GitHub</strong> (code hosting) —{' '}
            <a
              href="https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement"
              className="text-violet-400 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub Privacy Statement
            </a>
          </li>
        </ul>

        <h2>4. Affiliate Disclosure</h2>
        <p>
          directive-8020.com may participate in affiliate marketing programs.
          This means we may earn a commission if you click on certain links
          and make a purchase. Affiliate links do not affect the price you
          pay. We only recommend products or services we believe provide
          value to our readers.
        </p>

        <h2>5. Advertising</h2>
        <p>
          We may display advertisements on directive-8020.com through Google
          AdSense or similar advertising networks. These networks may use
          cookies to serve personalized ads based on your browsing history.
          You can opt out of personalized advertising by visiting{' '}
          <a
            href="https://optout.aboutads.info/"
            className="text-violet-400 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            YourAdChoices
          </a>
          .
        </p>

        <h2>6. Data Retention</h2>
        <p>
          Analytics data is retained according to each service&apos;s
          retention policy. Google Analytics data is retained for 14 months
          by default. We do not maintain separate databases of user
          information.
        </p>

        <h2>7. Children&apos;s Privacy</h2>
        <p>
          directive-8020.com is a video game strategy guide and is not
          directed at children under 13. We do not knowingly collect
          personal information from children. If you believe we have
          inadvertently collected such information, please contact us and we
          will delete it promptly.
        </p>

        <h2>8. Your Rights</h2>
        <p>
          Depending on your jurisdiction (such as under GDPR in the EU/UK or
          CCPA in California), you may have rights regarding your personal
          data including the right to access, delete, or opt out of data
          collection. Since we collect minimal data through third-party
          analytics, most of these rights can be exercised by:
        </p>
        <ul>
          <li>
            Installing the Google Analytics opt-out browser add-on
          </li>
          <li>
            Disabling cookies in your browser settings
          </li>
          <li>
            Using your browser&apos;s Do Not Track setting
          </li>
        </ul>

        <h2>9. Changes to This Policy</h2>
        <p>
          We may update this privacy policy from time to time. Changes will
          be posted on this page with an updated date. We encourage you to
          review this policy periodically.
        </p>

        <h2>10. Contact</h2>
        <p>
          For questions about this privacy policy, you can contact us at{' '}
          <a href="mailto:contact@directive-8020.com" className="text-violet-400 hover:underline">
            contact@directive-8020.com
          </a>{' '}
          .
        </p>
      </div>
    </>
  );
}
