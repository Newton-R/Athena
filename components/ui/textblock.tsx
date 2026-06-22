import { cn } from "@/lib/utils";
import React from "react";

export const TextBlock = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "p-2 border border-border mt-2 rounded bg-muted font-mono",
        className,
      )}
    >
      {children}
    </div>
  );
};
