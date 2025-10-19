import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Bubbles from '../components/Bubbles';

export default function ApiDocs() {
  return (
    <>
      <Helmet key={window.location.pathname}>
        <title>API Docs</title>
        <meta name="description" content="API documentation for willy-v.com by Wilhelmina Vanderpool, a Web Developer and Student Leader." />
        <meta name="keywords" content="Wilhelmina Vanderpool, MinasaurV, Computer Science, Full Stack Developer, JavaScript, React, Portfolio, OTC, Tech2Gether, Student, Programmer, Developer, API, Docs" />
        <link rel="canonical" href={window.location.origin + '/api-docs'} />
        <meta property="og:title" content="willy-v.com" />
        <meta property="og:description" content="API documentation for willy-v.com by Wilhelmina Vanderpool, a Web Developer and Student Leader." />
        <meta property="og:url" content={window.location.origin + '/api-docs'} />
        <meta property="og:image" content={window.location.origin + '/images/portrait.png'} />
        <meta itemProp="name" content="willy-v.com" />
        <meta itemProp="description" content="API documentation for willy-v.com by Wilhelmina Vanderpool, a Web Developer and Student Leader." />
        <meta itemProp="image" content={window.location.origin + '/images/portrait.png'} />
      </Helmet>
      <div className="min-h-screen flex flex-col bg-gradient-to-b from-purple-900 to-black relative overflow-y-auto">
        <Header />
        <Bubbles />
        <main className="flex flex-col items-center justify-center flex-1 w-full px-4 py-20 z-10 relative">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">API Documentation</h1>
          <div className="bg-black/40 rounded-xl shadow-lg p-8 border border-indigo-900 max-w-xl w-full text-center">
            <p className="text-xl text-indigo-200 font-semibold mb-2">UNDER CONSTRUCTION</p>
            <p className="text-purple-100">API documentation will be available here soon<br/>(First I have to make the API 😉)</p>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
