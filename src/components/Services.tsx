"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { getWhatsAppChatUrl } from "@/lib/whatsapp";

const serviceKeys = [
  "webAndSystems",
  "mobileApps",
  "saasAndPlatforms",
  "consultingArchitecture",
  "uxUiWebDesign",
  "automation",
] as const;

export function Services() {
  const { t } = useLanguage();

  return (
    <section
      id="servicos"
      className="scroll-mt-24 lg:scroll-mt-28 py-16 sm:py-20 md:py-24 border-t border-card-border"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">
          {t.services.title}{" "}
          <span className="text-accent">{t.services.highlight}</span>
        </h2>
        <p className="text-muted text-sm sm:text-base mb-10 sm:mb-12 max-w-2xl leading-relaxed">
          {t.services.subtitle}
        </p>
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
          {serviceKeys.map((key) => {
            const item = t.services.items[key];
            const href = getWhatsAppChatUrl(item.whatsappMessage);
            return (
              <Link
                key={key}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-xl border border-card-border bg-card p-5 sm:p-6 hover:border-accent/40 transition-colors cursor-pointer text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                aria-label={`${item.title} — WhatsApp`}
              >
                <h3 className="font-semibold text-lg text-foreground mb-2">{item.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{item.description}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
