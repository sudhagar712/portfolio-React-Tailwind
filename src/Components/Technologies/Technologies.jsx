import React from "react";
import { RiReactjsLine, RiTailwindCssFill } from "react-icons/ri";
import { FaHtml5, FaCss3Alt, FaJsSquare } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io5";
import { SiExpress, SiMongodb } from "react-icons/si";
import { FiFigma } from "react-icons/fi";
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

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = ({ theme }) => {
  return (
    <div className="pb-24 pt-10">
      <motion.h2
          variants={ChildVariants}
          className={`pb-2 text-4xl lg:text-7xl text-center font-bold tracking-tighter ${
            theme === "dark" ? "text-stone-400" : "text-black"
          } mb-3`}
        >
          MY
          <span
            className={`${
              theme === "dark" ? "text-[#fcea4c]" : "text-cyan-400"
            }`}
          >
            SKILLS
          </span>
        </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="  flex flex-wrap mt-10 items-center justify-center gap-8 text-6xl"
      >
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(1.5)}
        >
          <FaHtml5 className="text-orange-600" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(2.5)}
        >
          <FaCss3Alt className="text-blue-600" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(3)}
        >
          <FaJsSquare className="text-yellow-500" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(5)}
        >
          <RiReactjsLine className="text-cyan-600" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(1.5)}
        >
          <RiTailwindCssFill className="text-teal-400" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(2)}
        >
          <FiFigma className="text-purple-500" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(3)}
        >
          <IoLogoNodejs className="text-green-600" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(5)}
        >
          <SiExpress className="text-gray-800" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(2)}
        >
          <SiMongodb className="text-green-500" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
