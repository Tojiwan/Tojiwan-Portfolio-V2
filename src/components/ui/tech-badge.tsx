export function TechBadge({ label, accent = false }: { label: string; accent?: boolean }) {
  return (
    <span
      className={
        accent
          ? "type-label border-2 border-black bg-(--accent) px-2 py-1 text-[#000]"
          : "type-label border border-black bg-(--panel) px-2 py-1 text-black"
      }
    >
      {label}
    </span>
  );
}
