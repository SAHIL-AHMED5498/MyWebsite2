import React from 'react'
import BlogSection from '../components/Card'
import Thunder from '../components/Thunder'
import profilePic from '../assets/profilePic.jpg'
import Profile from '../components/Profile'
import { useState,useEffect } from 'react'
import Snowfall from '../components/Snowfall'
import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

function Home() {
  const { darkMode } = useContext(ThemeContext);
  return (
    <>
      {darkMode && <Snowfall/>}
       <div className='bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 w-full min-h-screen p-5 flex-col justify-items-start items-start '>
       <h1 className="flex items-center gap-2 text-slate-600  text-3xl font-bold pb-2 dark:text-amber-500">
  SAHIL AHMED <Thunder />
</h1>
      <h3 className='text-slate-600 dark:text-slate-400 pb-2 '>Software Engineer & Web-Developer</h3>
      <Profile/> <br />

      <p className="my-2 text-[1.3rem]">
  Hi there! I'm a passionate programmer who loves building innovative and impactful projects.  
  I enjoy solving complex problems and continuously exploring new technologies.  
  Besides coding, I also like sharing my knowledge through technical blogs and discussions.  
</p>

      

      <BlogSection/>

      
    
    </div>
  
      
    
    </>
  )
}

export default Home
