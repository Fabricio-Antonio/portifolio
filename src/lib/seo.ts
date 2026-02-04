/**
 * Configurações centralizadas de SEO
 * Atualize SITE_URL ao fazer deploy (ex: https://fabriciosantos.dev)
 */
export const siteConfig = {
  name: "Fabrício Santos",
  title: "Fabrício Santos | Desenvolvedor Full-Stack",
  description:
    "Desenvolvedor full-stack e pesquisador em Health Tech com Computer Vision e IA aplicada. Mais de 2 anos desenvolvendo aplicações web e mobile. Especialista em React, NestJS e React Native. Recife, PE.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://fabriciosantos.dev",
  locale: "pt_BR",
  keywords: [
    "desenvolvedor full-stack",
    "desenvolvedor React",
    "desenvolvedor React Native",
    "desenvolvedor TypeScript",
    "Health Tech",
    "Computer Vision",
    "inteligência artificial",
    "desenvolvedor Recife",
    "Fabrício Santos",
    "NestJS",
    "Next.js",
  ],
  author: "Fabrício Santos",
  openGraph: {
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@fabriciosantos",
  },
} as const;
