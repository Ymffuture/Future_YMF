import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Lazy load pages
const Home = lazy(() => import('./pages/Home'));
const Services = lazy(() => import('./pages/Services'));
const Contact = lazy(() => import('./pages/Contact'));
const About = lazy(() => import('./pages/About'));

// SVG bug loading animation
const Loader = () => (
  
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <svg className="w-24 h-24 animate-spin" viewBox="0 0 50 50">
        {/* Short stroke */}
        <circle
          className="stroke-red-600"
          cx="25"
          cy="25"
          r="20"
          fill="none"
          strokeWidth="4"
          strokeDasharray="15 125"
          strokeLinecap="round"
        />
        {/* Medium stroke */}
        <circle
          className="stroke-yellow-500"
          cx="25"
          cy="25"
          r="15"
          fill="none"
          strokeWidth="4"
          strokeDasharray="25 100"
          strokeLinecap="round"
        />
        {/* Long stroke */}
        <circle
          className="stroke-green-500"
          cx="25"
          cy="25"
          r="10"
          fill="none"
          strokeWidth="4"
          strokeDasharray="40 60"
          strokeLinecap="round"
        />
      </svg>
      <p className="mt-4 text-red-600 font-medium animate-pulse">Loading...</p>
    </div>
  );


const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="min-h-screen pt-16">
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
