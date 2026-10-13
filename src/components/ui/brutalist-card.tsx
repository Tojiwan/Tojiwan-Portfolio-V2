import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function BrutalistCard({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "border-2 border-black bg-white shadow-[4px_4px_0_#000]",
        className
      )}
    >
      {children}
    </div>
  );
}
