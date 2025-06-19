import React, { useState, useEffect } from 'react';
import { 
  Leaf, 
  Users, 
  Wrench, 
  Recycle, 
  Sparkles, 
  TreePine,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const Services = () => {
  const [serviceImages, setServiceImages] = useState<{[key: string]: string}>({
    services1: `${import.meta.env.BASE_URL}bpit.jpeg`,
    services2: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
    services3: 'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=800',
    services4: `${import.meta.env.BASE_URL}com-sens.jpeg`,
    services5: `${import.meta.env.BASE_URL}env2.jpeg`,
    services6: 'https://images.pexels.com/photos/1072179/pexels-photo-1072179.jpeg?auto=compress&cs=tinysrgb&w=800'
  });

  useEffect(() => {
    // Load saved images from localStorage
    const savedImages = localStorage.getItem('johnbabs_images');
    if (savedImages) {
      const images = JSON.parse(savedImages);
      setServiceImages(prev => ({
        ...prev,
        ...images
      }));
    }
    
    // Listen for admin panel saves
    const handleAdminSave = () => {
      const savedImages = localStorage.getItem('johnbabs_images');
      if (savedImages) {
        const images = JSON.parse(savedImages);
        setServiceImages(prev => ({
          ...prev,
          ...images
        }));
      }
    };
    
    window.addEventListener('adminPanelSaved', handleAdminSave);
    return () => window.removeEventListener('adminPanelSaved', handleAdminSave);
  }, []);

  const services = [
    {
      icon: Leaf,
      title: 'Environmental Consultancy',
      description: 'Comprehensive environmental assessment and consulting services to ensure regulatory compliance and sustainable practices.',
      features: [
        'Environmental Impact Assessment (EIA)',
        'Environmental Auditing',
        'Regulatory Compliance Support',
        'Environmental Management Systems',
        'Air Quality Monitoring',
        'Water Quality Assessment'
      ],
      imageKey: 'services1'
    },
    {
      icon: Users,
      title: 'Social Impact Assessment',
      description: 'Thorough evaluation of social impacts and community engagement strategies for sustainable development projects.',
      features: [
        'Community Consultation',
        'Stakeholder Engagement',
        'Social Impact Analysis',
        'Resettlement Planning',
        'Cultural Heritage Assessment',
        'Livelihood Restoration Programs'
      ],
      imageKey: 'services4'
    },
    {
      icon: Wrench,
      title: 'Engineering Design & Project Supervision',
      description: 'Professional engineering design services and comprehensive project supervision for infrastructure development.',
      features: [
        'Civil Engineering Design',
        'Structural Engineering',
        'Project Management',
        'Construction Supervision',
        'Quality Assurance',
        'Technical Documentation'
      ],
      imageKey: 'services2'
    },
    {
      icon: Recycle,
      title: 'Waste Management Solutions',
      description: 'Integrated waste management solutions including collection, treatment, recycling, and disposal services.',
      features: [
        'Waste Characterization',
        'Collection Systems Design',
        'Recycling Programs',
        'Treatment Plant Design',
        'Hazardous Waste Management',
        'Waste Minimization Strategies'
      ],
      imageKey: 'services3'
    },
    {
      icon: Sparkles,
      title: 'Cleaning & Pest Control Services',
      description: 'Professional cleaning and integrated pest management services for commercial and industrial facilities.',
      features: [
        'Industrial Cleaning',
        'Office Cleaning Services',
        'Integrated Pest Management',
        'Fumigation Services',
        'Sanitation Programs',
        'Maintenance Contracts'
      ],
      imageKey: 'services6'
    },
    {
      icon: TreePine,
      title: 'Environmental Restoration',
      description: 'Ecological restoration and remediation services to restore damaged ecosystems and contaminated sites.',
      features: [
        'Site Remediation',
        'Ecological Restoration',
        'Revegetation Programs',
        'Soil Contamination Treatment',
        'Wetland Restoration',
        'Biodiversity Conservation'
      ],
      imageKey: 'services5'
    }
  ];

  return (
    <div className="pt-16">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-emerald-50 to-teal-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-emerald-600">Services</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Comprehensive environmental and engineering solutions tailored to meet your specific needs 
              and ensure sustainable development.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div
                  key={index}
                  className={`lg:grid lg:grid-cols-2 lg:gap-12 items-center ${
                    !isEven ? 'lg:grid-cols-2' : ''
                  }`}
                >
                  <div className={`${!isEven ? 'lg:order-2' : ''}`}>
                    <div className="flex items-center mb-6">
                      <div className="flex items-center justify-center w-12 h-12 bg-emerald-100 rounded-lg mr-4">
                        <Icon className="h-6 w-6 text-emerald-600" />
                      </div>
                      <h2 className="text-3xl font-bold text-gray-900">{service.title}</h2>
                    </div>
                    <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-emerald-600 mr-3 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-emerald-600 hover:bg-emerald-700 transition-colors duration-200">
                      Learn More
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </button>
                  </div>
                  <div className={`mt-10 lg:mt-0 ${!isEven ? 'lg:order-1' : ''}`}>
                    <img
                      className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-lg shadow-xl"
                      src={serviceImages[service.imageKey]}
                      alt={service.title}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Services?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We combine technical expertise, regulatory knowledge, and practical experience 
              to deliver solutions that work.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Expert Team',
                description: 'Our professionals have extensive experience in environmental and engineering fields.'
              },
              {
                title: 'Regulatory Compliance',
                description: 'We ensure all projects meet Nigerian and international regulatory standards.'
              },
              {
                title: 'Sustainable Solutions',
                description: 'Focus on environmentally sustainable and economically viable solutions.'
              },
              {
                title: 'Quality Assurance',
                description: 'Rigorous quality control processes ensure exceptional service delivery.'
              },
              {
                title: 'Timely Delivery',
                description: 'We pride ourselves on meeting deadlines and delivering on time.'
              },
              {
                title: 'Cost-Effective',
                description: 'Competitive pricing without compromising on quality or service excellence.'
              }
            ].map((benefit, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
            Contact us today to discuss your environmental and engineering needs. 
            Our expert team is ready to provide customized solutions for your project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center px-8 py-3 border-2 border-white text-base font-medium rounded-full text-white bg-transparent hover:bg-white hover:text-emerald-600 transition-all duration-200 shadow-lg hover:shadow-xl">
              Request a Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-emerald-600 bg-white hover:bg-emerald-50 transition-all duration-200 shadow-lg hover:shadow-xl">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;