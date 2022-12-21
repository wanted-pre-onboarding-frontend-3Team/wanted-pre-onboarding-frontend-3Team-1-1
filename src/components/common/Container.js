import styled from 'styled-components';

const Container = ({ children }) => {
  return <Section>{children}</Section>;
};

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export default Container;
