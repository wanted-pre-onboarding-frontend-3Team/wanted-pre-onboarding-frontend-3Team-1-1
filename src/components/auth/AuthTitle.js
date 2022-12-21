import styled from 'styled-components';

const AuthTitle = ({ title }) => {
  return <Title>{title}</Title>;
};

const Title = styled.h1`
  font-size: 20px;
  font-weight: 400;
  line-height: 28px;
`;

export default AuthTitle;
