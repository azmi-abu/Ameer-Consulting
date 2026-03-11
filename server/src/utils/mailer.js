import axios from "axios";

export async function sendLeadEmail({ name, phone, email, subject }) {
  const apiKey = process.env.BREVO_API_KEY;
  const toEmail = process.env.LEADS_TO_EMAIL;
  const fromEmail = process.env.MAIL_FROM;

  if (!apiKey) throw new Error("Missing BREVO_API_KEY in env");
  if (!toEmail) throw new Error("Missing LEADS_TO_EMAIL in env");
  if (!fromEmail) throw new Error("Missing MAIL_FROM in env");

  const mailSubject = `📩 פנייה חדשה מאתר Ameer Consulting - ${phone}`;

  const htmlContent = `
    <div style="font-family: Arial, sans-serif; direction: rtl; text-align: right; line-height: 1.8;">
      <h2>📩 פנייה חדשה התקבלה</h2>
      <p><b>שם מלא:</b> ${name}</p>
      <p><b>טלפון:</b> ${phone}</p>
      <p><b>אימייל:</b> ${email || "לא הוזן"}</p>
      <p><b>נושא:</b> ${subject || "צור קשר"}</p>
      <p style="color:#666">
        <b>זמן:</b> ${new Date().toLocaleString("he-IL", { timeZone: "Asia/Jerusalem" })}
      </p>
    </div>
  `;

  const payload = {
    sender: { name: "Ameer Consulting", email: fromEmail },
    to: [{ email: toEmail }],
    subject: mailSubject,
    htmlContent,
  };

  if (email) {
    payload.replyTo = { email };
  }

  await axios.post("https://api.brevo.com/v3/smtp/email", payload, {
    headers: {
      "api-key": apiKey,
      "content-type": "application/json",
      accept: "application/json",
    },
    timeout: 15000,
  });
}