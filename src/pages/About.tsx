import React, { useState, useEffect } from 'react';
import { Target, Eye, Award, Heart, Users, Globe, Star, BookOpen, Shield, Users2, Leaf, Building2 } from 'lucide-react';
import HeroBackground from '../components/HeroBackground';

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
    name: 'Children 4 World Children International',
    tagline: 'Empowering Kids And Changing Lives',
    mission: 'To empower marginalized and underrepresented youth aged 12–24 years through peer-to-peer support networks, fostering leadership, empathy, and a shared sense of responsibility.',
    vision: 'A world where every young person and their families can thrive through peer support and Empathy in Action.',
    description: 'Children 4 World Children (C4WC) International is a global initiative founded in Ireland in 2012 by Christabel Flourish Ategie, a 12-year-old visionary determined to make a difference.',
    foundedYear: '2012',
    employees: 'Volunteer-based',
  });

  const [contactInfo, setContactInfo] = useState<ContactInfo>({
    headOffice: {
      address: 'Carmichael Centre\n4 North Brunswick Street\nDublin 7, Co.Dublin\nD07 RHA8',
      phone: '+353 89 611 7303',
      email: 'c4wcorg@gmail.com'
    },
    annexOffice: {
      address: '456 Hope Street, Cork, Ireland',
      phone: '+353 21 987 6543',
      email: 'cork@children4worldchildren.org'
    },
    generalEmail: 'info@children4worldchildren.org',
    generalPhone: '+353 1 234 5678',
  });

  const [aboutImage, setAboutImage] = useState(`${import.meta.env.BASE_URL}children-4-world-children.png`);

  useEffect(() => {
    // Load saved data from localStorage
    const savedCompanyInfo = localStorage.getItem('charity_company_info');
    if (savedCompanyInfo && !companyInfo.name.includes('Children 4 World Children')) {
      setCompanyInfo(JSON.parse(savedCompanyInfo));
    }
    
    const savedContactInfo = localStorage.getItem('charity_contact_info');
    if (savedContactInfo) {
      setContactInfo(JSON.parse(savedContactInfo));
    }
    
    const savedImages = localStorage.getItem('charity_images');
    if (savedImages) {
      const images = JSON.parse(savedImages);
      if (images.about) {
        setAboutImage(images.about);
      }
    }
    
    // Listen for admin panel saves
    const handleAdminSave = () => {
      const savedCompanyInfo = localStorage.getItem('charity_company_info');
      if (savedCompanyInfo) {
        setCompanyInfo(JSON.parse(savedCompanyInfo));
      }
      
      const savedContactInfo = localStorage.getItem('charity_contact_info');
      if (savedContactInfo) {
        setContactInfo(JSON.parse(savedContactInfo));
      }
      
      const savedImages = localStorage.getItem('charity_images');
      if (savedImages) {
        const images = JSON.parse(savedImages);
        if (images.about) {
          setAboutImage(images.about);
        }
      }
    };
    
    window.addEventListener('adminPanelSaved', handleAdminSave);
    return () => window.removeEventListener('adminPanelSaved', handleAdminSave);
  }, [companyInfo.name]);

  const goals = [
    {
      id: 1,
      title: "Our World",
      icon: Globe,
      objective: "To alleviate poverty and prevent young people from falling into poverty traps.",
      strategy: "Implement peer-to-peer support programs where young people mentor their peers. Apply the 'train-the-trainer' methodology for sustainable impact.",
      initiatives: [
        {
          name: "Promote Our Potentials (POP)",
          description: "Skills acquisition masterclasses in areas like bag and accessory making, photography, beauty and makeup, arts and crafts, hair braiding, and First Aid Training."
        },
        {
          name: "Sports and Events",
          description: "Annual Sports Across the World promoting physical and mental well-being. Intercultural events such as Africa Day, Mediterranean Day, Fingal Inclusion Week, and Street Feast."
        },
        {
          name: "X-Hale Project",
          description: "In partnership with the Irish Cancer Society, educates young people about the dangers of smoking through drama, workshops, and conferences."
        },
        {
          name: "Gaisce President's Award Collaboration",
          description: "Encourages young people to engage in positive peer-led projects while working toward the President's Award."
        },
        {
          name: "I-Care Project",
          description: "Supports children's hospitals through fundraising, provides toys and educational materials to children in hospitals, IPA centers, and schools worldwide."
        }
      ]
    },
    {
      id: 2,
      title: "Our Legacy",
      icon: Building2,
      objective: "To empower parents from diverse ethnic backgrounds to support their children through peer learning and active participation in social and educational activities.",
      strategy: "Provide language skills and community engagement tools for newly arrived migrants and displaced families.",
      initiatives: [
        {
          name: "C4WC Excel English Class",
          description: "Teaches language skills to newly arrived migrants and displaced children. Equips non-English-speaking parents with tools to actively engage in their children's education and community life."
        }
      ]
    },
    {
      id: 3,
      title: "Our Future",
      icon: Star,
      objective: "To build partnerships between public and private sectors, nurturing young people into future leaders.",
      strategy: "Establish platforms connecting disadvantaged youth and families with community service providers. Collaborate with partners to provide tools and opportunities for youth to maximize their potential.",
      initiatives: [
        {
          name: "We Are the Future",
          description: "Solidarity projects empowering young people to plan and deliver community initiatives through conferences, workshops, volunteering, and leadership programs."
        },
        {
          name: "Health Promo",
          description: "Promotes the health and wellness of young people."
        },
        {
          name: "No Planet B – Climate Action Project",
          description: "Educates youth about climate change through workshops, conferences, and collaborations with organizations like National Youth Council Ireland, Léargas, and Jigsaw."
        }
      ]
    }
  ];

  const partnerships = [
    {
      category: "Partners and Collaborators",
      organizations: [
        "National Youth Council",
        "AONTAS",
        "Fingal Ethnic Network",
        "Anna Lindh Foundation",
        "Fingal PPN",
        "South Dublin PPN",
        "Great The Hague Netherlands",
        "Ojodu Grassroots",
        "Bisiriyu Olajide Ayeni Foundation",
        "Skirts Without Stains Spain"
      ]
    },
    {
      category: "Funders and Supporters",
      organizations: [
        "Fingal County Council",
        "Empower"
      ]
    }
  ];

  return (
    <div className="pt-16">
      {/* Header Section */}
      <HeroBackground>
        <div className="text-center">
          <h1 className="text-4xl lg:text-5xl font-normal text-gray-900 mb-6">
            About <span className="text-purple-600">{companyInfo.name}</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {companyInfo.description}
          </p>
        </div>
      </HeroBackground>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Children 4 World Children (C4WC) International is a global initiative founded in Ireland in 2012 by 
                  <strong className="text-purple-600"> Christabel Flourish Ategie</strong>, a 12-year-old visionary determined to make a difference. 
                  Our organization empowers marginalized and underrepresented youth aged 12–24 years through peer-to-peer support networks.
                </p>
                <p>
                  We foster leadership, empathy, and a shared sense of responsibility to help young people reach their full potential. 
                  Guided by the belief that <em>"It takes a whole village to raise a child,"</em> we design programs tailored to the unique needs 
                  and talents of young people, uplifting individuals and strengthening communities.
                </p>
                <p>
                  Currently operating in Ireland and Nigeria, C4WC aligns its work with the United Nations Sustainable Development Goals, 
                  striving to create a brighter, more equitable future for all.
                </p>
              </div>
            </div>
            <div className="mt-10 lg:mt-0">
              <img
                className="w-full rounded-lg shadow-xl"
                src={aboutImage}
                alt="Children 4 World Children International"
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
                <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-lg mr-4">
                  <Target className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                {companyInfo.mission}
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="flex items-center justify-center w-12 h-12 bg-indigo-100 rounded-lg mr-4">
                  <Eye className="h-6 w-6 text-indigo-600" />
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

      {/* Our Goals */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Goals
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Three comprehensive goals that guide our work and create lasting impact in communities worldwide.
            </p>
          </div>
          
          <div className="space-y-16">
            {goals.map((goal) => {
              const Icon = goal.icon;
              return (
                <div key={goal.id} className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-2xl p-8">
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-purple-600 rounded-lg">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 ml-4">
                      {goal.title}
                    </h3>
                  </div>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-3">Objective:</h4>
                      <p className="text-gray-600 mb-4">{goal.objective}</p>
                      
                      <h4 className="text-xl font-semibold text-gray-900 mb-3">Strategy:</h4>
                      <p className="text-gray-600">{goal.strategy}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-4">Key Initiatives:</h4>
                      <div className="space-y-4">
                        {goal.initiatives.map((initiative, index) => (
                          <div key={index} className="bg-white rounded-lg p-4 shadow-sm">
                            <h5 className="font-semibold text-purple-600 mb-2">{initiative.name}</h5>
                            <p className="text-gray-600 text-sm">{initiative.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Partnerships and Support */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Partnerships and Support
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We work with a network of partners and supporters to maximize our impact and reach more communities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {partnerships.map((partnership, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">{partnership.category}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {partnership.organizations.map((org, orgIndex) => (
                    <div key={orgIndex} className="flex items-center p-3 bg-gray-50 rounded-lg">
                      <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                      <span className="text-gray-700 font-medium">{org}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-20 bg-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Our Commitment
          </h2>
          <div className="max-w-4xl mx-auto space-y-6 text-purple-100">
            <p className="text-xl leading-relaxed">
              C4WC International is dedicated to linking communities, empowering individuals, and fostering a global culture of peer support and Empathy in Action.
            </p>
            <p className="text-lg leading-relaxed">
              Operating entirely through passionate volunteers, C4WC has relied solely on the dedication and commitment of individuals since its inception. 
              With no paid staff or remuneration, we remain united in our mission to create a future where every young person and their families can thrive.
            </p>
          </div>
        </div>
      </section>

      {/* Child Protection */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Child Protection
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              At Children4WorldChildren CLG (C4WC), we take the safety of all the children involved in the group very seriously.
            </p>
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-2xl p-8 mb-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Commitment to Child Safety</h3>
              <p className="text-gray-600 max-w-4xl mx-auto">
                We are Children First and Child's safeguarding Compliant in accordance with Tusla standard. 
                In line with the C4WC code of practice, we have quite a number of children's officers in the organisation.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            {/* Children Officers */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Shield className="h-6 w-6 text-purple-600 mr-3" />
                Children Officers
              </h3>
              <div className="space-y-6">
                <div className="border-l-4 border-purple-600 pl-4">
                  <h4 className="font-semibold text-gray-900">Christabel Flourish Ategie</h4>
                  <p className="text-gray-600">+353 89 610 0794</p>
                  <p className="text-purple-600">christabel.ategie@children4worldchildren.com</p>
                </div>
                <div className="border-l-4 border-purple-600 pl-4">
                  <h4 className="font-semibold text-gray-900">Clea Tabo</h4>
                  <p className="text-gray-600">+353 85 170 7264</p>
                  <p className="text-purple-600">cleatabo@hotmail.com</p>
                </div>
                <div className="border-l-4 border-purple-600 pl-4">
                  <h4 className="font-semibold text-gray-900">Bisola Atoro</h4>
                  <p className="text-gray-600">+353 85 152 7385</p>
                  <p className="text-purple-600">bisolalateef@yahoo.com</p>
                </div>
              </div>
            </div>

            {/* Compliance and Designated Officers */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Award className="h-6 w-6 text-purple-600 mr-3" />
                Compliance & Designated Officers
              </h3>
              <div className="space-y-6">
                <div className="border-l-4 border-purple-600 pl-4">
                  <h4 className="font-semibold text-gray-900">C4WC Compliance Officer</h4>
                  <h5 className="font-medium text-gray-800">Masego Kwenamore</h5>
                  <p className="text-gray-600">+353 89 953 0567</p>
                  <p className="text-purple-600">Masego.kwenamore@children4worldchildren.com</p>
                </div>
                <div className="border-l-4 border-purple-600 pl-4">
                  <h4 className="font-semibold text-gray-900">Group Designated Liaison Person</h4>
                  <h5 className="font-medium text-gray-800">Wunmi Excel Ategie</h5>
                  <p className="text-gray-600">+353 89 611 7303</p>
                  <p className="text-purple-600">Wunmi.excel@children4worldchildren.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-8 mb-8">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <Shield className="h-6 w-6 text-yellow-600" />
              </div>
              <div className="ml-3">
                <h3 className="text-lg font-semibold text-yellow-800 mb-2">Important Notice</h3>
                <p className="text-yellow-700">
                  The above Children Officers can be approached with child safety issues.
                </p>
              </div>
            </div>
          </div>

          {/* Vetting Information */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">National Vetting Bureau Requirements</h3>
            <div className="space-y-4 text-gray-700">
              <p>
                The National Vetting Bureau (Children and Vulnerable Persons) Acts 2012-2016 commenced on 29th April 2016, 
                this placed a statutory obligation on organisations working with young people to ensure that all persons 
                undertaking 'relevant work' with children has been vetted prior to that role in Ireland.
              </p>
              <p>
                The term 'relevant work' includes any role of responsibility such as mentors, facilitators, adults under the age of 18 years.
              </p>
              <p>
                Anyone who is in regular contact with children must be vetted by the National Vetting Bureau and must attend a child safeguarding course.
              </p>
              <div className="bg-white rounded-lg p-4 mt-6">
                <h4 className="font-semibold text-gray-900 mb-2">How to Apply for Vetting</h4>
                <p className="text-gray-600 mb-3">
                  To apply for vetting please complete the FORM NVB 1 and bring it along with the necessary identification to one of the children's officers.
                </p>
                <a 
                  href="https://vetting.garda.ie/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
                >
                  Visit Vetting Website
                  <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Locations
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Currently operating in Ireland and Nigeria, with plans to expand our reach globally.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Ireland Office</h3>
              <div className="space-y-2 text-gray-600">
                <div>
                  {contactInfo.headOffice.address.split('\n').map((line, index) => (
                    <p key={index}>{line}</p>
                  ))}
                </div>
                <p className="mt-4 font-medium">Phone: {contactInfo.headOffice.phone}</p>
                <p className="font-medium">Email: {contactInfo.headOffice.email}</p>
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Nigeria Office</h3>
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