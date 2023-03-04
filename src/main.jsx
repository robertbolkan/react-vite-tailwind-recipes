import React from 'react';

import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { createRoot } from 'react-dom/client';
import "/src/styles/tailwind.css";

const basename = process.env.REACT_APP_MY_VARIABLE ? process.env.REACT_APP_MY_VARIABLE : '';

const root = createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter basename={basename}>
    <App />
  </BrowserRouter>
);