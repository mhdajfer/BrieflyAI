import express from "express";
import cron from "node-cron";
import dotenv from "dotenv";
import { runMorningBrief } from "./src/morningBrief.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Home route
app.get("/", (req, res) => {
  res.send("🌞 AI Morning Brief Server Running!");
});

// Manual trigger for testing
app.get("/run", async (req, res) => {
  await runMorningBrief();
  console.log("reached here--");
  res.send("✅ Morning brief executed manually!");
});

// Schedule: Every day at 7:00 AM
cron.schedule("0 7 * * *", () => {
  console.log("⏰ Running daily 7AM job...");
  runMorningBrief();
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
