"use client";

import { useLanguage } from "@/contexts/LanguageContext";

export function About() {
  const { t } = useLanguage();

  return (
    <section id="sobre" className="py-16 sm:py-20 md:py-24 border-t border-card-border">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">
          {t.about.title} <span className="text-accent">{t.about.highlight}</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start md:items-center">
          <div className="min-w-0">
            <p className="text-muted text-sm sm:text-base leading-relaxed mb-4">
              {t.about.paragraph1} <strong>{t.about.experience}</strong>{" "}
              {t.about.paragraph1b}
            </p>
            <p className="text-muted text-sm sm:text-base leading-relaxed mb-4">
              {t.about.paragraph2}
            </p>
            <p className="text-muted text-sm sm:text-base leading-relaxed mb-4">
              {t.about.paragraph3}
            </p>
            <div className="flex flex-wrap gap-2 sm:gap-3 mt-6">
              {[
                "React",
                "TypeScript",
                "Next.js",
                "NestJS",
                "React Native",
                "Tailwind CSS",
                "PostgreSQL",
                "MongoDB",
                "PyTorch",
                "Docker",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-2 sm:px-4 rounded-lg bg-card border border-card-border text-xs sm:text-sm text-muted hover:border-accent hover:text-accent transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
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
