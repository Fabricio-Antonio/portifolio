"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { getWhatsAppChatUrl } from "@/lib/whatsapp";

export function LeadMagnet() {
  const { t } = useLanguage();
  const href = getWhatsAppChatUrl(t.leadMagnet.whatsappMessage);

  return (
    <section className="py-16 sm:py-20 border-b border-card-border bg-card/20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="rounded-2xl border border-card-border bg-card/50 p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mb-3">
              {t.leadMagnet.title} <span className="text-accent">{t.leadMagnet.highlight}</span>
            </h2>
            <p className="text-muted text-sm sm:text-base leading-relaxed">
              {t.leadMagnet.subtitle}
            </p>
          </div>

          <Link
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-accent text-background font-semibold text-sm hover:bg-cyan-300 transition-colors shrink-0 w-full md:w-auto text-center"
          >
            {t.leadMagnet.cta}
            <span className="ml-1.5">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
