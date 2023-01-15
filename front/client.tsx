import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './layouts/App';

const root = ReactDOM.createRoot(document.querySelector('#app') as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
