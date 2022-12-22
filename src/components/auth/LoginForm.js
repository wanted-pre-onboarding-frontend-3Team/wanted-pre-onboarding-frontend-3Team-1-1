import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import AuthEmail from './AuthEmail';
import AuthPassword from './AuthPassword';
import AuthButton from '../UI/auth/AuthButton';
import useAuthForm from '../../hooks/useAuthForm';

const LoginForm = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const navigate = useNavigate();

  const { submitHandler, inputValidHandler, formIsValid, error } = useAuthForm({ emailRef, passwordRef });

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  const signupNavigateHandler = () => navigate('/auth?page=signup');

  return (
    <>
      <FormWrapper onSubmit={submitHandler}>
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
