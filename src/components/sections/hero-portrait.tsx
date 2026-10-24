"use client";

import Image                                    from "next/image";
import { useRef, useState }                     from "react";
import { Mail, Share2, CodeXml, MessageSquare } from "lucide-react";

const portraits = [
  "Jake Andrei R. Peralta in graduation attire, holding his cap",
  "Jake Andrei R. Peralta wearing his graduation cap and gown",
  "Close-up graduation portrait of Jake Andrei R. Peralta",
  "Jake Andrei R. Peralta in a cream barong, looking down",
  "Jake Andrei R. Peralta in a cream barong, facing the camera",
];

export function HeroPortrait() {
  const [portrait, setPortrait] = useState(0);
  const [failed, setFailed]     = useState<Record<number, boolean>>({});
  const lastHover               = useRef(-Infinity);
  const nextPortrait            = () => setPortrait((current) => (current + 1) % portraits.length);
  return (
    <div className = "portrait-frame hero-profile">
    <div className = "hero-profile-label"><span>tojiwan_preview.img</span><span aria-hidden = "true">[ ↗ ]</span></div>
      {/* <span className="hero-sticker">100% HUMAN</span> */}
      <span aria-hidden = "true" className = "portrait-corner portrait-corner--tl" />
      <span aria-hidden = "true" className = "portrait-corner portrait-corner--tr" />
      <span aria-hidden = "true" className = "portrait-corner portrait-corner--bl" />
      <span aria-hidden = "true" className = "portrait-corner portrait-corner--br" />
    <button
      type           = "button"
      aria-label     = {`Show next portrait of Jake Andrei R. Peralta (image ${portrait + 1} of ${portraits.length})`}
      onPointerEnter = {(event) => {
        if (event.pointerType === "mouse") {
          lastHover.current = performance.now();
          nextPortrait();
        }
      }}
      onClick={(event) => {
          // Treat a mouse click during the hover fade as the same interaction.
        const mouseClick = "pointerType" in event.nativeEvent && event.nativeEvent.pointerType === "mouse";
        if (event.detail > 0 && mouseClick && performance.now() - lastHover.current < 350) return;
        nextPortrait();
      }}
      className = "portrait-screen group relative block w-full cursor-pointer overflow-hidden border-2 border-[#627483] bg-[#101c22]"
    >
      {portraits.map((alt, index) => (
        <Image
          key         = {index}
          src         = {`/Profile_Avatar/pfp-${index + 1}.webp`}
          alt         = {index === portrait ? alt : ""}
          aria-hidden = {index !== portrait}
          fill
          sizes     = "(min-width: 1280px) 430px, (min-width: 1024px) 36vw, (min-width: 768px) 360px, 85vw"
          priority  = {index === 0}
          loading   = {index === 0 ? undefined : "lazy"}
          onError   = {() => setFailed((current) => ({ ...current, [index]: true }))}
          className = {`object-cover object-[center_30%] transition-opacity duration-300 motion-reduce:transition-none ${index === portrait ? "opacity-100" : "opacity-0"} ${failed[index] ? "invisible" : ""}`}
        />
      ))}
      {failed[portrait] ? (
        <span className = "absolute inset-0 grid place-items-center p-6 text-center font-terminal text-xs font-semibold tracking-wide text-[#e6edf3] uppercase">
          Portrait unavailable
        </span>
      ) : null}
      <span aria-hidden = "true" className = "portrait-grid absolute inset-0" />
    </button>
      <div           className = "hero-profile-contact pt-4">
      <p             className = "type-label mb-2 flex items-center gap-2 text-black uppercase">
      <MessageSquare size      = {13} aria-hidden = "true" /> Let&apos;s connect:
        </p>
        <div className = "grid grid-cols-3 gap-2">
          {[
            { label: "Email", href: "mailto:andreiperalta13@gmail.com", icon: Mail },
            { label: "LinkedIn", href: "https://www.linkedin.com/in/jake-andrei-peralta-454154390", icon: Share2 },
            { label: "GitHub", href: "https://github.com/Tojiwan", icon: CodeXml },
          ].map(({ label, href, icon: Icon }) => (
            <a
              key       = {label}
              href      = {href}
              target    = {href.startsWith("https:") ? "_blank" : undefined}
              rel       = {href.startsWith("https:") ? "noopener noreferrer" : undefined}
              className = "hero-social flex items-center justify-center gap-1.5"
            >
              <Icon size = {12} aria-hidden = "true" /> {label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
