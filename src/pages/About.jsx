import React from 'react';
import { Shield, Heart, Microscope, Users, Award, CheckCircle } from 'lucide-react';

const About = () => {
  return (
    <div className="animate-fade-in">
      {/* Page Header */}
      <div className="bg-blue-900 text-white py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        </div>
        <div className="relative z-10">
          <h1 className="text-5xl font-bold mb-4">About Patel Hospital</h1>
          <p className="text-blue-200 text-xl">Healing with Excellence since 2009</p>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Legacy of Care</h2>
                <p className="text-gray-600 leading-relaxed text-lg mb-4">
                  Patel Hospital was founded with a single mission: to provide world-class healthcare that is both advanced and compassionate. Over the last 15 years, we have grown from a small clinic to a 200-bed multi-specialty institution.
                </p>
                <p className="text-gray-600 leading-relaxed text-lg">
                  We take pride in our patient-first approach, combining the latest medical technology with a team of experts who truly care about your well-being.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { icon: <Award className="text-orange-500" />, title: "NABH Accredited", desc: "Recognized for quality" },
                  { icon: <Shield className="text-orange-500" />, title: "Patient Safety", desc: "International standards" },
                  { icon: <Users className="text-orange-500" />, title: "Expert Staff", desc: "100+ medical professionals" },
                  { icon: <Heart className="text-orange-500" />, title: "Trust", desc: "1M+ happy patients" },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 items-start p-4 bg-gray-50 rounded-xl hover:shadow-md transition-shadow">
                    <div className="bg-white p-2 rounded-lg shadow-sm">{item.icon}</div>
                    <div>
                      <h4 className="font-bold text-gray-900">{item.title}</h4>
                      <p className="text-xs text-gray-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl" />
              <img 
                src="/hospital-building.png" 
                alt="Hospital Interior" 
                className="rounded-3xl shadow-2xl w-full h-[600px] object-cover relative z-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8">
          <div className="bg-white p-10 rounded-2xl shadow-lg border-t-4 border-blue-900">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              To be the premier healthcare provider in the region, recognized for excellence in patient care, clinical research, and medical education.
            </p>
          </div>
          <div className="bg-white p-10 rounded-2xl shadow-lg border-t-4 border-orange-500">
            <h3 className="text-2xl font-bold text-orange-500 mb-4">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              To deliver compassionate, high-quality, and affordable healthcare through teamwork and continuous improvement in technology and skills.
            </p>
          </div>
          <div className="bg-white p-10 rounded-2xl shadow-lg border-t-4 border-blue-900">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">Our Values</h3>
            <ul className="space-y-2 text-gray-600">
              {['Integrity & Ethics', 'Patient Empowerment', 'Innovation', 'Community Service'].map((val) => (
                <li key={val} className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-500" /> {val}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
