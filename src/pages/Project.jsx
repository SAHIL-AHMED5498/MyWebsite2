import React from "react";

const projects = [
  {
    title: "Flix-Gpt",
    description: "AI-powered movie discovery app that recommends films using GPT and TMDB API.",
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
    image: "/images/new-project.jpg",   // ✅ use this since it's in public/images
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
    
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex items-start justify-start px-6 py-6">
      <div className="max-w-full w-full text-center">
        <h1 className="text-3xl font-bold mb-4">Projects</h1>
      
        {/* Project Cards */}
        <div className=" mt-8 grid gap-4 sm:grid-cols-4 ">
          {projects.map((project, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-4">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 object-cover rounded-md mb-3"
              />
              <h2 className="text-xl font-semibold">{project.title}</h2>
              <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">
                {project.description}
              </p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 text-blue-500 hover:underline"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
