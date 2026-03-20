"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { getWhatsAppChatUrl } from "@/lib/whatsapp";

export function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { href: "https://www.linkedin.com/in/fabricio-ss/", label: "LinkedIn" },
    { href: "https://github.com/Fabricio-Antonio", label: "GitHub" },
    { href: "https://x.com/Fabricio_ss_", label: "X" },
    { href: getWhatsAppChatUrl(t.contact.whatsappMessage), label: t.contact.whatsappLabel },
    { href: "https://www.meus10centavos.com.br", label: "Blog" },
    { href: "https://www.instagram.com/fabriciosantos.dev/", label: "Instagram" },
    { href: "https://discord.com/users/donald_duck.dev", label: "Discord" },
  ];

  return (
    <footer className="border-t border-card-border bg-card/50 pb-[max(1rem,env(safe-area-inset-bottom))]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10 sm:py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <p className="text-sm text-muted text-center md:text-left">
            © {currentYear} Fabrício Santos. {t.footer.rights}
          </p>
          <div className="flex flex-wrap justify-center md:justify-end gap-x-4 gap-y-2 max-w-full">
            {socialLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted hover:text-accent transition-colors whitespace-nowrap min-h-[44px] inline-flex items-center"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
