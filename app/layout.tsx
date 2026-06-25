import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Toaster } from "sonner";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Αθηνά",
  description: "The Open-Source Journey Into Agentic AI",
  openGraph: {
    type: "website",
    url: "https://athenaai.newtonraul.me",
    title: "Αθηνά",
    description:
      "Athena is an open-source AI project architect that helps developers transform ideas into structured plans while learning how modern agentic AI systems are built.",
    siteName: "Αθηνά",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        geistSans.className,
        geistMono.variable,
        "font-sans",
        geist.variable,
      )}
    >
      <body className="min-h-full flex flex-col">
        {children} <Toaster position="top-right" />
      </body>
    </html>
  );
}
