"use client";

import { useState } from "react";
import {
  FileText,
  GraduationCap,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { AsciiPortrait } from "@/components/sections/ascii-portrait";
import { cn } from "@/lib/utils";

type Tab = "bio" | "education";

export function AboutSection() {
  const [tab, setTab] = useState<Tab>("bio");

  return (
    <section id="about" aria-labelledby="about-heading" tabIndex={-1} className="scroll-mt-20 focus:outline-none">
      <div id="about-heading">
        <SectionHeading kicker="Developer overview" title="About Me" />
      </div>
      <Reveal className="mt-6">
        <div className="brutal-panel border-2 border-black bg-white">
          {/* Title bar */}
          <div className="flex items-center gap-2 border-b-2 border-black bg-(--panel) px-3 py-2">
            <span className="flex gap-1.5" aria-hidden="true">
              <span className="h-2.5 w-2.5 rounded-full border border-black bg-[#ff5f57]" />
              <span className="h-2.5 w-2.5 rounded-full border border-black bg-[#febc2e]" />
              <span className="h-2.5 w-2.5 rounded-full border border-black bg-[#28c840]" />
            </span>
            <span className="type-label mx-auto uppercase">
              About_me.exe · {tab}.md
            </span>
            <span className="w-10" aria-hidden="true" />
          </div>

          {/* Body */}
          <div className="grid grid-cols-[minmax(0,1fr)] lg:grid-cols-[180px_minmax(0,1fr)_360px]">
            {/* Tabs */}
            <div
              className="border-b-2 border-black p-3 lg:border-r-2 lg:border-b-0"
            >
              <p className="type-label uppercase">
                Files
              </p>
              <div
                role="tablist"
                aria-label="About files"
                className="mt-2 flex flex-wrap gap-2 lg:flex-col"
                onKeyDown={(event) => {
                  if (!["ArrowRight", "ArrowLeft", "ArrowDown", "ArrowUp", "Home", "End"].includes(event.key)) return;
                  event.preventDefault();
                  const next = event.key === "Home" ? "bio" : event.key === "End" ? "education" : tab === "bio" ? "education" : "bio";
                  setTab(next);
                  document.getElementById(`about-tab-${next}`)?.focus();
                }}
              >
                <button
                  type="button"
                  role="tab"
                  id="about-tab-bio"
                  aria-controls="about-panel-bio"
                  tabIndex={tab === "bio" ? 0 : -1}
                  aria-selected={tab === "bio"}
                  onClick={() => setTab("bio")}
                  className={cn(
                    "flex min-h-11 flex-1 items-center gap-2 px-2 py-2 font-mono text-xs font-bold lg:flex-none",
                    tab === "bio"
                      ? "border-2 border-black bg-white text-(--accent-strong) shadow-[3px_3px_0_var(--shadow-color)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
                      : "border-2 border-transparent hover:border-black active:border-black focus-visible:outline-2 focus-visible:outline-black"
                  )}
                >
                  <FileText size={14} aria-hidden="true" />
                  bio.md
                </button>
                <button
                  type="button"
                  role="tab"
                  id="about-tab-education"
                  aria-controls="about-panel-education"
                  tabIndex={tab === "education" ? 0 : -1}
                  aria-selected={tab === "education"}
                  onClick={() => setTab("education")}
                  className={cn(
                    "flex min-h-11 flex-1 items-center gap-2 px-2 py-2 font-mono text-xs font-bold lg:flex-none",
                    tab === "education"
                      ? "border-2 border-black bg-white text-(--accent-strong) shadow-[3px_3px_0_var(--shadow-color)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
                      : "border-2 border-transparent hover:border-black active:border-black focus-visible:outline-2 focus-visible:outline-black"
                  )}
                >
                  <GraduationCap size={14} aria-hidden="true" />
                  education.md
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="border-b-2 border-black p-5 sm:p-6 lg:border-b-0">
              {tab === "bio" ? (
                <div role="tabpanel" id="about-panel-bio" aria-labelledby="about-tab-bio" tabIndex={0}>
                  <h3 className="type-title font-display text-black">
                    A little about me.
                    <span
                      aria-hidden="true"
                      className="terminal-caret ml-2 inline-block h-5 w-0.5 translate-y-1 bg-(--accent-soft)"
                    />
                  </h3>
                  <div className="type-body mt-3 space-y-4 font-mono text-(--text)">
                    <p>
                      Hi! I&apos;m Jake Andrei Peralta, a web developer based in
                      Pampanga, Philippines.
                    </p>
                    <p>
                      I build websites, work on Shopify storefronts, and connect
                      tools through automation. I like figuring out how things
                      work and turning what I learn into something useful.
                    </p>
                    <p>
                      I also use AI tools like ChatGPT and OpenCode to explore
                      ideas, work through problems, and keep learning as I build.
                    </p>
                    <p>
                      Still learning, still building, and always looking for ways
                      to improve.
                    </p>
                  </div>
                  <dl className="mt-5 grid grid-cols-[max-content_minmax(0,1fr)] gap-x-3 gap-y-1 font-mono text-sm sm:gap-x-6">
                    <dt className="type-label text-(--text-muted)">languages</dt>
                    <dd className="font-bold">tagalog, kapampangan, english</dd>
                    <dt className="type-label text-(--text-muted)">base</dt>
                    <dd className="font-bold">pampanga, ph</dd>
                    <dt className="type-label text-(--text-muted)">timezone</dt>
                    <dd className="font-bold">UTC+8 (Philippine Time)</dd>
                    <dt className="type-label text-(--text-muted)">status</dt>
                    <dd className="font-bold text-(--accent-strong)">
                      <span aria-hidden="true" className="mr-1 inline-block h-2 w-2 border border-black bg-(--accent-strong)" />
                      active
                    </dd>
                  </dl>
                </div>
              ) : (
                <div role="tabpanel" id="about-panel-education" aria-labelledby="about-tab-education" tabIndex={0}>
                  <h3 className="type-title font-display text-black">
                    Education.
                    <span
                      aria-hidden="true"
                      className="terminal-caret ml-2 inline-block h-5 w-0.5 translate-y-1 bg-(--accent-soft)"
                    />
                  </h3>
                  <ul className="mt-3 space-y-3">
                    <li className="border-2 border-black bg-(--surface-muted) p-3 shadow-[3px_3px_0_var(--shadow-color)]">
                      <div className="flex items-start justify-between gap-2">
                        <p className="text-sm font-bold">
                          Bachelor of Science in Information Technology
                        </p>
                        <span className="type-label shrink-0 text-black">
                          2021 – 2025
                        </span>
                      </div>
                      <p className="mt-1 font-mono text-xs text-(--text-muted)">
                        Don Honorio Ventura State University, Pampanga, PH
                      </p>
                    </li>
                    <li className="border-2 border-black bg-(--surface-muted) p-3 shadow-[3px_3px_0_var(--shadow-color)]">
                      <div className="flex items-start justify-between gap-2">
                        <p className="text-sm font-bold">
                          TVL-ICT · Grades 11 & 12
                        </p>
                        <span className="type-label shrink-0 text-black">
                          2019 – 2021
                        </span>
                      </div>
                      <p className="mt-1 font-mono text-xs text-(--text-muted)">
                        Mary the Queen College
                      </p>
                    </li>
                  </ul>
                </div>
              )}
            </div>

            {/* Avatar preview */}
            <div className="p-4 sm:p-5">
              <div className="border-2 border-black bg-[#0b0f14] text-[#e6edf3] shadow-[4px_4px_0_var(--shadow-color)]">
                <div className="border-b border-[#2a3340] px-3 py-2">
                  <span className="type-label block text-center uppercase">
                    Avatar_preview.img
                  </span>
                </div>
                <AsciiPortrait
                  variant={tab === "education" ? "cap" : "jp"}
                  label={tab === "education" ? "ASCII graduation cap" : "ASCII art JP monogram"}
                  className="m-3"
                />
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
