import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}
window.scrollTo(0, 0);

// Continuous guard on initial paint
let topChecks = 0;
const topInterval = setInterval(() => {
  if (window.scrollY > 0) {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
  }
  topChecks++;
  if (topChecks > 20) {
    clearInterval(topInterval);
  }
}, 50);

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Failed to find root element');
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
