"use client";

import { useLanguage } from "@/contexts/LanguageContext";

export function LanguageToggle() {
  const { locale, setLocale } = useLanguage();

  return (
    <div className="flex items-center gap-1 rounded-lg border border-card-border bg-card/50 p-1">
      <button
        onClick={() => setLocale("pt")}
        className={`rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${
          locale === "pt"
            ? "bg-accent text-background"
            : "text-muted hover:text-foreground"
        }`}
        aria-label="Português"
      >
        PT
      </button>
      <button
        onClick={() => setLocale("en")}
        className={`rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${
          locale === "en"
            ? "bg-accent text-background"
            : "text-muted hover:text-foreground"
        }`}
        aria-label="English"
      >
        EN
      </button>
    </div>
  );
}
