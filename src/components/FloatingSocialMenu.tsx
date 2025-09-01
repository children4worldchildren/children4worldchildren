import { useState, useEffect, useRef } from 'react';
import { Facebook, Instagram, Youtube, MessageCircle, Linkedin } from 'lucide-react';

const FloatingSocialMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Handle click outside to close menu
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (menuRef.current && !menuRef.current.contains(target) && 
          buttonRef.current && !buttonRef.current.contains(target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  const toggleMenu = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  const socialLinks = [
    { 
      name: 'linkedin', 
      icon: <Linkedin className="w-6 h-6" />, 
      url: 'https://www.linkedin.com/company/children-for-world-children',
      color: 'bg-red-600 hover:bg-red-700'
    },
    { 
      name: 'Facebook', 
      icon: <Facebook className="w-6 h-6" />, 
      url: 'https://facebook.com/Caring4worldchildren',
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

  return (
    <div className="fixed right-6 top-32 md:top-1/3 z-30">
      <div className="relative">
        {/* Social Media Buttons */}
        <div 
          ref={menuRef}
          className={`flex flex-col space-y-3 transition-all duration-300 ${
            isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
          }`}
          style={{
            position: 'absolute',
            right: 0,
            top: '100%',
            marginTop: '0.5rem',
            zIndex: 50
          }}
        >
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`${social.color} w-12 h-12 rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform`}
              aria-label={social.name}
              onClick={(e) => e.stopPropagation()}
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Main Floating Button */}
        <div className="relative group">
          <button
            ref={buttonRef}
            onClick={toggleMenu}
            className={`w-14 h-14 rounded-full bg-teal-600 hover:bg-teal-700 text-white flex items-center justify-center shadow-xl transition-transform duration-300 ${
              isOpen ? 'rotate-45' : ''
            }`}
            aria-label={isOpen ? 'Close menu' : 'Open social media menu'}
            aria-expanded={isOpen}
          >
            <MessageCircle className={`w-6 h-6 transition-transform ${isOpen ? 'rotate-90' : ''}`} />
          </button>
          <div className="hidden md:block absolute right-16 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-sm px-3 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
            Connect with us
            <div className="absolute top-1/2 right-0 w-2 h-2 bg-gray-900 translate-x-1/2 -translate-y-1/2 rotate-45"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FloatingSocialMenu;
