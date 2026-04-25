import React, { useState, useEffect } from 'react';
import { 
  Calendar, Ambulance, Stethoscope, Activity, Award, Shield, Heart, 
  Microscope, Users, ArrowRight, Bone, Brain, Baby, Eye, ChevronRight,
  Quote, Star, Phone
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      title: "15 Years of",
      highlight: "Excellence in Healthcare",
      desc: "Providing world-class medical services with state-of-the-art technology and compassionate care for over 15 years.",
      bg: "bg-gradient-to-r from-blue-900 to-blue-800",
      image: "/hospital-building.png"
    },
    {
      title: "Advanced",
      highlight: "Robotic Surgery",
      desc: "Experience precision like never before with our cutting-edge robotic surgical systems and expert surgeons.",
      bg: "bg-gradient-to-r from-blue-800 to-blue-700",
      image: "/hospital-surgery.png"
    },
    {
      title: "Expert",
      highlight: "Multi-Specialty Care",
      desc: "From cardiology to orthopedics, our team of 50+ specialists covers every aspect of your health needs.",
      bg: "bg-gradient-to-r from-blue-900 to-slate-800",
      image: "/hospital-team.png"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="relative h-[600px] overflow-hidden">
      {slides.map((slide, index) => (
        <div 
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
        >
          <div className="absolute inset-0 bg-black/40 z-10" />
          <img src={slide.image} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 z-20 flex items-center">
            <div className="max-w-7xl mx-auto px-4 w-full">
              <div className="max-w-2xl text-white space-y-6 animate-fade-in-up">
                <div className="inline-block bg-orange-500 px-4 py-1 rounded-full text-sm font-semibold mb-2">
                  Since 2009
                </div>
                <h2 className="text-5xl md:text-6xl font-bold leading-tight">
                  {slide.title} <br />
                  <span className="text-orange-400">{slide.highlight}</span>
                </h2>
                <p className="text-lg text-gray-100 leading-relaxed max-w-lg">
                  {slide.desc}
                </p>
                <div className="flex gap-4 pt-4">
                  <Link to="/contact" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold transition-all hover:scale-105 flex items-center gap-2">
                    Book Appointment <Calendar size={18} />
                  </Link>
                  <Link to="/specialties" className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-3 rounded-full font-semibold transition-all border border-white/30">
                    Our Services
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-2">
        {slides.map((_, idx) => (
          <button 
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`w-3 h-3 rounded-full transition-all ${idx === currentSlide ? 'bg-orange-500 w-8' : 'bg-white/50'}`}
          />
        ))}
      </div>
    </div>
  );
};

const QuickInfo = () => (
  <div className="bg-white shadow-xl relative z-30 -mt-16 mx-4 md:mx-auto max-w-6xl rounded-2xl overflow-hidden border border-gray-100">
    <div className="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-gray-100">
      {[
        { icon: <Ambulance className="text-blue-900" size={32} />, title: "24/7 Emergency", desc: "Round the clock emergency services", link: "/contact" },
        { icon: <Stethoscope className="text-blue-900" size={32} />, title: "50+ Specialists", desc: "Expert doctors across specialties", link: "/doctors" },
        { icon: <Activity className="text-blue-900" size={32} />, title: "Advanced ICU", desc: "State-of-the-art intensive care units", link: "/facilities" },
        { icon: <Award className="text-blue-900" size={32} />, title: "NABH Accredited", desc: "Highest standards of quality care", link: "/about" },
      ].map((item, idx) => (
        <Link to={item.link} key={idx} className="p-6 flex items-start gap-4 hover:bg-blue-50 transition-colors cursor-pointer group">
          <div className="bg-blue-100 p-3 rounded-xl group-hover:bg-white transition-colors">
            {item.icon}
          </div>
          <div>
            <h3 className="font-bold text-gray-900">{item.title}</h3>
            <p className="text-sm text-gray-500 mt-1">{item.desc}</p>
          </div>
        </Link>
      ))}
    </div>
  </div>
);

const AboutSection = () => (
  <section className="py-20 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <img 
            src="/hospital-building.png" 
            alt="Hospital Building" 
            className="rounded-2xl shadow-2xl relative z-10 w-full h-[500px] object-cover"
          />
          <div className="absolute bottom-8 left-8 bg-white p-6 rounded-xl shadow-xl z-20 max-w-xs">
            <div className="text-4xl font-bold text-blue-900">15+</div>
            <div className="text-orange-500 font-semibold">Years of Experience</div>
            <div className="text-sm text-gray-500 mt-1">Serving the community with dedication</div>
          </div>
        </div>
        
        <div className="space-y-6">
          <div className="inline-block bg-blue-100 text-blue-900 px-4 py-1 rounded-full text-sm font-semibold">
            About Patel Hospital
          </div>
          <h2 className="text-4xl font-bold text-gray-900 leading-tight">
            Your Health Is Our <span className="text-orange-500">Top Priority</span>
          </h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            Established in 2009, Patel Hospital has grown to become one of the most trusted healthcare institutions in the region.
          </p>
          <div className="grid grid-cols-2 gap-4 pt-4">
            {[
              { icon: <Shield size={20} />, text: "Patient Safety First" },
              { icon: <Heart size={20} />, text: "Compassionate Care" },
              { icon: <Microscope size={20} />, text: "Advanced Technology" },
              { icon: <Users size={20} />, text: "Expert Medical Team" },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-3 text-gray-700 font-medium">
                <div className="text-orange-500">{item.icon}</div>
                {item.text}
              </div>
            ))}
          </div>
          <Link to="/about" className="mt-6 inline-flex bg-blue-900 hover:bg-blue-800 text-white px-8 py-3 rounded-full font-semibold transition-all hover:scale-105 items-center gap-2">
            Know More About Us <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </div>
  </section>
);

