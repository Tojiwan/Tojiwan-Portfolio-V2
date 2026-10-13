"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { RollingLink } from "@/components/ui/rolling-link";
import { ThemeToggle } from "@/components/ui/theme-toggle";

const links = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Works & Projects" },
  { href: "#stack", label: "Tech Stack" },
  { href: "#experience", label: "Experience" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b-2 border-black bg-(--panel)">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link href="#top" className="flex items-center gap-2 focus-visible:outline-2 focus-visible:outline-black">
          <span className="leading-none">
            <span className="block font-display text-sm font-extrabold tracking-tight text-black">
              Tojiwan
            </span>
            <span className="block font-mono text-[10px] font-bold tracking-[0.12em] text-(--text-muted) uppercase">
              Full-Stack Web Developer
            </span>
          </span>
        </Link>
        <nav aria-label="Primary" className="hidden items-center gap-5 lg:flex">
          {links.map((l) => (
            <RollingLink
              key={l.href}
              href={l.href}
              className="font-mono text-xs font-bold tracking-wider text-black uppercase focus-visible:outline-2 focus-visible:outline-black"
            >
              {l.label}
            </RollingLink>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link
            href="#contact"
            className="hidden border-2 border-black bg-(--accent) px-3 py-2 font-mono text-xs font-bold uppercase shadow-[3px_3px_0_#000] transition-all hover:bg-(--accent-soft) active:translate-x-0.5 active:translate-y-0.5 active:shadow-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black sm:inline-flex"
          >
            Get in touch
          </Link>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center border-2 border-black bg-white shadow-[3px_3px_0_#000] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>
      {open ? (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="border-t-2 border-black bg-white px-4 py-3 lg:hidden"
        >
          <ul className="flex flex-col gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <RollingLink
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block border-2 border-transparent px-2 py-2 font-mono text-sm font-bold uppercase hover:border-black hover:bg-(--panel) focus-visible:outline-2 focus-visible:outline-black"
                >
                  {l.label}
                </RollingLink>
              </li>
            ))}
            <li>
              <Link
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-1 block border-2 border-black bg-(--accent) px-2 py-2 text-center font-mono text-sm font-bold uppercase"
              >
                Get in touch
              </Link>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
