import React from "react";
import { FaHome } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";
import { MdOutlineMessage, MdWork } from "react-icons/md";
import { BiBookReader } from "react-icons/bi";

import { Link } from "react-scroll";

const NavMiniBar = ({theme}) => {
  return (
    <nav className="fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50 ">
      <div className="container mx-auto">
        {/* nav inner */}
        <div
          className="w-full bg-black/40 h-[80px] backdrop-blur-4xl
      rounded-full max-w-[460px] mx-auto px-5 flex justify-between text-2xl
       text-white/50   "
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
            className="cursor-pointer w-[60px] h-[50px] mt-[15px] flex items-center justify-center  lg:h-[50px] lg:w-[60px] lg:mt-[15px]"
          >
            <BiBookReader />
          </Link>
          <Link
            to=""
            activeClass="active"
            smooth={true}
            spy={true}
            offset={-200}
            className="cursor-pointer w-[60px] h-[50px] mt-[15px] flex items-center justify-center  lg:h-[50px] lg:w-[60px] lg:mt-[15px]"
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
  );
};

export default NavMiniBar;
