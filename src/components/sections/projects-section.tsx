import { SectionHeading }   from "@/components/ui/section-heading";
import { ProjectsCarousel } from "@/components/sections/projects-carousel";
import { projects }         from "@/data/projects";
import { Suspense }         from "react";

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
      <Suspense fallback={<div className="mt-6 min-h-[800px] border-2 border-black bg-white p-6"><p role="status">Loading project terminals…</p></div>}>
        <ProjectsCarousel projects={projects} />
      </Suspense>
    </section>
  );
}
