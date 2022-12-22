import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../store/auth/authContext';

const Main = () => {
  const { isLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    const token = isLoggedIn;

    navigate(token ? '/todo' : '/auth');
  }, [navigate, isLoggedIn]);

  return <div>redirect</div>;
};

export default Main;
