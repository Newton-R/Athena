"use client";
import { useChat } from "@ai-sdk/react";

export const page = () => {
  const { sendMessage } = useChat();
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        sendMessage({ text: "What is an AI agent ?" });
      }}
      className="border-t border-zinc-200 p-4"
    >
      <div className="border border-zinc-200 rounded-xl bg-white flex flex-col">
        ......
        <div className="flex justify-end p-2">
          <button
            type="submit"
            className="bg-black text-white text-sm px-4 py-2 rounded-lg hover:bg-zinc-800 transition-colors disabled:opacity-40 flex items-center gap-2"
          >
            Send
          </button>
        </div>
      </div>
    </form>
  );
};
