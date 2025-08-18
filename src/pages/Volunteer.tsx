import { useState } from 'react';
import HeroBackground from '../components/HeroBackground';
import ContactForm from '../components/ContactForm';
import { MapPin, Clock, Mail, Users, Heart, Star } from 'lucide-react';
import { getStatsByLabels } from '../data/stats';

const Volunteer = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showContactForm, setShowContactForm] = useState(false);

  const categories = [
    { id: 'all', name: 'All Opportunities' },
    { id: 'local', name: 'Local Volunteering' },
    { id: 'remote', name: 'Remote Volunteering' },
    { id: 'events', name: 'Event Support' },
    { id: 'skills', name: 'Skills-Based' }
  ];

  const opportunities = [
    {
      id: 1,
      title: "Event Coordinator",
      category: "events",
      location: "Dublin, Ireland",
      commitment: "10-15 hours/month",
      duration: "Ongoing",
      description: "Help organize and coordinate fundraising events, awareness campaigns, and community outreach programs.",
      requirements: [
        "Strong organizational skills",
        "Experience with event planning",
        "Excellent communication skills",
        "Available for evening and weekend events"
      ],
      benefits: [
        "Gain event management experience",
        "Network with like-minded individuals",
        "Make a direct impact on children's lives",
        "Flexible scheduling"
      ]
    },
    {
      id: 2,
      title: "Social Media Volunteer",
      category: "remote",
      location: "Remote",
      commitment: "5-10 hours/week",
      duration: "3-6 months",
      description: "Help us spread awareness and share our mission through social media platforms.",
      requirements: [
        "Experience with social media platforms",
        "Creative writing skills",
        "Basic graphic design knowledge",
        "Reliable internet connection"
      ],
      benefits: [
        "Build your social media portfolio",
        "Work from anywhere",
        "Learn nonprofit marketing",
        "Flexible hours"
      ]
    },
    {
      id: 3,
      title: "Fundraising Assistant",
      category: "local",
      location: "Cork, Ireland",
      commitment: "8-12 hours/week",
      duration: "Ongoing",
      description: "Support our fundraising efforts through donor outreach, grant research, and campaign coordination.",
      requirements: [
        "Strong interpersonal skills",
        "Basic research abilities",
        "Comfortable with phone calls",
        "Attention to detail"
      ],
      benefits: [
        "Learn fundraising strategies",
        "Develop donor relations skills",
        "Contribute to financial sustainability",
        "Professional development opportunities"
      ]
    },
    {
      id: 4,
      title: "Translator/Interpreter",
      category: "skills",
      location: "Remote",
      commitment: "As needed",
      duration: "Project-based",
      description: "Help us communicate with international partners and beneficiaries in their native languages.",
      requirements: [
        "Fluent in English and at least one other language",
        "Experience with translation",
        "Cultural sensitivity",
        "Reliable availability"
      ],
      benefits: [
        "Use your language skills for good",
        "Work on meaningful projects",
        "Flexible scheduling",
        "International exposure"
      ]
    },
    {
      id: 5,
      title: "Administrative Support",
      category: "local",
      location: "Galway, Ireland",
      commitment: "10-15 hours/week",
      duration: "3-12 months",
      description: "Provide essential administrative support to help our programs run smoothly.",
      requirements: [
        "Proficient in Microsoft Office",
        "Strong organizational skills",
        "Attention to detail",
        "Professional communication"
      ],
      benefits: [
        "Gain nonprofit experience",
        "Develop administrative skills",
        "Regular schedule",
        "Professional references"
      ]
    },
    {
      id: 6,
      title: "Youth Mentor",
      category: "local",
      location: "Limerick, Ireland",
      commitment: "4-6 hours/week",
      duration: "6-12 months",
      description: "Mentor young people in our programs, providing guidance, support, and positive role modeling.",
      requirements: [
        "Experience working with youth",
        "Patience and empathy",
        "Background check required",
        "Commitment to regular meetings"
      ],
      benefits: [
        "Make a lasting impact on young lives",
        "Develop mentoring skills",
        "Personal fulfillment",
        "Training provided"
      ]
    }
  ];

  const filteredOpportunities = selectedCategory === 'all' 
    ? opportunities 
    : opportunities.filter(opp => opp.category === selectedCategory);

  const volunteerStats = getStatsByLabels([
    'Dedicated Volunteers',
    'Hours Contributed',
    'Countries Reached',
    'Satisfaction Rate'
  ]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <HeroBackground>
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-normal text-gray-900 mb-6">
            Volunteer With Us
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Join our team of dedicated volunteers and help us make a difference in children's lives around the world.
          </p>
        </div>
      </HeroBackground>

      {/* Volunteer Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Volunteer Impact</h2>
            <p className="text-xl text-gray-600">See the incredible difference our volunteers make every day.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {volunteerStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Volunteer */}
      <section className="py-16 bg-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Volunteer With Us?</h2>
            <p className="text-xl text-gray-600">Discover the benefits of joining our volunteer community.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 text-center shadow-lg">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Make a Real Impact</h3>
              <p className="text-gray-600">
                Your time and skills directly contribute to improving children's lives and creating lasting positive change.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 text-center shadow-lg">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Join a Community</h3>
              <p className="text-gray-600">
                Connect with like-minded individuals who share your passion for helping children and making the world better.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 text-center shadow-lg">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Develop Skills</h3>
              <p className="text-gray-600">
                Gain valuable experience, develop new skills, and enhance your professional portfolio while doing good.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 text-center shadow-lg">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Flexible Commitment</h3>
              <p className="text-gray-600">
                Choose opportunities that fit your schedule, from one-time events to ongoing commitments.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 text-center shadow-lg">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Local & Remote Options</h3>
              <p className="text-gray-600">
                Volunteer in your local community or contribute remotely from anywhere in the world.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 text-center shadow-lg">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Regular Updates</h3>
              <p className="text-gray-600">
                Stay informed about the impact of your contributions with regular updates and success stories.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Opportunities */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Current Opportunities</h2>
            <p className="text-xl text-gray-600">Find the perfect volunteer role that matches your skills and interests.</p>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-colors duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-purple-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-purple-50 border border-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Opportunities Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredOpportunities.map(opportunity => (
              <div key={opportunity.id} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">{opportunity.title}</h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    opportunity.category === 'local' ? 'bg-blue-100 text-blue-800' :
                    opportunity.category === 'remote' ? 'bg-green-100 text-green-800' :
                    opportunity.category === 'events' ? 'bg-purple-100 text-purple-800' :
                    'bg-orange-100 text-orange-800'
                  }`}>
                    {categories.find(c => c.id === opportunity.category)?.name}
                  </span>
                </div>

                <p className="text-gray-600 mb-6">{opportunity.description}</p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPin className="h-4 w-4 mr-2" />
                    {opportunity.location}
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="h-4 w-4 mr-2" />
                    {opportunity.commitment}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Requirements:</h4>
                  <ul className="space-y-2">
                    {opportunity.requirements.map((req, index) => (
                      <li key={index} className="flex items-start">
                        <div className="flex-shrink-0 w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3"></div>
                        <span className="text-gray-700 text-sm">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Benefits:</h4>
                  <ul className="space-y-2">
                    {opportunity.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <div className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></div>
                        <span className="text-gray-700 text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="w-full px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors duration-200">
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Get Started */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How to Get Started</h2>
            <p className="text-xl text-gray-600">Follow these simple steps to begin your volunteer journey with us.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Browse Opportunities</h3>
              <p className="text-gray-600">
                Explore our current volunteer opportunities and find one that matches your interests and availability.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Submit Application</h3>
              <p className="text-gray-600">
                Complete our volunteer application form with your details, skills, and preferred opportunities.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Interview & Training</h3>
              <p className="text-gray-600">
                Meet with our volunteer coordinator and complete any necessary training for your role.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">4</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Start Volunteering</h3>
              <p className="text-gray-600">
                Begin making a difference! We'll provide ongoing support and regular check-ins.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Have questions about volunteering? Our team is here to help you find the perfect opportunity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => setShowContactForm(true)}
              className="px-8 py-3 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              Contact Us
            </button>
            <button className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-purple-600 transition-colors duration-200">
              View All Opportunities
            </button>
          </div>
        </div>
      </section>

      {/* Contact Form Modal */}
      {showContactForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900">Contact Us</h2>
              <button
                onClick={() => setShowContactForm(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
              >
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-6">
              <ContactForm />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Volunteer; 