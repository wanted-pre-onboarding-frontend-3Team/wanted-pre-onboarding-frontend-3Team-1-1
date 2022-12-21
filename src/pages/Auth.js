import React from 'react';

import AuthContainer from '../components/auth';

import EventButton from '../components/auth/EventButton';

import styled from 'styled-components';

const Auth = () => {
  const [status, setStatus] = React.useState('LOGIN');
  return (
    <AuthWrapper>
      <Title>{status}</Title>
      <AuthContainer status={status} />
      <EventButton
        event={() => setStatus(status === 'LOGIN' ? 'SIGNUP' : 'LOGIN')}
        content={status === 'LOGIN' ? '회원가입하기' : '로그인하기'}
      />
    </AuthWrapper>
  );
};
export const Title = styled.h2`
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 5px;
  margin-bottom: 20px;
  margin-left: 5px;
`;
const AuthWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0 auto;
`;
export default Auth;
