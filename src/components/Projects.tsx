"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useId, useState, useCallback, useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const projects = [
  {
    id: "nordon" as const,
    title: "NordOn",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    href: "https://nordon.com.br",
    image: "/nordon.png",
  },
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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [openProject, setOpenProject] = useState<Project | null>(null);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const titleId = useId();
  const total = projects.length;
  const containerRef = useRef<HTMLDivElement>(null);

  const prevProject = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  const nextProject = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % total);
  }, [total]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (openProject) {
        if (e.key === "Escape") setOpenProject(null);
        return;
      }
      if (e.key === "ArrowLeft") prevProject();
      if (e.key === "ArrowRight") nextProject();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [openProject, prevProject, nextProject]);

  // Modal overflow lock
  useEffect(() => {
    if (!openProject) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [openProject]);

  // Touch handlers for swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
    setTouchEnd(null);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > 45) {
      nextProject();
    } else if (distance < -45) {
      prevProject();
    }
    setTouchStart(null);
    setTouchEnd(null);
  };

  const modalItem =
    openProject !== null
      ? t.projects.items[openProject.id as keyof typeof t.projects.items]
      : null;

  return (
    <section
      id="projetos"
      className="scroll-mt-24 py-16 sm:py-20 border-b border-card-border overflow-hidden"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
            {t.projects.title} <span className="text-accent">{t.projects.highlight}</span>
          </h2>
          <p className="text-muted text-sm sm:text-base mt-2 max-w-xl leading-relaxed">
            {t.projects.subtitle}
          </p>
        </div>

        {/* Card Deck Area - with Fluid Hand-Held Transition */}
        <div className="relative flex items-center justify-center">
          
          {/* Left Arrow Button (Beside the Cards) */}
          <button
            type="button"
            onClick={prevProject}
            className="absolute left-0 sm:left-1 md:left-3 z-40 w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-card-border bg-card/90 backdrop-blur-md text-foreground hover:text-accent hover:border-accent flex items-center justify-center transition-all duration-200 shadow-xl cursor-pointer select-none active:scale-95 group"
            aria-label="Projeto anterior"
          >
            <svg
              className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

{/* Cards Deck Container with 3D Perspective */}
           <div
             ref={containerRef}
             onTouchStart={handleTouchStart}
             onTouchMove={handleTouchMove}
             onTouchEnd={handleTouchEnd}
             className="relative w-full h-[480px] sm:h-[520px] flex items-center justify-center select-none"
             style={{ perspective: "1400px" }}
           >
{/* Ambient blue glow behind cards */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  filter: "blur(80px)",
                  transform: "scale(1.3)",
                  opacity: 0.6,
                  background: "radial-gradient(ellipse at center, rgba(34, 211, 238, 0.35) 0%, transparent 65%)",
                }}
                aria-hidden="true"
              />
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  filter: "blur(120px)",
                  transform: "scale(1.6)",
                  opacity: 0.35,
                  background: "radial-gradient(ellipse at center, rgba(34, 211, 238, 0.25) 0%, transparent 65%)",
                }}
                aria-hidden="true"
              />
            {projects.map((project, index) => {
              const copy = t.projects.items[project.id as keyof typeof t.projects.items];

              // Relative circular distance to currentIndex:
              let diff = index - currentIndex;
              if (diff > total / 2) diff -= total;
              if (diff < -total / 2) diff += total;

              const isCenter = diff === 0;
              const isLeft = diff === -1;
              const isRight = diff === 1;

              // Compute fluid physical transform and depth
              let transform = "";
              let zIndex = 0;
              let opacity = 0;
              let pointerEvents: "auto" | "none" = "none";
              let borderColor = "rgba(255, 255, 255, 0.08)";
              let boxShadow = "none";

              if (isCenter) {
                transform = "translate3d(0, -16px, 40px) rotate(0deg) scale(1)";
                zIndex = 30;
                opacity = 1;
                pointerEvents = "auto";
                borderColor = "rgba(34, 211, 238, 0.65)";
                boxShadow = "0 24px 48px -12px rgba(0, 0, 0, 0.7), 0 0 25px -4px rgba(34, 211, 238, 0.18)";
              } else if (isLeft) {
                transform = "translate3d(calc(-50% - clamp(14px, 13vw, 85px)), 14px, -15px) rotate(-7.5deg) scale(0.92)";
                zIndex = 15;
                opacity = 0.55;
                pointerEvents = "auto";
                borderColor = "rgba(255, 255, 255, 0.08)";
                boxShadow = "0 14px 28px -10px rgba(0, 0, 0, 0.5)";
              } else if (isRight) {
                transform = "translate3d(calc(50% + clamp(14px, 13vw, 85px)), 14px, -15px) rotate(7.5deg) scale(0.92)";
                zIndex = 15;
                opacity = 0.55;
                pointerEvents = "auto";
                borderColor = "rgba(255, 255, 255, 0.08)";
                boxShadow = "0 14px 28px -10px rgba(0, 0, 0, 0.5)";
              } else if (diff < -1) {
                // Stacked smoothly behind to the left
                transform = "translate3d(-110%, 30px, -60px) rotate(-14deg) scale(0.82)";
                zIndex = 0;
                opacity = 0;
                pointerEvents = "none";
              } else {
                // Stacked smoothly behind to the right
                transform = "translate3d(110%, 30px, -60px) rotate(14deg) scale(0.82)";
                zIndex = 0;
                opacity = 0;
                pointerEvents = "none";
              }

              const handleClick = () => {
                if (isCenter) {
                  setOpenProject(project);
                } else if (isLeft) {
                  prevProject();
                } else if (isRight) {
                  nextProject();
                }
              };

              return (
                <div
                  key={project.id}
                  onClick={handleClick}
                  style={{
                    transform,
                    zIndex,
                    opacity,
                    pointerEvents,
                    borderColor,
                    boxShadow,
                    height: "440px",
                    transition:
                      "transform 550ms cubic-bezier(0.2, 0.9, 0.2, 1), opacity 450ms ease, border-color 300ms ease, box-shadow 450ms ease",
                    transformOrigin: "bottom center",
                    backfaceVisibility: "hidden",
                    willChange: "transform, opacity",
                  }}
                  className="absolute top-4 w-[280px] sm:w-[340px] md:w-[380px] rounded-2xl bg-[#12141c] border overflow-hidden flex flex-col justify-between cursor-pointer"
                >
                  {/* Image Cover */}
                  <div className="relative h-44 sm:h-48 w-full bg-card-border/40 shrink-0 border-b border-card-border/60">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 280px, 380px"
                    />
                    {isCenter && (
                      <div className="absolute top-2.5 right-2.5 px-2.5 py-1 rounded-full bg-background/80 backdrop-blur-md border border-accent/40 text-[10px] font-mono font-semibold text-accent uppercase tracking-wider">
                        Em foco
                      </div>
                    )}
                  </div>

                  {/* Card Content */}
                  <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between text-left">
                    <div>
                      <h3 className="font-bold text-base sm:text-lg text-foreground mb-1 group-hover:text-accent transition-colors line-clamp-1">
                        {project.title}
                      </h3>
                      <p className="text-accent/90 text-xs sm:text-sm font-medium line-clamp-2 leading-snug mb-2">
                        {copy.highlight}
                      </p>
                      <p className="text-muted text-xs sm:text-sm line-clamp-2 leading-relaxed">
                        {copy.description}
                      </p>
                    </div>

                    <div className="mt-3 pt-3 border-t border-card-border/50 flex flex-wrap items-center justify-between gap-2">
                      <div className="flex flex-wrap gap-1.5">
                        {project.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-accent/10 text-accent"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {isCenter && (
                        <span className="text-xs font-mono text-accent font-semibold flex items-center gap-1">
                          <span>Ver case</span>
                          <span>→</span>
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Arrow Button (Beside the Cards) */}
          <button
            type="button"
            onClick={nextProject}
            className="absolute right-0 sm:right-1 md:right-3 z-40 w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-card-border bg-card/90 backdrop-blur-md text-foreground hover:text-accent hover:border-accent flex items-center justify-center transition-all duration-200 shadow-xl cursor-pointer select-none active:scale-95 group"
            aria-label="Próximo projeto"
          >
            <svg
              className="w-5 h-5 group-hover:translate-x-0.5 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Dot indicators Below Deck */}
        <div className="flex items-center justify-center gap-2 mt-4" role="tablist" aria-label="Projetos">
          {projects.map((_, index) => (
            <button
              key={index}
              type="button"
              role="tab"
              aria-selected={index === currentIndex}
              aria-label={`Ir para o projeto ${index + 1}`}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-accent scale-125"
                  : "bg-zinc-600/40 hover:bg-zinc-600/70"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Case Details Modal */}
      {openProject && modalItem && (
        <div
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-3 sm:p-6 pt-[max(0.75rem,env(safe-area-inset-top))] pb-[max(0.75rem,env(safe-area-inset-bottom))]"
          role="presentation"
        >
          <button
            type="button"
            className="absolute inset-0 bg-background/85 backdrop-blur-sm"
            aria-label={t.projects.closeModal}
            onClick={() => setOpenProject(null)}
          />
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            className="relative z-10 w-full max-w-lg max-h-[min(85dvh,720px)] sm:max-h-[min(90vh,720px)] overflow-y-auto overscroll-contain rounded-2xl border border-card-border bg-card shadow-2xl shadow-black/50"
          >
            <div className="relative h-44 sm:h-52 shrink-0 border-b border-card-border bg-card-border/30">
              <Image
                src={openProject.image}
                alt={openProject.title}
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
                ✕
              </button>
            </div>
            <div className="p-5 sm:p-6 space-y-5">
              <div>
                <h3 id={titleId} className="text-xl font-bold mb-1.5 break-words">
                  {openProject.title}
                </h3>
                <p className="text-accent text-sm font-medium leading-snug">{modalItem.highlight}</p>
              </div>
              <p className="text-muted text-sm leading-relaxed">{modalItem.description}</p>

              <CaseBlock label={t.projects.labels.problem} text={modalItem.problem} />
              <CaseBlock label={t.projects.labels.result} text={modalItem.result} />
              <CaseBlock label={t.projects.labels.role} text={modalItem.role} />
              
              <div>
                <p className="text-xs font-mono font-semibold text-accent uppercase tracking-wider mb-1.5">
                  {t.projects.labels.stack}
                </p>
                <p className="text-muted text-sm leading-relaxed">{modalItem.stackSummary}</p>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-1">
                {openProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded text-xs font-mono bg-accent/10 text-accent"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <Link
                href={openProject.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full sm:w-auto min-h-[46px] items-center justify-center px-6 py-2.5 rounded-xl bg-accent text-background text-sm font-semibold hover:bg-cyan-300 transition-colors"
              >
                {t.projects.visit}
                <span className="ml-1.5 font-mono text-xs">↗</span>
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
      <p className="text-xs font-mono font-semibold text-accent uppercase tracking-wider mb-1">
        {label}
      </p>
      <p className="text-muted text-sm leading-relaxed">{text}</p>
    </div>
  );
}
