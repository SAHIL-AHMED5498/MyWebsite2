import { useContext, useState } from "react";
import Thunder from "../components/Thunder";
import Profile from "../components/Profile";
import MeshGradient from "../components/MeshGradient";
import { ThemeContext } from "../context/ThemeContext";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import emailjs from "@emailjs/browser";

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
    link: "https://imagerecog-7ktb.onrender.com",
  },
  {
    title: "DevConnect-Backend",
    description: "Robust Backend for Recruitment Platform",
    image: "/images/TMDB.png",
    link: "https://github.com/SAHIL-AHMED5498/DevConnect.git",
  },
  {
    title: "Note-it-Backend",
    description: "Efficient Backend for Note Management using sequelize",
    image: "/images/NOTE-IT.png",
    link: "https://github.com/SAHIL-AHMED5498/Note-It.git",
  },
];

const experienceBullets = [
  "Developed employee profile forms and list views in React with controlled inputs, validation, and search/filter features.",
  "Built CRUD API endpoints in Node.js/Express for employee records and implemented Mongoose-based schema validation.",
  "Troubleshot integration issues between frontend forms and backend APIs in collaboration with senior developers.",
  "Implemented attendance marking and monthly summary APIs with duplicate-entry safeguards.",
  "Created leave application UI and connected it with backend workflows for submission and status tracking.",
  "Added role-based access control using JWT and middleware under backend team guidance.",
  "Improved API consistency with structured error messages and enhanced request validation.",
  "Documented API endpoints and contributed updates to the project README for intern onboarding.",
];

const experienceTech = [
  "React",
  "Node.js",
  "Express",
  "MongoDB",
  "Mongoose",
  "JWT",
  "REST APIs",
  "Postman",
  "JavaScript",
  "Tailwind CSS",
];

