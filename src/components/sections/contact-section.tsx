"use client";

import { useState } from "react";
import { Send, Share2, CodeXml, AtSign, Phone } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { TerminalWindow } from "@/components/ui/terminal-window";
import { RollingLink } from "@/components/ui/rolling-link";
import { Reveal } from "@/components/ui/reveal";

const channels = [
  {
    href: "www.linkedin.com/in/jake-andrei-peralta-454154390",
    icon: Share2,
    value: "linkedin.com/in/jake-andrei-peralta-454154390",
    label: "Linkedin",
  },
  {
    href: "https://github.com/Tojiwan",
    icon: CodeXml,
    value: "github.com/Tojiwan",
    label: "Github",
  },
  {
    href: "mailto:andreiperalta13@gmail.com",
    icon: AtSign,
    value: "andreiperalta13@gmail.com",
    label: "Email",
  },
  {
    href: "tel:+639763520042",
    icon: Phone,
    value: "+63 976 352 0042",
    label: "Phone",
  },
];

export function ContactSection() {
  const [state, setState] = useState<"idle" | "error">("idle");

  return (
    <section id="contact" aria-labelledby="contact-heading" className="scroll-mt-20">
      <div id="contact-heading">
        <SectionHeading
          kicker="Initiate communication"
          title="Contact"
          description="UI-only demo form. Wire to a real endpoint before calling it functional."
        />
      </div>
      <div className="mt-6 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <Reveal className="h-full min-w-0">
          <TerminalWindow file="transmit_console.exe" status="Port: 443 [TLS 1.3]" className="h-full min-w-0">
            <form
              aria-label="Contact form (demo, not wired)"
              onSubmit={(e) => {
                e.preventDefault();
                setState("error");
              }}
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="font-mono text-xs font-bold">
                    <span className="text-(--accent-strong)">$</span> input.name *
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    autoComplete="name"
                    placeholder="Elena Rostova"
                    className="mt-2 w-full min-w-0 border-2 border-black bg-white px-3 py-2.5 font-mono text-sm placeholder:text-(--text-muted) focus:shadow-[3px_3px_0_var(--accent)] focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="font-mono text-xs font-bold">
                    <span className="text-(--accent-strong)">$</span> input.email *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="elena@company.com"
                    className="mt-2 w-full min-w-0 border-2 border-black bg-white px-3 py-2.5 font-mono text-sm placeholder:text-(--text-muted) focus:shadow-[3px_3px_0_var(--accent)] focus:outline-none"
                  />
                </div>
              </div>
              <div className="mt-4">
                <label htmlFor="message" className="font-mono text-xs font-bold">
                  <span className="text-(--accent-strong)">$</span> input.payload *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={7}
                  placeholder="Tell me about your product vision, key timeline constraints, or engineering role..."
                  className="mt-2 w-full min-w-0 resize-none border-2 border-black bg-white px-3 py-2.5 font-mono text-sm placeholder:text-(--text-muted) focus:shadow-[3px_3px_0_var(--accent)] focus:outline-none"
                />
              </div>
              {state === "error" ? (
                <p role="alert" className="mt-4 border-2 border-black bg-[#ffdad6] px-3 py-2 font-mono text-xs font-bold text-[#1b1b1b] dark:bg-[#3a1113] dark:text-[#ffd9d7]">
                  {/* Demo only — connect a form service (e.g. Formspree/Resend) to send messages.  change this*/}
                </p>
              ) : null}
              <button
                type="submit"
                className="mt-5 inline-flex w-full items-center justify-center gap-2 border-2 border-black bg-[#000] px-4 py-4 font-mono text-sm font-bold tracking-wider text-[#fff] uppercase shadow-[4px_4px_0_#000000] transition-all active:translate-x-0.5 active:translate-y-0.5 active:shadow-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Transmit message
                <Send size={16} aria-hidden="true" />
              </button>
            </form>
          </TerminalWindow>
        </Reveal>
        <Reveal delay={0.1} className="h-full min-w-0">
          <TerminalWindow
            file="Contact_Info.exe"
            status="● Online"
            className="flex h-full min-w-0 flex-col"
            bodyClassName="flex flex-1 flex-col"
          >
            <p className="font-mono text-[11px] font-bold tracking-[0.12em] text-(--text-muted) uppercase">
              {"// My_Contact_List"}
            </p>
            <ul className="mt-3 flex flex-1 flex-col justify-between gap-3">
              {channels.map((c) => (
                <li key={c.label}>
                  <RollingLink
                    href={c.href}
                    className="block border-2 border-black bg-white px-3 py-2.5 shadow-[3px_3px_0_#000] transition-all hover:bg-(--surface-muted) active:translate-x-0.5 active:translate-y-0.5 active:shadow-none focus-visible:outline-2 focus-visible:outline-black"
                  >
                    <span className="flex w-full min-w-0 flex-col gap-1 sm:flex-row sm:items-center sm:justify-between sm:gap-2">
                      <span className="flex min-w-0 items-center gap-2 font-mono text-[13px] font-bold">
                        <c.icon size={15} aria-hidden="true" className="shrink-0 text-(--accent-strong)" />
                        <span className="truncate">{c.value}</span>
                      </span>
                      <span className="shrink-0 font-mono text-[11px] font-bold tracking-wider uppercase">
                        {c.label}
                      </span>
                    </span>
                  </RollingLink>
                </li>
              ))}
            </ul>
          </TerminalWindow>
        </Reveal>
      </div>
    </section>
  );
}
