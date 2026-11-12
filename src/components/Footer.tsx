"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { getWhatsAppChatUrl } from "@/lib/whatsapp";

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

  const socialLinks = [
    { href: "https://www.linkedin.com/in/fabricio-ss/", label: "LinkedIn" },
    { href: "https://github.com/Fabricio-Antonio", label: "GitHub" },
    { href: "http://lattes.cnpq.br/1340990776697899", label: "Lattes" },
    { href: whatsappHref, label: "WhatsApp" },
    { href: "https://www.meus10centavos.com.br", label: "Blog de Tecnologia" },
    { href: "https://www.instagram.com/fabriciosantos.dev/", label: "Instagram" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
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

          {/* Socials & Connect */}
          <div className="md:col-span-4">
            <span className="block text-xs font-mono font-bold uppercase tracking-wider text-accent mb-4">
              Canais & Redes
            </span>
            <div className="flex flex-wrap gap-2 mb-6">
              {socialLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-card border border-card-border text-xs text-muted hover:text-accent hover:border-accent/40 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-muted hover:text-accent transition-colors cursor-pointer"
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
