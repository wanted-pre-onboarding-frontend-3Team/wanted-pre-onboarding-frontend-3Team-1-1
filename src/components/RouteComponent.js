import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const PERMISSION_ALL = 0;
export const PERMISSION_LOGIN = 1;
export const PERMISSION_NOT_LOGIN = 2;

const RouteComponent = (props) => {
  const { permission, component: Component } = props;

  const navigate = useNavigate();

  const [render, setRender] = useState(false);

  useEffect(() => {
    let passed = false;

    const token = localStorage.getItem('token');

    if (token) {
      localStorage.setItem('token', token);
    }

    if (permission === PERMISSION_ALL) {
      passed = true;
    } else if (permission === PERMISSION_LOGIN) {
      if (token) {
        passed = true;
      }
    } else if (permission === PERMISSION_NOT_LOGIN) {
      if (!token) {
        passed = true;
      }
    }

    if (passed) {
      setRender(true);
    } else {
      navigate('/');
    }
  }, [navigate, permission]);

  return render && <Component />;
};

export default RouteComponent;
