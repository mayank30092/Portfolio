import { motion } from "framer-motion";
import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setSuccess(true);
        setErrorMsg("");

        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
        });

        setTimeout(() => setSuccess(false), 4000);
      } else {
        setErrorMsg(data.status || "Something went wrong");
        setTimeout(() => setErrorMsg(""), 4000);
      }
    } catch (err) {
      setErrorMsg("Server error. Please try again later.");
      setTimeout(() => setErrorMsg(""), 4000);
    }

    setLoading(false);
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-black text-white flex items-center justify-center px-6 py-20"
    >
      <div className="max-w-4xl w-full">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-4"
        >
          Contact Me
        </motion.h2>

        <p className="text-center text-gray-400 mb-12">
          Have a project idea or collaboration opportunity? Let's build
          something amazing together.
        </p>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-gray-900 border border-gray-800 p-8 rounded-2xl shadow-lg space-y-6"
        >
          {/* Name */}
          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              disabled={loading}
              required
              className="bg-gray-800 p-3 rounded-lg outline-none focus:ring-2 focus:ring-purple-600 disabled:opacity-50"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              disabled={loading}
              required
              className="bg-gray-800 p-3 rounded-lg outline-none focus:ring-2 focus:ring-purple-600 disabled:opacity-50"
            />
          </div>

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            disabled={loading}
            required
            className="w-full bg-gray-800 p-3 rounded-lg outline-none focus:ring-2 focus:ring-purple-600 disabled:opacity-50"
          />

          {/* Phone */}
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            disabled={loading}
            className="w-full bg-gray-800 p-3 rounded-lg outline-none focus:ring-2 focus:ring-purple-600 disabled:opacity-50"
          />

          {/* Message */}
          <textarea
            rows="5"
            name="message"
            placeholder="Write your message..."
            value={formData.message}
            onChange={handleChange}
            disabled={loading}
            required
            maxLength={1000}
            className="w-full bg-gray-800 p-3 rounded-lg outline-none focus:ring-2 focus:ring-purple-600 disabled:opacity-50"
          />

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-purple-600 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {/* Success */}
          {success && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-green-400 text-center font-medium"
            >
              Message sent successfully 🚀
            </motion.p>
          )}

          {/* Error */}
          {errorMsg && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-red-400 text-center font-medium"
            >
              {errorMsg}
            </motion.p>
          )}
        </motion.form>
      </div>
    </section>
  );
}

export default Contact;
