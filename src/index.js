import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GlobalStyle from './style/globalStyle';
import AuthRouter from './components/auth/AuthRouter';
import Auth from './pages/Auth';
import Todo from './pages/Todo';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <AuthRouter>
              <Auth />
            </AuthRouter>
          }
        />
        <Route path="/todo" element={<Todo />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
