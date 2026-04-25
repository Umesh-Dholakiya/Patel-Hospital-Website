import { Link } from 'react-router-dom';
import { 
  Heart, Bone, Brain, Baby, Eye, Stethoscope, 
  Activity, Microscope, ChevronRight, CheckCircle2 
} from 'lucide-react';

const Specialties = () => {
  const specialties = [
    { 
      name: "Cardiology", 
      icon: <Heart size={40} />, 
      desc: "Comprehensive heart care including diagnostic, interventional, and surgical treatments.",
      details: ["24/7 Cath Lab", "Heart Valve Surgery", "TAVI Procedures", "Non-invasive Cardiac Imaging"],
      color: "bg-red-50 text-red-600",
      border: "border-red-100"
    },
    { 
      name: "Orthopedics", 
      icon: <Bone size={40} />, 
      desc: "Advanced joint replacement, sports medicine, and spine surgery with rapid recovery programs.",
      details: ["Robotic Joint Replacement", "Sports Injury Clinic", "Complex Trauma Care", "Physiotherapy Center"],
      color: "bg-blue-50 text-blue-600",
      border: "border-blue-100"
    },
    { 
      name: "Neurology", 
      icon: <Brain size={40} />, 
      desc: "Expert care for brain and spine disorders with a dedicated stroke center and neuro-rehab.",
      details: ["Stroke Management", "Epilepsy Clinic", "Micro-Neurosurgery", "Brain Tumor Surgery"],
      color: "bg-purple-50 text-purple-600",
      border: "border-purple-100"
    },
    { 
      name: "Pediatrics", 
      icon: <Baby size={40} />, 
      desc: "Dedicated care for children from birth to adolescence, featuring a state-of-the-art NICU.",
      details: ["Neonatal Intensive Care", "Child Vaccinations", "Pediatric Surgery", "Growth Monitoring"],
      color: "bg-green-50 text-green-600",
      border: "border-green-100"
    },
    { 
      name: "Ophthalmology", 
      icon: <Eye size={40} />, 
      desc: "Advanced eye surgery including LASIK, cataract, and glaucoma treatments.",
      details: ["LASIK Laser Vision", "Cataract Surgery", "Glaucoma Management", "Retina Services"],
      color: "bg-cyan-50 text-cyan-600",
      border: "border-cyan-100"
    },
    { 
      name: "General Surgery", 
      icon: <Stethoscope size={40} />, 
      desc: "Laparoscopic and minimally invasive procedures for a wide range of surgical needs.",
      details: ["Laparoscopic Surgery", "Hernia Repair", "Appendectomy", "Trauma Surgery"],
      color: "bg-orange-50 text-orange-600",
      border: "border-orange-100"
    },
  ];

  return (
    <div className="animate-fade-in">
      <div className="bg-blue-900 text-white py-20 text-center">
        <h1 className="text-5xl font-bold mb-4">Our Specialties</h1>
        <p className="text-blue-200 text-xl max-w-2xl mx-auto px-4">World-class medical expertise across diverse disciplines, powered by advanced technology.</p>
      </div>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {specialties.map((spec, idx) => (
              <div key={idx} className={`p-8 rounded-3xl border ${spec.border} hover:shadow-2xl transition-all duration-300 group`}>
                <div className={`w-20 h-20 rounded-2xl ${spec.color} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                  {spec.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{spec.name}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {spec.desc}
                </p>
                <div className="space-y-3 mb-8">
                  {spec.details.map((detail, dIdx) => (
                    <div key={dIdx} className="flex items-center gap-2 text-sm text-gray-700">
                      <CheckCircle2 size={16} className="text-blue-900" />
                      {detail}
                    </div>
                  ))}
                </div>
                <Link to="/contact" className="block text-center w-full py-3 rounded-xl border-2 border-blue-900 text-blue-900 font-bold hover:bg-blue-900 hover:text-white transition-all">
                  Book Consultation
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Why Choose Us for Specialties */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12">Excellence in Every Department</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { title: "Advanced Diagnostics", desc: "Latest MRI & CT Scans" },
              { title: "Expert Surgeons", desc: "Top-rated professionals" },
              { title: "Personalized Care", desc: "Custom treatment plans" },
              { title: "Modern Facilities", desc: "International standard ICU" },
            ].map((item, idx) => (
              <div key={idx} className="p-6">
                <div className="text-orange-500 font-bold text-4xl mb-2">0{idx + 1}</div>
                <h4 className="font-bold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Specialties;
