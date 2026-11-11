"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import * as SimpleIcons from "simple-icons";

type Tech = {
  name: string;
  iconKey?: string;
  isAws?: boolean;
  isCss3?: boolean;
  customFill?: string;
};

const row1Technologies: Tech[] = [
  { name: "TypeScript", iconKey: "siTypescript" },
  { name: "Next.js", iconKey: "siNextdotjs", customFill: "#ffffff" },
  { name: "React", iconKey: "siReact" },
  { name: "React Native", iconKey: "siReact" },
  { name: "Expo", iconKey: "siExpo", customFill: "#ffffff" },
  { name: "Tailwind CSS", iconKey: "siTailwindcss" },
  { name: "Styled Components", iconKey: "siStyledcomponents" },
  { name: "Node.js", iconKey: "siNodedotjs" },
  { name: "NestJS", iconKey: "siNestjs" },
  { name: "FastAPI", iconKey: "siFastapi" },
  { name: "Python", iconKey: "siPython" },
  { name: "PyTorch", iconKey: "siPytorch" },
  { name: "OpenCV", iconKey: "siOpencv" },
  { name: "Anaconda", iconKey: "siAnaconda" },
  { name: "AWS", isAws: true },
  { name: "Docker", iconKey: "siDocker" },
  { name: "Git", iconKey: "siGit" },
  { name: "Railway", iconKey: "siRailway", customFill: "#ffffff" },
];

const row2Technologies: Tech[] = [
  { name: "JavaScript", iconKey: "siJavascript" },
  { name: "GraphQL", iconKey: "siGraphql" },
  { name: "PostgreSQL", iconKey: "siPostgresql" },
  { name: "MySQL", iconKey: "siMysql" },
  { name: "MongoDB", iconKey: "siMongodb" },
  { name: "Redis", iconKey: "siRedis" },
  { name: "Prisma", iconKey: "siPrisma" },
  { name: "Pytest", iconKey: "siPytest" },
  { name: "Jest", iconKey: "siJest" },
  { name: "Cypress", iconKey: "siCypress" },
  { name: "Grafana", iconKey: "siGrafana" },
  { name: "CSS3", isCss3: true },
  { name: "GitHub Actions", iconKey: "siGithubactions" },
  { name: "Linux", iconKey: "siLinux" },
  { name: "Electron", iconKey: "siElectron" },
  { name: "Postman", iconKey: "siPostman" },
  { name: "Figma", iconKey: "siFigma" },
  { name: "HTML5", iconKey: "siHtml5" },
];

