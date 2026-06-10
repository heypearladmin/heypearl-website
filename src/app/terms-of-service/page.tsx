import type { Metadata } from 'next';
import { LegalShell } from '@/components/ui/LegalShell';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description:
    'Terms governing the use of the Hey Pearl Agency LLC website, services, SMS program, and AI-assisted communications.',
};

export default function TermsOfServicePage() {
  return (
    <LegalShell
      eyebrow="Legal"
      title="Terms of Service"
      description="The terms governing the use of the Hey Pearl Agency LLC website, services, platform, SMS messaging program, and AI-assisted communications."
      effectiveDate="June 2026"
      sections={[
        {
          heading: '1. Program Description',
          body: (
            <>
              <p>
                Hey Pearl Agency LLC (&ldquo;Hey Pearl Agency LLC,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;)
                operates an SMS messaging program to communicate with clients and
                prospective clients regarding our services. By opting in, you
                may receive two categories of messages:
              </p>
              <ul className="list-disc pl-5 flex flex-col gap-2">
                <li>
                  <strong>Transactional SMS:</strong> Appointment confirmations,
                  appointment reminders, account notifications, customer support
                  updates, and service-related communications.
                </li>
                <li>
                  <strong>Marketing SMS:</strong> Special offers, discounts,
                  promotions, marketing updates, and service announcements.
                </li>
              </ul>
              <p>
                Consent to receive either category of SMS messages is entirely
                optional and is not required to purchase or use our services.
                Message frequency may vary. Message &amp; data rates may apply.
              </p>
              <p>
                Our website is located at{' '}
                <a
                  href="https://www.heypearl.io"
                  className="underline underline-offset-2 hover:text-plum"
                >
                  https://www.heypearl.io
                </a>
                .
              </p>
            </>
          ),
        },
        {
          heading: '2. Cancellation / Opt-Out Instructions',
          body: (
            <>
              <p>
                You may cancel SMS messages at any time. To stop receiving text
                messages, reply <strong>STOP</strong> to any SMS message from
                Hey Pearl Agency LLC. After you send &ldquo;STOP,&rdquo; we will
                send you a final message confirming that you have been
                unsubscribed. You will not receive any further SMS messages
                unless you opt back in.
              </p>
              <p>
                To resume messages after opting out, reply{' '}
                <strong>START</strong> to any prior message or re-submit the
                opt-in form on our website.
              </p>
            </>
          ),
        },
        {
          heading: '3. Support Information',
          body: (
            <>
              <p>
                If you need assistance with our SMS program or have any
                questions, reply <strong>HELP</strong> to any text message we
                send. You can also contact us directly:
              </p>
              <ul className="list-disc pl-5 flex flex-col gap-2">
                <li>
                  Email:{' '}
                  <a
                    href="mailto:support@heypearl.io"
                    className="underline underline-offset-2 hover:text-plum"
                  >
                    support@heypearl.io
                  </a>
                </li>
                <li>Phone: (830) 402-4045</li>
                <li>
                  Website:{' '}
                  <a
                    href="https://www.heypearl.io"
                    className="underline underline-offset-2 hover:text-plum"
                  >
                    https://www.heypearl.io
                  </a>
                </li>
              </ul>
            </>
          ),
        },
        {
          heading: '4. Carrier Liability Disclaimer',
          body: (
            <>
              <p>
                Carriers (including AT&amp;T, T-Mobile, Verizon, and others)
                are not liable for delayed or undelivered messages. Hey Pearl
                Agency LLC is not responsible for any delays or failures in SMS
                delivery caused by your wireless carrier or network conditions.
              </p>
            </>
          ),
        },
        {
          heading: '5. Message & Data Rates Disclosure',
          body: (
            <>
              <p>
                Message and data rates may apply to all SMS messages sent to or
                received from Hey Pearl Agency LLC. Standard messaging and data
                rates from your wireless carrier apply. Hey Pearl Agency LLC is
                not responsible for any charges incurred from your wireless
                carrier related to SMS communications.
              </p>
            </>
          ),
        },
        {
          heading: '6. Supported Carriers',
          body: (
            <>
              <p>
                Our SMS program is supported by all major U.S. wireless
                carriers, including but not limited to AT&amp;T, T-Mobile,
                Verizon, Sprint, Boost Mobile, US Cellular, MetroPCS, and other
                regional and MVNO carriers. Carrier support is subject to
                change.
              </p>
            </>
          ),
        },
        {
          heading: '7. Age Restriction',
          body: (
            <>
              <p>
                <strong>
                  You must be 18 years or older to participate in our SMS
                  program.
                </strong>{' '}
                By opting in to receive SMS messages from Hey Pearl Agency LLC,
                you represent and warrant that you are at least 18 years of age.
                If you are under 18, you may not opt in to or use our SMS
                program.
              </p>
            </>
          ),
        },
        {
          heading: '8. Privacy Policy',
          body: (
            <>
              <p>
                Your use of our website and services, including our SMS program,
                is also governed by our{' '}
                <a
                  href="https://www.heypearl.io/privacy-policy"
                  className="underline underline-offset-2 hover:text-plum"
                >
                  Privacy Policy
                </a>
                , which describes how Hey Pearl Agency LLC collects, uses,
                stores, and protects your personal information, including SMS
                opt-in data. We will not share your opt-in data or consent
                information with third parties for their own marketing purposes.
              </p>
            </>
          ),
        },
        {
          heading: '9. General Terms',
          body: (
            <>
              <p>
                By accessing or using the Hey Pearl Agency LLC website at{' '}
                <a
                  href="https://www.heypearl.io"
                  className="underline underline-offset-2 hover:text-plum"
                >
                  https://www.heypearl.io
                </a>{' '}
                and its associated services, you agree to be bound by these
                Terms of Service and all applicable laws and regulations. If you
                do not agree to these terms, please do not use the site or
                services.
              </p>
              <p>
                Hey Pearl Agency LLC provides authority infrastructure, GEO
                content, reputation management, automation, and website services
                as described on our site or in a written agreement. Specific
                deliverables, timelines, and fees are governed by the agreement
                signed at engagement.
              </p>
            </>
          ),
        },
        {
          heading: '10. Intellectual Property Rights',
          body: (
            <>
              <p>
                All Hey Pearl Agency LLC branding, copy, software, designs,
                systems, methodologies (including the P.E.A.R.L. framework),
                and underlying technology are the exclusive property of Hey
                Pearl Agency LLC. You may not reproduce, distribute, modify, or
                create derivative works from any Hey Pearl Agency LLC content
                without prior written permission.
              </p>
              <p>
                Client deliverables are licensed or assigned to the client
                according to the terms of the applicable engagement agreement.
              </p>
            </>
          ),
        },
        {
          heading: '11. Disclaimers',
          body: (
            <>
              <p>
                The Hey Pearl Agency LLC website and services are provided on an
                &ldquo;as-is&rdquo; and &ldquo;as-available&rdquo; basis
                without warranties of any kind, express or implied. We make no
                guarantees regarding specific search rankings, AI citation
                outcomes, lead volume, or business results. Authority and
                visibility are influenced by many factors outside our control.
              </p>
              <p>
                To the fullest extent permitted by applicable law, Hey Pearl
                Agency LLC disclaims all warranties, including implied
                warranties of merchantability, fitness for a particular purpose,
                and non-infringement.
              </p>
            </>
          ),
        },
        {
          heading: '12. Online Commerce',
          body: (
            <>
              <p>
                Any products, services, or programs purchased through the Hey
                Pearl Agency LLC website are subject to the specific terms and
                pricing disclosed at the time of purchase. All sales are final
                unless otherwise stated in a separate written agreement or
                refund policy. Hey Pearl Agency LLC reserves the right to
                modify pricing and service offerings at any time.
              </p>
            </>
          ),
        },
        {
          heading: '13. Registration & Passwords',
          body: (
            <>
              <p>
                If you are provided with or create account credentials to access
                any Hey Pearl Agency LLC platform, portal, or client system, you
                are responsible for maintaining the confidentiality of your
                credentials and for all activity that occurs under your account.
                You agree to notify Hey Pearl Agency LLC immediately at{' '}
                <a
                  href="mailto:support@heypearl.io"
                  className="underline underline-offset-2 hover:text-plum"
                >
                  support@heypearl.io
                </a>{' '}
                of any unauthorized access or suspected security breach.
              </p>
            </>
          ),
        },
        {
          heading: '14. Termination',
          body: (
            <>
              <p>
                Hey Pearl Agency LLC reserves the right to suspend or terminate
                your access to our website, services, or SMS program at any time
                for any reason, including violation of these Terms of Service.
                Upon termination, your right to use our services ceases
                immediately. Provisions of these terms that by their nature
                should survive termination (including intellectual property,
                disclaimers, and limitation of liability) will do so.
              </p>
            </>
          ),
        },
        {
          heading: '15. Governing Law',
          body: (
            <>
              <p>
                These Terms of Service are governed by and construed in
                accordance with the laws of the State of Texas, without regard
                to its conflict of law provisions. Any dispute arising from or
                relating to these terms or your use of Hey Pearl Agency LLC
                services shall be subject to the exclusive jurisdiction of the
                state and federal courts located in Travis County, Texas.
              </p>
            </>
          ),
        },
        {
          heading: '16. Changes to Terms',
          body: (
            <>
              <p>
                Hey Pearl Agency LLC reserves the right to modify these Terms of
                Service at any time. Changes will be posted to{' '}
                <a
                  href="https://www.heypearl.io/terms-of-service"
                  className="underline underline-offset-2 hover:text-plum"
                >
                  https://www.heypearl.io/terms-of-service
                </a>{' '}
                with an updated effective date. Your continued use of our
                website or services after changes are posted constitutes your
                acceptance of the revised terms.
              </p>
            </>
          ),
        },
        {
          heading: '17. Contact Information',
          body: (
            <>
              <p>
                Questions, concerns, or requests regarding these Terms of
                Service may be directed to:
              </p>
              <p>
                <strong>Hey Pearl Agency LLC</strong>
                <br />
                1606 Headway Cir, Austin TX 78754
                <br />
                Email:{' '}
                <a
                  href="mailto:support@heypearl.io"
                  className="underline underline-offset-2 hover:text-plum"
                >
                  support@heypearl.io
                </a>
                <br />
                Phone: (830) 402-4045
                <br />
                Website:{' '}
                <a
                  href="https://www.heypearl.io"
                  className="underline underline-offset-2 hover:text-plum"
                >
                  https://www.heypearl.io
                </a>
              </p>
            </>
          ),
        },
      ]}
    />
  );
}
