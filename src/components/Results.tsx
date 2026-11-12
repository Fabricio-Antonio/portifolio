"use client";

import { useEffect, useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const statKeys = ["projects", "public", "years"] as const;
const bulletKeys = ["b1", "b2", "b3", "b4", "b5"] as const;

function parseTarget(value: string): number {
  const n = parseInt(value.replace(/\D/g, ""), 10);
  return Number.isFinite(n) ? n : 0;
}

export function Results() {
  const { t } = useLanguage();
  const refs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const elements = refs.current.filter(Boolean) as HTMLSpanElement[];
    if (elements.length === 0) return;

    const targets = elements.map((el) => {
      const key = el.dataset.key as (typeof statKeys)[number];
      const raw = t.results.stats[key].value;
      return { el, target: parseTarget(raw), raw };
    });

    const ctx = gsap.context(() => {
      targets.forEach(({ el, target, raw }) => {
        const isPlus = raw.includes("+");
        const obj = { val: 0 };
        gsap.to(obj, {
          val: target,
          duration: 1.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            once: true,
          },
          onUpdate: () => {
            el.textContent = isPlus
              ? `+${Math.floor(obj.val)}`
              : `${Math.floor(obj.val)}`;
          },
        });
      });
    });

    return () => ctx.revert();
  }, [t]);

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
          {statKeys.map((key, i) => {
            const s = t.results.stats[key];
            return (
              <div key={key} className="space-y-1">
                <span
                  ref={(el) => {
                    refs.current[i] = el;
                  }}
                  data-key={key}
                  className="text-4xl sm:text-5xl font-extrabold text-foreground tracking-tight tabular-nums block font-mono"
                >
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
          <ul className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {bulletKeys.map((key) => (
              <li key={key}>
                <span className="text-xs font-mono font-semibold text-accent/80 uppercase tracking-wider block">
                  {t.results.bullets[key]}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}