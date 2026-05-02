"use client";

import { useLanguage } from "@/contexts/LanguageContext";

const experienceKeys = ["ufal", "rotas4me", "camara", "freelancer"] as const;

const CV_PDF_HREF = encodeURI("/Fabrício Santos - Desenvolvedor Full-Stack.pdf");

export function Experience() {
  const { t } = useLanguage();

  return (
    <section
      id="experiencia"
      className="scroll-mt-24 lg:scroll-mt-28 py-16 sm:py-20 md:py-24 border-t border-card-border"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between mb-8 sm:mb-12">
          <div className="max-w-2xl">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              {t.experience.title} <span className="text-accent">{t.experience.highlight}</span>
            </h2>
            <p className="text-muted text-sm sm:text-base">{t.experience.subtitle}</p>
          </div>
          <a
            href={CV_PDF_HREF}
            download="Fabricio-Santos-CV.pdf"
            className="inline-flex items-center justify-center gap-2 min-h-[48px] px-6 py-3 rounded-lg border border-card-border text-foreground font-semibold hover:border-accent hover:text-accent transition-colors shrink-0 w-full sm:w-auto"
            aria-label={t.experience.cvAriaLabel}
          >
            <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
            {t.experience.cvButton}
          </a>
        </div>
        <div className="space-y-8">
          {experienceKeys.map((key) => {
            const exp = t.experience.items[key];
            return (
              <div
                key={key}
                className="relative pl-6 sm:pl-8 pb-8 border-l-2 border-card-border last:pb-0 last:border-l-transparent min-w-0"
              >
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-accent" />
                <span className="text-xs sm:text-sm font-mono text-accent">{exp.period}</span>
                <h3 className="font-semibold text-base sm:text-lg mt-1 break-words">{exp.role}</h3>
                <p className="text-muted text-sm mb-2 break-words">{exp.company}</p>
                <p className="text-muted text-sm mb-3 leading-relaxed break-words">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {(key === "ufal"
                    ? ["TypeScript", "Python", "React Native", "NestJS", "PyTorch", "MongoDB", "Computer Vision", "IA"]
                    : key === "rotas4me"
                      ? ["TypeScript", "React", "Next.js", "React Native", "Node.js", "NestJS", "MongoDB", "Tailwind CSS"]
                      : key === "freelancer"
                        ? ["React.js", "Next.js", "Tailwind CSS", "HTML", "CSS", "JavaScript", "TypeScript", "Figma"]
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
