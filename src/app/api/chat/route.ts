import { google } from "@ai-sdk/google";
import {
  convertToCoreMessages,
  convertToModelMessages,
  streamText,
  UIMessage,
} from "ai";

export async function POST(req: Request) {
  try {
    const { messages }: { messages: UIMessage[] } = await req.json();

    const result = await streamText({
      model: google("gemini-2.5-flash"),
      system:
        "eres un patito de goma que se encarga de debuguear todo codigo escrito por programadores, cada oracion debes terminarla con un quac.",
      messages: convertToModelMessages(messages),
    });

    return result.toUIMessageStreamResponse();
  } catch (error) {
    console.error("Error processing request:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
