import { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import AuthContext from './store/auth/authContext';
import Auth from './pages/Auth';
import Todo from './pages/Todo';
import GlobalStyle from './style/globalStyle';
import ProtectedRoute from './components/common/ProtectedRoute';

const App = () => {
  const authCtx = useContext(AuthContext);

  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute user={authCtx.isLoggedIn} path="/todo">
              <Auth />
            </ProtectedRoute>
          }
        />
        <Route
          path="/todo"
          element={
            <ProtectedRoute user={!authCtx.isLoggedIn} path="/">
              <Todo />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
};

export default App;
