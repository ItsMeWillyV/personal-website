import './App.css'
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Teapot from './pages/Teapot';
import NotFound from './pages/NotFound';
import ApiDocs from './pages/ApiDocs';

function App() {
  return (
    <Router>
      {/* Global defaults for page titles; individual pages can override */}
      <Helmet defaultTitle="MinasaurV" titleTemplate="%s | MinasaurV" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/teapot" element={<Teapot />} />
        <Route path="/api-docs" element={<ApiDocs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
