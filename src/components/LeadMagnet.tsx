"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { getWhatsAppChatUrl } from "@/lib/whatsapp";

export function LeadMagnet() {
  const { t } = useLanguage();
  const href = getWhatsAppChatUrl(t.leadMagnet.whatsappMessage);

  return (
    <section className="py-16 sm:py-20 md:py-24 border-t border-card-border bg-gradient-to-b from-accent/10 via-transparent to-transparent">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="rounded-2xl border border-accent/30 bg-card/80 backdrop-blur-sm p-6 sm:p-10 text-center max-w-3xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-bold mb-3">
            {t.leadMagnet.title} <span className="text-accent">{t.leadMagnet.highlight}</span>
          </h2>
          <p className="text-muted text-sm sm:text-base mb-8 leading-relaxed">
            {t.leadMagnet.subtitle}
          </p>
          <Link
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[48px] items-center justify-center px-8 py-3 rounded-lg bg-accent text-background font-semibold hover:bg-accent-muted transition-colors w-full sm:w-auto"
          >
            {t.leadMagnet.cta}
          </Link>
        </div>
      </div>
    </section>
  );
}
