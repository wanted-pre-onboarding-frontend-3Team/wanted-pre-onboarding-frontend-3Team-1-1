import { useState } from 'react';
import styled from 'styled-components';
import AuthForm from '../components/auth/AuthForm';
import AuthTitle from '../components/auth/AuthTitle';

const Auth = () => {
  const [loginPage, setLoginPage] = useState(true);

  const changeLoginPageHandler = () => setLoginPage(false);

  return (
    <AuthWrapper>
      <AuthTitle title={loginPage ? '로그인' : '회원가입'} />
      <AuthForm loginPage={loginPage} changeLoginPage={changeLoginPageHandler} />
    </AuthWrapper>
  );
};

const AuthWrapper = styled.div`
  width: 400px;
  margin: 60px auto 0;
`;

export default Auth;
