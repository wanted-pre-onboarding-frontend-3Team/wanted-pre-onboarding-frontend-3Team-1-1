import styled from 'styled-components';
import TextInput from '../TextInput';
import useForm from '../../hooks/useForm';
import Button, { BUTTON_COLOR_WHITE } from '../Button';
import { useCallback } from 'react';
import { useModelContext } from '../../store/ModelContext';
import { useNavigate } from 'react-router-dom';
import Label from '../Label';

const INIT_FORM = {
  email: '',
  password: '',
};

const LoginForm = () => {
  const navigate = useNavigate();

  const { account, isSuccess, isError } = useModelContext();
  const { setValue, form, validation } = useForm('login-form', INIT_FORM);

  const requestLogin = useCallback(
    async (e) => {
      e.preventDefault();

      const response = await account.login(form);

      if (isSuccess(response)) {
        localStorage.setItem('token', response.data.access_token);
        navigate('/', { replace: true });
      } else if (isError(response)) {
        alert('로그인 실패, 아이다나 비밀번호를 확인해 주세요.');
      }
    },
    [account, form, isError, isSuccess, navigate],
  );

  return (
    <StyledForm id="login-form" onSubmit={requestLogin}>
      <Label>로그인</Label>
      <TextInput type="text" name="email" title="아이디" required onChange={setValue} />
      <TextInput type="password" name="password" title="비밀번호" required onChange={setValue} />
      <Button disabled={!validation}>로그인</Button>
      <Button to="/auth?page=join" color={BUTTON_COLOR_WHITE}>
        회원가입
      </Button>
    </StyledForm>
  );
};

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export default LoginForm;
