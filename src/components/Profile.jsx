import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faYoutube, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import ResumeDownload from "./ResumeDownload";

const Profile = () => {
  return (
    <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
      <a
        href="https://github.com/SAHIL-AHMED5498"
        className="inline-flex items-center gap-2 hover:text-slate-900 dark:hover:text-white transition-colors"
      >
        <FontAwesomeIcon icon={faGithub} />
        <span>GitHub</span>
      </a>

      <a
        href="https://youtube.com/@sahilahmed_5498?si=5dUtIJAKIIC2OrjF"
        className="inline-flex items-center gap-2 hover:text-slate-900 dark:hover:text-white transition-colors"
      >
        <FontAwesomeIcon icon={faYoutube} />
        <span>YouTube</span>
      </a>

      <a
        href="#"
        className="inline-flex items-center gap-2 hover:text-slate-900 dark:hover:text-white transition-colors"
      >
        <FontAwesomeIcon icon={faInstagram} />
        <span>Instagram</span>
      </a>

      <a
        href="https://www.linkedin.com/in/sahil-ahmed-5a32b2222/"
        className="inline-flex items-center gap-2 hover:text-slate-900 dark:hover:text-white transition-colors"
      >
        <FontAwesomeIcon icon={faLinkedin} />
        <span>LinkedIn</span>
      </a>

      <div className="border-l border-slate-200 dark:border-slate-700 h-5 hidden sm:block" />

      <div>
        <ResumeDownload />
      </div>
    </div>
  );
};

export default Profile;
