import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
// import { AuthProvider } from './contexts/AuthContext';
import { initPerformanceMonitoring } from './utils/performance';
import './index.css';

// Initialize performance monitoring
initPerformanceMonitoring();

// Register service worker for caching and offline support
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then((registration) => {
        console.log('SW registered: ', registration);
      })
      .catch((registrationError) => {
        console.log('SW registration failed: ', registrationError);
      });
  });
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <AuthProvider> */}
      <App />
    {/* </AuthProvider> */}
  </StrictMode>
);
