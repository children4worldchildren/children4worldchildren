import React, { Suspense, lazy, useEffect, useState } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import EventNotice from './components/EventNotice';
import './index.css';

// Lazy load all pages for better performance
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Programs = lazy(() => import('./pages/Programs'));
const Events = lazy(() => import('./pages/Events'));
const Volunteer = lazy(() => import('./pages/Volunteer'));
const Impact = lazy(() => import('./pages/Impact'));
const Management = lazy(() => import('./pages/Management'));
const Contact = lazy(() => import('./pages/Contact'));
const Consultation = lazy(() => import('./pages/Consultation'));
const Quote = lazy(() => import('./pages/Quote'));

// Loading component
const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
  </div>
);

// Component to handle showing event notice only on the home page
const AppContent = () => {
  const location = useLocation();
  const [showEventNotice, setShowEventNotice] = useState(false);

  useEffect(() => {
    // Only show on home page
    setShowEventNotice(location.pathname === '/');
  }, [location]);

  return (
    <>
      <ScrollToTop />
      <Navbar />
      {showEventNotice && <EventNotice />}
      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/events" element={<Events />} />
          <Route path="/volunteer" element={<Volunteer />} />
          <Route path="/impact" element={<Impact />} />
          <Route path="/management" element={<Management />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/consultation" element={<Consultation />} />
          <Route path="/quote" element={<Quote />} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
};

function App() {
  return (
    <Router>
      <div className="App">
        <AppContent />
      </div>
    </Router>
  );
}

export default App;