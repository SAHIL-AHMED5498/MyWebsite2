import React, { useEffect, useState } from "react";
import ScrollProgressIcon from "./ScrollProgressIcon";

const ScrollToTopButton = () => {
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scroll = (scrollTop / docHeight) * 100;
      setScrollPercent(scroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-12 right-6 z-50 rounded-full p-2 bg-white shadow-lg hover:bg-gray-100 transition"
      aria-label="Scroll to top"
    >
      <ScrollProgressIcon progress={scrollPercent} />
    </button>
  );
};

export default ScrollToTopButton;
