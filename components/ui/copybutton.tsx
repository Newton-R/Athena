// components/copy-button.tsx
"use client";

import { useState } from "react";

export function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={copy}
      className="absolute top-2 right-2 z-10 text-xs px-2 py-1 rounded bg-zinc-700 text-zinc-300 opacity-0 group-hover:opacity-100 transition"
    >
      {copied ? "Copied!" : "Copy"}
    </button>
  );
}
