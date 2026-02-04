"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

const socialLinks = [
  { href: "https://www.linkedin.com/in/fabricio-ss/", label: "LinkedIn" },
  { href: "https://github.com/Fabricio-Antonio", label: "GitHub" },
  { href: "https://www.meus10centavos.com.br", label: "Blog" },
  { href: "https://www.instagram.com/fabriciosantos.dev/", label: "Instagram" },
  { href: "https://discord.com/users/donald_duck.dev", label: "Discord" },
];

export function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-card-border bg-card/50">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-muted">
            © {currentYear} Fabrício Santos. {t.footer.rights}
          </p>
          <div className="flex gap-6">
            {socialLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted hover:text-accent transition-colors"
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
