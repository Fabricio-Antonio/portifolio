"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { getWhatsAppChatUrl } from "@/lib/whatsapp";

const CV_PDF_HREF = encodeURI("/Fabrício Santos - Desenvolvedor Full-Stack.pdf");

export function Hero() {
  const { t } = useLanguage();
  const whatsappHref = getWhatsAppChatUrl(t.contact.whatsappMessage);

  return (
    <section
      id="inicio"
      className="relative min-h-[82svh] flex items-center justify-center scroll-mt-24 pt-28 pb-16 sm:py-24"
    >
      <div className="mx-auto max-w-5xl w-full px-4 sm:px-6">
        <div className="flex flex-col-reverse md:flex-row items-center md:items-start justify-between gap-10 md:gap-14">
          
          {/* Main Info */}
          <div className="flex-1 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-card/60 border border-card-border text-xs font-mono text-muted mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>{t.hero.available}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.15] mb-3">
              Fabrício<span className="text-accent"> Santos</span>{" "}
              <span aria-hidden="true" className="text-2xl sm:text-3xl inline-block align-middle">🦆</span>
            </h1>

            <p className="text-lg sm:text-xl font-medium text-foreground/80 mb-5 font-mono">
              {t.hero.title}
            </p>

            <p className="text-muted text-base sm:text-lg leading-relaxed max-w-2xl mb-8">
              {t.hero.valueLine}
            </p>

            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 sm:gap-4">
              <Link
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-accent text-background font-semibold text-sm hover:bg-cyan-300 transition-colors shadow-sm"
              >
                {t.hero.contact}
                <span className="ml-1.5 font-mono text-xs">↗</span>
              </Link>

              <Link
                href="#projetos"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl border border-card-border bg-card/40 text-foreground text-sm font-medium hover:border-accent/40 hover:text-accent transition-colors"
              >
                {t.hero.viewProjects}
              </Link>

              <a
                href={CV_PDF_HREF}
                download="Fabricio-Santos-CV.pdf"
                className="inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium text-muted hover:text-foreground transition-colors"
                aria-label="Download do Currículo em PDF"
              >
                <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
                <span>Currículo</span>
              </a>
            </div>
          </div>

          {/* Minimalist Profile Photo */}
          <div className="shrink-0">
            <div className="relative w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52 rounded-2xl overflow-hidden border border-card-border bg-card">
              <Image
                src="/eu.jpeg"
                alt="Foto de perfil de Fabrício Santos"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 144px, (max-width: 768px) 176px, 208px"
                priority
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
