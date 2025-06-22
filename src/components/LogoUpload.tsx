import React, { useState, useEffect } from 'react';
import { Leaf, Upload, Loader2 } from 'lucide-react';
// import { useAuth } from '../contexts/AuthContext';
import apiService from '../services/api';

interface LogoUploadProps {
  showUpload?: boolean;
  textColor?: 'dark' | 'light';
}

const LogoUpload: React.FC<LogoUploadProps> = ({ showUpload = false, textColor = 'dark' }) => {
  // const { isAuthenticated } = useAuth();
  const [customLogo, setCustomLogo] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const defaultLogo = '/logo.png';

  useEffect(() => {
    loadLogo();
  }, []);

  const loadLogo = async () => {
    try {
      setIsLoading(true);
      setError(null);
      
      // Add timeout to prevent hanging
      const timeoutPromise = new Promise((_, reject) => 
        setTimeout(() => reject(new Error('Request timeout')), 3000)
      );
      
      const responsePromise = apiService.getImageUrl('logo');
      const response = await Promise.race([responsePromise, timeoutPromise]) as any;
      // Only set customLogo if the URL is valid and not empty
      if (response && response.url) {
        setCustomLogo(response.url);
      } else {
        setCustomLogo(null);
      }
    } catch (error) {
      console.log('No custom logo found or backend unavailable, using default');
      setCustomLogo(null);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogoUpload = async (file: File) => {
    // if (!isAuthenticated) {
    //   setError('You must be logged in to upload logo');
    //   return;
    // }

    try {
      setIsLoading(true);
      setError(null);
      
      // Create preview
      const reader = new FileReader();
      reader.onload = (e) => {
        setCustomLogo(e.target?.result as string);
      };
      reader.readAsDataURL(file);

      // Upload to server
      await apiService.uploadImage('logo', 'logo', file, 'Company logo');
      
      // Reload to get the new URL
      await loadLogo();
    } catch (error) {
      console.error('Logo upload failed:', error);
      setError(error instanceof Error ? error.message : 'Upload failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  if (showUpload) {
    return (
      <div className="bg-white border border-gray-200 rounded-lg p-4">
        <div className="mb-3">
          <h4 className="font-medium text-gray-900">Company Logo</h4>
          <p className="text-sm text-gray-600">Upload your company logo</p>
        </div>

        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 flex items-center justify-center bg-gray-50 rounded-lg">
            {isLoading ? (
              <Loader2 className="h-6 w-6 text-gray-400 animate-spin" />
            ) : customLogo ? (
              <img
                src={customLogo}
                alt="Company Logo"
                className="w-full h-full object-contain"
              />
            ) : (
              <img
                src={defaultLogo}
                alt="Company Logo"
                className="w-full h-full object-contain"
              />
            )}
          </div>
          
          <div className="flex-1">
            <input
              type="file"
              accept="image/*"
              onChange={(e) => {
                if (e.target.files && e.target.files[0]) {
                  handleLogoUpload(e.target.files[0]);
                }
              }}
              className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-emerald-50 file:text-emerald-700 hover:file:bg-emerald-100"
            />
            {error && (
              <div className="mt-2 text-sm text-red-600 bg-red-50 border border-red-200 rounded px-2 py-1">
                {error}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center space-x-2">
      <div className="flex items-center justify-center w-14 h-14">
        {isLoading ? (
          <Loader2 className="h-6 w-6 text-gray-400 animate-spin" />
        ) : customLogo ? (
          <img
            src={customLogo || defaultLogo}
            alt="Company Logo"
            className="w-full h-full object-contain rounded-full"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              if (target.src !== window.location.origin + defaultLogo) {
                target.src = defaultLogo;
              }
            }}
          />
        ) : (
          <img
            src={defaultLogo}
            alt="Company Logo"
            className="w-full h-full object-contain rounded-full"
          />
        )}
      </div>
      <div className="hidden sm:block min-w-48">
        <span className={`text-2xl font-bold ${textColor === 'light' ? 'text-white' : 'text-gray-900'}`}>Johnbabs</span>
        <div className={`text-sm font-medium ${textColor === 'light' ? 'text-emerald-300' : 'text-emerald-600'}`}>Environmental & Engineering</div>
      </div>
    </div>
  );
};

export default LogoUpload;