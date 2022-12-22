import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import useForm from '../../hooks/useForm';
import { useModelContext } from '../../store/ModelContext';
import Button from '../Button';
import Label from '../Label';
import TextInput from '../TextInput';

const INIT_FORM = {
  email: '',
  password: '',
};

const JoinForm = () => {
  const navigate = useNavigate();

  const { account, isSuccess, isError } = useModelContext();
  const { form, validation, register } = useForm(INIT_FORM);

  const requestJoin = useCallback(
    async (e) => {
      e.preventDefault();

      const response = await account.join(form);

      if (isSuccess(response)) {
        localStorage.setItem('token', response.data.access_token);
        alert('회원가입에 성공하였습니다.');
        navigate('/', { replace: true });
      } else if (isError(response)) {
        alert(response.data.message);
      }
    },
    [account, form, isError, isSuccess, navigate],
  );

  return (
    <StyledForm id="join-form" onSubmit={requestJoin}>
      <Label>회원가입</Label>
      <TextInput type="email" title="아이디" message="이메일 형식으로 입력해 주세요." required {...register('email')} />
      <TextInput
        type="password"
        title="비밀번호"
        message="최소 8자 이상 입력해 주세요."
        minLength={8}
        required
        {...register('password')}
      />
      <Button disabled={!validation}>회원가입</Button>
    </StyledForm>
  );
};

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export default JoinForm;
