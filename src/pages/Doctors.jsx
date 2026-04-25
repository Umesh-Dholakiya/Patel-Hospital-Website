import React, { useRef } from 'react';
import { Star, MessageCircle, Calendar, GraduationCap, Award, Upload } from 'lucide-react';
import { Link } from 'react-router-dom';

const Doctors = () => {
  const doctors = [
    { 
      name: "Dr. Rajesh Patel", 
      role: "Chief Cardiologist", 
      exp: "20+ Years", 
      img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=400",
      qual: "MBBS, MD (Cardiology), FACC",
      rating: 4.9,
      reviews: 1500
    },
    { 
      name: "Dr. Priya Sharma", 
      role: "Senior Orthopedic Surgeon", 
      exp: "15+ Years", 
      img: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=400",
      qual: "MBBS, MS (Orthopedics), M.Ch",
      rating: 4.8,
      reviews: 1200
    },
    { 
      name: "Dr. Amit Shah", 
      role: "Senior Neurosurgeon", 
      exp: "18+ Years", 
      img: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=400",
      qual: "MBBS, M.Ch (Neurosurgery)",
      rating: 5.0,
      reviews: 900
    },
    { 
      name: "Dr. Sunita Gupta", 
      role: "Consultant Pediatrician", 
      exp: "12+ Years", 
      img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=400",
      qual: "MBBS, MD (Pediatrics), DNB",
      rating: 4.9,
      reviews: 2100
    },
    { 
      name: "Dr. Vikram Singh", 
      role: "Gastroenterologist", 
      exp: "16+ Years", 
      img: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=400",
      qual: "MBBS, MD, DM (Gastro)",
      rating: 4.7,
      reviews: 800
    },
    { 
      name: "Dr. Anjali Mehta", 
      role: "Ophthalmologist", 
      exp: "14+ Years", 
      img: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&q=80&w=400",
      qual: "MBBS, MS (Ophthalmology)",
      rating: 4.8,
      reviews: 1100
    },
  ];

  const fileInputRef = useRef(null);
  
  const handleCvClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      alert(`Thank you! Received: ${e.target.files[0].name}. We will review it soon.`);
    }
  };

  return (
    <div className="animate-fade-in">
      <div className="bg-blue-900 text-white py-20 text-center">
        <h1 className="text-5xl font-bold mb-4">Our Medical Experts</h1>
        <p className="text-blue-200 text-xl max-w-2xl mx-auto">Meet the world-class doctors who lead our departments and care for our patients.</p>
      </div>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {doctors.map((doc, idx) => (
              <div key={idx} className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group flex flex-col h-full">
                <div className="relative h-72 overflow-hidden">
                  <img src={doc.img} alt={doc.name} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1 text-sm font-bold text-orange-500 shadow-sm">
                    <Star size={16} className="fill-orange-500" /> {doc.rating}
                  </div>
                </div>
                
                <div className="p-8 flex-grow">
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-gray-900">{doc.name}</h3>
                    <p className="text-blue-900 font-semibold">{doc.role}</p>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3 text-sm text-gray-600">
                      <GraduationCap size={18} className="text-orange-500" />
                      {doc.qual}
                    </div>
                    <div className="flex items-center gap-3 text-sm text-gray-600">
                      <Award size={18} className="text-orange-500" />
                      {doc.exp} Experience
                    </div>
                    <div className="flex items-center gap-3 text-sm text-gray-600">
                      <MessageCircle size={18} className="text-orange-500" />
                      {doc.reviews}+ Happy Patients
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <Link to="/contact" className="flex-grow bg-blue-900 text-white py-3 rounded-xl font-bold hover:bg-blue-800 transition-colors flex items-center justify-center gap-2">
                      <Calendar size={18} /> Book Visit
                    </Link>
                    <a href="mailto:info@patelhospital.com" className="p-3 rounded-xl border-2 border-gray-100 text-gray-400 hover:border-blue-900 hover:text-blue-900 transition-all shadow-sm">
                      <MessageCircle size={20} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recruitment/Join Team Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Join Our Medical Team</h2>
          <p className="text-blue-100 text-lg mb-10 leading-relaxed">
            We are always looking for passionate medical professionals to join our family. If you're a specialist who cares about patient-centric healing, we'd love to hear from you.
          </p>
          <input 
            type="file" 
            ref={fileInputRef} 
            onChange={handleFileChange} 
            className="hidden" 
            accept=".pdf,.doc,.docx"
          />
          <button 
            onClick={handleCvClick}
            className="bg-orange-50 text-orange-500 hover:bg-white px-10 py-4 rounded-full font-bold text-lg transition-all hover:scale-105 flex items-center gap-2 mx-auto"
          >
            <Upload size={20} /> Submit Your CV
          </button>
        </div>
      </section>
    </div>
  );
};

export default Doctors;
