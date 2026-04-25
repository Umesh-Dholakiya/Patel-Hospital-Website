import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { TopBar, Navbar } from './components/Navigation';
import { Footer, FloatingAction } from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Specialties from './pages/Specialties';
import Doctors from './pages/Doctors';
import Facilities from './pages/Facilities';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import ArticleDetail from './pages/ArticleDetail';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-white font-sans text-gray-900 flex flex-col">
        <ScrollToTop />
        <TopBar />
        <Navbar />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/specialties" element={<Specialties />} />
            <Route path="/doctors" element={<Doctors />} />
            <Route path="/facilities" element={<Facilities />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<ArticleDetail />} />
            {/* Redirect for old hash links if any or handle 404 */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>

        <Footer />
        <FloatingAction />

        <style>{`
          @keyframes fade-in {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          @keyframes fade-in-up {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in {
            animation: fade-in 0.6s ease-out;
          }
          .animate-fade-in-up {
            animation: fade-in-up 0.8s ease-out;
          }
        `}</style>
      </div>
    </Router>
  );
};

export default App;