import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot from react-dom/client
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const root = createRoot(document.getElementById('root')); // Use createRoot from react-dom/client
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
