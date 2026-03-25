"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { getWhatsAppChatUrl } from "@/lib/whatsapp";

export function Hero() {
  const { t } = useLanguage();
  const whatsappQuoteHref = getWhatsAppChatUrl(t.contact.whatsappQuoteMessage);
  const whatsappGeneralHref = getWhatsAppChatUrl(t.contact.whatsappMessage);

  return (
    <section
      id="inicio"
      className="relative min-h-[100dvh] min-h-screen flex items-center justify-center overflow-x-hidden pt-[calc(4.5rem+env(safe-area-inset-top))] pb-10 sm:pb-12 md:pt-20"
    >
      <div className="absolute inset-0 from-accent/5 via-transparent to-transparent" />
      <div className="pointer-events-none absolute top-[12%] left-1/2 -translate-x-1/2 w-[min(100vw,20rem)] h-[min(100vw,20rem)] sm:w-72 sm:h-72 md:top-1/4 md:left-1/4 md:translate-x-0 md:w-96 md:h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="pointer-events-none absolute bottom-[8%] right-1/2 translate-x-1/2 w-[min(100vw,18rem)] h-[min(100vw,18rem)] sm:w-64 sm:h-64 md:bottom-1/4 md:right-1/4 md:translate-x-0 md:w-80 md:h-80 bg-accent-muted/10 rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-6xl w-full px-4 sm:px-6 flex flex-col items-center gap-8 sm:gap-10 text-center md:flex-row md:text-left md:items-center md:justify-between">
        <div className="shrink-0 flex justify-center md:justify-start">
          <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-accent/60 shadow-xl shadow-accent/20 bg-card">
            <Image
              src="/eu.jpeg"
              alt="Foto de perfil de Fabrício Santos, programador e desenvolvedor full-stack em Recife"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 192px, 224px"
              priority
            />
          </div>
        </div>

        <div className="relative max-w-3xl">
          <p className="mb-3 text-accent font-mono text-sm tracking-widest uppercase">
            {t.hero.greeting}
          </p>
          <h1 className="text-4xl leading-tight sm:text-5xl sm:leading-tight md:text-6xl lg:text-7xl font-bold tracking-tight mb-3 sm:mb-4">
            Fabrício
            <span className="text-accent"> Santos</span>{" "}
            <span aria-hidden="true">🦆</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-foreground font-semibold max-w-2xl mb-3 sm:mb-4 leading-snug">
            {t.hero.title}
          </p>
          <p className="text-sm sm:text-base text-muted max-w-xl mb-8 sm:mb-10 leading-relaxed">
            {t.hero.description} <strong className="text-foreground">{t.hero.years}</strong>{" "}
            {t.hero.description2}
          </p>
          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-4 justify-center md:justify-start w-full sm:w-auto">
            <Link
              href={whatsappQuoteHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 min-h-[48px] px-6 sm:px-8 py-3 rounded-lg bg-accent text-background font-semibold hover:bg-accent-muted transition-colors w-full sm:w-auto shadow-lg shadow-accent/20"
            >
              {t.cta.requestQuote}
            </Link>
            <Link
              href={whatsappGeneralHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 min-h-[48px] px-6 sm:px-8 py-3 rounded-lg border border-emerald-500/45 bg-emerald-500/10 text-emerald-100 font-medium hover:bg-emerald-500/15 hover:border-emerald-400/70 transition-colors w-full sm:w-auto"
            >
              <svg className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              {t.cta.discussProject}
            </Link>
            <Link
              href="#projetos"
              className="inline-flex items-center justify-center min-h-[48px] px-6 sm:px-8 py-3 rounded-lg border border-card-border text-foreground font-medium hover:border-accent hover:text-accent transition-colors w-full sm:w-auto"
            >
              {t.cta.seeCases}
            </Link>
            <Link
              href="https://www.meus10centavos.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center min-h-[48px] px-6 sm:px-8 py-3 rounded-lg border border-card-border text-foreground font-medium hover:border-accent hover:text-accent transition-colors w-full sm:w-auto"
            >
              {t.hero.blog}
            </Link>
          </div>
        </div>
      </div>

      <div className="hidden sm:block absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
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
