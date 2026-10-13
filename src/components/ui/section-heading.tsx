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
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center")}>
      <p className="inline-block border-2 border-black bg-white px-2 py-1 font-mono text-[11px] font-bold tracking-[0.08em] uppercase shadow-[3px_3px_0_#000]">
        <span aria-hidden="true" className="mr-1 inline-block h-2 w-2 bg-[#0ea5e9] outline-2 outline-black" />
        {kicker}
      </p>
      <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-black sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-2 font-mono text-sm leading-6 text-[#3e4850]">{description}</p>
      ) : null}
    </div>
  );
}
