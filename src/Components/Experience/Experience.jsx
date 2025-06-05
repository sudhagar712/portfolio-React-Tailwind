import React from 'react'
import { EXPERIENCES } from '../../constants'
import { motion } from "framer-motion";
import { Link } from "react-scroll";



const ContainerVariants = {
     hidden: {
    opacity: 0, 
    x: -100 
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.5,
    }
  }
};

const ChildVariants = {
  hidden: {
    opacity: 0, 
    x: -100
  },
  visible: {
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.5 }
  }
};

const Experience = ({theme}) => {
  return (
    <section id="work" className="lg:min-h-screen">
      <div className="pb-4  mt-[50px]">
        <motion.h2
          variants={ChildVariants}
          className={`pb-2 text-4xl text-center mb-[40px] lg:text-7xl font-bold tracking-tighter ${
            theme === "dark" ? "text-stone-400" : "text-black"
          } mb-3`}
        >
          MY
          <span
            className={`${
              theme === "dark" ? "text-[#fcea4c]" : "text-cyan-400"
            }`}
          >
            EXPERIENCE
          </span>
        </motion.h2>
    

  <div className="   rounded-lg p-6">
    {EXPERIENCES.map((experience, index) => (
      <div
        key={index}
        className="mb-8 flex flex-wrap   p-5  justify-center"
      >
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="w-full lg:w-1/4"
        >
          <p className="mb-2 p-5 text-sm text-stone-400">
            {experience.year}
          </p>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="w-full max-w-xl lg:w-3/4"
        >
          <h3 className="mb-2 font-semibold text-gray-500">
            {experience.role} -
            <span className="text-sm text-stone-500">
              {experience.company}
            </span>
          </h3>
          <p className="mb-4 text-stone-500">{experience.description}</p>
          <div className="flex flex-wrap">
            {experience.technologies.map((tech, index) => (
              <span
                key={index}
                className="mr-2 mt-4 rounded bg-stone-900 py-1 px-2 text-sm font-medium text-stone-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    ))}
  </div>
</div>

   
    </section>
  );
}

export default Experience
