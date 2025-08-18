import React, { useEffect, useRef, useState } from 'react';

declare global {
  interface Window {
    initMap: () => void;
    google: typeof google;
  }
}

interface MapProps {
  center: {
    lat: number;
    lng: number;
  };
  zoom: number;
  markers?: Array<{
    position: {
      lat: number;
      lng: number;
    };
    title: string;
  }>;
}

const Map: React.FC<MapProps> = ({ center, zoom, markers = [] }) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [mapError, setMapError] = useState<string | null>(null);
  const [isApiLoaded, setIsApiLoaded] = useState(false);
  const googleMapRef = useRef<google.maps.Map | null>(null);

  // Load Google Maps API
  useEffect(() => {
    // Check if Google Maps API is already loaded
    if (window.google?.maps) {
      setIsApiLoaded(true);
      return;
    }

    // Check if script is already being loaded
    if (document.querySelector('#google-maps-script')) {
      const checkApiLoaded = setInterval(() => {
        if (window.google?.maps) {
          clearInterval(checkApiLoaded);
          setIsApiLoaded(true);
        }
      }, 100);
      return;
    }

    const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
    if (!apiKey) {
      setMapError('Google Maps API key is not configured');
      return;
    }

    const script = document.createElement('script');
    script.id = 'google-maps-script';
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places&callback=Function.prototype`;
    script.async = true;
    script.defer = true;
    script.onload = () => {
      if (window.google?.maps) {
        setIsApiLoaded(true);
      } else {
        setMapError('Google Maps API failed to load');
      }
    };
    script.onerror = () => setMapError('Failed to load Google Maps API');
    document.head.appendChild(script);

    return () => {
      const scriptElement = document.querySelector('#google-maps-script');
      if (scriptElement) {
        document.head.removeChild(scriptElement);
      }
    };
  }, []);

  // Initialize map when API is loaded
  useEffect(() => {
    if (!isApiLoaded || !mapRef.current) return;

    try {
      const map = new window.google.maps.Map(mapRef.current, {
        center,
        zoom,
        styles: [
          {
            featureType: 'poi',
            elementType: 'labels',
            stylers: [{ visibility: 'off' }],
          },
        ],
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: true,
      });

      googleMapRef.current = map;

      // Add markers
      markers.forEach((marker) => {
        new window.google.maps.Marker({
          position: marker.position,
          map,
          title: marker.title,
        });
      });
    } catch (error) {
      console.error('Error initializing map:', error);
      setMapError('Failed to initialize the map');
    }
  }, [center, zoom, markers, isApiLoaded]);

  if (mapError) {
    return (
      <div className="bg-gray-100 rounded-lg p-4 text-center text-red-600">
        {mapError}
      </div>
    );
  }

  if (!isApiLoaded) {
    return (
      <div className="bg-gray-100 rounded-lg p-4 text-center">
        Loading map...
      </div>
    );
  }

  return (
    <div
      ref={mapRef}
      className="w-full h-[400px] rounded-lg border border-gray-200"
      aria-label="Interactive map"
    />
  );
};

export default Map;
