import React from "react";

const Navabar = ({ theme }) => {
  return (
    <nav className="flex relative w-full h-20 md:px-[100px]  items-center overflow-hidden">
      {/* Left background half */}
      <div className="absolute top-0 left-0 w-[30%] h-full md:hidden bg-[#0bccef] z-0" />

      {/* Right background half */}
      <div className="absolute top-0 right-0 w-full h-full bg-[#0bccef] md:bg-transparent z-0" />

      {/* Content */}
      <div className="relative z-10 flex flex-shrink-0 items-center ">
        <a href="/">
          <h1
            className={`${
              theme === "dark" ? "text-gray-500" : "text-white md:text-black"
            } text-2xl lg:text-5xl font-bold font-dancing`}
          >
            <span
              className={`mx-3 ${
                theme === "dark" ? "text-black " : "md:text-[#0bccef] text-black"
              }`}
            >
              Sudhagar
            </span>
            M
          </h1>
        </a>
      </div>
    </nav>
  );
};

export default Navabar;
