import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
} from "react-icons/fa";

import {
  SiMongodb,
  SiJavascript,
  SiTailwindcss,
  SiExpress,
  SiPostman,
  SiGithub,
  SiMysql,
} from "react-icons/si";

function Skills() {
  const categories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React.js", icon: <FaReact className="text-blue-400" /> },
        {
          name: "JavaScript",
          icon: <SiJavascript className="text-yellow-400" />,
        },
        { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
        { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
        {
          name: "Tailwind CSS",
          icon: <SiTailwindcss className="text-cyan-400" />,
        },
        {
          name: "Bootstrap",
          icon: <FaBootstrap className="text-purple-500" />,
        },
      ],
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
        { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
        { name: "REST APIs", icon: <SiPostman className="text-orange-500" /> },
        {
          name: "JWT Auth",
          icon: <SiJavascript className="text-yellow-400" />,
        },
      ],
    },
    {
      title: "Database & Cloud",
      skills: [
        { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
        { name: "SQL", icon: <SiMysql className="text-green-500" /> },
      ],
    },
    {
      title: "Tools",
      skills: [
        { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
        { name: "GitHub", icon: <SiGithub className="text-white" /> },
        { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="min-h-screen bg-black text-white px-6 md:px-20 py-24"
    >
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-center mb-16"
      >
        Tech Stack
      </motion.h2>

      {/* Categories */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        {categories.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="bg-gray-900 p-8 rounded-2xl border border-gray-800 hover:border-purple-500 transition"
          >
            <h3 className="text-2xl font-semibold text-purple-400 mb-6">
              {category.title}
            </h3>

            <div className="grid grid-cols-2 gap-4">
              {category.skills.map((skill, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 bg-gray-800 p-3 rounded-lg hover:bg-purple-600 transition"
                >
                  <span className="text-xl">{skill.icon}</span>
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Highlights */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center mt-20 space-y-3"
      >
        <h3 className="text-2xl font-semibold text-green-400">Highlights</h3>
        <p className="text-gray-400">✔ Solved 250+ DSA Problems</p>
        <p className="text-gray-400">✔ Built 5+ Full Stack Projects</p>
        <p className="text-gray-400">
          ✔ Strong in REST APIs & Authentication Systems
        </p>
      </motion.div>
    </section>
  );
}

export default Skills;
