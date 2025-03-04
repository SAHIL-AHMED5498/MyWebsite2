import React from "react";

const Project = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex items-start justify-center px-6 py-6">
      <div className="max-w-3xl w-full text-center">
        <h1 className="text-3xl font-bold mb-4">Projects</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Welcome to my project page! Here are some of my recent works.
        </p>

        {/* Project Cards */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {/* Example Project 1 */}
          <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-4">
            <h2 className="text-xl font-semibold">Project One</h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">
              A brief description of the project goes here.
            </p>
          </div>

          {/* Example Project 2 */}
          <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-4">
            <h2 className="text-xl font-semibold">Project Two</h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">
              Another brief project description here.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
