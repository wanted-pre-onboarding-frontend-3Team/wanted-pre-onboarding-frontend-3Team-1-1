import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Main = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');

    navigate(token ? '/todo' : '/auth');
  }, [navigate]);

  return <div>redirect</div>;
};

export default Main;
