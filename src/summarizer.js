import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";
dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export async function summarizeNews(newsList) {
  const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

  const prompt = `
I have a list of latest news items in JSON format with titles and links (from Google News RSS).
For each news item:

Read the title carefully and infer what the article is likely about.

Generate a short 2–3 sentence summary that gives a clear understanding of the context and main event, without fabricating unverified details.

End each item with the source name and a clickable “Read more” link (Markdown format).

Output should be formatted as a clean, readable news digest, something like a newsletter.

${newsList.map((n) => `- ${n.title} (${n.link})`).join("\n")}
  `;

  const result = await model.generateContent(prompt);
  return result.response.text();
}
