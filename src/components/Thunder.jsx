import React from "react";
import { motion } from "framer-motion";

const svgIconVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    fill: "rgba(15, 23, 42, 0)",
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    fill: "rgba(15, 23, 42, 1)",
  },
};

function Thunder() {
  return (
    <motion.div className="w-7 h-7 flex items-center justify-center text-slate-900 dark:text-slate-50">
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="w-full h-full stroke-current stroke-[0.5]"
      >
        <motion.path
          d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
          variants={svgIconVariants}
          initial="hidden"
          animate="visible"
          transition={{
            default: {
              duration: 1.4,
              ease: "easeInOut",
            },
            fill: {
              duration: 1.4,
              ease: "easeInOut",
            },
          }}
        />
      </motion.svg>
    </motion.div>
  );
}

export default Thunder;
