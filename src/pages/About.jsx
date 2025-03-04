import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex items-start justify-center px-6 py-6">
      <div className="max-w-2xl w-full text-center">
        <h1 className="text-3xl font-bold mb-4">About Me</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
          Welcome to my portfolio! I'm a passionate developer who loves building web applications and learning new technologies. I specialize in frontend and backend development, ensuring optimized and user-friendly experiences.
        </p>
        
        {/* Additional Section */}
        <div className="mt-6 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">My Skills</h2>
          <ul className="text-gray-700 dark:text-gray-300 space-y-2">
            <li>⚡ JavaScript & React</li>
            <li>⚡ Node.js & Express</li>
            <li>⚡ Database Management (SQL & MongoDB)</li>
            <li>⚡ UI/UX & Responsive Design</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
