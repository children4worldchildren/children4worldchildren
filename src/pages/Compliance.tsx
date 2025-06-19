import React from 'react';
import { Award, Shield, FileText, CheckCircle, Download, Calendar } from 'lucide-react';

const Compliance = () => {
  const certifications = [
    {
      title: 'Certificate of Incorporation',
      description: 'Official registration with the Corporate Affairs Commission (CAC) of Nigeria',
      issuer: 'Corporate Affairs Commission',
      status: 'Active',
      validUntil: '2025-12-31',
      category: 'Legal'
    },
    {
      title: 'Tax Clearance Certificate',
      description: 'Current tax compliance certificate from Federal Inland Revenue Service',
      issuer: 'Federal Inland Revenue Service',
      status: 'Active',
      validUntil: '2024-12-31',
      category: 'Tax'
    },
    {
      title: 'Pension Clearance Certificate',
      description: 'Compliance certificate from National Pension Commission',
      issuer: 'National Pension Commission',
      status: 'Active',
      validUntil: '2024-12-31',
      category: 'Pension'
    },
    {
      title: 'Industrial Training Fund Compliance',
      description: 'Certificate of compliance with Industrial Training Fund requirements',
      issuer: 'Industrial Training Fund',
      status: 'Active',
      validUntil: '2024-12-31',
      category: 'Training'
    },
    {
      title: 'Social Insurance Trust Fund Clearance',
      description: 'Current clearance certificate from Nigeria Social Insurance Trust Fund',
      issuer: 'Nigeria Social Insurance Trust Fund',
      status: 'Active',
      validUntil: '2024-12-31',
      category: 'Insurance'
    },
    {
      title: 'COREN Registration',
      description: 'Council for the Regulation of Engineering in Nigeria registration',
      issuer: 'COREN',
      status: 'Active',
      validUntil: '2025-06-30',
      category: 'Professional'
    },
    {
      title: 'ISO 14001 Certification',
      description: 'Environmental Management Systems certification',
      issuer: 'International Organization for Standardization',
      status: 'Active',
      validUntil: '2025-03-15',
      category: 'Quality'
    },
    {
      title: 'ISO 9001 Certification',
      description: 'Quality Management Systems certification',
      issuer: 'International Organization for Standardization',
      status: 'Active',
      validUntil: '2025-03-15',
      category: 'Quality'
    }
  ];

  const policies = [
    {
      title: 'Health, Safety & Environment (HSE) Policy',
      description: 'Comprehensive policy outlining our commitment to workplace safety and environmental protection',
      lastUpdated: '2024-01-15'
    },
    {
      title: 'Anti-Bribery and Corruption Policy',
      description: 'Zero-tolerance policy on bribery and corruption in all business dealings',
      lastUpdated: '2024-01-15'
    },
    {
      title: 'Quality Assurance Policy',
      description: 'Framework for maintaining quality standards in all our services and deliverables',
      lastUpdated: '2024-01-15'
    },
    {
      title: 'Data Protection and Privacy Policy',
      description: 'Guidelines for protecting client data and ensuring privacy compliance',
      lastUpdated: '2024-01-15'
    }
  ];

  const getCertificationColor = (category: string) => {
    const colors = {
      'Legal': 'bg-blue-100 text-blue-800',
      'Tax': 'bg-green-100 text-green-800',
      'Pension': 'bg-purple-100 text-purple-800',
      'Training': 'bg-yellow-100 text-yellow-800',
      'Insurance': 'bg-indigo-100 text-indigo-800',
      'Professional': 'bg-emerald-100 text-emerald-800',
      'Quality': 'bg-teal-100 text-teal-800'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="pt-16">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-emerald-50 to-teal-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Compliance & <span className="text-emerald-600">Certifications</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We maintain the highest standards of regulatory compliance and professional certification. 
              Our commitment to transparency and accountability is demonstrated through our comprehensive 
              compliance framework.
            </p>
          </div>
        </div>
      </section>

      {/* Compliance Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-8 bg-emerald-50 rounded-xl">
              <div className="flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mx-auto mb-4">
                <Shield className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">100%</h3>
              <p className="text-gray-600">Regulatory Compliance</p>
            </div>
            <div className="text-center p-8 bg-teal-50 rounded-xl">
              <div className="flex items-center justify-center w-16 h-16 bg-teal-100 rounded-full mx-auto mb-4">
                <Award className="h-8 w-8 text-teal-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">8+</h3>
              <p className="text-gray-600">Active Certifications</p>
            </div>
            <div className="text-center p-8 bg-blue-50 rounded-xl">
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">15+</h3>
              <p className="text-gray-600">Years of Compliance</p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Certifications
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We maintain all required certifications and licenses to operate legally and professionally 
              in Nigeria and internationally.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <h3 className="text-xl font-semibold text-gray-900 mr-3">{cert.title}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCertificationColor(cert.category)}`}>
                        {cert.category}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-3">{cert.description}</p>
                    <div className="space-y-2 text-sm text-gray-500">
                      <div className="flex items-center">
                        <Award className="h-4 w-4 mr-2" />
                        <span>Issued by: {cert.issuer}</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span>Valid until: {cert.validUntil}</span>
                      </div>
                    </div>
                  </div>
                  <div className="ml-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      cert.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {cert.status}
                    </span>
                  </div>
                </div>
                <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                  <button className="flex items-center text-emerald-600 hover:text-emerald-700 transition-colors duration-200">
                    <FileText className="h-4 w-4 mr-2" />
                    View Details
                  </button>
                  <button className="flex items-center text-gray-600 hover:text-gray-700 transition-colors duration-200">
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Policies */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Company Policies
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our comprehensive policies ensure ethical business practices, safety, and quality in all our operations.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {policies.map((policy, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-xl hover:bg-emerald-50 transition-colors duration-300"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{policy.title}</h3>
                <p className="text-gray-600 mb-4">{policy.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">
                    Last updated: {policy.lastUpdated}
                  </span>
                  <button className="flex items-center text-emerald-600 hover:text-emerald-700 transition-colors duration-200 font-medium">
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regulatory Framework */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Regulatory Framework
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We operate within the comprehensive regulatory framework of Nigeria and maintain 
              compliance with international standards.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Nigerian Regulations',
                items: [
                  'Federal Environmental Protection Agency Act',
                  'Environmental Impact Assessment Act',
                  'National Environmental Standards and Regulations Enforcement Agency Act',
                  'Water Resources Act'
                ]
              },
              {
                title: 'Professional Standards',
                items: [
                  'Council for the Regulation of Engineering in Nigeria (COREN)',
                  'Nigerian Society of Engineers Standards',
                  'International Engineering Standards',
                  'Professional Code of Ethics'
                ]
              },
              {
                title: 'International Standards',
                items: [
                  'ISO 14001 Environmental Management',
                  'ISO 9001 Quality Management',
                  'IFC Performance Standards',
                  'World Bank Environmental and Social Standards'
                ]
              }
            ].map((framework, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{framework.title}</h3>
                <ul className="space-y-2">
                  {framework.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact for Compliance */}
      <section className="py-20 bg-emerald-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Questions About Our Compliance?
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
            For any questions regarding our certifications, compliance status, or to request 
            copies of our documents, please contact our compliance team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center px-8 py-3 border-2 border-white text-base font-medium rounded-full text-white bg-transparent hover:bg-white hover:text-emerald-600 transition-all duration-200 shadow-lg hover:shadow-xl">
              Contact Compliance Team
            </button>
            <button className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-emerald-600 bg-white hover:bg-emerald-50 transition-all duration-200 shadow-lg hover:shadow-xl">
              Request Documents
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Compliance;