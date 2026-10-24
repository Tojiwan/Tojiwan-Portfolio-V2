"use client";

import Image                                         from "next/image";
import { useState }                                  from "react";
import { Menu, X }                                   from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { RollingLink }                               from "@/components/ui/rolling-link";
import { ThemeToggle }                               from "@/components/ui/theme-toggle";

const links = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Works & Projects" },
  { href: "#stack", label: "Tech Stack" },
  { href: "#experience", label: "Experience" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
];

  // Expands the panel by its own height so the page push is part of the open
  // gesture; bounded and one-shot, no continuous dropdown motion.
const menuTransition = { duration: 0.22, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] };

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const reduceMotion    = useReducedMotion();
  return (
    <header className = "sticky top-0 z-50 border-b-2 border-black bg-(--panel)">
    <div    className = "mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6">
    <a      href      = "#top" className = "flex items-center gap-2 focus-visible:outline-2 focus-visible:outline-black">
    <Image  src       = "/icon.svg" alt  = "" width = {40} height = {40} className = "shrink-0" />
    <span   className = "leading-none">
    <span   className = "block font-display text-sm font-bold tracking-tight text-black">
              Tojiwan
            </span>
            <span className = "hidden font-terminal text-[11px] font-semibold tracking-[0.06em] text-(--text-muted) uppercase sm:block">
              Web · Shopify · Automation
            </span>
          </span>
        </a>
        <nav aria-label = "Primary" className = "hidden shrink-0 items-center gap-4 xl:flex">
          {links.map((l) => (
            <RollingLink
              key       = {l.href}
              href      = {l.href}
              className = "font-mono text-xs font-bold tracking-wider text-black uppercase focus-visible:outline-2 focus-visible:outline-black"
            >
              {l.label}
            </RollingLink>
          ))}
        </nav>
        <div className = "flex shrink-0 items-center gap-2">
          <ThemeToggle />
          <a
            href      = "#contact"
            className = "header-action hidden h-11 items-center border-2 border-black bg-(--accent) px-3 font-mono text-xs font-bold text-[#000] uppercase shadow-[3px_3px_0_var(--shadow-color)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none focus-visible:outline-2 focus-visible:outline-offset-2 sm:inline-flex"
          >
            Get in touch
          </a>
          <button
            type          = "button"
            className     = "inline-flex h-11 w-11 items-center justify-center border-2 border-black bg-white shadow-[3px_3px_0_var(--shadow-color)] transition-colors hover:bg-(--surface-muted) active:translate-x-0.5 active:translate-y-0.5 active:shadow-none xl:hidden"
            aria-expanded = {open}
            aria-controls = "mobile-nav"
            aria-label    = {open ? "Close menu" : "Open menu"}
            onKeyDown     = {(event) => {
              if (event.key === "Escape") setOpen(false);
            }}
            onClick = {() => setOpen((v) => !v)}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>
      <AnimatePresence initial = {false}>
        {open ? (
          <motion.nav
            id         = "mobile-nav"
            aria-label = "Mobile"
            initial    = {reduceMotion ? false : { height: 0, opacity: 0 }}
            animate    = {{ height: "auto", opacity: 1 }}
            exit       = {{ height: 0, opacity: 0 }}
            transition = {reduceMotion ? { duration: 0 } : menuTransition}
            style      = {{ overflow: "hidden" }}
            onKeyDown  = {(event) => {
              if (event.key === "Escape") {
                setOpen(false);
                document.querySelector<HTMLButtonElement>('[aria-controls="mobile-nav"]')?.focus();
              }
            }}
            className = "border-t-2 border-black bg-white px-4 py-3 xl:hidden"
          >
          <ul className = "mx-auto flex max-w-7xl flex-col gap-1 sm:px-2">
            {links.map((l) => (
              <li key = {l.href}>
                <RollingLink
                  href      = {l.href}
                  onClick   = {() => setOpen(false)}
                  className = "block border-2 border-transparent px-2 py-3 font-mono text-sm font-bold uppercase hover:border-black hover:bg-(--panel) active:border-black active:bg-(--panel) focus-visible:outline-2 focus-visible:outline-black"
                >
                  {l.label}
                </RollingLink>
              </li>
            ))}
            <li>
              <a
                href      = "#contact"
                onClick   = {() => setOpen(false)}
                className = "mt-1 flex min-h-11 items-center justify-center border-2 border-black bg-(--accent) px-2 font-mono text-sm font-bold text-[#000] uppercase shadow-[3px_3px_0_var(--shadow-color)] hover:bg-(--accent-soft) hover:shadow-[2px_2px_0_var(--shadow-color)] hover:translate-x-0.5 hover:translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
              >
                Get in touch
              </a>
            </li>
          </ul>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
