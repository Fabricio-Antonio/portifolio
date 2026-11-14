"use client";

import {
  animate,
  type MotionValue,
  motion,
  motionValue,
  useMotionValue,
  useReducedMotion,
  useTransform,
} from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  type FocusEvent,
  type KeyboardEvent,
  type MouseEvent,
  type PointerEvent,
  type Ref,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";

export interface NavItem {
  name: string;
}

export interface MorphicNavbarProps {
  items?: Record<string, NavItem>;
  defaultPath?: string;
  compact?: boolean;
  className?: string;
}

const SPRING = { type: "spring", bounce: 0.15, visualDuration: 0.32 } as const;

const SPLIT = 8;
const HOVER_SPLIT = 2;
const DRAG_SLOP = 4;
const PROJECTION = 0.16;
const VELOCITY_WINDOW = 90;
const COMPACT_AFTER = 80;
const CHEVRON_SIZE = 36;
const CHEVRON_GAP = 4;

const round2 = (v: number) => Math.round(v * 100) / 100;
const clamp = (v: number, min: number, max: number) =>
  Math.min(max, Math.max(min, v));

const matchesPath = (path: string, current: string) =>
  path === current || (path !== "/" && current.startsWith(`${path}/`));

const findItemPath = (paths: string[], current: string | null) => {
  let match: string | undefined;
  for (const path of paths) {
    if (
      current &&
      matchesPath(path, current) &&
      (!match || path.length > match.length)
    ) {
      match = path;
    }
  }
  return match;
};

const bump = (focus: number, k: number) => Math.max(0, 1 - Math.abs(focus - k));

const splitOffsets = (count: number, focus: number, hover: number | null) => {
  const cumulative = [0];
  let total = 0;
  for (let joint = 0; joint < count - 1; joint++) {
    let gap = SPLIT * Math.max(bump(focus, joint), bump(focus, joint + 1));
    const hoverJoint =
      hover !== null &&
      hover !== Math.round(focus) &&
      (joint === hover - 1 || joint === hover);
    if (hoverJoint) {
      gap = Math.max(gap, HOVER_SPLIT);
    }
    total += gap;
    cumulative.push(total);
  }
  return cumulative.map((x) => round2(x - total / 2));
};

interface BarLayout {
  centers: number[];
  widths: number[];
  rowWidth: number;
}

const foldedOffsets = (layout: BarLayout, active: number) => {
  const { centers, widths, rowWidth } = layout;
  const activeWidth = widths[active] ?? 0;
  const groupWidth = activeWidth + CHEVRON_GAP + CHEVRON_SIZE;
  const activeCenter = rowWidth / 2 - groupWidth / 2 + activeWidth / 2;
  const xs = centers.map((center) => round2(activeCenter - center));
  const chevron = round2(
    activeCenter + activeWidth / 2 + CHEVRON_GAP + CHEVRON_SIZE / 2
  );
  return { xs, chevron };
};

const indexAt = (centers: number[], x: number) => {
  const last = centers.length - 1;
  if (last <= 0 || x <= (centers[0] ?? 0)) {
    return 0;
  }
  for (let k = 0; k < last; k++) {
    const a = centers[k] ?? 0;
    const b = centers[k + 1] ?? a;
    if (x < b) {
      return k + (x - a) / Math.max(1, b - a);
    }
  }
  return last;
};

interface DragState {
  pointerId: number;
  startX: number;
  rowLeft: number;
  scrubbing: boolean;
  focus: number;
  samples: { x: number; t: number }[];
}

const releaseVelocity = (samples: DragState["samples"], now: number) => {
  const recent = samples.filter((s) => now - s.t <= VELOCITY_WINDOW);
  const first = recent[0];
  const last = recent.at(-1);
  if (!(first && last) || last.t === first.t) {
    return 0;
  }
  return ((last.x - first.x) / (last.t - first.t)) * 1000;
};

const capScale = (gap: number, fold: number) =>
  `scaleX(${round2(clamp(1 - gap / 1.5, 0, 1) * (1 - clamp(fold * 4, 0, 1)))})`;

