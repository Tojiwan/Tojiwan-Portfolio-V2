import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { experience } from "@/data/skills";

export function ExperienceSection() {
  return (
    <section id="experience" aria-labelledby="exp-heading" tabIndex={-1} className="scroll-mt-20 focus:outline-none">
      <div id="exp-heading">
        <SectionHeading
          kicker="Career timeline"
          title="Experience"
          description="From my internship to web development, automation, and freelance Shopify work. Most recent role first."
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
              <article className="brutal-panel border-2 border-black bg-white p-5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="type-title font-display text-black">
                    {e.role} <span className="text-(--accent-strong)">@ {e.org}</span>
                  </h3>
                  <span className="type-label text-(--text-muted)">
                    {e.period}
                  </span>
                </div>
                <p className="type-body mt-3 font-mono text-(--text)">{e.summary}</p>
                <p className="type-label mt-3 min-w-0 text-(--text-muted)">
                  stack: {e.tags.join(" · ")}
                </p>
              </article>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  );
}
