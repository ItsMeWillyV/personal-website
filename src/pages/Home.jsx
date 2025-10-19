import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Bubbles from '../components/Bubbles';
import Footer from '../components/Footer';
import Header from '../components/Header';
import portrait from '../assets/portrait.png';
import { API_DOMAIN } from '../api';
import { FaHtml5, FaCss3Alt, FaJs, FaJava, FaReact, FaNodeJs, FaVuejs, FaChevronDown, FaChevronUp, FaCodeBranch, FaPlus, FaBug, FaGitAlt, FaStar, FaCode, FaPython } from 'react-icons/fa';
import { SiLua, SiTailwindcss, SiExpress, SiDotnet, SiMysql } from 'react-icons/si';
import { TbBrandCSharp } from "react-icons/tb";
import axios from 'axios';

export default function Home() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [openFAQ, setOpenFAQ] = useState(null);
  const [githubActivity, setGithubActivity] = useState([]);
  const [githubLoading, setGithubLoading] = useState(true);
  const Splashes = [
    'Now with more purple!',
    'In the GitHub, straight up "forking it"',
    "We taught the rocks how to count and we've regretted it ever since.",
    "Debugging is like being the detective in a crime movie where you're also the murderer.",
    "Not afraid to commit!",
    "May the source be with you.",
    "Segmentation fault (core dumped)",
    "Database_2 - The SQL",
    "I used to be an adventurer like you, then I took a merge conflict to the knee.",
    "git push origin main --force",
    "sudo rm -rf /"

  ];
  const getRandomSplash = () => {
    return Splashes[Math.floor(Math.random() * Splashes.length)];
  };
  const [splash, setSplash] = useState(() => getRandomSplash());

  const shuffleSplash = () => {
    setSplash(() => getRandomSplash());
  };

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqData = [
    {
      question: "What is Tech2Gether?",
      answer: "Tech2Gether is the tech club at Ozarks Technical Community College. We focus on bringing together students interested in technology, programming, and cybersecurity. We organize workshops and tech talks to help students grow their skills and engage with industry professionals."
    },
        {
      question: "What kind of projects do you enjoy working on?",
      answer: "I'm probably most skilled with web and Node.js applications, however, I enjoy developing pretty much anything that solves real-world problems, and love adding new weapons to my development arsenal."
    },
    {
      question: "Are you available for freelance work?",
      answer: "As a full-time student who has many responsibilities, I have limited availability, but I'm open to discussing interesting projects that align with my goals and expertise. Feel free to reach out via LinkedIn."
    },
    {
      question: "What are your future career goals?",
      answer: "I'm focused on completing my Computer Information Science degree while gaining practical experience through projects and leadership roles. I'm particularly interested in fullstack development and exploring opportunities in software engineering after graduation."
    }
  ];

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

    // Fetch GitHub activity
    setGithubLoading(true);
    axios.get('https://api.github.com/users/ItsMeWillyV/events/public')
      .then(res => {
        setGithubActivity(res.data.slice(0, 5));
        setGithubLoading(false);
      })
      .catch(err => {
        console.error('GitHub API error:', err);
        setGithubLoading(false);
      });
  }, []);

  return (
    <>
      <Helmet key={window.location.pathname}>
        <title>Home</title>
        <meta name="description" content="Welcome to the website of Wilhelmina Vanderpool, a Web Developer and Student Leader." />
        <meta name="keywords" content="Wilhelmina Vanderpool, MinasaurV, Computer Science, Full Stack Developer, JavaScript, React, Portfolio, OTC, Tech2Gether, Student, Programmer, Developer, Pixel Art, 3D Printing, C#, Lua, Java, Tailwind, Node.js, Express, .NET MAUI" />
        <link rel="canonical" href={window.location.origin + '/'} />
        <meta property="og:title" content="MinasaurV" />
        <meta property="og:description" content="Welcome to the website of Wilhelmina Vanderpool, a Web Developer and Student Leader." />
        <meta property="og:url" content={window.location.origin + '/'} />
  <meta property="og:image" content={portrait} />
        <meta itemProp="name" content="MinasaurV" />
        <meta itemProp="description" content="Welcome to the website of Wilhelmina Vanderpool, a Web Developer and Student Leader." />
        <meta itemProp="image" content={portrait} />
      </Helmet>
      <div className="min-h-screen flex flex-col bg-gradient-to-b from-purple-900 to-black relative overflow-y-auto">
        <Header />
        <Bubbles />
        <main className="flex flex-col items-center justify-center flex-1 w-full px-4 py-12 md:py-20 z-10 relative">
          <img 
            src={portrait}
            alt="A young woman with dark-brown hair and eyes smiling warmly." 
            className="w-32 h-32 md:w-48 md:h-48 rounded-full shadow-lg mb-6 object-cover border-4 border-transparent bg-gradient-to-br from-purple-400 via-indigo-500 to-teal-400 p-1 image-render-pixelated animate-spin-in"
            style={{ backgroundClip: 'padding-box, border-box', backgroundOrigin: 'border-box' }}
          />
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-0 text-center">Wilhelmina Vanderpool</h1>
            <a
              href="https://en.pronouns.page/@minasaur"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/40 border border-purple-900 text-purple-100 text-sm font-semibold shadow-lg transition-all duration-200 hover:bg-black/50 focus:outline-none focus:ring-2 focus:ring-purple-800/50 no-underline"
              aria-label={`Pronouns: she/her`}
              title="Pronouns: she/her"
            >
              🏳️‍⚧️ she/her
            </a>
          </div>
          <h2 className="text-xl md:text-2xl font-semibold text-teal-300 mt-2 mb-1 text-center">Web Developer & Student Leader</h2>
            <div>
              <button
                type="button"
                onClick={shuffleSplash}
                className="text-xs md:text-sm font-medium text-indigo-200/90 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-300/40 rounded px-2 py-0.5 cursor-pointer"
                aria-label="Shuffle splash text"
                title="Click to shuffle"
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-indigo-200 to-teal-200">
                  {splash}
                </span>
              </button>
            </div>
          <section className="w-full max-w-3xl mx-auto mt-6 mb-8 bg-black/40 rounded-xl shadow-lg p-8 border border-purple-900 transition-opacity duration-1000 opacity-0 animate-fade-in">
            <h3 className="text-2xl font-bold text-purple-300 mb-4 text-left">About Me</h3>
            <p className="text-purple-100 leading-relaxed mb-6 text-left">
              Hello there! I'm Mina, a Computer Information Science student at Ozarks Technical Community College (Ozarks Tech). I work in Ozarks Tech's Web Services department and lead the campus tech club, Tech2Gether. I love building useful things and learning new technologies.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-purple-900/30 border border-purple-800 rounded-lg p-4">
                <h4 className="text-lg font-semibold text-purple-200 mb-2">Currently</h4>
                <ul className="list-disc pl-5 space-y-1 text-purple-100/90">
                  <li>Ozarks Tech
                    <ul className="list-disc pl-5 space-y-1 text-purple-100/90">
                      <li>CIS student</li>
                      <li>Web Services Office Assistant</li>
                      <li>President of Tech2Gether (Tech Club)</li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div className="bg-indigo-900/30 border border-indigo-800 rounded-lg p-4">
                <h4 className="text-lg font-semibold text-indigo-200 mb-2">What I build</h4>
                <ul className="list-disc pl-5 space-y-1 text-indigo-100/90">
                  <li>Web applications</li>
                  <li>Chatbots</li>
                  <li>Mods &amp; Plugins</li>
                  <li>Scripts to make my life easier (I'm lazy)</li>
                </ul>
              </div>
              <div className="bg-teal-900/30 border border-teal-800 rounded-lg p-4">
                <h4 className="text-lg font-semibold text-teal-200 mb-2">Hobbies</h4>
                <ul className="list-disc pl-5 space-y-1 text-teal-100/90">
                  <li>Drawing pixel art</li>
                  <li>Playing videogames</li>
                  <li>Collecting Pokémon cards</li>
                  <li>Learning German</li>
                </ul>
              </div>
              <div className="bg-fuchsia-900/30 border border-fuchsia-800 rounded-lg p-4">
                <h4 className="text-lg font-semibold text-fuchsia-200 mb-2">Fun facts</h4>
                <ul className="list-disc pl-5 space-y-1 text-fuchsia-100/90">
                  <li>18 years old</li>
                  <li>
                    Pronouns: 
                    {' '}
                    <a
                      href="https://en.pronouns.page/@minasaur"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline decoration-fuchsia-400/60 underline-offset-2 hover:decoration-fuchsia-200"
                    >
                      she/her
                    </a>
                  </li>
                  <li>You just lost The Game</li>
                  <li>Favorite colors: purple and green</li>
                </ul>
              </div>
            </div>
          </section>
          <section className="w-full max-w-3xl mx-auto mt-12 mb-8 bg-black/40 rounded-xl shadow-lg p-8 border border-purple-900 transition-opacity duration-1000 opacity-0 animate-fade-in delay-200">
            <h3 className="text-2xl font-bold text-purple-300 mb-4">My Projects</h3>
            {loading && <p className="text-white">Loading projects...</p>}
            {!loading && error && <p className="text-red-500">Error: {error}</p>}
            {!loading && !error && (
              <ul className="space-y-4">
                {projects.map((project, idx) => (
                  <li
                    key={project.id}
                    className="bg-gradient-to-r from-purple-900 via-indigo-900 to-teal-900 rounded-lg p-4 shadow flex flex-col md:flex-row md:items-center md:justify-between gap-4 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-xl opacity-0 animate-fade-in"
                    style={{ animationDelay: `${idx * 0.15 + 0.1}s` }}
                  >
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-4 mb-2">
                        <img
                          src={`${API_DOMAIN}/images/projects/${project.id}.png`}
                          alt={project.name + ' thumbnail'}
                          className="w-14 h-14 object-cover rounded-md flex-shrink-0"
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
            <div className="mt-6 text-center md:text-right">
              <a href="/projects" className="inline-block px-6 py-2 bg-gradient-to-r from-purple-700 via-indigo-500 to-teal-500 text-white rounded-full font-semibold shadow hover:scale-105 transition-transform">See All Projects</a>
            </div>
          </section>
          <section className="w-full max-w-3xl mx-auto mb-12 bg-black/40 rounded-xl shadow-lg p-8 border border-indigo-900 transition-opacity duration-1000 opacity-0 animate-fade-in delay-300">
            <h3 className="text-2xl font-bold text-indigo-300 mb-4">Recent GitHub Activity</h3>
            {githubLoading && <p className="text-white">Loading GitHub activity...</p>}
            {!githubLoading && githubActivity.length === 0 && <p className="text-gray-400">Unable to fetch GitHub activity.</p>}
            {!githubLoading && githubActivity.length > 0 && (
              <div className="space-y-4">
                {githubActivity.map((event, idx) => (
                  <div
                    key={event.id}
                    className="bg-gradient-to-r from-indigo-900 via-purple-900 to-indigo-900 rounded-lg p-4 shadow flex items-center gap-4 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-xl opacity-0 animate-fade-in"
                    style={{ animationDelay: `${idx * 0.15 + 0.1}s` }}
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-indigo-700/50 flex items-center justify-center border border-indigo-600">
                      <span className="text-xl">
                        {event.type === 'PushEvent' ? <FaGitAlt className="text-green-400" /> : 
                         event.type === 'CreateEvent' ? <FaPlus className="text-blue-400" /> : 
                         event.type === 'IssuesEvent' ? <FaBug className="text-red-400" /> : 
                         event.type === 'PullRequestEvent' ? <FaCodeBranch className="text-purple-400" /> : 
                         event.type === 'WatchEvent' ? <FaStar className="text-yellow-400" /> : 
                         event.type === 'ForkEvent' ? <FaCodeBranch className="text-teal-400" /> : <FaCode className="text-indigo-400" />}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-indigo-200 font-semibold text-sm">
                          {event.type === 'PushEvent' ? 'Pushed to' : 
                           event.type === 'CreateEvent' ? 'Created' : 
                           event.type === 'IssuesEvent' ? 'Opened issue in' : 
                           event.type === 'PullRequestEvent' ? 'Created pull request in' : 
                           event.type === 'WatchEvent' ? 'Starred' : 
                           event.type === 'ForkEvent' ? 'Forked' : 'Activity in'}
                        </span>
                        <a 
                          href={`https://github.com/${event.repo.name}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white hover:text-indigo-200 font-medium text-sm truncate"
                        >
                          {event.repo.name}
                        </a>
                      </div>
                      {event.payload.commits && event.payload.commits.length > 0 && (
                        <p className="text-indigo-300/80 text-xs truncate mb-1">
                          {event.payload.commits[0].message}
                        </p>
                      )}
                      {event.payload.description && (
                        <p className="text-indigo-300/80 text-xs truncate mb-1">
                          {event.payload.description}
                        </p>
                      )}
                      <p className="text-indigo-400/60 text-xs">
                        {new Date(event.created_at).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
            <div className="mt-6 text-center md:text-right">
              <a 
                href="https://github.com/ItsMeWillyV" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-2 bg-gradient-to-r from-purple-700 via-indigo-500 to-teal-500 text-white rounded-full font-semibold shadow hover:scale-105 transition-transform"
              >
                View GitHub Profile
              </a>
            </div>
          </section>
          <section className="w-full max-w-3xl mx-auto mb-12 bg-black/40 rounded-xl shadow-lg p-8 border border-teal-900 transition-opacity duration-1000 opacity-0 animate-fade-in delay-400">
            <h3 className="text-2xl font-bold text-teal-300 mb-4">Skills & Tech Stack</h3>
            <div className="flex flex-col md:flex-row gap-8 justify-center">
              <div>
                <h4 className="text-lg font-semibold text-purple-200 mb-2 text-center">Languages</h4>
                <div className="flex flex-wrap gap-4 justify-center">
                  <span title="HTML" className="flex items-center gap-2 bg-purple-800/60 text-purple-100 px-4 py-2 rounded-full font-semibold shadow"><FaHtml5 className="text-purple-200" /> HTML</span>
                  <span title="CSS" className="flex items-center gap-2 bg-indigo-800/60 text-indigo-100 px-4 py-2 rounded-full font-semibold shadow"><FaCss3Alt className="text-indigo-200" /> CSS</span>
                  <span title="JavaScript" className="flex items-center gap-2 bg-yellow-700/40 text-yellow-100 px-4 py-2 rounded-full font-semibold shadow"><FaJs className="text-yellow-200" /> JavaScript</span>
                  <span title="Java" className="flex items-center gap-2 bg-blue-900/60 text-blue-100 px-4 py-2 rounded-full font-semibold shadow"><FaJava className="text-blue-200" /> Java</span>
                  <span title="Lua" className="flex items-center gap-2 bg-blue-800/60 text-blue-100 px-4 py-2 rounded-full font-semibold shadow"><SiLua className="text-blue-200" /> Lua</span>
                  <span title="C#" className="flex items-center gap-2 bg-teal-900/60 text-teal-100 px-4 py-2 rounded-full font-semibold shadow"><TbBrandCSharp className="text-teal-200" /> C#</span>
                  <span title="Python" className="flex items-center gap-2 bg-green-800/60 text-green-100 px-4 py-2 rounded-full font-semibold shadow"><FaPython className="text-green-200" /> Python</span>
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-teal-200 mb-2 text-center">Frameworks</h4>
                <div className="flex flex-wrap gap-4 justify-center">
                  <span title="React" className="flex items-center gap-2 bg-cyan-900/60 text-cyan-100 px-4 py-2 rounded-full font-semibold shadow"><FaReact className="text-cyan-200" /> React</span>
                  <span title="Vue.js" className="flex items-center gap-2 bg-green-900/60 text-green-100 px-4 py-2 rounded-full font-semibold shadow"><FaVuejs className="text-green-200" /> Vue.js</span>
                  <span title="Tailwind CSS" className="flex items-center gap-2 bg-teal-800/60 text-teal-100 px-4 py-2 rounded-full font-semibold shadow"><SiTailwindcss className="text-teal-200" /> Tailwind CSS</span>
                  <span title="Node.js" className="flex items-center gap-2 bg-lime-900/60 text-lime-100 px-4 py-2 rounded-full font-semibold shadow"><FaNodeJs className="text-lime-200" /> Node.js</span>
                  <span title="Express" className="flex items-center gap-2 bg-gray-800/60 text-gray-100 px-4 py-2 rounded-full font-semibold shadow"><SiExpress className="text-gray-200" /> Express</span>
                  <span title=".NET MAUI" className="flex items-center gap-2 bg-blue-900/60 text-blue-100 px-4 py-2 rounded-full font-semibold shadow"><SiDotnet className="text-blue-200" /> .NET MAUI</span>
                  <span title="MySQL" className="flex items-center gap-2 bg-blue-700/60 text-blue-100 px-4 py-2 rounded-full font-semibold shadow"><SiMysql className="text-blue-200" /> MySQL</span>
                </div>
              </div>
            </div>
          </section>
          <section className="w-full max-w-3xl mx-auto mb-12 bg-black/40 rounded-xl shadow-lg p-8 border border-green-900 transition-opacity duration-1000 opacity-0 animate-fade-in delay-500">
            <h3 className="text-2xl font-bold text-green-300 mb-6">Frequently Asked Questions</h3>
            <div className="space-y-4">
              {faqData.map((faq, index) => (
                <div key={index} className="border border-green-800/50 rounded-lg overflow-hidden">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-4 text-left bg-green-900/20 hover:bg-green-900/30 transition-colors flex items-center justify-between cursor-pointer"
                  >
                    <span className="text-green-100 font-medium">{faq.question}</span>
                    {openFAQ === index ? (
                      <FaChevronUp className="text-green-300 flex-shrink-0" />
                    ) : (
                      <FaChevronDown className="text-green-300 flex-shrink-0" />
                    )}
                  </button>
                  <div 
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      openFAQ === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="px-6 py-4 bg-green-950/30 border-t border-green-800/50">
                      <p className="text-green-100 leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
