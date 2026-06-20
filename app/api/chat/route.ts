import { google } from "@ai-sdk/google";
import {
  convertToModelMessages,
  generateText,
  streamText,
  UIMessage,
} from "ai";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { messages }: { messages: UIMessage[] } = await req.json();

  const result = streamText({
    model: google("gemini-3.1-flash-lite-preview"),
    messages: await convertToModelMessages(messages),
  });

  return result.toUIMessageStreamResponse();
}
