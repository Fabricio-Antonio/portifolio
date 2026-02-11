"use client";

import { useLanguage } from "@/contexts/LanguageContext";

export function AvailabilityBanner() {
  const { t } = useLanguage();

  return (
    <section className="w-full bg-accent text-background py-1 mt-4 sm:mt-6">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-center text-[11px] sm:text-xs font-medium tracking-[0.18em] uppercase opacity-90">
          {t.hero.available}
        </p>
      </div>
    </section>
  );
}

