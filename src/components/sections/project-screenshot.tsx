"use client";

import Image                                    from "next/image";
import { ImageIcon }                            from "lucide-react";
import { useState }                             from "react";
import type { ProjectScreenshot as Screenshot } from "@/data/projects";
import "./projects.css";

export function ProjectScreenshot({ image, project, gallery = false }: {
  image   : Screenshot;
  project : string;
  gallery?: boolean;
}) {
  const [failed, setFailed] = useState(false);

  return (
    <div className={gallery ? "projects-galleryImage" : "projects-coverImage"}>
      {image.src && !failed ? (
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          sizes={gallery ? "(min-width: 1024px) 900px, 90vw" : "(min-width: 1024px) 480px, 90vw"}
          className="h-full w-full object-contain"
          onError={() => setFailed(true)}
        />
      ) : (
        <div className="projects-placeholder">
          <ImageIcon size={32} strokeWidth={1.5} aria-hidden="true" />
          <p className="type-label uppercase">{failed ? "Preview unavailable" : "Screenshot pending"}</p>
          <p className="font-display text-xl font-bold">{project}</p>
          <p className="max-w-64 text-sm leading-6 text-(--text-muted)">
            {failed ? "This image could not be loaded." : "Layout placeholder — actual project screenshots will be added here."}
          </p>
        </div>
      )}
    </div>
  );
}
