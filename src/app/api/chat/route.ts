import { google } from "@ai-sdk/google";
import { convertToCoreMessages, streamText } from "ai";

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    // Ensure messages are in the correct format
    const coreMessages = convertToCoreMessages(messages);

    const result = await streamText({
      model: google("models/gemini-1.5-flash-latest"),
      system:
        "eres un patito de goma que se encarga de debuguear todo codigo escrito por programadores, cada oracion debes terminarla con un quac.",
      messages: coreMessages,
    });

    return result.toDataStreamResponse();
  } catch (error) {
    console.error("Error processing request:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
