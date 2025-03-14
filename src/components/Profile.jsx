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
    <motion.div className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex justify-center items-center gap-4 p-6 rounded-lg shadow-lg w-fit border border-slate-400"   
    drag
    whileDrag={{scale:1.2}}
    dragConstraints={constraints}
    >
      {/* Profile Picture */}
      <div className="w-32 h-36">
        <img
          src={profilePic}
          alt="Anime Profile"
          className="w-full h-full rounded-md object-cover border-4 border-gray-700"
        />
      </div>

      {/* Social Links */}
      <motion.div className="flex flex-col justify-center items-start space-y-2 font-[poppins] text-2xl" 
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
