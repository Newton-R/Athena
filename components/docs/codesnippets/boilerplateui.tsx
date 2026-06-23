import { CodeSnippetBlock } from "@/components/ui/code-block";
import React from "react";

const code = `'use client'

import { useChat } from '@ai-sdk/react'
import { CopyIcon, ForwardIcon, Loader2Icon, RefreshCcw, StopCircleIcon } from 'lucide-react'
import { useState } from 'react'

export default function Chat() {
  const [input, setInput] = useState('')
  const { messages, sendMessage, status, stop, regenerate } = useChat()

  const isEmpty = messages.length === 0

  return (
    <div className='flex flex-col h-screen max-w-2xl mx-auto'>
      <div className='flex-1 overflow-y-auto px-4 py-6'>
        {isEmpty ? (
          <div className='h-full flex flex-col items-center justify-center gap-2 text-center'>
            <p className='text-2xl font-semibold'>What can I help with?</p>
            <p className='text-sm text-zinc-500'>Ask me anything to get started.</p>
          </div>
        ) : (
          <div className='flex flex-col gap-4'>
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={\`flex \${msg.role === 'user' ? 'justify-end' : 'justify-start'}\`}
              >
                <div
                  className={\`group relative px-4 py-2.5 rounded-2xl text-sm leading-relaxed max-w-[80%] whitespace-pre-wrap \${
                    msg.role === 'user'
                      ? 'bg-black text-white rounded-br-sm'
                      : 'bg-zinc-100 text-zinc-800 border border-zinc-200 rounded-bl-sm'
                  }\`}
                >
                  {msg.parts.map((part, i) =>
                    part.type === 'text' ? <span key={i}>{part.text}</span> : null
                  )}
                  <div className='absolute left-0 pt-1 bottom-0 translate-y-full flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                    <button className='p-1 text-zinc-400 hover:text-zinc-600'>
                      <CopyIcon size={14} />
                    </button>
                    <button
                      onClick={() => regenerate({ messageId: msg.id })}
                      className='p-1 text-zinc-400 hover:text-zinc-600'
                    >
                      <RefreshCcw size={14} />
                    </button>
                  </div>
                </div>
              </div>
            ))}

            {status === 'submitted' && (
              <div className='flex justify-start'>
                <div className='px-4 py-2.5 rounded-2xl rounded-bl-sm bg-zinc-100 border border-zinc-200 text-sm text-zinc-500 flex items-center gap-2'>
                  <Loader2Icon size={14} className='animate-spin' />
                  Thinking…
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault()
          sendMessage({ text: input })
          setInput('')
        }}
        className='border-t border-zinc-200 p-4'
      >
        <div className='border border-zinc-200 rounded-xl bg-white flex flex-col'>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder='Message Athena…'
            rows={1}
            className='w-full resize-none p-3 text-sm focus:outline-none min-h-11 max-h-40 leading-relaxed'
          />
          <div className='flex justify-end p-2'>
            <button
              type='submit'
              onClick={() => { if (status === 'streaming') stop() }}
              disabled={!input.trim() || status === 'submitted' || status === 'streaming'}
              className='bg-black text-white text-sm px-4 py-2 rounded-lg hover:bg-zinc-800 transition-colors disabled:opacity-40 flex items-center gap-2'
            >
              {status === 'submitted' ? (
                <><ForwardIcon size={14} /> Sending...</>
              ) : status === 'streaming' ? (
                <><StopCircleIcon size={14} /> Stop</>
              ) : (
                <><ForwardIcon size={14} /> Send</>
              )}
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}`;

export const Boilerplateui = () => {
  return <CodeSnippetBlock file="/app/page.tsx" children={code} />;
};

const sendMessageCode = `'use client';
import { useChat } from '@ai-sdk/react';

export const page = () => {
  const { sendMessage } = useChat();
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        sendMessage({ text: 'What is an AI agent ?' });
      }}
      className='border-t border-zinc-200 p-4'
    >
      <div className='border border-zinc-200 rounded-xl bg-white flex flex-col'>
        ......
        <div className='flex justify-end p-2'>
          <button
            type='submit'
            className='bg-black text-white text-sm px-4 py-2 rounded-lg hover:bg-zinc-800 transition-colors disabled:opacity-40 flex items-center gap-2'
          >
            Send
          </button>
        </div>
      </div>
    </form>
  )};
`;

export const SendMessageSnippet = () => {
  return <CodeSnippetBlock file="/app/page.tsx" children={sendMessageCode} />;
};

const UICode = `type UIMessage = {
  id: string;
  role: 'system' | 'user' | 'assistant';
  parts: Array<{
    type: string;
    text?: string;
  }>;
};`;
export const UIMessageType = () => {
  return <CodeSnippetBlock justview children={UICode} />;
};

const messageMap = `'use client';
import { useChat } from '@ai-sdk/react';

export const page = () => {
  const { messages } = useChat();
  return (
   <>
    ...................
    {messages.map((message) => (
        <div key={message.id}>
            <strong>{message.role}:</strong>

            {message.parts.map((part, index) =>
            part.type === "text" ? (
                <p key={index}>{part.text}</p>
            ) : null
            )}
        </div>
        ))}
    ...................
   </>
  )};`;

export const SampleMessagesMap = () => {
  return <CodeSnippetBlock justview children={messageMap} />;
};

const ButtonStates = `'use client';
import { useChat } from '@ai-sdk/react';

export const page = () => {
  const { status } = useChat();
  return (
   <>
    ...................
     <button
        type='submit'
        onClick={() => { if (status === 'streaming') stop() }}
        className='bg-black text-white text-sm px-4 '>
        {status === 'submitted' ? (
        <><ForwardIcon size={14} /> Sending...</>
        ) : status === 'streaming' ? (
        <><StopCircleIcon size={14} /> Stop</>
        ) : (
        <><ForwardIcon size={14} /> Send</>
        )}
    </button>
    ...................
   </>
  )};`;

export const ButtonStatesUI = () => {
  return <CodeSnippetBlock justview children={ButtonStates} />;
};
