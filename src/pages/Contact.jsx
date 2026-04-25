import React, { useState } from 'react';
import { 
  Phone, Mail, MapPin, Clock, 
  MessageSquare, Send, PhoneCall, CheckCircle 
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    department: 'Select Department',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    // In a real app, this would be an API call to save to a database.
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      department: 'Select Department',
      message: ''
    });
  };

  return (
    <div className="animate-fade-in">
      <div className="bg-blue-900 text-white py-20 text-center">
        <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
        <p className="text-blue-200 text-xl max-w-2xl mx-auto">We are here to help. Reach out for appointments, emergencies, or general inquiries.</p>
      </div>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {[
              { 
                icon: <PhoneCall className="text-blue-900" />, 
                title: "Call Us", 
                info: "+91 98765 43210", 
                sub: "Emergency 24/7",
                color: "bg-blue-50"
              },
              { 
                icon: <Mail className="text-orange-500" />, 
                title: "Email Us", 
                info: "info@patelhospital.com", 
                sub: "Response in 24h",
                color: "bg-orange-50"
              },
              { 
                icon: <MapPin className="text-green-500" />, 
                title: "Visit Us", 
                info: "123 Health Ave, Ahmedabad", 
                sub: "Gujarat - 380001",
                color: "bg-green-50"
              },
            ].map((card, idx) => (
              <div key={idx} className={`${card.color} p-10 rounded-3xl text-center hover:scale-105 transition-transform duration-300`}>
                <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm">
                  {card.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{card.title}</h3>
                <p className="text-gray-900 font-bold mb-1">{card.info}</p>
                <p className="text-sm text-gray-500">{card.sub}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div className="bg-gray-50 p-10 rounded-3xl shadow-xl border border-gray-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Book an Appointment</h2>
              
              {submitted ? (
                <div className="bg-green-100 border border-green-200 text-green-700 p-6 rounded-2xl flex flex-col items-center text-center gap-4 animate-fade-in">
                  <CheckCircle size={48} className="text-green-600" />
                  <div>
                    <h3 className="font-bold text-xl">Request Received!</h3>
                    <p>Thank you for reaching out. Our team will contact you shortly to confirm your appointment.</p>
                  </div>
                </div>
              ) : (
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700">First Name</label>
                      <input 
                        type="text" 
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-900 focus:outline-none transition-all" 
                        placeholder="John" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700">Last Name</label>
                      <input 
                        type="text" 
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-900 focus:outline-none transition-all" 
                        placeholder="Doe" 
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">Email Address</label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-900 focus:outline-none transition-all" 
                      placeholder="john@example.com" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">Department</label>
                    <select 
                      name="department"
                      value={formData.department}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-900 focus:outline-none bg-white"
                    >
                      <option disabled>Select Department</option>
                      <option>Cardiology</option>
                      <option>Orthopedics</option>
                      <option>Neurology</option>
                      <option>Pediatrics</option>
                      <option>General Surgery</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">Message</label>
                    <textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4} 
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-900 focus:outline-none transition-all" 
                      placeholder="Describe your concern..."
                    ></textarea>
                  </div>
                  <button type="submit" className="w-full bg-blue-900 text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-800 transition-all flex items-center justify-center gap-2 shadow-lg">
                    <Send size={20} /> Send Request
                  </button>
                </form>
              )}
            </div>


            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  {[
                    { q: "What are the OPD timings?", a: "Our OPD operates from 8:00 AM to 8:00 PM, Monday to Saturday." },
                    { q: "Do you accept health insurance?", a: "Yes, we are empaneled with all major TPA and insurance providers." },
                    { q: "Is emergency care available 24/7?", a: "Absolutely. Our emergency and trauma center is fully functional 24 hours a day." },
                  ].map((faq, idx) => (
                    <div key={idx} className="p-6 bg-white border border-gray-100 rounded-2xl">
                      <h4 className="font-bold text-blue-900 mb-2">{faq.q}</h4>
                      <p className="text-gray-600 text-sm">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-orange-500 p-8 rounded-3xl text-white">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Clock size={24} /> 24/7 Emergency
                </h3>
                <p className="mb-6 opacity-90">For immediate assistance or ambulance services, call our dedicated emergency line.</p>
                <a href="tel:+919876543210" className="bg-white text-orange-500 px-8 py-3 rounded-full font-bold inline-block hover:bg-gray-100 transition-all">
                  +91 98765 43210
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Map Section */}
      <section className="h-[500px] w-full">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117506.38314115167!2d72.50851888421873!3d23.019565555029314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fccd70d11ac24fe!2sAhmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1713985420000!5m2!1sen!2sin" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Hospital Location"
        ></iframe>
      </section>
    </div>
  );
};

export default Contact;
