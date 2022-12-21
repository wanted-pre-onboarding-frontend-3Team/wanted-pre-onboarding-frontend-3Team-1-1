import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { signin, signup } from '../services/auth';

import styled from 'styled-components';
import AuthContext from '../store/authContext';
import Input from '../components/auth/Input';
import Button from '../components/auth/Button';

const Auth = () => {
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();

  const [enteredInput, setEnteredInput] = useState({
    email: '',
    password: '',
  });
  const [isValid, setIsValid] = useState({
    email: false,
    password: false,
  });
  const [validForm, setValidForm] = useState(false);
  const [clickBtn, setClickBtn] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (authCtx.isLogin) navigate('/todo');

    if (isValid.email && isValid.password) setValidForm(true);
    else setValidForm(false);
  }, [isValid]);

  const submitHandler = (e) => {
    e.preventDefault();

    if (validForm) {
      if (clickBtn === '로그인') {
        signin(enteredInput.email, enteredInput.password)
          .then((res) => {
            authCtx.login(JSON.stringify(res.data.access_token));
          })
          .catch((err) => {
            setErrorMessage(err.response.data.message);
          });
      }
      if (clickBtn === '회원가입') {
        signup(enteredInput.email, enteredInput.password)
          .then(() => {
            setErrorMessage('회원가입이 완료되었습니다. 로그인해주세요.');
          })
          .catch((err) => {
            setErrorMessage(err.response.data.message);
          });
      }
    }
  };

  return (
    <AuthWrap onSubmit={submitHandler} noValidate>
      <h1>AUTH</h1>
      <p>{errorMessage}</p>
      <Input
        type="email"
        label="아이디"
        placeholder="이메일 형식에 맞게 입력해 주세요."
        isValid={isValid}
        setIsValid={setIsValid}
        enteredInput={enteredInput}
        setEnteredInput={setEnteredInput}
      />
      <Input
        type="password"
        label="비밀번호"
        placeholder="8자리 이상 입력해 주세요."
        isValid={isValid}
        setIsValid={setIsValid}
        enteredInput={enteredInput}
        setEnteredInput={setEnteredInput}
      />
      <ButtonWrap>
        <Button name="로그인" validForm={validForm} setClickBtn={setClickBtn} />
        <Button name="회원가입" validForm={validForm} setClickBtn={setClickBtn} />
      </ButtonWrap>
    </AuthWrap>
  );
};

const AuthWrap = styled.form`
  width: 400px;
  margin: 60px auto 0;

  h1 {
    font-size: 20px;
    font-weight: 400;
    line-height: 28px;
  }

  p {
    margin-bottom: 25px;
    font-size: 12px;
    color: #aaa;
  }
`;

const ButtonWrap = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;

export default Auth;
