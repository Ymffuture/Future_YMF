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
    <svg width="100" height="100" viewBox="0 0 24 24" className="animate-spin text-red-600" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 2C13.6569 2 15 3.34315 15 5V6.15C16.1732 6.56745 17.1399 7.35582 17.7181 8.37149L18.1213 9H21V11H18.4086C18.7912 11.6405 19 12.3763 19 13.15V14.5L20 15V17L19 17.5V19H17V17.5L16 17L15.996 16.999L13.8352 17.5742C13.5742 18.7376 12.6783 19.6496 11.5714 19.9388L11 20H9L8.6 18.8C7.22541 18.5047 6.09566 17.5882 5.53956 16.3482L5.40715 16.06C4.95768 15.1103 4.9799 14.0061 5.46621 13.0721C5.73919 12.5492 6.14601 12.1121 6.64079 11.8H3V9H6.87868L7.28188 8.37149C7.8601 7.35582 8.8268 6.56745 10 6.15V5C10 3.34315 11.3431 2 13 2H12Z"
        fill="currentColor"
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
