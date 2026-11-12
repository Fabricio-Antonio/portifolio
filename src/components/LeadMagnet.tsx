"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { getWhatsAppChatUrl } from "@/lib/whatsapp";
import { SlideToConfirm } from "@/components/ui/SlideToConfirm";

export function LeadMagnet() {
  const { t } = useLanguage();
  const href = getWhatsAppChatUrl(t.leadMagnet.whatsappMessage);

  const handleConfirm = async () => {
    window.open(href, "_blank", "noopener,noreferrer");
  };

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

          <SlideToConfirm
            label={t.leadMagnet.cta}
            confirmingLabel="Abrindo WhatsApp..."
            doneLabel="Aberto"
            onConfirm={handleConfirm}
            resetAfter={3000}
            className="w-full md:w-72 shrink-0"
          />
        </div>
      </div>
    </section>
  );
}
