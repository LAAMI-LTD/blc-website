import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { LegalSection } from "@/components/sections/LegalSection";
import { institution, contact } from "@/config/institution";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${institution.name} (${institution.shortName}) collects, uses and protects information submitted through this website.`,
  alternates: { canonical: "/privacy-policy" },
};

const LAST_UPDATED = "September 2026";

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        description={`Last updated: ${LAST_UPDATED}`}
      />
      <section className="py-16 md:py-20">
        <Container className="max-w-3xl">
          <LegalSection title="1. Who we are">
            <p>
              This Privacy Policy explains how {institution.name} (
              {institution.shortName}) collects, uses and protects
              information submitted through this website
              ({institution.website}). It applies only to this website —
              not to information collected in person at our campuses or
              branches.
            </p>
          </LegalSection>

          <LegalSection title="2. Information we collect">
            <p>We only collect information you choose to give us, through two forms on this site:</p>
            <ul>
              <li>
                <strong>Contact form:</strong> full name, email address,
                phone number (optional), department of interest
                (optional), and your message.
              </li>
              <li>
                <strong>Newsletter sign-up:</strong> your email address
                only.
              </li>
            </ul>
            <p>
              We do not use cookies, analytics, or tracking scripts of our
              own on this website, and we do not ask for information such
              as national ID numbers, date of birth, or physical address
              through these forms.
            </p>
          </LegalSection>

          <LegalSection title="3. How we use your information">
            <ul>
              <li>To respond to enquiries submitted through the contact form.</li>
              <li>To send newsletter updates to people who have explicitly subscribed.</li>
            </ul>
            <p>
              We do not sell, rent, or share your personal information
              with third parties for their own marketing purposes.
            </p>
          </LegalSection>

          <LegalSection title="4. Third-party services we use">
            <p>This website relies on a small number of third-party services to function:</p>
            <ul>
              <li>
                <strong>Resend</strong> — an email delivery provider used
                to send contact-form messages to our team and to store
                newsletter subscriber addresses. Resend processes this
                data on our behalf as part of delivering these services.
              </li>
              <li>
                <strong>Google Maps</strong> — an embedded map is
                available on our Contact page, loaded only if you choose
                to view it. See our{" "}
                <a href="/cookie-policy">Cookie Policy</a> for details.
              </li>
              <li>
                <strong>WhatsApp</strong> — the WhatsApp button on this
                site simply opens a chat via WhatsApp&apos;s own service; we
                do not receive or store anything about that interaction
                on our end.
              </li>
            </ul>
            <p>
              This website does not currently use Google Analytics, Meta
              Pixel, or any other analytics or advertising tracking
              service.
            </p>
          </LegalSection>

          <LegalSection title="5. Data retention">
            <p>
              We keep contact-form messages and newsletter subscriber
              addresses for as long as reasonably necessary to respond to
              your enquiry or maintain your subscription.{" "}
              <em>
                {institution.shortName} has not yet finalized a specific
                data-retention schedule for this website — this section
                will be updated once one is confirmed.
              </em>
            </p>
          </LegalSection>

          <LegalSection title="6. Your rights">
            <p>
              Under the Kenya Data Protection Act, 2019, you have rights
              including the right to access, correct, or request deletion
              of your personal information, and to object to or restrict
              certain processing. To exercise any of these rights, or to
              raise a privacy question or complaint, contact us at{" "}
              <a href={`mailto:${contact.email}`}>{contact.email}</a>.
            </p>
            <p>
              You may also lodge a complaint with the Office of the Data
              Protection Commissioner (ODPC), Kenya&apos;s data protection
              regulator.
            </p>
          </LegalSection>

          <LegalSection title="7. Data security">
            <p>
              Information submitted through our forms is transmitted and
              processed server-side; credentials used to send email
              (via Resend) are never exposed in the website&apos;s public code
              and are stored only as server-side environment variables.
            </p>
          </LegalSection>

          <LegalSection title="8. Changes to this policy">
            <p>
              We may update this Privacy Policy as the website or our use
              of third-party services changes. The &quot;Last updated&quot; date at
              the top of this page reflects the most recent revision.
            </p>
          </LegalSection>

          <LegalSection title="9. Contact us">
            <p>
              Questions about this policy can be sent to{" "}
              <a href={`mailto:${contact.email}`}>{contact.email}</a> or{" "}
              <a href={contact.whatsapp.href}>via WhatsApp</a>.
            </p>
          </LegalSection>
        </Container>
      </section>
    </>
  );
}
