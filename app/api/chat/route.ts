import { convertToModelMessages, stepCountIs, streamText, UIMessage } from "ai";
import { NextRequest } from "next/server";
import { google } from "@ai-sdk/google";
import { askProjectQuestions, projectOverviewGeneration } from "@/lib/tools";
import { athena } from "@/lib/athena";

export async function POST(req: NextRequest) {
  const { messages }: { messages: UIMessage[] } = await req.json();

  const result = streamText({
    model: google("gemini-3.1-flash-lite-preview"),
    messages: await convertToModelMessages(messages),
    system: athena,
    tools: {
      questionsTools: askProjectQuestions,
      projectOverview: projectOverviewGeneration,
    },
    stopWhen: stepCountIs(5),
    onError: (err) => {
      console.log(err);
    },
  });

  return result.toUIMessageStreamResponse();
}
