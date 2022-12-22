import { useCallback, useContext, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import useHttp from '../../hooks/useHttp';
import AuthContext from '../../store/auth/authContext';
import AuthTitle from './AuthTitle';

const LoginForm = () => {
  const [isValid, setIsValid] = useState({ email: false, password: false });
  const [formIsValid, setFormIsValid] = useState(false);

  const navigate = useNavigate();

  const authCtx = useContext(AuthContext);

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const sendRequest = useHttp();

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

  return (
    <FormWrapper onSubmit={loginHandler}>
      <AuthTitle title="로그인" />
    </FormWrapper>
  );
};

const FormWrapper = styled.form`
  margin-top: 30px;
`;

export default LoginForm;
