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
  console.log("reached here--");
  res.send("✅ Morning brief executed manually!");
});

cron.schedule(
  "21 8 * * *",
  () => {
    console.log("⏰ Running daily 8:15AM job...");
    runMorningBrief();
  },
  {
    timezone: "Asia/Kolkata",
  }
);

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
