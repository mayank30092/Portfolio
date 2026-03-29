import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { SiMongodb, SiJavascript, SiTailwindcss } from "react-icons/si";

function Skills() {
  const categories = [
    {
      title: "Frontend Development",
      icon: <FaReact className="text-blue-400 text-2xl" />,
      skills: [
        "React.js",
        "JavaScript (ES6+)",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "Bootstrap",
        "React Router",
        "Context API",
      ],
    },
    {
      title: "Backend Development",
      icon: <FaNodeJs className="text-green-500 text-2xl" />,
      skills: [
        "Node.js",
        "Express.js",
        "RESTful APIs",
        "JWT Authentication",
        "Session-Based Auth",
        "MVC Architecture",
        "Multer",
      ],
    },
    {
      title: "Database & Cloud",
      icon: <SiMongodb className="text-green-400 text-2xl" />,
      skills: [
        "MongoDB",
        "Mongoose ODM",
        "MongoDB Atlas",
        "Cloudinary",
        "Render Deployment",
      ],
    },
    {
      title: "Tools & Others",
      icon: <FaGitAlt className="text-orange-500 text-2xl" />,
      skills: [
        "Git",
        "GitHub",
        "Postman",
        "API Integration",
        "Leaflet.js",
        "Responsive Design",
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="min-h-screen bg-black text-white px-6 md:px-20 py-24"
    >
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-center mb-16"
      >
        Expertise & Technologies
      </motion.h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        {categories.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            whileHover={{ scale: 1.03 }}
            className="bg-gray-900 p-8 rounded-2xl border border-gray-800 hover:border-purple-500 transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-6">
              {category.icon}
              <h3 className="text-2xl font-semibold text-purple-400">
                {category.title}
              </h3>
            </div>

            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill, i) => (
                <span
                  key={i}
                  className="px-4 py-2 bg-gray-800 rounded-full text-sm text-gray-300 hover:bg-purple-600 hover:text-white transition duration-300"
                >
                  {skill}
                </span>
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
