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

  const isVisible = scrollPercent > 5;

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-40 inline-flex items-center justify-center w-9 h-9 rounded-full border border-slate-300/70 dark:border-slate-700/70 bg-white/90 dark:bg-slate-900/90 text-slate-700 dark:text-slate-100 shadow-sm backdrop-blur hover:-translate-y-0.5 hover:shadow-md transition"
      aria-label="Scroll to top"
    >
      <ScrollProgressIcon progress={scrollPercent} />
    </button>
  );
};

export default ScrollToTopButton;
