import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import LogoUpload from './LogoUpload';

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

const Footer = () => {
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
  }, []);

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="text-white bg-emerald-600 p-4 rounded-lg">
              <LogoUpload textColor="light" />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Leading environmental consultancy and engineering services provider in Nigeria, 
              committed to sustainable development and environmental protection.
            </p>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-emerald-400 border-b border-emerald-600 pb-2">Our Services</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Environmental Consultancy</li>
              <li>Social Impact Assessment</li>
              <li>Engineering Design</li>
              <li>Waste Management</li>
              <li>Environmental Restoration</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-emerald-400 border-b border-emerald-600 pb-2">Quick Links</h3>
            <ul className="space-y-2">
              {['About Us', 'Services', 'Projects'/*, 'Compliance', 'Careers'*/].map((link) => (
                <li key={link}>
                  <Link
                    to={`/${link.toLowerCase().replace(' ', '')}`}
                    className="text-gray-300 hover:text-emerald-400 transition-colors duration-200 text-sm"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-emerald-400 border-b border-emerald-600 pb-2">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-emerald-400 mt-1 flex-shrink-0" />
                <div className="text-sm text-gray-300">
                  <p>Head Office: {contactInfo.headOffice.address}</p>
                  <p>Annex: {contactInfo.annexOffice.address}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                <span className="text-sm text-gray-300">{contactInfo.generalPhone}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                <span className="text-sm text-gray-300">{contactInfo.generalEmail}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                <span className="text-sm text-gray-300">Mon-Fri: 8AM-6PM</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              © 2024 Johnbabs Environmental and Engineering Services Ltd. All rights reserved.
            </p>
            {/* <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/policies" className="text-sm text-gray-400 hover:text-emerald-400 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/policies" className="text-sm text-gray-400 hover:text-emerald-400 transition-colors">
                Terms of Service
              </Link>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;