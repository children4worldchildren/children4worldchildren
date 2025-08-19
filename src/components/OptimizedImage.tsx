import { useState, useRef, useEffect, useCallback } from 'react';
import { trackImageLoad } from '../utils/performance';

type ImageLoading = 'lazy' | 'eager';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  loading?: ImageLoading;
  sizes?: string;
  priority?: boolean;
  onLoad?: () => void;
  onError?: (error: string) => void;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = '',
  loading = 'lazy',
  sizes = '100vw',
  priority = false,
  onLoad,
  onError
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const imgRef = useRef<HTMLImageElement>(null);
  const loadStartTime = useRef<number>(0);

  useEffect(() => {
    if (priority) {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          loadStartTime.current = performance.now();
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '50px 0px',
        threshold: 0.1
      }
    );

    const currentRef = imgRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
      observer.disconnect();
    };
  }, [priority]);

  const handleLoad = useCallback(() => {
    setIsLoaded(true);
    const loadTime = performance.now() - loadStartTime.current;
    trackImageLoad(src, loadTime);
    onLoad?.();
  }, [onLoad, src]);

  const handleError = useCallback(() => {
    const errorMsg = `Failed to load image: ${src}`;
    console.warn(errorMsg);
    onError?.(errorMsg);
  }, [onError, src]);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {!isLoaded && isInView && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
      )}
      {isInView && (
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          loading={loading}
          sizes={sizes}
          onLoad={handleLoad}
          onError={handleError}
          className={`transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          } ${className}`}
          decoding={priority ? 'sync' : 'async'}
          fetchPriority={priority ? 'high' : 'auto'}
        />
      )}
    </div>
  );
};

export default OptimizedImage;