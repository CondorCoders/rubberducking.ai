"use client";

import { useChat } from "ai/react";
import { Message } from "./Message";
import { useEffect, useRef } from "react";
import ReactTextareaAutosize from "react-textarea-autosize";
import { Send } from "@/icons/send";

export const Chat = () => {
  const { messages, input, handleInputChange, handleSubmit, isLoading } =
    useChat();
  const messageContainer = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (messageContainer.current) {
      messageContainer.current.scrollTop =
        messageContainer.current.scrollHeight;
    }
  }, [messages]);

  return (
    <>
      <div
        ref={messageContainer}
        className="flex-1 flex flex-col items-center overflow-y-auto"
      >
        <div className="w-full px-5 max-w-4xl flex flex-col gap-4">
          {messages.map((message) => (
            <Message
              key={message.id}
              role={message.role}
              content={message.content}
              isLoading={isLoading}
            />
          ))}
        </div>
      </div>
      <div className="w-full max-w-2xl mx-auto p-5">
        <form
          className=" p-3 pl-6 rounded-lg bg-slate-100 flex justify-center items-center"
          onSubmit={handleSubmit}
        >
          <ReactTextareaAutosize
            className="w-full bg-transparent resize-none"
            maxRows={3}
            name="prompt"
            value={input}
            onChange={handleInputChange}
            placeholder="Escribe tus dudas aquí..."
          />
          <button
            type="submit"
            className="size-9 transition-colors hover:bg-slate-200 rounded-full flex items-center justify-center"
          >
            <Send />
          </button>
        </form>
      </div>
    </>
  );
};
