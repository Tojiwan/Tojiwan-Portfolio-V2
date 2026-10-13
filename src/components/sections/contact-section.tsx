"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

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
      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <form
          aria-label="Contact form (demo, not wired)"
          className="border-2 border-black bg-white p-5 shadow-[4px_4px_0_#000]"
          onSubmit={(e) => {
            e.preventDefault();
            setState("error");
          }}
        >
          <div className="grid gap-3 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="font-mono text-xs font-bold uppercase">
                Name
              </label>
              <input
                id="name"
                name="name"
                required
                autoComplete="name"
                placeholder="Ada Lovelace"
                className="mt-1 w-full border-2 border-black bg-white px-3 py-2 font-mono text-sm placeholder:text-[#6b7280] focus:shadow-[3px_3px_0_#0ea5e9] focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="email" className="font-mono text-xs font-bold uppercase">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder="you@company.com"
                className="mt-1 w-full border-2 border-black bg-white px-3 py-2 font-mono text-sm placeholder:text-[#6b7280] focus:shadow-[3px_3px_0_#0ea5e9] focus:outline-none"
              />
            </div>
          </div>
          <div className="mt-3">
            <label htmlFor="message" className="font-mono text-xs font-bold uppercase">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              placeholder="Timeline, scope, and what you want built…"
              className="mt-1 w-full border-2 border-black bg-white px-3 py-2 font-mono text-sm placeholder:text-[#6b7280] focus:shadow-[3px_3px_0_#0ea5e9] focus:outline-none"
            />
          </div>
          {state === "error" ? (
            <p role="alert" className="mt-3 border-2 border-black bg-[#ffdad6] px-3 py-2 font-mono text-xs font-bold">
              Demo only — connect a form service (e.g. Formspree/Resend) to send messages.
            </p>
          ) : null}
          <button
            type="submit"
            className="mt-4 inline-flex w-full items-center justify-center gap-2 border-2 border-black bg-black px-4 py-3 font-mono text-sm font-bold tracking-wide text-white uppercase shadow-[4px_4px_0_#2563eb] transition-all hover:bg-[#1b1b1b] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            <Send size={16} aria-hidden="true" /> Transmit message
          </button>
          <p className="mt-2 font-mono text-[11px] tracking-wider text-[#3e4850] uppercase">
            No data leaves your browser in this demo.
          </p>
        </form>
        <div className="border-2 border-black bg-[#0b0f14] p-5 text-[#e6edf3] shadow-[4px_4px_0_#000]">
          <p className="font-mono text-xs font-bold tracking-wider uppercase text-[#7bd0ff]">
            Direct channels
          </p>
          <ul className="mt-3 space-y-2 font-mono text-sm">
            <li className="flex justify-between border border-[#2a3340] bg-[#11161d] px-3 py-2">
              <span>EMAIL</span>
              <a href="mailto:hello@example.com" className="underline underline-offset-2">
                hello@example.com
              </a>
            </li>
            <li className="flex justify-between border border-[#2a3340] bg-[#11161d] px-3 py-2">
              <span>GITHUB</span>
              <span className="opacity-60">add-your-handle</span>
            </li>
            <li className="flex justify-between border border-[#2a3340] bg-[#11161d] px-3 py-2">
              <span>LINKEDIN</span>
              <span className="opacity-60">add-your-profile</span>
            </li>
            <li className="flex justify-between border border-[#2a3340] bg-[#11161d] px-3 py-2">
              <span>LOCATION</span>
              <span className="opacity-60">remote-friendly</span>
            </li>
          </ul>
          <p className="mt-3 font-mono text-[11px] leading-5 text-[#8b98a9]">
            Replace placeholders with real links before launch. Never expose API keys client-side.
          </p>
        </div>
      </div>
    </section>
  );
}
