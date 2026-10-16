import { ArrowDown, ArrowUpRight, Download, MapPin } from "lucide-react";
import localFont from "next/font/local";
import { ActionLink } from "@/components/ui/action-link";
import { TechBadge } from "@/components/ui/tech-badge";
import { Reveal } from "@/components/ui/reveal";
import { HeroPortrait } from "@/components/sections/hero-portrait";

const display = localFont({
  src: "../../../public/fonts/Space_Grotesk/SpaceGrotesk-Variable.ttf",
  variable: "--font-hero-display",
  display: "swap",
  weight: "300 700",
});

export function HeroSection() {
  return (
    <section id="top" aria-labelledby="hero-heading" className={`hero ${display.variable} scroll-mt-20`}>
      <div className="hero-editorial">
        <span>01 / INTRODUCTION</span>
        <span aria-hidden="true">&lt;hello_world /&gt;</span>
      </div>
      <div className="hero-grid">
        <Reveal className="min-w-0">
          <HeroPortrait />
        </Reveal>
        <Reveal delay={0.08} className="min-w-0">
          <div className="hero-intro">
            <p className="hero-location"><MapPin size={14} aria-hidden="true" /> Pampanga, Philippines <span aria-hidden="true">↗</span></p>
            <h1 id="hero-heading" className="hero-heading">
              Hi, I&apos;m{" "}
              <span className="hero-name">TOJIWAN<span aria-hidden="true" className="hero-name-mark">✳</span></span>
            </h1>
            <p className="hero-identity">Jake Andrei R. Peralta <span aria-hidden="true">/</span> Developer</p>
            <div className="hero-skills">
              <TechBadge label="Web Development" accent />
              <TechBadge label="Shopify" />
              <TechBadge label="AI Automation" />
            </div>
            <p className="hero-description">
              I build responsive websites, high-converting Shopify storefronts,
              and smart automations that make everyday work easier.
            </p>
            <div className="hero-actions">
              <ActionLink href="#projects">View Projects <ArrowUpRight size={18} aria-hidden="true" /></ActionLink>
              <ActionLink href="/files/Peralta, Jake Andrei R. (RESUME).pdf" variant="secondary" download>
                <Download size={17} aria-hidden="true" /> Download CV
              </ActionLink>
            </div>
            <div className="hero-focus" aria-labelledby="hero-focus-label">
              <p id="hero-focus-label"><span aria-hidden="true">$</span> currently_building</p>
              <p>Web experiences <span aria-hidden="true">/</span> Shopify storefronts <span aria-hidden="true">/</span> n8n workflows</p>
            </div>
            <div className="hero-bottom-rail">
              <a href="#about" className="hero-scroll">Scroll to explore <ArrowDown size={15} aria-hidden="true" /></a>
              <span aria-hidden="true">&lt;/&gt;</span>
            </div>
          </div>
        </Reveal>
      </div>
      <div className="hero-availability">
        <span className="hero-status"><span aria-hidden="true" /> Available for work</span>
        <p>Open to web development, Shopify, and automation opportunities.</p>
        <a href="#contact" aria-label="Get in touch about an opportunity"><ArrowUpRight size={22} aria-hidden="true" /></a>
      </div>
    </section>
  );
}
