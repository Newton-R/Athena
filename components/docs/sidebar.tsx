import { PlayIcon } from "lucide-react";
import React from "react";

export const DocsSideBar = () => {
  return (
    <div className="w-70 border-r shrink-0 h-[calc(100vh-var(--nav-height))] border-border flex top-(--nav-height) flex-col sticky left-0">
      {" "}
      <div className="h-24 w-full border-b border-border bg-line-gradient p-4">
        <span className="font-bold text-2xl">
          Vercel AI SDK, Building Athena
        </span>
      </div>
      <div className="flex flex-col flex-1">
        <div className="w-full p-2 border-b border-border bg-lite-secondary transition-colors duration-200 cursor-pointer hover:bg-white flex gap-2 items-center">
          <PlayIcon size={10} className="text-muted-foreground" />
          Introduction
        </div>
      </div>
    </div>
  );
};
