import React from "react";
import profilePic from '../assets/profilePic.jpg';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faYoutube, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Profile = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex justify-center items-center gap-4 p-6 rounded-lg shadow-lg w-fit">
      {/* Profile Picture */}
      <div className="w-32 h-36">
        <img
          src={profilePic}
          alt="Anime Profile"
          className="w-full h-full rounded-md object-cover border-4 border-gray-700"
        />
      </div>

      {/* Social Links */}
      <div className="flex flex-col justify-center items-start space-y-2 font-[poppins] text-2xl">
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
      </div>
    </div>
  );
};

export default Profile;
