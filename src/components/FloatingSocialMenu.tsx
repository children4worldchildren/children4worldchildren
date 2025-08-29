import { useState, useEffect } from 'react';
import { Facebook, Instagram, Youtube, Linkedin, X, MessageCircle } from 'lucide-react';

const FloatingSocialMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  // Handle scroll to hide/show the menu
  useEffect(() => {
    let scrollTimer: NodeJS.Timeout;
    
    const handleScroll = () => {
      setIsScrolling(true);
      clearTimeout(scrollTimer);
      scrollTimer = setTimeout(() => {
        setIsScrolling(false);
      }, 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimer);
    };
  }, []);

  // Toggle menu visibility
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Social media links
  const socialLinks = [
    { 
      name: 'Facebook', 
      icon: <Facebook className="w-6 h-6" />, 
      url: 'https://facebook.com/children4worldchildren',
      color: 'bg-blue-600 hover:bg-blue-700'
    },
    { 
      name: 'Instagram', 
      icon: <Instagram className="w-6 h-6" />, 
      url: 'https://instagram.com/children4worldchildren',
      color: 'bg-pink-600 hover:bg-pink-700'
    },
    { 
      name: 'YouTube', 
      icon: <Youtube className="w-6 h-6" />, 
      url: 'https://youtube.com/children4worldchildren',
      color: 'bg-red-600 hover:bg-red-700'
    },
  ];

  const handleTouchMove = (e: React.TouchEvent) => {
    // Prevent scrolling the background when touching the menu
    e.stopPropagation();
  };

  return (
    <div 
      className={`fixed right-6 top-32 md:top-1/3 z-50 transition-all duration-300 ease-in-out ${isScrolling ? 'opacity-0' : 'opacity-100'}`}
      onTouchMove={handleTouchMove}
    >
      <div className="relative" onTouchMove={handleTouchMove}>
        {/* Social Media Buttons */}
        <div 
          onTouchMove={(e) => e.stopPropagation()}
          onTouchStart={(e) => e.stopPropagation()}
          className={`flex flex-col space-y-3 transition-all duration-300 transform origin-top-right no-scrollbar touch-pan-y ${
            isOpen 
              ? 'opacity-100 translate-y-0 scale-100' 
              : 'opacity-0 translate-y-4 scale-95 pointer-events-none'
          }`}
          style={{ 
            position: 'absolute',
            right: 0,
            top: '100%',
            marginTop: '0.5rem',
            maxHeight: '60vh',
            overflowY: 'auto'
          }}
        >
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`${social.color} w-12 h-12 rounded-full flex items-center justify-center text-white shadow-lg transform hover:scale-110 transition-transform duration-200`}
              aria-label={social.name}
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Main Floating Button */}
        <div className="relative group">
          <button
            onClick={toggleMenu}
            className={`w-14 h-14 rounded-full bg-purple-600 hover:bg-purple-700 text-white flex items-center justify-center shadow-xl transform transition-all duration-300 ${isOpen ? 'rotate-45' : ''}`}
            aria-label="Connect with us on social media"
            aria-expanded={isOpen}
          >
            <MessageCircle className={`w-6 h-6 transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`} />
          </button>
          <div className="hidden md:block absolute right-16 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white text-sm px-3 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
            Connect & View our latest events!
            <div className="absolute top-1/2 right-0 w-2 h-2 bg-gray-900 transform translate-x-1/2 -translate-y-1/2 rotate-45"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FloatingSocialMenu;
