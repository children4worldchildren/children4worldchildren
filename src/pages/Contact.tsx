import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, Clock, Send, Building, Users } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import apiService from '../services/api';

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

  useEffect(() => {
    // Load contact info from localStorage
    const savedContactInfo = localStorage.getItem('johnbabs_contact_info');
    if (savedContactInfo) {
      setContactInfo(JSON.parse(savedContactInfo));
    }
    
    // Listen for admin panel saves
    const handleAdminSave = () => {
      const savedContactInfo = localStorage.getItem('johnbabs_contact_info');
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
    company: '',
    service: '',
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
      await apiService.submitContact(formData);
      setSubmitSuccess(true);
      setFormData({
        name: '', email: '', phone: '', company: '', service: '', message: ''
      });
    } catch (error: any) {
      setSubmitError(error.message || 'There was an error submitting your message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const offices = [
    {
      name: 'Head Office',
      city: 'F.C.T Abuja',
      address: contactInfo.headOffice.address,
      phone: contactInfo.headOffice.phone,
      email: contactInfo.headOffice.email,
      hours: 'Mon-Fri: 8:00 AM - 6:00 PM',
      image: 'https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      name: 'Annex Office',
      city: 'Rivers State',
      address: contactInfo.annexOffice.address,
      phone: contactInfo.annexOffice.phone,
      email: contactInfo.annexOffice.email,
      hours: 'Mon-Fri: 8:00 AM - 6:00 PM',
      image: 'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  return (
    <div className="pt-16">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-emerald-50 to-teal-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Contact <span className="text-emerald-600">Us</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Get in touch with our team of environmental and engineering experts. 
              We're here to help you with your project needs and answer any questions you may have.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-5 mb-12 lg:mb-0">
              <div className="bg-gradient-to-br from-emerald-600 to-teal-600 p-8 rounded-xl text-white h-full">
                <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
                <p className="text-emerald-100 mb-8 leading-relaxed">
                  Ready to start your environmental or engineering project? Contact us today 
                  for a consultation. Our expert team is here to provide customized solutions 
                  for your specific needs.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex items-center justify-center w-10 h-10 bg-emerald-500 rounded-lg mr-4 flex-shrink-0">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Phone</h3>
                      <p className="text-emerald-100">{contactInfo.generalPhone}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex items-center justify-center w-10 h-10 bg-emerald-500 rounded-lg mr-4 flex-shrink-0">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <p className="text-emerald-100">{contactInfo.generalEmail}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex items-center justify-center w-10 h-10 bg-emerald-500 rounded-lg mr-4 flex-shrink-0">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Locations</h3>
                      <p className="text-emerald-100">F.C.T Abuja (Head Office)</p>
                      <p className="text-emerald-100">Rivers State (Annex)</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex items-center justify-center w-10 h-10 bg-emerald-500 rounded-lg mr-4 flex-shrink-0">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Business Hours</h3>
                      <p className="text-emerald-100">Mon-Fri: 8:00 AM - 6:00 PM</p>
                      <p className="text-emerald-100">Sat: 9:00 AM - 2:00 PM</p>
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

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                      Service Interest
                    </label>
                    <select
                      id="service"
                      name="service"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors resize-none"
                      placeholder="Tell us about your project requirements, timeline, and any specific questions you have..."
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
                      <p className="text-emerald-700 text-sm">Thank you! Your message has been sent. We will get back to you soon.</p>
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
              Visit us at our offices in F.C.T Abuja and Rivers State. Our team is ready to meet with you 
              and discuss your project requirements.
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
                    <Building className="h-6 w-6 text-emerald-600 mr-3" />
                    <h3 className="text-2xl font-bold text-gray-900">{office.name} - {office.city}</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-600">{office.address}</p>
                    </div>
                    <div className="flex items-center">
                      <Phone className="h-5 w-5 text-emerald-600 mr-3 flex-shrink-0" />
                      <a href={`tel:${office.phone}`} className="text-gray-600 hover:text-emerald-600 transition-colors">
                        {office.phone}
                      </a>
                    </div>
                    <div className="flex items-center">
                      <Mail className="h-5 w-5 text-emerald-600 mr-3 flex-shrink-0" />
                      <a href={`mailto:${office.email}`} className="text-gray-600 hover:text-emerald-600 transition-colors">
                        {office.email}
                      </a>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 text-emerald-600 mr-3 flex-shrink-0" />
                      <p className="text-gray-600">{office.hours}</p>
                    </div>
                  </div>
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <button className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium transition-colors duration-200">
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
              Our strategic locations in F.C.T Abuja and Rivers State allow us to serve clients across Nigeria effectively.
            </p>
          </div>
          <div className="bg-gray-200 rounded-xl h-96 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-16 w-16 text-emerald-600 mx-auto mb-4" />
              <p className="text-gray-600 text-lg">Interactive map will be embedded here</p>
              <p className="text-gray-500 text-sm mt-2">
                Google Maps integration showing both Lagos and Abuja office locations
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Work Together?
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
            Whether you need environmental consulting, engineering design, or any of our specialized services, 
            our team is ready to help you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => navigate('/consultation')}
              className="inline-flex items-center px-8 py-3 border-2 border-white text-base font-medium rounded-full text-white bg-transparent hover:bg-white hover:text-emerald-600 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Schedule Consultation
            </button>
            <button 
              onClick={() => navigate('/quote')}
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-emerald-600 bg-white hover:bg-emerald-50 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Request Quote
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;