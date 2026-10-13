import { SectionHeading } from "@/components/ui/section-heading";
import { TechBadge } from "@/components/ui/tech-badge";
import { Reveal } from "@/components/ui/reveal";
import { experience } from "@/data/skills";

export function ExperienceSection() {
  return (
    <section id="experience" aria-labelledby="exp-heading" className="scroll-mt-20">
      <div id="exp-heading">
        <SectionHeading
          kicker="Career timeline"
          title="Experience"
          description="Reverse-chronological placeholders. Replace dates and outcomes with verifiable ones."
        />
      </div>
      <ol className="relative mt-6 space-y-5 border-l-2 border-black pl-6">
        {experience.map((e, i) => (
          <li key={`${e.role}-${e.org}`} className="relative">
            <span
              aria-hidden="true"
              className="absolute -left-[33px] top-4 h-3.5 w-3.5 border-2 border-black bg-(--accent)"
            />
            <Reveal delay={Math.min(i * 0.05, 0.2)}>
              <article className="border-2 border-black bg-white p-5 shadow-[4px_4px_0_#000]">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="font-display text-lg font-bold text-black">
                    {e.role} <span className="text-(--accent-strong)">@ {e.org}</span>
                  </h3>
                  <span className="font-mono text-[11px] font-bold tracking-wider text-dark uppercase">
                    {e.period}
                  </span>
                </div>
                <p className="mt-2 font-mono text-[13px] leading-5 text-(--text)">{e.summary}</p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {e.tags.map((t) => (
                    <TechBadge key={t} label={t} />
                  ))}
                </div>
              </article>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  );
}
