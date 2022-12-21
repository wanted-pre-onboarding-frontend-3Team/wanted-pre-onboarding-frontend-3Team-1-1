import { useCallback, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import JoinForm from '../components/auth/JoinForm';
import LoginForm from '../components/auth/LoginForm';

const Auth = () => {
  const [searchParams] = useSearchParams();

  const page = useMemo(() => {
    return searchParams.get('page') || 'login';
  }, [searchParams]);

  const Content = useCallback(() => {
    let component;

    if (page === 'login') {
      component = <LoginForm />;
    } else if (page === 'join') {
      component = <JoinForm />;
    }

    return component;
  }, [page]);

  return (
    <div>
      <Content />
    </div>
  );
};

export default Auth;
