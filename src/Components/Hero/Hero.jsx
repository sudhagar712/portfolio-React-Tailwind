import React from "react";
import profilePicDark from "../../assets/projects/sudhagar_profile.png";
import profilePicLight from "../../assets/projects/lightmodeprofile.png";
import { TypeAnimation } from 'react-type-animation';
import { MdWavingHand } from "react-icons/md"; 
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




const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };







const Hero = ({ theme }) => {
  return (
    <div className="pb-4 ">
      <div className="flex flex-wrap lg:flex-row-reverse">
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:p-8">
           
            <motion.img
              src={theme === "dark" ? profilePicDark : profilePicLight}
              alt="Profile Picture"
             
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
              className={ ` w-64 h-64 lg:w-96 lg:h-96 border-stone-900  rounded-full shadow-lg contrast-125 ${
                theme === "dark" ? "brightness-125" : "brightness-90"
              }`}
            />
          
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={ContainerVariants}
            className="flex flex-col items-center lg:items-start mt-10"
          >
            <h3 className={`text-2xl lg:text-3xl mb-3  ${theme === "dark" ? "text-stone-400" : "text-black"}`}>
              Hello, I'm
              <MdWavingHand className="inline-block handicons  animate-wave" />
            </h3>
            <motion.h2
              variants={ChildVariants}
              className={`pb-2 text-4xl lg:text-8xl font-bold tracking-tighter ${theme === "dark" ? "text-stone-400" : "text-black" } mb-3`}
            >
              Sudhagar <span className="text-cyan-400">M</span> 
            </motion.h2>
            <motion.span
              variants={ChildVariants}
              className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-3xl lg:text-5xl tracking-light text-transparent"
            >
              <TypeAnimation
                sequence={[
                  "Web Developer </>",
                  1000,
                  "ReactJs Developer",
                  1000,
                  "FrontEnd Developer",
                  1000,
                  "Designer",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </motion.span>
            <motion.p
              variants={ChildVariants}
              className={`my-2  py-6 text-sm lg:text-medium leading-relaxed  tracking-tighter ${theme === "dark" ? "text-white" : "text-stone-500"}`}
            >
              {HERO_CONTENT}
            </motion.p>
            <span>
            <motion.a
              variants={ChildVariants}
              href="/SudhagarM_Resume.pdf"
              target="_blank"
              download
              className={`rounded-full shadow-xxl p-4  text-sm  mb-10 ${theme === "dark" ? "bg-white border-2 text-black border-cyan-400 " : "bg-stone-100 text-black border-2 border-cyan-400"}`}
            >
              Download Resume
            </motion.a>
             <motion.a
              onClick={scrollToContact} 
              variants={ChildVariants}
              className={`rounded-full cursor-pointer shadow-xxl p-4 px-8 text-sm mx-3  mb-10 ${theme === "dark" ? "bg-white border-2 text-black border-cyan-400 " : "bg-stone-100 text-black border-2 border-cyan-400"}`}
            >
              Let's Talk
            </motion.a>
            </span>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
