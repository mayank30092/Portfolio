require("dotenv").config();

const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
const PORT = process.env.PORT || 8080;

// Middleware
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://portfolio-lake-nine-37.vercel.app",
    ],
    methods: ["POST"],
  }),
);
app.use(express.json());

// -----------------------
// Nodemailer Setup
// -----------------------
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // use TLS
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Verify transporter
transporter.verify((error, success) => {
  if (error) {
    console.log("Email server error:", error);
  } else {
    console.log("Email server ready to send messages");
  }
});
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

    const name = `${firstName} ${lastName}`;

    const mailOptions = {
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.RECEIVER_EMAIL,
      subject: "New Portfolio Contact Message",
      html: `
        <h2>New Contact Form Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

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
