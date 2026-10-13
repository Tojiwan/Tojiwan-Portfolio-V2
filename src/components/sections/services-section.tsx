import { Code2, Globe, Palette, Gauge } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { BrutalistCard } from "@/components/ui/brutalist-card";
import { Reveal } from "@/components/ui/reveal";
import { RollingLink } from "@/components/ui/rolling-link";
import { services } from "@/data/skills";

const icons = [Globe, Code2, Palette, Gauge];

export function ServicesSection() {
  return (
    <section id="services" aria-labelledby="services-heading" className="scroll-mt-20">
      <div id="services-heading">
        <SectionHeading
          kicker="What I can build"
          title="Services"
          description="Scoped, honest offers. Each card points to contact — no overpromising."
        />
      </div>
      <div className="mt-6 grid gap-5 md:grid-cols-2">
        {services.map((s, i) => {
          const Icon = icons[i % icons.length];
          return (
            <Reveal key={s.title} delay={Math.min(i * 0.05, 0.2)}>
              <BrutalistCard className="h-full p-5">
                <p className="inline-flex h-9 w-9 items-center justify-center border-2 border-black bg-white shadow-[3px_3px_0_#000]">
                  <Icon size={18} aria-hidden="true" />
                </p>
                <h3 className="mt-3 font-display text-lg font-bold text-black">{s.title}</h3>
                <p className="mt-1 font-mono text-[13px] leading-5 text-[#1b1b1b]">{s.description}</p>
                <div className="mt-4 flex items-center justify-between border-t-2 border-black pt-3">
                  <span className="font-mono text-[11px] font-bold tracking-wider uppercase">
                    {s.deliverable}
                  </span>
                  <RollingLink
                    href="#contact"
                    className="border-2 border-black bg-white px-2 py-1 font-mono text-[11px] font-bold uppercase shadow-[2px_2px_0_#000] hover:bg-[#0ea5e9] focus-visible:outline-2 focus-visible:outline-black"
                  >
                    Enquire →
                  </RollingLink>
                </div>
              </BrutalistCard>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
