import React, { useState, useEffect } from 'react';
import { Target, Eye, Heart, Award, Users, CheckCircle, Globe } from 'lucide-react';

interface CompanyInfo {
  name: string;
  tagline: string;
  mission: string;
  vision: string;
  description: string;
  foundedYear: string;
  employees: string;
}

interface ContactInfo {
  headOffice: {
    address: string;
    phone: string;
    email: string;
  };
  annexOffice: {
    address: string;
    phone: string;
    email: string;
  };
  generalEmail: string;
  generalPhone: string;
}

const About = () => {
  const [companyInfo, setCompanyInfo] = useState<CompanyInfo>({
    name: 'Johnbabs Environmental and Engineering Services Ltd',
    tagline: 'Environmental Excellence, Engineering Solutions',
    mission: 'To provide innovative, sustainable, and cost-effective environmental and engineering solutions that protect natural resources, ensure regulatory compliance, and support sustainable development across Nigeria and West Africa.',
    vision: 'To be the leading environmental and engineering consultancy firm in Nigeria, recognized for our technical excellence, innovative solutions, and unwavering commitment to environmental stewardship and sustainable development.',
    description: 'Leading environmental consultancy and engineering services provider in Nigeria, committed to sustainable development and environmental protection with offices in F.C.T Abuja and Rivers State.',
    foundedYear: '2013',
    employees: '15+'
  });

  const [contactInfo, setContactInfo] = useState<ContactInfo>({
    headOffice: {
      address: 'Suite 35b Silla Zeka Plaza, By 29 Adebayo Adedeji Crescent, Utako, F.C.T Abuja, Nigeria',
      phone: '+234 (0) 802 219 2956',
      email: 'johnbabsenvironmental@gmail.com'
    },
    annexOffice: {
      address: 'Plot 32, Road 7 Rumuagholu, Port Harcourt, Rivers State, Nigeria',
      phone: '+234 (0) 802 219 2956',
      email: 'johnbabsenvironmental@gmail.com'
    },
    generalEmail: 'johnbabsenvironmental@gmail.com',
    generalPhone: '+234 (0) 802 219 2956'
  });

  const [aboutImage, setAboutImage] = useState(`${import.meta.env.BASE_URL}bpit.jpeg`);

  useEffect(() => {
    // Only load from localStorage if no hardcoded values are set
    const savedCompanyInfo = localStorage.getItem('johnbabs_company_info');
    if (savedCompanyInfo && !companyInfo.name.includes('Johnbabs')) {
      setCompanyInfo(JSON.parse(savedCompanyInfo));
    }
    
    // Only load from localStorage if no hardcoded values are set
    const savedContactInfo = localStorage.getItem('johnbabs_contact_info');
    if (savedContactInfo && !contactInfo.headOffice.address.includes('Suite 35b')) {
      setContactInfo(JSON.parse(savedContactInfo));
    }
    
    // Load about image from localStorage
    const savedImages = localStorage.getItem('johnbabs_images');
    if (savedImages) {
      const images = JSON.parse(savedImages);
      if (images.about) {
        setAboutImage(images.about);
      }
    }
    
    // Listen for admin panel saves
    const handleAdminSave = () => {
      const savedCompanyInfo = localStorage.getItem('johnbabs_company_info');
      if (savedCompanyInfo) {
        setCompanyInfo(JSON.parse(savedCompanyInfo));
      }
      
      const savedContactInfo = localStorage.getItem('johnbabs_contact_info');
      if (savedContactInfo) {
        setContactInfo(JSON.parse(savedContactInfo));
      }
      
      const savedImages = localStorage.getItem('johnbabs_images');
      if (savedImages) {
        const images = JSON.parse(savedImages);
        if (images.about) {
          setAboutImage(images.about);
        }
      }
    };
    
    window.addEventListener('adminPanelSaved', handleAdminSave);
    return () => window.removeEventListener('adminPanelSaved', handleAdminSave);
  }, []);

  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'We strive for excellence in every project, delivering quality results that exceed expectations.',
    },
    {
      icon: Heart,
      title: 'Integrity',
      description: 'Operating with honesty, transparency, and ethical practices in all our business dealings.',
    },
    {
      icon: Globe,
      title: 'Sustainability',
      description: 'Committed to environmental protection and sustainable development for future generations.',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working closely with clients and stakeholders to achieve shared environmental goals.',
    },
  ];

  return (
    <div className="pt-16">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-emerald-50 to-teal-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              About <span className="text-emerald-600">{companyInfo.name}</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              {companyInfo.description}
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  {companyInfo.name} was established as a leading 
                  provider of comprehensive environmental consultancy and engineering solutions in Nigeria. 
                  Since our inception in {companyInfo.foundedYear}, we have been committed to delivering sustainable solutions that 
                  protect the environment while supporting economic development.
                </p>
                <p>
                  Our company is fully incorporated under Nigerian law and maintains the highest 
                  standards of regulatory compliance. We hold all necessary certifications including 
                  our Certificate of Incorporation, Tax Clearance Certificate, Pension Clearance 
                  Certificate, and compliance with the Industrial Training Fund and Social Insurance Trust Fund.
                </p>
                <p>
                  With headquarters in Lagos and an annex office in Abuja, we are strategically 
                  positioned to serve clients across Nigeria and beyond. Our team of {companyInfo.employees} experienced 
                  professionals brings together expertise in environmental science, engineering, 
                  project management, and regulatory compliance.
                </p>
              </div>
            </div>
            <div className="mt-10 lg:mt-0">
              <img
                className="w-full rounded-lg shadow-xl"
                src={aboutImage}
                alt="Company headquarters"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="flex items-center justify-center w-12 h-12 bg-emerald-100 rounded-lg mr-4">
                  <Target className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                {companyInfo.mission}
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="flex items-center justify-center w-12 h-12 bg-teal-100 rounded-lg mr-4">
                  <Eye className="h-6 w-6 text-teal-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                {companyInfo.vision}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              These fundamental principles guide everything we do and shape our approach to client service.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="text-center p-6 bg-gray-50 rounded-xl hover:bg-emerald-50 transition-colors duration-300"
                >
                  <div className="flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mx-auto mb-4">
                    <Icon className="h-8 w-8 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Company Credentials */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Company Credentials
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Fully certified and compliant with all Nigerian regulatory requirements.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              'Certificate of Incorporation',
              'Tax Clearance Certificate',
              'Pension Clearance Certificate',
              'Industrial Training Fund Compliance',
              'Social Insurance Trust Fund Clearance',
              'Professional Engineering Registration'
            ].map((credential, index) => (
              <div
                key={index}
                className="flex items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-emerald-100 rounded-lg mr-4">
                  <Award className="h-6 w-6 text-emerald-600" />
                </div>
                <span className="text-gray-900 font-medium">{credential}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Locations
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Strategically located to serve clients across Nigeria.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Head Office - F.C.T Abuja</h3>
              <div className="space-y-2 text-gray-600">
                <p>{contactInfo.headOffice.address}</p>
                <p className="mt-4 font-medium">Phone: {contactInfo.headOffice.phone}</p>
                <p className="font-medium">Email: {contactInfo.headOffice.email}</p>
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Annex Office - Rivers State</h3>
              <div className="space-y-2 text-gray-600">
                <p>{contactInfo.annexOffice.address}</p>
                <p className="mt-4 font-medium">Phone: {contactInfo.annexOffice.phone}</p>
                <p className="font-medium">Email: {contactInfo.annexOffice.email}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;