import React from "react";

const ScrollProgressIcon = ({ progress }) => {
  const radius = 12;
  const center = 16;
  const circumference = 2 * Math.PI * radius;
  const dashOffset = circumference - (progress / 100) * circumference;

  return (
    <svg
      viewBox="0 0 32 32"
      className="w-5 h-5 text-slate-700 dark:text-slate-100"
      fill="none"
      stroke="currentColor"
      strokeWidth="4"
    >
      {/* Background circle */}
      <circle
        cx={center}
        cy={center}
        r={radius}
        className="text-slate-300 dark:text-slate-700"
        stroke="currentColor"
      />
      {/* Foreground scroll progress */}
      <circle
        cx={center}
        cy={center}
        r={radius}
        className="text-slate-900 dark:text-slate-100"
        stroke="currentColor"
        strokeDasharray={circumference}
        strokeDashoffset={dashOffset}
        style={{ transition: "stroke-dashoffset 0.25s ease" }}
      />
      {/* Upward-pointing arrow */}
      <path
        d="M12,18 L16,13 L20,18"
        stroke="currentColor"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default ScrollProgressIcon;
