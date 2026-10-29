"use client";

import { createContext, useContext, useEffect, useState, type CSSProperties, type ReactNode } from "react";
import "./page-intro.css";

const ReadyContext = createContext(true);
export const usePageReady = () => useContext(ReadyContext);
const sessionKey = "tojiwan-intro-seen";
const letters = [
  ["11111", "00100", "00100", "00100", "00100", "00100", "00100"],
  ["01110", "10001", "10001", "10001", "10001", "10001", "01110"],
  ["00111", "00010", "00010", "00010", "10010", "10010", "01100"],
  ["111", "010", "010", "010", "010", "010", "111"],
  ["10001", "10001", "10001", "10101", "10101", "10101", "01010"],
  ["01110", "10001", "10001", "11111", "10001", "10001", "10001"],
  ["10001", "11001", "11001", "10101", "10011", "10011", "10001"],
];

export function PageIntro({ children }: { children: ReactNode }) {
  const [phase, setPhase] = useState("pending");
  const [loaded, setLoaded] = useState(0);
  const ready = phase === "done";

  useEffect(() => {
    let live = true;
    const timers: ReturnType<typeof setTimeout>[] = [];
    const wait = (ms: number) => new Promise<void>(resolve => timers.push(setTimeout(resolve, ms)));
    const motion = matchMedia("(prefers-reduced-motion: reduce)");
    const previousOverflow = document.body.style.overflow;
    const finish = () => {
      if (!live) return;
      document.body.style.overflow = previousOverflow;
      try { sessionStorage.setItem(sessionKey, "1"); } catch { /* Storage may be unavailable. */ }
      setPhase("done");
    };
    const motionChanged = () => { if (motion.matches) finish(); };
    motion.addEventListener("change", motionChanged);

    async function start() {
      await Promise.resolve();
      if (!live) return;
      try { if (sessionStorage.getItem(sessionKey)) { finish(); return; } } catch { /* Continue without persistence. */ }
      if (motion.matches) { finish(); return; }
      setPhase("loading");
      document.body.style.overflow = "hidden";
      let acceptingProgress = true;
      const mark = () => { if (live && acceptingProgress) setLoaded(count => count + 1); };
      const image = document.querySelector<HTMLImageElement>(".hero-profile img");
      const fonts = Promise.all([
        '400 16px "Courier Prime"',
        '700 16px "Courier Prime"',
        '400 16px "IBM Plex Mono"',
        '600 16px "IBM Plex Mono"',
      ].map(font => document.fonts.load(font))).then(results => {
        if (results.every(faces => faces.length > 0 && faces.every(face => face.status === "loaded"))) mark();
      });
      const assets = Promise.allSettled([
        fonts,
        image?.decode().then(() => { if (image.naturalWidth > 0) mark(); }),
      ]);
      await Promise.all([Promise.race([assets, wait(4000)]), wait(1100)]);
      acceptingProgress = false;
      if (!live || motion.matches) return;
      setPhase("dissolving");
      await wait(450);
      if (!live || motion.matches) return;
      setPhase("leaving");
      await wait(240);
      finish();
    }
    void start();
    return () => {
      live = false;
      document.body.style.overflow = previousOverflow;
      timers.forEach(clearTimeout);
      motion.removeEventListener("change", motionChanged);
    };
  }, []);

  return (
    <ReadyContext.Provider value={ready}>
      <noscript><style>{".page-intro { display: none !important; }"}</style></noscript>
      {!ready && (
        <div className={`page-intro ${phase === "dissolving" || phase === "leaving" ? "is-dissolving" : ""} ${phase === "leaving" ? "is-leaving" : ""}`} role="status" aria-label="Loading Tojiwan portfolio">
          <div className="page-intro-content" aria-hidden="true">
            <svg className="page-intro-wordmark" viewBox="0 0 40 7" fill="currentColor">
              {letters.flatMap((rows, letter) => rows.flatMap((row, y) => [...row].map((pixel, x) => pixel === "1" ? (
                <rect className="intro-pixel" key={`${letter}-${x}-${y}`} x={letter * 6 + x - (letter > 3 ? 2 : 0)} y={y} width=".82" height=".82" style={{
                  "--scan-delay": `${y * 100 + (letter * 17 + x * 13) % 65}ms`,
                  "--dissolve-delay": `${(letter * 73 + x * 47 + y * 31) % 270}ms`,
                } as CSSProperties} />
              ) : null)))}
              <rect className="intro-scanline" x="0" y="0" width="39" height=".12" />
            </svg>
            <div className="page-intro-bar">
              {Array.from({ length: 24 }, (_, i) => <span key={i} className={i < loaded * 12 ? "is-loaded" : ""} />)}
            </div>
            <p>INITIALIZING PORTFOLIO…</p>
          </div>
        </div>
      )}
      <div className="page-intro-page" inert={phase === "loading" || phase === "dissolving" || phase === "leaving"}>{children}</div>
    </ReadyContext.Provider>
  );
}
