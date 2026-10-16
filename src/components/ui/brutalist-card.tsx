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
        "brutal-panel border-2 border-black bg-white",
        className
      )}
    >
      {children}
    </div>
  );
}
