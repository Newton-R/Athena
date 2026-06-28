"use client";

import { Button } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";
import { useAI } from "@/lib/useAI";
import { useChat } from "@ai-sdk/react";
import {
  CameraIcon,
  CopyIcon,
  FolderIcon,
  ForwardIcon,
  ImageIcon,
  Loader2Icon,
  RefreshCcw,
  StopCircleIcon,
} from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import { motion as m } from "motion/react";
import { AskedQuestions, Question, QuestionsPart } from "@/lib/types";
import QuestionsBlock from "@/components/ui/chat/QuestionsBlock";

type Message = {
  id: string;
  role: "user" | "assistant";
  content: string;
};

const AthenaMainPage = () => {
  // const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [current, setCurrent] = useState(0);

  const { messages, sendMessage, status, error, regenerate, stop } = useChat();

  // Autoscroll to bottom whenever messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, status === "submitted"]);

  useEffect(() => {
    if (error) {
      toast.error(`${error.message}`);
    }
  }, [error]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage({ text: input });
      setInput("");
    }
  };

  //   const trimmed = input.trim();
  //   if (!trimmed || isLoading) return;

  //   const userMessage: Message = {
  //     id: crypto.randomUUID(),
  //     role: "user",
  //     content: trimmed,
  //   };

  //   setMessages((prev) => [...prev, userMessage]);
  //   setInput("");
  //   setIsLoading(true);

  //   // Reset textarea height
  //   if (textareaRef.current) {
  //     textareaRef.current.style.height = "auto";
  //   }

  //   try {
  //     // TODO: replace with your actual API call
  //     await new Promise((res) => setTimeout(res, 1200));
  //     const assistantMessage: Message = {
  //       id: crypto.randomUUID(),
  //       role: "assistant",
  //       content: await generate({ prompt: trimmed }),
  //     };
  //     setMessages((prev) => [...prev, assistantMessage]);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

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
        <div className="flex items-center text-[14px]">
          <Link href={"/docs/intro"}>
            <Button variant={"link"}>Docs</Button>
          </Link>
          <Link target="_blank" href={"https://github.com/Newton-R/Athena"}>
            <Button variant={"link"}>Github</Button>
          </Link>
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
          <div className="flex flex-col gap-6 max-w-full mx-auto w-full">
            {messages.map((msg) => (
              <m.div
                key={msg.id}
                className={`flex ${
                  msg.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <m.div
                  initial={"initial"}
                  whileHover={"hovered"}
                  className={`px-4 py-2.5 rounded-2xl text-sm relative leading-relaxed whitespace-pre-wrap ${
                    msg.role === "user"
                      ? "bg-primary max-w-[80%] text-primary-foreground rounded-br-sm"
                      : "w-full md:max-w-[80%] text-foreground rounded-bl-sm"
                  }`}
                >
                  {msg.parts.map((part, i) => {
                    switch (part.type) {
                      case "text":
                        return <span key={`part.text-${i}`}>{part.text}</span>;
                    }
                    switch (part.type) {
                      case "tool-questionsTools":
                        const toolpart = part as QuestionsPart;
                        if (!toolpart.input) return null;
                        if (toolpart.state !== "output-available") return null;

                        const StoreChoices = ({
                          id,
                          option,
                        }: {
                          id: string;
                          option: string;
                        }) => {
                          const updatedAnswers = { ...answers, [id]: option };

                          if (current === toolpart.input.questions.length - 1) {
                            const summary = toolpart.input.questions
                              .map((q) => `${q.question}: ${answers[q.id]}`)
                              .join("\n");
                            sendMessage({ text: summary });
                            setAnswers({});
                            setCurrent(0);
                          } else {
                            setAnswers(updatedAnswers);
                            setCurrent((prev) => prev + 1);
                          }
                        };

                        return (
                          <QuestionsBlock
                            onClick={({ id, option }) =>
                              StoreChoices({ id: id, option: option })
                            }
                            current={current}
                            key={i}
                            questions={toolpart.input.questions}
                          />
                        );
                    }
                  })}
                  <m.div
                    variants={{
                      initial: { opacity: 0 },
                      hovered: { opacity: 1 },
                    }}
                    transition={{ duration: 0.4 }}
                    className="absolute left-0 pt-1 text-muted-foreground  h-fit bottom-0 translate-y-full flex items-center "
                  >
                    <Button variant={"ghost"} size={"icon-sm"}>
                      <CopyIcon size={18} />
                    </Button>
                    <Button
                      onClick={() => regenerate({ messageId: msg.id })}
                      variant={"ghost"}
                      size={"icon-sm"}
                    >
                      <RefreshCcw size={18} />
                    </Button>
                  </m.div>
                </m.div>
              </m.div>
            ))}

            {/* Loading indicator */}
            {status === "submitted" && (
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
      <form
        onSubmit={(e) => {
          e.preventDefault();
          sendMessage({ text: input });
          setInput("");
        }}
        className="sticky bottom-0 w-full border-t border-border bg-line-gradient p-4"
      >
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
              type={
                status !== "submitted" && status !== "streaming"
                  ? "submit"
                  : "button"
              }
              onClick={() => {
                if (status === "streaming") {
                  stop();
                }
              }}
              disabled={!input.trim() && status !== "streaming"}
            >
              {status === "submitted" ? (
                <span className="flex items-center justify-center gap-2">
                  <ForwardIcon size={18} />
                  Sending...
                </span>
              ) : status === "streaming" ? (
                <span className="flex items-center justify-center gap-2">
                  <StopCircleIcon size={18} />
                  Stop
                </span>
              ) : (
                <span className="flex items-center justify-center gap-2">
                  <ForwardIcon size={18} />
                  Send
                </span>
              )}
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AthenaMainPage;
