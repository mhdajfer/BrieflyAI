import express from "express";
import cron from "node-cron";
import dotenv from "dotenv";
import { runMorningBrief } from "./src/morningBrief.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("🌞 AI Morning Brief Server Running!");
});

app.get("/run", async (req, res) => {
  await runMorningBrief();
  res.send("✅ Morning brief executed manually!");
});

cron.schedule(
  process.env.CRON_JOB_TIME,
  () => {
    console.log("⏰ Running daily 8:15AM job...");
    runMorningBrief();
  },
  {
    timezone: process.env.CRON_JOB_TIMEZONE,
  }
);

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
