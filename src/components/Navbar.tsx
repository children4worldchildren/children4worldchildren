import React from 'react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import LogoUpload from './LogoUpload';

interface NavItem {
  name: string;
  href: string;
  isButton?: boolean;
}
// import { useAuth } from '../contexts/AuthContext';
// import LoginModal from './LoginModal';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const [showLoginModal, setShowLoginModal] = useState(false);
  const location = useLocation();
  // const { isAuthenticated, user } = useAuth();

  const navigation: NavItem[] = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    // { name: 'Programs', href: '/programs' },
    { name: 'Events', href: '/events' },
    // { name: 'Impact', href: '/impact' },
    // { name: 'Volunteer', href: '/volunteer' },
    { name: 'Contact', href: '/contact' },
    { 
      name: 'Support', 
      href: '/donate', 
      isButton: true 
    },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 relative">
            <div className="flex-shrink-0">
              <Link to="/" className="flex items-center space-x-2 cursor-pointer">
                <LogoUpload />
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-6 mr-8">
              {navigation.map((item) => {
                const isActiveLink = isActive(item.href);
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`
                      text-sm font-medium transition-all duration-200
                      ${item.isButton 
                        ? `
                          ml-2 px-4 py-2 rounded-lg shadow-md 
                          ${isActiveLink 
                            ? 'bg-purple-800 text-white shadow-inner' 
                            : 'bg-purple-600 text-white hover:bg-purple-700 hover:shadow-lg hover:-translate-y-0.5'
                          }
                          text-white hover:text-white active:text-white
                        ` 
                        : `
                          px-2 py-2
                          ${isActiveLink 
                            ? 'text-purple-600 border-b-2 border-purple-600' 
                            : 'text-gray-700 hover:text-purple-600 hover:border-b-2 hover:border-purple-300'
                          }
                        `
                      }
                    `}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-2">
              {/* {isAuthenticated ? (
                <Link
                  to="/admin"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-emerald-600 hover:text-emerald-700 transition-colors"
                >
                  <Settings className="h-4 w-4" />
                </Link>
              ) : (
                <button
                  onClick={() => setShowLoginModal(true)}
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-emerald-600 hover:text-emerald-700 transition-colors"
                >
                  Login
                </button>
              )} */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-700 hover:text-purple-600 p-2 min-w-[44px] min-h-[44px] flex items-center justify-center"
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => {
                const isActiveLink = isActive(item.href);
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`
                      block px-4 py-3 text-base font-medium transition-colors duration-200
                      ${item.isButton
                        ? `
                          mx-2 my-1 rounded-lg text-center
                          ${isActiveLink
                            ? 'bg-purple-800 text-white shadow-inner'
                            : 'bg-purple-600 text-white hover:bg-purple-700'
                          }
                          text-white hover:text-white active:text-white
                        `
                        : isActiveLink
                        ? 'text-purple-600 bg-purple-50'
                        : 'text-gray-700 hover:text-purple-600 hover:bg-purple-50'
                      }
                    `}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </nav>

      {/* Login Modal */}
      {/* <LoginModal
        isOpen={showLoginModal}
        onClose={() => setShowLoginModal(false)}
      /> */}
    </>
  );
};

export default Navbar;