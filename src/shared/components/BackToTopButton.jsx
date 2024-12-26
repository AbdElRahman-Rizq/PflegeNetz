import React, { useState, useEffect } from "react";
import { FaAngleUp } from "react-icons/fa";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-2 w-12 h-12 text-2xl flex justify-center items-center rounded-full z-50 right-2 bg-primary-700 text-white p-3  shadow-lg hover:bg-primary-800 transition"
        >
          <FaAngleUp />
        </button>
      )}
    </div>
  );
};

export default ScrollToTopButton;