const Home = () => {
  return (
    <div className="animate-fade-in">
      <Hero />
      <QuickInfo />
      <AboutSection />
      
      {/* Short Specialties Preview */}
      <section className="py-20 bg-white text-center">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our <span className="text-blue-900">Specialties</span></h2>
          <p className="text-gray-600 mb-12">Expert care across various medical fields.</p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Cardiology", icon: <Heart size={32} />, color: "bg-red-50 text-red-600", link: "/specialties" },
              { name: "Orthopedics", icon: <Bone size={32} />, color: "bg-blue-50 text-blue-600", link: "/specialties" },
              { name: "Neurology", icon: <Brain size={32} />, color: "bg-purple-50 text-purple-600", link: "/specialties" },
              { name: "Pediatrics", icon: <Baby size={32} />, color: "bg-green-50 text-green-600", link: "/specialties" },
              { name: "Ophthalmology", icon: <Eye size={32} />, color: "bg-cyan-50 text-cyan-600", link: "/specialties" },
              { name: "General Surgery", icon: <Stethoscope size={32} />, color: "bg-orange-50 text-orange-600", link: "/specialties" },
            ].map((spec, idx) => (
              <div key={idx} className="p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-all hover:-translate-y-1">
                <div className={`w-16 h-16 rounded-2xl ${spec.color} flex items-center justify-center mb-6 mx-auto`}>
                  {spec.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{spec.name}</h3>
                <Link to={spec.link} className="text-blue-900 font-semibold flex items-center justify-center gap-2">
                  Learn More <ChevronRight size={16} />
                </Link>
              </div>
            ))}
          </div>
          <Link to="/specialties" className="mt-12 inline-block border-2 border-blue-900 text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-blue-900 hover:text-white transition-all">
            View All Specialties
          </Link>
        </div>
      </section>

      {/* Emergency Section */}
      <section className="py-20 bg-orange-500 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
          <div className="space-y-4 max-w-2xl text-center md:text-left">
            <h2 className="text-4xl font-bold">In Case of Medical Emergency?</h2>
            <p className="text-lg opacity-90">Our emergency department is ready 24/7 to provide immediate life-saving care. Call us now for ambulance service.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="tel:+919876543210" className="bg-white text-orange-500 px-8 py-4 rounded-full font-bold text-xl flex items-center gap-3 hover:bg-gray-100 transition-all">
              <Phone size={24} /> +91 98765 43210
            </a>
            <Link to="/contact" className="bg-orange-600 text-white border-2 border-white/20 px-8 py-4 rounded-full font-bold text-xl flex items-center gap-3 hover:bg-orange-700 transition-all">
              Book Appointment
            </Link>
          </div>
        </div>
      </section>

      {/* Latest News/Blog Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="space-y-4">
              <div className="inline-block bg-blue-100 text-blue-900 px-4 py-1 rounded-full text-sm font-semibold">Latest News</div>
              <h2 className="text-4xl font-bold text-gray-900">Health Tips & <span className="text-blue-900">Articles</span></h2>
            </div>
            <Link to="/blog" className="text-blue-900 font-bold flex items-center gap-2 hover:gap-3 transition-all">
              View All Articles <ArrowRight size={20} />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { id: 1, date: "April 20, 2024", title: "Maintaining Heart Health in a Busy Lifestyle", cat: "Cardiology", img: "/blog-heart.png" },
              { id: 2, date: "April 18, 2024", title: "Benefits of Regular Eye Checkups", cat: "Eye Care", img: "/blog-eye.png" },
              { id: 3, date: "April 15, 2024", title: "Understanding Robotic Assisted Surgery", cat: "Technology", img: "/blog-robot.png" },
            ].map((post, idx) => (
              <Link to={`/blog/${post.id}`} key={idx} className="group cursor-pointer flex flex-col h-full">
                <div className="relative h-64 overflow-hidden rounded-2xl mb-6">
                  <img src={post.img} alt="" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-lg text-xs font-bold text-blue-900 shadow-sm">{post.cat}</div>
                </div>
                <div className="text-sm text-gray-500 mb-2">{post.date}</div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-900 transition-colors leading-tight">{post.title}</h3>
                <div className="mt-4 text-blue-900 font-bold flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  Read More <ArrowRight size={16} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>


      {/* Stats Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { number: "15+", label: "Years Experience" },
            { number: "50+", label: "Expert Doctors" },
            { number: "1M+", label: "Patients Treated" },
            { number: "200+", label: "Hospital Beds" },
          ].map((stat, idx) => (
            <div key={idx}>
              <div className="text-4xl font-bold">{stat.number}</div>
              <div className="text-blue-200">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
