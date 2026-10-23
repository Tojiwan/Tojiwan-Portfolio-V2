"use client";

import dynamic from "next/dynamic";
import { useRef, useState } from "react";
import { useReducedMotion } from "motion/react";
import { ArrowLeft, ArrowRight, ArrowUpRight, Check, Images } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y } from "swiper/modules";
import type { Swiper as SwiperInstance } from "swiper";
import { placeholderScreenshots, type Project } from "@/data/projects";
import { DemoPassword } from "@/components/ui/demo-password";
import { TechBadge } from "@/components/ui/tech-badge";
import { ProjectScreenshot } from "./project-screenshot";
import "./projects.css";
import "swiper/css";

const ProjectGallery = dynamic(() => import("./project-gallery"));

export function ProjectsCarousel({ projects }: { projects: Project[] }) {
  const slider = useRef<SwiperInstance | null>(null);
  const opener = useRef<HTMLButtonElement | null>(null);
  const [active, setActive] = useState(0);
  const [gallery, setGallery] = useState<Project | null>(null);
  const reducedMotion = useReducedMotion();

  function goTo(index: number) {
    slider.current?.slideTo(index, reducedMotion ? 0 : 250);
  }

  return (
    <div className="projects-carousel mt-6 min-w-0">
      <nav aria-label="Choose a project" className="projects-projectNames">
        {projects.map((project, index) => (
          <button key={project.slug} type="button" aria-current={index === active ? "true" : undefined}
            onClick={() => goTo(index)} className="projects-projectName">
            <span className="text-(--text-muted)">{String(index + 1).padStart(2, "0")}</span> {project.title}
          </button>
        ))}
      </nav>

      <div role="region" aria-roledescription="carousel" aria-label="Project terminals" tabIndex={0}
        onKeyDown={(event) => {
          if (event.target !== event.currentTarget) return;
          const destination = { ArrowLeft: Math.max(0, active - 1), ArrowRight: Math.min(projects.length - 1, active + 1), Home: 0, End: projects.length - 1 }[event.key];
          if (destination !== undefined) { event.preventDefault(); goTo(destination); }
        }}>
        <Swiper modules={[A11y]} slidesPerView={1} spaceBetween={24} speed={reducedMotion ? 0 : 250}
          autoHeight a11y={{ enabled: true, slideLabelMessage: "Project {{index}} of {{slidesLength}}" }}
          onSwiper={(instance) => { slider.current = instance; }}
          onSlideChange={(instance) => setActive(instance.activeIndex)} className="projects-projectSwiper">
          {projects.map((project, index) => (
            <SwiperSlide key={project.slug} inert={index !== active} aria-hidden={index !== active}>
              <article className="projects-terminal" aria-labelledby={`project-${project.slug}`}>
                <header className="projects-titlebar">
                  <span className="projects-lights" aria-hidden="true"><i /><i /><i /></span>
                  <span className="type-label min-w-0 truncate uppercase">{project.file}</span>
                  <span className="projects-status">{project.status}</span>
                </header>
                <div className="projects-projectBody">
                  <div className="projects-summary">
                    <p className="type-label w-fit border border-(--accent-strong) px-2 py-1 text-(--accent-strong) uppercase">{project.category}</p>
                    <h3 id={`project-${project.slug}`} className="projects-projectTitle">{project.title}</h3>
                    <p className="type-body mt-4">{project.description}</p>
                    <dl className="projects-focus">
                      <dt className="type-label text-(--text-muted) uppercase">Focus</dt>
                      <dd className="mt-2 text-sm leading-6 font-bold">{project.focus}</dd>
                    </dl>
                  </div>
                  <div className="projects-preview">
                    <div className="projects-previewFrame">
                      <div className="flex flex-wrap justify-between gap-2 border-b-2 border-black bg-(--panel) px-3 py-2 type-label uppercase">
                        <span>Project preview</span><span className="text-(--text-muted)">{project.screenshots?.length ? "01 / captures" : "Awaiting captures"}</span>
                      </div>
                      <ProjectScreenshot key={project.screenshots?.[0]?.src ?? project.slug} image={project.screenshots?.[0] ?? placeholderScreenshots[0]} project={project.title} />
                    </div>
                    <div className="mt-8 border-t border-(--line-muted) pt-4">
                      <h4 className="type-label uppercase">Key deliverables</h4>
                      <ul className="mt-3 space-y-2" aria-label={`${project.title} key deliverables`}>
                        {project.deliverables.slice(0, 3).map((deliverable) => (
                          <li key={deliverable} className="flex items-start gap-2 text-sm leading-6 text-(--text-muted)">
                            <Check size={16} className="mt-1 shrink-0 text-(--accent-strong)" aria-hidden="true" />
                            <span>{deliverable}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="projects-details">
                    <div className="projects-actions flex flex-wrap gap-4">
                      {project.demoUrl && <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="projects-button projects-primary" aria-label={`View ${project.title} demo (opens in a new tab)`}>View demo <ArrowUpRight size={16} aria-hidden="true" /></a>}
                      <button type="button" className="projects-button" aria-haspopup="dialog" onClick={(event) => { opener.current = event.currentTarget; setGallery(project); }}><Images size={16} aria-hidden="true" />Gallery</button>
                    </div>
                    {project.demoPassword && (
                      <div className="projects-access">
                        <p className="flex flex-wrap justify-between gap-2 border-b border-(--line-muted) pb-3 text-xs leading-5"><span>Shopify development store</span><span className="font-bold">Password required</span></p>
                        <DemoPassword password={project.demoPassword} />
                      </div>
                    )}
                    {project.designUrl && <a href={project.designUrl} target="_blank" rel="noopener noreferrer" className="projects-designLink mt-4 inline-flex min-h-11 items-center gap-2 text-sm underline underline-offset-4">Design source <ArrowUpRight size={14} aria-hidden="true" /><span className="sr-only"> (opens in a new tab)</span></a>}
                    <div className="mt-6 border-t border-(--line-muted) pt-4">
                      <p className="type-label mb-3 text-(--text-muted) uppercase">Technologies used</p>
                      <ul className="flex flex-wrap gap-2" aria-label={`${project.title} technologies`}>{project.stack.map((tech) => <li key={tech}><TechBadge label={tech} /></li>)}</ul>
                    </div>
                  </div>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="projects-navigation">
        <button type="button" className="projects-button" aria-label="Previous project" aria-disabled={active === 0} onClick={() => goTo(Math.max(0, active - 1))}><ArrowLeft size={18} aria-hidden="true" /><span className="hidden sm:inline">Previous</span></button>
        <p aria-live="polite" aria-atomic="true" className="type-label text-center"><span className="block text-(--text-muted)">Project {String(active + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}</span><span className="mt-1 block">{projects[active].title}</span></p>
        <button type="button" className="projects-button" aria-label="Next project" aria-disabled={active === projects.length - 1} onClick={() => goTo(Math.min(projects.length - 1, active + 1))}><span className="hidden sm:inline">Next</span><ArrowRight size={18} aria-hidden="true" /></button>
      </div>
      {gallery && <ProjectGallery project={gallery} onClose={() => { setGallery(null); opener.current?.focus({ preventScroll: true }); }} />}
    </div>
  );
}