const KEY_MOVES: Record<string, (i: number, n: number) => number> = {
  ArrowLeft: (i) => i - 1,
  ArrowRight: (i) => i + 1,
  Home: () => 0,
  End: (_, n) => n - 1,
};

const SURFACE = "";
const FOCUS_RING =
  "outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-inset";

const followHash = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
  if (
    event.defaultPrevented ||
    event.metaKey ||
    event.ctrlKey ||
    event.shiftKey ||
    event.altKey
  ) {
    return;
  }
  event.preventDefault();
  const target = document.getElementById(decodeURIComponent(href.slice(1)));
  if (!target) {
    return;
  }
  target.scrollIntoView();
  if (window.location.hash !== href) {
    window.history.pushState(null, "", href);
  }
};

function ChevronIcon() {
  return (
    <svg
      aria-hidden="true"
      className="size-4"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      viewBox="0 0 24 24"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

interface SegmentProps {
  href: string;
  name: string;
  x: MotionValue<number>;
  prevX?: MotionValue<number>;
  nextX?: MotionValue<number>;
  fold: MotionValue<number>;
  pinned: boolean;
  hidden: boolean;
  highlighted: boolean;
  current: boolean;
  linkRef: Ref<HTMLAnchorElement>;
  onSelect: () => void;
  onFocus: (event: FocusEvent<HTMLAnchorElement>) => void;
  onHover: (event: PointerEvent<HTMLDivElement>, entering: boolean) => void;
}

function Segment({
  href,
  name,
  x,
  prevX,
  nextX,
  fold,
  pinned,
  hidden,
  highlighted,
  current,
  linkRef,
  onSelect,
  onFocus,
  onHover,
}: SegmentProps) {
  const transform = useTransform(() => `translate3d(${x.get()}px,0,0)`);
  const opacity = useTransform(() =>
    pinned ? 1 : round2(clamp(1 - fold.get() * 1.8, 0, 1))
  );
  const leftCap = useTransform(() =>
    prevX ? capScale(x.get() - prevX.get(), fold.get()) : "scaleX(0)"
  );
  const rightCap = useTransform(() =>
    nextX ? capScale(nextX.get() - x.get(), fold.get()) : "scaleX(0)"
  );
  const isHash = href.startsWith("#");
  const NavLink = isHash ? "a" : Link;

  return (
    <motion.div
      className={cn(
        "relative",
        pinned ? "z-20" : "z-10",
        hidden && "pointer-events-none"
      )}
      onPointerEnter={(event) => onHover(event, true)}
      onPointerLeave={(event) => onHover(event, false)}
      style={{ transform, opacity }}
    >
      <NavLink
        aria-current={current ? "page" : undefined}
        className={cn(
          "relative flex min-h-[44px] items-center rounded-xl px-4 font-medium text-sm transition-colors duration-150",
          FOCUS_RING,
          highlighted
            ? "bg-white/10 text-accent"
            : "text-muted hover:text-foreground hover:bg-white/5"
        )}
        draggable={false}
        href={href}
        inert={hidden}
        onClick={(event: MouseEvent<HTMLAnchorElement>) => {
          onSelect();
          if (isHash) {
            followHash(event, href);
          }
        }}
        onDragStart={(event: MouseEvent) => event.preventDefault()}
        onFocus={onFocus}
        ref={linkRef}
      >
        <span className="relative">{name}</span>
        <span
          aria-hidden="true"
          className={cn(
            "absolute bottom-1.5 left-1/2 h-0.5 w-3 -translate-x-1/2 rounded-full bg-accent transition-transform duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] motion-reduce:transition-none",
            highlighted ? "scale-x-100" : "scale-x-0"
          )}
        />
      </NavLink>
    </motion.div>
  );
}

function useScrolledPast(enabled: boolean) {
  const [past, setPast] = useState(false);
  useEffect(() => {
    if (!enabled) {
      setPast(false);
      return;
    }
    let frame = 0;
    const update = () => {
      frame = 0;
      setPast(window.scrollY > COMPACT_AFTER);
    };
    const onScroll = () => {
      if (!frame) {
        frame = requestAnimationFrame(update);
      }
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, [enabled]);
  return past;
}

function useUserOpen(scrolledPast: boolean) {
  const [openedAt, setOpenedAt] = useState<number | null>(null);
  useEffect(() => {
    if (openedAt === null) {
      return;
    }
    const onScroll = () => {
      if (Math.abs(window.scrollY - openedAt) > COMPACT_AFTER) {
        setOpenedAt(null);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [openedAt]);
  if (!scrolledPast && openedAt !== null) {
    setOpenedAt(null);
  }
  return [openedAt !== null, () => setOpenedAt(window.scrollY)] as const;
}

export function MorphicNavbar({
  items = {},
  defaultPath,
  compact = false,
  className,
}: MorphicNavbarProps) {
  const { t } = useLanguage();
  const pathname = usePathname();

  const navItems = useMemo(() => {
    const baseItems: Record<string, NavItem> = {
      "#inicio": { name: t.nav.home },
      "#servicos": { name: t.nav.services },
      "#projetos": { name: t.nav.experience },
      "#sobre": { name: t.nav.about },
      "#contato": { name: t.nav.contact },
      "#idioma": { name: "Idioma" },
    };
    return { ...baseItems, ...items };
  }, [items, t.nav]);

  const entries = Object.entries(navItems);
  const paths = entries.map(([path]) => path);
  const count = entries.length;
  const [activePath, setActivePath] = useState(
    () => findItemPath(paths, pathname) ?? defaultPath ?? paths[0] ?? "/"
  );

  const [syncedPathname, setSyncedPathname] = useState(pathname);
  if (pathname !== syncedPathname) {
    setSyncedPathname(pathname);
    const routePath = findItemPath(paths, pathname);
    if (routePath) {
      setActivePath(routePath);
    }
  }

  const activeIndex = paths.indexOf(findItemPath(paths, activePath) ?? "");
  const [previewIndex, setPreviewIndex] = useState<number | null>(null);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const [keyboardInside, setKeyboardInside] = useState(false);
  const [scrubbing, setScrubbing] = useState(false);

  const scrolledPast = useScrolledPast(compact);
  const [userOpen, openBar] = useUserOpen(scrolledPast);
  const folded =
    compact &&
    scrolledPast &&
    !userOpen &&
    !keyboardInside &&
    !scrubbing &&
    activeIndex >= 0;

  const highlightIndex = previewIndex ?? activeIndex;

  const xs = useMemo(
    () => splitOffsets(count, activeIndex, null).map((x) => motionValue(x)),
    [count]
  );
  const fold = useMotionValue(0);
  const chevronX = useMotionValue(0);
  const chevronTransform = useTransform(
    () => `translate3d(${chevronX.get()}px,0,0)`
  );

  const rowRef = useRef<HTMLDivElement>(null);
  const linkRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const layoutRef = useRef<BarLayout | null>(null);
  const dragRef = useRef<DragState | null>(null);
  const instantRef = useRef(false);
  const suppressClickRef = useRef(false);
  const reduceMotion = useReducedMotion();
  const reduceRef = useRef(false);
  reduceRef.current = reduceMotion === true;

  const live = { activeIndex, highlightIndex, hoverIndex, folded, count };
  const liveRef = useRef(live);
  liveRef.current = live;

  useEffect(() => {
    const row = rowRef.current;
    if (!row) {
      return;
    }
    const measure = () => {
      const boxes = linkRefs.current
        .slice(0, count)
        .map((el) => el?.parentElement);
      layoutRef.current = {
        centers: boxes.map((box) =>
          box ? box.offsetLeft + box.offsetWidth / 2 : 0
        ),
        widths: boxes.map((box) => box?.offsetWidth ?? 0),
        rowWidth: row.offsetWidth,
      };
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(row);
    return () => observer.disconnect();
  }, [count]);

  const retargetRef = useRef<(instant: boolean) => void>(() => undefined);
  retargetRef.current = (instant) => {
    const state = liveRef.current;
    const drag = dragRef.current;
    const jump = instant || reduceRef.current;
    const to = (value: MotionValue<number>, target: number) => {
      if (jump) {
        value.jump(target);
      } else {
        animate(value, target, SPRING);
      }
    };
    const layout = layoutRef.current;
    let targets: number[];
    let chevron: number;
    if (state.folded && layout) {
      const result = foldedOffsets(layout, state.activeIndex);
      targets = result.xs;
      chevron = result.chevron;
    } else {
      const focus = drag?.scrubbing ? drag.focus : state.highlightIndex;
      targets = splitOffsets(
        state.count,
        focus,
        drag?.scrubbing ? null : state.hoverIndex
      );
      const anchor = Math.max(0, state.activeIndex);
      chevron = (layout?.centers[anchor] ?? 0) + (targets[anchor] ?? 0);
    }
    for (const [i, value] of xs.entries()) {
      to(value, targets[i] ?? 0);
    }
    to(chevronX, round2(chevron - CHEVRON_SIZE / 2));
    to(fold, state.folded ? 1 : 0);
  };

  useEffect(() => {
    retargetRef.current(instantRef.current);
    instantRef.current = false;
  }, [activeIndex, highlightIndex, hoverIndex, folded, count]);

  const selectIndex = (index: number) => {
    const path = paths[index];
    if (path !== undefined) {
      setActivePath(path);
    }
  };

  const toFocus = (clientX: number, drag: DragState) =>
    clamp(
      indexAt(layoutRef.current?.centers ?? [], clientX - drag.rowLeft),
      0,
      count - 1
    );

  const onPointerDown = (event: PointerEvent<HTMLDivElement>) => {
    const target = event.target as HTMLElement;
    if (event.button !== 0 || folded || target.closest("[data-chevron]")) {
      return;
    }
    dragRef.current = {
      pointerId: event.pointerId,
      startX: event.clientX,
      rowLeft: event.currentTarget.getBoundingClientRect().left,
      scrubbing: false,
      focus: highlightIndex,
      samples: [{ x: event.clientX, t: event.timeStamp }],
    };
  };

  const onPointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const drag = dragRef.current;
    if (!drag || drag.pointerId !== event.pointerId) {
      return;
    }
    if (!drag.scrubbing) {
      if (Math.abs(event.clientX - drag.startX) < DRAG_SLOP) {
        return;
      }
      drag.scrubbing = true;
      event.currentTarget.setPointerCapture(event.pointerId);
      setScrubbing(true);
      setHoverIndex(null);
    }
    drag.samples.push({ x: event.clientX, t: event.timeStamp });
    if (drag.samples.length > 12) {
      drag.samples.shift();
    }
    drag.focus = toFocus(event.clientX, drag);
    setPreviewIndex(Math.round(drag.focus));
    retargetRef.current(false);
  };

  const endDrag = (event: PointerEvent<HTMLDivElement>, commit: boolean) => {
    const drag = dragRef.current;
    if (!drag || drag.pointerId !== event.pointerId) {
      return;
    }
    dragRef.current = null;
    if (!drag.scrubbing) {
      return;
    }
    setScrubbing(false);
    setPreviewIndex(null);
    if (!commit) {
      retargetRef.current(false);
      return;
    }
    const velocity = releaseVelocity(drag.samples, event.timeStamp);
    const index = Math.round(
      toFocus(event.clientX + velocity * PROJECTION, drag)
    );
    suppressClickRef.current = true;
    setTimeout(() => {
      suppressClickRef.current = false;
    }, 0);
    selectIndex(index);
    linkRefs.current[index]?.click();
  };

  const onClickCapture = (event: MouseEvent<HTMLDivElement>) => {
    if (suppressClickRef.current && event.isTrusted) {
      suppressClickRef.current = false;
      event.preventDefault();
      event.stopPropagation();
    }
  };

  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const move = KEY_MOVES[event.key];
    const from = linkRefs.current.indexOf(
      document.activeElement as HTMLAnchorElement
    );
    if (!move || from < 0) {
      return;
    }
    event.preventDefault();
    const next = clamp(move(from, count), 0, count - 1);
    instantRef.current = true;
    setPreviewIndex(next);
    linkRefs.current[next]?.focus();
  };

  const onLinkFocus = (index: number, event: FocusEvent<HTMLAnchorElement>) => {
    if (event.currentTarget.matches(":focus-visible")) {
      instantRef.current = true;
      setKeyboardInside(true);
      setPreviewIndex(index);
    }
  };

  const onRowBlur = (event: FocusEvent<HTMLDivElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
      instantRef.current = true;
      setKeyboardInside(false);
      setPreviewIndex(null);
    }
  };

  const onHover = (
    index: number,
    event: PointerEvent<HTMLDivElement>,
    entering: boolean
  ) => {
    if (event.pointerType !== "mouse" || dragRef.current?.scrubbing) {
      return;
    }
    setHoverIndex((current) => {
      if (entering) {
        return index;
      }
      return current === index ? null : current;
    });
  };

  const openFolded = () => {
    openBar();
    linkRefs.current[activeIndex]?.focus({ preventScroll: true });
  };

  return (
    <nav
      aria-label="Main"
      className={cn("flex justify-center px-4 py-2", className)}
    >
      <div
        className="relative flex touch-pan-y select-none items-center"
        onBlur={onRowBlur}
        onClickCapture={onClickCapture}
        onKeyDown={onKeyDown}
        onPointerCancel={(event) => endDrag(event, false)}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={(event) => endDrag(event, true)}
        ref={rowRef}
      >
        {entries.map(([path, { name }], index) => {
          if (path === "#idioma") {
            const isPinned = index === activeIndex;
            return (
              <motion.div
                key={`${count}-${path}`}
                className={cn(
                  "relative flex items-center",
                  isPinned ? "z-20" : "z-10"
                )}
                style={{
                  transform: `translate3d(${xs[index]?.get() ?? 0}px,0,0)`,
                  opacity: folded && index !== activeIndex ? 0 : 1,
                }}
              >
                <LanguageToggleInline />
              </motion.div>
            );
          }
          return (
            <Segment
              current={index === activeIndex}
              fold={fold}
              hidden={folded && index !== activeIndex}
              highlighted={index === highlightIndex}
              href={path}
              key={`${count}-${path}`}
              linkRef={(el) => {
                linkRefs.current[index] = el;
              }}
              name={name}
              nextX={xs[index + 1]}
              onFocus={(event) => onLinkFocus(index, event)}
              onHover={(event, entering) => onHover(index, event, entering)}
              onSelect={() => selectIndex(index)}
              pinned={index === activeIndex}
              prevX={xs[index - 1]}
              x={xs[index] ?? fold}
            />
          );
        })}
        {compact ? (
          <motion.button
            aria-expanded={!folded}
            aria-hidden={!folded}
            aria-label="Show all links"
            className={cn(
              "absolute top-0 left-0 flex min-h-[44px] min-w-[44px] items-center justify-center rounded-xl text-muted transition-colors duration-150 hover:text-foreground hover:bg-white/5",
              FOCUS_RING,
              folded ? "z-30" : "pointer-events-none z-0"
            )}
            data-chevron=""
            onClick={openFolded}
            style={{ transform: chevronTransform, opacity: fold }}
            tabIndex={folded ? 0 : -1}
            type="button"
          >
            <ChevronIcon />
          </motion.button>
        ) : null}
      </div>
    </nav>
  );
}

function LanguageToggleInline() {
  const { locale, setLocale } = useLanguage();

  return (
    <div className="flex items-center gap-1">
      <button
        onClick={() => setLocale("pt")}
        className={`rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${
          locale === "pt"
            ? "bg-white/20 text-accent"
            : "text-muted hover:text-foreground hover:bg-white/10"
        }`}
        aria-label="Português"
      >
        PT
      </button>
      <button
        onClick={() => setLocale("en")}
        className={`rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${
          locale === "en"
            ? "bg-white/20 text-accent"
            : "text-muted hover:text-foreground hover:bg-white/10"
        }`}
        aria-label="English"
      >
        EN
      </button>
    </div>
  );
}

export default MorphicNavbar;