import React from "react";
import { EDUCATION } from "../../constants";
import { motion } from "framer-motion";




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




const Education = ({ theme }) => {
  return (
    <div className="pb-4 px-8">
      <motion.h2
        variants={ChildVariants}
        className={`pb-2 text-4xl text-center mb-[39px] lg:text-7xl font-bold tracking-tighter ${
          theme === "dark" ? "text-stone-400" : "text-black"
        } mb-3`}
      >
       EDU
        <span
          className={`${theme === "dark" ? "text-[#fcea4c]" : "text-cyan-400"}`}
        >
          CATION
        </span>
      </motion.h2>
      <div>
        {EDUCATION.map((education, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4"
            >
              <p className="mb-2 text-sm text-stone-400">{education.year}</p>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h3 className="mb-2 font-semibold">
                {education.Graduate} -{" "}
                <span className="text-sm text-stone-500">
                  {education.University}
                </span>
              </h3>
              <p className="mb-4 text-stone-500">{education.University}</p>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
