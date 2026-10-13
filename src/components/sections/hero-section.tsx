import { ArrowDown, FolderGit2 } from "lucide-react";
import { ActionLink } from "@/components/ui/action-link";
import { TechBadge } from "@/components/ui/tech-badge";
import { TerminalWindow } from "@/components/ui/terminal-window";
import { Reveal } from "@/components/ui/reveal";

export function HeroSection() {
  return (
    <section id="top" aria-labelledby="hero-heading" className="scroll-mt-20">
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-stretch">
        <Reveal>
          <div className="flex h-full flex-col justify-center border-2 border-black bg-white p-6 shadow-[6px_6px_0_#000] sm:p-8">
            <h1
              id="hero-heading"
              className="mt-2 font-display text-4xl leading-[1.05] font-extrabold tracking-tight text-black sm:text-6xl"
            >
              Hi, I&apos;m{" "}
              <span className="bg-[#0ea5e9] px-2 outline-2 outline-black">TOJIWAN</span>
            </h1>
            <div className="mt-4 flex flex-wrap gap-2">
              <TechBadge label="Fullstack Developer" accent />
              <TechBadge label="UI / UX" />
            </div>
            <p className="mt-4 max-w-xl font-mono text-sm leading-6 text-[#1b1b1b]">
              Placeholder intro: I build fast, readable web apps with React and
              TypeScript. Simplified demo content — replace with your real
              value proposition.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <ActionLink href="#projects">
                <FolderGit2 size={16} aria-hidden="true" /> View Projects
              </ActionLink>
              <ActionLink href="/files/Peralta, Jake Andrei R. (RESUME).pdf" variant="secondary" download>
                <ArrowDown size={16} aria-hidden="true" /> Download CV
              </ActionLink>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <TerminalWindow file="tojiwan_preview.img" status="LIVE" dark className="h-full">
            <div aria-hidden="true" className="grid grid-cols-12 gap-px border border-[#2a3340] bg-[#2a3340]">
              {Array.from({ length: 96 }).map((_, i) => (
                <span key={i} className="h-4 bg-[#0f1620]" />
              ))}
            </div>
            <div className="mt-4 border border-[#2a3340] bg-[#0f1620] p-4">
              <p className="font-mono text-xs text-[#7bd0ff]">$ whoami</p>
              <p className="mt-1 font-mono text-sm text-white">Jake Andrei R. Peralta — full-stack dev</p>
              <p className="mt-3 font-mono text-xs text-[#7bd0ff]">$ stack --list</p>
              <p className="mt-1 font-mono text-xs text-[#e6edf3]">
                next.js / typescript / tailwind / motion
              </p>
              <div className="mt-4 flex gap-2">
                <span className="h-2 w-16 bg-[#0ea5e9]" />
                <span className="h-2 w-10 bg-[#2563eb]" />
                <span className="h-2 w-6 bg-white" />
              </div>
            </div>
          </TerminalWindow>
        </Reveal>
      </div>
      <div className="mt-6 border-2 border-black bg-white px-4 py-3 shadow-[4px_4px_0_#000]">
        <p className="font-mono text-xs leading-5">
          <span className="bg-black px-1 py-0.5 font-bold text-white uppercase">Note</span>{" "}
          <span className="text-[#1b1b1b]">
            “Simplified placeholder build. Real copy, metrics, and links replace this strip.”
          </span>
        </p>
      </div>
    </section>
  );
}
