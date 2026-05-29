import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { X, Calendar, Clock, MapPin, Award } from 'lucide-react';
import { getPrimaryFeaturedEvent, parseEventDate } from '../data/events';
import '../styles/eventNotice.css';

interface EventNoticeProps {
  onDismiss?: () => void;
}

const EventNotice: React.FC<EventNoticeProps> = ({ onDismiss }) => {
  const navigate = useNavigate();
  const event = getPrimaryFeaturedEvent();
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  // Per-event dismissal so a new featured event re-shows even if a previous
  // notice was dismissed.
  const storageKey = event ? `event_notice_dismissed_${event.slug}` : '';

  useEffect(() => {
    if (!event) return;

    const hasDismissed = localStorage.getItem(storageKey);
    if (!hasDismissed) {
      const timer = setTimeout(() => setIsVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, [event, storageKey]);

  if (!event) return null;

  const eventDate = parseEventDate(event.date);
  const today = new Date();
  const startOfToday = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  const daysUntilEvent = eventDate
    ? Math.round((eventDate.getTime() - startOfToday.getTime()) / (1000 * 60 * 60 * 24))
    : null;

  const handleClose = () => {
    setIsClosing(true);
    localStorage.setItem(storageKey, 'true');

    if (onDismiss) onDismiss();

    setTimeout(() => {
      setIsVisible(false);
      setIsClosing(false);
    }, 300);
  };

  const handleViewDetails = () => {
    localStorage.setItem(storageKey, 'true');
    if (onDismiss) onDismiss();
    setIsVisible(false);
    navigate('/events');
  };

  if (!isVisible) return null;

  // Animation style for the background
  const waveStyle = {
    position: 'absolute' as const,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(90deg, #2e1065, #5b21b6, #7c3aed, #a78bfa, #7c3aed, #5b21b6, #2e1065)',
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
                    <div className="bg-purple-100 p-3 rounded-full mr-4">
                      <Calendar className="h-8 w-8 text-purple-600" />
                    </div>
                    <h2 className="text-3xl font-bold text-purple-900 text-center">{event.title}</h2>
                  </div>
                  {event.theme && (
                    <span className="inline-flex items-center gap-2 bg-purple-900/10 text-purple-800 text-sm font-semibold px-3 py-1 rounded-full uppercase tracking-wide">{event.theme}</span>
                  )}
                </div>
                <p className="text-purple-700 font-medium text-xl text-center">
                  {daysUntilEvent !== null && daysUntilEvent > 0
                    ? `Only ${daysUntilEvent} day${daysUntilEvent !== 1 ? 's' : ''} to go!`
                    : "Today's the day! Celebrate with us!"}
                </p>
              </div>

              <div className="bg-purple-50 rounded-xl p-6 mb-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Calendar className="h-5 w-5 text-purple-600 mt-0.5 mr-3 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-gray-900">Date</p>
                        <p className="text-gray-700">{event.date}</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Clock className="h-5 w-5 text-purple-600 mt-0.5 mr-3 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-gray-900">Time</p>
                        <p className="text-gray-700">{event.time}</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 text-purple-600 mt-0.5 mr-3 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-gray-900">Location</p>
                        <p className="text-gray-700">{event.location}</p>
                      </div>
                    </div>
                  </div>
                  {Array.isArray(event.highlights) && event.highlights.length > 0 && (
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <Award className="h-5 w-5 text-purple-600 mt-0.5 mr-3 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-gray-900">Highlights</p>
                          <ul className="list-disc list-inside text-gray-700 space-y-1 mt-1">
                            {event.highlights.map((item, idx) => (
                              <li key={idx}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {event.contact && (
                <div className="text-center text-sm text-gray-600 mb-6">
                  <p>Questions? Email us at <a href={`mailto:${event.contact}`} className="text-purple-600 hover:underline">{event.contact}</a></p>
                </div>
              )}
            </div>
          </div>

          <div className="bg-white border-t border-gray-100 px-6 py-4 z-10">
            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <button
                onClick={handleViewDetails}
                className="inline-flex items-center justify-center px-6 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
              >
                View Event Details
              </button>
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
