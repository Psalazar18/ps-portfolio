import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Experience from './pages/Experience';
import Skills from './pages/Skills';
import Certificates from './pages/Certificates';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/certificates" element={<Certificates />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  )
}

export default App;
