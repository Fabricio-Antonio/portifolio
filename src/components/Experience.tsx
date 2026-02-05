"use client";

import { useLanguage } from "@/contexts/LanguageContext";

const experienceKeys = ["ufal", "rotas4me", "camara", "freelancer"] as const;

export function Experience() {
  const { t } = useLanguage();

  return (
    <section id="experiencia" className="py-24 border-t border-card-border">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-bold mb-4">
          {t.experience.title} <span className="text-accent">{t.experience.highlight}</span>
        </h2>
        <p className="text-muted mb-12 max-w-2xl">{t.experience.subtitle}</p>
        <div className="space-y-8">
          {experienceKeys.map((key) => {
            const exp = t.experience.items[key];
            return (
              <div
                key={key}
                className="relative pl-8 pb-8 border-l-2 border-card-border last:pb-0 last:border-l-transparent"
              >
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-accent" />
                <span className="text-sm font-mono text-accent">{exp.period}</span>
                <h3 className="font-semibold text-lg mt-1">{exp.role}</h3>
                <p className="text-muted text-sm mb-2">{exp.company}</p>
                <p className="text-muted text-sm mb-3">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {(key === "ufal"
                    ? ["TypeScript", "Python", "React Native", "NestJS", "PyTorch", "MongoDB", "Computer Vision", "IA"]
                    : key === "rotas4me"
                      ? ["TypeScript", "React", "Next.js", "React Native", "Node.js", "NestJS", "MongoDB", "Tailwind CSS"]
                      : key === "freelancer"
                        ? ["React.js", "Next.js", "Tailwind CSS", "HTML", "CSS", "JavaScript", "TypeScript", "Figama"]
                        : ["React.js", "Next.js", "Tailwind CSS", "Node.js", "PostgreSQL", "API REST"]
                  ).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 rounded text-xs bg-accent/10 text-accent"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
