import React, { useState } from "react";
import { ImMenu } from "react-icons/im"; // Import the ImMenu icon
import { FaHome } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";
import { MdOutlineMessage, MdWork } from "react-icons/md";
import { BiBookReader } from "react-icons/bi";
import { Link } from "react-scroll";

const NavMiniBar = ({ theme }) => {
  const [isNavVisible, setIsNavVisible] = useState(false); 

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible); // Toggle the visibility on icon click
  };

  return (
    <div>
    
      <ImMenu
        className={`absolute top-5 right-20 cursor-pointer text-4xl ${
          theme === "dark" ? "text-white" : "text-black"
        }`}
        onClick={toggleNav}
      />

      {/* Conditional rendering of NavMiniBar based on isNavVisible */}
      {isNavVisible && (
        <nav className="fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50">
          <div className="container mx-auto">
            <div
              className={`w-full rounded-full max-w-[460px] mx-auto px-5 flex justify-between text-2xl h-[80px] text-white/50 ${
                theme === "dark"
                  ? "bg-white/40 backdrop-blur-4xl"
                  : "bg-black backdrop-blur-4xl"
              }`}
            >
              <Link
                to="home"
                activeClass="active"
                smooth={true}
                spy={true}
                offset={-200}
                className="cursor-pointer w-[60px] h-[50px] mt-[15px] flex items-center justify-center lg:h-[50px] lg:w-[60px] lg:mt-[15px]"
              >
                <FaHome />
              </Link>
              <Link
                to="about"
                activeClass="active"
                smooth={true}
                spy={true}
                offset={-200}
                className="cursor-pointer w-[60px] h-[50px] mt-[15px] flex items-center justify-center lg:h-[50px] lg:w-[60px] lg:mt-[15px]"
              >
                <FaRegUserCircle />
              </Link>
              <Link
                to="Skills"
                activeClass="active"
                smooth={true}
                spy={true}
                offset={-200}
                className="cursor-pointer w-[60px] h-[50px] mt-[15px] flex items-center justify-center lg:h-[50px] lg:w-[60px] lg:mt-[15px]"
              >
                <BiBookReader />
              </Link>
              <Link
                to="work"
                activeClass="active"
                smooth={true}
                spy={true}
                offset={-200}
                className="cursor-pointer w-[60px] h-[50px] mt-[15px] flex items-center justify-center lg:h-[50px] lg:w-[60px] lg:mt-[15px]"
              >
                <MdWork />
              </Link>
              <Link
                to="contact"
                activeClass="active"
                smooth={true}
                spy={true}
                offset={-200}
                className="cursor-pointer w-[60px] h-[50px] mt-[15px] flex items-center justify-center lg:h-[50px] lg:w-[60px] lg:mt-[15px]"
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
