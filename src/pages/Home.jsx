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
