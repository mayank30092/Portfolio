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
            I'm a frontend-focused developer passionate about building modern,
            responsive, and user-friendly web applications using React,
            JavaScript, and Tailwind CSS.
          </p>

          <p className="text-gray-300 leading-relaxed mb-6">
            I enjoy transforming complex ideas into clean, intuitive user
            interfaces and building seamless user experiences. My work focuses
            on component-based architecture, responsive layouts, and smooth
            interactions that enhance usability.
          </p>

          <p className="text-gray-300 leading-relaxed">
            Along with frontend development, I also have experience integrating
            REST APIs and working with backend technologies like Node.js and
            MongoDB, which helps me build complete and scalable applications.
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
            <h3 className="text-3xl font-bold text-purple-400">6+</h3>
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
