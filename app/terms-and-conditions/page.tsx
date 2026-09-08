import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { LegalSection } from "@/components/sections/LegalSection";
import { institution, contact } from "@/config/institution";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: `Terms of use for the ${institution.name} (${institution.shortName}) website.`,
  alternates: { canonical: "/terms-and-conditions" },
};

const LAST_UPDATED = "September 2026";

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms & Conditions"
        description={`Last updated: ${LAST_UPDATED}`}
      />
      <section className="py-16 md:py-20">
        <Container className="max-w-3xl">
          <LegalSection title="1. Acceptance of these terms">
            <p>
              By using this website ({institution.website}), you agree to
              these Terms &amp; Conditions. If you do not agree, please
              do not use this website.
            </p>
          </LegalSection>

          <LegalSection title="2. About this website">
            <p>
              This website provides information about{" "}
              {institution.name} ({institution.shortName}), including our
              departments, courses, team, and contact details. This
              website does not currently process online payments,
              enrollments, or bookings — enquiries are handled via the
              contact form, WhatsApp, phone, or in person.
            </p>
          </LegalSection>

          <LegalSection title="3. Accuracy of information">
            <p>
              We make reasonable efforts to keep course details, entry
              requirements, contact information and other content on this
              website accurate and up to date. However, details such as
              course availability, pricing, and entry requirements may
              change. Please confirm current details directly with{" "}
              {institution.shortName} before making decisions based on
              this website.
            </p>
          </LegalSection>

          <LegalSection title="4. Intellectual property">
            <p>
              The {institution.shortName} name, logo, and original content
              on this website belong to {institution.name}, unless
              otherwise noted. You may view and share pages of this
              website for personal, non-commercial purposes. Reproducing
              or redistributing this website&apos;s content for other purposes
              requires our prior permission.
            </p>
          </LegalSection>

          <LegalSection title="5. Third-party links and services">
            <p>
              This website links to or embeds third-party services,
              including WhatsApp and Google Maps, and uses Resend to
              deliver contact-form and newsletter emails. We are not
              responsible for the content, availability, or privacy
              practices of these third-party services once you leave this
              website or interact with an embedded third-party element.
            </p>
          </LegalSection>

          <LegalSection title="6. Availability of this website">
            <p>
              We aim to keep this website available and functioning
              correctly, but we do not guarantee uninterrupted access. The
              website, its content, and its features may be changed,
              suspended, or withdrawn at any time without notice.
            </p>
          </LegalSection>

          <LegalSection title="7. Limitation of liability">
            <p>
              This website is provided on an &quot;as is&quot; basis. To the extent
              permitted by Kenyan law, {institution.shortName} is not
              liable for any loss or damage arising from your use of, or
              inability to use, this website. Nothing in these terms is
              intended to exclude any liability that cannot be excluded
              under Kenyan law.
            </p>
          </LegalSection>

          <LegalSection title="8. Governing law">
            <p>
              These terms are governed by the laws of Kenya. Any disputes
              arising from use of this website will be subject to the
              jurisdiction of the courts of Kenya.
            </p>
          </LegalSection>

          <LegalSection title="9. Changes to these terms">
            <p>
              We may update these Terms &amp; Conditions from time to
              time. The &quot;Last updated&quot; date at the top of this page
              reflects the most recent revision.
            </p>
          </LegalSection>

          <LegalSection title="10. Contact us">
            <p>
              Questions about these terms can be sent to{" "}
              <a href={`mailto:${contact.email}`}>{contact.email}</a>.
            </p>
          </LegalSection>
        </Container>
      </section>
    </>
  );
}
