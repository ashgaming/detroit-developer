import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProjectSpecification from './pages/ProjectSpecification';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Contact from './components/Contact';
import AboutMe from './components/AboutMe';
import Idea from './pages/Idea';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-dark text-white">
        <Navbar />
        <main className="pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project-specification" element={<ProjectSpecification />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/ideas" element={<Idea />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;