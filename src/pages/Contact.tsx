import { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, Building, Clock, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Office } from '../data/offices';
import Map from '../components/Map';
import HeroSection from '../components/HeroSection';
import { offices } from '../data/offices';
import { defaultContactInfo } from '../data/contactInfo';

type FormData = {
  name: string;
  email: string;
  phone: string;
  organization: string;
  program: string;
  message: string;
};

const Contact: React.FC = () => {
  const [contactInfo, setContactInfo] = useState(defaultContactInfo);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    organization: '',
    program: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target as { name: keyof FormData; value: string };
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // In a real app, you would send the form data to your backend here
      console.log('Form submitted:', formData);
      
      // Show success message
      setSubmitSuccess(true);
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        organization: '',
        program: '',
        message: ''
      });
    } catch (error) {
      setSubmitError('An error occurred while submitting the form. Please try again.');
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    // Load saved contact info from localStorage
    const savedContactInfo = localStorage.getItem('charity_contact_info');
    if (savedContactInfo) {
      setContactInfo(JSON.parse(savedContactInfo));
    }

    // Listen for admin panel saves
    const handleAdminSave = () => {
      const updatedInfo = localStorage.getItem('charity_contact_info');
      if (updatedInfo) {
        setContactInfo(JSON.parse(updatedInfo));
      }
    };
    
    window.addEventListener('adminPanelSaved', handleAdminSave);
    return () => {
      window.removeEventListener('adminPanelSaved', handleAdminSave);
    };
  }, []);

  return (
    <div>
      {/* Header Section */}
      <HeroSection
        title={
          <>
            Contact <span className="text-purple-600">Us</span>
          </>
        }
        subtitle="We're here to help you with your charitable initiatives and answer any questions you may have."
      />

      {/* Contact Form & Info */}
      <div className="py-20 bg-white">
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
                      <p className="text-purple-100">Main Office: Dublin</p>
                      <p className="text-purple-100">Branch: Nigeria</p>
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
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
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
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
                        placeholder="your.email@example.com"
                      />
                    </div>
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
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
                        placeholder="+353 85 123-4567"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-2">
                        Organization (Optional)
                      </label>
                      <input
                        type="text"
                        id="organization"
                        name="organization"
                        value={formData.organization}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
                        placeholder="Your organization"
                      />
                    </div>
                    <div>
                      <label htmlFor="program" className="block text-sm font-medium text-gray-700 mb-2">
                        Program of Interest
                      </label>
                      <select
                        id="program"
                        name="program"
                        value={formData.program}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
                      >
                        <option value="">Select a program</option>
                        <option value="education">Education Programs</option>
                        <option value="healthcare">Healthcare Initiatives</option>
                        <option value="community">Community Development</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="mt-6">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>

                  <div className="mt-8">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        'Send Message'
                      )}
                    </button>
                    
                    {submitSuccess && (
                      <div className="mt-4 p-4 bg-green-50 text-green-700 rounded-lg">
                        Thank you for your message! We'll get back to you soon.
                      </div>
                    )}
                    
                    {submitError && (
                      <div className="mt-4 p-4 bg-red-50 text-red-700 rounded-lg">
                        {submitError}
                      </div>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Office Locations */}
      <div className="py-20 bg-gray-50">
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
          
          {/* Ireland Offices */}
          <div className="col-span-full">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <MapPin className="h-6 w-6 text-purple-600 mr-2" />
              Ireland Offices
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {offices
                .filter(office => office.country === 'Ireland')
                .map((office, index) => (
                  <OfficeCard key={index} office={office} />
                ))}
            </div>
          </div>

          {/* Other Countries 
          <div className="col-span-full mt-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Globe className="h-6 w-6 text-purple-600 mr-2" />
              International Offices
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {offices
                .filter(office => office.country !== 'Ireland')
                .map((office, index) => (
                  <OfficeCard key={index} office={office} />
                ))}
            </div>
          </div>*/}
        </div>
      </div>

      {/* Map Section - Commented out for future enhancement
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Find Us on the Map
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our strategic locations allow us to serve communities effectively across the region.
            </p>
          </div>
          <div className="rounded-xl overflow-hidden shadow-lg h-[500px] [&_.gm-style-iw-d]:!overflow-visible [&_.gm-style-iw-c]:!p-0 [&_.gm-style-iw-tc]:!hidden">
            <Map 
              center={{ lat: 20.0, lng: 10.0 }} // Centered between Dublin and Nigeria
              zoom={3}
              markers={offices.map(office => ({
                position: office.coordinates,
                title: `${office.name} - ${office.city}`
              }))}
            />
          </div>
        </div>
      </div>
      */}

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Changing lives through skills, education, and inclusion—one donation at a time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/volunteer"
              className="inline-flex items-center px-8 py-3 border-2 border-white text-base font-medium rounded-lg text-white bg-transparent opacity-50 pointer-events-none transition-all duration-200 shadow-lg"
              aria-disabled="true"
              title="Volunteer program coming soon"
            >
              Volunteer With Us
            </a>
            <Link 
              to="/donate"
              className="px-8 py-4 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200 text-lg"
            >
              Support Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

// Office Card Component
interface OfficeCardProps {
  office: Office;
}

const OfficeCard: React.FC<OfficeCardProps> = (props) => {
  const { office } = props;
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
      <div className="h-48 bg-gray-100 relative flex-shrink-0">
        <img 
          src={office.image} 
          alt={`${office.name} in ${office.city}`}
          className="w-full h-full object-cover"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = '/images/placeholder-office.jpg';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-4 left-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-600 text-white">
            <MapPin className="h-4 w-4 mr-1" />
            {office.city}, {office.country}
          </span>
        </div>
      </div>
      <div className="p-6 flex-grow flex flex-col">
        <div className="flex items-center mb-4">
          <Building className="h-5 w-5 text-purple-600 mr-2 flex-shrink-0" />
          <h3 className="text-xl font-bold text-gray-900">{office.name}</h3>
        </div>
        <div className="space-y-3 text-sm">
          <div className="flex">
            <MapPin className="h-5 w-5 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
            <p className="text-gray-600">{office.address}</p>
          </div>
          <div className="flex items-center">
            <Phone className="h-5 w-5 text-purple-600 mr-2 flex-shrink-0" />
            <a href={`tel:${office.phone}`} className="text-gray-600 hover:text-purple-600 transition-colors">
              {office.phone}
            </a>
          </div>
          <div className="flex items-center">
            <Mail className="h-5 w-5 text-purple-600 mr-2 flex-shrink-0" />
            <a href={`mailto:${office.email}`} className="text-gray-600 hover:text-purple-600 transition-colors text-sm">
              {office.email}
            </a>
          </div>
          <div className="flex items-center">
            <Clock className="h-5 w-5 text-purple-600 mr-2 flex-shrink-0" />
            <p className="text-gray-600">{office.hours}</p>
          </div>
        </div>
        <div className="mt-4 pt-4 border-t border-gray-200">
          <a 
            href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(office.address)}`}
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm text-purple-600 hover:text-purple-700 font-medium transition-colors duration-200"
          >
            Get Directions
            <MapPin className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;