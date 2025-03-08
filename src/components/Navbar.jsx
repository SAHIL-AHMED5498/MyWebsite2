import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react"; // Importing icons for hamburger menu
import { Link } from "react-router-dom";
import logo from '../assets/logo.png';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  const [menuOpen, setMenuOpen] = useState(false); // State to control mobile menu

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <nav className="w-full bg-slate-300 dark:bg-gray-950 shadow-md px-4 py-2 h-12 ">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-lg font-bold text-gray-900 dark:text-white">
  <img src={logo} alt="Logo" className="h-10 w-auto pb-1" />
</h1>
        {/* Desktop Nav Links (Hidden on Mobile) */}
        <ul className="hidden md:flex space-x-6 ml-auto">
          <li><Link to="/" className="text-gray-700 dark:text-gray-300">Home</Link></li>
          <li><Link to="/project" className="text-gray-700 dark:text-gray-300">Projects</Link></li>
          <li><Link to="/about" className="text-gray-700 dark:text-gray-300">About</Link></li>
          <li><Link to="/contact" className="text-gray-700 dark:text-gray-300">Contact</Link></li>
        </ul>

        {/* Dark Mode Toggle Button */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="px-3 py-1 bg-blue-100 text-blue-500 rounded-md dark:bg-gray-700 dark:text-gray-200 active:scale-95 text-sm ml-auto"
        >
          {darkMode ? "Light" : "Dark"}
        </button>

        {/* Hamburger Menu Button (Mobile Only) */}
        <button 
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 rounded-md text-gray-700 dark:text-gray-300 transition-transform duration-300 ease-in-out"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />} 
        </button>
      </div>

      {/* Mobile Menu - Always in DOM with Smooth Scaling Animation */}
      <div 
        className={`md:hidden bg-white dark:bg-gray-800 p-2 rounded-lg shadow-md overflow-hidden transition-all duration-300 ease-in-out transform origin-top ${
          menuOpen ? "scale-y-100 opacity-100 max-h-[200px]" : "scale-y-0 opacity-0 max-h-0"
        }`}
      >
        <ul className="space-y-2 text-sm">
          <li><Link to="/" className="text-gray-700 dark:text-gray-300 block py-1" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link to="/project" className="text-gray-700 dark:text-gray-300 block py-1" onClick={() => setMenuOpen(false)}>Projects</Link></li>
          <li><Link to="/about" className="text-gray-700 dark:text-gray-300 block py-1" onClick={() => setMenuOpen(false)}>About</Link></li>
          <li><Link to="/contact" className="text-gray-700 dark:text-gray-300 block py-1" onClick={() => setMenuOpen(false)}>Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
