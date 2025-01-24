import { openai } from "@ai-sdk/openai";
import { experimental_wrapLanguageModel as wrapLanguageModel } from "ai";
import { ragMiddleware } from "./rag-middleware";
import { createOllama } from "ollama-ai-provider";

export const customModel = wrapLanguageModel({
  model: openai("gpt-3.5-turbo"),
  middleware: ragMiddleware,
});

export const ollama = createOllama({
  baseURL: `${process.env.OLLAMA_BASE_URL}/api` || "http://localhost:11434/api",
});
