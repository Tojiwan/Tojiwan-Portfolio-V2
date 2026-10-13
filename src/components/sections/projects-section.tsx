import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { TerminalWindow } from "@/components/ui/terminal-window";
import { TechBadge } from "@/components/ui/tech-badge";
import { Reveal } from "@/components/ui/reveal";
import { RollingLink } from "@/components/ui/rolling-link";
import { projects } from "@/data/projects";

export function ProjectsSection() {
  return (
    <section id="projects" aria-labelledby="projects-heading" className="scroll-mt-20">
      <div id="projects-heading">
        <SectionHeading
          kicker="Production showcase"
          title="Works I Did"
          description="Simplified concept cards. Each links only where a real URL exists — others are UI placeholders."
        />
      </div>
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.slug} delay={Math.min(i * 0.06, 0.2)}>
            <TerminalWindow file={p.file} status={p.status} className="h-full">
              <p className="font-mono text-[11px] font-bold tracking-[0.08em] text-(--accent-strong) uppercase">
                {p.category}
              </p>
              <h3 className="mt-1 font-display text-2xl font-extrabold text-black">{p.title}</h3>
              <p className="mt-2 font-mono text-[13px] leading-5 text-(--text)">{p.description}</p>
              <dl className="mt-3 grid grid-cols-2 gap-px border-2 border-black bg-black font-mono text-[11px]">
                {p.specs.map((s) => (
                  <div key={s.label} className="bg-white px-2 py-1.5">
                    <dt className="font-bold tracking-wider uppercase opacity-60">{s.label}</dt>
                    <dd className="font-bold">{s.value}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {p.stack.map((s) => (
                  <TechBadge key={s} label={s} />
                ))}
              </div>
              <div className="mt-4 border-t-2 border-black pt-3">
                <RollingLink
                  href="#projects"
                  ariaLabel={`Visit site for ${p.title} (placeholder link)`}
                  className="inline-flex items-center gap-1.5 font-mono text-xs font-bold uppercase no-underline"
                >
                  Visit Site 
                  <ArrowUpRight size={14} aria-hidden="true" />
                </RollingLink>
              </div>
            </TerminalWindow>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
