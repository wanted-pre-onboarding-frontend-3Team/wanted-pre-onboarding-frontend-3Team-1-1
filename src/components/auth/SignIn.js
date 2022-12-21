import { useState } from 'react';
import useAxiosFunction from '../../hooks/useAxiosFunction';
import useForm from '../../hooks/useForm';
import { StyledForm, StyledFormInput, StyledFormBtn } from '../../style/formStyle';

const SignIn = ({ setMember }) => {
  const [response, error, loading, axiosFetch] = useAxiosFunction();
  const login = () => {
    axiosFetch({
      method: 'POST',
      url: '/auth/signin',
      headers: { 'Content-Type': 'application/json' },
      data: values,
    });
    const accessToken = response.access_token;
    localStorage.setItem('Authorization', `Bearer ${accessToken}`);
  };

  const [values, handleChange, handleSubmit] = useForm(login);

  return (
    <StyledForm maxWidth="300px" onSubmit={handleSubmit}>
      <h1>로그인</h1>
      <label htmlFor="email">이메일</label>
      <StyledFormInput
        type="email"
        name="email"
        autoComplete="off"
        onChange={handleChange}
        value={values.email || ''}
        required
      />
      <label htmlFor="password">비밀번호</label>
      <StyledFormInput
        type="password"
        name="password"
        autoComplete="off"
        onChange={handleChange}
        value={values.password || ''}
        required
      />
      <StyledFormBtn bgColor="#339DFF" type="submit">
        로그인
      </StyledFormBtn>
      <StyledFormBtn bgColor="#339DFF" type="button" onClick={() => setMember(false)}>
        회원가입
      </StyledFormBtn>
    </StyledForm>
  );
};

export default SignIn;
