"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { PageFlip } from "@/components/ui/PageFlip";

const experienceKeys = ["ufal", "rotas4me", "camara", "nordon", "freelancer"] as const;

const CV_PDF_HREF = encodeURI("/Fabrício Santos - Desenvolvedor Full-Stack.pdf");

const experienceTags: Record<string, string[]> = {
  ufal: ["TypeScript", "Python", "React Native", "NestJS", "PyTorch", "MongoDB", "Computer Vision", "IA"],
  rotas4me: ["TypeScript", "React", "Next.js", "React Native", "Node.js", "NestJS", "MongoDB", "Tailwind CSS"],
  camara: ["React.js", "Next.js", "Tailwind CSS", "Node.js", "PostgreSQL", "API REST"],
  nordon: ["TypeScript", "React", "Next.js", "Node.js", "NestJS", "PostgreSQL", "Tailwind CSS", "Docker"],
  freelancer: ["React.js", "Next.js", "Tailwind CSS", "HTML", "CSS", "JavaScript", "TypeScript", "Figma"],
};

function ExperiencePages({ exp, tags, isCurrent, key, details, t }: { exp: any; tags: string[]; isCurrent: boolean; key: string; details: readonly string[]; t: any }) {
  // Página 1: Cabeçalho + Descrição
  const page1 = (
    <div className="flex size-full flex-col p-5 sm:p-6 bg-[var(--paper)] text-zinc-900">
      <div className="mb-4 pb-3 border-b border-stone-200">
        <p className="font-medium text-base sm:text-lg text-zinc-900 mb-0.5">
          {exp.role}, {exp.company}
        </p>
        <time className="text-xs font-mono text-zinc-500">
          {exp.period}
        </time>
      </div>

      <p className="text-zinc-700 leading-relaxed mb-4 break-words flex-1 overflow-y-auto pr-2 text-sm">
        {exp.description}
      </p>

      <div className="mt-auto text-center text-[10px] text-zinc-400">
        {`${key} · 1/2`}
      </div>
    </div>
  );

  // Página 2: Tecnologias + Detalhes adicionais
  const page2 = (
    <div className="flex size-full flex-col p-5 sm:p-6 bg-[var(--paper)] text-zinc-900">
      <div className="mb-4 pb-3 border-b border-stone-200">
        <h4 className="font-medium text-base sm:text-lg text-zinc-900">
          {t.experience.techStack}
        </h4>
      </div>

      <div className="flex flex-wrap gap-2 mb-4" role="list" aria-label={t.experience.techStack}>
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-2.5 py-0.5 rounded text-xs font-medium bg-emerald-100 text-emerald-800 border border-emerald-300"
            role="listitem"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="border-t border-stone-200 pt-4 flex-1">
        <h5 className="font-medium text-xs text-zinc-500 mb-3 uppercase tracking-wider">{t.experience.roleDetails}</h5>
        <ul className="space-y-2 text-xs text-zinc-700 leading-relaxed">
          {details.map((detail, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-black mt-1 flex-shrink-0" />
              <span className="text-xs">{detail}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-auto text-center text-[9px] text-zinc-400">
        {`${key} · 2/2`}
      </div>
    </div>
  );

  return [page1, page2];
}

function CoverPage({ t }: { t: any }) {
  return (
    <div className="flex size-full flex-col items-center justify-center bg-gradient-to-br from-sky-600 via-cyan-600 to-sky-700 px-8 text-center text-white">
      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/10 flex items-center justify-center mb-4 border border-white/20">
        <span className="font-mono text-2xl sm:text-3xl font-bold text-white">
          {String.fromCharCode(60, 47, 62)}
        </span>
      </div>
      <h2 className="font-bold text-2xl sm:text-3xl leading-tight tracking-tight mb-2">
        {t.experience.coverTitle}
      </h2>
      <p className="text-base sm:text-lg opacity-80 max-w-md mx-auto">
        {t.experience.coverSubtitle}
      </p>
      <p className="absolute bottom-8 text-xs opacity-60">
        {t.experience.coverHint}
      </p>
    </div>
  );
}

function BackPage({ t }: { t: any }) {
  return (
    <div className="flex size-full flex-col items-center justify-center bg-gradient-to-br from-sky-600 via-cyan-600 to-sky-700 px-8 text-center text-white">
      <p className="font-medium text-xl sm:text-2xl tracking-tight mb-3">{t.experience.backTitle}</p>
      <p className="text-base opacity-70 leading-relaxed">
        {t.experience.backSubtitle}
        <br />
        <span className="text-xs mt-1 block">{t.experience.backAvailability}</span>
      </p>
    </div>
  );
}

export function Experience() {
  const { t } = useLanguage();

  const pages = [
    <CoverPage key="cover" t={t} />,
    ...ExperiencePages({
      exp: t.experience.items.ufal,
      tags: experienceTags.ufal,
      isCurrent: t.experience.items.ufal.period.includes("Atualmente"),
      key: "UFAL",
      details: t.experience.details.ufal,
      t,
    }),
    ...ExperiencePages({
      exp: t.experience.items.rotas4me,
      tags: experienceTags.rotas4me,
      isCurrent: t.experience.items.rotas4me.period.includes("Atualmente"),
      key: "Rotas4Me",
      details: t.experience.details.rotas4me,
      t,
    }),
    ...ExperiencePages({
      exp: t.experience.items.freelancer,
      tags: experienceTags.freelancer,
      isCurrent: false,
      key: "Monnik",
      details: t.experience.details.freelancer,
      t,
    }),
    ...ExperiencePages({
      exp: t.experience.items.nordon,
      tags: experienceTags.nordon,
      isCurrent: false,
      key: "NordOn",
      details: t.experience.details.nordon,
      t,
    }),
    ...ExperiencePages({
      exp: t.experience.items.camara,
      tags: experienceTags.camara,
      isCurrent: false,
      key: "Câmara",
      details: t.experience.details.camara,
      t,
    }),
    <BackPage key="back" t={t} />,
  ];

  return (
    <section
      id="experiencia"
      className="scroll-mt-24 py-16 sm:py-20 border-b border-card-border"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between mb-10">
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
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            {t.experience.cvButton}
          </a>
        </div>

        <div className="w-full max-w-2xl mx-auto">
          <PageFlip pages={pages} />
        </div>
      </div>
    </section>
  );
}