"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { getWhatsAppChatUrl } from "@/lib/whatsapp";
import MultiLineTypewriter from "@/components/MultiLineTypewriter";
import { SocialPreviewDock } from "@/components/ui/SocialPreviewDock";

const CV_PDF_HREF = encodeURI("/Fabrício Santos - Desenvolvedor Full-Stack.pdf");

export function Hero() {
  const { t } = useLanguage();
  const whatsappHref = getWhatsAppChatUrl(t.contact.whatsappMessage);

  // Social profile for the preview dock
  const profile = {
    username: "Fabricio-Antonio",
    xHandle: "Fabricio_ss_",
    instagramHandle: "fabriciosantos.dev",
    name: "Você traz a ideia, eu ajudo a construir o caminho.",
    avatar: "https://github.com/Fabricio-Antonio.png",
    bio: "Software Engineer | TypeScript | React | React Native | Node 🦆",
    instagramBio: "Transformo ideias em sites, aplicativos e sistemas funcionais.",
    headline: "Engenheiro de Software e Pesquisador",
    location: "Recife, PE • Brasil",
    contributions: 0,
    links: {
      github: "https://github.com/Fabricio-Antonio",
      linkedin: "https://www.linkedin.com/in/fabricio-ss/",
      x: "https://x.com/Fabricio_ss_",
      instagram: "https://www.instagram.com/fabriciosantos.dev/",
    },
  };

  return (
    <section
      id="inicio"
      className="relative min-h-[82svh] flex items-center justify-center scroll-mt-24 pt-28 pb-16 sm:py-24"
    >
      <div className="mx-auto max-w-5xl w-full px-4 sm:px-6">
        <div className="flex flex-col-reverse md:flex-row items-center md:items-start justify-between gap-10 md:gap-14">
          
          {/* Main Info */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.15] mb-3 flex flex-col items-center md:items-start justify-center md:justify-start gap-x-3 gap-y-1">
              <MultiLineTypewriter
                lines={[
                  { 
                    text: "Você traz a ideia, ", 
                    className: "text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground",
                    delayAfter: 200
                  },
                  { 
                    text: "eu ajudo a construir o caminho.", 
                    className: "text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight text-foreground/80",
                  },
                ]}
                typingSpeed={50}
                startDelay={350}
                naturalVariance={true}
                playOnce={false}
              />
            </h1>

            <p className="text-muted text-base sm:text-lg leading-relaxed max-w-2xl mb-8">
              {t.hero.description}
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

            {/* Social Preview Dock */}
            <div className="mt-8 flex justify-center md:justify-start">
              <SocialPreviewDock
                profile={profile}
                live={true}
              />
            </div>
          </div>

          {/* Minimalist Profile Photo */}
          <div className="shrink-0">
            <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-2xl overflow-hidden border border-card-border bg-card">
              <Image
                src="/eu.jpeg"
                alt="Foto de perfil de Fabrício Santos"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 160px, (max-width: 768px) 192px, (max-width: 1024px) 224px, 256px"
                priority
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
