import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import LogoUpload from './LogoUpload';
import { defaultContactInfo } from '../data/contactInfo';
import type { ContactInfo } from '../data/contactInfo';

const Footer = () => {
  const [contactInfo, setContactInfo] = useState<ContactInfo>(defaultContactInfo);

  useEffect(() => {
    // Load contact info from localStorage
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
    <footer className="bg-purple-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="text-white bg-purple-600 p-4 rounded-lg">
              <LogoUpload textColor="light" />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Dedicated to empowering children worldwide through education, healthcare, and community support programs 
              that create lasting positive change in their lives.
            </p>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-purple-400 border-b border-purple-600 pb-2">Our Programs</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Child Welfare Programs</li>
              <li>Education Initiatives</li>
              <li>Healthcare & Nutrition</li>
              <li>Community Development</li>
              <li>Emergency Relief</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-purple-400 border-b border-purple-600 pb-2">Quick Links</h3>
            <ul className="space-y-2">
              {['About Us', 'Events'].map((link) => (
                <li key={link}>
                  <Link
                    to={`/${link.toLowerCase().replace(' ', '').replace('our', '')}`}
                    className="text-gray-300 hover:text-purple-400 transition-colors duration-200 text-sm"
                  >
                    {link}
                  </Link>
                </li>
              ))}
              {/* Hidden links for future use */}
              {['Programs', 'Impact', 'Volunteer'].map((link) => (
                <li key={link} className="text-gray-500 text-sm">
                  {link} <span className="text-xs">(Coming Soon)</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-purple-400 border-b border-purple-600 pb-2">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-purple-400 mt-1 flex-shrink-0" />
                <div className="text-sm">
                  <p className="font-medium text-white">Main Office:</p>
                  {contactInfo.headOffice.address.split('\n').map((line, index) => (
                    <p key={index} className="text-gray-300">{line}</p>
                  ))}
                  <p className="mt-2 font-medium text-white">Branch:</p>
                  <p className="text-gray-300">{contactInfo.annexOffice.address}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-purple-400 flex-shrink-0" />
                <span className="text-sm text-gray-300">{contactInfo.generalPhone}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-purple-400 flex-shrink-0" />
                <span className="text-sm text-gray-300">{contactInfo.generalEmail}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-4 w-4 text-purple-400 flex-shrink-0" />
                <span className="text-sm text-gray-300">Mon-Fri: 9AM-5PM</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="text-center">
            <p className="text-sm text-gray-300">
              © 2024 Children 4 World Children. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;