import React, { useState, useEffect } from 'react';
import { Mail, Phone, Linkedin, Award, BookOpen, Briefcase } from 'lucide-react';

interface TeamMember {
  name: string;
  position: string;
  image: string;
  qualifications: string[];
  experience: string;
  specializations: string[];
  email: string;
  phone: string;
}

const Management = () => {
  const [team, setTeam] = useState<TeamMember[]>([
    {
      name: 'Dr John Babington Chibunna',
      position: 'Chief Executive Officer',
      image: `${import.meta.env.BASE_URL}ceo.jpg`,
      qualifications: [
        'Ph.D. Environment and Development',
        'M.Sc. Environmental Assessment and Monitoring',
        'Pg.D. Project Management'
      ],
      experience: '20+ years in environmental consulting and engineering design',
      specializations: ['Environmental Impact Assessment', 'Water Resources Management', 'Project Management'],
      email: 'ceo@jbees.ng',
      phone: '+234 (0) 802 219 2956'
    },
    {
      name: 'Eng. Ikenna Iwuoha',
      position: 'Director of Operations',
      image: `${import.meta.env.BASE_URL}doo.jpg`,
      qualifications: [
        'M.Sc. Computer Science',
        'BiT. Software Engineering',
        'PMP Certified'
      ],
      experience: '15+ years in operations management and environmental systems',
      specializations: ['Operations Management', 'Compliance', 'Quality Assurance', 'ICT Specialist'],
      email: 'operations@jbees.ng',
      phone: '+234 (0) 803 332 1234'
    },
    // {
    //   name: 'Dr. Michael Okonkwo',
    //   position: 'Director of Environmental Services',
    //   image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
    //   qualifications: [
    //     'Ph.D. Environmental Science',
    //     'M.Sc. Environmental Management',
    //     'B.Sc. Biology',
    //     'Certified Environmental Professional'
    //   ],
    //   experience: '18+ years in environmental consulting and regulatory compliance',
    //   specializations: ['Environmental Assessment', 'Regulatory Compliance', 'Ecological Restoration'],
    //   email: 'environmental@johnbabs.com',
    //   phone: '+234 (0) 123 456 7892'
    // },
    // {
    //   name: 'Eng. Fatima Mohammed',
    //   position: 'Director of Engineering',
    //   image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400',
    //   qualifications: [
    //     'M.Eng. Structural Engineering',
    //     'B.Eng. Civil Engineering',
    //     'COREN Registered Engineer',
    //     'Certified Project Manager'
    //   ],
    //   experience: '12+ years in structural design and project supervision',
    //   specializations: ['Structural Design', 'Construction Management', 'Infrastructure Development'],
    //   email: 'engineering@johnbabs.com',
    //   phone: '+234 (0) 123 456 7893'
    // },
    // {
    //   name: 'Dr. James Okafor',
    //   position: 'Director of Business Development',
    //   image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
    //   qualifications: [
    //     'Ph.D. Business Administration',
    //     'M.B.A. Strategic Management',
    //     'B.Sc. Economics',
    //     'Certified Management Consultant'
    //   ],
    //   experience: '16+ years in business development and strategic planning',
    //   specializations: ['Business Strategy', 'Client Relations', 'Market Development'],
    //   email: 'business@johnbabs.com',
    //   phone: '+234 (0) 123 456 7894'
    // },
    // {
    //   name: 'Mrs. Grace Ekwueme',
    //   position: 'Director of Finance & Administration',
    //   image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400',
    //   qualifications: [
    //     'M.Sc. Accounting & Finance',
    //     'B.Sc. Accounting',
    //     'ICAN Chartered Accountant',
    //     'Certified Risk Manager'
    //   ],
    //   experience: '14+ years in financial management and corporate administration',
    //   specializations: ['Financial Management', 'Risk Assessment', 'Corporate Governance'],
    //   email: 'finance@johnbabs.com',
    //   phone: '+234 (0) 123 456 7895'
    // }
  ]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadTeamData = () => {
      setIsLoading(true);
      
      // Default team data
      const defaultTeam: TeamMember[] = [
        {
          name: 'Dr John Babington Chibunna',
          position: 'Chief Executive Officer',
          image: `${import.meta.env.BASE_URL}ceo.jpg`,
          qualifications: [
            'Ph.D. Environment and Development',
            'M.Sc. Environmental Assessment and Monitoring',
            'Pg.D. Project Management'
          ],
          experience: '20+ years in environmental consulting and engineering design',
          specializations: ['Environmental Impact Assessment', 'Water Resources Management', 'Project Management'],
          email: 'ceo@jbees.ng',
          phone: '+234 (0) 802 219 2956'
        },
        {
          name: 'Eng. Ikenna Iwuoha',
          position: 'Director of Operations',
          image: `${import.meta.env.BASE_URL}doo.jpg`,
          qualifications: [
            'M.Sc. Computer Science',
            'BiT. Software Engineering',
            'PMP Certified'
          ],
          experience: '15+ years in operations management and environmental systems',
          specializations: ['Operations Management', 'Compliance', 'Quality Assurance', 'ICT Specialist'],
          email: 'operations@jbees.ng',
          phone: '+234 (0) 803 332 1234'
        },
        // {
        //   name: 'Dr. Michael Okonkwo',
        //   position: 'Director of Environmental Services',
        //   image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
        //   qualifications: [
        //     'Ph.D. Environmental Science',
        //     'M.Sc. Environmental Management',
        //     'B.Sc. Biology',
        //     'Certified Environmental Professional'
        //   ],
        //   experience: '18+ years in environmental consulting and regulatory compliance',
        //   specializations: ['Environmental Assessment', 'Regulatory Compliance', 'Ecological Restoration'],
        //   email: 'environmental@johnbabs.com',
        //   phone: '+234 (0) 123 456 7892'
        // },
        // {
        //   name: 'Eng. Fatima Mohammed',
        //   position: 'Director of Engineering',
        //   image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400',
        //   qualifications: [
        //     'M.Eng. Structural Engineering',
        //     'B.Eng. Civil Engineering',
        //     'COREN Registered Engineer',
        //     'Certified Project Manager'
        //   ],
        //   experience: '12+ years in structural design and project supervision',
        //   specializations: ['Structural Design', 'Construction Management', 'Infrastructure Development'],
        //   email: 'engineering@johnbabs.com',
        //   phone: '+234 (0) 123 456 7893'
        // },
        // {
        //   name: 'Dr. James Okafor',
        //   position: 'Director of Business Development',
        //   image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
        //   qualifications: [
        //     'Ph.D. Business Administration',
        //     'M.B.A. Strategic Management',
        //     'B.Sc. Economics',
        //     'Certified Management Consultant'
        //   ],
        //   experience: '16+ years in business development and strategic planning',
        //   specializations: ['Business Strategy', 'Client Relations', 'Market Development'],
        //   email: 'business@johnbabs.com',
        //   phone: '+234 (0) 123 456 7894'
        // },
        // {
        //   name: 'Mrs. Grace Ekwueme',
        //   position: 'Director of Finance & Administration',
        //   image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400',
        //   qualifications: [
        //     'M.Sc. Accounting & Finance',
        //     'B.Sc. Accounting',
        //     'ICAN Chartered Accountant',
        //     'Certified Risk Manager'
        //   ],
        //   experience: '14+ years in financial management and corporate administration',
        //   specializations: ['Financial Management', 'Risk Assessment', 'Corporate Governance'],
        //   email: 'finance@johnbabs.com',
        //   phone: '+234 (0) 123 456 7895'
        // }
      ];
      
      // Load team data from localStorage
      const savedTeam = localStorage.getItem('children4worldchildren_team');
      let teamData = defaultTeam; // Start with default team data
      
      if (savedTeam) {
        const parsedTeam = JSON.parse(savedTeam);
        // Only use saved team if it has the same number of members as default
        if (parsedTeam.length === defaultTeam.length) {
          teamData = parsedTeam;
        }
      }
      
      // Load saved images and update team member images
      const savedImages = localStorage.getItem('children4worldchildren_images');
      if (savedImages) {
        const images = JSON.parse(savedImages);
        
        teamData = teamData.map((member: TeamMember, index: number) => {
          // Map team members to their image slots
          const imageKeys = ['team1', 'team2', 'team3', 'team4', 'team5', 'team6'];
          const imageKey = imageKeys[index];
          
          if (images[imageKey]) {
            return { ...member, image: images[imageKey] };
          }
          // Add placeholder for new team members without images
          if (!member.image || member.image === '') {
            return { ...member, image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400' };
          }
          return member;
        });
      }
      
      setTeam(teamData);
      setIsLoading(false);
    };
    
    // Load data on mount
    loadTeamData();
    
    // Listen for admin panel saves
    const handleAdminSave = () => {
      // Small delay to ensure localStorage is updated
      setTimeout(loadTeamData, 100);
    };
    
    window.addEventListener('adminPanelSaved', handleAdminSave);
    return () => window.removeEventListener('adminPanelSaved', handleAdminSave);
  }, []);

  return (
    <div className="pt-16">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-emerald-50 to-teal-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-emerald-600">Management Team</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Meet the experienced professionals who lead Children4worldchildren. 
              Our leadership team brings together decades of expertise in environmental consulting, 
              engineering, and business management.
            </p>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {team.map((member, index) => {
              const isEven = index % 2 === 0;
              
              return (
                <div
                  key={index}
                  className={`lg:grid lg:grid-cols-12 lg:gap-12 items-start ${
                    index !== 0 ? 'border-t border-gray-200 pt-16' : ''
                  }`}
                >
                  <div className={`lg:col-span-4 ${!isEven ? 'lg:order-2' : ''}`}>
                    <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-8 rounded-xl">
                      {isLoading ? (
                        <div className="w-48 h-48 rounded-full mx-auto bg-gray-200 animate-pulse shadow-lg mb-6 flex items-center justify-center">
                          <div className="text-gray-400">Loading...</div>
                        </div>
                      ) : (
                        <img
                          className="w-48 h-48 rounded-full mx-auto object-cover shadow-lg mb-6"
                          src={member.image}
                          alt={member.name}
                          onError={(e) => {
                            // Fallback to default image if saved image fails to load
                            const target = e.target as HTMLImageElement;
                            if (index === 0) {
                              target.src = `${import.meta.env.BASE_URL}ceo.jpg`;
                            } else {
                              target.src = `${import.meta.env.BASE_URL}doo.jpg`;
                            }
                          }}
                        />
                      )}
                      <div className="text-center">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
                        <p className="text-emerald-600 font-semibold text-lg mb-4">{member.position}</p>
                        <div className="flex justify-center space-x-4">
                          <a
                            href={`mailto:${member.email}`}
                            className="flex items-center justify-center w-10 h-10 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 transition-colors duration-200"
                          >
                            <Mail className="h-5 w-5" />
                          </a>
                          <a
                            href={`tel:${member.phone}`}
                            className="flex items-center justify-center w-10 h-10 bg-teal-600 text-white rounded-full hover:bg-teal-700 transition-colors duration-200"
                          >
                            <Phone className="h-5 w-5" />
                          </a>
                          <button className="flex items-center justify-center w-10 h-10 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-200">
                            <Linkedin className="h-5 w-5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className={`mt-10 lg:mt-0 lg:col-span-8 ${!isEven ? 'lg:order-1' : ''}`}>
                    <div className="space-y-6">
                      {/* Experience */}
                      <div>
                        <div className="flex items-center mb-3">
                          <Briefcase className="h-6 w-6 text-emerald-600 mr-3" />
                          <h4 className="text-xl font-semibold text-gray-900">Experience</h4>
                        </div>
                        <p className="text-gray-600 leading-relaxed pl-9">{member.experience}</p>
                      </div>

                      {/* Qualifications */}
                      <div>
                        <div className="flex items-center mb-3">
                          <Award className="h-6 w-6 text-emerald-600 mr-3" />
                          <h4 className="text-xl font-semibold text-gray-900">Qualifications</h4>
                        </div>
                        <ul className="pl-9 space-y-2">
                          {member.qualifications.map((qualification, qIndex) => (
                            <li key={qIndex} className="flex items-center text-gray-600">
                              <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                              {qualification}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Specializations */}
                      <div>
                        <div className="flex items-center mb-3">
                          <BookOpen className="h-6 w-6 text-emerald-600 mr-3" />
                          <h4 className="text-xl font-semibold text-gray-900">Areas of Specialization</h4>
                        </div>
                        <div className="pl-9 flex flex-wrap gap-2">
                          {member.specializations.map((spec, sIndex) => (
                            <span
                              key={sIndex}
                              className="px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium"
                            >
                              {spec}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Contact Info */}
                      <div className="bg-gray-50 p-6 rounded-lg">
                        <h4 className="text-lg font-semibold text-gray-900 mb-4">Contact Information</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="flex items-center">
                            <Mail className="h-5 w-5 text-emerald-600 mr-3" />
                            <a href={`mailto:${member.email}`} className="text-gray-600 hover:text-emerald-600 transition-colors">
                              {member.email}
                            </a>
                          </div>
                          <div className="flex items-center">
                            <Phone className="h-5 w-5 text-emerald-600 mr-3" />
                            <a href={`tel:${member.phone}`} className="text-gray-600 hover:text-emerald-600 transition-colors">
                              {member.phone}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Leadership Philosophy */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Leadership Philosophy
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our management team is committed to excellence, integrity, and sustainable development.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Collaborative Leadership',
                description: 'We believe in collaborative decision-making and empowering our team members to contribute their expertise.'
              },
              {
                title: 'Client-Focused Approach',
                description: 'Our leadership prioritizes client satisfaction and building long-term partnerships based on trust and quality service.'
              },
              {
                title: 'Continuous Innovation',
                description: 'We foster a culture of innovation and continuous learning to stay at the forefront of environmental and engineering solutions.'
              }
            ].map((philosophy, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{philosophy.title}</h3>
                <p className="text-gray-600 leading-relaxed">{philosophy.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Management;