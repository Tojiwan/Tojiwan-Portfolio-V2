import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/reveal";
import { TypedHeading } from "@/components/ui/typed-heading";

export function SectionHeading({
  kicker,
  title,
  description,
  align = "left",
}: {
  kicker      : string;
  title       : string;
  description?: string;
  align      ?: "left" | "center";
}) {
  return (
    <Reveal>
      <div>
        <div className={cn("flex items-center", align === "center" && "justify-center")}>
          {align === "center" ? (
            <span aria-hidden="true" className="h-0.5 flex-1 bg-black" />
          ) : null}
          <p className="type-label border-2 border-black bg-white px-2 py-1 uppercase shadow-[3px_3px_0_var(--shadow-color)]">
            <span aria-hidden="true" className="mr-1 inline-block h-2 w-2 bg-(--accent) outline-2 outline-black" />
            {kicker}
          </p>
          <span aria-hidden="true" className="h-0.5 flex-1 bg-black" />
        </div>
        <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center")}>
          <h2 className="type-headline mt-4 font-display text-black">
            {title === "About Me" ? title : <TypedHeading text={title} />}
          </h2>
          {description ? (
            <p className="type-body mt-3 font-mono text-(--text-muted)">{description}</p>
          ) : null}
        </div>
      </div>
    </Reveal>
  );
}
