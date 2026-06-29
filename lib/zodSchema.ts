import z from "zod";

export const AIQuestionsSchema = z.object({
  questions: z.array(
    z.object({
      question: z.string().describe("Question about project to be answered"),
      options: z.array(
        z.string().describe("Answer helpers related to the question asked"),
      ),
      id: z.string().describe("Unique identifier for each question"),
    }),
  ),
});

export const AIQuestionsOutputSchema = z.object({
  answers: z.array(
    z.object({
      id: z.string().describe("Unique id of the question answered"),
      answer: z.string().describe("Answer choosen by student"),
    }),
  ),
});

export const ProjectOverviewSchema = z.object({
  goals_data: z.object({
    problem_statement: z.string().describe("Understood problem statement"),
    product_vision: z
      .string()
      .describe("The goal the vision behind the project"),
    goals: z.array(z.string()),
    success_metric: z.array(z.string()),
  }),
});
