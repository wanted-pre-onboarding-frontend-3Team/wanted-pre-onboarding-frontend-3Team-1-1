import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useSign from '../../hooks/useSign';
import Button from '../common/Button';
import { sign } from '../apis/auth';
import styled from 'styled-components';

const SignForm = () => {
  const { email, setEmail, password, setPassword, emailValid, passwordValid } = useSign();
  const [canSubmit, setCanSubmit] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setCanSubmit(emailValid && passwordValid);
  }, [emailValid, passwordValid]);

  const handleSign = async (e, type) => {
    e.preventDefault();
    await sign(email, password, type)
      .then((success) => {
        if (success) navigate('/todo');
      })
      .catch();
  };

  return (
    <Container className="flex flex-col w-full h-full items-center justify-center w-full pb-14">
      <Form className="flex flex-col w-full px-28">
        <Input
          placeholder="이메일"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border my-1 p-1"
        />
        {emailValid || <Warn>이메일 형식을 맞춰주세요. (someone@example.com)</Warn>}
        <Input
          placeholder="비밀번호"
          value={password}
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          className="border my-1 p-1"
        />
        {passwordValid || <Warn>비밀번호는 8글자 이상이어야 합니다.</Warn>}
        <Button text="로그인" handleClick={(e) => handleSign(e, 'signin')} disabled={!canSubmit} />
        <Button text="회원가입" handleClick={(e) => handleSign(e, 'signup')} disabled={!canSubmit} />
      </Form>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Input = styled.input`
  width: 100%;
  margin: 4px 0;
  padding: 8px;
  border: solid 1px;
  border-color: #dddddd;
  border-radius: 2px;
`;

const Warn = styled.div`
  width: 100%;
  margin: 4px 0;
  font-size: small;
  color: #64748b;
`;

export default SignForm;
