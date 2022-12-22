import { useCallback, useContext, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import useHttp from '../../hooks/useHttp';
import AuthContext from '../../store/auth/authContext';
import AuthEmail from './AuthEmail';
import AuthPassword from './AuthPassword';
import AuthButton from '../UI/AuthButton';

const LoginForm = () => {
  const [isValid, setIsValid] = useState({ email: false, password: false });
  const [formIsValid, setFormIsValid] = useState(false);

  const navigate = useNavigate();
  const authCtx = useContext(AuthContext);

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const { sendRequest, error } = useHttp();

  useEffect(() => {
    emailRef.current.focus();
    emailRef.current.value = '';
    passwordRef.current.value = '';
  }, []);

  useEffect(() => {
    const isValidForm = Object.values(isValid).every((valid) => valid === true);

    setFormIsValid(isValidForm);
  }, [isValid]);

  const successHandler = (data) => {
    authCtx.setLogin(data.access_token);
    navigate('/', { replace: true });
  };

  const loginHandler = (e) => {
    e.preventDefault();

    sendRequest(
      {
        url: '/auth/signin',
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

  const inputValidHandler = useCallback((field, valid) => setIsValid((prev) => ({ ...prev, [field]: valid })), []);
  const signupNavigateHandler = () => navigate('/auth?page=signup');

  return (
    <>
      <FormWrapper onSubmit={loginHandler}>
        <AuthEmail inputRef={emailRef} validHandler={inputValidHandler} />
        <AuthPassword inputRef={passwordRef} validHandler={inputValidHandler} />
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <AuthButton title="로그인" disabled={!formIsValid} />
      </FormWrapper>
      <AuthButton title="회원가입" onClick={signupNavigateHandler} />
    </>
  );
};

const FormWrapper = styled.form`
  margin-top: 30px;
`;

const ErrorMessage = styled.p`
  color: red;
  margin: 5px 0;
  text-align: center;
`;

export default LoginForm;
