import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useLocalStorage from '../../hooks/useLocalStorage';

const AuthRouter = ({ children }) => {
  const [isLogin] = useLocalStorage('token');
  const navigate = useNavigate();

  useEffect(() => {
    if (isLogin) {
      navigate('/todo');
    }
  }, []);

  return children;
};

export default AuthRouter;