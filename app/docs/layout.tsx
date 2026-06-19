import { DocsSideBar } from "@/components/docs/sidebar";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";
import Link from "next/link";
import React from "react";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="bg-secondary">
      <div className="bg-zinc-50 w-full max-w-6xl relative flex flex-col border-l border-r border-border mx-auto">
        <div className="w-full h-(--nav-height) sticky top-0 bg-lite-secondary/70 z-30 flex items-center justify-between backdrop-blur-xs border-b border-border px-4">
          <Logo />
          <div>
            <Link href={"/athena"}>
              <Button variant={"link"} className={""}>
                Athena
              </Button>
            </Link>
          </div>
        </div>
        <div className="flex relative">
          <DocsSideBar />
          <div className="p-6 text-[16px]">{children}</div>
        </div>
      </div>
    </main>
  );
}
