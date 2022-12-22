import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import useAuthForm from '../../hooks/useAuthForm';
import AuthButton from '../UI/AuthButton';
import AuthEmail from './AuthEmail';
import AuthPassword from './AuthPassword';

const SignupForm = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const { submitHandler, inputValidHandler, formIsValid, error } = useAuthForm({ emailRef, passwordRef });

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  return (
    <FormWrapper onSubmit={submitHandler}>
      <AuthEmail inputRef={emailRef} validHandler={inputValidHandler} />
      <AuthPassword inputRef={passwordRef} validHandler={inputValidHandler} />
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <AuthButton title="회원가입" disabled={!formIsValid} />
    </FormWrapper>
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

export default SignupForm;