function Home() {
  const { darkMode } = useContext(ThemeContext);
  const [isSending, setIsSending] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
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
    <main className="min-h-screen bg-canvas-soft dark:bg-primary text-ink dark:text-on-primary">
      {/* ─── Hero ─── */}
      <section
        id="hero"
        className="relative overflow-hidden bg-canvas dark:bg-primary"
      >
        <MeshGradient className="opacity-70" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 pt-12 pb-12 sm:pt-16 sm:pb-16 flex flex-col gap-5">
          <div className="space-y-4 max-w-3xl">
            <span className="inline-block font-mono text-caption-mono text-mute">
              Software Engineer | Web Developer
            </span>

            <h1 className="flex items-center gap-3 text-display-xl text-ink dark:text-on-primary">
              <span>SAHIL AHMED</span>
              <Thunder />
            </h1>

            <p className="text-body-lg text-body max-w-xl">
              I design and build modern, performant web applications with a
              focus on clarity, reliability, and a clean user experience.
            </p>

            <div className="flex flex-wrap gap-4 items-center pt-2">
              <button
                onClick={() => scrollToSection("projects")}
                className="button-primary"
              >
                View Projects
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="button-secondary"
              >
                Contact Me
              </button>
            </div>
          </div>

          <div className="pt-4">
            <Profile />
          </div>
        </div>
      </section>

      {/* ─── Skills ─── */}
      <section id="skills" className="bg-canvas-soft dark:bg-primary">
        <div className="max-w-6xl mx-auto px-6 py-8 sm:py-10 space-y-4">
          <div className="space-y-1">
            <span className="font-mono text-caption-mono uppercase text-mute">
              Toolkit
            </span>
            <h2 className="text-display-lg text-ink dark:text-on-primary">
              Skills
            </h2>
          </div>

          <div className="card-marketing">
            <h3 className="text-caption-mono uppercase text-mute mb-3">
              Tech Stack
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {skills.map((skill) => (
                <motion.div
                  key={skill}
                  whileHover={{ scale: 1.05 }}
                  className="badge-secondary"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Experience ─── */}
      <section id="experience" className="bg-canvas dark:bg-primary">
        <div className="max-w-6xl mx-auto px-6 py-8 sm:py-10 space-y-4">
          <div className="space-y-1">
            <span className="font-mono text-caption-mono uppercase text-mute">
              Career
            </span>
            <h2 className="text-display-lg text-ink dark:text-on-primary">
              Experience
            </h2>
          </div>

          <div className="card-marketing-large">
            <div className="relative pl-6 sm:pl-8">
              {/* Timeline vertical line */}
              <div className="absolute left-1 sm:left-2 top-1 bottom-1 w-px bg-hairline dark:bg-white/10 pointer-events-none" />

              {/* Timeline dot */}
              <div className="absolute left-0 sm:left-1 top-2 h-2.5 w-2.5 rounded-full border border-hairline-strong dark:border-white/20 bg-canvas dark:bg-primary shadow-sm" />

              <div className="space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                  <div className="space-y-0.5">
                    <p className="text-caption-mono uppercase text-mute">
                      Full Stack Developer (Intern)
                    </p>
                    <h3 className="text-display-sm text-ink dark:text-on-primary">
                      Orbinger
                    </h3>
                  </div>
                  <p className="text-caption-mono uppercase text-mute">
                    June 2025 – August 2025
                  </p>
                </div>

                <ul className="space-y-1 text-body-sm text-body">
                  {experienceBullets.map((bullet, i) => (
                    <li key={i} className="flex gap-2.5">
                      <span className="mt-1.5 h-1 w-1 rounded-full bg-hairline-strong dark:bg-white/30 flex-shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-2 flex flex-wrap gap-2">
                  {experienceTech.map((tech) => (
                    <span
                      key={tech}
                      className="badge-secondary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Projects ─── */}
      <section id="projects" className="bg-canvas-soft dark:bg-primary">
        <div className="max-w-6xl mx-auto px-6 py-8 sm:py-10 space-y-4">
          <div className="space-y-1">
            <span className="font-mono text-caption-mono uppercase text-mute">
              Work
            </span>
            <h2 className="text-display-lg text-ink dark:text-on-primary">
              Projects
            </h2>
            <p className="text-body-md text-body max-w-2xl">
              A selection of work ranging from full-stack platforms to
              AI-powered web experiences.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {projects.map((project, index) => (
              <motion.a
                key={index}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 24 }}
                className="group block card-marketing !p-0 overflow-hidden"
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover border-b border-hairline dark:border-white/10 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="button-primary-sm text-on-primary">
                      View Project
                    </span>
                  </div>
                </div>
                <div className="p-4 space-y-1">
                  <h3 className="text-body-md-strong text-ink dark:text-on-primary">
                    {project.title}
                  </h3>
                  <p className="text-body-sm text-body leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Contact / CTA ─── */}
      <section id="contact" className="bg-canvas dark:bg-primary">
        <div className="max-w-6xl mx-auto px-6 py-8 sm:py-10 space-y-4">
          <div className="space-y-1">
            <span className="font-mono text-caption-mono uppercase text-mute">
              Get in touch
            </span>
            <h2 className="text-display-lg text-ink dark:text-on-primary">
              Contact
            </h2>
            <p className="text-body-md text-body max-w-2xl">
              Have an opportunity, project idea, or collaboration in mind? Drop
              me a message and I&rsquo;ll get back to you.
            </p>
          </div>

          <form
            className="card-marketing-large max-w-lg w-full space-y-4"
            onSubmit={sendEmail}
          >
            <input
              name="from_name"
              type="text"
              placeholder="Your Name"
              required
              className="form-input w-full"
            />
            <input
              name="reply_to"
              type="email"
              placeholder="Your Email"
              required
              className="form-input w-full"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="4"
              required
              className="form-input w-full !h-auto py-3 resize-none"
            />
            <button
              type="submit"
              disabled={isSending}
              className={`w-full button-primary justify-center ${
                isSending ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {isSending ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}

export default Home;
