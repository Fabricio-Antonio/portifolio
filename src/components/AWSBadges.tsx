"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const awsBadges = [
  { name: "AWS Lambda", color: "#FF9900", icon: "λ" },
  { name: "Amazon EC2", color: "#FF9900", icon: "◻" },
  { name: "Amazon S3", color: "#569A31", icon: "▲" },
  { name: "Amazon RDS", color: "#D94C24", icon: "◆" },
  { name: "Amazon DynamoDB", color: "#4053D6", icon: "◆" },
  { name: "AWS Amplify", color: "#FF9900", icon: "⚡" },
  { name: "Amazon CloudFront", color: "#8C4FFF", icon: "◈" },
  { name: "AWS API Gateway", color: "#FF9900", icon: "⬢" },
  { name: "Amazon EventBridge", color: "#E71D36", icon: "⟲" },
  { name: "AWS Step Functions", color: "#FF9900", icon: "⬡" },
];

export function AWSBadges() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const badges = container.querySelectorAll<HTMLDivElement>(".aws-badge");

    gsap.set(badges, { y: 0 });

    badges.forEach((badge, i) => {
      const duration = 2.5 + Math.random() * 1.5;
      const delay = Math.random() * 1;
      const amplitude = 8 + Math.random() * 6;

      gsap.to(badge, {
        y: -amplitude,
        duration: duration / 2,
        ease: "sine.inOut",
        delay,
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
      aria-label="AWS Certifications & Services"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="mb-8 text-center">
          <p className="text-xs font-mono font-semibold text-accent uppercase tracking-wider mb-2">
            Cloud & Infraestrutura
          </p>
          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
            Serviços AWS que domino
          </h3>
        </div>

        <div
          ref={containerRef}
          className="flex flex-wrap items-center justify-center gap-3 sm:gap-4"
          role="list"
          aria-label="AWS Services"
        >
          {awsBadges.map((badge, i) => (
            <div
              key={badge.name}
              className="aws-badge group relative inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-card/60 border border-card-border/80 backdrop-blur-sm transition-all duration-300 hover:border-accent/40 hover:bg-card/80 hover:shadow-lg hover:shadow-accent/10 cursor-default"
              style={{ color: badge.color } as React.CSSProperties}
              role="listitem"
            >
              <span
                className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-background"
                style={{ backgroundColor: badge.color } as React.CSSProperties}
              >
                {badge.icon}
              </span>
              <span className="text-sm font-medium text-foreground whitespace-nowrap">
                {badge.name}
              </span>
              <span
                className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ backgroundColor: badge.color }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}