import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import AuthButton from '../UI/AuthButton';

import AuthEmail from './AuthEmail';
import AuthPassword from './AuthPassword';

const AuthForm = ({ loginPage, changeLoginPage }) => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  useEffect(() => {
    emailRef.current.focus();
    emailRef.current.value = '';
    passwordRef.current.value = '';
  }, [loginPage]);

  return (
    <>
      <AuthFormWrapper>
        <AuthEmail inputRef={emailRef} />
        <AuthPassword inputRef={passwordRef} />
        <AuthButton title={loginPage ? '로그인' : '회원가입'} disabled />
      </AuthFormWrapper>
      {loginPage && <AuthButton title="회원가입" onClick={changeLoginPage} />}
    </>
  );
};

const AuthFormWrapper = styled.form`
  margin-top: 30px;
`;

export default AuthForm;
