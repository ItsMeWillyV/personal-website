import Footer from '../components/Footer';
import Bubbles from '../components/Bubbles';
import Header from '../components/Header';
import { PROJECTS_DATA } from '../data/projectsData';
import portrait from '../assets/portrait.png';

const projectsDescription = 'Explore projects by Wilhelmina Vanderpool, a Full Stack Developer and Computer Science Student.';
const projectsKeywords = 'Wilhelmina Vanderpool, MinasaurV, Computer Science, Full Stack Developer, JavaScript, React, Portfolio, OTC, Tech2Gether, Student, Programmer, Developer, Pixel Art, 3D Printing, C#, Lua, Java, Tailwind, Node.js, Express, .NET MAUI';

export default function Projects() {
  const projects = PROJECTS_DATA.projects;
  const getProjectImage = (id) => new URL(`../assets/projects/${id}.png`, import.meta.url).href;

  return (
    <>
      <title>Projects | MinasaurV</title>
      <meta name="description" content={projectsDescription} />
      <meta name="keywords" content={projectsKeywords} />
      <link rel="canonical" href={window.location.origin + '/projects'} />
      <meta property="og:title" content="Projects | MinasaurV" />
      <meta property="og:description" content={projectsDescription} />
      <meta property="og:url" content={window.location.origin + '/projects'} />
      <meta property="og:image" content={portrait} />
      <meta itemProp="name" content="Projects | MinasaurV" />
      <meta itemProp="description" content={projectsDescription} />
      <meta itemProp="image" content={portrait} />
      <div className="min-h-screen flex flex-col bg-gradient-to-b from-purple-900 to-black relative overflow-y-auto">
        <Header />
        <Bubbles />
        <main id="main-content" tabIndex="-1" className="flex flex-col items-center justify-center flex-1 w-full px-4 py-12 md:py-20 z-10 relative">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">
            My Projects
          </h1>
          <div className="h-2" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
            {projects.map((project, idx) => (
              <div
                key={project.id}
                className="bg-gradient-to-r from-purple-900 via-indigo-900 to-teal-900 rounded-xl shadow-lg p-6 border border-purple-800 flex flex-col items-center justify-between transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:shadow-2xl opacity-0 animate-fade-in"
                style={{ animationDelay: `${idx * 0.15 + 0.1}s` }}
              >
                <img
                  src={getProjectImage(project.id)}
                  alt={project.name + ' thumbnail'}
                  className="w-full aspect-square object-cover rounded-lg mb-4 border border-teal-800 bg-black/30"
                />
                <div className="w-full flex flex-col items-center">
                  <h2 className="text-xl font-bold text-white mb-2">
                    {project.name}
                  </h2>
                  <p className="text-purple-100 mb-4 text-center">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4 justify-center">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="bg-teal-700/30 text-teal-200 px-3 py-1 rounded-full text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="w-full flex justify-center items-center pointer-events-auto">
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
                      className="inline-block px-5 py-2 bg-gradient-to-r from-purple-700 via-indigo-500 to-teal-500 text-white rounded-full font-semibold shadow hover:scale-105 transition-transform text-center cursor-pointer mx-2 focus:outline-none focus:ring-2 focus:ring-teal-300"
                      style={{ width: 'auto' }}
                      tabIndex={0}
                    >
                      {button.text}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
