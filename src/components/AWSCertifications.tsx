"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const certifications = [
  {
    name: "AWS re/Start Graduate",
    image: "/aws-re-start-graduate.png",
    alt: "AWS re/Start Graduate Certification",
    link: "https://www.credly.com/earner/earned/badge/7e7056a5-78cf-48f6-86b9-12754ddfd3f6",
  },
  {
    name: "CLF-C02",
    image: "/clf-c02.png",
    alt: "AWS Certified Cloud Practitioner CLF-C02",
  },
];

export function AWSCertifications() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const badges = container.querySelectorAll<HTMLDivElement>(".aws-cert-badge");

    badges.forEach((badge, i) => {
      const baseDuration = 4 + i * 0.5;
      const amplitude = 22;
      const drift = 6;

      // Ímpar: defasado em 180° (meio período)
      const phaseOffset = i % 2 === 0 ? 0 : baseDuration / 2;

      // Flutuação vertical principal
      gsap.to(badge, {
        y: `+=${amplitude}`,
        duration: baseDuration / 2,
        ease: "sine.inOut",
        delay: phaseOffset,
        yoyo: true,
        repeat: -1,
      });

      // Flutuação horizontal sutil (deriva)
      gsap.to(badge, {
        x: `+=${drift}`,
        duration: baseDuration * 1.7,
        ease: "sine.inOut",
        delay: phaseOffset + baseDuration * 0.3,
        yoyo: true,
        repeat: -1,
      });

      // Rotação sutil para parecer mais orgânico
      gsap.to(badge, {
        rotation: 1.5,
        duration: baseDuration * 2.3,
        ease: "sine.inOut",
        delay: phaseOffset + baseDuration * 0.7,
        yoyo: true,
        repeat: -1,
      });

      // Segunda rotação em sentido oposto
      gsap.to(badge, {
        rotation: -1,
        duration: baseDuration * 1.9,
        ease: "sine.inOut",
        delay: phaseOffset + baseDuration * 1.1,
        yoyo: true,
        repeat: -1,
      });
    });

    return () => {
      gsap.killTweensOf(badges);
    };
  }, []);

  return (
    <section
      className="py-12 sm:py-16 border-b border-card-border/80 bg-gradient-to-b from-card/10 to-transparent"
      aria-label="AWS Certifications"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <p className="text-xs font-mono font-semibold text-accent/60 uppercase tracking-wider mb-8 text-center">
          Certificações
        </p>
        <div
          ref={containerRef}
          className="flex flex-wrap items-center justify-center gap-8 sm:gap-12"
          role="list"
          aria-label="AWS Certifications"
        >
          {certifications.map((cert, i) => (
            <div
              key={cert.name}
              className="aws-cert-badge group relative cursor-default"
              role="listitem"
              style={{ transformOrigin: "center center" } as React.CSSProperties}
            >
              {cert.link ? (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-lg"
                  aria-label={`Verificar ${cert.name} no Credly`}
                >
                  <img
                    src={cert.image}
                    alt={cert.alt}
                    className="w-32 sm:w-40 h-auto object-contain transition-transform duration-500 hover:scale-110 drop-shadow-lg"
                    loading="lazy"
                  />
                </a>
              ) : (
                <img
                  src={cert.image}
                  alt={cert.alt}
                  className="w-32 sm:w-40 h-auto object-contain drop-shadow-lg"
                  loading="lazy"
                />
              )}
              <p className="mt-3 text-xs font-mono text-accent/80 uppercase tracking-wider text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {cert.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}