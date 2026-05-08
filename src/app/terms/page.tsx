import type { Metadata } from 'next';
import { LegalShell } from '@/components/ui/LegalShell';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms governing the use of the HeyPearl website and services.',
};

export default function TermsPage() {
  return (
    <LegalShell
      eyebrow="Legal"
      title="Terms of Service"
      description="The terms governing the use of the HeyPearl website, services, and platform."
      effectiveDate="January 2026"
      sections={[
        {
          heading: 'Acceptance of Terms',
          body: (
            <>
              <p>
                By accessing or using the HeyPearl website and services, you agree to be bound by these Terms of Service. If you do not agree, please do not use the site or services.
              </p>
            </>
          ),
        },
        {
          heading: 'Services',
          body: (
            <>
              <p>
                HeyPearl provides authority infrastructure, GEO, content, reputation, automation, and website services as described on our site or in a written agreement. Specific deliverables, timelines, and fees are governed by the agreement signed at engagement.
              </p>
            </>
          ),
        },
        {
          heading: 'Intellectual Property',
          body: (
            <>
              <p>
                All HeyPearl branding, copy, software, designs, and underlying systems are the property of HeyPearl. Client deliverables are licensed or assigned according to the engagement agreement.
              </p>
            </>
          ),
        },
        {
          heading: 'Acceptable Use',
          body: (
            <>
              <p>
                You agree not to use the website or services for any unlawful purpose, to attempt to disrupt the platform, or to misuse access provided to you.
              </p>
            </>
          ),
        },
        {
          heading: 'Disclaimers',
          body: (
            <>
              <p>
                HeyPearl services and the website are provided on an as-is basis. We make no guarantees about specific search rankings, AI citations, or business outcomes. Authority and visibility are influenced by many factors beyond our control.
              </p>
            </>
          ),
        },
        {
          heading: 'Limitation of Liability',
          body: (
            <>
              <p>
                To the fullest extent permitted by law, HeyPearl is not liable for any indirect, incidental, or consequential damages arising from use of the website or services.
              </p>
            </>
          ),
        },
        {
          heading: 'Contact',
          body: (
            <>
              <p>
                Questions about these terms can be sent to {site.contact.email} or HeyPearl, {site.contact.address.display}.
              </p>
            </>
          ),
        },
      ]}
    />
  );
}
