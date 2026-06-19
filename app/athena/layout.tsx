import { Logo } from "@/components/ui/logo";
import React from "react";

export default function AthenaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className="bg-secondary">{children}</main>;
}
