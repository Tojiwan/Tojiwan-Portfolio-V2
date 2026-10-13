export function TechBadge({ label, accent = false }: { label: string; accent?: boolean }) {
  return (
    <span
      className={
        accent
          ? "border-2 border-black bg-(--accent) px-2 py-1 font-mono text-[11px] font-bold tracking-wider text-black uppercase"
          : "border border-black bg-(--panel) px-2 py-1 font-mono text-[11px] font-bold tracking-wider text-black uppercase"
      }
    >
      {label}
    </span>
  );
}
