import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { TerminalWindow } from "@/components/ui/terminal-window";
import { TechBadge } from "@/components/ui/tech-badge";
import { Reveal } from "@/components/ui/reveal";
import { projects } from "@/data/projects";
import { DemoPassword } from "@/components/ui/demo-password";

export function ProjectsSection() {
  return (
    <section id="projects" aria-labelledby="projects-heading" tabIndex={-1} className="scroll-mt-20 focus:outline-none">
      <div id="projects-heading">
        <SectionHeading
          kicker="Selected work"
          title="Projects & Contributions"
          description="Storefronts, web applications, and automation projects from personal work, company roles, and my capstone."
        />
      </div>
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal
            key={p.slug}
            delay={Math.min(i * 0.06, 0.2)}
            className="h-full min-w-0"
          >
            <TerminalWindow
              file={p.file}
              status={p.status}
              className="h-full min-w-0"
              bodyClassName="min-w-0"
            >
              <p className="type-label text-(--text-muted)">{p.category}</p>
              <h3 className="type-title mt-2 font-display text-black">{p.title}</h3>
              <p className="type-body mt-3 font-mono text-(--text)">{p.description}</p>
              <div className="mt-4 flex flex-col">
                {p.demoUrl ? (
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                    <a
                      href={p.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${p.title} demo (opens in a new tab)`}
                      className="inline-flex min-h-11 w-fit items-center gap-2 border-2 border-black bg-(--accent) px-4 py-2 font-mono text-sm font-bold tracking-wide text-[#000] uppercase shadow-[4px_4px_0_var(--shadow-color)] transition-all hover:bg-(--accent-soft) hover:shadow-[2px_2px_0_var(--shadow-color)] hover:translate-x-0.5 hover:translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 active:shadow-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      View demo <ArrowUpRight size={15} aria-hidden="true" />
                    </a>
                    {p.demoPassword ? (
                      <>
                        <p className="font-mono text-xs leading-5 text-(--text-muted)">Shopify development store · password required</p>
                        <DemoPassword password={p.demoPassword} />
                      </>
                    ) : null}
                  </div>
                ) : null}
                {p.designUrl ? (
                  <a
                    href={p.designUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${p.title} original Figma design source (opens in a new tab)`}
                    className="mt-2 inline-flex min-h-11 w-fit items-center gap-1.5 font-mono text-xs underline underline-offset-4"
                  >
                    Design source <ArrowUpRight size={14} aria-hidden="true" />
                  </a>
                ) : null}
                <div className="mt-4 flex flex-wrap items-start gap-1.5">
                  {p.stack.slice(0, 4).map((s) => (
                    <TechBadge key={s} label={s} />
                  ))}
                  {p.stack.length > 4 ? (
                    <p className="type-label w-full text-(--text-muted)">
                      stack: {p.stack.slice(4).join(" · ")}
                    </p>
                  ) : null}
                </div>
              </div>
            </TerminalWindow>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
