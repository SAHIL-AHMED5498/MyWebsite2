import React from "react";
import { skills } from "../data/skills";
import { motion } from "framer-motion";
import { scrollToSection } from "../utils/scrollToSection";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";



const Skills = () => {


    return(<>
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
    </>)
}

export default Skills