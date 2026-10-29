"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode }           from "react";
import { usePageReady } from "@/components/layout/page-intro";

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children  : ReactNode;
  delay    ?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  const ready = usePageReady();
  return (
    <motion.div
      className   = {className}
      initial     = {{ y: 16 }}
      whileInView = {ready ? { y: 0 } : undefined}
      viewport    = {{ once: true, margin: "-80px" }}
      transition  = {{ duration: reduce ? 0 : 0.45, delay: reduce ? 0 : delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
