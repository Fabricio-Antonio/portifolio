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
    jobTitle: "Programador/Desenvolvedor Full-Stack",
    description: siteConfig.description,
    url: siteConfig.url,
    sameAs: [
      "https://www.linkedin.com/in/fabricio-ss/",
      "https://github.com/Fabricio-Antonio",
      "https://www.instagram.com/fabriciosantos.dev/",
      "https://www.meus10centavos.com.br",
      "https://www.instagram.com/fabricio.ss/",
      "https://discord.com/users/donald_duck.dev",
      "https://www.meus10centavos.com.br",
      "https://www.rotas4me.com",
      " https://www.youtube.com/@DevFabricioSantos",
    ],
    // Alinha o JSON-LD com todas as palavras-chave do SEO
    knowsAbout: siteConfig.keywords,
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
