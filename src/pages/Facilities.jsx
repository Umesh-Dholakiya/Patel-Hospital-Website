import React from 'react';
import { 
  Building2, Monitor, ShieldCheck, Zap, 
  Droplets, Microscope, Clock, Wifi 
} from 'lucide-react';

const Facilities = () => {
  const facilities = [
    { 
      title: "Modular Operation Theaters", 
      desc: "Zero-infection environment with laminar airflow and HEPA filters for complex surgeries.", 
      icon: <ShieldCheck size={32} />,
      img: "/hospital-surgery.png"
    },
    { 
      title: "Advanced Diagnostic Center", 
      desc: "Equipped with 3 Tesla MRI, 128 Slice CT Scan, and 4D Ultrasound for precise diagnosis.", 
      icon: <Microscope size={32} />,
      img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800"
    },
    { 
      title: "Intensive Care Units (ICU)", 
      desc: "Specialized monitoring systems with 1:1 nurse-to-patient ratio for critical care.", 
      icon: <Monitor size={32} />,
      img: "/hospital-facility.png"
    },
    { 
      title: "24/7 Pharmacy & Lab", 
      desc: "Fully computerized pharmacy and NABL accredited laboratory services available round the clock.", 
      icon: <Clock size={32} />,
      img: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800"
    },
  ];

  return (
    <div className="animate-fade-in">
      <div className="bg-blue-900 text-white py-20 text-center">
        <h1 className="text-5xl font-bold mb-4">World-Class Facilities</h1>
        <p className="text-blue-200 text-xl max-w-2xl mx-auto">Modern infrastructure designed for excellence in clinical care and patient comfort.</p>
      </div>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="space-y-24">
            {facilities.map((fac, idx) => (
              <div key={idx} className={`flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-center`}>
                <div className="w-full md:w-1/2">
                  <div className="relative group">
                    <div className="absolute -inset-4 bg-blue-100 rounded-3xl scale-95 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500" />
                    <img src={fac.img} alt={fac.title} className="rounded-3xl shadow-2xl w-full h-[400px] object-cover relative z-10" />
                  </div>
                </div>
                <div className="w-full md:w-1/2 space-y-6">
                  <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center text-blue-900">
                    {fac.icon}
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">{fac.title}</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">{fac.desc}</p>
                  <ul className="grid grid-cols-2 gap-4">
                    {['Fully Automated', 'Safe & Secure', 'Modern Tech', 'Expert Staff'].map((feat) => (
                      <li key={feat} className="flex items-center gap-2 text-gray-700 font-medium">
                        <Zap size={16} className="text-orange-500" /> {feat}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="inline-block bg-orange-100 text-orange-700 px-4 py-1 rounded-full text-sm font-semibold mb-4">Patient Comfort</div>
          <h2 className="text-4xl font-bold text-gray-900 mb-16">Premium <span className="text-blue-900">Amenities</span></h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Wifi size={28} />, name: "High Speed Wi-Fi", desc: "Stay connected with family and work during your stay." },
              { icon: <Droplets size={28} />, name: "Pure Drinking Water", desc: "RO purified water stations available on every floor." },
              { icon: <Building2 size={28} />, name: "Private Suites", desc: "Spacious, air-conditioned rooms with modern furniture." },
              { icon: <Clock size={28} />, name: "24/7 Visitors Area", desc: "Comfortable waiting lounges for your loved ones." },
            ].map((amenity, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 group">
                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-900 mx-auto mb-6 group-hover:bg-blue-900 group-hover:text-white transition-colors">
                  {amenity.icon}
                </div>
                <h4 className="font-bold text-gray-900 text-lg mb-2">{amenity.name}</h4>
                <p className="text-sm text-gray-500 leading-relaxed">{amenity.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Facilities;
