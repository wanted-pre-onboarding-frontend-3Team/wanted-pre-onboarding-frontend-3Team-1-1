import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ModelContext } from './store/ModelContext';
import React from 'react';
import { TodoContext } from './store/TodoContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ModelContext>
        <TodoContext>
          <App />
        </TodoContext>
      </ModelContext>
    </BrowserRouter>
  </React.StrictMode>,
);
