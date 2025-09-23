import React from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Users, Award, Target, CheckCircle } from 'lucide-react';
import { Button } from '../components/ui/Button';
import HeroSection from '../components/HeroSection';
import { trackComponentRender } from '../utils/performance';
import { getStatsByLabels } from '../data/stats';
import { volunteers } from '../data/volunteers';

const Home = () => {
  const componentStartTime = performance.now();

  useEffect(() => {
    // Track component render time
    trackComponentRender('Home', componentStartTime);
    
    // Listen for admin panel saves
    const handleAdminSave = () => {
      // Handle admin save event if needed
    };
    
    window.addEventListener('adminSave', handleAdminSave);
    
    return () => {
      window.removeEventListener('adminSave', handleAdminSave);
    };
  }, [componentStartTime]);

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
      <HeroSection 
        title={
          <>
            <span className="block">Empowering Young Lives,</span>
            <span className="block">Strengthening Families</span>
          </>
        }
        subtitle="Dedicated to creating a platform for integrating, reintegrating, and empowering people from diverse ethnic groups through peer-to-peer learning."
        images={[
          `${import.meta.env.BASE_URL}hero2.jpg`,
          `${import.meta.env.BASE_URL}hero3.jpg`,
          `${import.meta.env.BASE_URL}hero4.jpg`,
        ]}
        intervalMs={5000}
        showWaves={false}
        imagePosition="center 20%"
      />

      {/* About Us Preview Section */}
      <section className="section-gray">
        <div className="container-compact">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="heading-section">
            About Us
            </h2>
            <p className="text-subtitle">
                Empowering young people and parents worldwide through holistic skills acquisition, education, healthcare, and hope.
                </p>
          </div>
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
                <p className="text-body text-justify">
                <strong>Children 4 World Children (C4WC) International</strong> is dedicated to creating lasting change in the lives of young people across the globe. Through our holistic programs, we deliver practical skills, quality education, healthcare, and vital resources to marginalized youth and parents—empowering them to thrive and reach their full potential.
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
            Events – Building Stronger Futures Together
            </h2>
            <p className="text-section">
            At <strong>C4WC</strong>, we empower young people through programs and community events, connecting
            youth and parents with vital service providers to help them thrive.
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
                    
                  </h3>
                  <h4 className="heading-event-title">
                    Excel English Class (EEC)
                  </h4>
                  <p className="text-body text-justify">
                  The Excel English Class is a free program that helps non-English-speaking migrants gain
essential language skills for daily life. Focused on empowering parents, the class promotes
better parenting, community integration, and access to opportunities. Since 2009, it has
grown into a vibrant conversational club serving diverse families and is part of C4WC’s
wider mission to foster inclusion and empowerment.
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
                    
                  </h3>
                  <h4 className="heading-event-title">
                  Sports Across the World
                  </h4>
                  <p className="text-body text-justify">
                  Our <strong>Sports across the World</strong> initiative connects people of diverse nationalities and cultural backgrounds through traditional childhood games and modern sports. By reviving these games, we engage young people, celebrate cultural heritage, and promote unity within the community.
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
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Our Impact in Numbers
            </h2>
            <p className="text-white max-w-3xl mx-auto">
              See the real difference we're making in young people's lives and families through our programs and initiatives.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {getStatsByLabels([
              'Young People & Families Empowered',
              'Countries Reached',
              'Dedicated Volunteers',
              'Funds Raised'
            ]).map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-4xl font-bold mb-2 text-white">{stat.number}</p>
                <p className="text-purple-100">{stat.label}</p>
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
          <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-4 mb-12">
            <h2 className="heading-section !mb-0 text-center sm:text-left">
              Our Volunteers
            </h2>
            <Link to="/about#team" className="btn-secondary whitespace-nowrap">
              Meet Our Team
              <ArrowRight className="icon-arrow" />
            </Link>
          </div>

          {/* Volunteers Container - Thumbnails Only (Limited to 6) */}
          <div className="flex justify-center">
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 md:gap-6">
              {volunteers.slice(0, 6).map((volunteer) => (
                <div key={volunteer.id} className="group cursor-pointer">
                  <div className="relative">
                    <img
                      src={`${import.meta.env.BASE_URL}${volunteer.image}`}
                      alt={volunteer.name}
                      className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full object-cover shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 rounded-full bg-purple-600 bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="text-center mt-8">
            <p className="text-gray-600 text-sm">
              Click "Meet Our Team" to learn more about our dedicated volunteers
            </p>
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
            <div 
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-purple-400 cursor-not-allowed"
              title="Coming Soon"
            >
              View All Programs
              <ArrowRight className="ml-2 h-5 w-5" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Help Young People?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Join us in creating positive change in children's lives through your support, contributions, and involvement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto px-4 sm:px-0">
            <Button
              variant="outline"
              size="lg"
              icon={<ArrowRight className="h-5 w-5" />}
              disabled
              title="Coming Soon"
              className="border-2 w-full sm:w-auto px-4 sm:px-8"
            >
              Volunteer With Us
            </Button>
            <Button
              as="link"
              to="/donate"
              variant="secondary"
              size="lg"
              className="shadow-lg hover:shadow-xl w-full sm:w-auto px-4 sm:px-8"
            >
              Support Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
