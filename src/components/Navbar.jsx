import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import logo from '../assets/logo.png';
import { ThemeContext } from "../context/ThemeContext";
import { useContext } from "react";
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const [menuOpen, setMenuOpen] = useState(false);
     const navigate = useNavigate();


  return (
    <nav className="w-[95vw] ml-2 mt-3 bg-slate-300 dark:bg-gray-950 shadow-md px-4 py-0 h-12 rounded-[5px] border    ">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* Logo */}
        <div onClick={() => navigate('/')} className="flex items-center">
          <img src={logo} alt="Logo" className="h-12 w-auto" />
        </div>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex space-x-6 ml-auto">
          <li><Link to="/" className="text-gray-700 dark:text-gray-300 hover:font-bold cursor-pointer transition-all duration-200">Home</Link></li>
          <li><Link to="/project"  className="text-gray-700 dark:text-gray-300 hover:font-bold cursor-pointer transition-all duration-200">Projects</Link></li>
          <li><Link to="/about" className="text-gray-700 dark:text-gray-300 hover:font-bold cursor-pointer transition-all duration-200">About</Link></li>
          <li><Link to="/contact" className="text-gray-700 dark:text-gray-300 hover:font-bold cursor-pointer transition-all duration-200">Contact</Link></li>
        </ul>

        {/* Dark Mode Toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="ml-auto px-3 py-1 bg-blue-100 text-blue-500 rounded-md dark:bg-gray-700 dark:text-gray-200 active:scale-95 text-sm "
        >
          {darkMode ? "Light" : "Dark"}
        </button>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 rounded-md text-gray-700 dark:text-gray-300"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />} 
        </button>
      </div>

      {/* Mobile Menu */}
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
