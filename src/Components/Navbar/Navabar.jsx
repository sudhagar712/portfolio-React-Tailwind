import React from "react";


const Navabar = ({ theme }) => {
  return (
    <nav className="flex  items-center py-7 ">
      <div className="flex flex-shrink-0 items-center">
       
        <a href="/">
          <h1
            className={`${
              theme === "dark" ? "text-white" : "text-black"
            } text-3xl lg:text-5xl font-extrabold font-dancing`}
          >

            <span
              className={` mx-3 ${
                theme === "dark" ? "text-[#fcea4c]" : "text-cyan-400"
              }`}
            >
             My
            </span>
            Portfolio
          </h1>
        </a>
      </div>
     
    </nav>
  );
};

export default Navabar;
