import { CircleAlertIcon } from "lucide-react";
import React from "react";

export const WarningBlock = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="text-[14px] my-4 px-4 pt-2 pb-4 rounded-md border-border border flex gap-2 items-start">
      <CircleAlertIcon size={18} className="shrink-0 mt-2 text-primary" />
      <div className="text-muted-foreground">{children}</div>
    </div>
  );
};
