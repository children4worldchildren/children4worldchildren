import React from 'react';

const EnvTest = () => {
  return (
    <div style={{ padding: '20px', background: '#f5f5f5', borderRadius: '8px', margin: '20px' }}>
      <h3>Environment Variables Test</h3>
      <p><strong>VITE_API_URL:</strong> {import.meta.env.VITE_API_URL || 'Not set'}</p>
      <p><strong>Google Maps API Key:</strong> {import.meta.env.VITE_GOOGLE_MAPS_API_KEY ? '✓ Set (hidden for security)' : 'Not set'}</p>
    </div>
  );
};

export default EnvTest;
