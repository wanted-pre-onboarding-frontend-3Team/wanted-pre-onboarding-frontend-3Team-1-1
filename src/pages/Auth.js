import React, { useState } from 'react';
import styled from 'styled-components';
import AuthForm from '../components/auth/AuthForm';

const Auth = () => {
  const [type, setType] = useState('회원가입');
  return <AuthForm type={type} setType={setType} />;
};

export default Auth;
