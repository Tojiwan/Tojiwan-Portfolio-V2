"use client";

import Image              from "next/image";
import { useState }       from "react";
import { FileText }       from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { TypedHeading } from "@/components/ui/typed-heading";
import { Reveal }         from "@/components/ui/reveal";
import { skillGroups }    from "@/data/skills";

const skillIcons: Record<string, string> = {
  HTML                    : "html5",
  CSS                     : "css",
  JavaScript              : "javascript",
  TypeScript              : "typescript",
  "Tailwind CSS"          : "tailwind-css",
  Bootstrap               : "bootstrap",
  React                   : "react-light",
  "Next.js"               : "nextjs",
  "Nuxt.js"               : "nuxt",
  "Motion (Framer Motion)": "motion",
  "React Bits"            : "react-bits",
  PHP                     : "php-mono",
  Laravel                 : "laravel",
  MySQL                   : "mysql-wordmark",
  Supabase                : "supabase",
  "Shopify Liquid"        : "shopify",
  n8n                     : "n8n",
  Git                     : "git",
  Postman                 : "postman",
  "Laravel Herd"          : "laravel-herd",
  Docker                  : "docker",
  Figma                   : "figma",
  Canva                   : "canva",
  ChatGPT                 : "openai-chatgpt",
  OpenCode                : "opencode",
};

export function TechStackSection() {
  const [selected, setSelected] = useState(0);
  const group = skillGroups[selected];

  return (
    <section id="stack" aria-labelledby="stack-heading" tabIndex={-1} className="scroll-mt-20 focus:outline-none">
      <div id="stack-heading">
        <SectionHeading
          kicker="Toolbox"
          title="Tools I Work With"
          description="The tools I use to build websites, customize storefronts, and connect automated workflows."
        />
      </div>
      <Reveal className="mt-6">
        <div className="border-2 border-black bg-white shadow-[6px_6px_0_var(--shadow-color)]">
          <div className="flex items-center gap-2 border-b-2 border-black bg-(--panel) px-3 py-2">
            <span className="flex shrink-0 gap-1.5" aria-hidden="true">
              <span className="h-2.5 w-2.5 rounded-full border border-black bg-[#ff5f57]" />
              <span className="h-2.5 w-2.5 rounded-full border border-black bg-[#febc2e]" />
              <span className="h-2.5 w-2.5 rounded-full border border-black bg-[#28c840]" />
            </span>
            <span className="mx-auto min-w-0 truncate font-mono text-[11px] font-bold tracking-wider uppercase">Toolbox.exe · {group.id}.md</span>
            <span className="w-10 shrink-0" aria-hidden="true" />
          </div>
          <div className="break-all border-b-2 border-black px-3 py-1.5 font-mono text-xs">
            <span className="font-bold">Path</span>{" "}
            <span className="text-(--text-muted)">C:/portfolio/toolbox/{group.id}.md</span>
          </div>
          <div className="grid md:grid-cols-[240px_minmax(0,1fr)]">
          <div className="border-b-2 border-black p-3 md:border-r-2 md:border-b-0">
            <p className="font-mono text-[11px] font-bold tracking-wider uppercase">Directories</p>
          <div
            role="tablist"
            aria-label="Tool categories"
            aria-orientation="vertical"
            className="mt-2 flex flex-col gap-2"
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
                className={`flex min-h-11 items-start gap-2 border-2 px-2 py-3 text-left font-mono text-xs font-bold ${selected === i ? "border-black bg-white text-(--accent-strong) shadow-[3px_3px_0_var(--shadow-color)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none" : "border-transparent hover:border-black active:border-black"}`}
              >
                <FileText size={14} aria-hidden="true" className="shrink-0" />
                {g.title}
              </button>
            ))}
          </div>
          </div>
          {skillGroups.map((g, i) => (
            <div key={g.id} role="tabpanel" id={`tool-panel-${g.id}`} aria-labelledby={`tool-tab-${g.id}`} tabIndex={0} hidden={selected !== i} className="min-w-0 p-5 sm:p-6 md:min-h-[360px]">
              <p className="font-mono text-[11px] font-bold tracking-wider text-(--text-muted) uppercase">{"// Active file: "}{g.id}.md</p>
              <h3 className="type-title mt-3 font-display text-black"><TypedHeading text={g.title} /></h3>
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
                          className={`h-12 w-12 object-contain motion-safe:transition-transform motion-safe:group-hover:-translate-y-1 ${s === "React Bits" ? "invert dark:invert-0" : s === "Next.js" || s === "ChatGPT" || s === "OpenCode" ? "dark:invert" : s === "Motion (Framer Motion)" ? "brightness-50 dark:brightness-100" : s === "React" || s === "MySQL" ? "dark:brightness-150" : ""}`}
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
        </div>
      </Reveal>
    </section>
  );
}
