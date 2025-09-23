import React, { useEffect, useMemo, useState } from 'react';

interface HeroBackgroundProps {
  children: React.ReactNode;
  className?: string;
  images?: string[];
  intervalMs?: number; // default 5000ms
  showWaves?: boolean;
  imagePosition?: string; // e.g., 'top center', 'center 20%'
}

const HeroBackground: React.FC<HeroBackgroundProps> = ({ children, className = '', images, intervalMs = 5000, showWaves = true, imagePosition = 'center center' }) => {
  const hasImages = Array.isArray(images) && images.length > 0;
  const slides = useMemo(() => images ?? [], [images]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!hasImages) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, Math.max(2000, intervalMs));
    return () => clearInterval(id);
  }, [hasImages, slides.length, intervalMs]);

  return (
    <section className={`relative overflow-hidden font-poppins ${className}`}>
      {/* Background layer */}
      {hasImages ? (
        <div className="absolute inset-0">
          {/* Image slides */}
          <div className="absolute inset-0">
            {slides.map((src, i) => (
              <img
                key={`${src}-${i}`}
                src={src}
                alt="Hero background"
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${i === index ? 'opacity-100' : 'opacity-0'}`}
                style={{ objectPosition: imagePosition }}
              />
            ))}
          </div>
          {/* Soft overlay to ensure text readability */}
          <div className="absolute inset-0 bg-white/60"></div>
        </div>
      ) : (
        // Fallback gradient if no images provided
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-purple-100 to-indigo-100"></div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="py-14 md:py-20">
          <div className="relative">
            <div className="relative z-20">
              {children}
            </div>
            {showWaves && (
              <div className="absolute bottom-0 left-0 right-0 z-10">
                <svg className="w-full h-24 md:h-32 text-purple-200" viewBox="0 0 1200 120" preserveAspectRatio="none">
                  <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".3" fill="currentColor"></path>
                  <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" fill="currentColor"></path>
                  <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" opacity=".7" fill="currentColor"></path>
                </svg>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBackground;