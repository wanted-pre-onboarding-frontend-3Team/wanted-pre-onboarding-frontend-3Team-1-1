import React, { useEffect } from 'react';

import Input from './Input';

import SubmitButton from './SubmitButton';

const initialState = { email: '', password: '' };
const AuthContainer = ({ status }) => {
  const [info, setInfo] = React.useState(initialState);
  useEffect(() => {
    setInfo(initialState);
  }, [status]);
  const onFormSubmit = (e) => {
    e.preventDefault();
  };
  const getEmail = (e) => {
    // if (!e.target.value.match(/ddd/)) {
    //   console.log('ddd');
    // }// util 함수 만들기
    setInfo({ ...info, email: e.target.value });
  };
  return (
    <div className="auth">
      <form onSubmit={onFormSubmit}>
        <Input type="email" label="ID" placeholder="example@email.com" val={info.email} func={getEmail} />
        <Input type="password" label="PW" placeholder="8자 이상" val={info.password} func={() => console.log('dd')} />
        <div className="alert">dd</div>
        <SubmitButton text={status} />
      </form>
    </div>
  );
};
export default AuthContainer;
