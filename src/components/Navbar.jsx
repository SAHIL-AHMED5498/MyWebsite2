import { useState } from "react";
import { X } from "lucide-react";
import { ThemeContext } from "../context/ThemeContext";
import { useContext } from "react";

const Navbar = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className="sticky top-0 z-40 w-full border-b border-slate-200/80 dark:border-slate-800/80 bg-white/80 dark:bg-slate-950/80 backdrop-blur">
      <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between gap-6">
        {/* Brand text (no logo) */}
        <button
          onClick={() => scrollToSection('hero')}
          className="text-[11px] font-semibold tracking-[0.18em] uppercase text-slate-800 dark:text-slate-50 hover:text-slate-500 dark:hover:text-slate-300 transition-colors"
        >
          Sahil Ahmed
        </button>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex items-center gap-6 ml-auto text-[11px] font-medium tracking-[0.18em] uppercase">
          <li>
            <button
              onClick={() => scrollToSection('hero')}
              className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              Home
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              Projects
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              Contact
            </button>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden inline-flex items-center justify-center rounded-full border border-slate-300/80 dark:border-slate-700/80 px-3 py-1 text-[11px] font-medium tracking-[0.18em] uppercase text-slate-700 dark:text-slate-200"
        >
          {menuOpen ? <X size={18} /> : "Menu"}
        </button>

        {/* Dark Mode Toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="hidden md:inline-flex items-center justify-center rounded-full border border-slate-300/80 dark:border-slate-700/80 px-3 py-1 text-[11px] font-medium tracking-[0.18em] uppercase text-slate-700 dark:text-slate-200 hover:bg-slate-100/60 dark:hover:bg-slate-900/60 transition-colors"
        >
          {darkMode ? "Light" : "Dark"}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden border-t border-slate-200/80 dark:border-slate-800/80 bg-white/95 dark:bg-slate-950/95 px-4 overflow-hidden transition-all duration-200 ease-in-out ${
          menuOpen ? "max-h-40 py-3" : "max-h-0 py-0"
        }`}
      >
        <div className="flex flex-col gap-2 text-[11px] font-medium tracking-[0.18em] uppercase text-slate-700 dark:text-slate-200">
          <button
            onClick={() => { scrollToSection('hero'); setMenuOpen(false); }}
            className="text-left hover:text-slate-900 dark:hover:text-white"
          >
            Home
          </button>
          <button
            onClick={() => { scrollToSection('projects'); setMenuOpen(false); }}
            className="text-left hover:text-slate-900 dark:hover:text-white"
          >
            Projects
          </button>
          <button
            onClick={() => { scrollToSection('contact'); setMenuOpen(false); }}
            className="text-left hover:text-slate-900 dark:hover:text-white"
          >
            Contact
          </button>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="mt-1 self-start rounded-full border border-slate-300/80 dark:border-slate-700/80 px-3 py-1 text-[11px] font-medium tracking-[0.18em] uppercase text-slate-700 dark:text-slate-200 hover:bg-slate-100/60 dark:hover:bg-slate-900/60 transition-colors"
          >
            {darkMode ? "Light" : "Dark"}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
