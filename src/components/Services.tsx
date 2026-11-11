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
      className="scroll-mt-24 py-16 sm:py-20 border-b border-card-border/80"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
            {t.services.title} <span className="text-accent">{t.services.highlight}</span>
          </h2>
          <p className="text-muted text-sm sm:text-base mt-2 max-w-xl leading-relaxed">
            {t.services.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {serviceKeys.map((key) => {
            const item = t.services.items[key];
            const href = getWhatsAppChatUrl(item.whatsappMessage);

            return (
              <Link
                key={key}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 rounded-2xl bg-card/40 border border-card-border/70 hover:border-accent/40 hover:bg-card/70 transition-all flex flex-col justify-between text-left"
                aria-label={`${item.title} — WhatsApp`}
              >
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-foreground mb-2 group-hover:text-accent transition-colors leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-muted text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-card-border/40 flex items-center justify-between text-xs font-mono text-muted group-hover:text-accent transition-colors">
                  <span>Conversar</span>
                  <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
