import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Users, Award, Target, CheckCircle } from 'lucide-react';

const Home = () => {
  const [heroImage, setHeroImage] = useState('/env1.jpeg');

  useEffect(() => {
    // Load saved images from localStorage
    const savedImages = localStorage.getItem('johnbabs_images');
    if (savedImages) {
      const images = JSON.parse(savedImages);
      if (images.hero) {
        setHeroImage(images.hero);
      }
    }
    
    // Listen for admin panel saves
    const handleAdminSave = () => {
      const savedImages = localStorage.getItem('johnbabs_images');
      if (savedImages) {
        const images = JSON.parse(savedImages);
        if (images.hero) {
          setHeroImage(images.hero);
        }
      }
    };
    
    window.addEventListener('adminPanelSaved', handleAdminSave);
    return () => window.removeEventListener('adminPanelSaved', handleAdminSave);
  }, []);

  const stats = [
    { number: '16+', label: 'Years Experience' },
    { number: '220+', label: 'Projects Completed' },
    { number: '15+', label: 'Ongoing Projects' },
    { number: '100%', label: 'Compliance Rate' },
  ];

  const features = [
    {
      icon: Shield,
      title: 'Nigerian Certified',
      description: 'Fully certified and compliant with all Nigerian regulatory standards including NESREA, DPR, and international best practices.',
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Professional team of environmental consultants, engineers, and specialists with extensive experience across Nigeria and West Africa.',
    },
    {
      icon: Award,
      title: 'Quality Assurance',
      description: 'Committed to delivering high-quality services that exceed client expectations and meet international environmental standards.',
    },
    {
      icon: Target,
      title: 'Sustainable Solutions',
      description: 'Focus on environmentally sustainable and economically viable solutions for long-term success in the Nigerian market.',
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-50 via-white to-teal-50 pt-16 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
            <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
              <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl lg:text-6xl">
                <span className="block">Environmental</span>
                <span className="block text-emerald-600">Excellence</span>
                <span className="block text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-700 mt-2">
                  Engineering Solutions
                </span>
              </h1>
              <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                Leading provider of comprehensive environmental consultancy and engineering services in Nigeria. 
                We deliver sustainable solutions that protect the environment while driving business success.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:justify-center lg:justify-start">
                <Link
                  to="/about"
                  className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-emerald-600 hover:bg-emerald-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Learn More About Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-3 border-2 border-emerald-600 text-base font-medium rounded-full text-emerald-600 bg-white hover:bg-emerald-50 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  Get Started
                </Link>
              </div>
            </div>
            <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
              <div className="relative mx-auto w-full rounded-lg shadow-2xl lg:max-w-md">
                <div className="relative block w-full bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg overflow-hidden">
                  <img
                    className="w-full h-80 sm:h-96 lg:h-[500px] object-cover"
                    src={heroImage}
                    alt="Environmental consulting work"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/20 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-emerald-600">{stat.number}</div>
                <div className="text-sm lg:text-base text-gray-600 mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Johnbabs?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We combine technical expertise, regulatory compliance, and sustainable practices 
              to deliver exceptional environmental and engineering solutions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="flex items-center justify-center w-12 h-12 bg-emerald-100 rounded-lg mb-4">
                    <Icon className="h-6 w-6 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Core Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive environmental and engineering solutions tailored to meet your specific needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              'Environmental Consultancy',
              'Social Impact Assessment',
              'Engineering Design & Supervision',
              'Waste Management Solutions',
              'Environmental Restoration',
              'Cleaning & Pest Control'
            ].map((service, index) => (
              <div
                key={index}
                className="flex items-center p-6 bg-gray-50 rounded-lg hover:bg-emerald-50 transition-colors duration-200"
              >
                <CheckCircle className="h-6 w-6 text-emerald-600 mr-4 flex-shrink-0" />
                <span className="text-gray-900 font-medium">{service}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-emerald-600 hover:bg-emerald-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              View All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
            Let us help you achieve your environmental and engineering goals with our expert team and proven solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3 border-2 border-white text-base font-medium rounded-full text-white bg-transparent hover:bg-white hover:text-emerald-600 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Contact Us Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/projects"
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-emerald-600 bg-white hover:bg-emerald-50 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              View Our Projects
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;