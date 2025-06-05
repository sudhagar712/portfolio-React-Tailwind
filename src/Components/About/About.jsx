import React from "react";
import aboutImg from "../../assets/projects/aboutimgdark.jpeg";
import aboutImglight from "../../assets/projects/aboutimg.jpeg";
import { HERO_CONTENT } from "../../constants";
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




const About = ({ theme }) => {

    const stats = [
  { label: "2.6+ Year's", description: "Experience" },
  { label: "20+ Projects ", description: "Completed"},
  { label: "AWS, React-Native", description: "Learning" },
];



  return (
    <section id="about" className="lg:min-h-screen ">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-16  py-12  md:px-[100px] px-1  ">
        {/* Image Section */}
        <div className="flex-shrink-0">
          <img
            src={theme === "dark" ? aboutImg : aboutImglight}
            alt="Profile"
            className="rounded-lg shadow-lg  w-full lg:w-[500px]"
          />
        </div>

        {/* Text Section */}
        <div className="max-w-4xl text-center md:text-left">
          <motion.h2
            variants={ChildVariants}
            className={`pb-2 text-3xl lg:text-6xl font-bold  ${
              theme === "dark" ? "text-stone-400" : "text-black"
            } mb-3`}
          >
            ABOUT
            <span
              className={`${
                theme === "dark" ? "text-[#fcea4c]" : "text-cyan-400"
              }`}
            >
              ME
            </span>
          </motion.h2>
          <h1
            className={` text-sm md:text-xl ${
              theme === "dark" ? "text-[#fcea4c]" : "text-stone-600"
            }`}
          >
            IAM Sudhagar and I'm a MERN STACK Developer
          </h1>

          {/* Stats Section */}
          <div className="mt-8  flex justify-center md:justify-start gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`flex flex-col text-[10px] md:text-md cursor-pointer font-extrabold items-center   rounded-lg p-4  ${
                  theme === "dark"
                    ? "border-2 border-[#fcea4c] hover:bg-[#fcea4c] hover:text-black"
                    : " border-2 border-cyan-400 hover:bg-cyan-400 hover:text-white"
                }`}
              >
                <span
                  className={`font-bold ${
                    theme === "dark" ? "text-white  " : "text-stone-600 "
                  }`}
                >
                  {stat.label}
                </span>
                <span
                  className={`${
                    theme === "dark" ? "text-white" : "text-stone-600"
                  }`}
                >
                  {stat.description}
                </span>
              </div>
            ))}
          </div>
          <p
            className={`mt-6   mb-10 lg:text-md text-xs leading-6  ${
              theme === "dark" ? "text-white" : "text-stone-600"
            }`}
          >
            {HERO_CONTENT}
          </p>

          <motion.a
            variants={ChildVariants}
            href="/SudhagarM_Resume.pdf"
            target="_blank"
            download
            className={`rounded shadow-xl p-4 font-extrabold text-sm   mb-10 ${
              theme === "dark"
                ? "bg-[#fcea4c] border-2 text-black border-[#fcea4c]   "
                : "bg-cyan-400 text-white border-2 border-cyan-400 "
            }`}
          >
            Download CV
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default About;
