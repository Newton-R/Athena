import { cn } from "@/lib/utils";
import React from "react";

export const KBD = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <kbd
      className={cn(
        "px-1.5 py-0.5 border border-border rounded bg-secondary font-mono",
        className,
      )}
    >
      {children}
    </kbd>
  );
};
