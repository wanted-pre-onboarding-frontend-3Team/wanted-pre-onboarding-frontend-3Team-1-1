import { useCallback, useContext, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import AuthButton from '../UI/AuthButton';
import useHttp from '../../hooks/useHttp';

import AuthEmail from './AuthEmail';
import AuthPassword from './AuthPassword';
import AuthContext from '../../store/auth/authContext';

const AuthForm = ({ loginPage, changeLoginPage }) => {
  const [isValid, setIsValid] = useState({ email: false, password: false });
  const [formIsValid, setFormIsValid] = useState(false);

  const authCtx = useContext(AuthContext);

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const sendRequest = useHttp();

  useEffect(() => {
    emailRef.current.focus();
    emailRef.current.value = '';
    passwordRef.current.value = '';
  }, [loginPage]);

  useEffect(() => {
    const isValidForm = Object.values(isValid).every((valid) => valid === true);

    setFormIsValid(isValidForm);
  }, [isValid]);

  const successHandler = (data) => {
    if (loginPage) {
      authCtx.setLogin(data.access_token);
    } else {
      alert('회원가입 되었습니다.');
    }
    changeLoginPage(true);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    sendRequest(
      {
        url: loginPage ? 'auth/signin' : 'auth/signup',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: {
          email: emailRef.current.value,
          password: passwordRef.current.value,
        },
      },
      successHandler,
    );
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
      {loginPage && <AuthButton title="회원가입" onClick={() => changeLoginPage(false)} />}
    </>
  );
};

const AuthFormWrapper = styled.form`
  margin-top: 30px;
`;

export default AuthForm;
