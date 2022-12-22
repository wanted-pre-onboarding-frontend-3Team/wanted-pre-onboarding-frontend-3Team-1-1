import { useCallback, useContext, useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import AuthContext from '../store/auth/authContext';
import useHttp from './useHttp';

const INIT_FORM = { email: false, password: false };

const useAuthForm = (ref) => {
  const [isValid, setIsValid] = useState(INIT_FORM);
  const [formIsValid, setFormIsValid] = useState(false);

  const [searchParams] = useSearchParams();
  const { setLogin } = useContext(AuthContext);
  const navigate = useNavigate();

  const { sendRequest, error } = useHttp();

  const isLoginPage = !searchParams.get('page');

  useEffect(() => {
    const isValidForm = Object.values(isValid).every((valid) => valid === true);

    setFormIsValid(isValidForm);
  }, [isValid]);

  const inputValidHandler = useCallback((field, valid) => setIsValid((prev) => ({ ...prev, [field]: valid })), []);

  const successHandler = (data) => {
    setLogin(data.access_token);
    if (!isLoginPage) alert('회원가입이 완료되었습니다.');

    navigate('/', { replace: true });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    sendRequest(
      {
        url: isLoginPage ? '/auth/signin' : '/auth/signup',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: {
          email: ref.emailRef.current.value,
          password: ref.passwordRef.current.value,
        },
      },
      successHandler,
    );
  };

  return { submitHandler, inputValidHandler, formIsValid, error };
};

export default useAuthForm;
