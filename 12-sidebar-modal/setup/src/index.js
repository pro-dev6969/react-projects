import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {AppProvider} from './context' // for context , also , this line can't be written below next line

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>
);
