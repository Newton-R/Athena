"use client";
import { PlayIcon, SunIcon } from "lucide-react";
import React, { useState } from "react";
import { GreekName } from "../ui/greekName";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import Link from "next/link";
import { Button } from "../ui/button";
import { AnimatePresence, motion as m } from "motion/react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

interface SideLink {
  mainHead: string;
  link: string;
  internal_links: { label: string; href: string }[];
}

export const DocsSideBar = () => {
  const [isOpen, setIsOpen] = useState<number[]>([1]);
  const pathName = usePathname();
  const links: SideLink[] = [
    {
      mainHead: "Getting Started",
      link: "started",
      internal_links: [
        { label: "Overview", href: "#what-is-Αθηνά" },
        { label: "What you'll learn", href: "#what-you'll-learn" },
        { label: "Tech Stack", href: "#tech-stack" },
        { label: "Contributing", href: "#contributing" },
      ],
    },
    {
      mainHead: "Introduction",
      link: "intro",
      internal_links: [
        {
          label: "What is Agentic AI",
          href: "#what-is-agentic-ai",
        },
        {
          label: "Agentic AI Development",
          href: "#agentic-ai-development",
        },
        {
          label: "Agentic AI Internally",
          href: "#how-agents-work-internally",
        },
        {
          label: "Vercel AI SDK",
          href: "#vercel-ai-sdk",
        },
      ],
    },
    {
      mainHead: "Vercel AI SDK / Basic Chatbot",
      link: "vercel",
      internal_links: [
        {
          label: "Creating a Next.js App",
          href: "#creating-your-next.js-application",
        },
        { label: "Dependencies", href: "#install-dependencies" },
        { label: "Route Handler", href: "#create-a-route-handler" },
        { label: "UI Setup", href: "#setting-up-the-ui" },
      ],
    },
    {
      mainHead: "useChat( )",
      link: "useChat",
      internal_links: [
        { label: "useChat", href: "#what-is-usechat" },
        { label: "sendMessage", href: "#sendmessage" },
        { label: "messages", href: "#messages" },
        { label: "status", href: "#status" },
      ],
    },
  ];
  return (
    <div className="w-70 border-r shrink-0 h-[calc(100vh-var(--nav-height))] border-border flex top-(--nav-height) flex-col sticky left-0">
      {" "}
      <div className="h-24 w-full border-b border-border bg-line-gradient p-4">
        <span className="font-bold text-2xl">
          Vercel AI SDK, Building <GreekName />
        </span>
      </div>
      {/* Navigation links */}
      <div className="flex flex-col overflow-y-auto chat-scroll flex-1">
        {links.map((link, i) => {
          const currentLink = isOpen.includes(i);
          return (
            <div
              key={i}
              className={cn(
                "flex flex-col border-b border-border",
                currentLink && "pb-3",
              )}
            >
              <div
                onClick={() => {
                  if (currentLink) {
                    setIsOpen(isOpen.filter((p) => p !== i));
                  } else {
                    setIsOpen((prev) => [...prev, i]);
                  }
                }}
                className={cn(
                  "w-full p-2 bg-lite-secondary text-[14px] transition-colors duration-200 cursor-pointer hover:bg-white flex gap-2 items-center",
                  currentLink && "bg-secondary hover:bg-zinc-50",
                )}
              >
                <PlayIcon
                  size={10}
                  className={cn(
                    "text-muted-foreground duration-300 transition-all",
                    currentLink && "rotate-90",
                  )}
                />
                {link.mainHead}
              </div>
              <AnimatePresence initial={false}>
                <m.div
                  animate={
                    currentLink
                      ? {
                          height: "auto",
                        }
                      : { height: 0 }
                  }
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                  className="w-full overflow-hidden text-[14px] text-muted-foreground px-6"
                >
                  {link.internal_links.map((internal, i) => {
                    const paths = pathName.split("/");
                    const currentSlug = paths[paths.length - 1];
                    const IsInPage = currentSlug === link.link;
                    return (
                      <m.span
                        animate={
                          currentLink
                            ? { opacity: 1, x: 0 }
                            : { opacity: 0, x: -15 }
                        }
                        transition={{
                          duration: 0.4,
                          delay: currentLink ? i * 0.1 : 0,
                          ease: "easeInOut",
                        }}
                        key={i}
                      >
                        <Link
                          href={
                            IsInPage
                              ? internal.href
                              : `/docs/${link.link}${internal.href}`
                          }
                          className={cn(
                            "p-1 flex cursor-pointer transition-colors duration-200 items-center hover:text-black gap-2",
                            // currentpath ? "text-black" : "hover:text-black ",
                          )}
                        >
                          <div className="h-px bg-muted-foreground w-2" />

                          <span className="">{internal.label}</span>
                        </Link>
                      </m.span>
                    );
                  })}
                </m.div>
              </AnimatePresence>
            </div>
          );
        })}
      </div>
      {/* identity */}
      <div className="p-4 text-xs border-t border-border flex justify-between items-center ">
        <div className=" gap-2 text-muted-foreground flex">
          <Avatar>
            <AvatarImage src={"/profile.jpg"} />
            <AvatarFallback>NR</AvatarFallback>
          </Avatar>
          <span className="mt-0">
            <GreekName /> was built by <br />
            <Link
              href={"https://www.newtonraul.me/"}
              target="_blank"
              className="font-bold hover:underline"
            >
              Newton Raul
            </Link>
          </span>
        </div>
        {/* <Button size={"icon-sm"} variant={"outline"}>
          <SunIcon size={18} />
        </Button> */}
      </div>
    </div>
  );
};
