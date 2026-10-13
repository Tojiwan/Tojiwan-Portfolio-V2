"use client";

import { useState } from "react";
import {
  FileText,
  GraduationCap,
  Mail,
  GitBranch,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { RollingLink } from "@/components/ui/rolling-link";
import { AsciiPortrait } from "@/components/sections/ascii-portrait";
import { cn } from "@/lib/utils";

type Tab = "bio" | "education";

function LinkedinIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.119 20.452H3.554V9h3.565v11.452z" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

export function AboutSection() {
  const [tab, setTab] = useState<Tab>("bio");

  return (
    <section id="about" aria-labelledby="about-heading" className="scroll-mt-20">
      <div id="about-heading">
        <SectionHeading kicker="Developer overview" title="About Me" />
      </div>
      <Reveal className="mt-6">
        <div className="border-2 border-black bg-white shadow-[6px_6px_0_#000]">
          {/* Title bar */}
          <div className="flex items-center gap-2 border-b-2 border-black bg-[#dadbdd] px-3 py-2">
            <span className="flex gap-1.5" aria-hidden="true">
              <span className="h-2.5 w-2.5 rounded-full border border-black bg-[#ff5f57]" />
              <span className="h-2.5 w-2.5 rounded-full border border-black bg-[#febc2e]" />
              <span className="h-2.5 w-2.5 rounded-full border border-black bg-[#28c840]" />
            </span>
            <span className="mx-auto font-mono text-[11px] font-bold tracking-[0.15em] uppercase">
              About_me.exe · Bio.md
            </span>
            <span className="w-10" aria-hidden="true" />
          </div>

          {/* Path bar */}
          <div className="border-b-2 border-black px-3 py-1.5 font-mono text-xs">
            <span className="font-bold">Path</span>{" "}
            <span className="text-[#3e4850]">C:/portfolio/about_me/bio.md</span>
          </div>

          {/* Body */}
          <div className="grid lg:grid-cols-[180px_1fr_360px]">
            {/* Sidebar */}
            <div
              className="border-b-2 border-black p-3 lg:border-r-2 lg:border-b-0"
              role="tablist"
              aria-label="About files"
            >
              <p className="font-mono text-[11px] font-bold tracking-[0.12em] uppercase">
                Directories
              </p>
              <div className="mt-2 flex gap-2 lg:flex-col">
                <button
                  type="button"
                  role="tab"
                  aria-selected={tab === "bio"}
                  onClick={() => setTab("bio")}
                  className={cn(
                    "flex flex-1 items-center gap-2 px-2 py-2 font-mono text-xs font-bold lg:flex-none",
                    tab === "bio"
                      ? "border-2 border-black bg-white text-[#0051d5] shadow-[3px_3px_0_#000]"
                      : "border-2 border-transparent hover:border-black focus-visible:outline-2 focus-visible:outline-black"
                  )}
                >
                  <FileText size={14} aria-hidden="true" />
                  bio.md
                </button>
                <button
                  type="button"
                  role="tab"
                  aria-selected={tab === "education"}
                  onClick={() => setTab("education")}
                  className={cn(
                    "flex flex-1 items-center gap-2 px-2 py-2 font-mono text-xs font-bold lg:flex-none",
                    tab === "education"
                      ? "border-2 border-black bg-white text-[#0051d5] shadow-[3px_3px_0_#000]"
                      : "border-2 border-transparent hover:border-black focus-visible:outline-2 focus-visible:outline-black"
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
                <div role="tabpanel" aria-label="Biography">
                  <p className="font-mono text-[11px] font-bold tracking-[0.12em] text-[#3e4850] uppercase">
                    {"// Active file: bio.md"}
                  </p>
                  <h3 className="mt-2 font-display text-2xl font-bold text-black">
                    Web developer for the modern web.
                    <span
                      aria-hidden="true"
                      className="ml-2 inline-block h-5 w-0.5 translate-y-1 animate-pulse bg-[#38bdf8]"
                    />
                  </h3>
                  <div className="mt-3 space-y-3 font-mono text-[13px] leading-6 text-[#1b1b1b]">
                    <p>
                      I&apos;m a web developer focused on building responsive,
                      user-friendly digital experiences across web development,
                      e-commerce, and automation.
                    </p>
                    <p>
                      I&apos;ve worked with technologies including Nuxt.js,
                      Laravel, Tailwind CSS, Shopify Liquid, JavaScript,
                      TypeScript, PHP, and automation platforms such as n8n and
                      Zapier.
                    </p>
                    <p>
                      I enjoy learning new technologies and applying them to
                      practical projects.
                    </p>
                  </div>
                  <dl className="mt-5 space-y-1 font-mono text-[13px]">
                    <div className="flex gap-6">
                      <dt className="w-20 shrink-0 text-[#3e4850]">base</dt>
                      <dd className="font-bold">pampanga, ph</dd>
                    </div>
                    <div className="flex gap-6">
                      <dt className="w-20 shrink-0 text-[#3e4850]">timezone</dt>
                      <dd className="font-bold">utc+8 (pst)</dd>
                    </div>
                    <div className="flex gap-6">
                      <dt className="w-20 shrink-0 text-[#3e4850]">status</dt>
                      <dd className="font-bold text-[#0051d5]">
                        <span aria-hidden="true" className="mr-1 inline-block h-2 w-2 rounded-full bg-[#0051d5]" />
                        active
                      </dd>
                    </div>
                  </dl>
                </div>
              ) : (
                <div role="tabpanel" aria-label="Education">
                  <p className="font-mono text-[11px] font-bold tracking-[0.12em] text-[#3e4850] uppercase">
                    {"// Active file: education.md"}
                  </p>
                  <h3 className="mt-2 font-display text-2xl font-bold text-black">
                    Education.
                    <span
                      aria-hidden="true"
                      className="ml-2 inline-block h-5 w-0.5 translate-y-1 animate-pulse bg-[#38bdf8]"
                    />
                  </h3>
                  <ul className="mt-3 space-y-3">
                    <li className="border-2 border-black bg-[#f9f9f9] p-3 shadow-[3px_3px_0_#000]">
                      <div className="flex items-start justify-between gap-2">
                        <p className="font-mono text-[13px] font-bold">
                          Bachelor of Science in Information Technology
                        </p>
                        <span className="shrink-0 font-mono text-[11px] font-bold tracking-wider text-black uppercase">
                          2021 — 2025
                        </span>
                      </div>
                      <p className="mt-1 font-mono text-xs text-[#3e4850]">
                        Don Honorio Ventura State University, Pampanga, PH
                      </p>
                    </li>
                    <li className="border-2 border-black bg-[#f9f9f9] p-3 shadow-[3px_3px_0_#000]">
                      <div className="flex items-start justify-between gap-2">
                        <p className="font-mono text-[13px] font-bold">
                          TVL-ICT · Grades 11 & 12
                        </p>
                        <span className="shrink-0 font-mono text-[11px] font-bold tracking-wider text-black uppercase">
                          2019 - 2021
                        </span>
                      </div>
                      <p className="mt-1 font-mono text-xs text-[#3e4850]">
                        Mary the Queen College
                      </p>
                    </li>
                  </ul>
                </div>
              )}
            </div>

            {/* Avatar preview */}
            <div className="p-4 sm:p-5">
              <div className="border-2 border-black bg-[#0b0f14] text-[#e6edf3] shadow-[4px_4px_0_#000]">
                <div className="flex items-center gap-2 border-b border-[#2a3340] px-3 py-2">
                  <span className="flex gap-1.5" aria-hidden="true">
                    <span className="h-2.5 w-2.5 rounded-full border border-black bg-[#ff5f57]" />
                    <span className="h-2.5 w-2.5 rounded-full border border-black bg-[#febc2e]" />
                    <span className="h-2.5 w-2.5 rounded-full border border-black bg-[#28c840]" />
                  </span>
                  <span className="mx-auto font-mono text-[11px] font-bold tracking-[0.12em] uppercase">
                    Avatar_preview.img
                  </span>
                  <span className="w-10" aria-hidden="true" />
                </div>
                <div className="relative">
                  <AsciiPortrait variant="jp" label="ASCII art JP monogram" className="m-3" />
                </div>
                <div className="border-t border-[#2a3340] p-3">
                  <p className="font-mono text-[11px] font-bold tracking-[0.12em] text-[#38bdf8] uppercase text-center">
                    {"// My_Contact_List"}
                  </p>
                  <div className="mt-2 grid grid-cols-3 gap-2">
                    <RollingLink
                      href="mailto:andreiperalta13@gmail.com"
                      className="flex items-center justify-center border border-[#2a3340] bg-[#11161d] px-1 py-2 font-mono text-[11px] font-bold hover:border-[#38bdf8] focus-visible:outline-2 focus-visible:outline-[#38bdf8]"
                    >
                      <span className="flex items-center gap-1">
                        <Mail size={12} aria-hidden="true" />
                        Email
                      </span>
                    </RollingLink>
                    <RollingLink
                      href="https://www.linkedin.com/in/jake-andrei-peralta-454154390"
                      ariaLabel="LinkedIn profile"
                      className="flex items-center justify-center border border-[#2a3340] bg-[#11161d] px-1 py-2 font-mono text-[11px] font-bold hover:border-[#38bdf8] focus-visible:outline-2 focus-visible:outline-[#38bdf8]"
                    >
                      <span className="flex items-center gap-1">
                        <LinkedinIcon />
                        LinkedIn
                      </span>
                    </RollingLink>
                    <RollingLink
                      href="https://github.com/Tojiwan"
                      ariaLabel="GitHub profile"
                      className="flex items-center justify-center border border-[#2a3340] bg-[#11161d] px-1 py-2 font-mono text-[11px] font-bold hover:border-[#38bdf8] focus-visible:outline-2 focus-visible:outline-[#38bdf8]"
                    >
                      <span className="flex items-center gap-1">
                        <GithubIcon />
                        Github
                      </span>
                    </RollingLink>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Status bar */}
          <div className="flex items-center justify-between border-t-2 border-black bg-[#dadbdd] px-3 py-1.5 font-mono text-[11px] font-bold">
            <span className="flex items-center gap-3">
              <span className="flex items-center gap-1">
                <GitBranch size={12} aria-hidden="true" />
                main
              </span>
              <span>UTF-8</span>
              <span>Markdown</span>
            </span>
            <span className="flex items-center gap-2 uppercase">
              UTC+8
              <span aria-hidden="true" className="h-2 w-2 rounded-full bg-[#0ea5e9]" />
              <span className="text-[#0051d5]">Active</span>
            </span>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
