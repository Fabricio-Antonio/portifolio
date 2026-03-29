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
      { rootMargin: "0px 0px -8% 0px", threshold: 0.06 }
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
          : "opacity-0 translate-y-10 sm:translate-y-12",
        !initialVisible &&
          "transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
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
