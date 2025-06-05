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
import Education from "./Components/Education/Education";
import About from "./Components/About/About";
import NavMiniBar from "./Components/NavMini/NavMiniBar";


const App = () => {

 const [loading, setLoading] = useState(false);


  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);



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
    <>
      {loading ? (
        <>
          <div className="loading">
            <div id="preloader">
              <div className="spinner">
                <span className="ball-1"></span>
                <span className="ball-2"></span>
                <span className="ball-3"></span>
                <span className="ball-4"></span>
                <span className="ball-5"></span>
                <span className="ball-6"></span>
                <span className="ball-7"></span>
                <span className="ball-8"></span>
              </div>
              <h2 className="flex justify-center items-center h-screen font-extrabold mt-3 text-5xl">
              𝓢
              </h2>
            </div>
          </div>
        </>
      ) : (
        <div className="overflow-x-hidden text-stone-300 antialiased ">
          <div className="fixed inset-0 -z-10">
            {theme === "light" ? (
              <div className="relative h-full w-full bg-white">
                <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
              </div>
            ) : (
              <div className="relative h-full w-full bg-black">
                <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:19px_35px]"></div>
                <div className="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]"></div>
              </div>
            )}
          </div>

          <div className="container  mx-auto ">
            <Navabar theme={theme} />
            <motion.button
              onClick={handleSwitch}
              className={`${
                theme === "dark"
                  ? "bg-[#fcea4c] text-black  text-2xl lg:text-3xl "
                  : "bg-cyan-400 text-white  text-2xl lg:text-3xl"
              }  p-3  rounded-full   mb-4  absolute top-5 right-3 z-10 `}
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
            >
              {theme === "dark" ? (
                <div className="text-sm  ">
                  <CiLight className="shadow-lg" />
                </div>
              ) : (
                <div className="text-sm text-center">
                  <MdDarkMode />
                </div>
              )}
            </motion.button>
            <Hero theme={theme} />
            <About theme={theme} />
            <Technologies theme={theme} />
            <Project theme={theme} />
            <Experience theme={theme} />
            <Education theme={theme} />
            <Contact theme={theme} />
            <NavMiniBar theme={theme} />
          </div>
        </div>
      )}
    </>
  );
};

export default App;
