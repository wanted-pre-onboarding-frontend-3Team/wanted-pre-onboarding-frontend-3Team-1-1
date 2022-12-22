import styled from 'styled-components';

const AuthButton = ({ onClick, title, disabled }) => {
  return (
    <ButtonUI disabled={disabled} onClick={onClick}>
      {title}
    </ButtonUI>
  );
};

const ButtonUI = styled.button`
  appearance: none;
  border: none;
  font-size: 16px;
  font-weight: 400;
  width: 60px;
  height: 40px;
  line-height: 24px;
  padding: 0 12px;
  background-color: #0085ff;
  box-shadow: 0 1px 3px rgb(0 0 0 / 10%), 0 2px 1px rgb(0 0 0 / 6%), 0 1px 1px rgb(0 0 0 / 8%);
  color: #fff;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

export default AuthButton;
