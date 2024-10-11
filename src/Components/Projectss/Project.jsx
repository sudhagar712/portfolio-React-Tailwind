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
    <div className="pb-4 px-8 ">
      <motion.h2
        variants={ChildVariants}
        className={`pb-2 text-4xl text-center mb-[20px] lg:text-7xl font-bold tracking-tighter ${
          theme === "dark" ? "text-stone-400" : "text-black"
        } mb-3`}
      >
       MY
        <span
          className={`${theme === "dark" ? "text-[#fcea4c]" : "text-cyan-400"}`}
        >
          PROJECT
        </span>
      </motion.h2>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8  flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4"
            >
              <img
                src={project.image}
                alt="mytitle"
                width={250}
                height={250}
                className="mb-6 rounded"
              />
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h3 className="mb-2 font-semibold text-2xl">{project.title}</h3>
              <p className="mb-4 text-stone-400">{project.description}</p>
              {project.technologies.map((tech, index) => (
                <span className="mr-2 rounded-2 bg-stone-900 p-2 text-sm font-medium text-stone-300 key={index}">
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project
