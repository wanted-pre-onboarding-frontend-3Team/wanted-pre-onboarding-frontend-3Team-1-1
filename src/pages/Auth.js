import { useState } from 'react';
import styled from 'styled-components';
import SignIn from '../components/auth/SignIn';
import SignUp from '../components/auth/SignUp';

const Auth = () => {
  const [member, setMember] = useState(true);
  return <StyledWrapper>{member ? <SignIn setMember={setMember} /> : <SignUp setMember={setMember} />}</StyledWrapper>;
};

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 0 20px;
`;

export default Auth;
