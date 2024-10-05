import React from "react";
import profilepic from "../../assets/projects/sudhagar_profile.png";
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

const Hero = () => {
  return (
    <div className="pb-4 ">
      <div className="flex flex-wrap lg:flex-row-reverse">
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:p-8">
            <motion.img
              src={profilepic}
              alt="Profile Picture"
              width={650}
              height={650}
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
              className="border-stone-900 rounded-3xl shadow-lg brightness-125 contrast-125"
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
            <h3 className="text-2xl lg:text-3xl mb-3">
              Hello, I'm <MdWavingHand className="inline-block handicons text-yellow-500 animate-wave" />
            </h3>
            <motion.h2
              variants={ChildVariants}
              className="pb-2 text-4xl lg:text-8xl font-bold tracking-tighter mb-3"
            >
              Sudhagar M
            </motion.h2>
            <motion.span
              variants={ChildVariants}
              className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-3xl lg:text-5xl tracking-light text-transparent"
            >
              <TypeAnimation
                sequence={[
                  'Web Developer </>',
                  1000,
                  'ReactJs Developer',
                  1000,
                  'FrontEnd Developer',
                  1000,
                  'Designer',
                  1000
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </motion.span>
            <motion.p 
              variants={ChildVariants}
              className="my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter"
            >
              {HERO_CONTENT}
            </motion.p>
            <motion.a
              variants={ChildVariants}
              href="/SudhagarM_Resume.pdf"  
              target="_blank" 
              download 
              className="bg-white rounded-full p-4 text-sm text-stone-800 mb-10"
            >
              Download Resume
            </motion.a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
