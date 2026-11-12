"use client";

import { useState } from "react";
import { RotateCcw } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { MarkerText, Mark } from "@/components/MarkerText";
import { cn } from "@/lib/utils";

export function About() {
  const { t, locale } = useLanguage();
  const [round, setRound] = useState(0);
  const [done, setDone] = useState(false);

  const replay = () => {
    setDone(false);
    setRound((r) => r + 1);
  };

  const isPt = locale === "pt";

  return (
    <section
      id="sobre"
      className="scroll-mt-24 py-16 sm:py-20 border-b border-card-border/80"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
              {t.about.title} <span className="text-accent">{t.about.highlight}</span>
            </h2>
          </div>

          <button
            className={cn(
              "inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1 text-xs font-mono font-medium text-muted border border-card-border bg-card/40 transition-all duration-200 hover:text-foreground hover:border-accent/40 hover:bg-card",
              done ? "opacity-100" : "opacity-70 hover:opacity-100"
            )}
            onClick={replay}
            type="button"
            title="Repetir animação de anotações"
          >
            <RotateCcw className="w-3.5 h-3.5 text-accent" />
            <span>Replay</span>
          </button>
        </div>

        <MarkerText
          key={round}
          onDrawn={() => setDone(true)}
          show={round === 0 ? undefined : true}
          className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start"
        >
          {/* Main Story & Philosophy */}
          <div className="md:col-span-7 space-y-6">
            <div className="p-5 sm:p-6 rounded-2xl border border-card-border/80 bg-card/40 relative">
              <span className="font-mono text-xs font-semibold text-accent uppercase tracking-wider block mb-2">
                {t.about.diffTitle}
              </span>
              <p className="text-foreground/95 text-base sm:text-lg leading-relaxed">
                {isPt ? (
                  <>
                    Combino{" "}
                    <Mark type="highlight" color="#22d3ee">
                      visão de produto com execução full-stack
                    </Mark>
                    : já liderei stack e time em pesquisa (UFAL), entreguei sistema crítico em ambiente público e estou construindo startup.{" "}
                    <Mark type="strike" color="#f43f5e">
                      Não sou só mais um dev na lista
                    </Mark>
                    .
                  </>
                ) : (
                  <>
                    I combine{" "}
                    <Mark type="highlight" color="#22d3ee">
                      product thinking with full-stack execution
                    </Mark>
                    : I&apos;ve led stack and team in research (UFAL), delivered a critical system in a public environment, and I&apos;m building a startup.{" "}
                    <Mark type="strike" color="#f43f5e">
                      Not just another dev on the list
                    </Mark>
                    .
                  </>
                )}
              </p>
            </div>

            <div className="space-y-4 text-muted text-sm sm:text-base leading-relaxed">
              <p>
                {isPt ? (
                  <>
                    Desenvolvedor full-stack com forte atuação em{" "}
                    <Mark type="underline" color="#38bdf8">
                      Health Tech, Computer Vision e IA aplicada
                    </Mark>
                    . Com mais de{" "}
                    <Mark type="box" color="#34d399">
                      2 anos de experiência
                    </Mark>{" "}
                    entregando aplicações web e mobile e sistemas para órgãos públicos.
                  </>
                ) : (
                  <>
                    Full-stack developer with strong work in{" "}
                    <Mark type="underline" color="#38bdf8">
                      Health Tech, Computer Vision, and applied AI
                    </Mark>
                    . With more than{" "}
                    <Mark type="box" color="#34d399">
                      2 years of experience
                    </Mark>{" "}
                    delivering web and mobile applications and systems for public agencies.
                  </>
                )}
              </p>
              <p>
                {isPt ? (
                  <>
                    Domínio profundo em JavaScript/TypeScript (React, Next.js, NestJS) e mobile com{" "}
                    <Mark type="circle" color="#22d3ee">
                      React Native
                    </Mark>
                    . Graduação em Análise e Desenvolvimento de Sistemas.
                  </>
                ) : (
                  <>
                    Deep expertise in JavaScript/TypeScript (React, Next.js, NestJS) and mobile with{" "}
                    <Mark type="circle" color="#22d3ee">
                      React Native
                    </Mark>
                    . Bachelor&apos;s in Systems Analysis and Development.
                  </>
                )}
              </p>
              <p>{t.about.paragraph3}</p>
            </div>
          </div>

          {/* Education & Language Meta */}
          <div className="md:col-span-5 space-y-4">
            <div className="p-5 rounded-2xl border border-card-border/80 bg-card/30">
              <span className="font-mono text-xs font-semibold text-accent uppercase tracking-wider block mb-1">
                {t.about.education}
              </span>
              <h3 className="text-base font-bold text-foreground mb-1 leading-snug">
                {t.about.educationDetail}
              </h3>
              <p className="text-muted text-xs leading-relaxed">
                {t.about.educationSchool}
              </p>
            </div>

            <div className="p-5 rounded-2xl border border-card-border/80 bg-card/30">
              <span className="font-mono text-xs font-semibold text-accent uppercase tracking-wider block mb-1">
                {t.about.languages}
              </span>
              <p className="text-muted text-sm leading-relaxed">
                {t.about.languagesDetail}
              </p>
            </div>
          </div>
        </MarkerText>
      </div>
    </section>
  );
}
