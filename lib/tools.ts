import { tool } from "ai";
import { AIQuestionsOutputSchema, AIQuestionsSchema } from "./zodSchema";

export const askProjectQuestions = tool({
  description:
    "Call this when you want to ask the user questions about the project ",
  outputSchema: AIQuestionsOutputSchema,
  inputSchema: AIQuestionsSchema,
  execute: async () => {
    return null;
  },
});
