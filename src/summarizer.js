import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";

dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export async function summarizeNews(prompt, newsList) {
  const model = genAI.getGenerativeModel({ model: process.env.GEMINI_MODEL });

  const llm_prompt = `${prompt}


 ${
   Array.isArray(newsList)
     ? newsList.map((n) => `- ${n.title} (${n.link})`).join("\n")
     : newsList
 }`;
  const result = await model.generateContent(llm_prompt);
  return result.response.text();
}
