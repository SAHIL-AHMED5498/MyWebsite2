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

function Home() {
  const { darkMode } = useContext(ThemeContext);
  const navigate = useNavigate();
  return (
    <>
      {darkMode && <Snowfall />}
      <div className='bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 w-full min-h-screen p-2 flex-col justify-items-start items-start '>
        <h1 className="flex items-center gap-2 text-slate-600  text-3xl font-bold pb-2 dark:text-amber-500 ">
          SAHIL AHMED <Thunder />
        </h1>
        <h3 className='text-slate-600 dark:text-slate-400 pb-1 '>Software Engineer & Web-Developer</h3>
        <br />

        <Profile />

        <p className="my-1 text-[1.3rem] leading-[35px] ">
          Hi there! I'm a passionate programmer who loves building innovative and impactful projects.
          I enjoy solving complex problems and continuously exploring new technologies. <br />
          Besides coding, I also like sharing my knowledge through technical blogs and discussions.
        </p>

        <br />

        <button
          onClick={() => navigate('/project')}
          className="bg-black text-white px-7 py-2 rounded-[5px] dark:bg-white dark:text-black active:scale-95 transition-transform duration-150"
        >
          Projects -
        </button>



        <div className='h-full w-full border-amber-950 overflow-hidden m-1.5 p-2 '><p>This is from feature - 1</p></div>



      </div>

      

    </>
  )
}

export default Home
