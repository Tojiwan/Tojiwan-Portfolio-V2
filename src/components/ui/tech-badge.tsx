export function TechBadge({ label, accent = false }: { label: string; accent?: boolean }) {
  return (
    <span
      className={
        accent
          ? "border-2 border-black bg-[#0ea5e9] px-2 py-1 font-mono text-[11px] font-bold tracking-wider text-black uppercase"
          : "border border-black bg-[#f3f4f6] px-2 py-1 font-mono text-[11px] font-bold tracking-wider text-black uppercase"
      }
    >
      {label}
    </span>
  );
}
