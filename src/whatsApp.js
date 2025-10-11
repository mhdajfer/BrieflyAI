import twilio from "twilio";

const getDefaultRecipients = () => {
  const numbers = process.env.WHATSAPP_RECIPIENTS;
  if (!numbers) {
    throw new Error(
      "WHATSAPP_RECIPIENTS not configured in environment variables"
    );
  }
  return numbers.split(",").map((number) => number.trim());
};

export default async function sendWhatsApp(
  content,
  toNumbers = getDefaultRecipients()
) {
  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.env.TWILIO_CLIENT;
  const client = twilio(accountSid, authToken);

  console.log("📱 Starting WhatsApp message delivery...");

  try {
    const messages = await Promise.all(
      toNumbers.map(async (number) => {
        const message = await client.messages.create({
          from: process.env.TWILIO_WHATSAPP_FROM,
          to: `whatsapp:${number}`,
          body: content,
        });
        console.log(`✅ Message sent to ${number}`);
        return message.sid;
      })
    );
    return messages;
  } catch (error) {
    console.error("❌ Error while sending WhatsApp message:", error.message);
    throw error;
  }
}
