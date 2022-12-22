import styled from 'styled-components';

const AuthButton = ({ onClick, disabled, children }) => {
  return (
    <ButtonUI disabled={disabled} onClick={onClick}>
      {children}
    </ButtonUI>
  );
};

const ButtonUI = styled.button`
  appearance: none;
  border: none;
  width: 400px;
  height: 40px;
  font-size: 16px;
  border-radius: 8px;
  font-weight: 400px;
  line-height: 24px;
  padding: 0 12px;
  background: #0085ff;
  color: #fff;
  box-shadow: 0 1px 3px rgb(0 0 0 / 10%), 0 2px 1px rgb(0 0 0 / 6%), 0 1px 1px rgb(0 0 0 / 8%);
  cursor: pointer;
  margin-bottom: 10px;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

export default AuthButton;
