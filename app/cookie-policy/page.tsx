import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { LegalSection } from "@/components/sections/LegalSection";
import { institution, contact } from "@/config/institution";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: `What cookies and similar technologies are used on the ${institution.shortName} website.`,
  alternates: { canonical: "/cookie-policy" },
};

const LAST_UPDATED = "September 2026";

export default function CookiePolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Cookie Policy"
        description={`Last updated: ${LAST_UPDATED}`}
      />
      <section className="py-16 md:py-20">
        <Container className="max-w-3xl">
          <LegalSection title="1. Our approach to cookies">
            <p>
              This website does not use advertising cookies. With your
              permission, Google Analytics may use analytics cookies to help
              us understand how visitors use the site. Analytics is not
              loaded before you choose &quot;Accept&quot; in the consent banner.
              We do not store anything in your browser&apos;s local storage.
            </p>
          </LegalSection>

          <LegalSection title="2. The one exception: Google Maps">
            <p>
              Our <a href="/contact">Contact page</a> includes an embedded
              Google Map showing our location. To avoid loading anything
              from Google before you&apos;ve asked for it, the map is not
              embedded automatically — it only loads after you click
              &quot;Load map.&quot; Once loaded, Google may set its own cookies as
              part of operating the map; this is governed by{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google&apos;s own Privacy Policy
              </a>
              , not ours.
            </p>
            <p>
              If you&apos;d rather not load anything from Google at all, the
              same page provides a plain link to open the location
              directly in Google Maps or your preferred maps app.
            </p>
          </LegalSection>

          <LegalSection title="3. Consent choice">
            <p>
              When you first visit this website, a banner asks whether you
              accept cookies. Your response is saved in one strictly
              necessary cookie named <code>bbti-cookie-consent</code> so we do
              not ask again for one year. This cookie does not identify you,
              track you, or contain personal information. You can decline and
              continue browsing; Google Analytics will not load, and Google
              Maps remains separately opt-in and loads only when you choose to
              view it.
            </p>
          </LegalSection>

          <LegalSection title="4. Questions">
            <p>
              Questions about this Cookie Policy can be sent to{" "}
              <a href={`mailto:${contact.email}`}>{contact.email}</a>. See
              also our <a href="/privacy-policy">Privacy Policy</a>.
            </p>
          </LegalSection>
        </Container>
      </section>
    </>
  );
}
