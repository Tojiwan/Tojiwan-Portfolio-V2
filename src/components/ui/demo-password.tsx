"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export function DemoPassword({ password }: { password: string }) {
  const [revealed, setRevealed] = useState(false);

  return (
    <div className="mt-2 font-mono text-xs">
      <div className="flex flex-wrap items-center gap-2">
        <span>Password: <code className="select-all font-bold">{revealed ? password : "•".repeat(password.length)}</code></span>
        <button
          type="button"
          onClick={() => setRevealed((current) => !current)}
          aria-label={revealed ? "Hide demo password" : "Show demo password"}
          className="inline-flex h-11 w-11 items-center justify-center hover:bg-(--panel)"
        >
          {revealed ? <EyeOff size={16} aria-hidden="true" /> : <Eye size={16} aria-hidden="true" />}
        </button>
      </div>
    </div>
  );
}
