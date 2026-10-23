import { SectionHeading } from "@/components/ui/section-heading";
import { BrutalistCard }  from "@/components/ui/brutalist-card";
import { Reveal }         from "@/components/ui/reveal";
import { services }       from "@/data/skills";

export function ServicesSection() {
  return (
    <section id="services" aria-labelledby="services-heading" tabIndex={-1} className="scroll-mt-20 focus:outline-none">
      <div id="services-heading">
        <SectionHeading
          kicker="What I can build"
          title="Services"
          description="From page updates to connected workflows."
        />
      </div>
      <div className="mt-6 grid gap-5 md:grid-cols-2">
        {services.map((s, i) => {
          return (
            <Reveal key={s.title} delay={Math.min(i * 0.05, 0.2)}>
              <BrutalistCard className="p-5">
                <h3 className="type-title font-display text-black">{s.title}</h3>
                <p className="type-body mt-3 font-mono text-(--text)">{s.description}</p>
                <div className="mt-4 border-t border-black pt-3 font-mono text-sm leading-relaxed">
                  {s.deliverable}
                </div>
              </BrutalistCard>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
