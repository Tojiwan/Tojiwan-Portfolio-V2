import { RollingLink } from "@/components/ui/rolling-link";

const COPYRIGHT_YEAR = 2026;

export function SiteFooter() {
  const year = COPYRIGHT_YEAR;
  return (
    <footer className="border-t-2 border-black bg-white">
      <div className="mx-auto grid max-w-[1280px] gap-6 px-4 py-10 sm:px-6 md:grid-cols-4">
        <div>
          <p className="font-display text-sm font-extrabold text-black">TOJIWAN</p>
          <p className="mt-1 font-mono text-xs leading-5 text-[#3e4850]">
            Placeholder portfolio. Replace with real bio and availability.
          </p>
          <p className="mt-2 inline-block border border-black bg-[#0ea5e9] px-2 py-0.5 font-mono text-[11px] font-bold uppercase">
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
          <p className="mt-2 font-mono text-xs leading-5 text-[#3e4850]">
            Next.js, TypeScript, Tailwind, Motion, Vercel
          </p>
        </div>
        <div>
          <p className="font-mono text-xs font-bold tracking-wider uppercase">Contact</p>
          <p className="mt-2 font-mono text-xs leading-5">
            <a href="mailto:andreiperalta13@gmail.com" className="underline underline-offset-2">
              andreiperalta13@gmail.com
            </a>
            <br />
            <span className="text-[#3e4850]">Replace with real email + profiles</span>
          </p>
        </div>
      </div>
      <div className="border-t-2 border-black">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-1 px-4 py-3 font-mono text-[11px] tracking-wider uppercase md:justify-center sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <span>© {year} Tojiwan — Placeholder. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
