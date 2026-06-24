import React from "react";
import { experienceBullets, experienceTech } from "../data/experience";



const Experience = () => {



    return(<>
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
    </>)
}

export default Experience;