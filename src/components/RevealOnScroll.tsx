"use client";

import {
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

type RevealOnScrollProps = {
  children: ReactNode;
  className?: string;
  /** Evita flash no primeiro bloco (ex.: Hero) já visível no carregamento */
  initialVisible?: boolean;
};

export function RevealOnScroll({
  children,
  className = "",
  initialVisible = false,
}: RevealOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(initialVisible);

  useEffect(() => {
    if (initialVisible) return;

    const el = ref.current;
    if (!el) return;

    if (typeof window !== "undefined") {
      const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
      if (mq.matches) {
        setVisible(true);
        return;
      }
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      // Dispara mais cedo (ainda abaixo da área visível) para dar tempo de ver a animação ao rolar.
      { rootMargin: "0px 0px 22% 0px", threshold: 0 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [initialVisible]);

  return (
    <div
      ref={ref}
      className={[
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-14 sm:translate-y-16",
        !initialVisible &&
          "transition-[opacity,transform] duration-[1.45s] ease-[cubic-bezier(0.16,1,0.3,1)]",
        "motion-reduce:opacity-100 motion-reduce:translate-y-0 motion-reduce:transition-none",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </div>
  );
}
