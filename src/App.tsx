import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Management from './pages/Management';
import Contact from './pages/Contact';
// import Admin from './pages/Admin';
import './index.css';

function App() {
  return (
    <Router>
      <div className="App">
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/management" element={<Management />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/admin" element={<Admin />} /> */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;