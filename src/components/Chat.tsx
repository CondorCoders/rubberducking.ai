"use client";

import { useChat } from "ai/react";
import { Message } from "./Message";

export const Chat = () => {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <div className="flex-1 flex flex-col justify-between">
      <div className="flex flex-col gap-4">
        {messages.map((message) => (
          <Message
            key={message.id}
            role={message.role}
            content={message.content}
          />
        ))}
      </div>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="prompt"
          value={input}
          onChange={handleInputChange}
        />
        <button type="submit">Submitir</button>
      </form>
    </div>
  );
};
