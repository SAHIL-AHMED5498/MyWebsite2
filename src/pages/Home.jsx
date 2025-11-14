import React, { useContext, useState } from 'react';
import Thunder from '../components/Thunder';
import Profile from '../components/Profile';
import { ThemeContext } from '../context/ThemeContext';
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import emailjs from "@emailjs/browser";

function Home() {
  const { darkMode } = useContext(ThemeContext);
  const [isSending, setIsSending] = useState(false);

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

  const projects = [
    {
      title: "Flix-Gpt",
      description:
        "AI-powered movie discovery app that recommends films using GPT and TMDB API.",
      image: "/images/flix-homepage.png",
      link: "https://flix-gpt-f48c8.web.app/",
    },
    {
      title: "Vision AI",
      description:
        "Browser-based image recognition web app powered by TensorFlow.js and MobileNet, capable of identifying objects directly on the client side without any server dependency.",
      image: "/images/vision-ai-preview.png",
      link: "https://vision-ai-rho.vercel.app/Image-Recog/index.html",
    },
    {
      title: "Purchase Power Parity Calc",
      description: "Calc purchasing power of different currencies",
      image: new URL("../assets/ppp.webp", import.meta.url).href,
      link: "https://sahil-ahmed5498.github.io/project-3/",
    },
    {
      title: "DevConnect-Backend",
      description: "Robust Backend for Recruitment Platform ",
      image: "/images/TMDB.png",
      link: "https://github.com/SAHIL-AHMED5498/DevConnect.git",
    },
    {
      title: "Note-it-Backend",
      description: "Efficient Backend for Note Management using sequelize",
      image: "/images/NOTE-IT.png",
      link: "https://github.com/SAHIL-AHMED5498/Note-It.git",
    },
    {
      title: "New Project",
      description: "Coming soon...",
      image: "/images/new-project.jpg",
      link: "#",
    },
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    const emailPromise = emailjs.sendForm(
      import.meta.env.VITE_SERVICE_ID,
      import.meta.env.VITE_TEMPLATE_ID,
      e.target,
      import.meta.env.VITE_PUBLIC_ID
    );

    toast.promise(emailPromise, {
      loading: "Sending email...",
      success: <b>Email sent successfully!</b>,
      error: <b>Could not send email.</b>,
    });

    emailPromise
      .then(() => {
        e.target.reset();
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <>
      <main className="bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 min-h-screen">
        <div className="max-w-5xl mx-auto px-4 py-12 space-y-20">
          {/* Hero Section */}
          <section id="hero" className="flex flex-col gap-8">
            <div className="space-y-6 max-w-3xl">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                Software Engineer | Web Developer
              </p>
              <h1 className="flex items-center gap-3 text-3xl sm:text-4xl font-semibold pb-1 text-slate-900 dark:text-slate-50">
                <span>SAHIL AHMED</span>
                <Thunder />
              </h1>
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                I design and build modern, performant web applications with a focus on clarity,
                reliability, and a clean user experience.
              </p>

              <div className="flex flex-wrap gap-4 items-center">
                <button
                  onClick={() => scrollToSection('projects')}
                  className="px-5 py-2 rounded-full bg-slate-900 text-white text-sm font-medium shadow-sm hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-200 transition-colors"
                >
                  View Projects
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="px-5 py-2 rounded-full border border-slate-300 text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100/70 dark:border-slate-700 dark:hover:bg-slate-900 transition-colors"
                >
                  Contact Me
                </button>
              </div>

              <div className="pt-4">
                <Profile />
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <section id="skills" className="space-y-4">
            <h2 className="text-xl font-semibold tracking-tight text-slate-900 dark:text-slate-50">Skills</h2>
            <div className="bg-white/80 dark:bg-slate-900/80 p-6 rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm">
              <h3 className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-4 uppercase tracking-[0.16em]">Tech Stack</h3>
              <div className="flex flex-wrap gap-3 justify-start">
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.03 }}
                    className="rounded-full bg-slate-50 dark:bg-slate-800 py-1.5 px-4 text-xs font-medium text-slate-700 dark:text-slate-200 border border-slate-200/70 dark:border-slate-700/80 transition-colors"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="space-y-6">
            <div className="flex flex-col gap-2">
              <h2 className="text-xl font-semibold tracking-tight text-slate-900 dark:text-slate-50">Projects</h2>
              <p className="text-sm text-slate-600 dark:text-slate-300 max-w-2xl">
                A selection of work ranging from full-stack platforms to AI-powered web experiences.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((project, index) => (
                <motion.a
                  key={index}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 220, damping: 20 }}
                  className="block bg-white/80 dark:bg-slate-900/80 rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-44 object-cover border-b border-slate-100 dark:border-slate-800"
                    />
                    <div className="absolute inset-0 bg-black/35 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="rounded-full bg-slate-900/90 dark:bg-slate-50/95 text-xs font-medium text-white dark:text-slate-900 py-2 px-5 shadow-sm">
                        View Project
                      </span>
                    </div>
                  </div>
                  <div className="p-4 text-left space-y-1">
                    <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-50">
                      {project.title}
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>
          </section>

          {/* Experience Section */}
          <section
            id="experience"
            className="scroll-mt-24 max-w-5xl mx-auto px-4 mt-16 sm:mt-24 space-y-8"
          >
            {/* Section Label */}
          

            {/* Section Heading */}
            <div className="flex flex-col gap-3">
              <h2 className="text-xl sm:text-2xl font-semibold tracking-[0.12em] uppercase text-slate-900 dark:text-slate-50">
                Experience
              </h2>
              
            </div>

            {/* Timeline Wrapper */}
            <div className="mt-6 space-y-6 border border-slate-200/80 dark:border-slate-800/80 rounded-2xl bg-white/80 dark:bg-slate-950/70 p-6 sm:p-8 shadow-sm">
              {/* Single Experience Item */}
              <div className="relative pl-6 sm:pl-8">
                {/* Timeline vertical line */}
                <div className="absolute left-1 sm:left-2 top-1 bottom-1 w-px bg-slate-200 dark:bg-slate-800 pointer-events-none" />

                {/* Timeline dot */}
                <div className="absolute left-0 sm:left-1 top-2 h-2.5 w-2.5 rounded-full border border-slate-400 dark:border-slate-600 bg-slate-100 dark:bg-slate-900 shadow-sm" />

                {/* Card Content */}
                <div className="space-y-3">
                  {/* Role / Company / Date */}
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                    <div className="space-y-1">
                      <p className="text-xs font-medium tracking-[0.16em] uppercase text-slate-500">
                        Full Stack Developer (Intern)
                      </p>
                      <h3 className="text-sm sm:text-base font-semibold tracking-[0.08em] uppercase text-slate-900 dark:text-slate-50">
                        Seeup Tech
                      </h3>
                    </div>
                    <p className="text-[11px] font-normal tracking-[0.14em] uppercase text-slate-500">
                      June 2025 – August 2025
                    </p>
                  </div>

                  {/* Body / Responsibilities */}
                  <div className="space-y-2 pt-1">
                    <ul className="space-y-1.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                      <li className="flex gap-2">
                        <span className="mt-1 h-1 w-1 rounded-full bg-slate-400 dark:bg-slate-500 flex-shrink-0" />
                        <span>
                          Developed employee profile forms and list views in React with controlled inputs, validation, and search/filter features.
                        </span>
                      </li>
                      <li className="flex gap-2">
                        <span className="mt-1 h-1 w-1 rounded-full bg-slate-400 dark:bg-slate-500 flex-shrink-0" />
                        <span>
                          Built CRUD API endpoints in Node.js/Express for employee records and implemented Mongoose-based schema validation.
                        </span>
                      </li>
                      <li className="flex gap-2">
                        <span className="mt-1 h-1 w-1 rounded-full bg-slate-400 dark:bg-slate-500 flex-shrink-0" />
                        <span>
                          Troubleshot integration issues between frontend forms and backend APIs in collaboration with senior developers.
                        </span>
                      </li>
                      <li className="flex gap-2">
                        <span className="mt-1 h-1 w-1 rounded-full bg-slate-400 dark:bg-slate-500 flex-shrink-0" />
                        <span>
                          Implemented attendance marking and monthly summary APIs with duplicate-entry safeguards.
                        </span>
                      </li>
                      <li className="flex gap-2">
                        <span className="mt-1 h-1 w-1 rounded-full bg-slate-400 dark:bg-slate-500 flex-shrink-0" />
                        <span>
                          Created leave application UI and connected it with backend workflows for submission and status tracking.
                        </span>
                      </li>
                      <li className="flex gap-2">
                        <span className="mt-1 h-1 w-1 rounded-full bg-slate-400 dark:bg-slate-500 flex-shrink-0" />
                        <span>
                          Added role-based access control using JWT and middleware under backend team guidance.
                        </span>
                      </li>
                      <li className="flex gap-2">
                        <span className="mt-1 h-1 w-1 rounded-full bg-slate-400 dark:bg-slate-500 flex-shrink-0" />
                        <span>
                          Conducted manual testing using Postman and submitted structured bug reports.
                        </span>
                      </li>
                      <li className="flex gap-2">
                        <span className="mt-1 h-1 w-1 rounded-full bg-slate-400 dark:bg-slate-500 flex-shrink-0" />
                        <span>
                          Assisted in building admin dashboard components for internal HR operations.
                        </span>
                      </li>
                      <li className="flex gap-2">
                        <span className="mt-1 h-1 w-1 rounded-full bg-slate-400 dark:bg-slate-500 flex-shrink-0" />
                        <span>
                          Wrote sample data seeding scripts and prepared QA-ready test datasets.
                        </span>
                      </li>
                      <li className="flex gap-2">
                        <span className="mt-1 h-1 w-1 rounded-full bg-slate-400 dark:bg-slate-500 flex-shrink-0" />
                        <span>
                          Improved API consistency with structured error messages and enhanced request validation.
                        </span>
                      </li>
                      <li className="flex gap-2">
                        <span className="mt-1 h-1 w-1 rounded-full bg-slate-400 dark:bg-slate-500 flex-shrink-0" />
                        <span>
                          Documented API endpoints and contributed updates to the project README for intern onboarding.
                        </span>
                      </li>
                    </ul>
                  </div>

                  {/* Tech Stack Badges */}
                  <div className="pt-3 flex flex-wrap gap-2">
                    {[
                      'React',
                      'Node.js',
                      'Express',
                      'MongoDB',
                      'Mongoose',
                      'JWT',
                      'REST APIs',
                      'Postman',
                      'JavaScript',
                      'Tailwind CSS',
                    ].map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full border border-slate-200/80 dark:border-slate-700/80 bg-slate-50/90 dark:bg-slate-900/80 text-[11px] font-medium tracking-[0.12em] uppercase text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="space-y-6">
            <div className="flex flex-col gap-2">
              <h2 className="text-xl font-semibold tracking-tight text-slate-900 dark:text-slate-50">Contact</h2>
              <p className="text-sm text-slate-600 dark:text-slate-300 max-w-2xl">
                Have an opportunity, project idea, or collaboration in mind? Drop me a message and
                I’ll get back to you.
              </p>
            </div>

            <form
              className="bg-white/80 dark:bg-slate-900/80 p-6 rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm max-w-lg w-full"
              onSubmit={sendEmail}
            >
              <div className="space-y-4">
                <input
                  name="from_name"
                  type="text"
                  placeholder="Your Name"
                  required
                  className="w-full p-3 text-sm border border-slate-200 dark:border-slate-700 rounded-md bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-900 dark:focus:ring-slate-100"
                />
                <input
                  name="reply_to"
                  type="email"
                  placeholder="Your Email"
                  required
                  className="w-full p-3 text-sm border border-slate-200 dark:border-slate-700 rounded-md bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-900 dark:focus:ring-slate-100"
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="4"
                  required
                  className="w-full p-3 text-sm border border-slate-200 dark:border-slate-700 rounded-md bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-900 dark:focus:ring-slate-100"
                />
                <button
                  type="submit"
                  disabled={isSending}
                  className={`w-full py-3 rounded-full text-sm font-semibold transition-colors duration-200 ${
                    isSending
                      ? "bg-slate-300 text-slate-500 cursor-not-allowed"
                      : "bg-slate-900 text-white hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-200"
                  }`}
                >
                  {isSending ? "Sending..." : "Send Message"}
                </button>
              </div>
            </form>
          </section>
        </div>
      </main>
    </>
  );
}

export default Home
