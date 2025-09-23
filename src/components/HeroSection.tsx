import React from 'react';
import HeroBackground from './HeroBackground';

interface HeroSectionProps {
  title: string | React.ReactNode;
  subtitle?: string;
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  children?: React.ReactNode;
  images?: string[];
  intervalMs?: number;
  showWaves?: boolean;
  imagePosition?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  className = '',
  titleClassName = '',
  subtitleClassName = '',
  children,
  images,
  intervalMs,
  showWaves,
  imagePosition,
}) => {
  return (
    <HeroBackground className={className} images={images} intervalMs={intervalMs} showWaves={showWaves} imagePosition={imagePosition}>
      <div className="text-center max-w-4xl mx-auto px-4">
        <div className="space-y-5">
          <h1 className={`text-3xl md:text-4xl lg:text-5xl font-medium text-gray-900 leading-tight tracking-tight ${titleClassName}`}>
            {title}
          </h1>
          {subtitle && (
            <p className={`text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed ${subtitleClassName}`}>
              {subtitle}
            </p>
          )}
        </div>
        {children}
      </div>
    </HeroBackground>
  );
};

export default HeroSection;