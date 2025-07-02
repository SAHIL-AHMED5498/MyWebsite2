import React from "react";

const ScrollProgressIcon = ({ progress }) => {
  const radius = 15.92;
  const circumference = 2 * Math.PI * radius;
  const dashOffset = circumference - (progress / 100) * circumference;

  return (
    <svg
      viewBox="0 0 34 34"
      className="w-8 h-8 text-indigo-600"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      {/* Background circle */}
      <circle
        cx="17"
        cy="17"
        r={radius}
        className="text-gray-300"
        stroke="currentColor"
      />
      {/* Foreground scroll progress */}
      <circle
        cx="17"
        cy="17"
        r={radius}
        className="text-indigo-600"
        stroke="currentColor"
        strokeDasharray={circumference}
        strokeDashoffset={dashOffset}
        style={{ transition: "stroke-dashoffset 0.3s ease" }}
      />
      {/* Arrow icon */}
      <path
        d="M15.07,21.06 L19.16,17 L15.07,12.94"
        stroke="currentColor"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default ScrollProgressIcon;
