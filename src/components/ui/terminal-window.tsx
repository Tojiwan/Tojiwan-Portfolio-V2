import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function TerminalWindow({
  file,
  status,
  children,
  dark = false,
  className,
}: {
  file: string;
  status?: string;
  children: ReactNode;
  dark?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "border-2 border-black bg-white shadow-[4px_4px_0_#000]",
        dark && "bg-[#0b0f14] text-[#e6edf3]",
        className
      )}
    >
      <div
        className={cn(
          "flex items-center gap-2 border-b-2 border-black px-3 py-2",
          dark && "border-black bg-[#11161d]"
        )}
      >
        <span className="flex gap-1.5" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full border border-black bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full border border-black bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full border border-black bg-[#28c840]" />
        </span>
        <span className="truncate font-mono text-[11px] font-bold tracking-wider uppercase opacity-80">
          {file}
        </span>
        {status ? (
          <span className="ml-auto border border-black bg-[#0ea5e9] px-1.5 py-0.5 font-mono text-[10px] font-bold tracking-wider text-black uppercase">
            {status}
          </span>
        ) : null}
      </div>
      <div className="p-4">{children}</div>
    </div>
  );
}
