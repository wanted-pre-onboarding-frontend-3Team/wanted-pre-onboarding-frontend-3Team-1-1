import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../store/auth/authContext';
import { PERMISSION_ALL, PERMISSION_LOGIN, PERMISSION_NOT_LOGIN } from '../../utils/permission';

const RouteComponent = ({ permission, component: Component }) => {
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();

  const [render, setRender] = useState(false);

  const { isLoggedIn } = authCtx;

  useEffect(() => {
    const token = isLoggedIn;
    let passed = false;

    if (permission === PERMISSION_ALL) passed = true;
    else if (permission === PERMISSION_LOGIN) {
      if (token) passed = true;
    } else if (permission === PERMISSION_NOT_LOGIN) {
      if (!token) passed = true;
    }

    if (passed) {
      setRender(true);
    } else {
      navigate('/');
    }
  }, [navigate, permission, isLoggedIn]);

  return render && <Component />;
};

export default RouteComponent;
