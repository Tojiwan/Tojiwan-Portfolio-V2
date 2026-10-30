"use client";

import { useState }      from "react";
import { Eye, EyeOff, Copy, Check } from "lucide-react";

export function DemoPassword({ password }: { password: string }) {
  const [revealed, setRevealed] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(password);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // Clipboard unavailable (insecure context or denied); reveal the code
      // so it can be selected and copied by hand.
      setRevealed(true);
    }
  };

  return (
    <div className="mt-2 font-mono text-xs">
      <div className="flex flex-wrap items-center gap-1">
        <span>Password: <code className="select-all font-bold">{revealed ? password : "•".repeat(password.length)}</code></span>
        <button
          type="button"
          onClick={() => setRevealed((current) => !current)}
          aria-label={revealed ? "Hide demo password" : "Show demo password"}
          className="inline-flex h-6 w-6 shrink-0 items-center justify-center hover:bg-(--surface-muted)"
        >
          {revealed ? <EyeOff size={16} aria-hidden="true" /> : <Eye size={16} aria-hidden="true" />}
        </button>
        <button
          type="button"
          onClick={handleCopy}
          aria-label={copied ? "Copied!" : "Copy password"}
          className="inline-flex h-6 w-6 shrink-0 items-center justify-center hover:bg-(--surface-muted)"
        >
          {copied ? <Check size={16} aria-hidden="true" /> : <Copy size={16} aria-hidden="true" />}
        </button>
      </div>
    </div>
  );
}
