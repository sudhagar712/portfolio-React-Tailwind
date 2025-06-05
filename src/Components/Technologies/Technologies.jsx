import React from "react";
import { RiReactjsLine, RiTailwindCssFill } from "react-icons/ri";
import { FaHtml5, FaCss3Alt, FaJsSquare } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io5";
import {
  SiExpress,
  SiMongodb,
  SiRedux,
  SiTypescript,
  SiBootstrap
} from "react-icons/si";
import { FiFigma } from "react-icons/fi";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const ChildVariants = {
  hidden: { opacity: 0, x: -100 },
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
      duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse"
    }
  }
});

const Technologies = ({ theme }) => {
  const iconData = [
    { icon: <FaHtml5 className="text-orange-600" />, delay: 1.5 },
    { icon: <FaCss3Alt className="text-blue-600" />, delay: 2.5 },
    { icon: <FaJsSquare className="text-yellow-500" />, delay: 3 },
    { icon: <RiReactjsLine className="text-cyan-600" />, delay: 5 },
    { icon: <RiTailwindCssFill className="text-teal-400" />, delay: 1.5 },
    { icon: <FiFigma className="text-purple-500" />, delay: 2 },
    { icon: <IoLogoNodejs className="text-green-600" />, delay: 3 },
    { icon: <SiExpress className="text-gray-800" />, delay: 5 },
    { icon: <SiMongodb className="text-green-500" />, delay: 2 },
    { icon: <SiRedux className="text-purple-600" />, delay: 3 },
    { icon: <SiTypescript className="text-blue-500" />, delay: 2.5 },
    { icon: <SiBootstrap className="text-indigo-600" />, delay: 2 }
  ];

  return (
    <section id="Skills" className="lg:min-h-screen flex justify-center">
      <div className=" px-10 mt-10 mb-10">
        <motion.h2
          variants={ChildVariants}
          className={`pb-2 text-4xl lg:text-7xl mb-10 text-center font-bold tracking-tighter ${
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
          className="grid grid-cols-3 md:grid-cols-6 gap-[70px] mt-10 text-6xl md:text-7xl justify-center  items-center"
        >
          {iconData.map((item, index) => (
            <motion.div
              key={index}
              initial="initial"
              animate="animate"
              variants={iconVariants(item.delay)}
            >
              {item.icon}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Technologies;
