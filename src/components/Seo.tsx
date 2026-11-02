import Link from "next/link";
import { SITE_URL, firma, pusobnost } from "@/lib/site";

export function JsonLd({ data }: { data: object }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export const firmaSchema = {
  "@context": "https://schema.org",
  "@type": "Plumber",
  "@id": `${SITE_URL}/#firma`,
  name: firma.pravniNazev,
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  image: `${SITE_URL}/foto/rozvody-stena.jpg`,
  telephone: firma.telE164,
  email: firma.email,
  taxID: firma.ico,
  vatID: firma.dic,
  foundingDate: "2025",
  address: {
    "@type": "PostalAddress",
    streetAddress: firma.ulice,
    postalCode: firma.psc,
    addressLocality: firma.obec,
    addressCountry: "CZ",
  },
  areaServed: pusobnost.map((name) => ({ "@type": "AdministrativeArea", name: `okres ${name}` })),
  sameAs: [firma.facebook],
  knowsAbout: ["vodoinstalace", "kanalizace", "čištění odpadů", "ústřední topení", "podlahové topení", "radiátory"],
};

export function faqSchema(otazky: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: otazky.map((o) => ({
      "@type": "Question",
      name: o.q,
      acceptedAnswer: { "@type": "Answer", text: o.a },
    })),
  };
}

type Krok = { href: string; label: string };

/** Drobečková navigace i s BreadcrumbList pro vyhledávače. */
export function Drobecky({ kroky }: { kroky: Krok[] }) {
  const vse = [{ href: "/", label: "Úvod" }, ...kroky];
  return (
    <>
      <nav aria-label="Drobečková navigace" className="text-sm text-muted">
        <ol className="flex flex-wrap gap-x-2">
          {vse.map((k, i) => (
            <li key={k.href} className="flex gap-x-2">
              {i > 0 && <span aria-hidden>/</span>}
              {i < vse.length - 1 ? (
                <Link href={k.href} className="underline underline-offset-4 hover:text-red">
                  {k.label}
                </Link>
              ) : (
                <span aria-current="page">{k.label}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: vse.map((k, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: k.label,
            item: `${SITE_URL}${k.href === "/" ? "" : k.href}`,
          })),
        }}
      />
    </>
  );
}
