"use client";

import { useReducedMotion } from "motion/react";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

// 5x7 pixel glyphs, scaled up and surrounded by a dither field.
const J = ["  ## ", "   # ", "   # ", "   # ", "   # ", "#  # ", " ##  "];
const P = ["#### ", "#   #", "#   #", "#### ", "#    ", "#    ", "#    "];

export type AsciiVariant = "jp" | "cap";

function jpOn(x: number, y: number, scale: number, ox: number, oy: number): boolean {
  const glyph: string[] = [];
  for (let r = 0; r < 7; r++) glyph.push(`${J[r]} ${P[r]}`);
  const gx = x - ox;
  const gy = y - oy;
  if (gx < 0 || gy < 0 || gx >= 11 * scale || gy >= 7 * scale) return false;
  return glyph[Math.floor(gy / scale)][Math.floor(gx / scale)] !== " ";
}

function capOn(x: number, y: number): boolean {
  // Mortarboard diamond, center (16, 7).
  if (Math.abs(x - 16) / 13 + Math.abs(y - 7) / 4 <= 1) return true;
  // Head band.
  if (y >= 12 && y <= 14 && x >= 9 && x <= 23) return true;
  // Tassel cord + knot.
  if (x === 26 && y >= 4 && y <= 13) return true;
  if (y >= 13 && y <= 15 && x >= 25 && x <= 27) return true;
  return false;
}

const SCALE = 3;
const W = 37;
const H = 23;

type Tone = "glyph" | "accent" | "field" | "blank";

interface Cell {
  ch: string;
  tone: Tone;
}

function buildArt(variant: AsciiVariant): Cell[][] {
  const ox = Math.floor((W - 11 * SCALE) / 2);
  const oy = Math.floor((H - 7 * SCALE) / 2);
  const rows: Cell[][] = [];
  for (let y = 0; y < H; y++) {
    const row: Cell[] = [];
    for (let x = 0; x < W; x++) {
      const on = variant === "jp" ? jpOn(x, y, SCALE, ox, oy) : capOn(x, y);
      if (on) {
        row.push({ ch: "#", tone: (x * 7 + y * 13) % 19 === 0 ? "accent" : "glyph" });
      } else {
        const dx = (x - W / 2) / (W / 2);
        const dy = (y - H / 2) / (H / 2);
        const d = Math.sqrt(dx * dx + dy * dy);
        if (d < 0.45) row.push({ ch: ":", tone: "field" });
        else if (d < 0.8) row.push({ ch: "·", tone: "field" });
        else row.push({ ch: " ", tone: "blank" });
      }
    }
    rows.push(row);
  }
  return rows;
}

// Deterministic — safe to compute once and render on server and client.
const ART: Record<AsciiVariant, Cell[][]> = {
  jp: buildArt("jp"),
  cap: buildArt("cap"),
};

const toneClass: Record<Tone, string> = {
  glyph: "text-[#dfe9f2]",
  accent: "text-[#2dd4bf]",
  field: "text-[#59616b]",
  blank: "",
};

const RAIN_CHARS = "アイウエオカキクケコ01".split("");

function Rain() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const CW = (canvas.width = 360);
    const CH = (canvas.height = 440);
    const fs = 14;
    const cols = Math.floor(CW / fs);
    const drops = Array.from({ length: cols }, () => Math.floor(Math.random() * -20));
    let raf = 0;
    let last = 0;
    let visible = true;
    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
    });
    io.observe(canvas);

    const tick = (t: number) => {
      raf = requestAnimationFrame(tick);
      if (!visible || t - last < 110) return;
      last = t;
      ctx.clearRect(0, 0, CW, CH);
      ctx.font = `${fs}px ui-monospace, monospace`;
      ctx.fillStyle = "rgba(52, 211, 153, 0.09)";
      drops.forEach((y, i) => {
        const ch = RAIN_CHARS[Math.floor(Math.random() * RAIN_CHARS.length)];
        ctx.fillText(ch, i * fs, y * fs);
        drops[i] = y * fs > CH && Math.random() > 0.976 ? 0 : y + 1;
      });
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
    };
  }, []);

  return <canvas ref={ref} aria-hidden="true" className="pointer-events-none absolute inset-0 h-full w-full" />;
}

export function AsciiPortrait({
  className,
  variant = "jp",
  label = "ASCII art monogram JP",
}: {
  className?: string;
  variant?: AsciiVariant;
  label?: string;
}) {
  const reduce = useReducedMotion();

  return (
    <figure className={cn("relative overflow-hidden border-2 border-black bg-black p-4", className)}>
      <span aria-hidden="true" className="absolute left-2 top-2 h-3 w-3 border-l-2 border-t-2 border-[#2dd4bf]/70" />
      <span aria-hidden="true" className="absolute right-2 top-2 h-3 w-3 border-r-2 border-t-2 border-[#2dd4bf]/70" />
      <span aria-hidden="true" className="absolute bottom-2 left-2 h-3 w-3 border-b-2 border-l-2 border-[#2dd4bf]/70" />
      <span aria-hidden="true" className="absolute bottom-2 right-2 h-3 w-3 border-b-2 border-r-2 border-[#2dd4bf]/70" />
      <pre
        aria-label={label}
        role="img"
        className="relative mx-auto w-fit font-mono text-[8px] leading-[1.25] sm:text-[9px]"
      >
        {ART[variant].map((row, y) => (
          <div key={y}>
            {row.map((cell, x) => (
              <span key={x} className={toneClass[cell.tone]}>
                {cell.ch}
              </span>
            ))}
          </div>
        ))}
      </pre>
      {reduce ? null : <Rain />}
    </figure>
  );
}
