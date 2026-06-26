import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Bubbles from '../components/Bubbles';
import Accordion from '../components/Accordion';
import Footer from '../components/Footer';
import Header from '../components/Header';
import portrait from '../assets/portrait.png';
import { PROJECTS_DATA } from '../data/projectsData';
import { FaHtml5, FaCss3Alt, FaJs, FaJava, FaReact, FaNodeJs, FaVuejs, FaCodeBranch, FaPlus, FaBug, FaGitAlt, FaStar, FaCode, FaPython, FaDatabase, FaUbuntu, FaFigma, FaDiscord, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { SiLua, SiTailwindcss, SiExpress, SiDotnet, SiMysql, SiMongodb, SiDjango, SiGit, SiNginx, SiCloudflare, SiMiro } from 'react-icons/si';
import { TbBrandCSharp } from "react-icons/tb";
import axios from 'axios';

export default function Home() {
  const projects = PROJECTS_DATA.projects.slice(-3);
  const getProjectImage = (id) => new URL(`../assets/projects/${id}.png`, import.meta.url).href;
  const [githubActivity, setGithubActivity] = useState([]);
  const [githubError, setGithubError] = useState(null);
  const [githubLoading, setGithubLoading] = useState(true);

  const faqData = [
    {
      title: "What is Tech2Gether?",
      content: "Tech2Gether is the tech club at Ozarks Technical Community College, which focuses on bringing together students interested in technology, programming, and cybersecurity. They organize workshops and tech talks to help students grow their skills and engage with industry professionals. If you're a current student at Ozarks Tech interested in tech, it's a great community to be a part of! If you're an alumnus or industry professional, they also welcome guest speakers and sponsors. Visit the Tech2Gether website for more info on how to get involved!"
    },
    {
      title: "What kind of projects do you enjoy working on?",
      content: "I enjoy building practical applications that solve real-world problems. I especially like working on full-stack web apps, experimenting with new technologies, and creating tools that improve workflows or user experience."
    },
    {
      title: "How do you approach learning new technologies?",
      content: "I focus on learning by building. When I encounter a new language or tool, I apply it in a small project and refine my approach through iteration and feedback. I'm comfortable adapting to new systems and enjoy continuously improving my skill set."
    },
    {
      title: "How do you approach writing and maintaining documentation?",
      content: "I aim to write clear, concise documentation that makes systems easier to understand and maintain. Whether it's code comments or a readme file, I focus on making information accessible for both current and future developers."
    },
    {
      title: "What are your future career goals?",
      content: "I'm focused on completing my Computer Information Science degree while gaining hands-on experience through projects and leadership roles. My goal is to work in software engineering, with a strong interest in full-stack development and building impactful applications."
    }
  ];

  useEffect(() => {
    // Fetch GitHub activity
    setGithubLoading(true);
    setGithubError(null);
    axios.get('https://api.github.com/users/MinasaurV/events/public')
      .then(res => {
        setGithubActivity(res.data.slice(0, 5));
        setGithubLoading(false);
      })
      .catch(err => {
        console.error('GitHub API error:', err);

        // Friendly messages for common cases
        if (err.response && err.response.status === 403) setGithubError('GitHub rate limit reached. Try again later.');
        else if (err.response && err.response.status === 404) setGithubError('GitHub user not found.');
        else setGithubError('Unable to fetch GitHub activity.');
        setGithubLoading(false);
      });
  }, []);

  // Helper: pretty relative time
  const getTimeSince = (isoDate) => {
    try {
      const now = new Date();
      const then = new Date(isoDate);
      const seconds = Math.floor((now - then) / 1000);
      const intervals = [
        { label: 'year', secs: 31536000 },
        { label: 'month', secs: 2592000 },
        { label: 'day', secs: 86400 },
        { label: 'hour', secs: 3600 },
        { label: 'minute', secs: 60 },
        { label: 'second', secs: 1 },
      ];
      for (const i of intervals) {
        const count = Math.floor(seconds / i.secs);
        if (count >= 1) return `${count} ${i.label}${count > 1 ? 's' : ''} ago`;
      }
      return 'just now';
    } catch {
      return '';
    }
  };

  return (
    <>
      <Helmet key={window.location.pathname}>
        <title>Home</title>
        <meta name="description" content="Welcome to the website of Wilhelmina Vanderpool, a Computer Information Science Student & Junior Developer." />
        <meta name="keywords" content="Wilhelmina Vanderpool, MinasaurV, Computer Information Science, Full Stack Developer, JavaScript, React, Portfolio, OTC, Ozarks Tech, Tech2Gether, Student, Programmer, Developer, Pixel Art, Skateboarding, C#, Python, Java, SQL, Lua, ASP.NET, Django, Vue.js, Express.js, Tailwind CSS, T-SQL, MySQL, MongoDB, Git, NGINX, Ubuntu, Cloudflare, Figma, Miro" />
        <link rel="canonical" href={window.location.origin + '/'} />
        <meta property="og:title" content="MinasaurV" />
        <meta property="og:description" content="Welcome to the website of Wilhelmina Vanderpool, a Computer Information Science Student & Junior Developer." />
        <meta property="og:url" content={window.location.origin + '/'} />
        <meta property="og:image" content={portrait} />
        <meta itemProp="name" content="MinasaurV" />
        <meta itemProp="description" content="Welcome to the website of Wilhelmina Vanderpool, a Computer Information Science Student & Junior Developer." />
        <meta itemProp="image" content={portrait} />
      </Helmet>
      <div className="min-h-screen flex flex-col bg-gradient-to-b from-purple-900 to-black relative overflow-y-auto">
        <Header />
        <Bubbles />
        <main id="main-content" tabIndex="-1" className="flex flex-col items-center justify-center flex-1 w-full px-4 py-12 md:py-20 z-10 relative">
          <img
            src={portrait}
            alt="Portrait of Wilhelmina Vanderpool"
            className="w-32 h-32 md:w-48 md:h-48 rounded-full shadow-lg mb-6 object-cover border-4 border-transparent bg-gradient-to-br from-purple-400 via-indigo-500 to-teal-400 p-1 image-render-pixelated animate-spin-in"
            style={{ backgroundClip: 'padding-box, border-box', backgroundOrigin: 'border-box' }}
          />
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-0 text-center">Wilhelmina Vanderpool</h1>
            <a
              href="https://en.pronouns.page/@minasaur"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/40 border border-purple-900 text-purple-100 text-sm font-semibold shadow-lg transition-all duration-200 hover:bg-black/50 focus:outline-none focus:ring-2 focus:ring-teal-300 no-underline"
              aria-label={`Pronouns: she/her`}
              title="Pronouns: she/her"
            >
              🏳️‍⚧️ she/her
            </a>
          </div>
          <h2 className="text-xl md:text-2xl font-semibold text-teal-300 mt-2 mb-1 text-center">
            Full Stack Developer @ Cold Brew Code 
            <br/>
            Computer Science Student @ Ozarks Tech
          </h2>
          <section className="w-full max-w-3xl mx-auto my-8 bg-black/40 rounded-xl shadow-lg p-8 border border-purple-900 transition-opacity duration-1000 opacity-0 animate-fade-in">
            <h3 className="text-2xl font-bold text-purple-300 mb-4 text-left">About Me</h3>
            <h4 className="text-lg font-semibold text-teal-200 mb-2">Who I am</h4>
            <p className="text-purple-100 leading-relaxed mb-4">Hi! I'm Mina, a Computer Science student at Ozarks Technical Community College and a Full Stack Developer at Cold Brew Code. I'm passionate about building software that is intuitive, accessible, and enjoyable to use.</p>
            <h4 className="text-lg font-semibold text-purple-200 mb-2">What I build</h4>
            <p className="text-purple-100 leading-relaxed mb-4">I design and develop web applications, databases, and software tools with a focus on usability, accessibility, and maintainability. My experience includes working with C#, Python, JavaScript, SQL, React, ASP.NET, Django, and modern web development practices. I enjoy solving problems, learning new technologies, and turning ideas into practical software solutions.</p>
            <h4 className="text-lg font-semibold text-indigo-200 mb-2">Professional Experience</h4>
            <p className="text-purple-100 leading-relaxed mb-4">
              As a Full Stack Developer at Cold Brew Code, I help design and develop web applications and software products as part of a small development team. My work spans both development and UI/UX design, allowing me to contribute throughout the entire product development process.
              <br/>
              <br/>
              Previously, I worked in Web Services at Ozarks Tech, where I contributed to a large-scale WordPress migration involving more than 8,000 webpages. I also supported accessibility improvements, content audits, and structural updates to improve usability and compliance with WCAG standards.
            </p>
            <h4 className="text-lg font-semibold text-fuchsia-200 mb-2">Community & Leadership</h4>
            <p className="text-purple-100 leading-relaxed mb-4">
              I'm an active member of the Springfield technology community. I regularly attend Springfield Devs meetups to connect with other developers, learn about new technologies, and share ideas. I'm also an active member of SGFSEC, where I continue expanding my knowledge of cybersecurity.
              <br/><br/>
              I previously served as President of Tech2Gether, where I organized workshops, coordinated outreach efforts, and helped launch the organization's first Hack2Gether hackathon. As Website Project Lead, I led development efforts for the club's website and worked closely with student leaders to support the organization's goals through technology.
            </p>
          </section>
          <section className="w-full max-w-3xl mx-auto my-8 bg-black/40 rounded-xl shadow-lg p-8 border border-pink-700 transition-opacity duration-1000 opacity-0 animate-fade-in delay-600">
            <h3 className="text-2xl font-bold text-pink-300 mb-4">Connect With Me!</h3>
            <p className="text-purple-100 mb-4">I'm always excited to learn something new, take on interesting challenges, and connect with others who are passionate about technology!</p>
            <div className="flex gap-4 flex-wrap">
              <a
                href="mailto:mina@minasaur.com"
                className="inline-flex items-center gap-3 px-4 py-2 bg-emerald-800/60 text-white rounded-full shadow hover:scale-105 transition-transform focus:outline-none focus:ring-2 focus:ring-teal-300"
              >
                <FaEnvelope className="text-emerald-200" />
                Email
              </a>
              <a
                href="https://www.linkedin.com/in/minasaur"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-4 py-2 bg-blue-800/60 text-white rounded-full shadow hover:scale-105 transition-transform focus:outline-none focus:ring-2 focus:ring-teal-300"
              >
                <FaLinkedin className="text-blue-300" />
                LinkedIn
              </a>
              <a
                href="http://discord.com/users/1109635837588680764"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-4 py-2 bg-gray-800/60 text-white rounded-full shadow hover:scale-105 transition-transform focus:outline-none focus:ring-2 focus:ring-teal-300"
              >
                <FaDiscord className="text-indigo-400" />
                Discord
              </a>
            </div>
          </section>
          <section className="w-full max-w-3xl mx-auto my-8 bg-black/40 rounded-xl shadow-lg p-8 border border-purple-900 transition-opacity duration-1000 opacity-0 animate-fade-in delay-200">
            <h3 className="text-2xl font-bold text-purple-300 mb-4">My Projects</h3>
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
                        src={getProjectImage(project.id)}
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
                    {(project.buttons || [])
                      .filter((button, i, arr) => (
                        i === arr.findIndex((b) => b.url === button.url && b.text === button.text)
                      ))
                      .map((button, i) => (
                        <a
                          key={`${button.url}-${button.text}-${i}`}
                          href={button.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block px-4 py-2 bg-gradient-to-r from-purple-700 via-indigo-500 to-teal-500 text-white rounded-full font-semibold shadow hover:scale-105 transition-transform whitespace-nowrap text-center mx-1 w-full md:w-auto focus:outline-none focus:ring-2 focus:ring-teal-300"
                        >
                          {button.text}
                        </a>
                      ))}
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-6 text-center md:text-right">
              <a href="/projects" className="inline-block px-6 py-2 bg-gradient-to-r from-purple-700 via-indigo-500 to-teal-500 text-white rounded-full font-semibold shadow hover:scale-105 transition-transform focus:outline-none focus:ring-2 focus:ring-teal-300">See All Projects</a>
            </div>
          </section>
          <section className="w-full max-w-3xl mx-auto my-8 bg-black/40 rounded-xl shadow-lg p-8 border border-indigo-900 transition-opacity duration-1000 opacity-0 animate-fade-in delay-300">
            <h3 className="text-2xl font-bold text-indigo-300 mb-4">Recent GitHub Activity</h3>
            {githubLoading && (
              <div className="space-y-3">
                {[1, 2, 3].map((s) => (
                  <div key={s} className="animate-pulse bg-gradient-to-r from-indigo-900 via-purple-900 to-indigo-900 rounded-lg p-4 shadow">
                    <div className="h-4 bg-indigo-700/30 rounded w-3/4 mb-2" />
                    <div className="h-3 bg-indigo-700/20 rounded w-1/2" />
                  </div>
                ))}
              </div>
            )}
            {!githubLoading && githubError && (
              <p className="text-yellow-300">{githubError}</p>
            )}
            {!githubLoading && !githubError && githubActivity.length === 0 && (
              <p className="text-gray-400">No recent public activity.</p>
            )}
            {!githubLoading && !githubError && githubActivity.length > 0 && (
              <ul className="space-y-3">
                {githubActivity.map((event, idx) => {
                  const eventType = event.type.replace('Event', '');
                  const repoUrl = `https://github.com/${event.repo?.name}`;

                  let detailText = '';
                  let detailLink = repoUrl;

                  if (event.type === 'PushEvent') {
                    const branchRef = event.payload?.ref || '';
                    const branch = branchRef.replace('refs/heads/', '');

                    if (branch) {
                      detailText = branch;
                      detailLink = `${repoUrl}/tree/${branch}`;
                    }
                  } else if (event.type === 'PullRequestEvent' && event.payload?.pull_request) {
                    const pr = event.payload.pull_request;
                    detailText = pr.title || '';
                    detailLink = pr.html_url || detailLink;
                  } else if (event.type === 'IssuesEvent' && event.payload?.issue) {
                    const issue = event.payload.issue;
                    detailText = issue.title || '';
                    detailLink = issue.html_url || detailLink;
                  } else if (event.type === 'CreateEvent') {
                    const refType = event.payload?.ref_type || '';
                    const ref = event.payload?.ref || '';
                    if (ref) {
                      detailText = `Created ${refType}: ${ref}`;
                      detailLink = `${repoUrl}/tree/${ref}`;
                    }
                  } else if (event.type === 'ForkEvent' && event.payload?.forkee) {
                    detailText = `Forked to ${event.payload.forkee.full_name}`;
                    detailLink = event.payload.forkee.html_url || detailLink;
                  }

                  const shouldShowDetailLink = detailText && detailLink && detailLink !== repoUrl;

                  return (
                    <li
                      key={event.id}
                      className="bg-gradient-to-r from-indigo-900 via-purple-900 to-indigo-900 rounded-lg p-4 shadow transition-all duration-300 hover:-translate-y-1 hover:shadow-xl opacity-0 animate-fade-in"
                      style={{ animationDelay: `${idx * 0.1}s` }}
                    >
                      <div className="flex items-center justify-between gap-4">
                        <img
                          src={event.actor?.avatar_url}
                          alt={`GitHub avatar for ${event.actor?.display_login || 'user'}`}
                          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex-shrink-0 border border-indigo-600 object-cover"
                        />
                        <div className="flex-1 min-w-0">
                          <span className="text-indigo-200 text-sm">{eventType}</span>
                          <a
                            href={repoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-indigo-200 font-medium block break-words"
                          >
                            {event.repo?.name}
                          </a>
                          {shouldShowDetailLink && (
                            <a
                              href={detailLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-indigo-300/80 text-sm block mt-1 break-words hover:underline"
                            >
                              {detailText}
                            </a>
                          )}
                          {detailText && !shouldShowDetailLink && (
                            <p className="text-indigo-300/80 text-sm block mt-1 break-words">{detailText}</p>
                          )}
                          <p className="text-indigo-300 text-xs mt-1">{getTimeSince(event.created_at)}</p>
                        </div>
                        <div className="flex-shrink-0">
                          <span aria-hidden="true" className="text-xl">
                            {event.type === 'PushEvent' ? <FaGitAlt className="text-green-400" /> :
                              event.type === 'CreateEvent' ? <FaPlus className="text-blue-400" /> :
                                event.type === 'IssuesEvent' ? <FaBug className="text-red-400" /> :
                                  event.type === 'PullRequestEvent' ? <FaCodeBranch className="text-purple-400" /> :
                                    event.type === 'WatchEvent' ? <FaStar className="text-yellow-400" /> :
                                      event.type === 'ForkEvent' ? <FaCodeBranch className="text-teal-400" /> : <FaCode className="text-indigo-400" />}
                          </span>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            )}
            <div className="mt-6 text-center md:text-right">
              <a
                href="https://github.com/MinasaurV"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-2 bg-gradient-to-r from-purple-700 via-indigo-500 to-teal-500 text-white rounded-full font-semibold shadow hover:scale-105 transition-transform focus:outline-none focus:ring-2 focus:ring-teal-300"
              >
                View GitHub Profile
              </a>
            </div>
          </section>
          <section className="w-full max-w-3xl mx-auto my-8 bg-black/40 rounded-xl shadow-lg p-8 border border-teal-900 transition-opacity duration-1000 opacity-0 animate-fade-in delay-400">
            <h3 className="text-2xl font-bold text-teal-300 mb-4">Skills & Tech Stack</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h4 className="text-lg font-semibold text-purple-200 mb-2 text-center">Languages</h4>
                <div className="flex flex-wrap gap-3 justify-center">
                  <span title="HTML" className="flex items-center gap-2 bg-purple-800/60 text-purple-100 px-3 py-1.5 rounded-full text-sm font-semibold shadow"><FaHtml5 className="text-purple-200" /> HTML</span>
                  <span title="CSS" className="flex items-center gap-2 bg-indigo-800/60 text-indigo-100 px-3 py-1.5 rounded-full text-sm font-semibold shadow"><FaCss3Alt className="text-indigo-200" /> CSS</span>
                  <span title="JavaScript" className="flex items-center gap-2 bg-yellow-700/40 text-yellow-100 px-3 py-1.5 rounded-full text-sm font-semibold shadow"><FaJs className="text-yellow-200" /> JavaScript</span>
                  <span title="C#" className="flex items-center gap-2 bg-teal-900/60 text-teal-100 px-3 py-1.5 rounded-full text-sm font-semibold shadow"><TbBrandCSharp className="text-teal-200" /> C#</span>
                  <span title="Python" className="flex items-center gap-2 bg-green-800/60 text-green-100 px-3 py-1.5 rounded-full text-sm font-semibold shadow"><FaPython className="text-green-200" /> Python</span>
                  <span title="Java" className="flex items-center gap-2 bg-blue-900/60 text-blue-100 px-3 py-1.5 rounded-full text-sm font-semibold shadow"><FaJava className="text-blue-200" /> Java</span>
                  <span title="SQL" className="flex items-center gap-2 bg-orange-800/60 text-orange-100 px-3 py-1.5 rounded-full text-sm font-semibold shadow"><FaDatabase className="text-orange-200" /> SQL</span>
                  <span title="Lua" className="flex items-center gap-2 bg-blue-800/60 text-blue-100 px-3 py-1.5 rounded-full text-sm font-semibold shadow"><SiLua className="text-blue-200" /> Lua</span>
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-teal-200 mb-2 text-center">Web Development</h4>
                <div className="flex flex-wrap gap-3 justify-center">
                  <span title="React" className="flex items-center gap-2 bg-cyan-900/60 text-cyan-100 px-3 py-1.5 rounded-full text-sm font-semibold shadow"><FaReact className="text-cyan-200" /> React</span>
                  <span title="ASP.NET" className="flex items-center gap-2 bg-blue-900/60 text-blue-100 px-3 py-1.5 rounded-full text-sm font-semibold shadow"><SiDotnet className="text-blue-200" /> ASP.NET</span>
                  <span title="Vue.js" className="flex items-center gap-2 bg-green-900/60 text-green-100 px-3 py-1.5 rounded-full text-sm font-semibold shadow"><FaVuejs className="text-green-200" /> Vue.js</span>
                  <span title="Express.js" className="flex items-center gap-2 bg-gray-800/60 text-gray-100 px-3 py-1.5 rounded-full text-sm font-semibold shadow"><SiExpress className="text-gray-200" /> Express.js</span>
                  <span title="Django" className="flex items-center gap-2 bg-green-700/60 text-green-100 px-3 py-1.5 rounded-full text-sm font-semibold shadow"><SiDjango className="text-green-200" /> Django</span>
                  <span title="Tailwind CSS" className="flex items-center gap-2 bg-teal-800/60 text-teal-100 px-3 py-1.5 rounded-full text-sm font-semibold shadow"><SiTailwindcss className="text-teal-200" /> Tailwind CSS</span>
                  <span title="Node.js" className="flex items-center gap-2 bg-lime-900/60 text-lime-100 px-3 py-1.5 rounded-full text-sm font-semibold shadow"><FaNodeJs className="text-lime-200" /> Node.js</span>
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-indigo-200 mb-2 text-center">Databases & Tools</h4>
                <div className="flex flex-wrap gap-3 justify-center">
                  <span title="T-SQL" className="flex items-center gap-2 bg-red-800/60 text-red-100 px-3 py-1.5 rounded-full text-sm font-semibold shadow"><FaDatabase className="text-red-200" /> T-SQL</span>
                  <span title="MySQL" className="flex items-center gap-2 bg-blue-700/60 text-blue-100 px-3 py-1.5 rounded-full text-sm font-semibold shadow"><SiMysql className="text-blue-200" /> MySQL</span>
                  <span title="MongoDB" className="flex items-center gap-2 bg-green-700/60 text-green-100 px-3 py-1.5 rounded-full text-sm font-semibold shadow"><SiMongodb className="text-green-200" /> MongoDB</span>
                  <span title="Git" className="flex items-center gap-2 bg-orange-800/60 text-orange-100 px-3 py-1.5 rounded-full text-sm font-semibold shadow"><SiGit className="text-orange-200" /> Git</span>
                  <span title="NGINX" className="flex items-center gap-2 bg-green-800/60 text-green-100 px-3 py-1.5 rounded-full text-sm font-semibold shadow"><SiNginx className="text-green-200" /> NGINX</span>
                  <span title="Ubuntu" className="flex items-center gap-2 bg-orange-700/60 text-orange-100 px-3 py-1.5 rounded-full text-sm font-semibold shadow"><FaUbuntu className="text-orange-200" /> Ubuntu</span>
                  <span title="Cloudflare" className="flex items-center gap-2 bg-orange-600/60 text-orange-100 px-3 py-1.5 rounded-full text-sm font-semibold shadow"><SiCloudflare className="text-orange-200" /> Cloudflare</span>
                  <span title="Figma" className="flex items-center gap-2 bg-purple-800/60 text-purple-100 px-3 py-1.5 rounded-full text-sm font-semibold shadow"><FaFigma className="text-purple-200" /> Figma</span>
                  <span title="Miro" className="flex items-center gap-2 bg-indigo-800/60 text-indigo-100 px-3 py-1.5 rounded-full text-sm font-semibold shadow"><SiMiro className="text-indigo-200" /> Miro</span>
                </div>
              </div>
            </div>
          </section>
          <section className="w-full max-w-3xl mx-auto my-8 bg-black/40 rounded-xl shadow-lg p-8 border border-green-900 transition-opacity duration-1000 opacity-0 animate-fade-in delay-500">
            <h3 className="text-2xl font-bold text-green-300 mb-6">Frequently Asked Questions</h3>
            <Accordion
              items={faqData}
              className="space-y-4"
              itemClassName="border border-green-800/50 rounded-lg overflow-hidden"
              buttonClassName="w-full px-6 py-4 text-left text-white bg-green-900/20 hover:bg-green-900/30 transition-colors flex items-center justify-between cursor-pointer focus:outline-none focus-visible:bg-green-900/40 focus-visible:ring-4 focus-visible:ring-inset focus-visible:ring-teal-200/90"
              panelClassName="px-6 py-4 bg-green-950/30 border-t border-green-800/50 text-white leading-relaxed"
              iconClassName="text-green-300 flex-shrink-0"
            />
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
