"use client";

import { useLanguage } from "@/contexts/LanguageContext";

const statKeys = ["projects", "public", "years"] as const;
const bulletKeys = ["b1", "b2", "b3"] as const;

export function Results() {
  const { t } = useLanguage();

  return (
    <section
      id="resultados"
      className="scroll-mt-24 py-16 sm:py-20 border-b border-card-border/80 bg-card/15"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
            {t.results.title} <span className="text-accent">{t.results.highlight}</span>
          </h2>
        </div>

        {/* Big clean typographic numbers */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 pb-10 border-b border-card-border/60">
          {statKeys.map((key) => {
            const s = t.results.stats[key];
            return (
              <div key={key} className="space-y-1">
                <span className="text-4xl sm:text-5xl font-extrabold text-foreground tracking-tight tabular-nums block font-mono">
                  <span className="text-accent">{s.value}</span>
                </span>
                <p className="text-muted text-sm leading-snug">
                  {s.label}
                </p>
              </div>
            );
          })}
        </div>

        {/* Grounded delivery points */}
        <div className="pt-8">
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {bulletKeys.map((key) => (
              <li key={key} className="space-y-1.5">
                <span className="text-xs font-mono font-semibold text-accent/80 uppercase tracking-wider block">
                  ✦ Garantia de entrega
                </span>
                <p className="text-muted text-sm leading-relaxed">
                  {t.results.bullets[key]}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
