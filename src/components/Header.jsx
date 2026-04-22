import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaFolderOpen, FaCode } from 'react-icons/fa';

export default function Header() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinks = [
    { name: 'Home', path: '/', icon: <FaHome aria-hidden="true" className="inline mr-2 mb-1" /> },
    { name: 'Projects', path: '/projects', icon: <FaFolderOpen aria-hidden="true" className="inline mr-2 mb-1" /> },
    { name: 'API', path: '/api-docs', icon: <FaCode aria-hidden="true" className="inline mr-2 mb-1" /> }
  ];

  return (
    <header className="w-full bg-gradient-to-r from-purple-900/80 via-indigo-900/80 to-teal-900/80 backdrop-blur sticky top-0 z-50 shadow-lg">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:inline-flex focus:items-center focus:rounded-full focus:border focus:border-teal-300/70 focus:bg-gradient-to-r focus:from-slate-950 focus:via-indigo-950 focus:to-teal-950 focus:px-5 focus:py-2.5 focus:text-sm focus:font-semibold focus:tracking-wide focus:text-teal-100 focus:shadow-[0_10px_30px_rgba(20,184,166,0.35)] focus:ring-2 focus:ring-teal-300 focus:ring-offset-2 focus:ring-offset-slate-950 transition"
      >
        Skip to main content
      </a>
      <nav className="max-w-5xl mx-auto flex items-center justify-between px-6 py-4" aria-label="Primary">
        <Link to="/" className="flex items-center gap-3 group">
          <span className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-teal-300 via-indigo-400 to-purple-400 bg-clip-text text-transparent drop-shadow-lg group-hover:scale-105 transition-transform duration-200 bg-[length:200%_100%] bg-left group-hover:bg-right bg-gradient-move">
            MinasaurV
          </span>
        </Link>
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded focus:outline-none focus:ring-2 focus:ring-teal-400"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen(m => !m)}
        >
          <span className={`block w-6 h-0.5 bg-teal-300 mb-1 transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-teal-300 mb-1 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-teal-300 transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
        <ul className="hidden md:flex gap-6">
          {navLinks.map(link => (
            <li key={link.path}>
              <Link
                to={link.path}
                className={`text-lg font-medium px-3 py-1 rounded-full transition-colors duration-200 hover:bg-teal-700/30 hover:text-teal-200 focus:outline-none focus:ring-2 focus:ring-teal-400 ${location.pathname === link.path ? 'bg-teal-700/40 text-teal-200' : 'text-white'}`}
              >
                {link.icon}{link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      {menuOpen && (
        <div id="mobile-navigation" className="md:hidden transition-all duration-300 overflow-hidden bg-transparent top-0 z-40">
          <ul className="flex flex-row flex-wrap justify-center items-center gap-4 py-4">
            {navLinks.map(link => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`block text-lg font-medium px-4 py-2 rounded-full transition-colors duration-200 hover:bg-teal-700/30 hover:text-teal-200 focus:outline-none focus:ring-2 focus:ring-teal-400 ${location.pathname === link.path ? 'bg-teal-700/40 text-teal-200' : 'text-white'}`}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.icon}{link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}