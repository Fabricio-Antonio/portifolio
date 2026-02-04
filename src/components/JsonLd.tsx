/**
 * JSON-LD Structured Data para SEO
 * https://developers.google.com/search/docs/appearance/structured-data
 */
import { siteConfig } from "@/lib/seo";

export function JsonLd() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    jobTitle: "Desenvolvedor Full-Stack",
    description: siteConfig.description,
    url: siteConfig.url,
    sameAs: [
      "https://www.linkedin.com/in/fabricio-ss/",
      "https://github.com/Fabricio-Antonio",
      "https://www.instagram.com/fabriciosantos.dev/",
    ],
    knowsAbout: [
      "React",
      "React Native",
      "TypeScript",
      "Next.js",
      "NestJS",
      "Computer Vision",
      "Inteligência Artificial",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Recife",
      addressRegion: "PE",
      addressCountry: "BR",
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    author: {
      "@type": "Person",
      name: siteConfig.name,
    },
    inLanguage: "pt-BR",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
    </>
  );
}
