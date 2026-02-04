"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      <div className="absolute inset-0 from-accent/5 via-transparent to-transparent" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent-muted/10 rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6 text-center">
        <p className="mb-4 text-accent font-mono text-sm tracking-widest uppercase">
          {t.hero.greeting}
        </p>
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-6">
          Fabrício
          <span className="text-accent"> Santos</span>
        </h1>
        <p className="text-xl sm:text-2xl text-muted max-w-2xl mx-auto mb-4">
          {t.hero.title}
        </p>
        <p className="text-muted max-w-xl mx-auto mb-12">
          {t.hero.description} <strong>{t.hero.years}</strong>{" "}
          {t.hero.description2}
          <br /> <br />
          {t.hero.description3}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="#projetos"
            className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-accent text-background font-semibold hover:bg-accent-muted transition-colors"
          >
            {t.hero.viewProjects}
          </Link>
          <Link
            href="#contato"
            className="inline-flex items-center justify-center px-8 py-3 rounded-lg border border-card-border text-foreground font-medium hover:border-accent hover:text-accent transition-colors"
          >
            {t.hero.contact}
          </Link>
          <Link
            href="https://www.meus10centavos.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-3 rounded-lg border border-card-border text-foreground font-medium hover:border-accent hover:text-accent transition-colors"
          >
            {t.hero.blog}
          </Link>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-muted"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
