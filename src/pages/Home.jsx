import { useContext, useState } from "react";
import Thunder from "../components/Thunder";
import Profile from "../components/Profile";
import MeshGradient from "../components/MeshGradient";
import { ThemeContext } from "../context/ThemeContext";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import emailjs from "@emailjs/browser";

import {scrollToSection} from "../utils/scrollToSection";
import {skills} from '../data/skills'
import {projects} from '../data/product'
import {experienceBullets, experienceTech} from '../data/experience'
import Contact from "./Contact";
import Project from "./Project";
import Experience from "./Experience";
import Skills from "./Skills";






function Home() {
  const { darkMode } = useContext(ThemeContext);
  return (
    <main className="min-h-screen bg-canvas-soft dark:bg-primary text-ink dark:text-on-primary">
      {/* ─── Skills ─── */}
     <Skills/>

      {/* ─── Experience ─── */}
    <Experience/>

      {/* ─── Projects ─── */}
      <Project/>

      {/* ─── Contact / CTA ─── */}
      <Contact/>

    </main>
  );
}

export default Home;
