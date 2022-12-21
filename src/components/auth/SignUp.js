import useAxiosFunction from '../../hooks/useAxiosFunction';
import useForm from '../../hooks/useForm';
import { StyledForm, StyledFormInput, StyledFormBtn, StyledFormError } from '../../style/formStyle';

const SignUp = ({ setMember }) => {
  const [response, error, loading, axiosFetch] = useAxiosFunction();

  const register = () => {
    axiosFetch({
      method: 'POST',
      url: '/auth/signup',
      headers: { 'Content-Type': 'application/json' },
      data: values,
    });
    const accessToken = response.access_token;
    localStorage.setItem('Authorization', `Bearer ${accessToken}`);
  };
  const [values, handleChange, handleSubmit] = useForm(register);

  if (loading) {
    return <div>loading...</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <StyledForm maxWidth="300px" onSubmit={handleSubmit}>
      <h1>회원가입</h1>
      <label htmlFor="email">이메일</label>
      <StyledFormInput
        type="email"
        name="email"
        autoComplete="off"
        onChange={handleChange}
        value={values.email || ''}
        required
      />
      {/* <StyledFormError>
        <p>{!validPwd ? pwdErrMsg : ''}</p>
      </StyledFormError> */}
      <label htmlFor="password">비밀번호</label>
      <StyledFormInput
        type="password"
        name="password"
        autoComplete="off"
        onChange={handleChange}
        value={values.password || ''}
        required
      />
      {/* <StyledFormError>
        <p>{!validPwd ? pwdErrMsg : ''}</p>
      </StyledFormError> */}
      <StyledFormBtn type="submit" bgColor="#339DFF">
        가입하기
      </StyledFormBtn>
      <StyledFormBtn type="button" bgColor="#339DFF" onClick={() => setMember(true)}>
        로그인
      </StyledFormBtn>
    </StyledForm>
  );
};

export default SignUp;
