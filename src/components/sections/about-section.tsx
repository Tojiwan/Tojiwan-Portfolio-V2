import { SectionHeading } from "@/components/ui/section-heading";
import { TerminalWindow } from "@/components/ui/terminal-window";
import { BrutalistCard } from "@/components/ui/brutalist-card";
import { Reveal } from "@/components/ui/reveal";

export function AboutSection() {
  return (
    <section id="about" aria-labelledby="about-heading" className="scroll-mt-20">
      <div id="about-heading">
        <SectionHeading
          kicker="Introduction overview"
          title="About Me"
          description="Short, specific placeholder bio. Replace with the work you want to be hired for."
        />
      </div>
      <div className="mt-6 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal>
          <BrutalistCard className="h-full">
            <div className="border-b-2 border-black bg-[#f3f4f6] px-4 py-2 font-mono text-[11px] font-bold tracking-wider uppercase">
              Path: ~/portfolio // about_me.md
            </div>
            <div className="p-5">
              <h3 className="font-display text-xl font-bold text-black">
                Web developer for the modern web.
              </h3>
              <p className="mt-2 font-mono text-sm leading-6 text-[#1b1b1b]">
                I turn rough ideas into working pages: routing, data fetching,
                forms, and deploys. This text is simplified — swap in your real
                background and approach.
              </p>
              <ul className="mt-4 space-y-1.5 border-2 border-black bg-[#f9f9f9] p-3 font-mono text-xs">
                <li><span className="font-bold">ROLE:</span> Full-Stack Developer (placeholder)</li>
                <li><span className="font-bold">FOCUS:</span> React, APIs, UI systems</li>
                <li><span className="font-bold">TOOLS:</span> Next.js, TS, Tailwind, Docker</li>
                <li><span className="font-bold">STATUS:</span> Open to work</li>
              </ul>
            </div>
          </BrutalistCard>
        </Reveal>
        <Reveal delay={0.1}>
          <TerminalWindow file="profile.json" status="v1.0">
            <pre className="overflow-x-auto bg-[#f3f4f6] p-3 font-mono text-xs leading-5 text-black">
{`{
  "name": "alex_vance",
  "role": "fullstack",
  "stack": ["next", "ts", "tailwind"],
  "coffee": true
}`}
            </pre>
            <p className="mt-3 font-mono text-[11px] tracking-wider text-[#3e4850] uppercase">
              Terminal panel — no fake credentials, replace with real profile
            </p>
          </TerminalWindow>
        </Reveal>
      </div>
    </section>
  );
}
