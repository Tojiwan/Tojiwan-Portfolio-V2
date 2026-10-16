import { RollingLink } from "@/components/ui/rolling-link";

const COPYRIGHT_YEAR = 2026;

export function SiteFooter() {
  const year = COPYRIGHT_YEAR;
  return (
    <footer className="border-t-2 border-black bg-(--panel)">
      <div className="mx-auto grid max-w-[1280px] gap-8 px-4 py-8 sm:grid-cols-2 sm:px-6 lg:grid-cols-[1.5fr_1fr_1fr_1.5fr]">
        <div>
          <p className="font-display text-sm font-extrabold text-black">TOJIWAN</p>
          <p className="mt-1 font-mono text-xs leading-5 text-(--text-muted)">
            Jake Andrei R. Peralta. Web development, Shopify storefronts,
            and automation from Pampanga, Philippines.
          </p>
          <p className="mt-2 inline-block text-(--accent-strong) font-mono text-[11px] font-bold uppercase">
            Status: Open to work
          </p>
        </div>
        <div>
          <p className="font-mono text-xs font-bold tracking-wider uppercase">Sections</p>
          <ul className="mt-2 space-y-1 font-mono text-xs">
            {["about", "projects", "stack", "experience", "services", "contact"].map((s) => (
              <li key={s}>
                <RollingLink href={`#${s}`} className="no-underline">
                  {s}
                </RollingLink>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-mono text-xs font-bold tracking-wider uppercase">Stack</p>
          <p className="mt-2 font-mono text-xs leading-5 text-(--text-muted)">
            Nuxt.js, Laravel, Shopify Liquid, n8n, Next.js
          </p>
        </div>
        <div>
          <p className="font-mono text-xs font-bold tracking-wider uppercase">Contact</p>
          <p className="mt-2 break-all font-mono text-xs leading-5">
            <RollingLink href="mailto:andreiperalta13@gmail.com" className="underline underline-offset-2">
              andreiperalta13@gmail.com
            </RollingLink>
            <span className="mt-2 flex flex-wrap gap-3">
              <RollingLink href="https://github.com/Tojiwan" className="underline underline-offset-2">
                GitHub
              </RollingLink>
              <RollingLink href="https://www.linkedin.com/in/jake-andrei-peralta-454154390" className="underline underline-offset-2">
                LinkedIn
              </RollingLink>
            </span>
          </p>
        </div>
      </div>
      <div className="border-t-2 border-black">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-1 px-4 py-3 font-mono text-[11px] tracking-wider uppercase md:justify-center sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <span>© {year} Tojiwan. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
