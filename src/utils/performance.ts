// Performance monitoring utility
export const initPerformanceMonitoring = () => {
  // Monitor Core Web Vitals
  if ('PerformanceObserver' in window) {
    // Largest Contentful Paint (LCP)
    const lcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      console.log('LCP:', lastEntry.startTime);
      
      // Send to analytics if needed
      if (lastEntry.startTime > 2500) {
        console.warn('LCP is too slow:', lastEntry.startTime);
      }
    });
    lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

    // First Input Delay (FID)
    const fidObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        const fidEntry = entry as PerformanceEventTiming;
        console.log('FID:', fidEntry.processingStart - fidEntry.startTime);
        
        if (fidEntry.processingStart - fidEntry.startTime > 100) {
          console.warn('FID is too slow:', fidEntry.processingStart - fidEntry.startTime);
        }
      });
    });
    fidObserver.observe({ entryTypes: ['first-input'] });

    // Cumulative Layout Shift (CLS)
    let clsValue = 0;
    const clsObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry: any) => {
        if (!entry.hadRecentInput) {
          clsValue += entry.value;
          console.log('CLS:', clsValue);
          
          if (clsValue > 0.1) {
            console.warn('CLS is too high:', clsValue);
          }
        }
      });
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

// Image loading performance
export const trackImageLoad = (src: string, startTime: number) => {
  const img = new Image();
  img.onload = () => {
    const loadTime = performance.now() - startTime;
    console.log(`Image loaded: ${src} in ${loadTime}ms`);
    
    if (loadTime > 1000) {
      console.warn(`Slow image load: ${src} took ${loadTime}ms`);
    }
  };
  img.src = src;
};

// Component render performance
export const trackComponentRender = (componentName: string, startTime: number) => {
  const renderTime = performance.now() - startTime;
  console.log(`${componentName} render time:`, renderTime);
  
  if (renderTime > 16) { // 60fps threshold
    console.warn(`Slow component render: ${componentName} took ${renderTime}ms`);
  }
}; 