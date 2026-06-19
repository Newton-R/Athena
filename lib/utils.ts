import {
  createGoogleGenerativeAI,
  GoogleGenerativeAIProvider,
} from "@ai-sdk/google";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const google = createGoogleGenerativeAI({
  apiKey: `${process.env.NEXT_PUBLIC_GOOGLE_GENERATIVE_AI_API_KEY}`,
});
