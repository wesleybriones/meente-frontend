import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { MeenteAptnessApp } from './MeenteAptness.jsx';
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <MeenteAptnessApp />
    </BrowserRouter>
  </React.StrictMode>,
)
