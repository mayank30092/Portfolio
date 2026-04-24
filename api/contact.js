import { Resend } from "resend";
import { rateLimit } from "../lib/rateLimit.js";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      code: 405,
      status: "Method not allowed",
    });
  }

  const ip =
    req.headers["x-forwarded-for"]?.split(",")[0]?.trim() ||
    req.socket?.remoteAddress ||
    "unknown";

  const allowed = rateLimit(ip);

  if (!allowed) {
    return res.status(429).json({
      code: 429,
      status: "Too many requests. Please try again later.",
    });
  }

  try {
    const { firstName, lastName, email, phone, message } = req.body;

    // Validation
    if (!firstName || !lastName || !email || !message) {
      return res.status(400).json({
        code: 400,
        status: "Missing required fields",
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        code: 400,
        status: "Invalid email format",
      });
    }

    if (message.length > 1000) {
      return res.status(400).json({
        code: 400,
        status: "Message too long (max 1000 characters)",
      });
    }

    const name = `${firstName} ${lastName}`;

    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: process.env.RECEIVER_EMAIL,
      subject: "New Portfolio Contact Message",
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return res.status(200).json({
      code: 200,
      status: "Message sent successfully",
    });
  } catch (error) {
    console.error("Email error:", error);

    return res.status(500).json({
      code: 500,
      status: "Error sending email",
    });
  }
}
