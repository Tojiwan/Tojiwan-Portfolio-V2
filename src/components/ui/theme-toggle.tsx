"use client";

import { useEffect, useRef, useState } from "react";
import { Sun, Moon }                   from "lucide-react";

const STORAGE_KEY = "tojiwan-theme";
const SWITCH_MS   = 180;

export function ThemeToggle() {
  // Matches the served render (light default) so hydration never mismatches.
  const [theme, setTheme] = useState<"dark" | "light">("light");
  const switchTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    // One-time client sync after mount: pick up the stored theme the
    // pre-paint script applied. No dependencies, so this never loops.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setTheme(
      document.documentElement.classList.contains("dark") ? "dark" : "light"
    );
    return () => {
      if (switchTimer.current) clearTimeout(switchTimer.current);
    };
  }, []);

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    const root = document.documentElement;
    // The class lets one CSS rule fade every surface for the length of a
    // single swap; only toggles trigger it.
    root.classList.add("theme-switching");
    root.classList.toggle("dark", next === "dark");
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Storage unavailable (private mode) — theme still applies live.
    }
    if (switchTimer.current) clearTimeout(switchTimer.current);
    switchTimer.current = setTimeout(
      () => root.classList.remove("theme-switching"),
      SWITCH_MS
    );
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
      className="relative inline-flex h-11 w-11 shrink-0 items-center justify-center border-2 border-black bg-white text-black shadow-[3px_3px_0_var(--shadow-color)] transition-all hover:bg-(--surface-muted) hover:shadow-[2px_2px_0_var(--shadow-color)] hover:translate-x-0.5 hover:translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 active:shadow-none focus-visible:outline-2 focus-visible:outline-offset-2"
    >
      <Sun size={16} aria-hidden="true" className="theme-toggle-icon theme-toggle-icon--sun" />
      <Moon size={16} aria-hidden="true" className="theme-toggle-icon theme-toggle-icon--moon" />
    </button>
  );
}
