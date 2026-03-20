"use client";

import { useLanguage } from "@/contexts/LanguageContext";

const skillKeys = {
  languages: ["HTML5", "CSS3", "JavaScript", "TypeScript", "Node.js", "Python", "SQL"],
  frameworks: [
    "React.js",
    "Next.js",
    "Tailwind CSS",
    "Styled Components",
    "Bootstrap",
    "Express",
    "Nest.js",
    "PyTorch",
  ],
  database: ["MySQL", "MongoDB", "PostgreSQL"],
  tools: [
    "Git",
    "GitHub",
    "GitHub Actions",
    "Figma",
    "Trello",
    "Linux",
    "Insomnia",
    "Shadcn",
    "Prisma",
    "Docker",
    "Mongoose",
    "Cypress",
    "Swagger",
    "Jest",
    "Sentry",
  ],
  methodologies: ["Scrum", "Kanban"],
} as const;

export function Skills() {
  const { t } = useLanguage();
  const categories = [
    { key: "languages" as const, title: t.skills.categories.languages },
    { key: "frameworks" as const, title: t.skills.categories.frameworks },
    { key: "database" as const, title: t.skills.categories.database },
    { key: "tools" as const, title: t.skills.categories.tools },
    { key: "methodologies" as const, title: t.skills.categories.methodologies },
  ];

  return (
    <section id="habilidades" className="py-16 sm:py-20 md:py-24 border-t border-card-border">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">
          {t.skills.title} <span className="text-accent">{t.skills.highlight}</span>
        </h2>
        <p className="text-muted text-sm sm:text-base mb-8 sm:mb-12 max-w-2xl">{t.skills.subtitle}</p>
        <div className="space-y-8 sm:space-y-10">
          {categories.map(({ key, title }) => (
            <div key={key}>
              <h3 className="text-sm font-semibold text-accent uppercase tracking-wider mb-4">
                {title}
              </h3>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {skillKeys[key].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-card border border-card-border text-xs sm:text-sm text-foreground hover:border-accent hover:bg-accent/5 transition-colors"
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
