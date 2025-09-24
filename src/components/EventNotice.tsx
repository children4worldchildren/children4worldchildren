import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, MapPin, Award, Activity, ArrowRight } from 'lucide-react';
import '../styles/eventNotice.css';

const EVENT_DATE = new Date('2025-11-01T15:00:00');
const STORAGE_KEY = 'sports_event_notice_dismissed';

interface EventNoticeProps {
  onDismiss?: () => void;
}

const EventNotice: React.FC<EventNoticeProps> = ({ onDismiss }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const today = new Date();
  const timeDiff = EVENT_DATE.getTime() - today.getTime();
  const daysUntilEvent = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
  const eventHasPassed = timeDiff < 0;

  useEffect(() => {
    if (eventHasPassed) return;
    
    const hasDismissed = localStorage.getItem(STORAGE_KEY);
    if (!hasDismissed) {
      const timer = setTimeout(() => setIsVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, [eventHasPassed]);

  const handleClose = () => {
    setIsClosing(true);
    localStorage.setItem(STORAGE_KEY, 'true');
    
    if (onDismiss) onDismiss();
    
    setTimeout(() => {
      setIsVisible(false);
      setIsClosing(false);
    }, 300);
  };

  if (!isVisible || eventHasPassed) return null;

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
      <div className="relative w-full max-w-2xl mx-4 my-8 max-h-[calc(100vh-4rem)] flex flex-col">
        {/* Animated background */}
        <div className="absolute inset-0 rounded-lg overflow-hidden">
          <div style={waveStyle} />
        </div>
        
        {/* Content */}
        <div className="relative bg-white/95 rounded-lg shadow-lg flex flex-col z-10 overflow-hidden">
          <div className="p-6 overflow-y-auto flex-1">
            <div className="flex justify-end mb-2">
              <button
                onClick={handleClose}
                className="text-gray-700 hover:text-gray-900 focus:outline-none z-20"
                aria-label="Close notice"
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="relative z-10">
              <div className="text-center mb-6">
                <div className="flex items-center justify-center mb-2">
                  <div className="bg-purple-100 p-3 rounded-full mr-4">
                    <Activity className="h-8 w-8 text-purple-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-purple-800">Sports Across the World 2025</h2>
                </div>
                <p className="text-purple-700 font-medium text-xl">
                  {daysUntilEvent > 0 
                    ? `Only ${daysUntilEvent} day${daysUntilEvent !== 1 ? 's' : ''} to go!`
                    : "Today's the day! Join us!"}
                </p>
              </div>
              
              <div className="bg-purple-50 rounded-xl p-6 mb-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Calendar className="h-5 w-5 text-purple-600 mt-0.5 mr-3 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-gray-900">Date</p>
                        <p className="text-gray-700">{formattedDate}</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Clock className="h-5 w-5 text-purple-600 mt-0.5 mr-3 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-gray-900">Time</p>
                        <p className="text-gray-700">3:00 PM - 6:30 PM</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 text-purple-600 mt-0.5 mr-3 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-gray-900">Location</p>
                        <p className="text-gray-700">
                          Mulhuddart Community Centre,<br />
                          Dublin 15
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Award className="h-5 w-5 text-purple-600 mt-0.5 mr-3 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-gray-900">Highlights</p>
                        <ul className="list-disc list-inside text-gray-700 space-y-1 mt-1">
                          <li>Free sports activities</li>
                          <li>Cultural performances</li>
                          <li>Community networking</li>
                          <li>Fun for all ages</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded-lg border border-purple-100 mb-6">
                <p className="text-gray-700 text-center mb-4">
                  A fun-filled day where people of all ages, cultures, and backgrounds come together to play, 
                  connect and celebrate through sport and games!
                </p>
                <p className="text-purple-700 font-medium text-center mb-4">
                  Don't miss out on this exciting community event! Register now to secure your spot.
                </p>
                <div className="text-center">
                  <a
                    href="https://www.eventbrite.ie/e/sports-across-the-world-2025-tickets-1732112076849?aff=oddtdtcreator"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-colors"
                  >
                    <span>Register Now on Eventbrite</span>
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </div>
              </div>
              
              <div className="text-center text-sm text-gray-600 mb-6">
                <p>Questions? Email us at <a href="mailto:hello@children4worldchildren.com" className="text-purple-600 hover:underline">hello@children4worldchildren.com</a></p>
              </div>
            </div>
          </div>
          
          <div className="bg-white border-t border-gray-100 px-6 py-4 z-10">
            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <a
                href="https://www.eventbrite.ie/e/sports-across-the-world-2025-tickets-1732112076849?aff=oddtdtcreator"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
              >
                View Event Details
              </a>
              <button
                onClick={handleClose}
                className="inline-flex items-center justify-center px-6 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
              >
                Remind Me Later
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventNotice;
