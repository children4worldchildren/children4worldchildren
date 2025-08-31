import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, MapPin, Users, Info } from 'lucide-react';
import '../styles/eventNotice.css';

const EVENT_DATE = new Date('2025-09-13T11:30:00');
const STORAGE_KEY = 'event_notice_dismissed';

const EventNotice: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    if (new Date() > EVENT_DATE) return;
    
    // Always show the notice on page load
    const timer = setTimeout(() => setIsVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsClosing(true);
    // Don't store dismissal in localStorage
    setTimeout(() => {
      setIsVisible(false);
      setIsClosing(false);
    }, 300);
  };

  if (!isVisible) return null;

  const formattedDate = EVENT_DATE.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  // Animation style for the background
  const waveStyle = {
    position: 'absolute' as const,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(90deg, #6d28d9, #7c3aed, #8b5cf6, #9f7aea, #8b5cf6, #7c3aed, #6d28d9)',
    backgroundSize: '400% 100%',
    animation: 'gradient 10s ease infinite',
    WebkitAnimation: 'gradient 10s ease infinite',
    borderRadius: '0.5rem',
    zIndex: 0,
    opacity: 1,
  };

  return (
    <div className={`fixed inset-0 bg-black/50 flex items-center justify-center z-50 transition-opacity duration-300 ${isClosing ? 'opacity-0' : 'opacity-100'}`}>
      <div className="relative w-full max-w-md mx-4 h-auto max-h-[90vh] overflow-y-auto no-scrollbar">
        {/* Animated background */}
        <div className="absolute inset-0 rounded-lg overflow-hidden">
          <div style={waveStyle} />
        </div>
        
        {/* Content */}
        <div className="relative bg-white/95 rounded-lg shadow-lg flex flex-col min-h-[400px] z-10">
          <div className="p-6 pb-0 flex-1">
            <div className="flex justify-end mb-4">
              <button
                onClick={handleClose}
                className="text-gray-700 hover:text-gray-900 focus:outline-none z-20"
                aria-label="Close notice"
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="px-2 relative z-10">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-purple-800 mb-2">Annual General Meeting</h2>
                <p className="text-purple-700 font-medium text-lg">You're Invited!</p>
              </div>
              
              <div className="space-y-4 text-left mb-6 bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
                <div className="flex items-center">
                  <Calendar className="mr-3 text-purple-600 flex-shrink-0" size={20} />
                  <span className="text-gray-900 font-medium">{formattedDate}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="mr-3 text-purple-600 flex-shrink-0" size={20} />
                  <span className="text-gray-900 font-medium">11:30 AM - 2:00 PM</span>
                </div>
                <div className="flex items-start">
                  <MapPin className="mr-3 text-purple-600 flex-shrink-0 mt-0.5" size={20} />
                  <span className="text-gray-800">Blanchardstown Library (Virtual Link to be provided)</span>
                </div>
                <div className="flex items-start pt-1">
                  <Info className="mr-3 text-purple-600 flex-shrink-0 mt-0.5" size={18} />
                  <span className="text-gray-800">
                    Join us for an important update on our initiatives and future plans
                  </span>
                </div>
              </div>
              
              <p className="text-gray-700 mb-6 italic text-center text-sm">
                Working together to create a better future for young people and families worldwide
              </p>
              <div className="text-center text-sm text-gray-600 mb-6">
                <p>Questions? Email us at <a href="mailto:hello@children4worldchildren.com" className="text-purple-600 hover:underline">hello@children4worldchildren.com</a></p>
              </div>
            </div>
          </div>
          
          <div className="bg-white border-t border-gray-100 px-6 py-4 mt-auto rounded-b-lg z-10">
            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <button
                disabled
                className="inline-flex items-center justify-center px-6 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-purple-400 cursor-not-allowed opacity-70"
              >
                Registration Ongoing
              </button>
              <button
                disabled
                className="inline-flex items-center justify-center px-6 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-500 bg-gray-100 cursor-not-allowed"
              >
                Remind me later
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventNotice;
