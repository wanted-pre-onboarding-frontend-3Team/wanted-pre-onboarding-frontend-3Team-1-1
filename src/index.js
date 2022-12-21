import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ModelContext } from './store/ModelContext';
import React from 'react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ModelContext>
        <App />
      </ModelContext>
    </BrowserRouter>
  </React.StrictMode>,
);
