import React, { useState } from 'react';
import { Calendar, MapPin, Users, CheckCircle, ExternalLink, Filter } from 'lucide-react';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const categories = ['All', 'Environmental Assessment', 'Engineering Design', 'Waste Management', 'Restoration'];
  
  const projects = [
    {
      title: 'Lagos Industrial Complex EIA',
      category: 'Environmental Assessment',
      client: 'Lagos State Government',
      location: 'Lagos, Nigeria',
      duration: '18 months',
      status: 'Completed',
      completion: '2023',
      description: 'Comprehensive Environmental Impact Assessment for a major industrial complex development project.',
      objectives: [
        'Assess environmental impacts of proposed industrial development',
        'Develop mitigation measures for identified impacts',
        'Ensure compliance with Nigerian environmental regulations',
        'Engage with local communities and stakeholders'
      ],
      outcomes: [
        'Successfully obtained environmental approval',
        'Reduced environmental impact by 40%',
        'Implemented community benefit programs',
        'Established ongoing monitoring system'
      ],
      image: 'https://images.pexels.com/photos/3617457/pexels-photo-3617457.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: true
    },
    {
      title: 'Abuja Water Treatment Plant Design',
      category: 'Engineering Design',
      client: 'Federal Capital Territory Administration',
      location: 'Abuja, Nigeria',
      duration: '24 months',
      status: 'Completed',
      completion: '2023',
      description: 'Design and supervision of a 50,000 m³/day water treatment plant serving the FCT.',
      objectives: [
        'Design modern water treatment facility',
        'Ensure reliable water supply for 200,000 residents',
        'Implement advanced treatment technologies',
        'Provide comprehensive project supervision'
      ],
      outcomes: [
        'Plant operational at 100% capacity',
        'Improved water quality for residents',
        'Reduced water treatment costs by 30%',
        'Created 150 local jobs during construction'
      ],
      image: 'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: true
    },
    {
      title: 'Port Harcourt Waste Management System',
      category: 'Waste Management',
      client: 'Rivers State Government',
      location: 'Port Harcourt, Nigeria',
      duration: '12 months',
      status: 'Ongoing',
      completion: '2024',
      description: 'Integrated waste management system for Port Harcourt metropolitan area.',
      objectives: [
        'Develop comprehensive waste collection system',
        'Establish recycling and treatment facilities',
        'Implement waste reduction programs',
        'Train local waste management personnel'
      ],
      outcomes: [
        '60% improvement in waste collection efficiency',
        'Established 5 recycling centers',
        'Reduced landfill waste by 45%',
        'Trained 200+ waste management staff'
      ],
      image: 'https://images.pexels.com/photos/3735218/pexels-photo-3735218.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: false
    },
    {
      title: 'Niger Delta Wetland Restoration',
      category: 'Restoration',
      client: 'Niger Delta Development Commission',
      location: 'Niger Delta, Nigeria',
      duration: '36 months',
      status: 'Ongoing',
      completion: '2025',
      description: 'Large-scale ecological restoration of degraded wetland areas in the Niger Delta.',
      objectives: [
        'Restore 5,000 hectares of degraded wetlands',
        'Rehabilitate fish spawning grounds',
        'Implement community-based conservation programs',
        'Establish long-term monitoring systems'
      ],
      outcomes: [
        '2,000 hectares successfully restored',
        '40% increase in fish population',
        'Engaged 50 local communities',
        'Established 10 community conservation groups'
      ],
      image: 'https://images.pexels.com/photos/1072179/pexels-photo-1072179.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: true
    },
    {
      title: 'Kano Industrial Estate EIA',
      category: 'Environmental Assessment',
      client: 'Kano State Industrial Development Agency',
      location: 'Kano, Nigeria',
      duration: '15 months',
      status: 'Completed',
      completion: '2022',
      description: 'Environmental assessment for new industrial estate development in Kano.',
      objectives: [
        'Assess environmental impacts of industrial estate',
        'Develop environmental management plan',
        'Ensure regulatory compliance',
        'Facilitate stakeholder engagement'
      ],
      outcomes: [
        'Environmental approval obtained',
        'Comprehensive EMP implemented',
        'Zero environmental violations',
        'Strong community support achieved'
      ],
      image: 'https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: false
    },
    {
      title: 'Ogun State Bridge Construction',
      category: 'Engineering Design',
      client: 'Ogun State Government',
      location: 'Ogun State, Nigeria',
      duration: '20 months',
      status: 'Completed',
      completion: '2023',
      description: 'Design and supervision of a 2km bridge connecting rural communities.',
      objectives: [
        'Design resilient bridge structure',
        'Ensure all-weather accessibility',
        'Minimize environmental impact',
        'Provide technical supervision'
      ],
      outcomes: [
        'Bridge completed ahead of schedule',
        'Improved access for 50,000 residents',
        'Enhanced economic activities in the region',
        'Zero construction-related accidents'
      ],
      image: 'https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: false
    }
  ];

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <div className="pt-16">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-emerald-50 to-teal-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-emerald-600">Projects</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Explore our portfolio of successful environmental and engineering projects across Nigeria. 
              Each project demonstrates our commitment to excellence, sustainability, and positive impact.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Highlighting some of our most impactful and innovative projects.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {featuredProjects.slice(0, 2).map((project, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300"
              >
                <img
                  className="w-full h-48 object-cover rounded-lg mb-6"
                  src={project.image}
                  alt={project.title}
                />
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    project.status === 'Completed' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                  }`}>
                    {project.status}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-sm text-gray-600">
                    <Users className="h-4 w-4 mr-2" />
                    <span>Client: {project.client}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>{project.location}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{project.duration} • Completed {project.completion}</span>
                  </div>
                </div>
                <button className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium transition-colors duration-200">
                  View Project Details
                  <ExternalLink className="h-4 w-4 ml-2" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Filter */}
      <section className="py-8 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Filter className="h-5 w-5 text-gray-600 mr-3" />
              <span className="text-gray-600 font-medium">Filter by category:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                    selectedCategory === category
                      ? 'bg-emerald-600 text-white'
                      : 'bg-white text-gray-600 hover:bg-emerald-50 hover:text-emerald-600'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* All Projects */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <img
                  className="w-full h-40 object-cover rounded-lg mb-4"
                  src={project.image}
                  alt={project.title}
                />
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    project.status === 'Completed' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                  }`}>
                    {project.status}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{project.description}</p>
                <div className="space-y-1 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <Users className="h-4 w-4 mr-2" />
                    <span>{project.client}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>{project.location}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{project.duration}</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <button className="text-emerald-600 hover:text-emerald-700 font-medium text-sm transition-colors duration-200">
                    View Details
                  </button>
                  <span className="text-sm text-gray-500">
                    {project.status === 'Completed' ? `Completed ${project.completion}` : `Expected ${project.completion}`}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Statistics */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Project Impact
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our projects have made significant positive impacts across Nigeria.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: '200+', label: 'Projects Completed', description: 'Successfully delivered across Nigeria' },
              { number: '2M+', label: 'People Impacted', description: 'Lives improved through our projects' },
              { number: '50,000', label: 'Hectares Restored', description: 'Environmental restoration work' },
              { number: '100%', label: 'Success Rate', description: 'Projects completed on time and budget' }
            ].map((stat, index) => (
              <div key={index} className="text-center bg-white p-6 rounded-xl shadow-lg">
                <div className="text-3xl font-bold text-emerald-600 mb-2">{stat.number}</div>
                <div className="text-lg font-semibold text-gray-900 mb-2">{stat.label}</div>
                <div className="text-sm text-gray-600">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Start Your Next Project?
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
            Let us help you achieve your environmental and engineering goals with our proven track record of success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center px-8 py-3 border-2 border-white text-base font-medium rounded-full text-white bg-transparent hover:bg-white hover:text-emerald-600 transition-all duration-200 shadow-lg hover:shadow-xl">
              Start a Project
            </button>
            <button className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-emerald-600 bg-white hover:bg-emerald-50 transition-all duration-200 shadow-lg hover:shadow-xl">
              Request Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;