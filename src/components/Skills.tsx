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
    { name: "CSS3", iconKey: "siCss3" },
    { name: "JavaScript", iconKey: "siJavascript" },
    { name: "TypeScript", iconKey: "siTypescript" },
    { name: "Python", iconKey: "siPython" },
    { name: "Rust", iconKey: "siRust" },
    { name: "Figma", iconKey: "siFigma" },
    { name: "React", iconKey: "siReact" },
    // React Native is not guaranteed in simple-icons -> fallback to text when missing.
    { name: "React Native" },
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
    { name: "Redis", iconKey: "siRedis" },
    { name: "Prisma", iconKey: "siPrisma" },
    { name: "DBeaver", iconKey: "siDbeaver" },
    { name: "Cypress", iconKey: "siCypress" },
    { name: "Jest", iconKey: "siJest" },
    { name: "Postman", iconKey: "siPostman" },
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
    const icon = (SimpleIcons as any)[iconKey] as
      | { svg?: string; hex?: string }
      | undefined;
    if (!icon?.svg) return null;
    // Apply brand color from simple-icons so logos are "colored".
    const fill = icon.hex ?? "currentColor";
    return icon.svg.replace(
      "<svg",
      `<svg width="100%" height="100%" preserveAspectRatio="xMidYMid meet" fill="${fill}"`
    );
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
                    className="group inline-flex items-center justify-center w-12 h-12 sm:w-13 sm:h-13 rounded-xl bg-card/60 border border-card-border text-muted hover:border-accent hover:bg-accent/5 transition-colors flex-none mx-1"
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
