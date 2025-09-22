import React, { useState } from 'react';
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  Users, 
  GraduationCap, 
  TrendingUp, 
  Heart,
  Send,
  CheckCircle
} from 'lucide-react';

const Careers = () => {
  const [selectedJob, setSelectedJob] = useState<number | null>(null);

  const benefits = [
    {
      icon: GraduationCap,
      title: 'Professional Development',
      description: 'Continuous learning opportunities, training programs, and career advancement paths.'
    },
    {
      icon: Heart,
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance, wellness programs, and work-life balance initiatives.'
    },
    {
      icon: TrendingUp,
      title: 'Growth Opportunities',
      description: 'Clear career progression paths and opportunities to work on challenging projects.'
    },
    {
      icon: Users,
      title: 'Collaborative Culture',
      description: 'Work with experienced professionals in a supportive and inclusive environment.'
    }
  ];

  const jobOpenings = [
    {
      title: 'Senior Environmental Consultant',
      department: 'Environmental Services',
      location: 'Lagos, Nigeria',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Lead environmental impact assessments and provide expert consultation on complex environmental projects.',
      requirements: [
        'Masters degree in Environmental Science or related field',
        'Minimum 5 years experience in environmental consulting',
        'Professional certification (COREN or equivalent)',
        'Strong knowledge of Nigerian environmental regulations',
        'Excellent communication and project management skills'
      ],
      responsibilities: [
        'Conduct comprehensive environmental impact assessments',
        'Lead client consultations and stakeholder engagement',
        'Prepare technical reports and regulatory submissions',
        'Mentor junior consultants and provide technical guidance',
        'Ensure compliance with all environmental regulations'
      ]
    },
    {
      title: 'Civil Engineer - Infrastructure Projects',
      department: 'Engineering',
      location: 'Abuja, Nigeria',
      type: 'Full-time',
      experience: '3-5 years',
      description: 'Design and supervise infrastructure projects including roads, bridges, and water systems.',
      requirements: [
        'Bachelor\'s degree in Civil Engineering',
        '3-5 years experience in infrastructure projects',
        'COREN registration required',
        'Proficiency in AutoCAD, Civil 3D, and other design software',
        'Strong analytical and problem-solving skills'
      ],
      responsibilities: [
        'Design civil infrastructure projects',
        'Prepare technical drawings and specifications',
        'Supervise construction activities',
        'Conduct site inspections and quality control',
        'Coordinate with multidisciplinary teams'
      ]
    },
    {
      title: 'Project Manager - Environmental Projects',
      department: 'Project Management',
      location: 'Lagos, Nigeria',
      type: 'Full-time',
      experience: '7+ years',
      description: 'Manage large-scale environmental projects from initiation to completion.',
      requirements: [
        'Bachelor\'s degree in Engineering or Environmental Science',
        'PMP certification preferred',
        'Minimum 7 years project management experience',
        'Experience with environmental or engineering projects',
        'Strong leadership and communication skills'
      ],
      responsibilities: [
        'Plan and execute environmental projects',
        'Manage project budgets and timelines',
        'Coordinate with clients and stakeholders',
        'Lead project teams and ensure deliverable quality',
        'Identify and mitigate project risks'
      ]
    },
    {
      title: 'Environmental Scientist - Entry Level',
      department: 'Environmental Services',
      location: 'Lagos/Abuja, Nigeria',
      type: 'Full-time',
      experience: '0-2 years',
      description: 'Support environmental assessments and research activities under senior supervision.',
      requirements: [
        'Bachelor\'s degree in Environmental Science, Biology, or Chemistry',
        'Fresh graduates or up to 2 years experience',
        'Strong analytical and research skills',
        'Proficiency in data analysis software',
        'Willingness to travel for field work'
      ],
      responsibilities: [
        'Assist in environmental data collection and analysis',
        'Support preparation of environmental reports',
        'Conduct field sampling and monitoring',
        'Maintain laboratory equipment and records',
        'Support senior scientists in project activities'
      ]
    },
    {
      title: 'Business Development Manager',
      department: 'Business Development',
      location: 'Lagos, Nigeria',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Drive business growth through client relationship management and new business acquisition.',
      requirements: [
        'Bachelor\'s degree in Business, Engineering, or related field',
        'Minimum 5 years business development experience',
        'Experience in environmental or engineering services',
        'Strong networking and relationship building skills',
        'Excellent presentation and negotiation skills'
      ],
      responsibilities: [
        'Identify and pursue new business opportunities',
        'Develop and maintain client relationships',
        'Prepare proposals and presentations',
        'Represent company at industry events',
        'Collaborate with technical teams on project proposals'
      ]
    }
  ];

  const internshipPrograms = [
    {
      title: 'Environmental Science Internship',
      duration: '6 months',
      description: 'Hands-on experience in environmental consulting and assessment projects.'
    },
    {
      title: 'Engineering Internship',
      duration: '6 months',
      description: 'Practical training in engineering design and project supervision.'
    },
    {
      title: 'Business Development Internship',
      duration: '3 months',
      description: 'Learn business development strategies in the environmental services sector.'
    }
  ];

  return (
    <div className="pt-16">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-emerald-50 to-teal-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Join Our <span className="text-emerald-600">Team</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Build your career with Nigeria's leading environmental and engineering consultancy. 
              We offer exciting opportunities to work on impactful projects while developing your 
              professional skills in a supportive environment.
            </p>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Children4worldchildren?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We believe our people are our greatest asset. Join a team that values innovation, 
              professional growth, and making a positive impact on the environment.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="text-center p-6 bg-gray-50 rounded-xl hover:bg-emerald-50 transition-colors duration-300"
                >
                  <div className="flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mx-auto mb-4">
                    <Icon className="h-8 w-8 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Current Job Openings
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our current opportunities and find the perfect role to advance your career.
            </p>
          </div>
          <div className="space-y-6">
            {jobOpenings.map((job, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <Briefcase className="h-5 w-5 text-emerald-600 mr-2" />
                        <h3 className="text-xl font-bold text-gray-900">{job.title}</h3>
                      </div>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-3">
                        <div className="flex items-center">
                          <Users className="h-4 w-4 mr-1" />
                          <span>{job.department}</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          <span>{job.location}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>{job.type}</span>
                        </div>
                        <div className="flex items-center">
                          <GraduationCap className="h-4 w-4 mr-1" />
                          <span>{job.experience}</span>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-4">{job.description}</p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3 lg:ml-6">
                      <button
                        onClick={() => setSelectedJob(selectedJob === index ? null : index)}
                        className="px-6 py-2 border border-emerald-600 text-emerald-600 rounded-lg hover:bg-emerald-50 transition-colors duration-200"
                      >
                        {selectedJob === index ? 'Hide Details' : 'View Details'}
                      </button>
                      <button className="px-6 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors duration-200">
                        Apply Now
                      </button>
                    </div>
                  </div>
                  
                  {selectedJob === index && (
                    <div className="mt-6 pt-6 border-t border-gray-200">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-3">Requirements</h4>
                          <ul className="space-y-2">
                            {job.requirements.map((req, reqIndex) => (
                              <li key={reqIndex} className="flex items-start">
                                <CheckCircle className="h-5 w-5 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-600 text-sm">{req}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Responsibilities</h4>
                          <ul className="space-y-2">
                            {job.responsibilities.map((resp, respIndex) => (
                              <li key={respIndex} className="flex items-start">
                                <div className="w-2 h-2 bg-teal-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                                <span className="text-gray-600 text-sm">{resp}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internship Programs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Internship Programs
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Gain valuable experience through our structured internship programs designed 
              to provide hands-on learning opportunities.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {internshipPrograms.map((program, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-emerald-50 to-teal-50 p-8 rounded-xl hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mx-auto mb-4">
                  <GraduationCap className="h-8 w-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">{program.title}</h3>
                <div className="text-center mb-4">
                  <span className="px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium">
                    {program.duration}
                  </span>
                </div>
                <p className="text-gray-600 text-center mb-6">{program.description}</p>
                <div className="text-center">
                  <button className="inline-flex items-center px-6 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors duration-200">
                    Apply for Internship
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Application Process
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our streamlined application process is designed to identify the best candidates 
              while providing a positive experience for all applicants.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '1',
                title: 'Submit Application',
                description: 'Submit your resume and cover letter through our online portal or email.'
              },
              {
                step: '2',
                title: 'Initial Review',
                description: 'Our HR team reviews applications and shortlists qualified candidates.'
              },
              {
                step: '3',
                title: 'Interview Process',
                description: 'Selected candidates participate in technical and behavioral interviews.'
              },
              {
                step: '4',
                title: 'Final Decision',
                description: 'We make our decision and extend offers to successful candidates.'
              }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-emerald-600 text-white rounded-full mx-auto mb-4 text-xl font-bold">
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{process.title}</h3>
                <p className="text-gray-600">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact HR */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Join Our Team?
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
            Don't see a position that matches your skills? Send us your resume anyway. 
            We're always looking for talented individuals to join our growing team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center px-8 py-3 border-2 border-white text-base font-medium rounded-full text-white bg-transparent hover:bg-white hover:text-emerald-600 transition-all duration-200 shadow-lg hover:shadow-xl">
              <Send className="mr-2 h-5 w-5" />
              Send Your Resume
            </button>
            <button className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-emerald-600 bg-white hover:bg-emerald-50 transition-all duration-200 shadow-lg hover:shadow-xl">
              Contact HR Team
            </button>
          </div>
          <div className="mt-8 text-emerald-100">
            <p>Email: careers@children4worldchildren.com | Phone: +353 89 610 0794</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;