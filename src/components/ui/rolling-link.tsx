"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { useRef, useState, type ReactNode } from "react";

const outgoingVariants = {
  rest: { transform: "translateY(0%)" },
  active: { transform: "translateY(100%)" },
};

const incomingVariants = {
  rest: { transform: "translateY(-100%)" },
  active: { transform: "translateY(0%)" },
};

const transition = {
  duration: 0.3,
  ease: [0.338, 0.015, 0.395, 0.959] as [number, number, number, number],
};

export function RollingLink({
  href,
  children,
  className,
  onClick,
  ariaLabel,
}: {
  href: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  ariaLabel?: string;
}) {
  const external = /^https?:\/\//i.test(href);
  const reduceMotion = useReducedMotion();
  const [active, setActive] = useState(false);
  const activeRef = useRef(false);
  const animating = useRef(false);
  const pendingRequest = useRef<boolean | null>(null);
  const hovered = useRef(false);
  const focused = useRef(false);

  const updateActive = (next: boolean) => {
    activeRef.current = next;
    setActive(next);
  };

  const requestActive = (next: boolean) => {
    if (reduceMotion) return;

    if (next === activeRef.current) {
      pendingRequest.current = null;
      return;
    }

    if (animating.current) {
      pendingRequest.current = next;
      return;
    }

    animating.current = true;
    updateActive(next);
  };

  const completeAnimation = () => {
    if (!animating.current) return;
    animating.current = false;

    if (
      pendingRequest.current !== null &&
      pendingRequest.current !== activeRef.current
    ) {
      const next = pendingRequest.current;
      pendingRequest.current = null;
      animating.current = true;
      updateActive(next);
    } else {
      pendingRequest.current = null;
    }
  };

  return (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={className}
      onClick={onClick}
      aria-label={ariaLabel}
      onMouseEnter={() => {
        hovered.current = true;
        requestActive(true);
      }}
      onMouseLeave={() => {
        hovered.current = false;
        requestActive(focused.current);
      }}
      onFocus={() => {
        focused.current = true;
        requestActive(true);
      }}
      onBlur={() => {
        focused.current = false;
        requestActive(hovered.current);
      }}
    >
      <span className="label-window">
        <motion.span
          className="label-copy"
          variants={outgoingVariants}
          initial="rest"
          animate={!reduceMotion && active ? "active" : "rest"}
          onAnimationComplete={completeAnimation}
          transition={reduceMotion ? { duration: 0 } : transition}
        >
          {children}
        </motion.span>
        <motion.span
          className="label-copy label-copy--incoming"
          aria-hidden="true"
          variants={incomingVariants}
          initial="rest"
          animate={!reduceMotion && active ? "active" : "rest"}
          transition={reduceMotion ? { duration: 0 } : transition}
        >
          {children}
        </motion.span>
      </span>
    </Link>
  );
}
