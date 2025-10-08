# 🌞 BrieflyAI

**BrieflyAI** is a Node.js application that automatically fetches the latest **AI & tech news**, summarizes them using **Google Gemini AI**, and delivers a short **daily morning briefing via email**. Perfect for staying updated on AI without spending hours reading multiple sources.  

---

## 📰 Features

- Fetches top AI news from **Google News RSS**  
- Summarizes headlines using **Gemini AI (free tier)**  
- Sends **daily updates at 7 AM** automatically  
- Built with **Node.js**, **Express**, **Node-Cron**, and **Nodemailer**  
- Optional **WhatsApp delivery** integration  

---

## ⚡ Tech Stack

- Node.js  
- Express.js  
- Google Gemini AI (`@google/generative-ai`)  
- RSS Parser (`rss-parser`)  
- Node Cron (`node-cron`)  
- Nodemailer  
- dotenv  

---

## 💻 Installation

1. Clone the repo:
```bash
git clone https://github.com/<your-username>/BrieflyAI.git
cd BrieflyAI
````

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the root with the following:

```env
PORT=3000
GEMINI_API_KEY=your_gemini_api_key_here
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_gmail_app_password
TO_EMAIL=receiver_email@gmail.com
```

> Use a **Gmail App Password** for `EMAIL_PASS`.

---

## 🚀 Usage

* **Start server:**

```bash
npm start
```

* **For development with auto-reload:**

```bash
npm run dev
```

* **Manual trigger for testing:**
  Visit `http://localhost:3000/run` in your browser to fetch, summarize, and send the morning brief immediately.

* The daily **7 AM briefing** runs automatically via **Node-Cron**.

---

## 📂 Project Structure

```
BrieflyAI/
│
├── server.js            # Entry point
├── package.json
├── .env                 # Environment variables
├── .gitignore
└── src/
    ├── newsFetcher.js   # Fetch Google News RSS
    ├── summarizer.js    # Summarize headlines with Gemini
    ├── emailer.js       # Send email
    └── morningBrief.js  # Combine logic & run daily
```

---

## 💡 Future Improvements

* Add **WhatsApp delivery** via Green API or Twilio
* Customize **news categories** (AI, tech, business, etc.)
* Add **user subscriptions** for multiple recipients
* Include **images or links** in the summary

---

