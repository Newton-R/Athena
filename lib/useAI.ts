import { generateText } from "ai";
import "dotenv/config";
import { google } from "./utils";

export const useAI = () => {
  const generate = async ({ prompt }: { prompt: string }) => {
    const { text } = await generateText({
      model: google("gemini-3.1-flash-lite-preview"),
      prompt: prompt,
    });

    return text;
  };
  return { generate };
};
