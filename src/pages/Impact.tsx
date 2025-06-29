import React from 'react';
import HeroBackground from '../components/HeroBackground';
import { Heart, Users, BookOpen, Globe, Shield, Star, TrendingUp, Award } from 'lucide-react';

const Impact = () => {
  const impactStats = [
    { number: "50,000+", label: "Children Helped", description: "Direct beneficiaries of our programs worldwide" },
    { number: "25", label: "Countries Reached", description: "Active programs across multiple continents" },
    { number: "100+", label: "Community Projects", description: "Sustainable development initiatives completed" },
    { number: "95%", label: "Success Rate", description: "Programs achieving their intended outcomes" },
    { number: "€2.5M", label: "Funds Raised", description: "Total funds raised and distributed to programs" },
    { number: "500+", label: "Active Volunteers", description: "Dedicated volunteers supporting our mission" }
  ];

  const successStories = [
    {
      id: 1,
      name: "Sarah's Story",
      age: 12,
      country: "Kenya",
      image: "/public/children-4-world-children.png",
      story: "Sarah was unable to attend school due to her family's financial situation. Through our education program, she received a scholarship and school supplies. Today, she's in her third year of school and dreams of becoming a teacher.",
      impact: "Education access, improved literacy, future career aspirations"
    },
    {
      id: 2,
      name: "Miguel's Journey",
      age: 8,
      country: "Guatemala",
      image: "/public/children-4-world-children.png",
      story: "Miguel suffered from malnutrition and had limited access to healthcare. Our health program provided him with nutritious meals and medical care. He's now healthy, active, and excelling in school.",
      impact: "Improved health, better nutrition, enhanced learning capacity"
    },
    {
      id: 3,
      name: "Aisha's Transformation",
      age: 15,
      country: "Bangladesh",
      image: "/public/children-4-world-children.png",
      story: "Aisha was at risk of early marriage and dropping out of school. Our youth empowerment program helped her develop leadership skills and provided mentorship. She now leads a girls' education advocacy group.",
      impact: "Prevented early marriage, leadership development, community advocacy"
    }
  ];

  const programImpact = [
    {
      program: "Education Initiatives",
      icon: BookOpen,
      stats: [
        { metric: "15,000+", label: "Children Enrolled" },
        { metric: "45", label: "Schools Built/Renovated" },
        { metric: "200+", label: "Teachers Trained" },
        { metric: "85%", label: "Graduation Rate" }
      ],
      description: "Providing quality education to children in underserved communities"
    },
    {
      program: "Healthcare Programs",
      icon: Heart,
      stats: [
        { metric: "20,000+", label: "Children Served" },
        { metric: "12", label: "Health Clinics Established" },
        { metric: "50+", label: "Medical Staff Trained" },
        { metric: "90%", label: "Health Improvement Rate" }
      ],
      description: "Ensuring children have access to essential healthcare services"
    },
    {
      program: "Community Development",
      icon: Users,
      stats: [
        { metric: "100+", label: "Communities Supported" },
        { metric: "1,000+", label: "Families Empowered" },
        { metric: "25", label: "Sustainable Projects" },
        { metric: "80%", label: "Self-Sufficiency Rate" }
      ],
      description: "Building stronger, more resilient communities"
    }
  ];

  const achievements = [
    {
      year: "2024",
      title: "Excellence in Child Welfare Award",
      organization: "International Children's Rights Foundation",
      description: "Recognized for outstanding contributions to child protection and welfare programs."
    },
    {
      year: "2023",
      title: "Best Nonprofit Organization",
      organization: "Global Charity Awards",
      description: "Awarded for innovative approaches to community development and youth empowerment."
    },
    {
      year: "2023",
      title: "Transparency Excellence",
      organization: "Charity Navigator",
      description: "Achieved 4-star rating for financial transparency and accountability."
    },
    {
      year: "2022",
      title: "Impact Innovation Award",
      organization: "Social Impact Forum",
      description: "Recognized for developing sustainable solutions to child poverty."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <HeroBackground>
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-normal text-gray-900 mb-6">
            Our Impact
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            See how your support is making a real difference in children's lives around the world. Every donation, every volunteer hour, every action creates lasting positive change.
          </p>
        </div>
      </HeroBackground>

      {/* Impact Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">By the Numbers</h2>
            <p className="text-xl text-gray-600">Our measurable impact across all programs and initiatives.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {impactStats.map((stat, index) => (
              <div key={index} className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300">
                <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold text-gray-900 mb-2">
                  {stat.label}
                </div>
                <p className="text-gray-600 text-sm">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600">Real stories from children whose lives have been transformed through our programs.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {successStories.map(story => (
              <div key={story.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="h-48 bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center">
                  <Heart className="h-16 w-16 text-white" />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900">{story.name}</h3>
                    <span className="text-sm text-gray-500">{story.age} years old</span>
                  </div>
                  
                  <div className="flex items-center mb-4">
                    <Globe className="h-4 w-4 text-gray-500 mr-2" />
                    <span className="text-sm text-gray-600">{story.country}</span>
                  </div>
                  
                  <p className="text-gray-600 mb-4 line-clamp-4">
                    {story.story}
                  </p>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Impact:</h4>
                    <p className="text-sm text-gray-600">{story.impact}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Impact */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Program Impact</h2>
            <p className="text-xl text-gray-600">Detailed breakdown of our key programs and their measurable outcomes.</p>
          </div>

          <div className="space-y-12">
            {programImpact.map((program, index) => (
              <div key={index} className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-2xl p-8">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-purple-600 rounded-lg">
                    <program.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 ml-4">
                    {program.program}
                  </h3>
                </div>
                
                <p className="text-gray-600 mb-8 text-lg">
                  {program.description}
                </p>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {program.stats.map((stat, statIndex) => (
                    <div key={statIndex} className="text-center">
                      <div className="text-2xl font-bold text-purple-600 mb-1">
                        {stat.metric}
                      </div>
                      <div className="text-gray-700 font-medium">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements & Awards */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Recognition & Awards</h2>
            <p className="text-xl text-gray-600">Our commitment to excellence has been recognized by leading organizations worldwide.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <Award className="h-6 w-6 text-purple-600 mr-3" />
                    <span className="text-sm font-semibold text-purple-600 bg-purple-100 px-3 py-1 rounded-full">
                      {achievement.year}
                    </span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {achievement.title}
                </h3>
                
                <p className="text-purple-600 font-semibold mb-3">
                  {achievement.organization}
                </p>
                
                <p className="text-gray-600">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Timeline */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600">Key milestones in our mission to help children worldwide.</p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-purple-200 h-full"></div>
            
            <div className="space-y-12">
              <div className="flex items-center">
                <div className="w-1/2 pr-8 text-right">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">2024</h3>
                  <p className="text-gray-600">Reached 50,000 children milestone and expanded to 25 countries</p>
                </div>
                <div className="w-4 h-4 bg-purple-600 rounded-full border-4 border-white shadow-lg"></div>
                <div className="w-1/2 pl-8"></div>
              </div>
              
              <div className="flex items-center">
                <div className="w-1/2 pr-8"></div>
                <div className="w-4 h-4 bg-purple-600 rounded-full border-4 border-white shadow-lg"></div>
                <div className="w-1/2 pl-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">2023</h3>
                  <p className="text-gray-600">Launched innovative youth empowerment programs and achieved 95% success rate</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-1/2 pr-8 text-right">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">2022</h3>
                  <p className="text-gray-600">Established 100+ community projects and trained 500+ volunteers</p>
                </div>
                <div className="w-4 h-4 bg-purple-600 rounded-full border-4 border-white shadow-lg"></div>
                <div className="w-1/2 pl-8"></div>
              </div>
              
              <div className="flex items-center">
                <div className="w-1/2 pr-8"></div>
                <div className="w-4 h-4 bg-purple-600 rounded-full border-4 border-white shadow-lg"></div>
                <div className="w-1/2 pl-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">2021</h3>
                  <p className="text-gray-600">Founded Children 4 World Children with a mission to help vulnerable children</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Be Part of Our Impact
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Join us in creating more success stories. Your support helps us continue our vital work and reach more children in need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200">
              Donate Now
            </button>
            <button className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-purple-600 transition-colors duration-200">
              Volunteer With Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Impact; 