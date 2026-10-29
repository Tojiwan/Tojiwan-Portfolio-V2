"use client";

import { useState }      from "react";
import { Eye, EyeOff, Copy, Check } from "lucide-react";

export function DemoPassword({ password }: { password: string }) {
  const [revealed, setRevealed] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(password);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="mt-2 font-mono text-xs">
      <div className="flex flex-wrap items-center gap-1">
        <span>Password: <code className="select-all font-bold">{revealed ? password : "•".repeat(password.length)}</code></span>
        <button
          type="button"
          onClick={() => setRevealed((current) => !current)}
          aria-label={revealed ? "Hide demo password" : "Show demo password"}
          className="inline-flex h-5 w-5 shrink-0 items-center justify-center"
        >
          {revealed ? <EyeOff size={16} aria-hidden="true" /> : <Eye size={16} aria-hidden="true" />}
        </button>
        <button
          type="button"
          onClick={handleCopy}
          aria-label={copied ? "Copied!" : "Copy password"}
          className="inline-flex h-5 w-5 shrink-0 items-center justify-center"
        >
          {copied ? <Check size={16} aria-hidden="true" /> : <Copy size={16} aria-hidden="true" />}
        </button>
      </div>
    </div>
  );
}
