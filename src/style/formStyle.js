import styled, { css } from 'styled-components';

const sharedStyled = css`
  height: 40px;
  border-radius: 5px;
  border: 1px solid #ddd;
  margin: 10px 0 20px 0;
  padding: 20px;
  box-sizing: border-box;
`;

export const StyledForm = styled.form`
  width: 100%;
  max-width: ${({ maxWidth }) => maxWidth};
  padding: 40px;
  background-color: #fff;
  border-radius: 10px;
  box-sizing: border-box;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);

  h1 {
    text-align: center;
    margin-bottom: 15px;
  }
`;

export const StyledFormInput = styled.input`
  display: block;
  width: 100%;
  ${sharedStyled}
`;

export const StyledFormBtn = styled.button`
  display: block;
  background-color: ${({ bgColor }) => bgColor};
  color: #fff;
  border: 0.5px;
  border-radius: 5px;
  height: 40px;
  width: 100%;
  margin: 5px auto;
  padding: 0;
  cursor: pointer;
  box-sizing: border-box;

  &:disabled {
    cursor: default;
    opacity: 0.5;
    background: #555;
  }
`;

export const StyledFormError = styled.div`
  color: red;
  font-size: 0.9rem;
  margin: 0 5px 20px 5px;
`;
