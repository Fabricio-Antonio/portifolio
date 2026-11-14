"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { MorphicNavbar } from "./ui/MorphicNavbar";

const NAV_SECTION_IDS = [
  "inicio",
  "servicos",
  "sobre",
  "projetos",
  "contato",
] as const;
type NavSectionId = (typeof NAV_SECTION_IDS)[number];

function getActiveNavSection(): NavSectionId {
  if (typeof document === "undefined") return "inicio";
  const viewportHeight = window.innerHeight;
  const scrollY = window.scrollY;
  let active: NavSectionId = "inicio";

  for (const id of NAV_SECTION_IDS) {
    const el = document.getElementById(id);
    if (!el) continue;
    const rect = el.getBoundingClientRect();
    const top = rect.top + scrollY;
    const bottom = top + rect.height;
    if (top <= scrollY + viewportHeight * 0.35 && bottom >= scrollY + viewportHeight * 0.15) {
      active = id;
    }
  }
  return active;
}

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<NavSectionId>("inicio");

  const handleNavClick = (id: NavSectionId) => {
    setActiveSection(id);
  };

  useEffect(() => {
    let raf = 0;
    let timer: ReturnType<typeof setTimeout> | undefined;

    const sync = () => {
      setIsScrolled((prev) => {
        const next = window.scrollY > 20;
        return prev === next ? prev : next;
      });
      const nextSection = getActiveNavSection();
      setActiveSection((prev) => (prev === nextSection ? prev : nextSection));
    };

    const onScroll = () => {
      cancelAnimationFrame(raf);
      clearTimeout(timer);
      raf = requestAnimationFrame(() => {
        timer = setTimeout(sync, 40);
      });
    };

    sync();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", sync);
    window.addEventListener("hashchange", sync);
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(timer);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", sync);
      window.removeEventListener("hashchange", sync);
    };
  }, []);

  return (
    <>
      {/* Morphic Navbar - Desktop only */}
      <div className="hidden lg:block">
        <MorphicNavbar
          compact
          className={cn(
            "fixed z-50 top-5 left-1/2 -translate-x-1/2 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
            isScrolled
              ? "bg-background/90 backdrop-blur-xl border border-card-border/50 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.6),0_0_0_1px_rgba(34,211,238,0.1),0_0_40px_-12px_rgba(34,211,238,0.08)]"
              : "bg-background/70 backdrop-blur-xl border border-card-border/30 shadow-[0_4px_24px_-6px_rgba(0,0,0,0.4)]",
            "rounded-2xl px-4"
          )}
        />
      </div>

      {/* Mobile: Bottom Navigation Bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 safe-area-pb transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]">
        <div className="mx-auto max-w-xl rounded-t-2xl bg-background/95 backdrop-blur-xl border-t border-card-border/30 shadow-[0_-8px_32px_-8px_rgba(0,0,0,0.4)]">
          <div className="flex items-center justify-around py-2.5 px-2">
            {([
              { id: "inicio", href: "#inicio", label: "Início", icon: <HomeIcon /> },
              { id: "servicos", href: "#servicos", label: "Serviços", icon: <CodeIcon /> },
              { id: "sobre", href: "#sobre", label: "Sobre", icon: <UserIcon /> },
              { id: "projetos", href: "#projetos", label: "Projetos", icon: <FolderIcon /> },
              { id: "contato", href: "#contato", label: "Contato", icon: <MailIcon /> },
            ] as const).map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => handleNavClick(link.id)}
                  aria-current={isActive ? "true" : undefined}
                  className={cn(
                    "flex flex-col items-center gap-1 px-3 py-2 rounded-xl transition-all duration-300 min-w-[60px]",
                    isActive
                      ? "text-accent bg-accent/15"
                      : "text-muted hover:text-foreground hover:bg-zinc-800/50",
                  )}
                >
                  <span className="relative" aria-hidden="true">
                    {link.icon}
                    {isActive && (
                      <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-accent animate-pulse" />
                    )}
                  </span>
                  <span className="text-[10px] font-medium">{link.label}</span>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

// Icon Components
function HomeIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 011-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
  );
}

function CodeIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l4 4 4-4" />
    </svg>
  );
}

function UserIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
  );
}

function FolderIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
    </svg>
  );
}

function MailIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}