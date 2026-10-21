"use client";

import Image from "next/image";
import { useState } from "react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { skillGroups } from "@/data/skills";

const skillIcons: Record<string, string> = {
  HTML: "html5",
  CSS: "css",
  JavaScript: "javascript",
  TypeScript: "typescript",
  "Tailwind CSS": "tailwind-css",
  Bootstrap: "bootstrap",
  React: "react-light",
  "Next.js": "nextjs",
  "Nuxt.js": "nuxt",
  "Motion (Framer Motion)": "motion",
  PHP: "php-mono",
  Laravel: "laravel",
  MySQL: "mysql-wordmark",
  Supabase: "supabase",
  "Shopify Liquid": "shopify",
  n8n: "n8n",
  Zapier: "zapier",
  Git: "git",
  Postman: "postman",
  "Laravel Herd": "laravel-herd",
  Docker: "docker",
  Figma: "figma",
  Canva: "canva",
  ChatGPT: "openai-chatgpt",
  OpenCode: "opencode",
};

export function TechStackSection() {
  const [selected, setSelected] = useState(0);

  return (
    <section id="stack" aria-labelledby="stack-heading" tabIndex={-1} className="scroll-mt-20 focus:outline-none">
      <div id="stack-heading">
        <SectionHeading
          kicker="Toolbox"
          title="Tools I Work With"
        />
      </div>
      <Reveal className="mt-6">
        <div className="brutal-panel border-2 border-black bg-white p-5 sm:p-6">
          <div
            role="tablist"
            aria-label="Tool categories"
            className="flex flex-wrap gap-2"
            onKeyDown={(event) => {
              if (!["ArrowRight", "ArrowLeft", "ArrowDown", "ArrowUp", "Home", "End"].includes(event.key)) return;
              event.preventDefault();
              const next = event.key === "Home" ? 0 : event.key === "End" ? skillGroups.length - 1 : (selected + (event.key === "ArrowRight" || event.key === "ArrowDown" ? 1 : -1) + skillGroups.length) % skillGroups.length;
              setSelected(next);
              document.getElementById(`tool-tab-${skillGroups[next].id}`)?.focus();
            }}
          >
            {skillGroups.map((g, i) => (
              <button
                key={g.id}
                type="button"
                role="tab"
                id={`tool-tab-${g.id}`}
                aria-controls={`tool-panel-${g.id}`}
                aria-selected={selected === i}
                tabIndex={selected === i ? 0 : -1}
                onClick={() => setSelected(i)}
                className={`inline-flex min-h-11 items-center border-2 px-2.5 py-2.5 text-left font-mono text-xs font-bold ${selected === i ? "border-black bg-white text-(--accent-strong) shadow-[3px_3px_0_var(--shadow-color)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none" : "border-transparent hover:border-black active:border-black"}`}
              >
                {g.title}
              </button>
            ))}
          </div>
          {skillGroups.map((g, i) => (
            <div key={g.id} role="tabpanel" id={`tool-panel-${g.id}`} aria-labelledby={`tool-tab-${g.id}`} tabIndex={0} hidden={selected !== i} className="mt-6">
              <h3 className="type-title font-display text-black">{g.title}</h3>
              <p className="type-body mt-2 font-mono text-(--text)">{g.description}</p>
              <ul className="mt-6 grid grid-cols-3 items-start gap-x-4 gap-y-6 sm:grid-cols-4 lg:grid-cols-6">
                {g.skills.map((s) => {
                  const icon = skillIcons[s];
                  return (
                    <li
                      key={s}
                      className="group flex min-w-0 flex-col items-center gap-2 text-center font-mono text-xs font-bold"
                    >
                      {icon ? (
                        <Image
                          src={`/Icons/${icon}.svg`}
                          alt=""
                          width={48}
                          height={48}
                          className={`h-12 w-12 object-contain motion-safe:transition-transform motion-safe:group-hover:-translate-y-1 ${s === "Next.js" || s === "ChatGPT" || s === "OpenCode" ? "dark:invert" : s === "Motion (Framer Motion)" ? "brightness-50 dark:brightness-100" : s === "React" || s === "MySQL" ? "dark:brightness-150" : ""}`}
                        />
                      ) : (
                        // Data fallback: a skill added without an icon mapping
                        // still gets a stable square slot instead of a 404 image.
                        <span
                          aria-hidden="true"
                          className="grid h-12 w-12 place-items-center border-2 border-black bg-(--panel) px-0.5 overflow-hidden text-[9px] leading-tight uppercase"
                        >
                          {s.slice(0, 8)}
                        </span>
                      )}
                      <span>{s}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
