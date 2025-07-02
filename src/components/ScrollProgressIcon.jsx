import React from "react";

const ScrollProgressIcon = ({ progress }) => {
  const radius = 16;
  const center = 20;
  const circumference = 2 * Math.PI * radius;
  const dashOffset = circumference - (progress / 100) * circumference;

  return (
    <svg
      viewBox="0 0 40 40"
      className="w-10 h-10 text-orange-400"
      fill="none"
      stroke="currentColor"
      strokeWidth="6"
    >
      {/* Background circle */}
      <circle
        cx={center}
        cy={center}
        r={radius}
        className="text-gray-300"
        stroke="currentColor"
      />
      {/* Foreground scroll progress */}
      <circle
        cx={center}
        cy={center}
        r={radius}
        className="text-orange-400"
        stroke="currentColor"
        strokeDasharray={circumference}
        strokeDashoffset={dashOffset}
        style={{ transition: "stroke-dashoffset 0.3s ease" }}
      />
      {/* Upward-pointing arrow */}
      <path
        d="M15,23 L20,17 L25,23"
        stroke="currentColor"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default ScrollProgressIcon;
