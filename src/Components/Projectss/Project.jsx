import React from "react";
import { PROJECTS } from "../../constants";
import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";

const CardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.2 }
  })
};

const Project = ({ theme }) => {
  return (
    <section id="project" className="lg:min-h-screen">
      <div className="px-2  py-20 md:px-20">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          variants={CardVariants}
          className={`text-4xl text-center lg:text-5xl font-bold tracking-tight mb-10 ${
            theme === "dark" ? "text-stone-300" : "text-gray-800"
          }`}
        >
          MY{" "}
          <span
            className={`${
              theme === "dark" ? "text-[#fcea4c]" : "text-cyan-500"
            }`}
          >
            PROJECT
          </span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-5">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={CardVariants}
              initial="hidden"
              whileInView="visible"
              className="relative group bg-white dark:bg-stone-800 shadow-lg rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-[1.03]"
            >
              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full  h-[300px] object-fit"
              />

              {/* Overlay content */}
              <div className="absolute inset-0 bg-black/70 backdrop-blur-sm text-white p-6 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-center items-center text-center">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap justify-center gap-2 mb-4">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-white/10 px-3 py-1 rounded-full text-xs border border-white/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Link Icon */}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 text-white hover:text-cyan-400 transition"
                    title="View Project"
                  >
                    <FiExternalLink className="text-2xl" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
