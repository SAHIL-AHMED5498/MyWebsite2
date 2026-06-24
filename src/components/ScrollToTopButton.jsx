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
  aria-label="Scroll to top"
  className="fixed bottom-6 right-6 z-50 group"
>
  <div
    className="relative flex items-center justify-center w-16 h-16 rounded-full shadow-xl"
    style={{
      background: `conic-gradient(
        #5ad46d ${scrollPercent}%,
        #e5e7eb ${scrollPercent}% 100%
      )`,
    }}
  >
    <div className="absolute inset-[8px] bg-white rounded-full flex items-center justify-center">
      <svg
        className="w-8 h-8 text-slate-900 transition-transform duration-300 group-hover:-translate-y-1"
        fill="none"
        stroke="currentColor"
        strokeWidth="4"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 19V5m0 0l-6 6m6-6l6 6"
        />
      </svg>
    </div>
  </div>
</button>
  );
};

export default ScrollToTopButton;
