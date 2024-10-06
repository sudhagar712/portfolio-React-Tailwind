import React from "react";
import { RiReactjsLine, RiTailwindCssFill } from "react-icons/ri";
import { FaHtml5, FaCss3Alt, FaJsSquare } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io5";
import { SiExpress, SiMongodb } from "react-icons/si";
import { FiFigma } from "react-icons/fi"; 
import { motion } from "framer-motion";


const iconVariants = (duration) => ({
    initial: {y: -10}, 
    animate: {
        y: [10, -10],
        transition: {
            duration:duration,
            ease: "linear",
            repeat:Infinity,
            repeatType:"reverse"
        }
    }


})












const Technologies = ({theme}) => {
  return (
    <div className="pb-24">
      <motion.h2
      whileInView={{opacity: 1 , y:0}}
      initial= {{opacity:0 ,y:-100}}
      transition= {{duration:1.5}}
      
      className={`my-10 text-center text-4xl  font-extrabold ${theme === "dark" ? "text-cyan-400" : "text-black"} `}>Technologies</motion.h2>
      <motion.div
       whileInView={{opacity: 1 , x:0}}
      initial= {{opacity:0 ,x:-100}}
      transition= {{duration:1.5}}
       className="  flex flex-wrap items-center justify-center gap-8 text-6xl">
        <motion.div
        initial ="initial"
        animate="animate"
        variants={iconVariants(1.5)}
        >

          <FaHtml5 className="text-orange-600" />
        </motion.div>
        <motion.div
         initial ="initial"
        animate="animate"
        variants={iconVariants(2.5)}>
          <FaCss3Alt className="text-blue-600" />
        </motion.div>
        <motion.div
         initial ="initial"
        animate="animate"
        variants={iconVariants(3)}>
          <FaJsSquare className="text-yellow-500" />
        </motion.div>
        <motion.div
         initial ="initial"
        animate="animate"
        variants={iconVariants(5)}>
          <RiReactjsLine className="text-cyan-600" />
        </motion.div>
        <motion.div
         initial ="initial"
        animate="animate"
        variants={iconVariants(1.5)}>
          <RiTailwindCssFill className="text-teal-400" />
        </motion.div>
        <motion.div
         initial ="initial"
        animate="animate"
        variants={iconVariants(2)}>
          <FiFigma className="text-purple-500" />
        </motion.div>
        <motion.div
         initial ="initial"
        animate="animate"
        variants={iconVariants(3)}>
          <IoLogoNodejs className="text-green-600" />
        </motion.div>
        <motion.div
         initial ="initial"
        animate="animate"
        variants={iconVariants(5)}>
          <SiExpress className="text-gray-800" />
        </motion.div>
        <motion.div
         initial ="initial"
        animate="animate"
        variants={iconVariants(2)}>
          <SiMongodb className="text-green-500" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
