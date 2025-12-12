import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, MapPin, Award, ArrowRight, Music } from 'lucide-react';
import '../styles/eventNotice.css';

const EVENT_DATE = new Date('2025-12-13T15:00:00');
const STORAGE_KEY = 'med_day_concert_notice_dismissed';

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
    background: 'linear-gradient(90deg, #0f172a, #0369a1, #0ea5e9, #22d3ee, #0ea5e9, #0369a1, #0f172a)',
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
                <div className="flex flex-col items-center justify-center gap-3 mb-2">
                  <div className="flex items-center justify-center">
                    <div className="bg-sky-100 p-3 rounded-full mr-4">
                      <Music className="h-8 w-8 text-sky-600" />
                    </div>
                    <h2 className="text-3xl font-bold text-sky-900 text-center">Mediterranean Day Concert 2025</h2>
                  </div>
                  <span className="inline-flex items-center gap-2 bg-sky-900/10 text-sky-800 text-sm font-semibold px-3 py-1 rounded-full uppercase tracking-wide">Voices From the Grassroots</span>
                </div>
                <p className="text-sky-700 font-medium text-xl text-center">
                  {daysUntilEvent > 0
                    ? `Only ${daysUntilEvent} day${daysUntilEvent !== 1 ? 's' : ''} to go!`
                    : "Today's the day! Celebrate with us!"}
                </p>
              </div>
              
              <div className="bg-sky-50 rounded-xl p-6 mb-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Calendar className="h-5 w-5 text-sky-600 mt-0.5 mr-3 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-gray-900">Date</p>
                        <p className="text-gray-700">{formattedDate}</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Clock className="h-5 w-5 text-sky-600 mt-0.5 mr-3 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-gray-900">Time</p>
                        <p className="text-gray-700">3:00 PM - 7:00 PM</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 text-sky-600 mt-0.5 mr-3 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-gray-900">Location</p>
                        <p className="text-gray-700">
                          Draiocht Blanchardstown,<br />
                          Dublin 15, D15 RYX6
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Award className="h-5 w-5 text-sky-600 mt-0.5 mr-3 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-gray-900">Highlights</p>
                        <ul className="list-disc list-inside text-gray-700 space-y-1 mt-1">
                          <li>Energetic live performances from across the Mediterranean</li>
                          <li>Cultural showcases celebrating unity and diversity</li>
                          <li>Family-friendly atmosphere for all ages</li>
                          <li>Community voices amplified through "Voices From the Grassroots"</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded-lg border border-purple-100 mb-6">
                <p className="text-gray-700 text-center mb-4">
                  Join Children 4 World and partners from across the EU–Mediterranean region for an evening of music,
                  culture, and connection at Draiocht, Blanchardstown.
                </p>
                <p className="text-sky-700 font-medium text-center mb-4">
                  Experience the warmth of Mediterranean culture as communities come together to celebrate unity and shared heritage.
                </p>
                <div className="text-center">
                  <a
                    href="https://children4worldchildren.com/events"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 transition-colors"
                  >
                    <span>Explore Event Details</span>
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </div>
              </div>
              
              <div className="text-center text-sm text-gray-600 mb-6">
                <p>Questions? Email us at <a href="mailto:hello@children4worldchildren.com" className="text-sky-600 hover:underline">hello@children4worldchildren.com</a></p>
              </div>
            </div>
          </div>
          
          <div className="bg-white border-t border-gray-100 px-6 py-4 z-10">
            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <a
                href="https://children4worldchildren.com/events"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
              >
                View Event Details
              </a>
              <button
                onClick={handleClose}
                className="inline-flex items-center justify-center px-6 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
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
