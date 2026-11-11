"use client";

import { useLanguage } from "@/contexts/LanguageContext";

export function About() {
  const { t } = useLanguage();

  return (
    <section
      id="sobre"
      className="scroll-mt-24 py-16 sm:py-20 border-b border-card-border/80"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
            {t.about.title} <span className="text-accent">{t.about.highlight}</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
          {/* Main Story & Philosophy */}
          <div className="md:col-span-7 space-y-5">
            <div className="p-5 rounded-xl border border-card-border/80 bg-card/30">
              <span className="font-mono text-xs font-semibold text-accent uppercase tracking-wider block mb-1.5">
                {t.about.diffTitle}
              </span>
              <p className="text-foreground/90 text-sm sm:text-base leading-relaxed">
                {t.about.diffText}
              </p>
            </div>

            <div className="space-y-4 text-muted text-sm sm:text-base leading-relaxed">
              <p>
                {t.about.paragraph1} <strong className="text-foreground font-semibold">{t.about.experience}</strong>{" "}
                {t.about.paragraph1b}
              </p>
              <p>{t.about.paragraph2}</p>
              <p>{t.about.paragraph3}</p>
            </div>
          </div>

          {/* Education & Language Meta */}
          <div className="md:col-span-5 space-y-4">
            <div className="p-5 rounded-xl border border-card-border/80 bg-card/30">
              <span className="font-mono text-xs font-semibold text-accent uppercase tracking-wider block mb-1">
                {t.about.education}
              </span>
              <h3 className="text-base font-bold text-foreground mb-1 leading-snug">
                {t.about.educationDetail}
              </h3>
              <p className="text-muted text-xs leading-relaxed">
                {t.about.educationSchool}
              </p>
            </div>

            <div className="p-5 rounded-xl border border-card-border/80 bg-card/30">
              <span className="font-mono text-xs font-semibold text-accent uppercase tracking-wider block mb-1">
                {t.about.languages}
              </span>
              <p className="text-muted text-sm leading-relaxed">
                {t.about.languagesDetail}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
