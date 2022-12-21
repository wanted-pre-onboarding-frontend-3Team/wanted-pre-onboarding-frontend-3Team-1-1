import { useCallback, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import AuthButton from '../UI/AuthButton';

import AuthEmail from './AuthEmail';
import AuthPassword from './AuthPassword';

const AuthForm = ({ loginPage, changeLoginPage }) => {
  const [isValid, setIsValid] = useState({ email: false, password: false });
  const [formIsValid, setFormIsValid] = useState(false);

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  useEffect(() => {
    emailRef.current.focus();
    emailRef.current.value = '';
    passwordRef.current.value = '';
  }, [loginPage]);

  useEffect(() => {
    const isValidForm = Object.values(isValid).every((valid) => valid === true);

    setFormIsValid(isValidForm);
  }, [isValid]);

  const submitHandler = (e) => {
    e.preventDefault();
  };

  const emailValidHandler = useCallback((valid) => setIsValid((prev) => ({ ...prev, email: valid })), []);
  const passwordValidHandler = useCallback((valid) => setIsValid((prev) => ({ ...prev, password: valid })), []);

  return (
    <>
      <AuthFormWrapper onSubmit={submitHandler}>
        <AuthEmail inputRef={emailRef} validHandler={emailValidHandler} />
        <AuthPassword inputRef={passwordRef} validHandler={passwordValidHandler} />
        <AuthButton title={loginPage ? '로그인' : '회원가입'} disabled={!formIsValid} />
      </AuthFormWrapper>
      {loginPage && <AuthButton title="회원가입" onClick={changeLoginPage} />}
    </>
  );
};

const AuthFormWrapper = styled.form`
  margin-top: 30px;
`;

export default AuthForm;
