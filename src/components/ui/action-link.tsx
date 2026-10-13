import Link from "next/link";
import { cn } from "@/lib/utils";

export function ActionLink({
  href,
  children,
  variant = "primary",
  download = false,
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "dark";
  download?: boolean;
}) {
  const styles =
    variant === "primary"
      ? "bg-[#0ea5e9] text-black shadow-[4px_4px_0_#000] hover:bg-[#38bdf8]"
      : variant === "dark"
        ? "bg-black text-white shadow-[4px_4px_0_#2563eb] hover:bg-[#1b1b1b]"
        : "bg-white text-black shadow-[3px_3px_0_#000] hover:bg-[#f3f4f6]";
  return (
    <Link
      href={href}
      download={download}
      className={cn(
        "inline-flex items-center justify-center gap-2 border-2 border-black px-4 py-2.5 font-mono text-sm font-bold tracking-wide uppercase transition-all active:translate-x-[2px] active:translate-y-[2px] active:shadow-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black",
        styles
      )}
    >
      {children}
    </Link>
  );
}
