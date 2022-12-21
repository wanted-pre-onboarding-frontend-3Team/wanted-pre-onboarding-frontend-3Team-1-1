import React from 'react';

import AuthContainer from '../components/auth';

import EventButton from '../components/auth/EventButton';

const Auth = () => {
  const [status, setStatus] = React.useState('LOGIN');
  return (
    <div>
      <h2>{status}</h2>
      <AuthContainer status={status} />
      <EventButton
        event={() => setStatus(status === 'LOGIN' ? 'SIGNUP' : 'LOGIN')}
        content={status === 'LOGIN' ? '로그인하기' : '회원가입하기'}
      />
    </div>
  );
};

export default Auth;
