"use client";

import { useEffect, useRef, useState } from "react";
import { Sun, Moon }                   from "lucide-react";

const STORAGE_KEY = "tojiwan-theme";

export function ThemeToggle() {
  // Matches the served render (light default) so hydration never mismatches.
  const [theme, setTheme] = useState<"dark" | "light">("light");
  const frame = useRef(0);

  useEffect(() => {
    // One-time client sync after mount: pick up the stored theme the
    // pre-paint script applied. No dependencies, so this never loops.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setTheme(
      document.documentElement.classList.contains("dark") ? "dark" : "light"
    );
    return () => cancelAnimationFrame(frame.current);
  }, []);

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    const root = document.documentElement;
    const swap = () => {
      // Suppress ambient transitions for the swap frame; icons keep their
      // own short fade/rotate.
      root.classList.add("theme-switching");
      root.classList.toggle("dark", next === "dark");
      cancelAnimationFrame(frame.current);
      frame.current = requestAnimationFrame(() => {
        frame.current = requestAnimationFrame(() => root.classList.remove("theme-switching"));
      });
      try {
        localStorage.setItem(STORAGE_KEY, next);
      } catch {
        // Storage unavailable (private mode) — theme still applies live.
      }
    };
    // Compositor crossfade of old/new snapshots: smooth without
    // animating 12k nodes. Falls back to an instant swap.
    if (!matchMedia("(prefers-reduced-motion: reduce)").matches && document.startViewTransition) {
      document.startViewTransition(swap);
    } else {
      swap();
    }
  };

  // Both icons stay mounted and are shown by CSS via the root theme class,
  // so the icon is correct from the very first paint (server render is light).
  // Their cross-rotate is a 16px op/transform, cheap in both directions.
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={theme === "dark"}
      className="relative inline-flex h-11 w-11 shrink-0 items-center justify-center border-2 border-black bg-white text-black shadow-[3px_3px_0_var(--shadow-color)] hover:bg-(--surface-muted) active:shadow-none focus-visible:outline-2 focus-visible:outline-offset-2"
    >
      <Sun size={16} aria-hidden="true" className="theme-toggle-icon theme-toggle-icon--sun" />
      <Moon size={16} aria-hidden="true" className="theme-toggle-icon theme-toggle-icon--moon" />
    </button>
  );
}
