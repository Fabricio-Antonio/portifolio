"use client";

import { motion, useInView, useReducedMotion } from "motion/react";
import { type Ref, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface MultiLineTypewriterProps {
  lines: {
    text: string;
    className?: string;
    delayAfter?: number;
  }[];
  typingSpeed?: number;
  startDelay?: number;
  naturalVariance?: boolean;
  seed?: number;
  paused?: boolean;
  className?: string;
  playOnce?: boolean;
}

function createRandom(seed: number) {
  let state = (Math.abs(Math.floor(seed)) % 2_147_483_646) + 1;
  return () => {
    state = (state * 16_807) % 2_147_483_647;
    return (state - 1) / 2_147_483_646;
  };
}

function getTypingDelay(
  typingSpeed: number,
  naturalVariance: boolean,
  random: () => number
) {
  if (!naturalVariance) {
    return typingSpeed;
  }
  const roll = random();
  if (roll < 0.1) {
    return typingSpeed * 2;
  }
  if (roll > 0.9) {
    return typingSpeed * 0.5;
  }
  return typingSpeed * (0.6 + random() * 0.8);
}

const CARET_KEYFRAMES =
  "@keyframes kokonutui-typewriter-caret { 0%, 33.333% { opacity: 1; } 66.667%, 100% { opacity: 0; } }";

export default function MultiLineTypewriter({
  lines,
  typingSpeed = 50,
  startDelay = 200,
  naturalVariance = true,
  seed = 7,
  paused = false,
  className,
  playOnce = true,
}: MultiLineTypewriterProps) {
  const [screenLines, setScreenLines] = useState<string[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [hasPlayed, setHasPlayed] = useState(false);
  const caretRef = useRef<HTMLSpanElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef);
  const isRunning = !paused && isInView;
  const shouldReduceMotion = useReducedMotion();
  const random = useRef<() => number>(createRandom(seed));

  // Check if already played on mount
  useEffect(() => {
    if (playOnce && typeof window !== "undefined") {
      const played = sessionStorage.getItem("multiline-typewriter-played");
      if (played === "true") {
        setHasPlayed(true);
        setScreenLines(lines.map((l) => l.text));
        setIsComplete(true);
      }
    }
  }, [lines, playOnce]);

  useEffect(() => {
    random.current = createRandom(seed);
  }, [seed]);

  useEffect(() => {
    if (shouldReduceMotion || hasPlayed) {
      if (!hasPlayed && !shouldReduceMotion) {
        setScreenLines(lines.map((l) => l.text));
        setIsComplete(true);
      }
      return;
    }
    if (!isRunning) {
      return;
    }

    let stopped = false;
    const timers = new Set<ReturnType<typeof setTimeout>>();
    let idleTimer: ReturnType<typeof setTimeout> | undefined;

    const wait = (ms: number) =>
      new Promise<void>((resolve, reject) => {
        if (stopped) {
          reject(new Error("stopped"));
          return;
        }
        const timer = setTimeout(() => {
          timers.delete(timer);
          if (stopped) {
            reject(new Error("stopped"));
          } else {
            resolve();
          }
        }, ms);
        timers.add(timer);
      });

    const keystroke = () => {
      const caret = caretRef.current;
      if (!caret) return;
      caret.dataset.idle = "false";
      clearTimeout(idleTimer);
      idleTimer = setTimeout(() => {
        caret.dataset.idle = "true";
      }, 500);
    };

    const run = async () => {
      try {
        await wait(startDelay);
        
        for (let lineIdx = 0; lineIdx < lines.length; lineIdx++) {
          if (stopped) break;
          
          setCurrentLineIndex(lineIdx);
          setCurrentCharIndex(0);
          
          // Ensure we have enough lines in screenLines
          setScreenLines((prev) => {
            const next = [...prev];
            while (next.length <= lineIdx) next.push("");
            return next;
          });
          
          const lineText = lines[lineIdx].text;
          const delayAfter = lines[lineIdx].delayAfter ?? 0;
          
          // Type this line
          for (let charIdx = 0; charIdx < lineText.length; charIdx++) {
            if (stopped) break;
            setCurrentCharIndex(charIdx + 1);
            setScreenLines((prev) => {
              const next = [...prev];
              next[lineIdx] = lineText.slice(0, charIdx + 1);
              return next;
            });
            keystroke();
            await wait(getTypingDelay(typingSpeed, naturalVariance, random.current));
          }
          
          // Pause after line
          if (delayAfter > 0) {
            await wait(delayAfter);
          }
        }
        
        setIsComplete(true);
        if (playOnce && typeof window !== "undefined") {
          sessionStorage.setItem("multiline-typewriter-played", "true");
        }
      } catch {
        // stopped
      }
    };

    run();

    return () => {
      stopped = true;
      for (const timer of timers) {
        clearTimeout(timer);
      }
      clearTimeout(idleTimer);
      const caret = caretRef.current;
      if (caret) {
        caret.dataset.idle = "true";
      }
    };
  }, [
    lines,
    typingSpeed,
    startDelay,
    naturalVariance,
    shouldReduceMotion,
    isRunning,
    hasPlayed,
    playOnce,
  ]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "inline-flex flex-col items-start justify-items-start whitespace-pre leading-[1.15]",
        className
      )}
    >
      <style href="kokonutui-type-writer-multiline" precedence="default">
        {CARET_KEYFRAMES}
      </style>
      <span className="sr-only">
        {lines.map((l) => l.text).join(" ")}
      </span>
      <motion.div
        className="inline-flex flex-col items-start justify-items-start whitespace-pre"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {lines.map((line, index) => (
          <span
            key={index}
            className={cn(
              "relative inline-flex items-baseline",
              line.className
            )}
          >
            <span className="whitespace-pre h-[1.15em]">
              {screenLines[index] ?? ""}
            </span>
            {(index === currentLineIndex && !isComplete) || (isComplete && index === lines.length - 1) ? (
              <Caret caretRef={caretRef} />
            ) : null}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

function Caret({ caretRef }: { caretRef: Ref<HTMLSpanElement> }) {
  return (
    <span className="relative inline-block align-bottom w-0 h-[1.15em]">
      <span
        className="absolute bottom-0 left-0 h-full w-[0.08em] min-w-[2px] bg-accent motion-safe:data-[idle=true]:animate-[kokonutui-typewriter-caret_1s_linear_infinite]"
        data-idle="true"
        ref={caretRef}
      />
    </span>
  );
}