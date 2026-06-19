"use client";

import { Button } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";
import {
  CameraIcon,
  FolderIcon,
  ForwardIcon,
  ImageIcon,
  Loader2Icon,
} from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

type Message = {
  id: string;
  role: "user" | "assistant";
  content: string;
};

const AthenaMainPage = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Autoscroll to bottom whenever messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  const handleSend = async () => {
    const trimmed = input.trim();
    if (!trimmed || isLoading) return;

    const userMessage: Message = {
      id: crypto.randomUUID(),
      role: "user",
      content: trimmed,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    // Reset textarea height
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
    }

    try {
      // TODO: replace with your actual API call
      await new Promise((res) => setTimeout(res, 1200));
      const assistantMessage: Message = {
        id: crypto.randomUUID(),
        role: "assistant",
        content:
          "This is a placeholder response from Athena. Wire up your API here.",
      };
      setMessages((prev) => [...prev, assistantMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  // Auto-resize textarea
  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
    const el = e.target;
    el.style.height = "auto";
    el.style.height = `${Math.min(el.scrollHeight, 160)}px`;
  };

  const isEmpty = messages.length === 0;

  return (
    <div className="bg-zinc-50 w-full max-w-5xl relative flex flex-col border-l border-r border-border mx-auto h-screen">
      {/* Nav */}
      <nav className="w-full bg-lite-secondary border-b border-border sticky top-0 z-10 py-4 flex items-center justify-between px-4">
        <Logo />
        <div className="flex items-center gap-4 text-[14px]">
          <Link href={""}>Docs</Link>
          <Link href={""}>About</Link>
          <Link href={""}>Github</Link>
        </div>
      </nav>

      {/* Messages area */}
      <div className="flex-1 overflow-y-auto bg-white px-6 chat-scroll py-6">
        {isEmpty ? (
          // Empty state
          <div className="h-full flex flex-col items-center justify-center gap-3 text-center text-muted-foreground select-none">
            <p className="text-2xl font-semibold tracking-tight text-foreground">
              What can I help with?
            </p>
            <p className="text-sm max-w-sm">
              Ask Athena anything. Use{" "}
              <kbd className="px-1.5 py-0.5 text-xs border border-border rounded bg-muted font-mono">
                Shift + Enter
              </kbd>{" "}
              for a new line.
            </p>
          </div>
        ) : (
          <div className="flex flex-col gap-4 max-w-full mx-auto w-full">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${
                  msg.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`px-4 py-2.5 rounded-2xl text-sm leading-relaxed max-w-[80%] whitespace-pre-wrap ${
                    msg.role === "user"
                      ? "bg-primary text-primary-foreground rounded-br-sm"
                      : "bg-zinc-100 text-foreground border border-border rounded-bl-sm"
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}

            {/* Loading indicator */}
            {isLoading && (
              <div className="flex justify-start">
                <div className="px-4 py-2.5 rounded-2xl rounded-bl-sm bg-zinc-100 border border-border text-sm text-muted-foreground flex items-center gap-2">
                  <Loader2Icon size={14} className="animate-spin" />
                  Thinking…
                </div>
              </div>
            )}

            {/* Scroll anchor */}
            <div ref={messagesEndRef} />
          </div>
        )}
      </div>

      {/* Input bar */}
      <div className="sticky bottom-0 w-full border-t border-border bg-line-gradient p-4">
        <div className="w-full border-border rounded-xs bg-background border flex flex-col mx-auto">
          <textarea
            ref={textareaRef}
            className="flex-1 w-full resize-none p-3 focus:outline-none text-sm min-h-11 max-h-40 leading-relaxed"
            placeholder="Message Athena…"
            value={input}
            onChange={handleInput}
            onKeyDown={handleKeyDown}
            rows={1}
          />
          <div className="w-full flex p-2 justify-between items-center gap-1">
            {/* Attachment actions */}
            <div className="flex items-center gap-1">
              <Button className="cursor-pointer" variant="ghost" size="icon-lg">
                <CameraIcon size={18} />
              </Button>
              <Button className="cursor-pointer" variant="ghost" size="icon-lg">
                <ImageIcon size={18} />
              </Button>
              <Button className="cursor-pointer" variant="ghost" size="icon-lg">
                <FolderIcon size={18} />
              </Button>
            </div>

            {/* Send */}
            <Button
              className="cursor-pointer"
              size="lg"
              onClick={handleSend}
              disabled={!input.trim() || isLoading}
            >
              <ForwardIcon size={18} />
              {isLoading ? "Sending…" : "Send"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AthenaMainPage;
