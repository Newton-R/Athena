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
