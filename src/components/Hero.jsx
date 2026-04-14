import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center bg-black text-white px-6"
    >
      {/* Name */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-7xl font-extrabold leading-tight"
      >
        Hi, I'm{" "}
        <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
          Mayank Mittal
        </span>
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-6 text-lg md:text-xl text-gray-400 max-w-2xl"
      >
        Frontend Developer specializing in building modern, responsive web
        applications with React, JavaScript, and Tailwind CSS. Passionate about
        creating clean UI, smooth user experiences, and scalable frontend
        architectures.
      </motion.p>

      {/* Main Buttons */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-10 flex flex-col sm:flex-row gap-4"
      >
        <a
          href="#projects"
          className="px-8 py-3 bg-purple-600 rounded-full font-semibold hover:bg-purple-700 transition"
        >
          View My Work
        </a>

        <a
          href="#contact"
          className="px-8 py-3 border border-gray-600 rounded-full font-semibold hover:bg-gray-800 transition"
        >
          Contact Me
        </a>

        <a
          href="/MayankMittal_Frontend.pdf"
          download="Mayank_Mittal_Resume.pdf"
          className="px-8 py-3 border border-purple-500 text-purple-400 rounded-full font-semibold hover:bg-purple-900 transition"
        >
          Download CV ↓
        </a>
      </motion.div>

      {/* Social Links */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="flex gap-6 mt-8 text-3xl"
      >
        <a
          href="https://github.com/mayank30092"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-purple-400 transition"
        >
          <FaGithub />
        </a>

        <a
          href="https://linkedin.com/in/mayankmittal30092"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://leetcode.com/Mayankmittal3009"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-yellow-400 transition"
        >
          <SiLeetcode />
        </a>
      </motion.div>
    </section>
  );
}

export default Hero;
