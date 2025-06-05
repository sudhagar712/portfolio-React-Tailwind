import React from 'react'
import { PROJECTS } from '../../constants'
import { motion } from "framer-motion";



const ContainerVariants = {
  hidden: {
    opacity: 0,
    x: -100,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.5,
    },
  },
};

const ChildVariants = {
  hidden: {
    opacity: 0,
    x: -100,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5 },
  },
};




const Project = ({theme}) => {
  return (
    <section id="project" className="lg:min-h-screen ">
      <div className="pb-4 px-8 mt-[70px] md:px-[60px]  ">
        <motion.h2
          variants={ChildVariants}
          className={`pb-2 text-4xl text-center mb-[70px] lg:text-7xl font-bold tracking-tighter ${
            theme === "dark" ? "text-stone-400" : "text-black"
          } mb-3`}
        >
          MY
          <span
            className={`${
              theme === "dark" ? "text-[#fcea4c]" : "text-cyan-400"
            }`}
          >
            PROJECT
          </span>
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={index}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 40 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="rounded-lg shadow-lg p-4"
            >
              <img
                src={project.image}
                alt="project"
                className="w-full h-[200px] object-cover rounded mb-4"
              />
              <h3 className="mb-2 font-semibold text-xl">{project.title}</h3>
              <p className="mb-4 text-stone-400">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-stone-900 text-stone-300 px-3 py-1 text-sm rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Project
