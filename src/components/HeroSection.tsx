import React from 'react';
import HeroBackground from './HeroBackground';

interface HeroSectionProps {
  title: string | React.ReactNode;
  subtitle?: string;
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  children?: React.ReactNode;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  className = '',
  titleClassName = '',
  subtitleClassName = '',
  children,
}) => {
  return (
    <HeroBackground className={className}>
      <div className="text-center max-w-4xl mx-auto px-4">
        <h1 className={`text-4xl md:text-5xl lg:text-6xl font-normal text-gray-900 leading-tight tracking-tight ${titleClassName}`}>
          {title}
        </h1>
        {subtitle && (
          <p className={`mt-6 text-xl text-gray-700 max-w-3xl mx-auto ${subtitleClassName}`}>
            {subtitle}
          </p>
        )}
        {children}
      </div>
    </HeroBackground>
  );
};

export default HeroSection;
