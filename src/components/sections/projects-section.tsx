import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { TerminalWindow } from "@/components/ui/terminal-window";
import { TechBadge } from "@/components/ui/tech-badge";
import { Reveal } from "@/components/ui/reveal";
import { RollingLink } from "@/components/ui/rolling-link";
import { projects } from "@/data/projects";
import { DemoPassword } from "@/components/ui/demo-password";

export function ProjectsSection() {
  return (
    <section id="projects" aria-labelledby="projects-heading" className="scroll-mt-20">
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
            className="min-w-0 md:row-span-6 md:grid md:grid-rows-subgrid md:gap-y-0"
          >
            <TerminalWindow
              file={p.file}
              status={p.status}
              className="h-full min-w-0 md:row-span-6 md:grid md:grid-rows-subgrid"
              bodyClassName="min-w-0 md:row-span-5 md:grid md:grid-rows-subgrid"
            >
              <p className="font-mono text-[11px] font-bold tracking-[0.08em] text-(--accent-strong) uppercase">
                {p.category}
              </p>
              <h3 className="mt-1 font-display text-2xl font-extrabold text-black">{p.title}</h3>
              <p className="mt-2 font-mono text-[13px] leading-5 text-(--text)">{p.description}</p>
              <dl className="mt-4 border-2 border-black bg-(--surface-muted) px-3 py-2 font-mono">
                <dt className="text-[10px] font-bold tracking-wider text-(--text-muted) uppercase">Focus</dt>
                <dd className="mt-1 text-xs leading-5 font-bold">{p.focus}</dd>
              </dl>
              <div className="mt-4 flex flex-col">
                <div className="flex flex-wrap items-start gap-1.5">
                  {p.stack.map((s) => (
                    <TechBadge key={s} label={s} />
                  ))}
                </div>
                {p.liveUrl ? (
                  <RollingLink
                    href={p.liveUrl}
                    ariaLabel={`Visit ${p.title} (opens in a new tab)`}
                    className="mt-auto inline-flex w-fit items-center gap-1.5 pt-4 font-mono text-xs font-bold uppercase no-underline"
                  >
                    Visit Site
                    <ArrowUpRight size={14} aria-hidden="true" />
                  </RollingLink>
                ) : null}
                {p.demoUrl ? (
                  <div className="mt-4">
                    <a
                      href={p.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${p.title} demo (opens in a new tab)`}
                      className="inline-flex min-h-11 items-center gap-1.5 font-mono text-xs font-bold uppercase underline underline-offset-4"
                    >
                      View demo <ArrowUpRight size={14} aria-hidden="true" />
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
              </div>
            </TerminalWindow>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
