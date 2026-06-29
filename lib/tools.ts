import { tool } from "ai";
import {
  AIQuestionsOutputSchema,
  AIQuestionsSchema,
  ProjectOverviewSchema,
} from "./zodSchema";

export const askProjectQuestions = tool({
  description:
    "This generate questions based on the project to improve project understanding",
  outputSchema: AIQuestionsOutputSchema,
  inputSchema: AIQuestionsSchema,
  execute: async () => {
    return null;
  },
});

export const projectOverviewGeneration = tool({
  description:
    "This generates a clear description about what the project is about and it's goals.",
  inputSchema: ProjectOverviewSchema,
  execute: async () => {
    return null;
  },
});
