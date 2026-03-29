import { motion } from "framer-motion";

function Projects() {
  const projects = [
    {
      title: "ShareBite",
      description:
        "Food redistribution platform connecting restaurants with NGOs. Includes JWT auth, role-based access, Leaflet map integration, and donation tracking.",
      tech: ["React", "Node.js", "Express", "MongoDB", "JWT", "Leaflet"],
      metrics:
        "Reduced food wastage workflow • Real-time listings • Secure Auth",
      live: "https://sharebite-d393.onrender.com",
      github: "https://github.com/mayank30092/sharebite",
    },
    {
      title: "UniVerse",
      description:
        "College event management platform with student/admin roles, certificate generation, and admin dashboard.",
      tech: ["React", "Node.js", "MongoDB", "JWT", "Tailwind CSS"],
      metrics:
        "Role-based auth • Event lifecycle management • Dashboard analytics",
      live: "https://universe-ijwi.onrender.com",
      github: "https://github.com/mayank30092/universe",
    },
    {
      title: "Smart Recipe Generator",
      description:
        "Recipe search app with image classification using Clarifai API and dynamic ingredient scaling.",
      tech: ["React", "Node.js", "Express", "MongoDB", "Clarifai API"],
      metrics: "AI-powered classification • Dynamic serving logic",
      live: "https://smart-recipe-generator-amber.vercel.app",
      github: "https://github.com/mayank30092/smart-recipe-generator",
    },
    {
      title: "WanderLust",
      description:
        "Airbnb-inspired rental platform with CRUD operations, Cloudinary uploads, and session-based authentication.",
      tech: ["Node.js", "Express", "MongoDB Atlas", "EJS", "Cloudinary"],
      metrics: "Full CRUD • Cloud storage integration • REST architecture",
      live: "https://wanderlust-s3l7.onrender.com/listings",
      github: "https://github.com/mayank30092/wanderlust",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen bg-black text-white px-6 md:px-20 py-24"
    >
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-center mb-20"
      >
        Featured Projects
      </motion.h2>

      <div className="max-w-6xl mx-auto space-y-16">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            whileHover={{ scale: 1.02 }}
            className="relative bg-gray-900 p-10 rounded-3xl border border-gray-800 hover:border-purple-600 transition-all duration-300"
          >
            {/* Project Number */}
            <span className="absolute -top-4 -left-4 text-sm bg-purple-600 px-4 py-1 rounded-full">
              Project {index + 1}
            </span>

            <h3 className="text-3xl font-semibold mb-4 text-purple-400">
              {project.title}
            </h3>

            <p className="text-gray-400 mb-4 leading-relaxed">
              {project.description}
            </p>

            {/* Metrics Line */}
            <p className="text-sm text-green-400 mb-6">{project.metrics}</p>

            <div className="flex flex-wrap gap-3 mb-8">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-5">
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-purple-600 rounded-lg hover:bg-purple-700 transition font-medium"
              >
                Live Demo
              </a>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 border border-gray-600 rounded-lg hover:bg-gray-800 transition font-medium"
              >
                GitHub
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
