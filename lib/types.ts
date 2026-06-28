export interface Question {
  question: string;
  options: string[];
  id: string;
}

export interface AskedQuestions {
  questions: Question[];
}

export interface QuestionsPart {
  input: {
    questions: Question[];
  };
  state:
    | "output-available"
    | "input-available"
    | "input-streaming"
    | "output-error";
}
