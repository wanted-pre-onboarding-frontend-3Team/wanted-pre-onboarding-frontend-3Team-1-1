import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';

import LoginForm from '../components/auth/LoginForm';
import SignupForm from '../components/auth/SignupForm';

const Auth = () => {
  const [searchParams] = useSearchParams();

  const page = useMemo(() => searchParams.get('page') || 'login', [searchParams]);

  return (
    <AuthWrapper>
      {page === 'login' && <LoginForm />}
      {page === 'signup' && <SignupForm />}
    </AuthWrapper>
  );
};

const AuthWrapper = styled.div`
  width: 400px;
  margin: 60px auto 0;
`;

export default Auth;
