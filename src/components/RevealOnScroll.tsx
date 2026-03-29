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

const DURATION = 2.85;
/** Próximo de cubic-bezier(0.22, 0.61, 0.36, 1) sem CustomEase */
const EASE = "power2.out";

function initialYOffsetPx(): number {
  if (typeof window === "undefined") return 56;
  return window.matchMedia("(min-width: 640px)").matches ? 64 : 56;
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
      gsap.set(el, { opacity: 1, y: 0 });
      return undefined;
    }

    const ctx = gsap.context(() => {
      gsap.set(el, { opacity: 0, y: initialYOffsetPx() });

      gsap.to(el, {
        opacity: 1,
        y: 0,
        duration: DURATION,
        ease: EASE,
        scrollTrigger: {
          trigger: el,
          // Equivale ao rootMargin inferior ~35% do IntersectionObserver anterior
          start: "top bottom+=35%",
          once: true,
        },
      });
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
