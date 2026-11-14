"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { getWhatsAppChatUrl } from "@/lib/whatsapp";
import { SocialPreviewDock } from "./ui/SocialPreviewDock";

export function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();
  const whatsappHref = getWhatsAppChatUrl(t.contact.whatsappQuoteMessage);

  const navLinks = [
    { href: "#inicio", label: t.nav.home },
    { href: "#servicos", label: t.nav.services },
    { href: "#sobre", label: t.nav.about },
    { href: "#projetos", label: t.nav.experience },
    { href: "#contato", label: t.nav.contact },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Social profile for the preview dock
  const profile = {
    username: "Fabricio-Antonio",
    xHandle: "Fabricio_ss_",
    instagramHandle: "fabriciosantos.dev",
    name: "Fabrício Santos",
    avatar: "https://github.com/Fabricio-Antonio.png",
    bio: "Software Engineer | TypeScript | React | React Native | Node 🦆",
    instagramBio: "Fabrício Santos | Programador Freelancer • Web & Mobile",
    headline: "Engenheiro de Software • Full-Stack & Computer Vision",
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
    <footer className="border-t border-card-border bg-[#0a0a0d] pb-[max(1.5rem,env(safe-area-inset-bottom))]">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 py-12 sm:py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-card-border/60">

          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <Link
              href="#inicio"
              className="inline-flex items-center gap-2.5 text-xl font-bold tracking-tight text-foreground hover:text-accent transition-colors"
            >
              <span>
                Fabrício Santos
              </span>
            </Link>

            <p className="text-muted text-sm leading-relaxed max-w-sm">
              Desenvolvedor Full-Stack • Web & Mobile
            </p>
          </div>

          {/* Nav Links */}
          <div className="md:col-span-3">
            <span className="block text-xs font-mono font-bold uppercase tracking-wider text-accent mb-4">
              Navegação
            </span>
            <ul className="space-y-2.5 text-sm text-muted">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Preview Dock */}
          <div className="md:col-span-4">
            <span className="block text-xs font-mono font-bold uppercase tracking-wider text-accent mb-4">
              Conecte-se
            </span>
            <SocialPreviewDock
              profile={profile}
              live={true}
              email="fabricio.santos.dev@email.com"
            />
            <button
              type="button"
              onClick={scrollToTop}
              className="mt-6 inline-flex items-center gap-2 px-3 py-2 text-xs font-mono font-semibold text-muted hover:text-accent transition-colors cursor-pointer rounded-lg hover:bg-card border border-card-border min-h-[44px]"
            >
              <span>↑ Voltar ao topo</span>
            </button>
          </div>

        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted">
          <p>© {currentYear} Fabrício Santos. Todos os direitos reservados.</p>
          <p className="font-mono">Desenvolvido com muitos tokens, amor & café</p>
        </div>
      </div>
    </footer>
  );
}
