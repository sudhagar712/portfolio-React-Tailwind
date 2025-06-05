import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const BackToTop = () => {
  const [showButton, setShowButton] = useState(false);

  // Show button when page is scrolled down
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    showButton && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-20 right-8 z-50 p-3 rounded-full bg-indigo-500 text-white hover:bg-indigo-600 transition duration-300 shadow-lg"
        aria-label="Back to Top"
      >
        <FaArrowUp className="text-xl" />
      </button>
    )
  );
};

export default BackToTop;
