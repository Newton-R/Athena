"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { CopyButton } from "../ui/copybutton";
import { motion as m } from "motion/react";
import { CodeIcon, FileIcon } from "lucide-react";

const InstallationBlock = ({
  module,
  singleCommand,
  file,
  value,
}: {
  children: React.ReactNode;
  module: string;
  singleCommand?: string;
  file?: string;
  value?: string;
}) => {
  const [current, setCurrent] = useState(0);
  const [text, setText] = useState("");
  const options = [
    {
      name: "pnpm",
      text: `pnpm add ${module}`,
    },
    {
      name: "npm",
      text: `npm install ${module}`,
    },
    {
      name: "yarn",
      text: `yarn add ${module}`,
    },
    {
      name: "bun",
      text: `bun add ${module}`,
    },
  ];

  if (file && value) {
    return (
      <div className="flex my-4 flex-col border-border border overflow-hidden rounded-md">
        <div className="p-2 flex justify-between items-center bg-secondary border-b border-border">
          <div className="text-muted-foreground flex items-center gap-2">
            <FileIcon size={18} className="text-black" />
            <span className="text-xs">{file}</span>
          </div>
          <CopyButton
            text={value}
            className="bg-transparent hover:bg-secondary w-fit rounded-md px-2.5"
          />
        </div>
        <div className="p-2 py-3 text-[14px] text-muted-foreground bg-background">
          {value}
        </div>
      </div>
    );
  }

  if (singleCommand) {
    return (
      <div className="flex justify-between text-[14px] my-4 items-center p-1 px-2 rounded-md border border-border">
        <p className="[word-spacing:0.25em] flex gap-2 items-center">
          <CodeIcon className="mr-2" size={12} />
          {singleCommand}
        </p>
        <CopyButton
          text={singleCommand}
          className="bg-transparent hover:bg-secondary w-fit rounded-md px-2.5"
        />
      </div>
    );
  }

  return (
    <m.div
      whileHover={"hovered"}
      initial={"initial"}
      className="w-full flex text-[14px] my-4 border rounded-md border-border overflow-hidden flex-col"
    >
      <div className="bg-secondary border-border flex justify-between border-b items-center ">
        <div className="flex items-center overflow-hidden rounded-tl-md">
          {options.map((option, i) => {
            const isCurrent = current === i;
            return (
              <div
                onClick={() => {
                  setCurrent(i);
                  setText(options[current].text);
                }}
                className={cn(
                  "cursor-pointer py-2 px-3 relative ",
                  isCurrent
                    ? "bg-primary/95 text-white"
                    : "hover:bg-lite-secondary",
                )}
                key={i}
              >
                {option.name}
              </div>
            );
          })}
        </div>

        <CopyButton
          text={options[current].text}
          className="bg-secondary hover:bg-secondary w-fit rounded-md px-2.5 mr-2"
        />
      </div>
      <p className="p-2 py-3 [word-spacing:0.25em]">{options[current].text}</p>
    </m.div>
  );
};

export default InstallationBlock;
