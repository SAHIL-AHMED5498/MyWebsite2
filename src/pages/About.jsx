import { motion } from "framer-motion";
import React from "react";

const About = () => {
  const skills = [
    "Java",
    "C-Language",
    "HTML",
    "CSS",
    "JavaScript & React",
    "React Redux",
    "Zustand",
    "Typescript",
    "Tailwind CSS",
    "Node.js & Express",
    "Firebase",
    "Docker",
    "Websocket.io",
    "Database Management (SQL & MongoDB)",
    "UI/UX & Responsive Design",
  ];

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex items-start justify-center px-6 py-6">
      <div className="max-w-2xl w-full text-center">
        <h1 className="text-3xl font-bold mb-4">About Me</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
          Welcome to my portfolio! I'm a passionate developer who loves building
          web applications and learning new technologies. I specialize in
          frontend and backend development, ensuring optimized and user-friendly
          experiences.
        </p>

        {/* Skills Section */}
        <div className="mt-6 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">My Skills :</h2>
          <div className="flex flex-wrap gap-4 justify-start">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                drag
                whileDrag={{ scale: 1.2 }}
                dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
                className="rounded-md bg-slate-100 dark:bg-slate-700 py-1 px-3 border border-transparent text-sm text-slate-600 dark:text-slate-200 transition-all shadow-sm cursor-grab active:bg-slate-400"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default About;
