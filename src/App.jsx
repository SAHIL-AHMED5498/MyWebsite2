import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import Project from './pages/Project'
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';


import { Toaster } from 'react-hot-toast';
function App() {
const [count, setCount] = useState(0)
  

  return (
    <>
    <Toaster    position="top-center"
  reverseOrder={false}/>

    <Navbar/>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project" element={<Project />} />
      </Routes>
      <ScrollToTopButton />
      <div><Footer/></div>

      
      </>
    

   
   
    
  )
}

export default App
