import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Bubbles from '../components/Bubbles';

export default function ApiDocs() {
  return (
    <>
      <Helmet key={window.location.pathname}>
        <title>API Docs</title>
        <meta name="description" content="API documentation for api.willy-v.com - Coming soon." />
        <meta name="keywords" content="Willy Vanderpool, WillyV, API, Documentation, Computer Science, Full Stack Developer, Portfolio" />
        <meta name="author" content="Willy Vanderpool" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <link rel="canonical" href={window.location.origin + '/api-docs'} />
        {/* OpenGraph meta tags */}
        <meta property="og:title" content="API Docs" />
        <meta property="og:description" content="API documentation for api.willy-v.com - Coming soon." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.origin + '/api-docs'} />
        <meta property="og:image" content={window.location.origin + '/images/portrait.png'} />
        <meta property="og:site_name" content="Willy Vanderpool" />
        {/* Schema.org markup */}
        <meta itemProp="name" content="API Docs" />
        <meta itemProp="description" content="API documentation for api.willy-v.com - Coming soon." />
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
