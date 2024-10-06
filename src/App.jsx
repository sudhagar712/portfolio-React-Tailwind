import React, { useState, useEffect } from "react";
import Navabar from "./Components/Navbar/Navabar";
import Hero from "./Components/Hero/Hero";
import Technologies from "./Components/Technologies/Technologies";
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import Project from "./Components/Projectss/Project";
import Experience from "./Components/Experience/Experience";
import Contact from "./Components/Contact/Contact";
import { motion } from "framer-motion";

const App = () => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

 useEffect(() => {
    if (theme === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  

  const handleSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="overflow-x-hidden text-stone-300 antialiased">
      <div className="fixed inset-0 -z-10">
        {theme === "light" ? (
          <div className="relative h-full w-full bg-white">
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
          </div>
        ) : (
          <div className="relative h-full w-full bg-black">
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
            <div className="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]"></div>
          </div>
        )}
      </div>

      <div className="container mx-auto px-8">
        <Navabar theme={theme} />
        <motion.button
          onClick={handleSwitch}
          className={`${
            theme === "dark" ? "bg-white text-black" : "bg-white text-black"
          } px-4 py-4 border-2 border-cyan-500   mb-4 rounded-full absolute top-25 z-10 right-[70px] lg:right-[240px] lg:top-[205px]`}
          initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
        >
          {theme === "dark" ? <CiLight /> : <MdDarkMode />}
        </motion.button>
        <Hero theme={theme} />
        <Technologies />
        <Project />
        <Experience />
        <Contact />
      </div>
    </div>
  );
};

export default App;
