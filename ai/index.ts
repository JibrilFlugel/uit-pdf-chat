import { openai } from "@ai-sdk/openai";
import { experimental_wrapLanguageModel as wrapLanguageModel } from "ai";
import { ragMiddleware } from "./rag-middleware";
import { GoogleGenAI } from "@google/genai";

export const customModel = wrapLanguageModel({
  model: openai("gpt-3.5-turbo"),
  middleware: ragMiddleware,
});

export const google = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
