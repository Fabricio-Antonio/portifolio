"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useId, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const projects = [
  {
    id: "rotas4me" as const,
    title: "Rotas4Me",
    tags: ["TypeScript", "React Native", "NestJS", "MongoDB"],
    href: "https://rotas4me.com",
    image: "/rotas4me.png",
  },
  {
    id: "wounds" as const,
    title: "Cicatriz.AI",
    tags: ["React Native", "NestJS", "PyTorch", "IA"],
    href: "https://www.linkedin.com/posts/fabricio-ss_computervision-inteligenciaartificial-healthtech-ugcPost-7421502015228231680-fXIx?utm_source=share&utm_medium=member_desktop&rcm=ACoAADsdYYABd3R5pL8IUkZcevSdve3A53X6nyI",
    image: "/projeto-de-pesquisa.png",
  },
  {
    id: "panel" as const,
    title: "Painel Eletrônico Legislativo",
    tags: ["Next.js", "Node.js", "PostgreSQL", "Tempo real"],
    href: "https://www.linkedin.com/posts/fabricio-ss_gestaetopaeqblica-transformaaexaetodigital-activity-7306358465902346240-h0Sv?utm_source=share&utm_medium=member_desktop&rcm=ACoAADsdYYABd3R5pL8IUkZcevSdve3A53X6nyI",
    image: "/sistema-painel-eletronico.png",
  },
  {
    id: "filmmaker" as const,
    title: "Site Filmmaker",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    href: "https://site-junior-ribeiro.vercel.app/",
    image: "/site-filmmeker.png",
  },
  {
    id: "trayopen" as const,
    title: "TrayOpen",
    tags: ["Electron", "TypeScript", "Open Source"],
    href: "https://github.com/Fabricio-Antonio/TrayOpen",
    image: "/trayopen.png",
  },
  {
    id: "slynx" as const,
    title: "Slynx",
    tags: ["Rust", "Open Source", "UI language"],
    href: "https://github.com/Slynx-Language",
    image: "/slynx-icon.png",
  },
  {
    id: "gerdbot" as const,
    title: "GerdBot",
    tags: ["Next.js", "TypeScript", "EmailJS"],
    href: "https://gerdbot.com.br/",
    image: "/gerdbot.png",
  },
] as const;

type Project = (typeof projects)[number];

export function Projects() {
  const { t } = useLanguage();
  const [openProject, setOpenProject] = useState<Project | null>(null);
  const titleId = useId();

  useEffect(() => {
    if (!openProject) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenProject(null);
    };

    document.addEventListener("keydown", onKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [openProject]);

  const modalItem =
    openProject !== null
      ? t.projects.items[openProject.id as keyof typeof t.projects.items]
      : null;

  return (
    <section id="projetos" className="py-16 sm:py-20 md:py-24 border-t border-card-border">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">
          {t.projects.title} <span className="text-accent">{t.projects.highlight}</span>
        </h2>
        <p className="text-muted text-sm sm:text-base mb-8 sm:mb-12 max-w-2xl leading-relaxed">
          {t.projects.subtitle}
        </p>
        <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
          {projects.map((project) => {
            const copy = t.projects.items[project.id as keyof typeof t.projects.items];
            return (
              <button
                key={project.id}
                type="button"
                onClick={() => setOpenProject(project)}
                className="group text-left block w-full min-w-0 overflow-hidden rounded-xl bg-card border border-card-border hover:border-accent/50 transition-all duration-300 cursor-pointer touch-manipulation"
              >
                <div className="relative h-40 sm:h-48 overflow-hidden bg-card-border/50">
                  <Image
                    src={project.image}
                    alt=""
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="font-semibold text-base sm:text-lg mb-2 group-hover:text-accent transition-colors break-words">
                    {project.title}
                  </h3>
                  <p className="text-accent/90 text-xs sm:text-sm font-medium mb-2 line-clamp-2 leading-snug">
                    {copy.highlight}
                  </p>
                  <p className="text-muted text-sm mb-4 line-clamp-2">{copy.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 rounded text-xs bg-accent/10 text-accent"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {openProject && modalItem && (
        <div
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-3 sm:p-6 pt-[max(0.75rem,env(safe-area-inset-top))] pb-[max(0.75rem,env(safe-area-inset-bottom))]"
          role="presentation"
        >
          <button
            type="button"
            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
            aria-label={t.projects.closeModal}
            onClick={() => setOpenProject(null)}
          />
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            className="relative z-10 w-full max-w-lg max-h-[min(85dvh,720px)] sm:max-h-[min(90vh,720px)] overflow-y-auto overscroll-contain rounded-xl border border-card-border bg-card shadow-xl shadow-black/40"
          >
            <div className="relative h-44 sm:h-52 md:h-56 shrink-0 border-b border-card-border bg-card-border/30">
              <Image
                src={openProject.image}
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 32rem"
                priority
              />
              <button
                type="button"
                onClick={() => setOpenProject(null)}
                className="absolute top-3 right-3 flex h-9 w-9 items-center justify-center rounded-lg border border-card-border bg-card/90 text-foreground hover:border-accent hover:text-accent transition-colors"
                aria-label={t.projects.closeModal}
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-4 sm:p-6 space-y-5">
              <div>
                <h3 id={titleId} className="text-lg sm:text-xl font-semibold mb-2 pr-10 break-words">
                  {openProject.title}
                </h3>
                <p className="text-accent text-sm font-medium leading-snug">{modalItem.highlight}</p>
              </div>
              <p className="text-muted text-sm leading-relaxed">{modalItem.description}</p>

              <CaseBlock label={t.projects.labels.problem} text={modalItem.problem} />
              <CaseBlock label={t.projects.labels.result} text={modalItem.result} />
              <CaseBlock label={t.projects.labels.role} text={modalItem.role} />
              <div>
                <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-1.5">
                  {t.projects.labels.stack}
                </p>
                <p className="text-muted text-sm leading-relaxed">{modalItem.stackSummary}</p>
              </div>

              <div className="flex flex-wrap gap-2 pt-1">
                {openProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 rounded text-xs bg-accent/10 text-accent"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <Link
                href={openProject.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full sm:w-auto min-h-[48px] items-center justify-center px-8 py-3 rounded-lg bg-accent text-background font-semibold hover:bg-accent-muted transition-colors touch-manipulation"
              >
                {t.projects.visit}
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

function CaseBlock({ label, text }: { label: string; text: string }) {
  return (
    <div>
      <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-1.5">{label}</p>
      <p className="text-muted text-sm leading-relaxed">{text}</p>
    </div>
  );
}
