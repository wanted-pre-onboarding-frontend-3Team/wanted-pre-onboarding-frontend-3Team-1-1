import { useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from './authContext';

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

  const loginHandler = useCallback(
    (dataToken) => {
      localStorage.setItem('token', dataToken);
      navigate('/todo');
    },
    [navigate],
  );

  const authContext = useMemo(
    () => ({ isLoggedIn: !!localStorage.getItem('token'), setLogin: loginHandler }),
    [loginHandler],
  );

  return <AuthContext.Provider value={authContext}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
