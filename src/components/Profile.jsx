import React from "react";
import profilePic from '../assets/profilePic.jpg';
import { motion } from "framer-motion";
import { useEffect,useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faYoutube, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

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
    <motion.div className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex justify-center items-center gap-4 p-1 rounded-sm shadow-lg w-fit border border-slate-400"   
    drag
    whileDrag={{scale:1.2}}
    dragConstraints={constraints}
    >
      

      

      {/* Social Links */}
      <motion.div className="flex sm:gap-4 justify-center items-start  font-[poppins] text-xl sm:h-6 sm:flex-row  flex-col gap-1 h-full  " 
          drag
          whileDrag={{scale:1.4}}
          dragConstraints={{left:0,top:0,right:0,bottom:0}}
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
      </motion.div>
    </motion.div>
  );
};

export default Profile;
