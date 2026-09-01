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
    url: institution.website,
    telephone: contact.phoneHref.replace("tel:", ""),
    email: contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${contact.location}, ${contact.street}`,
      addressLocality: "Eldoret",
      postalCode: contact.postalCode,
      addressCountry: "KE",
    },
    department: [
      ...branches.map((branch) => ({
        "@type": "EducationalOrganization",
        name: `${institution.shortName} ${branch.name} Branch`,
        ...(branch.address && { address: branch.address }),
        ...(branch.phone && { telephone: branch.phone }),
      })),
      ...departments.map((d) => ({
        "@type": "EducationalOrganization",
        name: d.name,
        description: d.shortDescription,
      })),
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
