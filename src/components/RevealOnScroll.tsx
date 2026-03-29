"use client";

import { useLayoutEffect, useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type RevealOnScrollProps = {
  children: ReactNode;
  className?: string;
  /** Evita flash no primeiro bloco (ex.: Hero) já visível no carregamento */
  initialVisible?: boolean;
};

const DURATION = 1.05;
const STAGGER = 0.13;
const EASE = "power2.out";

function initialYOffsetPx(): number {
  if (typeof window === "undefined") return 48;
  return window.matchMedia("(min-width: 640px)").matches ? 56 : 48;
}

function expandStackChild(el: HTMLElement): Element[] {
  if (el.classList.contains("grid") && el.children.length > 0) {
    return Array.from(el.children);
  }
  if (el.classList.contains("space-y-8") && el.children.length > 1) {
    return Array.from(el.children);
  }
  return [el];
}

function collectRevealTargets(container: HTMLDivElement): Element[] {
  const section = container.querySelector(":scope > section");
  if (!section) return [];
  const inner = section.querySelector(":scope > div.mx-auto");
  if (!inner) return [];

  const out: Element[] = [];
  for (const child of inner.children) {
    out.push(...expandStackChild(child as HTMLElement));
  }
  return out;
}

export function RevealOnScroll({
  children,
  className = "",
  initialVisible = false,
}: RevealOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (initialVisible || reduced.matches) {
      const targets = collectRevealTargets(el);
      gsap.set(targets, { opacity: 1, y: 0 });
      gsap.set(el, { clearProps: "opacity,transform" });
      return undefined;
    }

    const ctx = gsap.context(() => {
      const section = el.querySelector<HTMLElement>(":scope > section");
      const targets = collectRevealTargets(el);
      const y = initialYOffsetPx();
      const triggerEl = section ?? el;

      if (targets.length > 0) {
        gsap.set(targets, { opacity: 0, y });
        gsap.to(targets, {
          opacity: 1,
          y: 0,
          duration: DURATION,
          ease: EASE,
          stagger: STAGGER,
          scrollTrigger: {
            trigger: triggerEl,
            start: "top bottom+=35%",
            once: true,
          },
        });
      } else {
        gsap.set(el, { opacity: 0, y });
        gsap.to(el, {
          opacity: 1,
          y: 0,
          duration: DURATION + STAGGER * 2,
          ease: EASE,
          scrollTrigger: {
            trigger: el,
            start: "top bottom+=35%",
            once: true,
          },
        });
      }
    }, el);

    return () => ctx.revert();
  }, [initialVisible]);

  return (
    <div
      ref={ref}
      className={["motion-reduce:opacity-100", className]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </div>
  );
}
