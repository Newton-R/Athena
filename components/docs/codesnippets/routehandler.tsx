import { CodeSnippetBlock } from "@/components/ui/code-block";
import React from "react";

export const RoutehandlerCodeSnippet = () => {
  return (
    <CodeSnippetBlock
      children={`import { convertToModelMessages, streamText, UIMessage } from "ai";
import { NextRequest } from "next/server";
import { google } from "@ai-sdk/google";

export async function POST(req: NextRequest) {
  const { messages }: { messages: UIMessage[] } = await req.json();

  const result = streamText({
    model: google("gemini-3.1-flash-lite-preview"),
    messages: await convertToModelMessages(messages),
  });

  return result.toUIMessageStreamResponse();
}
`}
    ></CodeSnippetBlock>
  );
};
