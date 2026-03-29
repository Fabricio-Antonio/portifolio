"use client";

import { useLanguage } from "@/contexts/LanguageContext";

export function About() {
  const { t } = useLanguage();

  return (
    <section
      id="sobre"
      className="scroll-mt-24 lg:scroll-mt-28 py-16 sm:py-20 md:py-24 border-t border-card-border"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">
          {t.about.title} <span className="text-accent">{t.about.highlight}</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
          <div className="min-w-0 space-y-6">
            <div className="rounded-xl border border-card-border bg-card p-5 sm:p-6">
              <h3 className="font-semibold text-accent mb-2 text-sm uppercase tracking-wide">
                {t.about.diffTitle}
              </h3>
              <p className="text-muted text-sm sm:text-base leading-relaxed">{t.about.diffText}</p>
            </div>
            <p className="text-muted text-sm sm:text-base leading-relaxed">
              {t.about.paragraph1} <strong className="text-foreground">{t.about.experience}</strong>{" "}
              {t.about.paragraph1b}
            </p>
            <p className="text-muted text-sm sm:text-base leading-relaxed">{t.about.paragraph2}</p>
            <p className="text-muted text-sm sm:text-base leading-relaxed">{t.about.paragraph3}</p>
          </div>
          <div className="space-y-6 min-w-0">
            <div>
              <h3 className="font-semibold text-accent mb-2">{t.about.education}</h3>
              <p className="text-muted text-sm leading-relaxed">{t.about.educationDetail}</p>
              <p className="text-muted text-sm leading-relaxed">{t.about.educationSchool}</p>
            </div>
            <div>
              <h3 className="font-semibold text-accent mb-2">{t.about.languages}</h3>
              <p className="text-muted text-sm leading-relaxed break-words">{t.about.languagesDetail}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
