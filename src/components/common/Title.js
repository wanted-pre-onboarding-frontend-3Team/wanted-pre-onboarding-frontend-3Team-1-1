import styled from 'styled-components';

const Title = ({ text }) => {
  return <H1>{text}</H1>;
};

const H1 = styled.h1`
  font-size: 20px;
  font-weight: 400;
  line-height: 28px;
  margin: 20px;
`;

export default Title;
