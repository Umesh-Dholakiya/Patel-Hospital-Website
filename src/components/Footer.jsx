import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Heart, Phone
} from 'lucide-react';

const Footer = () => (
  <footer className="bg-blue-950 text-white pt-20 pb-8">
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid md:grid-cols-4 gap-12 mb-12">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="bg-white p-2 rounded-lg">
              <Heart className="text-blue-900" size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold">Patel Hospital</h3>
              <p className="text-xs text-orange-400">CARE WITH COMPASSION</p>
            </div>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            Delivering excellence in healthcare since 2009. Your trusted partner in health and wellness.
          </p>
          <div className="flex gap-4">
            {[
              { 
                icon: (
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                  </svg>
                ), 
                link: "https://facebook.com", 
                label: "Facebook" 
              },
              { 
                icon: (
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4l11.733 16h4.267l-11.733 -16z"/><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"/>
                  </svg>
                ), 
                link: "https://twitter.com", 
                label: "Twitter" 
              },
              { 
                icon: (
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                  </svg>
                ), 
                link: "https://instagram.com", 
                label: "Instagram" 
              },
              { 
                icon: (
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
                  </svg>
                ), 
                link: "https://linkedin.com", 
                label: "LinkedIn" 
              },
            ].map((social, idx) => (
              <a 
                key={idx} 
                href={social.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-blue-900 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors cursor-pointer text-white shadow-sm"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>

        </div>
        
        <div>
          <h4 className="text-lg font-bold mb-6">Quick Links</h4>
          <ul className="space-y-3 text-gray-400">
            {[
              { name: 'Home', path: '/' },
              { name: 'About Us', path: '/about' },
              { name: 'Our Doctors', path: '/doctors' },
              { name: 'Specialties', path: '/specialties' },
              { name: 'Facilities', path: '/facilities' },
              { name: 'Contact', path: '/contact' },
            ].map((link) => (
              <li key={link.name}>
                <Link to={link.path} className="hover:text-orange-400 transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 bg-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h4 className="text-lg font-bold mb-6">Our Specialties</h4>
          <ul className="space-y-3 text-gray-400">
            {['Cardiology', 'Orthopedics', 'Neurology', 'Pediatrics', 'Ophthalmology', 'General Surgery'].map((link) => (
              <li key={link}>
                <Link to="/specialties" className="hover:text-orange-400 transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        
        <div>
          <h4 className="text-lg font-bold mb-6">Working Hours</h4>
          <ul className="space-y-3 text-gray-400">
            <li className="flex justify-between"><span>Emergency:</span> <span className="text-white">24/7</span></li>
            <li className="flex justify-between"><span>OPD:</span> <span className="text-white">8:00 AM - 8:00 PM</span></li>
            <li className="flex justify-between"><span>Pharmacy:</span> <span className="text-white">24 Hours</span></li>
            <li className="flex justify-between"><span>Laboratory:</span> <span className="text-white">24 Hours</span></li>
          </ul>
        </div>
      </div>
      
      <div className="border-t border-blue-900 pt-8 text-center text-gray-400 text-sm">
        <p>© 2024 Patel Hospital. All rights reserved. Designed with care for better healthcare.</p>
      </div>
    </div>
  </footer>
);

const FloatingAction = () => (
  <a 
    href="tel:+919876543210" 
    className="fixed bottom-8 right-8 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl z-50 transition-transform hover:scale-110 flex items-center gap-2"
  >
    <Phone size={24} />
    <span className="hidden md:inline font-semibold">Emergency Call</span>
  </a>
);

export { Footer, FloatingAction };
