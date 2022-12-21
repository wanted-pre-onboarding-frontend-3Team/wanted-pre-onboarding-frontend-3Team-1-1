import { useCallback, useState } from 'react';
import { validateId, validatePassword } from '../../utils';
import styled from 'styled-components';

const AuthForm = ({ type, setType }) => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [isVerified, setIsVerified] = useState(false);

  const onChangeType = useCallback(
    (e) => {
      e.preventDefault();
      const type = e.target.innerText;
      setType(type);
    },
    [setType],
  );

  const onChange = useCallback(
    (e) => {
      const { id: targetId, value: targetValue } = e.target;
      if (targetId === 'id') {
        setId(targetValue);
        setIsVerified(validateId(targetValue) && validatePassword(password));
      } else if (targetId === 'password') {
        setPassword(targetValue);
        setIsVerified(validateId(id) && validatePassword(targetValue));
      }
    },
    [id, password],
  );

  return (
    <Form onSubmit={onSubmit} id={type}>
      <Title>{type}</Title>
      <Wrapper>
        <InputName>아이디</InputName>
        <Span>*</Span>
      </Wrapper>
      <Input type="email" onChange={onChange} placeholder="이메일을 입력해주세요." />
      <Wrapper>
        <InputName>비밀번호</InputName>
        <Span>*</Span>
      </Wrapper>
      <Input type="password" onChange={onChange} placeholder="7자리 이상 입력해주세요." />
      <Submit type="submit" active={isVerified} disabled={!isVerified}>
        {type}
      </Submit>
      <AchorType onClick={onChangeType}>{type === '로그인' ? '회원가입' : '로그인'}</AchorType>
    </Form>
  );
};

export default AuthForm;

const Section = styled.section`
  max-width: 400px;
  max-height: 400px;
  margin-top: 10%;
  margin-left: auto;
  margin-right: auto;
`;

const Form = styled.form`
  max-width: 400px;
  max-height: 400px;
  margin-top: 10%;
  margin-left: auto;
  margin-right: auto;
  font-size: 14px;
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  border: solid 1px #e8e8e8;
  width: 100%;
  height: 40px;
  font-size: 1em;
  border-radius: 8px;
  width: 100%;
  margin-bottom: 0.5em;
  padding-left: 0.5em;

  &:focus {
    outline: none;
    border-color: #0085ff;
    box-shadow: 0 0 2px #0085ff;
  }
`;

const Span = styled.span`
  color: red;
`;

const Wrapper = styled.div`
  margin-top: 0.5em;
  margin-bottom: 0.5em;
`;

const InputName = styled.p`
  display: inline;
  font-weight: 600;
  margin-right: 0.3em;
  color: #585757;
`;

const Title = styled.h1`
  font-weight: 600;
  font-size: 1.5em;
  color: #585757;
  margin-bottom: 1.2em;
`;

const Submit = styled.button`
  width: 100%;
  height: 40px;
  background-color: #0085ff;
  box-shadow: 0 1px 3px rgb(0 0 0 / 10%), 0 2px 1px rgb(0 0 0 / 6%), 0 1px 1px rgb(0 0 0 / 8%);
  color: #fff;
  font-weight: 600;
  outline: none;
  border: none;
  border-radius: 8px;
  font-size: 1.2em;
  margin-top: 0.3em;
`;

const AchorType = styled.a`
  color: #0085ff;
  text-align: right;
  font-size: 1em;
  margin-top: 0.5em;
`;
