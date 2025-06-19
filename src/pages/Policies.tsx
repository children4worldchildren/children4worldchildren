import React from 'react';
import { Shield, FileText, Download, Eye, Users, Leaf, AlertTriangle } from 'lucide-react';

const Policies = () => {
  const policies = [
    {
      title: 'Health, Safety & Environment (HSE) Policy',
      icon: Shield,
      description: 'Our comprehensive HSE policy outlines our commitment to maintaining the highest standards of health, safety, and environmental protection in all our operations.',
      lastUpdated: '2024-01-15',
      sections: [
        'Health and Safety Management System',
        'Environmental Protection Standards',
        'Risk Assessment and Management',
        'Emergency Response Procedures',
        'Training and Competency Requirements',
        'Incident Reporting and Investigation'
      ],
      keyPoints: [
        'Zero tolerance for preventable accidents',
        'Continuous improvement in HSE performance',
        'Full compliance with Nigerian and international standards',
        'Regular HSE training for all personnel'
      ]
    },
    {
      title: 'Anti-Bribery and Corruption Policy',
      icon: AlertTriangle,
      description: 'We maintain a zero-tolerance approach to bribery and corruption in all forms. This policy outlines our commitment to ethical business practices.',
      lastUpdated: '2024-01-15',
      sections: [
        'Definition of Bribery and Corruption',
        'Prohibited Activities',
        'Gift and Entertainment Guidelines',
        'Due Diligence Procedures',
        'Reporting Mechanisms',
        'Disciplinary Actions'
      ],
      keyPoints: [
        'Zero tolerance for bribery and corruption',
        'Clear guidelines for gifts and entertainment',
        'Confidential reporting mechanisms',
        'Regular training and awareness programs'
      ]
    },
    {
      title: 'Quality Assurance Policy',
      icon: FileText,
      description: 'Our quality assurance framework ensures consistent delivery of high-quality services that meet or exceed client expectations and industry standards.',
      lastUpdated: '2024-01-15',
      sections: [
        'Quality Management System',
        'Service Delivery Standards',
        'Client Satisfaction Measures',
        'Continuous Improvement Processes',
        'Document Control Procedures',
        'Internal Audit Requirements'
      ],
      keyPoints: [
        'ISO 9001 certified quality management system',
        'Regular client feedback and satisfaction surveys',
        'Continuous professional development',
        'Rigorous quality control processes'
      ]
    },
    {
      title: 'Environmental Policy',
      icon: Leaf,
      description: 'Our environmental policy demonstrates our commitment to environmental stewardship and sustainable business practices in all our operations.',
      lastUpdated: '2024-01-15',
      sections: [
        'Environmental Management System',
        'Pollution Prevention',
        'Resource Conservation',
        'Waste Minimization',
        'Biodiversity Protection',
        'Climate Change Mitigation'
      ],
      keyPoints: [
        'ISO 14001 certified environmental management',
        'Commitment to carbon footprint reduction',
        'Sustainable resource utilization',
        'Protection of natural ecosystems'
      ]
    },
    {
      title: 'Data Protection and Privacy Policy',
      icon: Users,
      description: 'We are committed to protecting the privacy and security of personal and business data entrusted to us by our clients and stakeholders.',
      lastUpdated: '2024-01-15',
      sections: [
        'Data Collection and Processing',
        'Data Security Measures',
        'Access Control',
        'Data Retention Policies',
        'Third-Party Data Sharing',
        'Individual Rights and Remedies'
      ],
      keyPoints: [
        'Strict data protection protocols',
        'Limited data collection to business needs',
        'Secure data storage and transmission',
        'Regular security audits and updates'
      ]
    },
    {
      title: 'Code of Conduct',
      icon: Eye,
      description: 'Our code of conduct establishes the ethical standards and behavioral expectations for all employees, contractors, and business partners.',
      lastUpdated: '2024-01-15',
      sections: [
        'Ethical Business Practices',
        'Professional Integrity',
        'Conflict of Interest',
        'Confidentiality Requirements',
        'Fair Employment Practices',
        'Community Engagement'
      ],
      keyPoints: [
        'Highest standards of professional conduct',
        'Respect for all stakeholders',
        'Transparent business operations',
        'Commitment to social responsibility'
      ]
    }
  ];

  return (
    <div className="pt-16">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-emerald-50 to-teal-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Company <span className="text-emerald-600">Policies</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Our comprehensive policies ensure ethical business practices, safety excellence, 
              and environmental stewardship. These policies guide our operations and reflect 
              our commitment to transparency and accountability.
            </p>
          </div>
        </div>
      </section>

      {/* Policy Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Policy Framework
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              These policies form the foundation of our operations and demonstrate our commitment 
              to excellence in all aspects of our business.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-6 bg-emerald-50 rounded-xl">
              <div className="flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mx-auto mb-4">
                <Shield className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Safety First</h3>
              <p className="text-gray-600">Comprehensive HSE policies ensuring zero harm to people and environment</p>
            </div>
            <div className="text-center p-6 bg-teal-50 rounded-xl">
              <div className="flex items-center justify-center w-16 h-16 bg-teal-100 rounded-full mx-auto mb-4">
                <Eye className="h-8 w-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Ethical Conduct</h3>
              <p className="text-gray-600">Zero tolerance for corruption and commitment to highest ethical standards</p>
            </div>
            <div className="text-center p-6 bg-blue-50 rounded-xl">
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4">
                <FileText className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Quality Excellence</h3>
              <p className="text-gray-600">ISO certified systems ensuring consistent quality in all deliverables</p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Policies */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {policies.map((policy, index) => {
              const Icon = policy.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div
                  key={index}
                  className={`lg:grid lg:grid-cols-12 lg:gap-12 items-start ${
                    index !== 0 ? 'border-t border-gray-200 pt-16' : ''
                  }`}
                >
                  <div className={`lg:col-span-7 ${!isEven ? 'lg:order-2' : ''}`}>
                    <div className="flex items-center mb-6">
                      <div className="flex items-center justify-center w-12 h-12 bg-emerald-100 rounded-lg mr-4">
                        <Icon className="h-6 w-6 text-emerald-600" />
                      </div>
                      <h3 className="text-3xl font-bold text-gray-900">{policy.title}</h3>
                    </div>
                    <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                      {policy.description}
                    </p>
                    
                    <div className="mb-8">
                      <h4 className="text-xl font-semibold text-gray-900 mb-4">Key Policy Sections</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {policy.sections.map((section, sectionIndex) => (
                          <div key={sectionIndex} className="flex items-center">
                            <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                            <span className="text-gray-700">{section}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mb-8">
                      <h4 className="text-xl font-semibold text-gray-900 mb-4">Key Commitments</h4>
                      <ul className="space-y-2">
                        {policy.keyPoints.map((point, pointIndex) => (
                          <li key={pointIndex} className="flex items-start">
                            <div className="w-2 h-2 bg-teal-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                            <span className="text-gray-700">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-emerald-600 hover:bg-emerald-700 transition-colors duration-200">
                        <Download className="mr-2 h-5 w-5" />
                        Download Policy
                      </button>
                      <button className="inline-flex items-center px-6 py-3 border border-emerald-600 text-base font-medium rounded-lg text-emerald-600 bg-white hover:bg-emerald-50 transition-colors duration-200">
                        <Eye className="mr-2 h-5 w-5" />
                        
                        View Full Document
                      </button>
                    </div>
                  </div>
                  
                  <div className={`mt-10 lg:mt-0 lg:col-span-5 ${!isEven ? 'lg:order-1' : ''}`}>
                    <div className="bg-white p-8 rounded-xl shadow-lg">
                      <div className="text-center mb-6">
                        <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-full mx-auto mb-4">
                          <Icon className="h-10 w-10 text-emerald-600" />
                        </div>
                        <h4 className="text-lg font-semibold text-gray-900">Policy Information</h4>
                      </div>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center py-2 border-b border-gray-200">
                          <span className="text-gray-600">Last Updated:</span>
                          <span className="font-medium text-gray-900">{policy.lastUpdated}</span>
                        </div>
                        <div className="flex justify-between items-center py-2 border-b border-gray-200">
                          <span className="text-gray-600">Status:</span>
                          <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">Active</span>
                        </div>
                        <div className="flex justify-between items-center py-2 border-b border-gray-200">
                          <span className="text-gray-600">Review Cycle:</span>
                          <span className="font-medium text-gray-900">Annual</span>
                        </div>
                        <div className="flex justify-between items-center py-2">
                          <span className="text-gray-600">Applies To:</span>
                          <span className="font-medium text-gray-900">All Personnel</span>
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

      {/* Policy Implementation */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Policy Implementation
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We ensure effective implementation of all policies through comprehensive training, 
              regular monitoring, and continuous improvement.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Training & Awareness',
                description: 'Regular training sessions ensure all personnel understand and comply with our policies.',
                icon: Users
              },
              {
                title: 'Monitoring & Auditing',
                description: 'Regular internal and external audits verify policy compliance and effectiveness.',
                icon: Eye
              },
              {
                title: 'Reporting & Feedback',
                description: 'Open channels for reporting concerns and providing feedback on policy implementation.',
                icon: FileText
              },
              {
                title: 'Continuous Improvement',
                description: 'Regular review and updates ensure our policies remain current and effective.',
                icon: Shield
              }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="text-center p-6 bg-gray-50 rounded-xl hover:bg-emerald-50 transition-colors duration-300"
                >
                  <div className="flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mx-auto mb-4">
                    <Icon className="h-8 w-8 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact for Policy Questions */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Questions About Our Policies?
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
            If you have any questions about our policies or need clarification on any aspect, 
            our team is here to help. We believe in transparency and open communication.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center px-8 py-3 border-2 border-white text-base font-medium rounded-full text-white bg-transparent hover:bg-white hover:text-emerald-600 transition-all duration-200 shadow-lg hover:shadow-xl">
              Contact Policy Team
            </button>
            <button className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-emerald-600 bg-white hover:bg-emerald-50 transition-all duration-200 shadow-lg hover:shadow-xl">
              Download All Policies
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Policies;