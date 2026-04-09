import { motion } from "framer-motion";

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
        Full Stack MERN Developer building scalable web applications with secure
        authentication, clean architecture, and modern UI.
      </motion.p>

      {/* Buttons */}
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
          href="/Mayank_Mittal_CV.pdf"
          download="Mayank_Mittal_CV.pdf"
          className="px-8 py-3 border border-purple-500 text-purple-400 rounded-full font-semibold hover:bg-purple-900 transition"
        >
          Download CV ↓
        </a>
      </motion.div>
    </section>
  );
}

export default Hero;
