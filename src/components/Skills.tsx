"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import * as SimpleIcons from "simple-icons";

type Tech = {
  name: string;
  iconKey?: string; // simple-icons export key (e.g. "siHtml5")
};

export function Skills() {
  const { t } = useLanguage();

  const technologies: Tech[] = [
    { name: "HTML5", iconKey: "siHtml5" },
    // simple-icons doesn't provide a distinct siCss3 in this package version.
    { name: "CSS3", iconKey: "siCss" },
    { name: "JavaScript", iconKey: "siJavascript" },
    { name: "TypeScript", iconKey: "siTypescript" },
    { name: "Python", iconKey: "siPython" },
    { name: "Rust", iconKey: "custom-rust-crab" },
    { name: "Figma", iconKey: "siFigma" },
    { name: "React", iconKey: "siReact" },
    { name: "Next.js", iconKey: "siNextdotjs" },
    { name: "TailwindCSS", iconKey: "siTailwindcss" },
    { name: "Bootstrap", iconKey: "siBootstrap" },
    { name: "Electron", iconKey: "siElectron" },
    { name: "Node", iconKey: "siNodedotjs" },
    { name: "Express", iconKey: "siExpress" },
    { name: "NestJS", iconKey: "siNestjs" },
    { name: "PyTorch", iconKey: "siPytorch" },
    { name: "PostgreSQL", iconKey: "siPostgresql" },
    { name: "MongoDB", iconKey: "siMongodb" },
    { name: "Mongoose", iconKey: "siMongoose" },
    { name: "MySQL", iconKey: "siMysql" },
    { name: "Prisma", iconKey: "siPrisma" },
    { name: "DBeaver", iconKey: "siDbeaver" },
    { name: "Cypress", iconKey: "siCypress" },
    { name: "Jest", iconKey: "siJest" },
    { name: "Postman", iconKey: "siPostman" },
    { name: "Insomnia", iconKey: "siInsomnia" },
    { name: "Swagger", iconKey: "siSwagger" },
    { name: "Railway", iconKey: "siRailway" },
    { name: "GCP", iconKey: "siGooglecloud" },
    { name: "Docker", iconKey: "siDocker" },
    { name: "Sentry", iconKey: "siSentry" },
    { name: "Git", iconKey: "siGit" },
    { name: "GitHub Actions", iconKey: "siGithubactions" },
    { name: "Arch Linux", iconKey: "siArchlinux" },
  ];

  const getIconSvg = (iconKey?: string) => {
    if (!iconKey) return null;
    if (iconKey === "custom-rust-crab") {
      const fill = "#f74c00";
      const stroke = "#b93800";
      return `
        <svg width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" stroke="${stroke}" stroke-width="0.9" stroke-linecap="round" stroke-linejoin="round">
            <!-- body -->
            <path d="M7.2 13.2c0-2.5 2.2-4.6 4.8-4.6s4.8 2.1 4.8 4.6c0 2.9-2.2 4.9-4.8 4.9s-4.8-2-4.8-4.9z" fill="${fill}" />
            <!-- eyes -->
            <circle cx="10.2" cy="10.1" r="0.65" fill="#ffffff" />
            <circle cx="13.8" cy="10.1" r="0.65" fill="#ffffff" />
            <circle cx="10.2" cy="10.1" r="0.25" fill="#111827" stroke="none" />
            <circle cx="13.8" cy="10.1" r="0.25" fill="#111827" stroke="none" />
            <!-- smile -->
            <path d="M10.6 14.4c.5.5 1.3.5 1.8 0" />
            <!-- left claw -->
            <path d="M6.6 12.2c-1.1-.3-2.2.3-2.7 1.1" />
            <path d="M4.3 13.3c-.7.9-.7 2.2.1 3" />
            <path d="M6.6 14.2c-1.1.1-2.1-.3-2.2-1" />
            <!-- right claw -->
            <path d="M17.4 12.2c1.1-.3 2.2.3 2.7 1.1" />
            <path d="M19.7 13.3c.7.9.7 2.2-.1 3" />
            <path d="M17.4 14.2c1.1.1 2.1-.3 2.2-1" />
            <!-- legs -->
            <path d="M8.1 16.6l-1.7 1.2" />
            <path d="M9.6 17.7l-1.3 1.6" />
            <path d="M15.9 16.6l1.7 1.2" />
            <path d="M14.4 17.7l1.3 1.6" />
          </g>
        </svg>
      `.trim();
    }
    const icon = (SimpleIcons as any)[iconKey] as
      | { svg?: string; hex?: string }
      | undefined;
    if (!icon?.svg) return null;
    // Apply brand color from simple-icons so logos are "colored".
    // Special case: Railway should always render in white to match the dark background.
    const fill =
      iconKey === "siRailway" ? "#ffffff" : icon.hex ? `#${icon.hex}` : "currentColor";
    const svgWithFill = icon.svg.replace(
      "<svg",
      `<svg width="100%" height="100%" preserveAspectRatio="xMidYMid meet" fill="${fill}"`
    );

    // simple-icons renders icons mostly with a single <path> and no fill attributes.
    // Some icons may not inherit fill from <svg> reliably, so we also inject fill into paths.
    return svgWithFill.replace(/<path\b/g, `<path fill="${fill}"`);
  };

  const marqueeItems = [...technologies, ...technologies];

  return (
    <section id="habilidades" className="py-16 sm:py-20 md:py-24 border-t border-card-border">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">
          {t.skills.title} <span className="text-accent">{t.skills.highlight}</span>
        </h2>
        <p className="text-muted text-sm sm:text-base mb-8 sm:mb-12 max-w-2xl leading-relaxed">
          {t.skills.subtitle}
        </p>

        <div className="rounded-2xl border border-card-border bg-card/30 p-4 sm:p-6">
          <div className="overflow-hidden">
            <div className="flex flex-nowrap w-max tech-marquee">
              {marqueeItems.map((tech, idx) => {
                const svg = getIconSvg(tech.iconKey);
                return (
                  <span
                    key={`${tech.name}-${idx}`}
                    role="img"
                    aria-label={tech.name}
                    className="group inline-flex items-center justify-center w-12 h-12 sm:w-13 sm:h-13 rounded-xl bg-transparent border border-transparent text-muted transition-colors flex-none mx-2"
                  >
                    {svg ? (
                      <span
                        className="group-hover:opacity-95 transition-opacity"
                        // simple-icons SVGs have paths without explicit fill.
                        dangerouslySetInnerHTML={{ __html: svg }}
                      />
                    ) : (
                      <span className="px-2 text-[10px] leading-tight text-center font-semibold">
                        {tech.name}
                      </span>
                    )}
                  </span>
                );
              })}
            </div>
          </div>
          <style jsx global>{`
            @keyframes tech-marquee {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }

            .tech-marquee {
              animation: tech-marquee 28s linear infinite;
            }

            .tech-marquee svg {
              display: block;
              width: 100%;
              height: 100%;
            }

            .tech-marquee:hover {
              animation-play-state: paused;
            }

            @media (prefers-reduced-motion: reduce) {
              .tech-marquee {
                animation: none;
              }
            }
          `}</style>
        </div>
      </div>
    </section>
  );
}
