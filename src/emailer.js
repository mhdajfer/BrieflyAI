import nodemailer from "nodemailer";
import dotenv from "dotenv";
import { marked } from "marked";
dotenv.config();

export async function sendEmail(summary) {
  const htmlContent = marked(summary);

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: `"AI Morning Berief" <${process.env.EMAIL_USER}>`,
    to: process.env.TO_EMAIL,
    subject: `🌞 AI Morning Brief - ${new Date().toLocaleDateString()}`,
    html: htmlContent,
  });

  console.log("✅ Email sent successfully!");
}
