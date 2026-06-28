"use client";
import { Question } from "@/lib/types";
import React, { useState } from "react";
import { useChat } from "@ai-sdk/react";
import { motion as m } from "motion/react";

const QuestionsBlock = ({
  questions,
  onClick,
  current,
}: {
  questions?: Question[];
  onClick: ({ id, option }: { id: string; option: string }) => void;
  current: number;
}) => {
  if (!questions) {
    return <p>No questions found</p>;
  }

  return (
    <div className="rounded-xl p-4 bg-lite-secondary mb-3 pb-5">
      {questions?.map(
        (question, i) =>
          current === i && (
            <div key={question.id} className="flex flex-col gap-2">
              <p>{question.question}</p>
              <div className="mt-2 grid gap-2 grid-cols-1 md:grid-cols-2 w-full">
                {question?.options.map((ans, i) => (
                  <m.div
                    whileTap={{ scale: 0.99 }}
                    onClick={() => onClick({ id: question.id, option: ans })}
                    key={i}
                    className="p-3 border cursor-pointer border-border rounded-md bg-background hover:bg-lite-secondary "
                  >
                    {ans}
                  </m.div>
                ))}
              </div>
              <div className="mt-2 text-xs text-muted-foreground">
                <p>
                  Questions :{" "}
                  <span className="text-black">
                    {current + 1} / {questions.length}
                  </span>
                </p>
              </div>
            </div>
          ),
      )}
    </div>
  );
};

export default QuestionsBlock;
