"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import * as SimpleIcons from "simple-icons";

type Tech = {
  name: string;
  iconKey?: string;
  isAws?: boolean;
};

const row1Technologies: Tech[] = [
  { name: "TypeScript", iconKey: "siTypescript" },
  { name: "Next.js", iconKey: "siNextdotjs" },
  { name: "React", iconKey: "siReact" },
  { name: "React Native", iconKey: "siReact" },
  { name: "Tailwind CSS", iconKey: "siTailwindcss" },
  { name: "Node.js", iconKey: "siNodedotjs" },
  { name: "NestJS", iconKey: "siNestjs" },
  { name: "Python", iconKey: "siPython" },
  { name: "PyTorch", iconKey: "siPytorch" },
  { name: "AWS", isAws: true },
  { name: "PostgreSQL", iconKey: "siPostgresql" },
  { name: "Docker", iconKey: "siDocker" },
  { name: "Git", iconKey: "siGit" },
];

const row2Technologies: Tech[] = [
  { name: "JavaScript", iconKey: "siJavascript" },
  { name: "MongoDB", iconKey: "siMongodb" },
  { name: "Google Cloud", iconKey: "siGooglecloud" },
  { name: "Electron", iconKey: "siElectron" },
  { name: "Figma", iconKey: "siFigma" },
  { name: "Prisma", iconKey: "siPrisma" },
  { name: "MySQL", iconKey: "siMysql" },
  { name: "Jest", iconKey: "siJest" },
  { name: "Cypress", iconKey: "siCypress" },
  { name: "Postman", iconKey: "siPostman" },
  { name: "GitHub Actions", iconKey: "siGithubactions" },
  { name: "Linux", iconKey: "siArchlinux" },
  { name: "Railway", iconKey: "siRailway" },
  { name: "HTML5", iconKey: "siHtml5" },
];

export function Skills() {
  const { t } = useLanguage();

  const getIconSvg = (tech: Tech) => {
    if (tech.isAws) {
      // Crisp AWS official smile logo in orange #FF9900
      return `
        <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.74 8.24c.08-.2.22-.36.41-.45.19-.09.41-.1.61-.03 1.09.4 2.22.6 3.36.6 2.5 0 4.14-1.28 4.14-3.23 0-1.85-1.46-3.02-3.84-3.02-2.82 0-4.75 1.7-4.75 4.15 0 .34.05.68.14 1 .06.2.03.42-.08.59-.11.17-.29.27-.49.27H6.1c-.24 0-.46-.14-.56-.35C5.16 6.8 5 5.86 5 4.88 5 1.83 7.82 0 12.3 0c4.54 0 7.42 2.19 7.42 5.15 0 3.3-2.6 5.4-6.86 5.4-1.46 0-2.86-.25-4.13-.74l-.99-.37z" fill="#FF9900"/>
          <path d="M22.88 16.92c-.31-.4-.84-.52-1.28-.29-4.22 2.22-9.25 2.13-13.43-.22-.38-.21-.86-.14-1.16.18-.3.32-.27.81.08 1.09 4.69 2.65 10.33 2.75 15.06.26.43-.23.57-.75.28-1.18l-.55-.84z" fill="#FF9900"/>
          <path d="M23.94 13.92c-.15-.43-.63-.65-1.06-.5l-3.32 1.18c-.41.15-.64.6-.52 1.02.12.42.56.67.98.56l2.12-.75-.75 2.12c-.15.42.08.88.5 1.03.42.15.88-.08 1.03-.5l1.18-3.32c.08-.24.04-.5-.16-.84z" fill="#FF9900"/>
        </svg>
      `.trim();
    }

    if (!tech.iconKey) return null;

    const icon = (
      SimpleIcons as Record<string, { svg?: string; hex?: string } | undefined>
    )[tech.iconKey];
    if (!icon?.svg) return null;

    const fill =
      tech.iconKey === "siRailway" ? "#ffffff" : icon.hex ? `#${icon.hex}` : "currentColor";
    const svgWithFill = icon.svg.replace(
      "<svg",
      `<svg width="100%" height="100%" preserveAspectRatio="xMidYMid meet" fill="${fill}"`
    );
    return svgWithFill.replace(/<path\b/g, `<path fill="${fill}"`);
  };

  const renderRow = (items: Tech[], reverse = false) => {
    // 3 repetitions for perfectly seamless infinite looping across any screen width
    const loopItems = [...items, ...items, ...items];

    return (
      <div className="overflow-hidden py-1.5 flex select-none">
        <div
          className={`flex items-center gap-3 sm:gap-4 shrink-0 ${
            reverse ? "animate-marquee-reverse" : "animate-marquee"
          } hover:[animation-play-state:paused]`}
        >
          {loopItems.map((tech, idx) => {
            const svg = getIconSvg(tech);

            return (
              <div
                key={`${tech.name}-${idx}`}
                className="inline-flex items-center gap-2.5 sm:gap-3 px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-xl bg-card/60 border border-card-border/80 hover:border-accent/50 hover:bg-card transition-all duration-200 shrink-0 shadow-sm group"
              >
                <div className="w-5 h-5 flex items-center justify-center shrink-0">
                  {svg ? (
                    <span
                      className="w-full h-full block group-hover:scale-110 transition-transform duration-200"
                      dangerouslySetInnerHTML={{ __html: svg }}
                    />
                  ) : (
                    <span className="w-2 h-2 rounded-full bg-accent" />
                  )}
                </div>
                <span className="text-xs sm:text-sm font-medium text-foreground/90 group-hover:text-foreground whitespace-nowrap">
                  {tech.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <section
      id="stack"
      className="scroll-mt-24 py-14 sm:py-16 border-y border-card-border/70 bg-card/10 overflow-hidden"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 mb-8 text-center sm:text-left">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
          {t.skills.title} <span className="text-accent">{t.skills.highlight}</span>
        </h2>
        <p className="text-muted text-sm sm:text-base mt-1.5 max-w-xl">
          {t.skills.subtitle}
        </p>
      </div>

      {/* Edge-to-edge (Full-bleed) Carousel */}
      <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-hidden">
        {/* Edge Gradient Fade Masks */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-36 bg-gradient-to-r from-background via-background/80 to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-36 bg-gradient-to-l from-background via-background/80 to-transparent z-10" />

        <div className="flex flex-col gap-2">
          {renderRow(row1Technologies, false)}
          {renderRow(row2Technologies, true)}
        </div>
      </div>

      <style jsx global>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-100% / 3));
          }
        }
        @keyframes marquee-reverse {
          0% {
            transform: translateX(calc(-100% / 3));
          }
          100% {
            transform: translateX(0);
          }
        }
        .animate-marquee {
          animation: marquee 35s linear infinite;
        }
        .animate-marquee-reverse {
          animation: marquee-reverse 35s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-marquee,
          .animate-marquee-reverse {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
