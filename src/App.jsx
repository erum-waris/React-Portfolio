// import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import Projects from "./components/Project";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes className="p-3">
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;