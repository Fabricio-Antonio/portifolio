"use client";

import { useLanguage } from "@/contexts/LanguageContext";

const statKeys = ["projects", "public", "years"] as const;
const bulletKeys = ["b1", "b2", "b3"] as const;

export function Results() {
  const { t } = useLanguage();

  return (
    <section id="resultados" className="py-16 sm:py-20 md:py-24 border-t border-card-border bg-card/30">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold mb-10">
          {t.results.title} <span className="text-accent">{t.results.highlight}</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-12">
          {statKeys.map((key) => {
            const s = t.results.stats[key];
            return (
              <div
                key={key}
                className="rounded-xl border border-card-border bg-background/80 p-4 sm:p-5 text-center sm:text-left"
              >
                <p className="text-2xl sm:text-3xl font-bold text-accent tabular-nums">{s.value}</p>
                <p className="text-muted text-xs sm:text-sm mt-1 leading-snug">{s.label}</p>
              </div>
            );
          })}
        </div>
        <ul className="space-y-3 max-w-2xl">
          {bulletKeys.map((key) => (
            <li key={key} className="flex gap-3 text-sm sm:text-base text-muted leading-relaxed">
              <span className="text-accent shrink-0 mt-0.5" aria-hidden>
                ✓
              </span>
              {t.results.bullets[key]}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
