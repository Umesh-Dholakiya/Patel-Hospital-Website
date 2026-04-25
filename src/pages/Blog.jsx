import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, Search } from 'lucide-react';

const Blog = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const articles = [
    { 
      id: 1, 
      date: "April 20, 2024", 
      author: "Dr. Sameer Patel",
      title: "Maintaining Heart Health in a Busy Lifestyle", 
      cat: "Cardiology", 
      img: "/blog-heart.png",
      excerpt: "In today's fast-paced world, heart health often takes a backseat. Learn 5 simple habits to keep your heart strong."
    },
    { 
      id: 2, 
      date: "April 18, 2024", 
      author: "Dr. Anjali Shah",
      title: "Benefits of Regular Eye Checkups", 
      cat: "Eye Care", 
      img: "/blog-eye.png",
      excerpt: "Your eyes are the windows to the world. Discover why annual checkups are crucial even if you have perfect vision."
    },
    { 
      id: 3, 
      date: "April 15, 2024", 
      author: "Dr. Rahul Mehta",
      title: "Understanding Robotic Assisted Surgery", 
      cat: "Technology", 
      img: "/blog-robot.png",
      excerpt: "Robotic surgery is revolutionizing healthcare. We explain how it works and what the benefits are for patients."
    },
    { 
      id: 4, 
      date: "April 10, 2024", 
      author: "Dr. Priya Desai",
      title: "Nutrition Tips for Growing Children", 
      cat: "Pediatrics", 
      img: "/blog-pediatrics.png",
      excerpt: "A balanced diet is essential for your child's development. Here's a guide to nutrient-rich meals."
    },
    { 
      id: 5, 
      date: "April 05, 2024", 
      author: "Dr. Vikram Singh",
      title: "Managing Stress for Mental Well-being", 
      cat: "Mental Health", 
      img: "/blog-mental.png",
      excerpt: "Stress can affect every aspect of your life. Learn effective techniques to manage it daily."
    },
    { 
      id: 6, 
      date: "March 28, 2024", 
      author: "Dr. Neha Gupta",
      title: "The Importance of Regular Exercise", 
      cat: "Fitness", 
      img: "/blog-fitness.png",
      excerpt: "Staying active is the key to longevity. Discover how 30 minutes a day can transform your health."
    },
    { 
      id: 7, 
      date: "March 20, 2024", 
      author: "Dr. Rajesh Varma",
      title: "Advances in Modern Orthopedics", 
      cat: "Orthopedics", 
      img: "/blog-ortho.png",
      excerpt: "From robotic knee replacements to minimally invasive spine surgery, discover the future of ortho care."
    },
    { 
      id: 8, 
      date: "March 15, 2024", 
      author: "Dr. Sneha Iyer",
      title: "Understanding Neurological Disorders", 
      cat: "Neurology", 
      img: "/blog-neuro.png",
      excerpt: "Expert insights into managing chronic neurological conditions and maintaining brain health."
    },
    { 
      id: 9, 
      date: "March 10, 2024", 
      author: "Dr. Amit Khanna",
      title: "Role of Diet in Disease Prevention", 
      cat: "Nutrition", 
      img: "/blog-nutrition.png",
      excerpt: "Food is medicine. Learn how a plant-forward diet can help prevent chronic lifestyle diseases."
    },
    { 
      id: 10, 
      date: "March 05, 2024", 
      author: "Dr. Kavita Rao",
      title: "Common General Surgery Procedures", 
      cat: "Technology", 
      img: "/blog-surgery.png",
      excerpt: "An overview of laparoscopic procedures and what to expect during your surgical journey."
    }
  ];

  const filteredArticles = articles.filter(article => {
    const matchesTab = activeTab === 'All' || article.cat === activeTab;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          article.cat.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  const categories = ['All', 'Cardiology', 'Pediatrics', 'Technology', 'Mental Health', 'Orthopedics', 'Fitness'];

  return (
    <div className="animate-fade-in">
      <div className="bg-blue-900 text-white py-20 text-center">
        <h1 className="text-5xl font-bold mb-4">Health Tips & Articles</h1>
        <p className="text-blue-200 text-xl max-w-2xl mx-auto px-4">Expert advice and the latest medical news to help you live a healthier life.</p>
      </div>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8 mb-12">
            <div className="flex-grow relative">
              <input 
                type="text" 
                placeholder="Search articles..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:border-blue-900 shadow-sm"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            </div>
            <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
              {categories.map(cat => (
                <button 
                  key={cat} 
                  onClick={() => setActiveTab(cat)}
                  className={`px-6 py-4 rounded-2xl whitespace-nowrap font-semibold transition-all ${cat === activeTab ? 'bg-blue-900 text-white shadow-lg' : 'bg-white text-gray-600 border border-gray-100 hover:border-blue-900'}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {filteredArticles.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              {filteredArticles.map((article) => (
                <Link to={`/blog/${article.id}`} key={article.id} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col h-full animate-fade-in">
                  <div className="relative h-60 overflow-hidden">
                    <img src={article.img} alt={article.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-4 py-1.5 rounded-xl text-sm font-bold text-blue-900 shadow-sm">{article.cat}</div>
                  </div>
                  <div className="p-8 flex flex-col flex-grow">
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                      <span className="flex items-center gap-1"><Calendar size={16} /> {article.date}</span>
                      <span className="flex items-center gap-1"><User size={16} /> By {article.author}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-tight group-hover:text-blue-900 transition-colors">{article.title}</h3>
                    <p className="text-gray-600 mb-6 line-clamp-3">
                      {article.excerpt}
                    </p>
                    <div className="mt-auto flex items-center gap-2 text-blue-900 font-bold">
                      Read Article <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-white rounded-3xl shadow-sm border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-400">No articles found matching your criteria.</h3>
              <button onClick={() => {setActiveTab('All'); setSearchQuery('');}} className="mt-4 text-blue-900 font-bold underline">Clear all filters</button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Blog;
