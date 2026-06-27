import Header from '../components/Header';
import Footer from '../components/Footer';
import Bubbles from '../components/Bubbles';
import portrait from '../assets/portrait.png';

const apiDocsDescription = 'API documentation by Wilhelmina Vanderpool';
const apiDocsKeywords = 'Wilhelmina Vanderpool, MinasaurV, Computer Science, Full Stack Developer, JavaScript, React, Portfolio, OTC, Tech2Gether, Student, Programmer, Developer, API, Docs';

export default function ApiDocs() {
  return (
    <>
      <title>API Docs | MinasaurV</title>
      <meta name="description" content={apiDocsDescription} />
      <meta name="keywords" content={apiDocsKeywords} />
      <link rel="canonical" href={window.location.origin + '/api-docs'} />
      <meta property="og:title" content="API Docs | MinasaurV" />
      <meta property="og:description" content={apiDocsDescription} />
      <meta property="og:url" content={window.location.origin + '/api-docs'} />
      <meta property="og:image" content={portrait} />
      <meta itemProp="name" content="API Docs | MinasaurV" />
      <meta itemProp="description" content={apiDocsDescription} />
      <meta itemProp="image" content={portrait} />
      <div className="min-h-screen flex flex-col bg-gradient-to-b from-purple-900 to-black relative overflow-y-auto">
        <Header />
        <Bubbles />
        <main id="main-content" tabIndex="-1" className="flex flex-col items-center justify-center flex-1 w-full px-4 py-20 z-10 relative">
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
