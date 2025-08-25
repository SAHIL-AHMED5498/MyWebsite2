import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Flix-Gpt",
    description:
      "AI-powered movie discovery app that recommends films using GPT and TMDB API.",
    image: "/images/flix-homepage.png",
    link: "https://flix-gpt-f48c8.web.app/",
  },
  {
    title: "Purchase Power Parity Calc",
    description: "Calc purchasing power of different currencies",
    image: new URL("../assets/ppp.webp", import.meta.url).href,
    link: "https://sahil-ahmed5498.github.io/project-3/",
  },
  {
    title: "New Project",
    description: "Coming soon...",
    image: "/images/new-project.jpg",
    link: "#",
  },
  {
    title: "New Project",
    description: "Coming soon...",
    image: "/images/new-project.jpg",
    link: "#",
  },
  {
    title: "New Project",
    description: "Coming soon...",
    image: "/images/new-project.jpg",
    link: "#",
  },
];

const Project = () => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex items-start justify-center px-6 py-12">
      <div className="max-w-6xl w-full text-center">
        <h1 className="text-4xl font-extrabold mb-6 text-gray-800 dark:text-gray-100">
          My Projects
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Here are some of the projects I’ve worked on — blending design,
          performance, and functionality.
        </p>

        {/* Project Cards */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="block bg-white dark:bg-gray-800 rounded-sm shadow-lg overflow-hidden hover:shadow-xl transition-all"
            >
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-44 object-cover"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow-md">
                    View Project
                  </span>
                </div>
              </div>
              <div className="p-4 text-left">
                <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                  {project.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">
                  {project.description}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
