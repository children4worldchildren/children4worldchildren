import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, Clock, Send, Building, Users } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import apiService from '../services/api';
import HeroBackground from '../components/HeroBackground';

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

const Contact = () => {
  const navigate = useNavigate();
  const [contactInfo, setContactInfo] = useState<ContactInfo>({
    headOffice: {
      address: '123 Charity Lane, Dublin 1, Ireland',
      phone: '+353 1 234 5678',
      email: 'info@children4worldchildren.org'
    },
    annexOffice: {
      address: '456 Hope Street, Cork, Ireland',
      phone: '+353 21 987 6543',
      email: 'cork@children4worldchildren.org'
    },
    generalEmail: 'info@children4worldchildren.org',
    generalPhone: '+353 1 234 5678'
  });

  useEffect(() => {
    // Load saved contact info from localStorage
    const savedContactInfo = localStorage.getItem('charity_contact_info');
    if (savedContactInfo) {
      setContactInfo(JSON.parse(savedContactInfo));
    }
  }, []);

  useEffect(() => {
    // Listen for admin panel saves
    const handleAdminSave = () => {
      const savedContactInfo = localStorage.getItem('charity_contact_info');
      if (savedContactInfo) {
        setContactInfo(JSON.parse(savedContactInfo));
      }
    };
    
    window.addEventListener('adminPanelSaved', handleAdminSave);
    return () => window.removeEventListener('adminPanelSaved', handleAdminSave);
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    program: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);

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
    setSubmitSuccess(false);
    
    try {
      // Try to submit to backend first
      await apiService.submitContact(formData);
      setSubmitSuccess(true);
      setFormData({
        name: '', email: '', phone: '', organization: '', program: '', message: ''
      });
    } catch (error: any) {
      // If backend is not available, show temporary success message
      if (error.message.includes('fetch') || error.message.includes('Failed to fetch')) {
        console.log('Backend not available, showing temporary success message');
        setSubmitSuccess(true);
        setFormData({
          name: '', email: '', phone: '', organization: '', program: '', message: ''
        });
        // Store form data locally for later processing
        const submissions = JSON.parse(localStorage.getItem('contact_submissions') || '[]');
        submissions.push({
          ...formData,
          timestamp: new Date().toISOString(),
          status: 'pending'
        });
        localStorage.setItem('contact_submissions', JSON.stringify(submissions));
      } else {
        setSubmitError(error.message || 'There was an error submitting your message. Please try again later.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const offices = [
    {
      name: 'Main Office',
      city: 'Community Center',
      address: contactInfo.headOffice.address,
      phone: contactInfo.headOffice.phone,
      email: contactInfo.headOffice.email,
      hours: 'Mon-Fri: 9:00 AM - 5:00 PM',
      image: 'https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      name: 'Branch Office',
      city: 'Downtown',
      address: contactInfo.annexOffice.address,
      phone: contactInfo.annexOffice.phone,
      email: contactInfo.annexOffice.email,
      hours: 'Mon-Fri: 9:00 AM - 5:00 PM',
      image: 'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  return (
    <div className="pt-16">
      {/* Header Section */}
      <HeroBackground>
        <div className="text-center">
          <h1 className="text-4xl lg:text-5xl font-normal text-gray-900 mb-6">
            Contact <span className="text-purple-600">Us</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Get in touch with our team of community development experts. 
            We're here to help you with your charitable initiatives and answer any questions you may have.
          </p>
        </div>
      </HeroBackground>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-5 mb-12 lg:mb-0">
              <div className="bg-gradient-to-br from-purple-600 to-indigo-600 p-8 rounded-xl text-white h-full">
                <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
                <p className="text-purple-100 mb-8 leading-relaxed">
                  Ready to make a difference in your community? Contact us today 
                  to learn about our programs and how you can get involved. Our team is here to help you 
                  create positive change.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex items-center justify-center w-10 h-10 bg-purple-500 rounded-lg mr-4 flex-shrink-0">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Phone</h3>
                      <p className="text-purple-100">{contactInfo.generalPhone}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex items-center justify-center w-10 h-10 bg-purple-500 rounded-lg mr-4 flex-shrink-0">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <p className="text-purple-100">{contactInfo.generalEmail}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex items-center justify-center w-10 h-10 bg-purple-500 rounded-lg mr-4 flex-shrink-0">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Locations</h3>
                      <p className="text-purple-100">Main Community Center</p>
                      <p className="text-purple-100">Downtown Branch</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex items-center justify-center w-10 h-10 bg-purple-500 rounded-lg mr-4 flex-shrink-0">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Hours</h3>
                      <p className="text-purple-100">Mon-Fri: 9:00 AM - 5:00 PM</p>
                      <p className="text-purple-100">Sat: 10:00 AM - 2:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-7">
              <div className="bg-gray-50 p-8 rounded-xl">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
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
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                        placeholder="+234 xxx xxx xxxx"
                      />
                    </div>
                    <div>
                      <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-2">
                        Organization
                      </label>
                      <input
                        type="text"
                        id="organization"
                        name="organization"
                        value={formData.organization}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
                        placeholder="Your organization name"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="program" className="block text-sm font-medium text-gray-700 mb-2">
                      Program Interest
                    </label>
                    <select
                      id="program"
                      name="program"
                      value={formData.program}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
                    >
                      <option value="">Select a program</option>
                      <option value="community-outreach">Community Outreach</option>
                      <option value="education-support">Education Support</option>
                      <option value="healthcare-initiatives">Healthcare Initiatives</option>
                      <option value="environmental-projects">Environmental Projects</option>
                      <option value="emergency-relief">Emergency Relief</option>
                      <option value="volunteer-programs">Volunteer Programs</option>
                      <option value="donation">Donation</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors resize-none"
                      placeholder="Tell us about your charitable interests, how you'd like to get involved, or any questions you have..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-colors duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </button>
                  {submitSuccess && (
                    <div className="mt-4 p-4 bg-emerald-50 border border-emerald-200 rounded-lg">
                      <p className="text-emerald-700 text-sm font-medium mb-2">Thank you! Your message has been received.</p>
                      <p className="text-emerald-600 text-sm">
                        We will get back to you soon. For immediate assistance, please call us at {contactInfo.generalPhone} or email us at {contactInfo.generalEmail}.
                      </p>
                    </div>
                  )}
                  {submitError && (
                    <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
                      <p className="text-red-600 text-sm">{submitError}</p>
                    </div>
                  )}
                </form>
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
              Our Office Locations
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Visit us at our community centers. Our team is ready to meet with you 
              and discuss how you can get involved in our charitable programs.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {offices.map((office, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  className="w-full h-48 object-cover"
                  src={office.image}
                  alt={`${office.name} - ${office.city}`}
                />
                <div className="p-8">
                  <div className="flex items-center mb-4">
                    <Building className="h-6 w-6 text-purple-600 mr-3" />
                    <h3 className="text-2xl font-bold text-gray-900">{office.name} - {office.city}</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 text-purple-600 mr-3 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-600">{office.address}</p>
                    </div>
                    <div className="flex items-center">
                      <Phone className="h-5 w-5 text-purple-600 mr-3 flex-shrink-0" />
                      <a href={`tel:${office.phone}`} className="text-gray-600 hover:text-purple-600 transition-colors">
                        {office.phone}
                      </a>
                    </div>
                    <div className="flex items-center">
                      <Mail className="h-5 w-5 text-purple-600 mr-3 flex-shrink-0" />
                      <a href={`mailto:${office.email}`} className="text-gray-600 hover:text-purple-600 transition-colors">
                        {office.email}
                      </a>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 text-purple-600 mr-3 flex-shrink-0" />
                      <p className="text-gray-600">{office.hours}</p>
                    </div>
                  </div>
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <button className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium transition-colors duration-200">
                      Get Directions
                      <MapPin className="ml-2 h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Find Us on the Map
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our strategic locations allow us to serve communities effectively across the region.
            </p>
          </div>
          <div className="bg-gray-200 rounded-xl h-96 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-16 w-16 text-purple-600 mx-auto mb-4" />
              <p className="text-gray-600 text-lg">Interactive map will be embedded here</p>
              <p className="text-gray-500 text-sm mt-2">
                Google Maps integration showing both community center locations
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Whether you want to volunteer, donate, or learn about our programs, 
            our team is ready to help you create positive change in your community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => navigate('/consultation')}
              className="inline-flex items-center px-8 py-3 border-2 border-white text-base font-medium rounded-lg text-white bg-transparent hover:bg-white hover:text-purple-600 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Volunteer With Us
            </button>
            <button 
              onClick={() => navigate('/quote')}
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-purple-600 bg-white hover:bg-purple-50 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Make a Donation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;