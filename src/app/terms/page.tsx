import type { Metadata } from 'next';
import { LegalShell } from '@/components/ui/LegalShell';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description:
    'Terms governing the use of the Hey Pearl website, services, SMS, and AI-assisted communications.',
};

export default function TermsPage() {
  return (
    <LegalShell
      eyebrow="Legal"
      title="Terms of Service"
      description="The terms governing the use of the Hey Pearl website, services, platform, SMS messaging, and AI-assisted communications."
      effectiveDate="January 2026"
      sections={[
        {
          heading: 'Acceptance of Terms',
          body: (
            <>
              <p>
                By accessing or using the Hey Pearl website and services, you
                agree to be bound by these Terms of Service. If you do not
                agree, please do not use the site or services.
              </p>
            </>
          ),
        },
        {
          heading: 'Services',
          body: (
            <>
              <p>
                Hey Pearl provides authority infrastructure, GEO, content,
                reputation, automation, and website services as described on
                our site or in a written agreement. Specific deliverables,
                timelines, and fees are governed by the agreement signed at
                engagement.
              </p>
            </>
          ),
        },
        {
          heading: 'SMS Communications',
          body: (
            <>
              <p>
                If you provide your mobile number and check the consent box
                on our contact form, you expressly consent to receive
                recurring text messages from Hey Pearl at the phone number
                you provided. Messages may include appointment reminders,
                onboarding instructions, account updates, follow-ups, and
                marketing communications related to your inquiry or
                engagement.
              </p>
              <p>
                Message frequency varies. Message and data rates may apply
                depending on your carrier and plan.
              </p>
            </>
          ),
        },
        {
          heading: 'AI-Assisted Calling',
          body: (
            <>
              <p>
                By providing your phone number, you also consent to receive
                phone calls from Hey Pearl, including automated and
                AI-assisted calls, at the phone number you provided. These
                calls may be used to follow up on form submissions, qualify
                opportunities, schedule strategy calls, deliver service
                updates, or provide other communications related to your
                inquiry.
              </p>
              <p>
                Where required by applicable law, AI-assisted calls will
                disclose that the caller is an automated or AI agent and
                offer the option to be transferred to a human representative
                or to opt out of further calls.
              </p>
            </>
          ),
        },
        {
          heading: 'Opt-Out and Help (STOP / HELP)',
          body: (
            <>
              <p>
                You can opt out of SMS messages at any time by replying{' '}
                <strong>STOP</strong> to any text message we send. After
                replying STOP, you will receive one final confirmation
                message and no further SMS messages will be sent. To resume
                messaging, reply <strong>START</strong>.
              </p>
              <p>
                Reply <strong>HELP</strong> to any text message for help, or
                contact us at {site.contact.email} or{' '}
                {site.contact.phoneDisplay}. You may opt out of phone calls
                at any time by telling our agent that you no longer wish to
                be called or by emailing us at {site.contact.email}.
              </p>
            </>
          ),
        },
        {
          heading: 'Message &amp; Data Rates',
          body: (
            <>
              <p>
                Message and data rates may apply to any SMS messages
                exchanged with Hey Pearl. Standard messaging rates from your
                wireless carrier apply. Hey Pearl is not responsible for any
                charges incurred from your wireless carrier.
              </p>
              <p>
                Supported carriers include all major U.S. carriers. Carriers
                are not liable for delayed or undelivered messages.
              </p>
            </>
          ),
        },
        {
          heading: 'Intellectual Property',
          body: (
            <>
              <p>
                All Hey Pearl branding, copy, software, designs, and
                underlying systems are the property of Hey Pearl. Client
                deliverables are licensed or assigned according to the
                engagement agreement.
              </p>
            </>
          ),
        },
        {
          heading: 'Acceptable Use',
          body: (
            <>
              <p>
                You agree not to use the website or services for any
                unlawful purpose, to attempt to disrupt the platform, to
                misuse access provided to you, or to submit false contact
                information or non-consensual third-party contact
                information through any Hey Pearl form.
              </p>
            </>
          ),
        },
        {
          heading: 'Disclaimers',
          body: (
            <>
              <p>
                Hey Pearl services and the website are provided on an as-is
                basis. We make no guarantees about specific search
                rankings, AI citations, or business outcomes. Authority and
                visibility are influenced by many factors beyond our
                control.
              </p>
            </>
          ),
        },
        {
          heading: 'Limitation of Liability',
          body: (
            <>
              <p>
                To the fullest extent permitted by law, Hey Pearl is not
                liable for any indirect, incidental, or consequential
                damages arising from use of the website or services,
                including any SMS or AI-assisted communications.
              </p>
            </>
          ),
        },
        {
          heading: 'Privacy',
          body: (
            <>
              <p>
                Your use of Hey Pearl services is also governed by our{' '}
                <a
                  href="/policies"
                  className="underline underline-offset-2 hover:text-plum"
                >
                  Privacy Policy
                </a>
                , which describes how we collect, use, and protect
                information — including SMS opt-in data.
              </p>
            </>
          ),
        },
        {
          heading: 'Contact',
          body: (
            <>
              <p>
                Questions about these terms can be sent to{' '}
                {site.contact.email}, called to {site.contact.phoneDisplay},
                or mailed to Hey Pearl, {site.contact.address.display}.
              </p>
            </>
          ),
        },
      ]}
    />
  );
}
