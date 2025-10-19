import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Bubbles from '../components/Bubbles';
import Footer from '../components/Footer';
import Header from '../components/Header';
import warningIcon from '../assets/warn.png';

export default function NotFound() {
  return (
    <>
      <Helmet key={window.location.pathname}>
        <title>404 - Not Found</title>
        <meta name="description" content="The page you are looking for does not exist." />
        <meta name="keywords" content="Wilhelmina Vanderpool, MinasaurV, Computer Science, Full Stack Developer, JavaScript, React, Portfolio, OTC, Tech2Gether, Student, Programmer, Developer, Pixel Art, 3D Printing, C#, Lua, Java, Tailwind, Node.js, Express, .NET MAUI" />
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href={window.location.origin + window.location.pathname} />
        <meta property="og:title" content="MinasaurV" />
        <meta property="og:description" content="The page you are looking for does not exist." />
        <meta property="og:url" content={window.location.origin + window.location.pathname} />
        <meta property="og:image" content={window.location.origin + '/images/portrait.png'} />
        <meta itemProp="name" content="MinasaurV" />
        <meta itemProp="description" content="The page you are looking for does not exist." />
        <meta itemProp="image" content={window.location.origin + '/images/portrait.png'} />
      </Helmet>
      <div className="min-h-screen flex flex-col bg-gradient-to-b from-purple-900 to-black text-white relative overflow-hidden">
        <Header />
        <Bubbles />
        <div className="flex flex-1 flex-col items-center justify-center w-full z-10 px-4 py-12 md:py-24">
          <div className="flex flex-col items-center bg-black/40 rounded-3xl shadow-2xl p-8 md:p-16 border border-purple-800 backdrop-blur-md">
            <img 
              src={warningIcon}
              alt="warning"
              className="w-32 h-32 md:w-48 md:h-48 mb-8 object-contain drop-shadow-lg animate-spin-in image-render-pixelated"
              style={{ imageRendering: 'pixelated' }}
            />
            <h1 className="text-7xl md:text-8xl font-extrabold mb-2 drop-shadow-lg text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-teal-300">404</h1>
            <h2 className="text-2xl md:text-4xl font-bold mb-4 text-purple-200">Page Not Found</h2>
            <p className="text-base md:text-xl text-purple-300 mb-8 text-center max-w-md">The page you are looking for does not exist.</p>
            <Link to="/" className="px-8 py-3 bg-gradient-to-r from-purple-700 via-indigo-500 to-teal-500 text-white font-semibold rounded-full shadow-lg transition-transform duration-200 focus:outline-none focus:ring-4 focus:ring-teal-300 transform hover:scale-105">
              Go Home
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
