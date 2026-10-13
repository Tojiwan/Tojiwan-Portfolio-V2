import { cn } from "@/lib/utils";

export function SectionHeading({
  kicker,
  title,
  description,
  align = "left",
}: {
  kicker: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div>
      <div className={cn("flex items-center", align === "center" && "justify-center")}>
        {align === "center" ? (
          <span aria-hidden="true" className="h-0.5 flex-1 bg-black" />
        ) : null}
        <p className="shrink-0 border-2 border-black bg-white px-2 py-1 font-mono text-[11px] font-bold tracking-[0.08em] uppercase shadow-[3px_3px_0_#000]">
          <span aria-hidden="true" className="mr-1 inline-block h-2 w-2 bg-(--accent) outline-2 outline-black" />
          {kicker}
        </p>
        <span aria-hidden="true" className="h-0.5 flex-1 bg-black" />
      </div>
      <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center")}>
        <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-black sm:text-4xl">
          {title}
        </h2>
        {description ? (
          <p className="mt-2 font-mono text-sm leading-6 text-(--text-muted)">{description}</p>
        ) : null}
      </div>
    </div>
  );
}
