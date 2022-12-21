import React, { useEffect } from 'react';

import Input from './Input';

import SubmitButton from './SubmitButton';

import { emailValidation, passwordValidation } from '../../utils/formValidation';

import styled from 'styled-components';

const initialState = { email: '', password: '' };
const AuthContainer = ({ status }) => {
  const [info, setInfo] = React.useState(initialState);
  const [alert, setAlert] = React.useState('');
  const [isDisabled, setDisabled] = React.useState(true);
  useEffect(() => {
    setInfo(initialState);
  }, [status]);
  const onFormSubmit = (e) => {
    e.preventDefault();
  };
  const getEmail = (e) => {
    if (!emailValidation(e.target.value)) {
      setAlert('이메일 형식에 맞게 입력해 주세요!');
    } else {
      setAlert('');
    }
    setDisabled(true);
    setInfo({ ...info, email: e.target.value });
  };
  const getPw = (e) => {
    if (!passwordValidation(e.target.value)) {
      setAlert('비밀번호는 총 8자 이상이여야 합니다');
      setDisabled(true);
    } else {
      setAlert('');
      setDisabled(false);
    }
    setInfo({ ...info, password: e.target.value });
  };
  return (
    <div>
      <AuthForm onSubmit={onFormSubmit}>
        <Input type="email" label="ID" placeholder="example@email.com" val={info.email} func={getEmail} />
        <Input type="password" label="PW" placeholder="8자 이상" val={info.password} func={getPw} />
        <Alert Alert className="alert">
          {alert}
        </Alert>
        <SubmitButton text={status} disabled={isDisabled} />
      </AuthForm>
    </div>
  );
};

const AuthForm = styled.form`
  width: 900px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-radius: 12px;
  filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 25%));
`;
const Alert = styled.div`
  height: 25px;
`;
export default AuthContainer;
