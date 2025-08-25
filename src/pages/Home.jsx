import React from 'react'
import BlogSection from '../components/Card'
import Thunder from '../components/Thunder'
import profilePic from '../assets/profilePic.jpg'
import Profile from '../components/Profile'
import { useState, useEffect } from 'react'
import Snowfall from '../components/Snowfall'
import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import { useNavigate } from 'react-router-dom';
import Project from './Project'
import Footer from '../components/Footer'
import ScrollToTopButton from '../components/ScrollToTopButton'
import { motion } from "framer-motion";
function Home() {
  const { darkMode } = useContext(ThemeContext);
  const navigate = useNavigate();
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

  return (
    <>
      {darkMode && <Snowfall />}
      <div className='bg-slate-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen p-2 flex-col justify-center items-center flex '>
        
        <h1 className="flex items-center gap-2 text-slate-600  text-3xl font-bold pb-2 dark:text-amber-500 ">
          SAHIL AHMED <Thunder />
        </h1>

        <h3 className='text-slate-600 dark:text-slate-400 pb-1 '>Software Engineer & Web-Developer</h3>
        <br />

        <Profile />

        {/* <p className=" text-lg mt-5 text-slate-600 font-bold ">
          Hi there! I'm a passionate programmer who loves building innovative and impactful projects.
          I enjoy solving complex problems and continuously exploring new technologies. <br />
          Besides coding, I also like sharing my knowledge through technical blogs and discussions.
        </p> */}

       

        <div className='h-full w-full border-amber-950 overflow-hidden m-1.5 p-2 '>
          <Project />
        </div>

          {/* Skills Section */}
        <div className="mt-6 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">My Skills :</h2>
          <div className="flex flex-wrap gap-4 justify-start">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                drag
                whileDrag={{ scale: 1.2 }}
                dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
                className="rounded-md bg-slate-100 dark:bg-slate-700 py-1 px-3 border border-transparent text-sm text-slate-600 dark:text-slate-200 transition-all shadow-sm cursor-grab active:bg-slate-400"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </div>






      </div>

    </>
  )
}

export default Home
