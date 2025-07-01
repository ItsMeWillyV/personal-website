import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Bubbles from '../components/Bubbles';
import Footer from '../components/Footer';
import Header from '../components/Header';
import portrait from '../assets/portrait.png';
import { API_DOMAIN } from '../api';
import { FaHtml5, FaCss3Alt, FaJs, FaJava, FaReact, FaNodeJs, FaVuejs } from 'react-icons/fa';
import { SiLua, SiTailwindcss, SiExpress, SiDotnet } from 'react-icons/si';
import { TbBrandCSharp } from "react-icons/tb";
import axios from 'axios';

export default function Home() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    axios.get(`${API_DOMAIN}/projects`)
      .then(res => {
        setProjects(res.data.projects?.slice(-3) || []);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Helmet key={window.location.pathname}>
        <title>Home</title>
        <meta name="description" content="Welcome to the website of Willy Vanderpool (WillyV), a Computer Information Science student and Full Stack developer" />
        <meta name="keywords" content="Willy Vanderpool, WillyV, Computer Science, Full Stack Developer, JavaScript, React, Portfolio, OTC, Tech2Gether, Student, Programmer, Developer, Pixel Art, 3D Printing, C#, Lua, Java, Tailwind, Node.js, Express, .NET MAUI" />
        <link rel="canonical" href={window.location.origin + '/'} />
        <meta property="og:title" content="willy-v.com" />
        <meta property="og:description" content="Welcome to the website of Willy Vanderpool (WillyV), a Computer Information Science student and Full Stack developer." />
        <meta property="og:url" content={window.location.origin + '/'} />
        <meta property="og:image" content={window.location.origin + '/images/portrait.png'} />
        <meta itemProp="name" content="willy-v.com" />
        <meta itemProp="description" content="Welcome to the website of Willy Vanderpool (WillyV), a Computer Information Science student and Full Stack developer." />
        <meta itemProp="image" content={window.location.origin + '/images/portrait.png'} />
      </Helmet>
      <div className="min-h-screen flex flex-col bg-gradient-to-b from-purple-900 to-black relative overflow-y-auto">
        <Header />
        <Bubbles />
        <main className="flex flex-col items-center justify-center flex-1 w-full px-4 py-12 md:py-20 z-10 relative">
          <img 
            src={portrait}
            alt="Portrait of WillyV" 
            className="w-32 h-32 md:w-48 md:h-48 rounded-full shadow-lg mb-6 object-cover border-4 border-transparent bg-gradient-to-br from-purple-400 via-indigo-500 to-teal-400 p-1 image-render-pixelated animate-spin-in"
            style={{ backgroundClip: 'padding-box, border-box', backgroundOrigin: 'border-box' }}
          />
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">Willy Vanderpool</h1>
          <h2 className="text-xl md:text-2xl font-semibold text-teal-300 mb-2 text-center">Computer Information Science Student & Fullstack Developer</h2>
          <div className="text-purple-100 text-lg leading-relaxed text-center max-w-2xl w-full mb-8 transition-opacity duration-1000 opacity-0 animate-fade-in">
            <p>
              Hello there! I'm Willy Vanderpool, a 17-year-old Computer Information Science student at Ozarks Technical Community College (OTC). I'm currently the president of OTC's tech club, Tech2Gether. My programming journey began long before college, driven by curiosity and creativity. I’m experienced with HTML, CSS, JavaScript, Java, Lua, and C#. Beyond programming, I enjoy drawing pixel art, collecting Pokémon cards, 3D printing, and playing video games with my friends.
            </p>
          </div>
          <section className="w-full max-w-3xl mx-auto mt-12 mb-8 bg-black/40 rounded-xl shadow-lg p-8 border border-purple-900 transition-opacity duration-1000 opacity-0 animate-fade-in delay-200">
            <h2 className="text-2xl font-bold text-teal-300 mb-4">My Projects</h2>
            {loading && <p className="text-white">Loading projects...</p>}
            {!loading && error && <p className="text-red-500">Error: {error}</p>}
            {!loading && !error && (
              <ul className="space-y-4">
                {projects.map((project, idx) => (
                  <li
                    key={project.id}
                    className="bg-gradient-to-r from-purple-900 via-indigo-900 to-teal-900 rounded-lg p-4 shadow flex flex-col md:flex-row md:items-center md:justify-between gap-4 transition-transform duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-xl transition-opacity duration-1000 opacity-0 animate-fade-in"
                    style={{ animationDelay: `${idx * 0.15 + 0.1}s` }}
                  >
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-4 mb-2">
                        <img
                          src={`${API_DOMAIN}/images/projects/${project.id}.png`}
                          alt={project.name + ' thumbnail'}
                          className="w-14 h-14 object-cover rounded-md border border-teal-800 bg-black/30 flex-shrink-0"
                        />
                        <div>
                          <span className="text-lg font-semibold text-white block truncate">{project.name}</span>
                          <div className="flex flex-wrap gap-2 mt-1">
                            {project.tags && project.tags.map((tag, i) => (
                              <span
                                key={i}
                                className="bg-teal-700/30 text-teal-200 px-2 py-0.5 rounded-full text-xs font-medium"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                      <p className="text-purple-100 text-sm mb-2 line-clamp-2">{project.description}</p>
                    </div>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {project.buttons.map((button, i) => (
                        <a
                          key={i}
                          href={button.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block px-4 py-2 bg-gradient-to-r from-purple-700 via-indigo-500 to-teal-500 text-white rounded-full font-semibold shadow hover:scale-105 transition-transform whitespace-nowrap text-center mx-1 w-full md:w-auto"
                        >
                          {button.text}
                        </a>
                      ))}
                    </div>
                  </li>
                ))}
              </ul>
            )}
            <div className="mt-6 text-right">
              <a href="/projects" className="inline-block px-6 py-2 bg-gradient-to-r from-purple-700 via-indigo-500 to-teal-500 text-white rounded-full font-semibold shadow hover:scale-105 transition-transform">See All Projects</a>
            </div>
          </section>
          <section className="w-full max-w-3xl mx-auto mb-12 bg-black/40 rounded-xl shadow-lg p-8 border border-indigo-900 transition-opacity duration-1000 opacity-0 animate-fade-in delay-400">
            <h2 className="text-2xl font-bold text-indigo-300 mb-4">API</h2>
            <p className="text-purple-100 mb-4">Pokem ipsum dolor sit amet Rapidash quis nostrud exercitation Glalie Jellicent Azumarill Caterpie.</p>
            <a href="/api-docs" className="inline-block px-6 py-2 bg-gradient-to-r from-purple-700 via-indigo-500 to-teal-500 text-white rounded-full font-semibold shadow hover:scale-105 transition-transform">View API Docs</a>
          </section>
          <section className="w-full max-w-3xl mx-auto mb-12 bg-black/40 rounded-xl shadow-lg p-8 border border-teal-900 transition-opacity duration-1000 opacity-0 animate-fade-in delay-300">
            <h2 className="text-2xl font-bold text-teal-300 mb-4">Skills & Tech Stack</h2>
            <div className="flex flex-col md:flex-row gap-8 justify-center">
              <div>
                <h3 className="text-lg font-semibold text-purple-200 mb-2 text-center">Languages</h3>
                <div className="flex flex-wrap gap-4 justify-center">
                  <span title="HTML" className="flex items-center gap-2 bg-purple-800/60 text-purple-100 px-4 py-2 rounded-full font-semibold shadow"><FaHtml5 className="text-purple-200" /> HTML</span>
                  <span title="CSS" className="flex items-center gap-2 bg-indigo-800/60 text-indigo-100 px-4 py-2 rounded-full font-semibold shadow"><FaCss3Alt className="text-indigo-200" /> CSS</span>
                  <span title="JavaScript" className="flex items-center gap-2 bg-yellow-700/40 text-yellow-100 px-4 py-2 rounded-full font-semibold shadow"><FaJs className="text-yellow-200" /> JavaScript</span>
                  <span title="Java" className="flex items-center gap-2 bg-blue-900/60 text-blue-100 px-4 py-2 rounded-full font-semibold shadow"><FaJava className="text-blue-200" /> Java</span>
                  <span title="Lua" className="flex items-center gap-2 bg-blue-800/60 text-blue-100 px-4 py-2 rounded-full font-semibold shadow"><SiLua className="text-blue-200" /> Lua</span>
                  <span title="C#" className="flex items-center gap-2 bg-teal-900/60 text-teal-100 px-4 py-2 rounded-full font-semibold shadow"><TbBrandCSharp className="text-teal-200" /> C#</span>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-teal-200 mb-2 text-center">Frameworks</h3>
                <div className="flex flex-wrap gap-4 justify-center">
                  <span title="React" className="flex items-center gap-2 bg-cyan-900/60 text-cyan-100 px-4 py-2 rounded-full font-semibold shadow"><FaReact className="text-cyan-200" /> React</span>
                  <span title="Vue.js" className="flex items-center gap-2 bg-green-900/60 text-green-100 px-4 py-2 rounded-full font-semibold shadow"><FaVuejs className="text-green-200" /> Vue.js</span>
                  <span title="Tailwind CSS" className="flex items-center gap-2 bg-teal-800/60 text-teal-100 px-4 py-2 rounded-full font-semibold shadow"><SiTailwindcss className="text-teal-200" /> Tailwind CSS</span>
                  <span title="Node.js" className="flex items-center gap-2 bg-lime-900/60 text-lime-100 px-4 py-2 rounded-full font-semibold shadow"><FaNodeJs className="text-lime-200" /> Node.js</span>
                  <span title="Express" className="flex items-center gap-2 bg-gray-800/60 text-gray-100 px-4 py-2 rounded-full font-semibold shadow"><SiExpress className="text-gray-200" /> Express</span>
                  <span title=".NET MAUI" className="flex items-center gap-2 bg-blue-900/60 text-blue-100 px-4 py-2 rounded-full font-semibold shadow"><SiDotnet className="text-blue-200" /> .NET MAUI</span>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
