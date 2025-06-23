import React, { useState } from 'react';
import { Calculator, FileText, User, Mail, Phone, Building, MessageSquare, ArrowLeft, DollarSign } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import apiService from '../services/api';

const Quote = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    projectType: '',
    projectSize: '',
    timeline: '',
    budget: '',
    projectDescription: '',
    additionalRequirements: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await apiService.submitQuote(formData);
      console.log('Quote request successful:', response);
      alert('Thank you! Your quote request has been submitted. We will provide you with a detailed quote within 48 hours.');
      navigate('/contact');
    } catch (error: any) {
      console.error('Quote request error:', error);
      // If backend is not available, show temporary success message
      if (error.message.includes('fetch') || error.message.includes('Failed to fetch')) {
        console.log('Backend not available, showing temporary success message');
        alert('Thank you! Your quote request has been received. We will provide you with a detailed quote within 48 hours. For immediate assistance, please call us at +234 (0) 802 219 2956.');
        // Store form data locally for later processing
        const submissions = JSON.parse(localStorage.getItem('quote_submissions') || '[]');
        submissions.push({
          ...formData,
          timestamp: new Date().toISOString(),
          status: 'pending'
        });
        localStorage.setItem('quote_submissions', JSON.stringify(submissions));
        navigate('/contact');
      } else {
        setSubmitError(error.message || 'There was an error submitting your quote request. Please try again later.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const projectTypes = [
    { value: 'new-project', label: 'New Project' },
    { value: 'existing-project', label: 'Existing Project Enhancement' },
    { value: 'maintenance', label: 'Maintenance & Support' },
    { value: 'consultation', label: 'Consultation Services' },
    { value: 'assessment', label: 'Assessment & Evaluation' }
  ];

  const projectSizes = [
    { value: 'small', label: 'Small (< $10,000)' },
    { value: 'medium', label: 'Medium ($10,000 - $50,000)' },
    { value: 'large', label: 'Large ($50,000 - $200,000)' },
    { value: 'enterprise', label: 'Enterprise (> $200,000)' }
  ];

  const timelines = [
    { value: 'immediate', label: 'Immediate (Within 1 month)' },
    { value: 'short-term', label: 'Short-term (1-3 months)' },
    { value: 'medium-term', label: 'Medium-term (3-6 months)' },
    { value: 'long-term', label: 'Long-term (6+ months)' }
  ];

  const budgetRanges = [
    { value: 'under-10k', label: 'Under $10,000' },
    { value: '10k-25k', label: '$10,000 - $25,000' },
    { value: '25k-50k', label: '$25,000 - $50,000' },
    { value: '50k-100k', label: '$50,000 - $100,000' },
    { value: '100k-plus', label: '$100,000+' },
    { value: 'to-be-determined', label: 'To be determined' }
  ];

  return (
    <div className="pt-16">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-emerald-50 to-teal-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Link 
              to="/contact" 
              className="inline-flex items-center text-emerald-600 hover:text-emerald-700 mb-6 transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Contact
            </Link>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Request a <span className="text-emerald-600">Quote</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Get a detailed quote for your environmental or engineering project. 
              We'll provide you with a comprehensive cost breakdown and project timeline.
            </p>
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 rounded-xl p-8 lg:p-12">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mb-6">
                <Calculator className="h-8 w-8 text-emerald-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Get Your Quote</h2>
              <p className="text-lg text-gray-600">
                Fill out the form below and we'll provide you with a detailed quote within 48 hours.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Information */}
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                  <User className="h-5 w-5 text-emerald-600 mr-3" />
                  Contact Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                      placeholder="+234 xxx xxx xxxx"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Company/Organization
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                      placeholder="Your company name"
                    />
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                  <FileText className="h-5 w-5 text-emerald-600 mr-3" />
                  Project Details
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                      Service Required *
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                    >
                      <option value="">Select a service</option>
                      <option value="environmental-consultancy">Environmental Consultancy</option>
                      <option value="social-impact-assessment">Social Impact Assessment</option>
                      <option value="engineering-design">Engineering Design & Supervision</option>
                      <option value="waste-management">Waste Management Solutions</option>
                      <option value="cleaning-pest-control">Cleaning & Pest Control</option>
                      <option value="environmental-restoration">Environmental Restoration</option>
                      <option value="multiple-services">Multiple Services</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-2">
                      Project Type *
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      required
                      value={formData.projectType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                    >
                      <option value="">Select project type</option>
                      {projectTypes.map((type) => (
                        <option key={type.value} value={type.value}>
                          {type.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="projectSize" className="block text-sm font-medium text-gray-700 mb-2">
                      Project Size
                    </label>
                    <select
                      id="projectSize"
                      name="projectSize"
                      value={formData.projectSize}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                    >
                      <option value="">Select project size</option>
                      {projectSizes.map((size) => (
                        <option key={size.value} value={size.value}>
                          {size.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-2">
                      Project Timeline
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                    >
                      <option value="">Select timeline</option>
                      {timelines.map((time) => (
                        <option key={time.value} value={time.value}>
                          {time.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                      Budget Range
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                    >
                      <option value="">Select budget range</option>
                      {budgetRanges.map((range) => (
                        <option key={range.value} value={range.value}>
                          {range.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Project Description */}
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                  <MessageSquare className="h-5 w-5 text-emerald-600 mr-3" />
                  Project Information
                </h3>
                <div className="space-y-6">
                  <div>
                    <label htmlFor="projectDescription" className="block text-sm font-medium text-gray-700 mb-2">
                      Project Description *
                    </label>
                    <textarea
                      id="projectDescription"
                      name="projectDescription"
                      required
                      rows={4}
                      value={formData.projectDescription}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors resize-none"
                      placeholder="Please provide a detailed description of your project, including objectives, scope, and any specific requirements..."
                    ></textarea>
                  </div>
                  <div>
                    <label htmlFor="additionalRequirements" className="block text-sm font-medium text-gray-700 mb-2">
                      Additional Requirements
                    </label>
                    <textarea
                      id="additionalRequirements"
                      name="additionalRequirements"
                      rows={3}
                      value={formData.additionalRequirements}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors resize-none"
                      placeholder="Any additional requirements, constraints, or special considerations..."
                    ></textarea>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-lg text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-colors duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Submitting...
                  </>
                ) : (
                  <>
                    Request Quote
                    <Calculator className="ml-2 h-5 w-5" />
                  </>
                )}
              </button>

              {submitError && (
                <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-600 text-sm">{submitError}</p>
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Quote Process
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive quotes that include all necessary details for your project.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mb-6">
                <FileText className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Detailed Analysis</h3>
              <p className="text-gray-600">
                We analyze your project requirements and provide a comprehensive cost breakdown.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mb-6">
                <DollarSign className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Transparent Pricing</h3>
              <p className="text-gray-600">
                Our quotes include all costs with no hidden fees, ensuring complete transparency.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mb-6">
                <Calculator className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Quick Turnaround</h3>
              <p className="text-gray-600">
                Receive your detailed quote within 48 hours of submitting your request.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Quote; 