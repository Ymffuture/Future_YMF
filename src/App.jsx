import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Home from './components/Home'
import Footer from './components/Footer';
const App =()=> {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path="/" element={<Home/>} />
      </Routes>
      <Footer/>
    </Router>
    
    </>
  );
}

export default App;