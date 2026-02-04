"use client";

import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

const projects = [
  {
    id: "rotas4me" as const,
    title: "Rotas4Me",
    tags: ["TypeScript", "React", "Next.js", "React Native", "NestJS", "MongoDB", "Tailwind CSS"],
    href: "https://rotas4me.com",
    image: "/rotas4me.png",
  },
  {
    id: "wounds" as const,
    title: "App de Feridas Vasculares e Diabéticas",
    tags: ["TypeScript", "Python", "React Native", "NestJS", "PyTorch", "MongoDB", "Computer Vision", "IA"],
    href: "https://www.linkedin.com/posts/fabricio-ss_computervision-inteligenciaartificial-healthtech-ugcPost-7421502015228231680-fXIx?utm_source=share&utm_medium=member_desktop&rcm=ACoAADsdYYABd3R5pL8IUkZcevSdve3A53X6nyI",
    image: "/projeto-de-pesquisa.png",
  },
  {
    id: "panel" as const,
    title: "Painel Eletrônico Legislativo",
    tags: ["React.js", "Next.js", "Tailwind CSS", "Node.js", "PostgreSQL", "API REST"],
    href: "https://www.linkedin.com/posts/fabricio-ss_gestaetopaeqblica-transformaaexaetodigital-activity-7306358465902346240-h0Sv?utm_source=share&utm_medium=member_desktop&rcm=ACoAADsdYYABd3R5pL8IUkZcevSdve3A53X6nyI",
    image: "/sistema-painel-eletronico.png",
  },
  {
    id: "filmmaker" as const,
    title: "Site Filmmaker",
    tags: ["React", "Next.js", "Tailwind CSS", "Design"],
    href: "https://site-junior-ribeiro.vercel.app/",
    image: "/site-filmmeker.png",
  },
  {
    id: "trayopen" as const,
    title: "TrayOpen",
    tags: ["Electron", "TypeScript", "Sentry", "Desktop", "Cross-platform"],
    href: "https://github.com/Fabricio-Antonio/TrayOpen",
    image: "/trayopen.png",
  },
];

export function Projects() {
  const { t } = useLanguage();

  return (
    <section id="projetos" className="py-24 border-t border-card-border">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-bold mb-4">
          {t.projects.title} <span className="text-accent">{t.projects.highlight}</span>
        </h2>
        <p className="text-muted mb-12 max-w-2xl">{t.projects.subtitle}</p>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group block overflow-hidden rounded-xl bg-card border border-card-border hover:border-accent/50 transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden bg-card-border/50">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-5xl text-muted/50 group-hover:text-accent/50 transition-colors">
                      {project.title.charAt(0)}
                    </span>
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-lg mb-2 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted text-sm mb-4 line-clamp-3">
                  {t.projects.items[project.id].description}
                </p>
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
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
