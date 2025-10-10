import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";
import { NEWS_SUMMARY_PROMPT } from "./constants/prompts.js";

dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export async function summarizeNews(newsList) {
  const model = genAI.getGenerativeModel({ model: process.env.GEMINI_MODEL });

  const prompt = `${NEWS_SUMMARY_PROMPT}

${newsList.map((n) => `- ${n.title} (${n.link})`).join("\n")}`;

  const result = await model.generateContent(prompt);
  return result.response.text();
}
