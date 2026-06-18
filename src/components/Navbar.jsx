import { useState, useEffect, useRef, useContext } from "react";
import { X } from "lucide-react";
import { ThemeContext } from "../context/ThemeContext";

const NAV_LINKS = [
  { id: "hero", label: "Home" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const Navbar = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const handler = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [menuOpen]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav
      className={`sticky top-0 z-40 w-full h-16 transition-all duration-300 ${
        darkMode ? "glass-dark" : "glass"
      } ${scrolled ? "shadow-level-2" : ""}`}
    >
      <div className="max-w-5xl mx-auto h-full px-6 flex items-center justify-between gap-6">
        {/* Brand */}
        <button
          onClick={() => scrollToSection("hero")}
          className="font-mono text-sm font-medium tracking-tight text-ink dark:text-white hover:opacity-70 transition-opacity shrink-0"
        >
          sahilcodes.live
        </button>

        {/* Desktop Nav Links + Theme Toggle */}
        <div className="hidden md:flex items-center gap-1 ml-auto">
          <ul className="flex items-center gap-1 text-body-sm">
            {NAV_LINKS.map(({ id, label }) => (
              <li key={id}>
                <button
                  onClick={() => scrollToSection(id)}
                  className="rounded-full px-3 py-2 text-body hover:text-ink hover:bg-canvas-soft dark:text-white/60 dark:hover:text-white dark:hover:bg-white/5 transition-all duration-200"
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>

          {/* Theme Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="icon-button-circular w-9 h-9 ml-2 dark:text-white transition-colors duration-200"
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            <span
              className={`inline-block transition-transform duration-500 ease-out ${
                darkMode ? "rotate-180" : "rotate-0"
              }`}
            >
              {darkMode ? (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="5" />
                  <line x1="12" y1="1" x2="12" y2="3" />
                  <line x1="12" y1="21" x2="12" y2="23" />
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                  <line x1="1" y1="12" x2="3" y2="12" />
                  <line x1="21" y1="12" x2="23" y2="12" />
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                </svg>
              ) : (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              )}
            </span>
          </button>
        </div>

        {/* Mobile: theme toggle + menu button */}
        <div className="flex md:hidden items-center gap-3 shrink-0">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="icon-button-circular w-9 h-9 dark:text-white transition-colors duration-200"
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            <span
              className={`inline-block transition-transform duration-500 ease-out ${
                darkMode ? "rotate-180" : "rotate-0"
              }`}
            >
              {darkMode ? (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="5" />
                  <line x1="12" y1="1" x2="12" y2="3" />
                  <line x1="12" y1="21" x2="12" y2="23" />
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                  <line x1="1" y1="12" x2="3" y2="12" />
                  <line x1="21" y1="12" x2="23" y2="12" />
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                </svg>
              ) : (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              )}
            </span>
          </button>

          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="nav-cta-ask-ai w-9 h-9 !px-0 !justify-center dark:text-white"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <span
              className={`inline-block transition-transform duration-300 ease-out ${
                menuOpen ? "rotate-90 scale-90" : "rotate-0 scale-100"
              }`}
            >
              {menuOpen ? <X size={16} /> : (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              )}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className={`md:hidden overflow-hidden transition-all duration-300 ease-out border-t border-hairline/30 ${
          darkMode
            ? "bg-[rgba(15,15,15,0.92)] backdrop-blur-xl"
            : "bg-[rgba(255,255,255,0.92)] backdrop-blur-xl"
        } ${
          menuOpen
            ? "max-h-64 opacity-100"
            : "max-h-0 opacity-0 border-t-transparent"
        }`}
      >
        <div className="px-6 py-3 flex flex-col gap-1 text-body-sm">
          {NAV_LINKS.map(({ id, label }, i) => (
            <button
              key={id}
              onClick={() => {
                scrollToSection(id);
                setMenuOpen(false);
              }}
              className={`text-left rounded-lg px-3 py-2.5 text-body hover:text-ink dark:text-white/70 dark:hover:text-white hover:bg-canvas-soft dark:hover:bg-white/5 transition-all duration-200 ${
                menuOpen
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-3 opacity-0"
              }`}
              style={{ transitionDelay: menuOpen ? `${i * 50}ms` : "0ms" }}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
