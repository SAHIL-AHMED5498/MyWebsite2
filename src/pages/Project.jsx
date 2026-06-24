import { motion } from "framer-motion";
import { projects } from "../data/product";



const Project = () => {
  return (<>

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
  
  </>)}


export default Project