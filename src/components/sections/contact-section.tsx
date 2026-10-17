"use client";

import { useState } from "react";
import { Send, Share2, CodeXml, AtSign, Phone } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { TerminalWindow } from "@/components/ui/terminal-window";
import { RollingLink } from "@/components/ui/rolling-link";
import { Reveal } from "@/components/ui/reveal";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mljgaana";

type FormStatus = "idle" | "submitting" | "succeeded" | "error";

const channels = [
  {
    href: "https://www.linkedin.com/in/jake-andrei-peralta-454154390",
    icon: Share2,
    value: "linkedin.com/in/jake-andrei-peralta-454154390",
    label: "LinkedIn",
  },
  {
    href: "https://github.com/Tojiwan",
    icon: CodeXml,
    value: "github.com/Tojiwan",
    label: "GitHub",
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
  const [status, setStatus] = useState<FormStatus>("idle");
  const [formError, setFormError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const submitting = status === "submitting";

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitting) return;
    setStatus("submitting");
    setFormError(null);
    setFieldErrors({});

    const form = event.currentTarget;
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });
      const result = await response.json().catch(() => null);
      if (response.ok) {
        form.reset();
        setStatus("succeeded");
      } else {
        const mapped: Record<string, string> = {};
        if (Array.isArray(result?.errors)) {
          for (const error of result.errors) {
            if (error?.field && error?.message && !mapped[error.field]) {
              mapped[error.field] = error.message;
            }
          }
        }
        setFieldErrors(mapped);
        setFormError("Something went wrong sending your message. Please try again or email me directly.");
        setStatus("error");
      }
    } catch {
      setFormError("Network error. Please check your connection or email me directly.");
      setStatus("error");
    }
  }

  return (
    <section id="contact" aria-labelledby="contact-heading" className="scroll-mt-20">
      <div id="contact-heading">
        <SectionHeading
          kicker="Get in touch"
          title="Let's Work Together"
          description="Have a website, Shopify project, or workflow in mind? Send a message with the form or reach out through the links."
        />
      </div>
      <div className="mt-6 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <Reveal className="h-full min-w-0">
          <TerminalWindow file="transmit_console.exe" status="Online form" className="h-full min-w-0">
            <p id="contact-form-note" className="mb-5 font-mono text-sm leading-6 text-(--text)">
              Fill out the form below and it will land in my inbox. Prefer email?{" "}
              <RollingLink
                href="mailto:andreiperalta13@gmail.com"
                className="font-bold underline underline-offset-4"
              >
                Email me directly
              </RollingLink>
              .
            </p>
            {status === "succeeded" ? (
              <div role="status" className="border-2 border-black bg-(--surface-muted) p-5 font-mono">
                <p className="text-sm font-bold text-(--text)">Message sent. Thanks for reaching out.</p>
                <p className="mt-2 text-sm leading-6 text-(--text)">I will get back to you soon.</p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="mt-4 inline-flex items-center justify-center gap-2 border-2 border-black bg-white px-4 py-2.5 font-mono text-xs font-bold tracking-wider uppercase shadow-[3px_3px_0_var(--shadow-color)] transition-all hover:bg-(--panel) active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form aria-label="Contact form" aria-describedby="contact-form-note" onSubmit={handleSubmit} noValidate={false}>
                <input type="hidden" name="_subject" value="New portfolio contact message" />
                <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="font-mono text-xs font-bold">
                      <span className="text-(--accent-strong)">$</span> Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      required
                      autoComplete="name"
                      placeholder="Your name"
                      aria-invalid={Boolean(fieldErrors.name)}
                      aria-describedby={fieldErrors.name ? "name-error" : undefined}
                      className="mt-2 w-full min-w-0 border-2 border-black bg-white px-3 py-2.5 font-mono text-sm placeholder:text-(--text-muted) focus:shadow-[3px_3px_0_var(--accent)] focus:outline-none"
                    />
                    {fieldErrors.name ? (
                      <p id="name-error" role="alert" className="mt-1 font-mono text-xs font-bold text-(--accent-strong)">
                        {fieldErrors.name}
                      </p>
                    ) : null}
                  </div>
                  <div>
                    <label htmlFor="email" className="font-mono text-xs font-bold">
                      <span className="text-(--accent-strong)">$</span> Email *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      placeholder="you@company.com"
                      aria-invalid={Boolean(fieldErrors.email)}
                      aria-describedby={fieldErrors.email ? "email-error" : undefined}
                      className="mt-2 w-full min-w-0 border-2 border-black bg-white px-3 py-2.5 font-mono text-sm placeholder:text-(--text-muted) focus:shadow-[3px_3px_0_var(--accent)] focus:outline-none"
                    />
                    {fieldErrors.email ? (
                      <p id="email-error" role="alert" className="mt-1 font-mono text-xs font-bold text-(--accent-strong)">
                        {fieldErrors.email}
                      </p>
                    ) : null}
                  </div>
                </div>
                <div className="mt-4">
                  <label htmlFor="message" className="font-mono text-xs font-bold">
                    <span className="text-(--accent-strong)">$</span> Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={7}
                    placeholder="Tell me what you want to build, your timeline, and how I can help."
                    aria-invalid={Boolean(fieldErrors.message)}
                    aria-describedby={fieldErrors.message ? "message-error" : undefined}
                    className="mt-2 w-full min-w-0 resize-none border-2 border-black bg-white px-3 py-2.5 font-mono text-sm placeholder:text-(--text-muted) focus:shadow-[3px_3px_0_var(--accent)] focus:outline-none"
                  />
                  {fieldErrors.message ? (
                    <p id="message-error" role="alert" className="mt-1 font-mono text-xs font-bold text-(--accent-strong)">
                      {fieldErrors.message}
                    </p>
                  ) : null}
                </div>
                {formError ? (
                  <p role="alert" className="mt-4 border-2 border-black bg-(--surface-muted) px-3 py-2.5 font-mono text-xs leading-5 font-bold text-(--text)">
                    {formError}
                  </p>
                ) : null}
                <button
                  type="submit"
                  disabled={submitting}
                  className="mt-5 inline-flex w-full items-center justify-center gap-2 border-2 border-black bg-(--accent) px-4 py-4 font-mono text-sm font-bold tracking-wider text-[#000] uppercase shadow-[4px_4px_0_var(--shadow-color)] transition-all hover:bg-(--accent-soft) active:translate-x-0.5 active:translate-y-0.5 active:shadow-none disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {submitting ? "Sending..." : "Send message"}
                  <Send size={16} aria-hidden="true" />
                </button>
              </form>
            )}
          </TerminalWindow>
        </Reveal>
        <Reveal delay={0.1} className="h-full min-w-0">
          <TerminalWindow
            file="Contact_Info.exe"
            status="Direct links"
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
