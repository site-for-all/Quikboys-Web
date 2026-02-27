import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/App.tsx'
import "./styles/index.css";

import { HelmetProvider } from 'react-helmet-async';
import { initCloudWatchRUM } from './lib/cloudwatch-rum';

// Initialize CloudWatch RUM for analytics (non-blocking)
initCloudWatchRUM();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>,
)
