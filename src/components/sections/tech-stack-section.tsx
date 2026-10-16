import { SectionHeading } from "@/components/ui/section-heading";
import { BrutalistCard } from "@/components/ui/brutalist-card";
import { Reveal } from "@/components/ui/reveal";
import { skillGroups } from "@/data/skills";

export function TechStackSection() {
  return (
    <section id="stack" aria-labelledby="stack-heading" className="scroll-mt-20">
      <div id="stack-heading">
        <SectionHeading
          kicker="Toolbox"
          title="Tools I Work With"
          description="Technologies used across my web development, Shopify, and automation projects."
        />
      </div>
      <div className="mt-6 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {skillGroups.map((g, i) => (
          <Reveal key={g.id} delay={Math.min(i * 0.05, 0.2)}>
            <BrutalistCard className="h-full p-5">
              <p className="inline-flex h-8 w-8 items-center justify-center border-2 border-black bg-(--accent) font-mono text-xs font-bold text-[#000]">
                {g.index}
              </p>
              <h3 className="mt-3 font-display text-lg font-bold text-black">{g.title}</h3>
              <p className="mt-1 font-mono text-xs leading-5 text-(--text-muted)">{g.description}</p>
              <ul className="mt-3 space-y-1.5">
                {g.skills.map((s) => (
                  <li
                    key={s}
                    className="flex items-center gap-2 border border-black bg-(--surface-muted) px-2 py-1.5 font-mono text-xs font-bold"
                  >
                    <span aria-hidden="true" className="h-2 w-2 bg-black" />
                    {s}
                  </li>
                ))}
              </ul>
            </BrutalistCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
