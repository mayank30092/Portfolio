import { motion } from "framer-motion";

function About() {
  return (
    <section
      id="about"
      className="min-h-screen bg-black text-white px-6 md:px-20 py-24"
    >
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-center mb-16"
      >
        About Me
      </motion.h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side - Description */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            I'm a Full Stack MERN Developer who enjoys building scalable,
            real-world web applications with clean architecture and secure
            authentication systems.
          </p>

          <p className="text-gray-400 leading-relaxed mb-6">
            I have built platforms like a college event management system, a
            food redistribution platform to reduce wastage, and an
            Airbnb-inspired rental booking application — all fully deployed and
            production-ready.
          </p>

          <p className="text-gray-400 leading-relaxed">
            I focus on writing maintainable backend logic, designing RESTful
            APIs, managing databases efficiently, and creating responsive,
            user-friendly interfaces using modern frontend tools.
          </p>
        </motion.div>

        {/* Right Side - Highlights */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 gap-6"
        >
          <div className="bg-gray-900 p-6 rounded-2xl text-center border border-gray-800">
            <h3 className="text-3xl font-bold text-purple-400">5+</h3>
            <p className="text-gray-400 mt-2">Major Full Stack Projects</p>
          </div>

          <div className="bg-gray-900 p-6 rounded-2xl text-center border border-gray-800">
            <h3 className="text-3xl font-bold text-green-400">JWT</h3>
            <p className="text-gray-400 mt-2">Authentication Systems</p>
          </div>

          <div className="bg-gray-900 p-6 rounded-2xl text-center border border-gray-800">
            <h3 className="text-3xl font-bold text-yellow-400">REST</h3>
            <p className="text-gray-400 mt-2">API Architecture</p>
          </div>

          <div className="bg-gray-900 p-6 rounded-2xl text-center border border-gray-800">
            <h3 className="text-3xl font-bold text-blue-400">Deploy</h3>
            <p className="text-gray-400 mt-2">Cloud Deployment Ready</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
