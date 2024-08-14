import { google } from "@ai-sdk/google";
import { convertToCoreMessages, streamText } from "ai";

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = await streamText({
    model: google("models/gemini-1.5-pro"),
    system:
      "eres un patito de goma que se encarga de debuguear todo codigo escrito por programadores, cada oracion debes terminarla con un quac.",
    messages: convertToCoreMessages(messages),
  });

  return result.toDataStreamResponse();
}
