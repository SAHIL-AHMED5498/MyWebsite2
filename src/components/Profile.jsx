import React from "react";
import profilePic from '../assets/profilePic.jpg';
import { motion } from "framer-motion";
import { useEffect,useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faYoutube, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import ResumeDownload from "./ResumeDownload";

const Profile = () => {
  const [constraints, setConstraints] = useState({ left: 0, top: 0, right: 0, bottom: 0 });

  useEffect(() => {
    // Calculate constraints based on viewport size and box size (100x100px in this case)
    setConstraints({
      left: 0,
      top: -100,
      right: window.innerWidth -500,
      bottom: window.innerHeight -500,
    });

    // Update constraints when window resizes
    const handleResize = () => {
      setConstraints({
        left: 0,
        top: 0,
        right: window.innerWidth - 500,
        bottom: window.innerHeight - 500,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
   <motion.div
  className="p-2 font-[poppins] text-xl grid grid-cols-2 grid-rows-3 sm:grid-rows-1 sm:flex sm:gap-4 sm:justify-center sm:items-start  gap-x-4 gap-y-2 h-full border-1 border-slate-400"
  drag
  whileDrag={{ scale: 1.4 }}
  dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
>
  <a
    href="https://github.com/SAHIL-AHMED5498"
    className="flex items-center gap-2 text-purple-500 hover:text-purple-300 transition"
  >
    <FontAwesomeIcon icon={faGithub} /> GitHub
  </a>

  <a
    href="https://youtube.com/@sahilahmed_5498?si=5dUtIJAKIIC2OrjF"
    className="flex items-center gap-2 text-red-500 hover:text-red-400 transition"
  >
    <FontAwesomeIcon icon={faYoutube} /> YouTube
  </a>

  <a
    href="#"
    className="flex items-center gap-2 text-pink-500 hover:text-pink-400 transition"
  >
    <FontAwesomeIcon icon={faInstagram} /> Instagram
  </a>

  <a
    href="https://www.linkedin.com/in/sahil-ahmed-5a32b2222/"
    className="flex items-center gap-2 text-blue-500 hover:text-blue-400 transition"
  >
    <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
  </a>

  <div className="mr-5 sm:mr-0">
    <ResumeDownload />
    

  </div>
  
  
</motion.div>



  );
};

export default Profile;
