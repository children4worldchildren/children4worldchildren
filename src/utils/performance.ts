// Performance monitoring utility
type PerformanceEntryWithProcessingStart = PerformanceEntry & {
  processingStart?: number;
  startTime: number;
  value?: number;
  hadRecentInput?: boolean;
};

type PerformanceMetric = {
  name: string;
  value: number;
  timestamp: number;
};

export const initPerformanceMonitoring = (): void => {
  // Monitor Core Web Vitals
  if ('PerformanceObserver' in window) {
    // Largest Contentful Paint (LCP)
    const lcpObserver = new PerformanceObserver((list) => {
      try {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1] as PerformanceEntryWithProcessingStart;
        const metric: PerformanceMetric = {
          name: 'LCP',
          value: lastEntry.startTime,
          timestamp: Date.now()
        };
        
        console.log('LCP:', metric.value.toFixed(2), 'ms');
        
        if (metric.value > 2500) {
          console.warn('⚠️ LCP is too slow:', metric.value.toFixed(2), 'ms');
          // TODO: Send to analytics service
        }
      } catch (error) {
        console.error('Error in LCP observer:', error);
      }
    });
    lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

    // First Input Delay (FID)
    const fidObserver = new PerformanceObserver((list) => {
      try {
        const entries = list.getEntries() as PerformanceEntryWithProcessingStart[];
        entries.forEach((entry) => {
          if (entry.entryType === 'first-input' && entry.processingStart) {
            const delay = entry.processingStart - entry.startTime;
            const metric: PerformanceMetric = {
              name: 'FID',
              value: delay,
              timestamp: Date.now()
            };
            
            console.log('FID:', metric.value.toFixed(2), 'ms');
            
            if (delay > 100) {
              console.warn('⚠️ FID is too slow:', metric.value.toFixed(2), 'ms');
              // TODO: Send to analytics service
            }
          }
        });
      } catch (error) {
        console.error('Error in FID observer:', error);
      }
    });
    fidObserver.observe({ entryTypes: ['first-input'] });

    // Cumulative Layout Shift (CLS)
    let clsValue = 0;
    const clsObserver = new PerformanceObserver((list) => {
      try {
        const entries = list.getEntries() as PerformanceEntryWithProcessingStart[];
        entries.forEach((entry) => {
          if (!entry.hadRecentInput && entry.value !== undefined) {
            clsValue += entry.value;
            const metric: PerformanceMetric = {
              name: 'CLS',
              value: clsValue,
              timestamp: Date.now()
            };
            
            console.log('CLS:', metric.value.toFixed(4));
            
            if (clsValue > 0.1) {
              console.warn('⚠️ CLS is too high:', metric.value.toFixed(4));
              // TODO: Send to analytics service
            }
          }
        });
      } catch (error) {
        console.error('Error in CLS observer:', error);
      }
    });
    clsObserver.observe({ entryTypes: ['layout-shift'] });
  }

  // Monitor page load time
  window.addEventListener('load', () => {
    const loadTime = performance.now();
    console.log('Page load time:', loadTime);
    
    // Navigation Timing API
    if ('navigation' in performance) {
      const nav = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      console.log('DOM Content Loaded:', nav.domContentLoadedEventEnd - nav.domContentLoadedEventStart);
      console.log('Load Complete:', nav.loadEventEnd - nav.loadEventStart);
    }
  });
};

// Track image loading performance
export const trackImageLoad = (src: string, startTime: number): void => {
  const img = new Image();
  img.onload = () => {
    try {
      const loadTime = performance.now() - startTime;
      console.log(`🖼️ Image loaded in ${loadTime.toFixed(2)}ms:`, src);
      
      if (loadTime > 1000) {
        console.warn(`⚠️ Slow image load (${loadTime.toFixed(2)}ms):`, src);
        // TODO: Send to analytics service
      }
    } catch (error) {
      console.error('Error tracking image load:', error);
    }
  };
  img.src = src;
};

// Track component render performance
export const trackComponentRender = (componentName: string, startTime: number): void => {
  try {
    const renderTime = performance.now() - startTime;
    console.log(`⚡ ${componentName} rendered in ${renderTime.toFixed(2)}ms`);
    
    if (renderTime > 50) {
      console.warn(`⚠️ Slow render (${renderTime.toFixed(2)}ms) in component:`, componentName);
      // TODO: Send to analytics service
    }
  } catch (error) {
    console.error('Error tracking component render:', error);
  }
};