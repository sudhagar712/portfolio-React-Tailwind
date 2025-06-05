import React, { useState } from "react";
import { MdMenuOpen } from "react-icons/md";// Import the ImMenu icon
import { FaHome } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";
import { MdOutlineMessage, MdWork } from "react-icons/md";
import { BiBookReader } from "react-icons/bi";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { Link } from "react-scroll";

const NavMiniBar = ({ theme }) => {
  const [isNavVisible, setIsNavVisible] = useState(false); 

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };

  return (
    <div>
      <MdMenuOpen
        className={`absolute shadow-lg p-2 rounded-md top-5  right-20 cursor-pointer text-4xl flex items-center  ${
          theme === "dark" ? "text-white" : "text-black"
        }`}
        onClick={toggleNav}
      />

      {/* Conditional rendering of NavMiniBar based on isNavVisible */}
      {isNavVisible && (
        <nav className="fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50">
          <div className="container mx-auto">
            <div
              className={`w-full rounded-full gap-6 md:max-w-[400px] max-w-[300px] opacity-80 mx-auto px-5 flex justify-between text-2xl h-[80px] text-white/50 ${
                theme === "dark"
                  ? "bg-yellow-300 rounded-full border-2 border-white backdrop-blur-4xl shadow-xxl"
                  : "bg-cyan-300 border-2 border-white backdrop-blur-4xl shadow-md"
              }`}
            >
              <Link
                to="home"
                // activeClass="active"
                smooth={true}
                spy={true}
                offset={-400}
                className={`cursor-pointer w-[60px] h-[50px] mt-[15px] flex items-center justify-center lg:h-[50px] lg:w-[60px] lg:mt-[15px]
                   ${
                     theme === "dark"
                       ? " shadow-2xl rounded-full  text-black active:text-yellow-500"
                       : "active:bg-white rounded-full shadow-2xl text-black "
                   }`}
              >
                <FaHome />
              </Link>
              <Link
                to="about"
                // activeClass="active"
                smooth={true}
                spy={true}
                offset={-200}
                className={`cursor-pointer w-[60px] h-[50px] mt-[15px] flex items-center justify-center lg:h-[50px] lg:w-[60px] lg:mt-[15px]
                   ${
                     theme === "dark"
                       ? " shadow-2xl rounded-full  text-black active:text-yellow-500"
                       : "active:bg-white rounded-full shadow-2xl text-black "
                   }`}
              >
                <FaRegUserCircle />
              </Link>
              <Link
                to="Skills"
                activeClass="active"
                smooth={true}
                spy={true}
                offset={-200}
                className={`cursor-pointer w-[60px] h-[50px] mt-[15px] flex items-center justify-center lg:h-[50px] lg:w-[60px] lg:mt-[15px]
                   ${
                     theme === "dark"
                       ? " shadow-2xl rounded-full  text-black active:text-yellow-500"
                       : "active:bg-white rounded-full shadow-2xl text-black "
                   }`}
              >
                <BiBookReader />
              </Link>

              <Link
                to="project"
                activeClass="active"
                smooth={true}
                spy={true}
                offset={-200}
                className={`cursor-pointer w-[60px] h-[50px] mt-[15px] flex items-center justify-center lg:h-[50px] lg:w-[60px] lg:mt-[15px]
                   ${
                     theme === "dark"
                       ? " shadow-2xl rounded-full  text-black active:text-yellow-500"
                       : "active:bg-white rounded-full shadow-2xl text-black "
                   }`}
              >
                <AiOutlineFundProjectionScreen />
              </Link>

              <Link
                to="work"
                activeClass="active"
                smooth={true}
                spy={true}
                offset={-200}
                className={`cursor-pointer w-[60px] h-[50px] mt-[15px] flex items-center justify-center lg:h-[50px] lg:w-[60px] lg:mt-[15px]
                   ${
                     theme === "dark"
                       ? " shadow-2xl rounded-full  text-black active:text-yellow-500"
                       : "active:bg-white rounded-full shadow-2xl text-black "
                   }`}
              >
                <MdWork />
              </Link>
              <Link
                to="contact"
                activeClass="active"
                smooth={true}
                spy={true}
                offset={-200}
                className={`cursor-pointer w-[60px] h-[50px] mt-[15px] flex items-center justify-center lg:h-[50px] lg:w-[60px] lg:mt-[15px]
                   ${
                     theme === "dark"
                       ? " shadow-2xl rounded-full  text-black active:text-yellow-500"
                       : "active:bg-white rounded-full shadow-2xl text-black "
                   }`}
              >
                <MdOutlineMessage />
              </Link>
            </div>
          </div>
        </nav>
      )}
    </div>
  );
};

export default NavMiniBar;
