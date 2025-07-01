import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { GiTeapot } from 'react-icons/gi';

export default function Footer() {
  return (
    <footer className="mt-auto w-full text-center py-4 bg-transparent text-purple-200 font-medium shadow-inner z-10 relative">
      <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-8">
        <span>&copy; {new Date().getFullYear()} WillyV</span>
        <a href="https://github.com/itsmewillyv" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-teal-300 transition-colors duration-200">
          <FaGithub className="w-4 h-4" />
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/willy-vanderpool/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-teal-300 transition-colors duration-200">
          <FaLinkedin className="w-4 h-4" />
          LinkedIn
        </a>
        <a href="/teapot" className="flex items-center gap-1 hover:text-teal-300 transition-colors duration-200">
          <GiTeapot className="w-4 h-4" />
          I'm a Teapot
        </a>
      </div>
    </footer>
  );
}
