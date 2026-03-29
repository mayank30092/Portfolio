import { motion } from "framer-motion";

function Education() {
  return (
    <section id="education" className="bg-black text-white px-6 md:px-20 py-24">
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-center mb-16"
      >
        Education
      </motion.h2>

      <div className="max-w-4xl mx-auto space-y-12">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="border-l-4 border-purple-600 pl-6"
        >
          <h3 className="text-2xl font-semibold">
            Bachelor of Technology (B.Tech) – Information Technology
          </h3>
          <p className="text-gray-400 mt-2">
            Guru Teg Bahadur Institute of Technology • 2022 – 2026
          </p>
          <p className="text-gray-500 mt-2">
            Relevant Coursework: Data Structures, DBMS, Operating Systems,
            Computer Networks
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="border-l-4 border-green-500 pl-6"
        >
          <h3 className="text-2xl font-semibold">
            Senior Secondary (12th Grade)
          </h3>
          <p className="text-gray-400 mt-2">
            BMSBM Sr. Sec. School • 2020 – 2022
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default Education;
