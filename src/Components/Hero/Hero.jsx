import React from "react";
import profilePicDark from "../../assets/projects/Myprofileblackmode.png";
import profilePicLight from "../../assets/projects/lightmodeprofile.png";
import { TypeAnimation } from 'react-type-animation';
import { MdWavingHand } from "react-icons/md"; 
import { HERO1_CONTENT } from "../../constants";
import { FaLinkedin } from "react-icons/fa";
import { VscGithubInverted } from "react-icons/vsc";
import { FaInstagram } from "react-icons/fa6";
 import { FaWhatsapp } from "react-icons/fa6";
import { motion } from "framer-motion";
import { Link } from 'react-scroll';

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


const Hero = ({ theme }) => {
  return (
    <section id="home  ">
      <div className="pb-4 px-8 mt-10 ">
        <div className="flex flex-wrap lg:flex-row-reverse">
          <div className="w-full lg:w-1/2">
            <div className="flex justify-center lg:p-8">
              <motion.div
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 1.5 }}
                className="w-70 h-70 lg:w-150 lg:h-150 border-1 border-cyan-400 rounded-full shadow-lg circlerotation"
              >
                <motion.img
                  src={theme === "dark" ? profilePicDark : profilePicLight}
                  alt="Profile Picture"
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 1.5 }}
                  className={` w-64 h-64 lg:w-96 lg:h-96 border-stone-900 rounded-full  shadow-lg contrast-125 ${
                    theme === "dark" ? "brightness-90" : "brightness-90"
                  }`}
                />
              </motion.div>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={ContainerVariants}
              className="flex flex-col items-center lg:items-start mt-10"
            >
              <h3
                className={`text-2xl lg:text-3xl mb-3  ${
                  theme === "dark" ? "text-stone-400" : "text-black"
                }`}
              >
                Hello, I'm
                <MdWavingHand className="inline-block handicons dark:text-yellow-400 animate-wave " />
              </h3>
              <motion.h2
                variants={ChildVariants}
                className={`pb-2 text-4xl lg:text-8xl font-bold tracking-tighter ${
                  theme === "dark" ? "text-stone-400" : "text-black"
                } mb-3`}
              >
                Sudhagar{" "}
                <span
                  className={`${
                    theme === "dark" ? "text-[#fcea4c]" : "text-cyan-400"
                  }`}
                >
                  M
                </span>
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
                className={`my-2   py-6 text-medium lg:text-3xl font-dancing leading-relaxed  tracking-tighter ${
                  theme === "dark"
                    ? "text-white font-light"
                    : "text-stone-500 font-light"
                }`}
              >
                {HERO1_CONTENT}
              </motion.p>

              <div className=" mb-[40px] flex items-center justify-center gap-4 text-2xl sm:text-5xl sm:gap-7">
                <a
                  href="https://www.linkedin.com/in/sudhagar-m-284198283/"
                  target="_blank"
                  className={` hover:text-blue-500 active:text-blue-500 transition-colors duration-300 ${
                    theme === "dark" ? "text-white" : "text-black"
                  } `}
                >
                  <FaLinkedin />
                </a>

                <a
                  href="https://github.com/sudhagar712"
                  target="_blank"
                  className={` ${
                    theme === "dark" ? "text-white" : "text-black"
                  } `}
                >
                  <VscGithubInverted />
                </a>

                <a
                  href="https://www.instagram.com/sudhagar_msr/"
                  target="_blank"
                  className={` hover:text-pink-500 active:text-pink-500 transition-colors duration-300  ${
                    theme === "dark" ? "text-white" : "text-black"
                  }`}
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://wa.me/9943863916?text=Hello%20there!%20I%20have%20a%20question%20for%20you."
                  target="_blank"
                  rel="noopener noreferrer"
                  className={` hover:text-[#25D366] active:text-[#25D366] transition-colors duration-300  ${
                    theme === "dark" ? "text-white" : "text-black"
                  }`}
                >
                  <FaWhatsapp />
                </a>
              </div>

              <div className="flex  gap-2">
                <motion.a
                  variants={ChildVariants}
                  href="/SudhagarM_Resume.pdf"
                  target="_blank"
                  download
                  className={`rounded shadow-xl p-4 lg:px-10 font-extrabold text-sm  mb-10 ${
                    theme === "dark"
                      ? "bg-[#fcea4c] border-2 text-black border-[#fcea4c]   "
                      : "bg-cyan-400 text-white border-2 border-cyan-400 "
                  }`}
                >
                  Download CV
                </motion.a>
                <motion.div
                  variants={ChildVariants}
                  className={`rounded shadow-xl p-4 lg:px-10 font-extrabold text-sm mb-10 ${
                    theme === "dark"
                      ? "bg-white border-2 text-black border-[#fcea4c]"
                      : "bg-black text-white border-2 border-cyan-400"
                  }`}
                >
                  <Link
                    to="contact" // ID of the contact component
                    smooth={true}
                    duration={500}
                    className="cursor-pointer"
                  >
                    Let's Connect
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
