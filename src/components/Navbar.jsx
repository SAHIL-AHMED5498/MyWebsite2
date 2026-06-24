import {scrollToSection} from "../utils/scrollToSection";
import MeshGradient from "./MeshGradient";
import Thunder from "./Thunder";
import Profile from "./Profile";




const Navbar = () => {



  return(<>      <section
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
        </section></>)
}

export default Navbar