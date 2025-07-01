import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaFolderOpen, FaCode } from 'react-icons/fa';

export default function Header() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinks = [
    { name: 'Home', path: '/', icon: <FaHome className="inline mr-2 mb-1" /> },
    { name: 'Projects', path: '/projects', icon: <FaFolderOpen className="inline mr-2 mb-1" /> },
    { name: 'API', path: '/api-docs', icon: <FaCode className="inline mr-2 mb-1" /> }
  ];

  return (
    <header className="w-full bg-gradient-to-r from-purple-900/80 via-indigo-900/80 to-teal-900/80 backdrop-blur sticky top-0 z-50 shadow-lg">
      <nav className="max-w-5xl mx-auto flex items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-3 group">
          <span className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-teal-300 via-indigo-400 to-purple-400 bg-clip-text text-transparent drop-shadow-lg group-hover:scale-105 transition-transform duration-200 bg-[length:200%_100%] bg-left group-hover:bg-right bg-gradient-move">
            willy-v.com
          </span>
        </Link>
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded focus:outline-none focus:ring-2 focus:ring-teal-400"
          aria-label="Toggle navigation menu"
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
      <div className={`md:hidden transition-all duration-300 ${menuOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden bg-transparent top-0 z-40`}> 
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
    </header>
  );
}