import React from 'react';
import { FaLinkedin } from "react-icons/fa";
import { VscGithubInverted } from "react-icons/vsc";
import { FaInstagram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";

const Navabar = () => {
  return (
    <nav className="flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center ">
        <a href="/">
          <h1 className="text-white font-extrabold uppercase text-2xl font-dancing sm:text-4xl">sudhagar M</h1>
        </a>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl sm:text-4xl">
        <a
          href="https://www.linkedin.com/in/sudhagar-m-284198283/"
          target="_blank"
          className=" hover:text-blue-400  active:text-blue-400 transition-colors duration-300"
        >
          <FaLinkedin />
        </a>

        <a href="https://github.com/sudhagar712" target="_blank">
          <VscGithubInverted />
        </a>

        <a href="https://www.instagram.com/sudhagar_msr/" target="_blank"  className=" hover:text-pink-500 active:text-pink-500 transition-colors duration-300">
          <FaInstagram />
        </a>
        <a
          href="https://wa.me/9943863916?text=Hello%20there!%20I%20have%20a%20question%20for%20you."
          target="_blank"
          rel="noopener noreferrer"
          className=" hover:text-[#25D366] active:text-[#25D366] transition-colors duration-300"
        >
          <FaWhatsapp />
        </a>
      </div>
    </nav>
  );
}

export default Navabar
