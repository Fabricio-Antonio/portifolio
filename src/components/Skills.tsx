"use client";

import { useLanguage } from "@/contexts/LanguageContext";

const skillKeys = {
  frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "React Native"],
  backend: ["Node.js", "NestJS", "REST APIs", "PostgreSQL", "MongoDB"],
  devOps: ["Git", "Docker", "GitHub Actions", "Linux", "Testing & quality"],
} as const;

export function Skills() {
  const { t } = useLanguage();
  const categories = [
    { key: "frontend" as const, title: t.skills.categories.frontend },
    { key: "backend" as const, title: t.skills.categories.backend },
    { key: "devOps" as const, title: t.skills.categories.devOps },
  ];

  return (
    <section id="habilidades" className="py-16 sm:py-20 md:py-24 border-t border-card-border">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">
          {t.skills.title} <span className="text-accent">{t.skills.highlight}</span>
        </h2>
        <p className="text-muted text-sm sm:text-base mb-8 sm:mb-12 max-w-2xl leading-relaxed">
          {t.skills.subtitle}
        </p>
        <div className="grid md:grid-cols-3 gap-8 sm:gap-10">
          {categories.map(({ key, title }) => (
            <div key={key} className="min-w-0">
              <h3 className="text-sm font-semibold text-accent uppercase tracking-wider mb-4">
                {title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillKeys[key].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-full bg-card border border-card-border text-xs sm:text-sm text-foreground hover:border-accent hover:bg-accent/5 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
