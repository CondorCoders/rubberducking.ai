"use client";

import { useChat } from "ai/react";
import { Message } from "./Message";
import { useEffect, useRef } from "react";
import ReactTextareaAutosize from "react-textarea-autosize";
import { Send } from "@/icons/Send";
import Image from "next/image";
import Link from "next/link";

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
          {(!messages || !messages.length) && (
            <div className="w-full h-full flex flex-col items-center gap-6">
              <Image
                alt={`Patricio Profile Pic`}
                className="aspect-square"
                width={80}
                height={80}
                src="/Patricio.png"
              />
              <p className="text-center w-full lg:w-2/3 lg:text-lg">
                ¡Hola! Soy <strong>Patricio</strong>, tu asistente IA y
                compañero de desarrollo. Piensa en mí como un patito de goma,
                pero con habilidades para resolver problemas técnicos, depurar
                código y optimizar procesos, siempre con un toque de humor.
              </p>
            </div>
          )}

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
      <div className="w-full max-w-2xl mx-auto p-5 text-center">
        <form
          className="p-3 pl-6 rounded-lg bg-slate-100 flex justify-center items-center mb-4"
          onSubmit={handleSubmit}
        >
          <ReactTextareaAutosize
            className="w-full bg-transparent resize-none"
            maxRows={3}
            name="prompt"
            value={input}
            onChange={handleInputChange}
            placeholder="Escribe tus dudas aquí..."
            disabled={isLoading}
          />
          <button
            disabled={isLoading}
            type="submit"
            className="size-9 transition-colors hover:bg-slate-200 rounded-full flex items-center justify-center"
          >
            <Send />
          </button>
        </form>
        <p className="text-sm">
          Creado con ❤️ por{" "}
          <Link
            href="https://github.com/CondorCoders"
            className="font-bold underline"
          >
            CondorCoders
          </Link>
        </p>
      </div>
    </>
  );
};
