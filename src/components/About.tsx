"use client";

import { useEffect, useRef, useState } from "react";
import { RotateCcw } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { MarkerText, Mark } from "@/components/MarkerText";
import { cn } from "@/lib/utils";

export function About() {
  const { t, locale } = useLanguage();
  const [round, setRound] = useState(0);
  const [done, setDone] = useState(false);
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const replay = () => {
    setDone(false);
    setRound((r) => r + 1);
  };

  const isPt = locale === "pt";

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return undefined;

    // Se a seção já está visível no carregamento, inicia imediatamente
    const rect = section.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    if (rect.top < viewportHeight * 0.8 && rect.bottom > viewportHeight * 0.2) {
      setVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5, rootMargin: "0px 0px -25% 0px" }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="sobre"
      ref={sectionRef}
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
              "inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-xs font-mono font-medium text-muted border border-card-border bg-card/40 transition-all duration-200 hover:text-foreground hover:border-accent/40 hover:bg-card min-h-[44px]",
              done ? "opacity-100" : "opacity-70 hover:opacity-100"
            )}
            onClick={replay}
            type="button"
            title="Repetir animação de anotações"
          >
            <RotateCcw className="w-4 h-4 text-accent flex-shrink-0" />
            <span>Replay</span>
          </button>
        </div>

        <MarkerText
          key={round}
          onDrawn={() => setDone(true)}
          show={visible || round > 0}
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
                    <Mark type="highlight" color="#22d3ee">
                      Gosto de transformar ideias em soluções que fazem a diferença
                    </Mark>
                    . Uno tecnologia, criatividade e visão de negócio para criar produtos digitais com propósito e resultados reais.
                  </>
                ) : (
                  <>
                    <Mark type="highlight" color="#22d3ee">
                      I enjoy transforming ideas into solutions that make a difference
                    </Mark>
                    . I bring together technology, creativity, and business vision to create purposeful digital products with real results.
                  </>
                )}
              </p>
            </div>

            <div className="space-y-4 text-muted text-sm sm:text-base leading-relaxed">
              <p>
                {isPt ? (
                  <>
                    Sou desenvolvedor de software, pesquisador e empreendedor. Tenho{" "}
                    <Mark type="box" color="#34d399">
                      +3 anos de experiência
                    </Mark>{" "}
                    criando aplicações, participando de projetos de pesquisa em IA e construindo produtos do zero.
                  </>
                ) : (
                  <>
                    I am a software developer, researcher, and entrepreneur with{" "}
                    <Mark type="box" color="#34d399">
                      +3 years of experience
                    </Mark>{" "}
                    building applications, participating in AI research projects, and creating products from scratch.
                  </>
                )}
              </p>
              <p>
                {isPt ? (
                  <>
                    Além de desenvolver, gosto de{" "}
                    <Mark type="circle" color="#22d3ee">
                      compartilhar
                    </Mark>{" "}
                    conhecimento, ideias e experiências{" "}
                    <Mark type="underline" color="#38bdf8">
                      sobre tecnologia e carreira no Instagram
                    </Mark>
                    . Acredito que evoluir também significa aprender, experimentar e dividir o que sabemos.
                  </>
                ) : (
                  <>
                    Besides developing, I enjoy{" "}
                    <Mark type="circle" color="#22d3ee">
                      sharing
                    </Mark>{" "}
                    knowledge, ideas, and experiences{" "}
                    <Mark type="underline" color="#38bdf8">
                      about technology and career on Instagram
                    </Mark>
                    . I believe that evolving also means learning, experimenting, and sharing what we know.
                  </>
                )}
              </p>
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
