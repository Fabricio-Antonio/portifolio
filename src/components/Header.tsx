"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { LanguageToggle } from "./LanguageToggle";
import { getWhatsAppChatUrl } from "@/lib/whatsapp";

const NAV_SECTION_IDS = ["inicio", "servicos", "sobre", "contato"] as const;
type NavSectionId = (typeof NAV_SECTION_IDS)[number];

function getActiveNavSection(): NavSectionId {
  if (typeof document === "undefined") return "inicio";
  const offset =
    typeof window !== "undefined" && window.matchMedia("(min-width: 1024px)").matches
      ? 140
      : 96;
  const trigger = window.scrollY + offset;
  for (let i = NAV_SECTION_IDS.length - 1; i >= 0; i--) {
    const id = NAV_SECTION_IDS[i];
    const el = document.getElementById(id);
    if (!el) continue;
    const top = el.getBoundingClientRect().top + window.scrollY;
    if (trigger >= top - 2) return id;
  }
  return "inicio";
}

export function Header() {
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<NavSectionId>("inicio");
  const quoteHref = getWhatsAppChatUrl(t.contact.whatsappQuoteMessage);

  const navLinks: { id: NavSectionId; href: string; label: string }[] = [
    { id: "inicio", href: "#inicio", label: t.nav.home },
    { id: "servicos", href: "#servicos", label: t.nav.services },
    { id: "sobre", href: "#sobre", label: t.nav.about },
    { id: "contato", href: "#contato", label: t.nav.contact },
  ];

  useEffect(() => {
    const sync = () => {
      setIsScrolled((prev) => {
        const next = window.scrollY > 20;
        return prev === next ? prev : next;
      });
      const nextSection = getActiveNavSection();
      setActiveSection((prev) => (prev === nextSection ? prev : nextSection));
    };
    sync();
    requestAnimationFrame(sync);
    window.addEventListener("scroll", sync, { passive: true });
    window.addEventListener("resize", sync);
    window.addEventListener("hashchange", sync);
    return () => {
      window.removeEventListener("scroll", sync);
      window.removeEventListener("resize", sync);
      window.removeEventListener("hashchange", sync);
    };
  }, []);

  return (
    <header
      className={[
        "fixed z-50 transition-all duration-300",
        "top-0 left-0 right-0 max-lg:w-full",
        "lg:top-5 lg:left-1/2 lg:right-auto lg:w-[min(72rem,calc(100%-2rem))] lg:-translate-x-1/2",
        isScrolled
          ? "max-lg:bg-background/95 max-lg:backdrop-blur-md max-lg:border-b max-lg:border-card-border lg:rounded-2xl lg:border lg:border-card-border lg:bg-background/90 lg:backdrop-blur-xl lg:shadow-xl lg:shadow-black/20"
          : "lg:rounded-2xl lg:border lg:border-card-border/60 lg:bg-background/80 lg:backdrop-blur-xl lg:shadow-lg lg:shadow-black/12",
      ].join(" ")}
    >
      <nav className="mx-auto flex w-full max-w-6xl lg:max-w-none items-center justify-between gap-2 px-4 py-3 sm:px-6 sm:py-4 lg:px-5 lg:py-2.5">
        <Link
          href="#inicio"
          className="min-w-0 shrink text-lg sm:text-xl font-bold tracking-tight text-foreground hover:text-accent transition-colors"
        >
          Fabrício<span className="text-accent"> Santos</span>
        </Link>

        <div className="hidden lg:flex items-center gap-3 xl:gap-5 flex-1 justify-end min-w-0">
          <ul className="flex items-center gap-3 xl:gap-4 flex-wrap justify-end">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={isActive ? "true" : undefined}
                    className={[
                      "text-xs xl:text-sm font-medium transition-colors whitespace-nowrap",
                      isActive
                        ? "text-accent font-semibold"
                        : "text-muted hover:text-foreground",
                    ].join(" ")}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <LanguageToggle />
          <Link
            href={quoteHref}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center justify-center min-h-[40px] px-4 py-2 rounded-lg bg-accent text-background text-sm font-semibold hover:bg-accent-muted transition-colors"
          >
            {t.cta.headerQuote}
          </Link>
        </div>

        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-foreground hover:text-accent transition-colors"
            aria-label="Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-card-border bg-background/98 backdrop-blur-md max-h-[min(70vh,calc(100dvh-5rem))] overflow-y-auto overscroll-contain">
          <div className="px-4 sm:px-6 py-4 flex flex-col gap-4">
            <ul className="flex flex-col gap-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      aria-current={isActive ? "true" : undefined}
                      className={[
                        "flex items-center min-h-[44px] py-3 text-base transition-colors",
                        isActive
                          ? "text-accent font-semibold"
                          : "text-muted hover:text-foreground",
                      ].join(" ")}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <Link
              href={quoteHref}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="inline-flex w-full items-center justify-center min-h-[48px] px-4 py-3 rounded-lg bg-accent text-background text-base font-semibold hover:bg-accent-muted transition-colors"
            >
              {t.cta.headerQuote}
            </Link>
            <div className="flex w-full justify-center pt-2 border-t border-card-border">
              <LanguageToggle />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
