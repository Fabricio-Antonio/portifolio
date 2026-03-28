"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { LanguageToggle } from "./LanguageToggle";
import { getWhatsAppChatUrl } from "@/lib/whatsapp";

export function Header() {
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const quoteHref = getWhatsAppChatUrl(t.contact.whatsappQuoteMessage);

  const navLinks = [
    { href: "#inicio", label: t.nav.home },
    { href: "#servicos", label: t.nav.services },
    { href: "#sobre", label: t.nav.about },
    { href: "#contato", label: t.nav.contact },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md border-b border-card-border" : ""
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-2 px-4 py-3 sm:px-6 sm:py-4">
        <Link
          href="#inicio"
          className="min-w-0 shrink text-lg sm:text-xl font-bold tracking-tight text-foreground hover:text-accent transition-colors"
        >
          Fabrício<span className="text-accent"> Santos</span>
        </Link>

        <div className="hidden lg:flex items-center gap-3 xl:gap-5 flex-1 justify-end min-w-0">
          <ul className="flex items-center gap-3 xl:gap-4 flex-wrap justify-end">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-xs xl:text-sm font-medium text-muted hover:text-foreground transition-colors whitespace-nowrap"
                >
                  {link.label}
                </Link>
              </li>
            ))}
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
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center min-h-[44px] py-3 text-base text-muted hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
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
