"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "motion/react";
import { ArrowLeft, ArrowRight, X } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y } from "swiper/modules";
import type { Swiper as SwiperInstance } from "swiper";
import { placeholderScreenshots, type Project } from "@/data/projects";
import { ProjectScreenshot } from "./project-screenshot";
import "./projects.css";

export default function ProjectGallery({ project, onClose }: { project: Project; onClose: () => void }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const slider = useRef<SwiperInstance | null>(null);
  const [active, setActive] = useState(0);
  const reducedMotion = useReducedMotion();
  const images = project.screenshots?.length ? project.screenshots : placeholderScreenshots;

  useEffect(() => {
    const element = dialog.current!;
    const overflow = document.body.style.overflow;
    element.showModal();
    document.body.style.overflow = "hidden";
    return () => { element.close(); document.body.style.overflow = overflow; };
  }, []);

  function goTo(index: number) { slider.current?.slideTo(index, reducedMotion ? 0 : 250); }

  return (
    <dialog ref={dialog} className="projects-dialog" aria-labelledby="project-gallery-title" onClose={onClose}
      onKeyDown={(event) => {
        if (event.key === "Tab") {
          const buttons = event.currentTarget.querySelectorAll<HTMLButtonElement>("button:not([disabled])");
          const first = buttons[0];
          const last = buttons[buttons.length - 1];
          if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
          else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
          return;
        }
        const destination = { ArrowLeft: Math.max(0, active - 1), ArrowRight: Math.min(images.length - 1, active + 1), Home: 0, End: images.length - 1 }[event.key];
        if (destination !== undefined) { event.preventDefault(); goTo(destination); }
      }}>
      <header className="projects-titlebar">
        <span className="projects-lights" aria-hidden="true"><i /><i /><i /></span>
        <h4 id="project-gallery-title" className="type-label min-w-0 flex-1 uppercase">Preview_gallery / {project.title}</h4>
        <button type="button" className="projects-iconButton" aria-label="Close project gallery" onClick={() => dialog.current?.close()}><X size={20} aria-hidden="true" /></button>
      </header>
      <div className="flex flex-wrap justify-between gap-2 border-b border-(--line-muted) px-4 py-3 text-sm" aria-live="polite" aria-atomic="true">
        <span>Slide {String(active + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}</span>
        <span>{images[active].title}</span>
      </div>
      <div className="projects-galleryStage">
        <Swiper modules={[A11y]} slidesPerView={1} spaceBetween={24} speed={reducedMotion ? 0 : 250}
          onSwiper={(instance) => { slider.current = instance; }} onSlideChange={(instance) => setActive(instance.activeIndex)}>
          {images.map((image, index) => <SwiperSlide key={image.src ?? index} inert={index !== active} aria-hidden={index !== active}>
            {Math.abs(index - active) <= 1 && <ProjectScreenshot image={image} project={project.title} gallery />}
          </SwiperSlide>)}
        </Swiper>
      </div>
      <div className="projects-galleryControls">
        <button type="button" className="projects-iconButton" aria-label="Previous screenshot" aria-disabled={active === 0} onClick={() => goTo(Math.max(0, active - 1))}><ArrowLeft size={20} aria-hidden="true" /></button>
        <nav aria-label="Choose a screenshot" className="flex min-w-0 flex-1 flex-wrap justify-center gap-2">
          {images.map((image, index) => <button key={image.src ?? index} type="button" className="projects-projectName" aria-current={index === active ? "true" : undefined} onClick={() => goTo(index)}><span aria-hidden="true">{String(index + 1).padStart(2, "0")}.</span> {image.title}</button>)}
        </nav>
        <button type="button" className="projects-iconButton" aria-label="Next screenshot" aria-disabled={active === images.length - 1} onClick={() => goTo(Math.min(images.length - 1, active + 1))}><ArrowRight size={20} aria-hidden="true" /></button>
      </div>
      <footer className="flex flex-wrap items-center justify-between gap-3 border-t-2 border-black px-4 py-3">
        <p className="text-xs text-(--text-muted)">{project.screenshots?.length ? "Use arrow keys to browse · Escape to close" : "Placeholders only · Screenshots not supplied yet"}</p>
        <button type="button" className="projects-button" onClick={() => dialog.current?.close()}>Close gallery</button>
      </footer>
    </dialog>
  );
}
