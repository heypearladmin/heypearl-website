import type { Metadata } from 'next';
import { LegalShell } from '@/components/ui/LegalShell';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'How Hey Pearl collects, uses, and protects your information, including SMS opt-in data.',
  // Canonical lives at /policies — keep /privacy indexable for backward compatibility.
  alternates: { canonical: '/policies' },
};

export default function PrivacyPage() {
  return (
    <LegalShell
      eyebrow="Legal"
      title="Privacy Policy"
      description="A clear, plain-language summary of how Hey Pearl collects, uses, and protects information."
      effectiveDate="January 2026"
      sections={[
        {
          heading: 'Overview',
          body: (
            <>
              <p>
                Hey Pearl provides authority infrastructure services for the
                AI search era. This Privacy Policy describes how we collect
                and use information across our website, applications, and
                client engagements.
              </p>
              <p>
                We aim to collect the least information necessary to deliver
                our services, and we never sell personal information.
              </p>
            </>
          ),
        },
        {
          heading: 'Information We Collect',
          body: (
            <>
              <p>
                We collect information you provide directly, such as your
                name, business, email address, and phone number when you
                submit a form, schedule a strategy call, or become a client.
              </p>
              <p>
                We also collect limited technical information automatically,
                such as device, browser, and usage data, to improve site
                performance and security.
              </p>
            </>
          ),
        },
        {
          heading: 'How We Use Information',
          body: (
            <>
              <p>
                We use information to deliver our services, communicate with
                you, improve the website, and fulfill legal obligations. We
                do not sell personal information to third parties.
              </p>
            </>
          ),
        },
        {
          heading: 'SMS &amp; Phone Communications',
          body: (
            <>
              <p>
                When you check the consent box on our contact form, you
                consent to receive recurring text messages and phone calls
                from Hey Pearl, including automated and AI-assisted calls,
                at the phone number you provided. Message frequency varies.
                Message and data rates may apply.
              </p>
              <p>
                Reply <strong>STOP</strong> to any text message to opt out.
                Reply <strong>HELP</strong> for help. You can also contact us
                at {site.contact.email}.
              </p>
              <p>
                <strong>
                  No mobile information will be shared with third
                  parties/affiliates for marketing/promotional purposes. All
                  other categories exclude text messaging originator opt-in
                  data and consent; this information will not be shared with
                  any third parties.
                </strong>
              </p>
            </>
          ),
        },
        {
          heading: 'Cookies and Analytics',
          body: (
            <>
              <p>
                Our website uses essential cookies and privacy-respecting
                analytics to understand site performance. You can configure
                your browser to refuse cookies, though this may affect site
                functionality.
              </p>
            </>
          ),
        },
        {
          heading: 'Your Rights',
          body: (
            <>
              <p>
                You may request access to, correction of, or deletion of
                your personal information at any time. Contact us at{' '}
                {site.contact.email} and we will respond promptly.
              </p>
            </>
          ),
        },
        {
          heading: 'Contact',
          body: (
            <>
              <p>
                Questions about this policy can be sent to{' '}
                {site.contact.email} or Hey Pearl,{' '}
                {site.contact.address.display}.
              </p>
            </>
          ),
        },
      ]}
    />
  );
}
