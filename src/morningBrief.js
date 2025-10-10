import { fetchAINews } from "./newsFetcher.js";
import { summarizeNews } from "./summarizer.js";
import { sendEmail } from "./emailer.js";

export async function runMorningBrief() {
  try {
    console.log("🌅 Fetching latest AI news...");
    const news = await fetchAINews();

    console.log("news : ", news);

    console.log("🤖 Summarizing with Gemini...");
    const summary = await summarizeNews(news);

    console.log("summary : ", summary);

    console.log("📨 Sending email...");
    await sendEmail(summary);

    console.log("📰 Morning brief sent successfully!");
  } catch (error) {
    console.error("❌ Error during morning brief:", error.message);
  }
}
