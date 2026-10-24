import { cn } from "@/lib/utils";

export function ActionLink({
  href,
  children,
  variant  = "primary",
  download = false,
}: {
  href     : string;
  children : React.ReactNode;
  variant ?: "primary" | "secondary" | "dark";
  download?: boolean | string;
}) {
  const styles    = 
        variant === "primary"
      ? "bg-(--accent) text-[#000] shadow-[4px_4px_0_var(--shadow-color)] hover:bg-(--accent-soft)"
      : variant === "dark"
        ? "bg-black text-white shadow-[4px_4px_0_var(--accent-blue)] hover:bg-(--surface-muted)"
        :  "bg-white text-black shadow-[3px_3px_0_var(--shadow-color)] hover:bg-(--panel)";
    // Plain <a>: fragment targets and PDF downloads both need the browser's
    // default handling, which next/link's click interception bypasses.
  return (
    <a
      href      = {href}
      download  = {download || undefined}
      className = {cn(
        "inline-flex items-center justify-center gap-2 border-2 border-black px-4 py-2.5 font-mono text-sm font-bold tracking-wide uppercase transition-all active:translate-x-[2px] active:translate-y-[2px] active:shadow-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black",
        styles
      )}
    >
      {children}
    </a>
  );
}
