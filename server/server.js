require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { Resend } = require("resend");

const app = express();
const PORT = process.env.PORT || 8080;
const resend = new Resend(process.env.RESEND_API_KEY);

// Middleware
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://portfolio-lake-nine-37.vercel.app",
    ],
    methods: ["GET", "POST"],
  }),
);
app.use(express.json());

/*---------------------------
Health API
----------------------------*/
app.get("/health", (req, res) => {
  res.send("Server running");
});

// -----------------------
// Contact API Route
// -----------------------
app.post("/contact", async (req, res) => {
  try {
    const { firstName, lastName, email, phone, message } = req.body;

    // Basic validation
    if (!firstName || !lastName || !email || !message) {
      return res.status(400).json({
        code: 400,
        status: "Missing required fields",
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

    res.status(200).json({
      code: 200,
      status: "Message sent successfully",
    });
  } catch (error) {
    console.error("Email error:", error);
    res.status(500).json({
      code: 500,
      status: "Error sending email",
    });
  }
});

// -----------------------
// Server Start
// -----------------------
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
