import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import NotFound from "./pages/NotFound" ;
import SignUp from "./pages/SignUp" ;
import SignIn from "./pages/SignIn" ;
import Home from './components/Home'
import Footer from './components/Footer';
import Navbar from './components/Navbar';
const App =()=> {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path="/" element={<Home/>} />
        <Route path="*" element={<NotFound/>} />
        <Route path="/sign-in" element={<SignIn/>} />
        <Route path="/sign-up" element={<SignUp/>} />
      </Routes>
      <Footer/>
    </Router>
    
    </>
  );
}

export default App;
