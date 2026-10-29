import ScrambledText from "@/components/react-bits/ScrambledText";

const COPYRIGHT_YEAR = 2026;

const wordmark = `████████╗ ██████╗      ██╗██╗██╗    ██╗ █████╗ ███╗   ██╗
╚══██╔══╝██╔═══██╗     ██║██║██║    ██║██╔══██╗████╗  ██║
   ██║   ██║   ██║     ██║██║██║ █╗ ██║███████║██╔██╗ ██║
   ██║   ██║   ██║██   ██║██║██║███╗██║██╔══██║██║╚██╗██║
   ██║   ╚██████╔╝╚█████╔╝██║╚███╔███╔╝██║  ██║██║ ╚████║
   ╚═╝    ╚═════╝  ╚════╝ ╚═╝ ╚══╝╚══╝ ╚═╝  ╚═╝╚═╝  ╚═══╝`;

export function SiteFooter() {
const year = COPYRIGHT_YEAR;
return (
    <footer className = "border-t-2 border-black bg-(--panel)">
    <div    className = "mx-auto grid max-w-[1280px] gap-8 px-4 py-8 sm:grid-cols-2 sm:px-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.65fr)_minmax(0,1.2fr)_minmax(0,1.8fr)]">
        <div>
            <p className = "font-display text-sm font-bold text-black">TOJIWAN</p>
            <ScrambledText className = "mt-1 font-mono text-xs leading-5 text-(--text-muted)">
                Jake Andrei R. Peralta. Web development, Shopify storefronts,
                and automation from Pampanga, Philippines.
            </ScrambledText>
            <p className = "type-label mt-2 inline-block text-(--accent-strong) uppercase">
                Status: Open to work
            </p>
        </div>
        <div>
            <p  className = "type-label uppercase">Sections</p>
            <ul className = "mt-2 space-y-1 font-mono text-xs">
                {["about", "projects", "stack", "experience", "services", "contact"].map((s) => (
                <li key  = {s}>
                <a  href = {`#${s}`} className = "inline-flex min-h-11 items-center no-underline hover:underline hover:underline-offset-2 sm:min-h-6">
                    {s}
                    </a>
                </li>
                ))}
            </ul>
        </div>
        {/* Contacts retained for later use.
        <div>
        <p className = "font-mono text-xs font-bold tracking-wider uppercase">Contacts</p>
        <p className = "mt-2 break-all font-mono text-xs leading-5">
        <a href      = "mailto:andreiperalta13@gmail.com" className = "no-underline hover:underline">
            andreiperalta13@gmail.com
            </a>
            <span className = "mt-2 flex flex-wrap gap-3">
            <a    href      = "https://github.com/Tojiwan" target = "_blank" rel = "noopener noreferrer" className = "no-underline hover:underline">
                GitHub
            </a>
            <a href = "https://www.linkedin.com/in/jake-andrei-peralta-454154390" target = "_blank" rel = "noopener noreferrer" className = "no-underline hover:underline">
                LinkedIn
            </a>
            </span>
        </p>
        </div>
        */}
        <div>
            <p  className = "type-label uppercase">Resources</p>
            <ul className = "mt-2 space-y-1 font-mono text-xs">
                <li>
                <a href = "/files/Jake-Peralta-Resume.pdf" download = "Jake-Peralta-Resume.pdf" className = "inline-flex min-h-11 items-center no-underline hover:underline hover:underline-offset-2 sm:min-h-6">
                    Download résumé
                </a>
                </li>
                <li>
                <a href = "#top" className = "inline-flex min-h-11 items-center no-underline hover:underline hover:underline-offset-2 sm:min-h-6">
                    Back to top ↑
                </a>
                </li>
            </ul>
        </div>

        <div role        = "img" aria-label = "Tojiwan ASCII wordmark" className = "min-w-0 self-center text-(--text) [container-type:inline-size]">
            <pre aria-hidden = "true" className = "m-0 whitespace-pre text-[clamp(6px,2.8cqi,12px)] leading-tight [font-family:ui-monospace,monospace]">{wordmark}</pre>
        </div>
    </div>

        <div className = "border-t-2 border-black">
            <div className = "mx-auto flex max-w-[1280px] justify-center px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] text-center font-mono text-xs sm:px-6">
                <span>© {year} Tojiwan. All rights reserved.</span>
            </div>
        </div>
    </footer>
  );
}
