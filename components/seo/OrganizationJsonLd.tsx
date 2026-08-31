import { institution, contact, branches } from "@/config/institution";
import { departments } from "@/data/departments";

export function OrganizationJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: institution.name,
    alternateName: institution.shortName,
    description: institution.description,
    slogan: institution.tagline,
    telephone: contact.phoneHref.replace("tel:", ""),
    email: contact.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: contact.location,
      addressCountry: "KE",
    },
    // Branch names only — no street addresses were supplied for these.
    additionalProperty: branches.map((branch) => ({
      "@type": "PropertyValue",
      name: "Branch",
      value: branch,
    })),
    department: departments.map((d) => ({
      "@type": "EducationalOrganization",
      name: d.name,
      description: d.shortDescription,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
