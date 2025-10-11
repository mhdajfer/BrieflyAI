import { fetchAINews } from "./newsFetcher.js";
import { summarizeNews } from "./summarizer.js";
import { sendEmail } from "./emailer.js";
import sendWhatsApp from "./whatsApp.js";
import {
  BRIEF_SUMMARY_PROMPT,
  NEWS_SUMMARY_PROMPT,
} from "./constants/prompts.js";

export async function runMorningBrief() {
  try {
    console.log("🌅 Fetching latest AI news...");
    const news = await fetchAINews();

    console.log("🤖 Summarizing with Gemini...");
    const summary = await summarizeNews(NEWS_SUMMARY_PROMPT, news);

    console.log("📨 Sending email...");
    await sendEmail(summary);

    const whatsappSummary = await summarizeNews(BRIEF_SUMMARY_PROMPT, summary);

    await sendWhatsApp(whatsappSummary);

    console.log("📰 Morning brief sent successfully!");
  } catch (error) {
    console.error("❌ Error during morning brief:", error.message);
  }
}
