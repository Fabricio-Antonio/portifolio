"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";

export function ScrollProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = scrollTop / docHeight;
      setProgress(scrollPercent);
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 z-[100] h-0.5 w-full pointer-events-none"
      style={{ transformOrigin: "left center" }}
      animate={{ scaleX: progress }}
      transition={{ duration: 0.1, ease: "linear" }}
    >
      <div className="h-full bg-accent/80 relative" />
      <div
        className="absolute top-0 left-0 h-full w-full bg-accent/50 blur-[4px]"
        style={{ filter: "blur(12px)" }}
      />
    </motion.div>
  );
}