export function Skills() {
  const { t } = useLanguage();

  const getIconSvg = (tech: Tech) => {
    if (tech.isAws) {
      // Crisp official AWS logo with letters and smile arrow in AWS orange #FF9900
      return `
        <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g fill="#FF9900" fill-rule="evenodd">
            <path d="M6.763 11.212c0 .296.032.535.088.71.064.176.144.368.256.576.04.063.056.127.056.183 0 .08-.048.16-.152.24l-.503.335a.383.383 0 01-.208.072c-.08 0-.16-.04-.239-.112a2.47 2.47 0 01-.287-.375 6.18 6.18 0 01-.248-.471c-.622.734-1.405 1.101-2.347 1.101-.67 0-1.205-.191-1.596-.574-.39-.384-.59-.894-.59-1.533 0-.678.24-1.23.726-1.644.487-.415 1.133-.623 1.955-.623.272 0 .551.024.846.064.296.04.6.104.918.176v-.583c0-.607-.127-1.03-.375-1.277-.255-.248-.686-.367-1.3-.367-.28 0-.568.031-.863.103-.295.072-.583.16-.862.272a2.4 2.4 0 01-.28.104.488.488 0 01-.127.023c-.112 0-.168-.08-.168-.247v-.391c0-.128.016-.224.056-.28a.597.597 0 01.224-.167 4.577 4.577 0 011.005-.36 4.84 4.84 0 011.246-.151c.95 0 1.644.216 2.091.647.44.43.662 1.085.662 1.963v2.586h.016zm-3.24 1.214c.263 0 .534-.048.822-.144a1.78 1.78 0 00.758-.51 1.27 1.27 0 00.272-.512c.047-.191.08-.423.08-.694v-.335a6.66 6.66 0 00-.735-.136 6.02 6.02 0 00-.75-.048c-.535 0-.926.104-1.19.32-.263.215-.39.518-.39.917 0 .375.095.655.295.846.191.2.47.296.838.296zm6.41.862c-.144 0-.24-.024-.304-.08-.064-.048-.12-.16-.168-.311L7.586 6.726a1.398 1.398 0 01-.072-.32c0-.128.064-.2.191-.2h.783c.151 0 .255.025.31.08.065.048.113.16.16.312l1.342 5.284 1.245-5.284c.04-.16.088-.264.151-.312a.549.549 0 01.32-.08h.638c.152 0 .256.025.32.08.063.048.12.16.151.312l1.261 5.348 1.381-5.348c.048-.16.104-.264.16-.312a.52.52 0 01.311-.08h.743c.127 0 .2.065.2.2 0 .04-.009.08-.017.128a1.137 1.137 0 01-.056.2l-1.923 6.17c-.048.16-.104.263-.168.311a.51.51 0 01-.303.08h-.687c-.15 0-.255-.024-.32-.08-.063-.056-.119-.16-.15-.32L12.32 7.747l-1.23 5.14c-.04.16-.087.264-.15.32-.065.056-.177.08-.32.08l-.686.001zm10.256.215c-.415 0-.83-.048-1.229-.143-.399-.096-.71-.2-.918-.32-.128-.071-.215-.151-.247-.223a.563.563 0 01-.048-.224v-.407c0-.167.064-.247.183-.247.048 0 .096.008.144.024.048.016.12.048.2.08.271.12.566.215.878.279.32.064.63.096.95.096.502 0 .894-.088 1.165-.264a.86.86 0 00.415-.758.777.777 0 00-.215-.559c-.144-.151-.416-.287-.807-.415l-1.157-.36c-.583-.183-1.014-.454-1.277-.813a1.902 1.902 0 01-.4-1.158c0-.335.073-.63.216-.886.144-.255.335-.479.575-.654.24-.184.51-.32.83-.415.32-.096.655-.136 1.006-.136.175 0 .36.008.535.032.183.024.35.056.518.088.16.04.312.08.455.127.144.048.256.096.336.144a.69.69 0 01.24.2.43.43 0 01.071.263v.375c0 .168-.064.256-.184.256a.83.83 0 01-.303-.096 3.652 3.652 0 00-1.532-.311c-.455 0-.815.071-1.062.223-.248.152-.375.383-.375.71 0 .224.08.416.24.567.16.152.454.304.877.44l1.134.358c.574.184.99.44 1.237.767.247.327.367.702.367 1.117 0 .343-.072.655-.207.926a2.157 2.157 0 01-.583.703c-.248.2-.543.343-.886.447-.36.111-.734.167-1.142.167z"/>
            <path d="M.378 15.475c3.384 1.963 7.56 3.153 11.877 3.153 2.914 0 6.114-.607 9.06-1.852.44-.2.814.287.383.607-2.626 1.94-6.442 2.969-9.722 2.969-4.598 0-8.74-1.7-11.87-4.526-.247-.223-.024-.527.272-.351zm23.531-.2c.287.36-.08 2.826-1.485 4.007-.215.184-.423.088-.327-.151l.175-.439c.343-.88.802-2.198.52-2.555-.336-.43-2.22-.207-3.074-.103-.255.032-.295-.192-.063-.36 1.5-1.053 3.967-.75 4.254-.399z"/>
          </g>
        </svg>
      `.trim();
    }

    if (tech.isCss3) {
      // Official CSS3 shield in #1572B6
      return `
        <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill="#1572B6" d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.805-2.621.727-2.652-.727-.182-1.953H6.03l.427 4.644 5.52 1.533 5.55-1.533.733-7.97H8.715l.153-1.637h9.723l.006-2.21z"/>
        </svg>
      `.trim();
    }

    if (!tech.iconKey) return null;

    const icon = (
      SimpleIcons as Record<string, { svg?: string; hex?: string } | undefined>
    )[tech.iconKey];
    if (!icon?.svg) return null;

    const fill =
      tech.customFill ||
      (icon.hex ? `#${icon.hex}` : "currentColor");

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
