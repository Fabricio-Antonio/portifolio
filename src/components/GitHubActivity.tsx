"use client";

import { useEffect, useState, useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

interface Contribution {
  date: string;
  count: number;
}

const GITHUB_USERNAME = "Fabricio-Antonio";

const COLOR_LEVELS = [
  "#12141c",
  "#1e3a5f",
  "#22d3ee",
  "#38bdf8",
  "#81e6d9",
];

export function GitHubActivity() {
  const { t } = useLanguage();
  const [contributions, setContributions] = useState<Contribution[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [tooltip, setTooltip] = useState<{ date: string; count: number; x: number; y: number } | null>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    let cancelled = false;

    async function fetchContributions() {
      try {
        const res = await fetch(
          `https://github.com/users/${GITHUB_USERNAME}/contributions`,
          { cache: "no-store" }
        );
        if (!res.ok) throw new Error("Failed to fetch");

        const html = await res.text();

        const matches = html.matchAll(
          /<rect[^>]*data-date="([^"]+)"[^>]*data-count="(\d+)"[^>]*>/g
        );

        const data: Contribution[] = [];
        for (const m of matches) {
          data.push({ date: m[1], count: parseInt(m[2], 10) });
        }

        if (!cancelled) {
          setContributions(data);
          setLoading(false);
        }
      } catch {
        if (!cancelled) {
          setError(true);
          setLoading(false);
        }
      }
    }

    fetchContributions();
    return () => {
      cancelled = true;
    };
  }, []);

  const countByDate = new Map(contributions.map((c) => [c.date, c.count]));

  const days: string[] = [];
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  for (let i = 364; i >= 0; i--) {
    const d = new Date(today);
    d.setDate(today.getDate() - i);
    days.push(d.toISOString().split("T")[0]);
  }

  const weeks: string[][] = [];
  let currentWeek: string[] = [];
  days.forEach((date, i) => {
    const day = new Date(date + "T00:00:00");
    const dayOfWeek = day.getDay();
    if (dayOfWeek === 0 && i !== 0) {
      weeks.push(currentWeek);
      currentWeek = [];
    }
    currentWeek.push(date);
  });
  if (currentWeek.length > 0) {
    weeks.push(currentWeek);
  }

  const getColor = (count: number) => {
    if (count === 0) return COLOR_LEVELS[0];
    if (count <= 2) return COLOR_LEVELS[1];
    if (count <= 5) return COLOR_LEVELS[2];
    if (count <= 10) return COLOR_LEVELS[3];
    return COLOR_LEVELS[4];
  };

  const daysOfWeek = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];

  return (
    <section
      id="github-activity"
      className="scroll-mt-24 py-14 sm:py-24 border-t border-card-border bg-card/20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="inst-badge mb-3">
          {t.githubActivity.badge}
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-6 sm:mb-10 text-foreground">
          {t.githubActivity.title}
        </h2>

        <div className="relative max-w-[760px] mx-auto">
          {loading && (
            <div className="h-[160px] sm:h-[200px] flex items-center justify-center text-muted text-sm font-mono">
              Carregando contribuições...
            </div>
          )}
          {error && !loading && (
            <div className="h-[160px] sm:h-[200px] flex items-center justify-center text-muted text-sm font-mono">
              Não foi possível carregar as contribuições no momento.
            </div>
          )}
          {!loading && !error && (
            <svg
              ref={svgRef}
              className="w-full max-w-[760px] h-[160px] sm:h-[200px] drop-shadow-lg"
              viewBox="0 0 760 200"
              preserveAspectRatio="xMidYMid meet"
            >
            {daysOfWeek.map((day, i) => (
              <text
                key={day}
                x={10}
                y={35 + i * 25}
                fill="#8892b0"
                fontSize="10"
                fontFamily="system-ui, -apple-system, sans-serif"
                textAnchor="end"
                dy="0.3em"
              >
                {day}
              </text>
            ))}

            {weeks.map((week, weekIndex) => {
              const x = 25 + weekIndex * 14;
              return week.map((date, dayIndex) => {
                const count = countByDate.get(date) || 0;
                const color = getColor(count);
                const y = 25 + dayIndex * 25;
                return (
                  <rect
                    key={date}
                    x={x}
                    y={y}
                    width={10}
                    height={10}
                    rx={1}
                    fill={color}
                    className="cursor-pointer transition-all duration-200"
                    onMouseEnter={(e) => {
                      const rect = e.currentTarget;
                      const svgRect = svgRef.current?.getBoundingClientRect();
                      const rectRect = rect.getBoundingClientRect();
                      setTooltip({
                        date,
                        count,
                        x: rectRect.left - (svgRect?.left || 0) + 5,
                        y: rectRect.top - (svgRect?.top || 0) - 10,
                      });
                    }}
                    onMouseLeave={() => setTooltip(null)}
                  />
                );
              });
            })}

            {weeks.map((week, weekIndex) => {
              const firstDay = new Date(week[0] + "T00:00:00");
              const month = firstDay.toLocaleString(undefined, { month: "short" });
              const prevWeek = weeks[weekIndex - 1];
              const prevMonth = prevWeek
                ? new Date(prevWeek[0] + "T00:00:00").toLocaleString(undefined, { month: "short" })
                : "";
              if (month !== prevMonth) {
                const x = 25 + weekIndex * 14 + 5;
                return (
                  <text
                    key={month}
                    x={x}
                    y={15}
                    fill="#8892b0"
                    fontSize="10"
                    fontFamily="system-ui, -apple-system, sans-serif"
                    textAnchor="middle"
                  >
                    {month}
                  </text>
                );
              }
              return null;
            })}
          </svg>
          )}

          {tooltip && (
            <div
              className="absolute bg-[#12141c] border border-card-border text-xs text-foreground px-2 py-1 rounded shadow-2xl pointer-events-none z-10 whitespace-nowrap"
              style={{
                left: tooltip.x,
                top: tooltip.y,
              }}
            >
              <div className="font-semibold">{tooltip.count} contribuição{tooltip.count !== 1 ? "s" : ""}</div>
              <div className="text-muted">{tooltip.date}</div>
            </div>
          )}
        </div>

        <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-muted">
          {["0", "1-2", "3-5", "6-10", "11+"].map((label, i) => (
            <div key={label} className="flex items-center gap-1.5">
              <div className="w-3 h-3 rounded" style={{ backgroundColor: COLOR_LEVELS[i] }} />
              <span>{label}</span>
            </div>
          ))}
        </div>

        <p className="mt-6 sm:mt-8 text-center text-muted text-sm sm:text-base">
          {t.githubActivity.subtitle}
          <a
            href={`https://github.com/${GITHUB_USERNAME}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent font-semibold hover:underline transition-colors"
          >
            @{GITHUB_USERNAME}
          </a>
        </p>
      </div>
    </section>
  );
}
