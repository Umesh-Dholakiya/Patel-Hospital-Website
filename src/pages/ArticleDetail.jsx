import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, User, ArrowLeft, Share2, MessageCircle } from 'lucide-react';

const ArticleDetail = () => {
  const { id } = useParams();
  
  const articles = [
    { 
      id: "1", 
      date: "April 20, 2024", 
      author: "Dr. Sameer Patel",
      title: "Maintaining Heart Health in a Busy Lifestyle", 
      cat: "Cardiology", 
      img: "/blog-heart.png",
      content: [
        { type: 'paragraph', text: "Heart disease remains one of the leading causes of death worldwide, yet many of the risks associated with it are preventable through simple lifestyle changes. In our increasingly busy world, it can be challenging to prioritize heart health, but small, consistent efforts can make a significant difference in your long-term cardiovascular health." },
        { type: 'heading', text: "Understanding Cardiovascular Risk Factors" },
        { type: 'paragraph', text: "Risk factors for heart disease can be divided into non-modifiable (age, family history) and modifiable (diet, exercise, smoking). At Patel Hospital, we focus on the modifiable factors to help our patients take control of their health. Hypertension, often called the 'silent killer,' is one of the most common issues we manage." },
        { type: 'heading', text: "The Pillars of a Heart-Healthy Lifestyle" },
        { type: 'list', items: [
          "Nutritional Balance: Focus on the DASH or Mediterranean diet, emphasizing whole grains, lean proteins, and plenty of leafy greens while minimizing sodium intake.",
          "Strategic Physical Activity: The heart is a muscle that needs regular training. Aim for a mix of aerobic exercises (brisk walking, cycling) and strength training.",
          "Smoking Cessation: Smoking is one of the most significant yet preventable risks for heart attacks. Quitting significantly improves your heart health within weeks.",
          "Stress Mitigation: Chronic stress leads to inflammation and high blood pressure. Practice mindfulness or dedicated relaxation techniques daily.",
          "Regular Screenings: Monitoring your lipid profile (cholesterol) and blood sugar is essential for early detection of metabolic issues."
        ]},
        { type: 'note', text: "Even small changes, like reducing your daily salt intake by just half a teaspoon or taking a 15-minute walk after dinner, can significantly lower your risk of cardiovascular events over time." },
        { type: 'heading', text: "Advanced Cardiac Care at Patel Hospital" },
        { type: 'paragraph', text: "When lifestyle changes aren't enough, we provide advanced medical and surgical interventions. From non-invasive diagnostics like Stress Echo and TMT to advanced cath lab procedures like Angioplasty and Stenting, our cardiac unit is equipped with world-class technology to save lives." },
        { type: 'warning', text: "Seek immediate medical attention if you experience pressure, tightness, or pain in your chest, shortness of breath, or sudden numbness. Time is muscle—every minute saved during a cardiac event counts." }
      ]
    },
    { 
      id: "2", 
      date: "April 18, 2024", 
      author: "Dr. Anjali Shah",
      title: "Benefits of Regular Eye Checkups", 
      cat: "Eye Care", 
      img: "/blog-eye.png",
      content: [
        { type: 'paragraph', text: "Your eyes are one of your most precious assets, yet they are often neglected until a problem arises. Regular eye examinations are not just about checking your vision or updating your prescription; they are a vital part of your overall health maintenance and can even detect systemic issues like diabetes and high blood pressure." },
        { type: 'heading', text: "Combatting Digital Eye Strain" },
        { type: 'paragraph', text: "In the age of digital screens, Computer Vision Syndrome (CVS) has become increasingly common. We spend hours looking at smartphones and monitors, which can lead to dry eyes, blurred vision, and headaches. Protecting your eyes in the digital age requires conscious habit-building." },
        { type: 'note', text: "The 20-20-20 rule is your best defense against digital strain: Every 20 minutes, look at something 20 feet away for 20 seconds. This simple act resets your eye muscles and prevents fatigue." },
        { type: 'heading', text: "The Importance of Early Disease Detection" },
        { type: 'paragraph', text: "Many vision-threatening diseases exhibit no symptoms in their early stages. Regular screenings allow us to catch these conditions when they are most treatable." },
        { type: 'list', items: [
          "Glaucoma Screening: Often called the 'silent thief of sight,' it can only be detected through comprehensive intraocular pressure checks.",
          "Diabetic Retinopathy: Annual exams are mandatory for diabetic patients to prevent permanent retinal damage.",
          "Age-Related Macular Degeneration (AMD): Early detection of AMD is crucial for preserving central vision in seniors.",
          "Cataract Evaluation: Modern surgery can now restore perfect vision even if you have advanced cataracts.",
          "UV Protection: Consistent use of high-quality sunglasses prevents long-term damage from ultraviolet rays."
        ]},
        { type: 'heading', text: "Modern Vision Correction Options" },
        { type: 'paragraph', text: "For those looking to move beyond glasses and contact lenses, our ophthalmology department offers advanced refractive solutions. From LASIK to ICL (Implantable Collamer Lens), we use the latest laser technology to help you achieve visual freedom safely and effectively." },
        { type: 'warning', text: "If you experience sudden vision loss, a large number of 'floaters,' or flashes of light, seek immediate care. These can be signs of a retinal detachment which is a medical emergency." }
      ]
    },
    { 
      id: "3", 
      date: "April 15, 2024", 
      author: "Dr. Rahul Mehta",
      title: "Understanding Robotic Assisted Surgery", 
      cat: "Technology", 
      img: "/blog-robot.png",
      content: [
        { type: 'paragraph', text: "Robotic surgery represents the pinnacle of surgical innovation, combining the skill of an expert surgeon with the precision of advanced robotic systems. Contrary to popular belief, the robot does not perform surgery on its own; it is a sophisticated tool entirely controlled by the surgeon from a console nearby." },
        { type: 'heading', text: "The Mechanics of Precision" },
        { type: 'paragraph', text: "Robotic systems like the ones used at Patel Hospital provide a highly magnified, high-definition 3D view of the surgical site. This allows for depth perception and clarity far beyond the human eye's natural capability. The robotic 'wrists' can also rotate 360 degrees, providing range of motion that no human hand can match." },
        { type: 'heading', text: "Patient Benefits: Why Go Robotic?" },
        { type: 'paragraph', text: "The shift toward robotic-assisted procedures is driven by significantly improved patient outcomes. Because the incisions are much smaller than traditional open surgery, the body undergoes less trauma." },
        { type: 'list', items: [
          "Minimally Invasive: Keyhole incisions mean less blood loss and a lower risk of wound infections.",
          "Reduced Pain: Patients typically require significantly less post-operative pain medication.",
          "Rapid Recovery: Most robotic surgery patients are discharged earlier and return to normal activities within days instead of weeks.",
          "Greater Accuracy: Enhanced visualization allows for precise removal of diseased tissue while sparing healthy nerves and blood vessels."
        ]},
        { type: 'note', text: "Robotic surgery is particularly effective for complex urological, gynecological, and gastrointestinal procedures where working in tight spaces with high precision is critical." },
        { type: 'heading', text: "Is Robotic Surgery Right for You?" },
        { type: 'paragraph', text: "While the benefits are many, each patient is unique. Our surgical team conducts thorough evaluations to determine the best approach for your specific condition. Factors like medical history, the complexity of the procedure, and previous surgeries are all considered in the decision-making process." },
        { type: 'warning', text: "Every surgical procedure, whether traditional or robotic, carries some level of risk. It is essential to have a detailed discussion with your surgeon about potential complications and expectations." }
      ]
    },
    { 
      id: "4", 
      date: "April 10, 2024", 
      author: "Dr. Priya Desai",
      title: "Nutrition Tips for Growing Children", 
      cat: "Pediatrics", 
      img: "/blog-pediatrics.png",
      content: [
        { type: 'paragraph', text: "Childhood is a period of rapid growth and development, making nutrition one of the most important factors for long-term health. A balanced diet doesn't just support physical height and weight; it's the foundation for cognitive function, emotional stability, and a strong immune system." },
        { type: 'heading', text: "Building a Foundation for Strong Growth" },
        { type: 'paragraph', text: "During various growth spurts, children require specific nutrient densities. Calcium and Vitamin D are non-negotiable for skeletal development, while Iron is crucial for brain development and energy levels. Ensuring these are present in daily meals can prevent common pediatric deficiencies." },
        { type: 'list', items: [
          "Calcium & Vitamin D: Dairy, fortified milks, and leafy greens to build bone density that lasts a lifetime.",
          "High-Quality Protein: Essential for muscle development and cellular repair during periods of rapid growth.",
          "Healthy Fats: Omega-3s from walnuts and seeds to support brain and eye development.",
          "Complex Carbohydrates: Whole grains to provide the sustained energy needed for active play and learning.",
          "Hydration: Encouraging water over sugary juices to maintain metabolic health and focus."
        ]},
        { type: 'note', text: "Establishing healthy eating habits early is easier than changing them later. Try to involve children in meal preparation to foster a positive relationship with healthy foods." },
        { type: 'heading', text: "Managing Picky Eating and Allergies" },
        { type: 'paragraph', text: "Picky eating is a normal developmental phase, but it can be stressful for parents. We recommend exposing children to new foods multiple times without pressure. It's also important to be vigilant about food allergies, which are becoming increasingly common in the modern pediatric landscape." },
        { type: 'warning', text: "Excessive consumption of processed sugars and sodas is linked to childhood obesity, dental decay, and increased risk of Type 2 diabetes. Moderation and education are key to prevention." }
      ]
    },
    { 
      id: "5", 
      date: "April 05, 2024", 
      author: "Dr. Vikram Singh",
      title: "Managing Stress for Mental Well-being", 
      cat: "Mental Health", 
      img: "/blog-mental.png",
      content: [
        { type: 'paragraph', text: "In our high-speed modern society, mental health is often sidelined in favor of physical productivity. However, stress is more than just a feeling—it's a physiological response that can have profound effects on your cardiovascular, immune, and nervous systems." },
        { type: 'heading', text: "The Science of the Stress Response" },
        { type: 'paragraph', text: "When you're under stress, your body releases cortisol and adrenaline. While useful in short 'fight or flight' bursts, chronic elevation of these hormones leads to inflammation and exhaustion. Recognizing the signs of chronic stress is the first step toward reclaiming your peace of mind." },
        { type: 'heading', text: "Evidence-Based Management Techniques" },
        { type: 'paragraph', text: "Our mental health department emphasizes holistic strategies that integrate both psychological and physiological interventions for better resilience." },
        { type: 'list', items: [
          "Mindfulness & Meditation: Proven to lower heart rate and reduce the activity of the amygdala, the brain's fear center.",
          "Cognitive Reframing: Learning to identify and challenge negative thought patterns that exacerbate stress.",
          "Physical Discharge: Regular exercise helps 'burn off' the chemical byproducts of the stress response.",
          "Sleep Hygiene: Protecting your sleep environment is essential for emotional regulation and cognitive clarity.",
          "Social Support: Never underestimate the power of a strong community and open communication."
        ]},
        { type: 'note', text: "Deep breathing for just five minutes can manually override the 'fight or flight' system and trigger the parasympathetic nervous system for instant calm." },
        { type: 'heading', text: "When to Seek Professional Help" },
        { type: 'paragraph', text: "There is no shame in seeking help. Whether it's through counseling, therapy, or medication, professional support can provide you with the tools needed to manage complex emotional landscapes and improve your overall quality of life." },
        { type: 'warning', text: "If you experience persistent feelings of hopelessness, severe anxiety, or thoughts of self-harm, please reach out to a professional or a crisis helpline immediately. Mental health is health." }
      ]
    },
    { 
      id: "6", 
      date: "March 28, 2024", 
      author: "Dr. Neha Gupta",
      title: "The Importance of Regular Exercise", 
      cat: "Fitness", 
      img: "/blog-fitness.png",
      content: [
        { type: 'paragraph', text: "Exercise is the closest thing we have to a 'miracle drug.' Beyond weight management, regular physical activity is fundamental for metabolic health, mental clarity, and longevity. It affects nearly every system in the body, from bone density to cognitive performance." },
        { type: 'heading', text: "The Anatomy of a Complete Routine" },
        { type: 'paragraph', text: "A balanced fitness regimen should include more than just one type of activity. Diversity in exercise ensures that you're building a resilient body capable of handling various physical demands." },
        { type: 'list', items: [
          "Aerobic Capacity: Activities like swimming or running to strengthen the cardiovascular system and improve endurance.",
          "Resistance Training: Essential for maintaining muscle mass (sarcopenia prevention) and boosting resting metabolism.",
          "Mobility & Flexibility: Yoga or dedicated stretching to preserve joint range of motion and prevent injuries.",
          "Balance Work: Particularly important as we age to prevent falls and maintain functional independence."
        ]},
        { type: 'note', text: "Consistency is vastly more important than intensity. A moderate 30-minute walk every single day is more beneficial than one extreme three-hour workout per week." },
        { type: 'heading', text: "Overcoming Common Barriers" },
        { type: 'paragraph', text: "Lack of time and low motivation are common hurdles. We suggest 'habit stacking'—incorporating movement into your existing routine, like walking while on a phone call or doing bodyweight exercises during commercial breaks." },
        { type: 'warning', text: "Listen to your body. Sharp pain, dizziness, or chest discomfort during exercise are not things to 'push through.' Always consult a doctor before starting a new high-intensity regimen." }
      ]
    },
    { 
      id: "7", 
      date: "March 20, 2024", 
      author: "Dr. Rajesh Varma",
      title: "Advances in Modern Orthopedics", 
      cat: "Orthopedics", 
      img: "/blog-ortho.png",
      content: [
        { type: 'paragraph', text: "Orthopedics has evolved from simply setting broken bones to a high-tech field focused on joint preservation and biological restoration. At Patel Hospital, we utilize the latest orthopedic innovations to return our patients to their active lifestyles with minimal downtime." },
        { type: 'heading', text: "Biological and Regenerative Orthopedics" },
        { type: 'paragraph', text: "One of the most exciting areas is the move toward regenerative medicine. Instead of just replacing joints, we are increasingly looking at ways to heal them using advanced therapies that leverage the body's natural healing capabilities." },
        { type: 'heading', text: "The Leap in Joint Replacement Technology" },
        { type: 'paragraph', text: "For cases where replacement is necessary, robotic-assisted technology has revolutionized accuracy. This ensures that the new joint is aligned perfectly with your specific anatomy, leading to a much more natural feel and a longer lifespan for the implant." },
        { type: 'list', items: [
          "Robotic Precision: Allows for sub-millimeter accuracy in bone preparation and implant placement.",
          "Minimally Invasive Arthroscopy: Treating torn ligaments and cartilage through tiny incisions for rapid recovery.",
          "Sports Medicine: Specialized protocols for athletes to return to peak performance safely.",
          "Geriatric Care: Managing osteoporosis and fragility fractures with advanced stabilization techniques.",
          "3D Printed Implants: Custom-made solutions for complex anatomical deformities."
        ]},
        { type: 'note', text: "Modern pain management protocols often mean patients can begin physical therapy and even walk within hours of a major joint replacement surgery." },
        { type: 'warning', text: "Chronic joint pain is not just a sign of aging. If ignored, small issues can lead to permanent cartilage loss. Consult an orthopedic specialist at the first sign of persistent discomfort." }
      ]
    },
    { 
      id: "8", 
      date: "March 15, 2024", 
      author: "Dr. Sneha Iyer",
      title: "Understanding Neurological Disorders", 
      cat: "Neurology", 
      img: "/blog-neuro.png",
      content: [
        { type: 'paragraph', text: "The human brain is an incredibly complex organ, acting as the command center for the entire body. Neurological health is fundamental to our overall well-being, influencing everything from motor skills to emotional regulation. Understanding the nuances of common disorders is the first vital step toward effective management and prevention." },
        { type: 'heading', text: "The Concept of Neuroplasticity" },
        { type: 'paragraph', text: "One of the most remarkable discoveries in modern neurology is neuroplasticity—the brain's ability to reorganize itself by forming new neural connections throughout life. This means that with the right stimulation and care, the brain can recover from injuries and adapt to new challenges, even in older age." },
        { type: 'heading', text: "Strategies for Maintaining Brain Health" },
        { type: 'paragraph', text: "Maintaining a healthy brain requires a multi-faceted approach involving lifestyle, diet, and mental stimulation. Here are key strategies recommended by our specialists:" },
        { type: 'list', items: [
          "Stay Mentally Active: Engage in challenging puzzles, continuous reading, learning a new language, or picking up a musical instrument to build cognitive reserve.",
          "Prioritize Sleep Hygiene: Sleep is not just for rest; it is the brain's primary time for detoxification, where waste products like amyloid-beta are cleared out.",
          "Cardiovascular Control: What is good for the heart is good for the head. Controlling blood pressure and cholesterol is essential to prevent micro-vascular damage and stroke risk.",
          "Social Engagement: Regular social interaction has been linked to a lower risk of dementia and helps maintain emotional resilience.",
          "Brain-Boosting Nutrition: Diets rich in Omega-3 fatty acids, antioxidants, and anti-inflammatory foods support neural membrane health."
        ]},
        { type: 'note', text: "Regular physical exercise, particularly aerobic activity, has been shown to increase the size of the hippocampus, the part of the brain responsible for verbal memory and learning." },
        { type: 'heading', text: "Common Neurological Conditions" },
        { type: 'paragraph', text: "Neurology covers a wide spectrum of disorders. Some of the most common conditions treated at Patel Hospital include Epilepsy, which involves recurrent seizures; Parkinson's Disease, a progressive nervous system disorder affecting movement; and various forms of Dementia, including Alzheimer's Disease." },
        { type: 'paragraph', text: "Early diagnosis is key for these conditions. Modern neurology focuses not just on symptom management, but on slow-down strategies and improving the daily quality of life for patients and their families." },
        { type: 'heading', text: "Advanced Diagnostic Technology" },
        { type: 'paragraph', text: "At Patel Hospital, we utilize state-of-the-art diagnostic tools to pinpoint neurological issues with extreme precision. This includes High-Resolution MRI for structural imaging, CT Scans for acute issues like hemorrhages, and EEG (Electroencephalogram) to monitor electrical activity in the brain for epilepsy diagnosis." },
        { type: 'warning', text: "Recognize the 'FAST' signs of a Stroke: Face drooping, Arm weakness, Speech difficulty, and Time to call emergency services. Every second counts in saving brain tissue during a stroke." }
      ]
    },
    { 
      id: "9", 
      date: "March 10, 2024", 
      author: "Dr. Amit Khanna",
      title: "Role of Diet in Disease Prevention", 
      cat: "Nutrition", 
      img: "/blog-nutrition.png",
      content: [
        { type: 'paragraph', text: "The old adage 'you are what you eat' has never been truer. Modern nutritional science has proven that what we put at the end of our forks is one of the most powerful tools in preventing chronic lifestyle diseases like Type 2 diabetes, heart disease, and even certain cancers." },
        { type: 'heading', text: "The Power of Anti-Inflammatory Eating" },
        { type: 'paragraph', text: "Chronic inflammation is a root cause of many ailments. An anti-inflammatory diet focuses on eliminating processed triggers and replacing them with nutrient-dense whole foods that calm the body's systems." },
        { type: 'list', items: [
          "Phytochemical Diversity: Filling your plate with a rainbow of vegetables to ensure a broad spectrum of protective antioxidants.",
          "Fiber & Gut Health: High-fiber foods are the primary fuel for a healthy microbiome, which in turn regulates immunity and mood.",
          "Quality Fats: Replacing trans-fats with Omega-3s from walnuts, seeds, and oily fish to support cellular integrity.",
          "Mindful Sugar Intake: Reducing refined sugars to prevent insulin resistance and metabolic syndrome.",
          "Adequate Hydration: Ensuring water intake is sufficient for efficient cellular detoxification."
        ]},
        { type: 'note', text: "Start by filling half your plate with colorful vegetables at every meal. This simple visual guide ensures you're getting the micronutrients you need without complex counting." },
        { type: 'heading', text: "Navigating Nutritional Myths" },
        { type: 'paragraph', text: "In an age of 'fad diets,' it's easy to get confused. Our nutritionists focus on sustainable, evidence-based eating patterns rather than short-term fixes that can often do more harm than good to your metabolism." },
        { type: 'warning', text: "Be cautious of extreme restrictive diets. Sustainable health is built on balance and variety, not deprivation. Always consult a certified nutritionist before making drastic dietary changes." }
      ]
    },
    { 
      id: "10", 
      date: "March 05, 2024", 
      author: "Dr. Kavita Rao",
      title: "Common General Surgery Procedures", 
      cat: "Technology", 
      img: "/blog-surgery.png",
      content: [
        { type: 'paragraph', text: "General surgery is a broad surgical specialty that focuses on the abdominal contents, including the esophagus, stomach, small intestine, large intestine, liver, and pancreas. At Patel Hospital, we prioritize minimally invasive techniques to ensure the best patient experience." },
        { type: 'heading', text: "The Laparoscopic Advantage" },
        { type: 'paragraph', text: "Most traditional abdominal surgeries are now performed laparoscopically, also known as 'keyhole' surgery. This involves making small incisions through which a camera and specialized instruments are inserted. The benefits for the patient are immense, including less pain and much faster discharge." },
        { type: 'heading', text: "Pre-Operative Preparation" },
        { type: 'paragraph', text: "A successful surgery starts long before you enter the operating room. We provide comprehensive pre-op guides to help you prepare your body and mind, including fasting protocols and necessary medical screenings." },
        { type: 'list', items: [
          "Hernia Repairs: Both traditional and laparoscopic mesh repairs for inguinal and umbilical hernias.",
          "Gallbladder Removal: One of the most common laparoscopic procedures for managing gallstones.",
          "Appendectomies: Rapid response and minimally invasive removal of the appendix.",
          "Gastrointestinal Procedures: Surgical management of conditions like GERD and colon issues.",
          "Breast Surgery: Diagnostic and therapeutic procedures for both benign and malignant conditions."
        ]},
        { type: 'note', text: "Modern anesthesia techniques and post-operative pain management protocols have significantly reduced the discomfort once associated with general surgery." },
        { type: 'heading', text: "Your Path to Recovery" },
        { type: 'paragraph', text: "Post-operative care is a partnership between the surgical team and the patient. Following activity guidelines and wound care instructions precisely is essential for a smooth and complication-free healing process." },
        { type: 'warning', text: "If you experience high fever, increasing redness around the surgical site, or persistent vomiting after surgery, contact our emergency surgical line immediately." }
      ]
    }
  ];

  const article = articles.find(a => a.id === id) || articles[0];

  return (
    <div className="animate-fade-in pb-20">
      <div className="max-w-6xl mx-auto px-4 pt-12">
        <Link to="/blog" className="inline-flex items-center gap-2 text-blue-900 font-bold mb-8 hover:gap-3 transition-all">
          <ArrowLeft size={20} /> Back to Blog
        </Link>
        
        <div className="space-y-6 mb-12 text-center md:text-left">
          <div className="inline-block bg-blue-100 text-blue-900 px-4 py-1 rounded-full text-sm font-bold">{article.cat}</div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">{article.title}</h1>
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-6 text-gray-500">
            <span className="flex items-center gap-2"><Calendar size={20} /> {article.date}</span>
            <span className="flex items-center gap-2"><User size={20} /> By {article.author}</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mb-12">
        <img src={article.img} alt={article.title} className="w-full h-[500px] object-cover rounded-[2.5rem] shadow-2xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-[1fr_auto] gap-12">
          <div className="space-y-8">
            {article.content.map((section, idx) => {
              switch(section.type) {
                case 'paragraph':
                  return <p key={idx} className="text-gray-700 leading-relaxed text-lg">{section.text}</p>;
                case 'heading':
                  return <h2 key={idx} className="text-3xl font-bold text-gray-900 mt-12 mb-6">{section.text}</h2>;
                case 'list':
                  return (
                    <ul key={idx} className="space-y-4 my-8">
                      {section.items.map((item, iIdx) => (
                        <li key={iIdx} className="flex items-start gap-3 text-gray-700 text-lg">
                          <div className="w-2 h-2 rounded-full bg-blue-900 mt-2.5 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  );
                case 'note':
                  return (
                    <div key={idx} className="bg-blue-50 border-l-4 border-blue-900 p-8 rounded-r-3xl my-10">
                      <h4 className="font-bold text-blue-900 mb-2 flex items-center gap-2">
                        <MessageCircle size={20} /> Important Note
                      </h4>
                      <p className="text-blue-900 text-lg italic">{section.text}</p>
                    </div>
                  );
                case 'warning':
                  return (
                    <div key={idx} className="bg-orange-50 border-l-4 border-orange-500 p-8 rounded-r-3xl my-10">
                      <h4 className="font-bold text-orange-700 mb-2 flex items-center gap-2">
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
                        Medical Warning
                      </h4>
                      <p className="text-orange-900 text-lg font-medium">{section.text}</p>
                    </div>
                  );
                default:
                  return null;
              }
            })}
          </div>
          
          <div className="hidden lg:block w-80 space-y-8">
            <div className="bg-gray-50 p-8 rounded-3xl sticky top-24">
              <h4 className="font-bold text-gray-900 mb-6">Share this article</h4>
              <div className="flex flex-col gap-3">
                <button className="flex items-center gap-3 bg-white p-4 rounded-2xl border border-gray-100 hover:border-blue-900 transition-all font-bold text-gray-700">
                  <Share2 size={20} className="text-blue-900" /> Facebook
                </button>
                <button className="flex items-center gap-3 bg-white p-4 rounded-2xl border border-gray-100 hover:border-blue-900 transition-all font-bold text-gray-700">
                  <MessageCircle size={20} className="text-blue-900" /> WhatsApp
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetail;
