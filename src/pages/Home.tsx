import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Users, Award, Target, CheckCircle } from 'lucide-react';
import HeroBackground from '../components/HeroBackground';
import OptimizedImage from '../components/OptimizedImage';
import { trackComponentRender, trackImageLoad } from '../utils/performance';

const Home = () => {
  const [heroImage, setHeroImage] = useState(`${import.meta.env.BASE_URL}env1.jpeg`);
  const componentStartTime = performance.now();

  useEffect(() => {
    // Track component render time
    trackComponentRender('Home', componentStartTime);
    
    // Load saved images from localStorage
    const savedImages = localStorage.getItem('charity_images');
    if (savedImages) {
      const images = JSON.parse(savedImages);
      if (images.hero) {
        setHeroImage(images.hero);
      }
    }
    
    // Listen for admin panel saves
    const handleAdminSave = () => {
      const savedImages = localStorage.getItem('charity_images');
      if (savedImages) {
        const images = JSON.parse(savedImages);
        if (images.hero) {
          setHeroImage(images.hero);
        }
      }
    };
    
    window.addEventListener('adminPanelSaved', handleAdminSave);
    return () => window.removeEventListener('adminPanelSaved', handleAdminSave);
  }, [componentStartTime]);

  const stats = [
    { number: '50,000+', label: 'Children Helped' },
    { number: '25', label: 'Countries Reached' },
    { number: '500+', label: 'Volunteers' },
    { number: '€2.5M+', label: 'Funds Raised' },
  ];

  const features = [
    {
      icon: Shield,
      title: 'Transparent Impact',
      description: 'We maintain full transparency in our operations, ensuring donors and volunteers can see exactly how their contributions make a difference.',
    },
    {
      icon: Users,
      title: 'Community Focused',
      description: 'Our programs are designed by and for the communities we serve, ensuring sustainable and meaningful impact.',
    },
    {
      icon: Award,
      title: 'Proven Results',
      description: 'With over a decade of experience, we have a track record of successful programs that create lasting positive change.',
    },
    {
      icon: Target,
      title: 'Sustainable Solutions',
      description: 'We focus on long-term solutions that empower communities to thrive independently and create lasting positive change.',
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <HeroBackground>
        <div className="text-center">
          <h1 className="heading-hero">
            <span className="block">Empowering Young People And</span>
            <span className="block">Changing Lives</span>
          </h1>
          <p className="text-hero">
            Dedicated to creating positive change in children's lives through education, healthcare, and community support programs that empower them to build a brighter future.
          </p>
        </div>
      </HeroBackground>

      {/* Donate Button Section */}
      <section className="section-standard">
        <div className="container-standard">
          <div className="text-center">
            <Link to="/donate" className="btn-primary">
              Donate Now
              <ArrowRight className="icon-arrow" />
            </Link>
          </div>
        </div>
      </section>

      {/* About Us Preview Section */}
      <section className="section-gray">
        <div className="container-compact">
          <div className="flex-responsive">
            {/* Image */}
            <div className="lg:w-1/2">
              <div className="image-container">
                {/* Top-left decorative box - behind image */}
                <div className="decorative-box-top-left"></div>
                
                {/* Bottom-right decorative box - behind image */}
                <div className="decorative-box-bottom-right"></div>
                
                <img
                  src={`${import.meta.env.BASE_URL}pic4.JPG`}
                  alt="Children 4 World Children"
                  className="image-main"
                />
                <div className="image-overlay"></div>
              </div>
            </div>

            {/* Text Content */}
            <div className="lg:w-1/2 lg:pl-8">
              <div className="space-content">
                <h2 className="heading-about">
                  About Us
                </h2>
                <p className="text-subtitle">
                  Empowering children worldwide through education, healthcare, and hope
                </p>
                <p className="text-body">
                  Children 4 World Children is dedicated to creating positive change in the lives of children across the globe. Through our comprehensive programs, we provide education, healthcare, and essential resources to children in need, ensuring they have the opportunity to thrive and reach their full potential.
                </p>
                <div className="pt-2">
                  <Link to="/about" className="btn-secondary">
                    Know More
                    <svg className="icon-small" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Events Preview Section */}
      <section className="section-standard">
        <div className="container-compact">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="heading-section">
              Events
            </h2>
            <p className="text-section">
              At C4WC, we're about making a difference. Our mission is simple: to help young people thrive.
            </p>
          </div>

          {/* Events Container */}
          <div className="space-events">
            {/* Event 1 */}
            <div className="flex-responsive">
              {/* Text Content */}
              <div className="lg:w-1/2 lg:pr-8">
                <div className="space-content">
                  <h3 className="heading-event-date">
                    20 APRIL, 2024
                  </h3>
                  <h4 className="heading-event-title">
                    Excel English Class
                  </h4>
                  <p className="text-body">
                    Teaching and supporting community life integration
                  </p>
                  <div className="pt-2">
                    <Link to="/events" className="btn-secondary">
                      Read More
                      <svg className="icon-small" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Image */}
              <div className="lg:w-1/2">
                <div className="image-container">
                  {/* Top-left decorative box - behind image */}
                  <div className="decorative-box-top-left"></div>
                  
                  {/* Bottom-right decorative box - behind image */}
                  <div className="decorative-box-bottom-right"></div>
                  
                  <img
                    src={`${import.meta.env.BASE_URL}pic5.JPG`}
                    alt="Excel English Class"
                    className="image-main"
                  />
                  <div className="image-overlay"></div>
                </div>
              </div>
            </div>

            {/* Event 2 */}
            <div className="flex-responsive-reverse">
              {/* Text Content */}
              <div className="lg:w-1/2 lg:pl-8">
                <div className="space-content">
                  <h3 className="heading-event-date">
                    5 SEPTEMBER, 2024
                  </h3>
                  <h4 className="heading-event-title">
                    Sporting Activities
                  </h4>
                  <p className="text-body">
                    Games and exercises to keep fit.
                  </p>
                  <div className="pt-2">
                    <Link to="/events" className="btn-secondary">
                      Read More
                      <svg className="icon-small" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Image */}
              <div className="lg:w-1/2">
                <div className="image-container">
                  {/* Top-left decorative box - behind image */}
                  <div className="decorative-box-top-left"></div>
                  
                  {/* Bottom-right decorative box - behind image */}
                  <div className="decorative-box-bottom-right"></div>
                  
                  <img
                    src={`${import.meta.env.BASE_URL}pic6.JPG`}
                    alt="Sporting Activities"
                    className="image-main"
                  />
                  <div className="image-overlay"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-purple">
        <div className="container-standard">
          <div className="text-center mb-12">
            <h2 className="heading-section text-white">
              Our Impact in Numbers
            </h2>
            <p className="text-lg text-white opacity-90 max-w-2xl mx-auto leading-relaxed">
              See the real difference we're making in children's lives through our programs and initiatives.
            </p>
          </div>
          
          <div className="grid-stats">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-stats-number">{stat.number}</div>
                <div className="text-stats-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sliding Text Section */}
      <section className="py-16 bg-white overflow-hidden">
        <div className="container-standard">
          <div className="flex-center space-sliding animate-slide">
            <span className="text-sliding">Support</span>
            <div className="bullet-point"></div>
            <span className="text-sliding">Love</span>
            <div className="bullet-point"></div>
            <span className="text-sliding">Community</span>
            <div className="bullet-point"></div>
            <span className="text-sliding">Hope</span>
            <div className="bullet-point"></div>
            <span className="text-sliding">Support</span>
            <div className="bullet-point"></div>
            <span className="text-sliding">Love</span>
            <div className="bullet-point"></div>
            <span className="text-sliding">Community</span>
            <div className="bullet-point"></div>
            <span className="text-sliding">Hope</span>
          </div>
        </div>
      </section>

      {/* Our Volunteers Section */}
      <section className="section-standard">
        <div className="container-compact">
          {/* Section Header */}
          <div className="flex justify-between items-center mb-12">
            <h2 className="heading-section mb-0">
              Our Volunteers
            </h2>
            <Link to="/volunteer" className="btn-secondary">
              Become a Volunteer
              <ArrowRight className="icon-arrow" />
            </Link>
          </div>

          {/* Volunteers Container */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Volunteer 1 */}
            <div className="text-center">
              <div className="mb-4">
                <div className="w-32 h-32 rounded-full bg-gray-200 mx-auto shadow-lg flex items-center justify-center">
                  <span className="text-gray-500 text-sm">Image</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-800">
                Masego Kwenamore
              </h3>
            </div>

            {/* Volunteer 2 */}
            <div className="text-center">
              <div className="mb-4">
                <div className="w-32 h-32 rounded-full bg-gray-200 mx-auto shadow-lg flex items-center justify-center">
                  <span className="text-gray-500 text-sm">Image</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-800">
                Wunmi Excel Ategie
              </h3>
            </div>

            {/* Volunteer 3 */}
            <div className="text-center">
              <div className="mb-4">
                <img
                  src={`${import.meta.env.BASE_URL}cto.jpg`}
                  alt="Ikenna Brendan Iwuoha"
                  className="w-32 h-32 rounded-full object-cover mx-auto shadow-lg"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">
                Ikenna Brendan Iwuoha
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Our Partners Section */}
      <section className="py-16 bg-white overflow-hidden">
        <div className="container-compact">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-purple-600 mb-4">
              -OUR PARTNERS-
            </h2>
          </div>

          {/* Partners Sliding Animation */}
          <div className="flex items-center space-x-16 animate-slide">
            {/* Partner 1 */}
            <div className="flex-shrink-0">
              <img
                src={`${import.meta.env.BASE_URL}national-youth-council-of-ireland.png`}
                alt="National Youth Council of Ireland"
                className="h-16 w-auto object-contain"
              />
            </div>

            {/* Partner 2 */}
            <div className="flex-shrink-0">
              <img
                src={`${import.meta.env.BASE_URL}south-dublin-county-public-participation-network.png`}
                alt="South Dublin County Public Participation Network"
                className="h-16 w-auto object-contain"
              />
            </div>

            {/* Partner 3 */}
            <div className="flex-shrink-0">
              <img
                src={`${import.meta.env.BASE_URL}fingal-ethnic-network.png`}
                alt="Fingal Ethnic Network"
                className="h-16 w-auto object-contain"
              />
            </div>

            {/* Partner 4 */}
            <div className="flex-shrink-0">
              <img
                src={`${import.meta.env.BASE_URL}fingal-public-participation-network.png`}
                alt="Fingal Public Participation Network"
                className="h-16 w-auto object-contain"
              />
            </div>

            {/* Partner 5 */}
            <div className="flex-shrink-0">
              <img
                src={`${import.meta.env.BASE_URL}anna-lindh-foundation.png`}
                alt="Anna Lindh Foundation"
                className="h-16 w-auto object-contain"
              />
            </div>

            {/* Partner 6 */}
            <div className="flex-shrink-0">
              <img
                src={`${import.meta.env.BASE_URL}aontas.png`}
                alt="Aontas"
                className="h-16 w-auto object-contain"
              />
            </div>

            {/* Duplicate partners for seamless loop */}
            <div className="flex-shrink-0">
              <img
                src={`${import.meta.env.BASE_URL}national-youth-council-of-ireland.png`}
                alt="National Youth Council of Ireland"
                className="h-16 w-auto object-contain"
              />
            </div>

            <div className="flex-shrink-0">
              <img
                src={`${import.meta.env.BASE_URL}south-dublin-county-public-participation-network.png`}
                alt="South Dublin County Public Participation Network"
                className="h-16 w-auto object-contain"
              />
            </div>

            <div className="flex-shrink-0">
              <img
                src={`${import.meta.env.BASE_URL}fingal-ethnic-network.png`}
                alt="Fingal Ethnic Network"
                className="h-16 w-auto object-contain"
              />
            </div>

            <div className="flex-shrink-0">
              <img
                src={`${import.meta.env.BASE_URL}fingal-public-participation-network.png`}
                alt="Fingal Public Participation Network"
                className="h-16 w-auto object-contain"
              />
            </div>

            <div className="flex-shrink-0">
              <img
                src={`${import.meta.env.BASE_URL}anna-lindh-foundation.png`}
                alt="Anna Lindh Foundation"
                className="h-16 w-auto object-contain"
              />
            </div>

            <div className="flex-shrink-0">
              <img
                src={`${import.meta.env.BASE_URL}aontas.png`}
                alt="Aontas"
                className="h-16 w-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Children 4 World Children?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We combine child-focused programs, transparent operations, and sustainable practices 
              to deliver meaningful and lasting impact in children's lives worldwide.
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
                  <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-lg mb-4">
                    <Icon className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Programs Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Core Programs
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive charitable programs and initiatives designed to address children's needs 
              and create sustainable positive change.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              'Child Welfare Programs',
              'Education Initiatives',
              'Healthcare & Nutrition',
              'Community Development',
              'Emergency Relief',
              'Youth Empowerment'
            ].map((service, index) => (
              <div
                key={index}
                className="flex items-center p-6 bg-gray-50 rounded-lg hover:bg-purple-50 transition-colors duration-200"
              >
                <CheckCircle className="h-6 w-6 text-purple-600 mr-4 flex-shrink-0" />
                <span className="text-gray-900 font-medium">{service}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/programs"
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-purple-600 hover:bg-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              View All Programs
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Help Children?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Join us in creating positive change in children's lives through your support, contributions, and involvement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/volunteer"
              className="inline-flex items-center px-8 py-3 border-2 border-white text-base font-medium rounded-lg text-white bg-transparent hover:bg-white hover:text-purple-600 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Volunteer With Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/donate"
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-purple-600 bg-white hover:bg-purple-50 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Make a Donation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;