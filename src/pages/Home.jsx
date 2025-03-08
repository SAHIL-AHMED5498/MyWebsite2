import React from 'react'
import BlogSection from '../components/Card'
import Thunder from '../components/Thunder'
import profilePic from '../assets/profilePic.jpg'
import Profile from '../components/Profile'

function Home() {
  return (
    <>
       <div className='bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 w-full min-h-screen p-5 flex-col justify-items-start items-start '>
       <h1 className="flex items-center gap-2 text-slate-600  text-3xl font-bold pb-2 dark:text-amber-500">
  SAHIL AHMED <Thunder />
</h1>
      <h3 className='text-slate-500 pb-2 '>Software Engineer & Web-Developer</h3>
      <Profile/> <br />


     
      <p className='my-2 '>Hi there, i m , a programmer who loves building new things . I also like working in projects which i find interest in. In addition to coding i also watch animes and likes to write blogs about it.</p>


      

      <BlogSection/>

      
    
    </div>
  
      
    
    </>
  )
}

export default Home
