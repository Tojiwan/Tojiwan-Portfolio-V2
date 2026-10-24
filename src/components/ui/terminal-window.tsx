import type { ReactNode } from "react";
import { cn }             from "@/lib/utils";

export function TerminalWindow({
  file,
  status,
  children,
  dark = false,
  className,
  bodyClassName,
}: {
  file: string;
  status?: string;
  children: ReactNode;
  dark?: boolean;
  className?: string;
  bodyClassName?: string;
}) {
  return (
    <div
      className={cn(
        "brutal-panel border-2 border-black bg-white",
        dark && "bg-[#0b0f14] text-[#e6edf3]",
        className
      )}
    >
      <div
        className={cn(
          "flex items-center gap-2 border-b-2 border-black bg-(--panel) px-3 py-2",
          dark && "text-black"
        )}
      >
        <span className="flex shrink-0 gap-1.5" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full border border-black bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full border border-black bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full border border-black bg-[#28c840]" />
        </span>
        <span className="type-label min-w-0 truncate uppercase text-black">
          {file}
        </span>
        {status ? (
          <span className="type-label ml-auto text-right text-(--accent-strong) px-1.5 py-0.5 uppercase whitespace-nowrap shrink-0">
            {status}
          </span>
        ) : null}
      </div>
      <div className={cn("p-4", bodyClassName)}>{children}</div>
    </div>
  );
}
