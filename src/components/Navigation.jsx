import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Phone, Mail, Clock, Heart, Menu, X 
} from 'lucide-react';

const TopBar = () => (
  <div className="bg-blue-900 text-white text-sm py-2 px-4 hidden md:block">
    <div className="max-w-7xl mx-auto flex justify-between items-center">
      <div className="flex items-center space-x-6">
        <span className="flex items-center gap-2"><Phone size={14} /> Emergency: +91 98765 43210</span>
        <span className="flex items-center gap-2"><Mail size={14} /> info@patelhospital.com</span>
      </div>
      <div className="flex items-center space-x-4">
        <span className="flex items-center gap-2"><Clock size={14} /> 24/7 Available</span>
        <Link to="/contact" className="bg-orange-500 hover:bg-orange-600 px-4 py-1 rounded-full font-semibold transition-colors">
          Book Appointment
        </Link>
      </div>
    </div>
  </div>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Specialties', href: '/specialties' },
    { name: 'Doctors', href: '/doctors' },
    { name: 'Facilities', href: '/facilities' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className={`sticky top-0 z-50 bg-white shadow-md transition-all duration-300 ${scrolled ? 'shadow-lg py-1' : 'py-0'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center gap-3">
            <div className="bg-blue-900 p-2 rounded-lg">
              <Heart className="text-white" size={28} />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-blue-900 tracking-tight">Patel Hospital</h1>
              <p className="text-xs text-orange-500 font-semibold tracking-wider">CARE WITH COMPASSION</p>
            </div>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.href} 
                className={`font-medium transition-colors relative group ${
                  location.pathname === link.href ? 'text-blue-900' : 'text-gray-700 hover:text-blue-900'
                }`}
              >
                {link.name}
                <span className={`absolute bottom-0 left-0 h-0.5 bg-orange-500 transition-all ${
                  location.pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </Link>
            ))}
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-blue-900">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t animate-fade-in-up">
          <div className="px-4 pt-2 pb-4 space-y-2">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md font-medium ${
                  location.pathname === link.href ? 'bg-blue-50 text-blue-900' : 'text-gray-700 hover:bg-blue-50 hover:text-blue-900'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setIsOpen(false)} className="block w-full mt-4 bg-orange-500 text-white py-2 rounded-lg font-semibold text-center">
              Book Appointment
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export { TopBar, Navbar };
